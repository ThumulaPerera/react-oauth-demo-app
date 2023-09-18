import { oAuth2Client } from '../OAuthClient';
import { OAuth2Error } from '../lib/oidc-client/error.ts';
import { generateCodeVerifier } from '../lib/oidc-client/auth-code-client.ts';

class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

export const performGetWithRetry = async (url) => {

    try {
        return await performGet(url);
    } catch (error) {
        if (error instanceof HttpError && error.status === 401) {
            // We got 401 Unauthorized response from API GW. Our access token maybe expired.

            // Try to refresh the token
            try {
                const newToken =  await oAuth2Client.refreshToken(sessionStorage.getItem("refreshToken"));
                sessionStorage.setItem("accessToken", newToken.accessToken);
                sessionStorage.setItem("refreshToken", newToken.refreshToken);
                sessionStorage.setItem("idToken", newToken.idToken);
            } catch (error) {

                if (error instanceof OAuth2Error && error.oauth2Code === "invalid_grant") {
                    // refresh token has also expired

                    // remove tokens from session storage
                    sessionStorage.clear();

                    // reinitate login
                    const codeVerifier = await generateCodeVerifier();
                    sessionStorage.setItem("PKCE", codeVerifier);
            
                    document.location = await oAuth2Client.authorizationCode.getAuthorizeUri({
                      codeVerifier,
                    });
                    return;
                }
                console.log("Failed to refresh token. Error: " + error);
                throw error;
            }

            return await performGet(url);
        } else {
            throw error;
        }
    }
}

const performGet = (url) => {
    return fetch(url, {
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem("accessToken"),
        }
    })
        .then(response => {
            const status = response.status;
            if (!response.ok) {
                throw new HttpError("Error fetching API. Status: " + status, status);
            }
            return response.text();
        })
        .then(body => {
            console.log("Response fetched:");
            console.log(body);
            return body;
        })
        .catch(error => {
            console.log(error);
            throw error; // Re-throw the error to propagate it
        });
}
