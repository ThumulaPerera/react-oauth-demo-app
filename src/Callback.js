import { useEffect } from 'react';
import { oAuth2Client } from './OAuthClient';

function Callback() {
    useEffect(() => {
        console.log("Callback");
        const codeVerifier = sessionStorage.getItem("PKCE");
        oAuth2Client.authorizationCode.getTokenFromCodeRedirect(
            document.location,
            {
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