import { useEffect } from 'react';
import { oAuth2Client } from './OAuthClient';

function Callback() {
    useEffect(() => {
        console.log("Callback");
        const codeVerifier = sessionStorage.getItem("PKCE");
        oAuth2Client.authorizationCode.getTokenFromCodeRedirect(
            document.location,
            {
              /**
               * The redirect URI is not actually used for any redirects, but MUST be the
               * same as what you passed earlier to "authorizationCode"
               */
              redirectUri: 'http://localhost:3000/auth/callback',
          
              /**
               * This is optional, but if it's passed then it also MUST be the same as
               * what you passed in the first step.
               *
               * If set, it will verify that the server sent the exact same state back.
               */
              state: 'some-string',
          
              codeVerifier,
          
            }
          ).then((token) => {
            sessionStorage.setItem("token", token.accessToken);
            sessionStorage.removeItem("PKCE");
            window.location.href = "/";
          });
    }, []);
}

export default Callback;