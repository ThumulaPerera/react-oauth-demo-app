import Button from '@mui/joy/Button';
import { generateCodeVerifier } from './lib/oidc-client/auth-code-client.ts';
import { oAuth2Client } from './OAuthClient';

function LoginButton() {
    const startLogin = async () => {
        const codeVerifier = await generateCodeVerifier();
        sessionStorage.setItem("PKCE", codeVerifier);

        document.location = await oAuth2Client.authorizationCode.getAuthorizeUri({
          state: 'some-string',
          codeVerifier,
          scope: ['openid', 'profile', 'email'],
        });
    }

    return (
        <Button onClick={startLogin}>Login</Button>
    );
}

export default LoginButton;