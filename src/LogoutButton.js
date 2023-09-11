import Button from '@mui/joy/Button';
import { oAuth2Client } from './OAuthClient';

function LogoutButton() {
    const startLogout = async () => {
        const idToken = sessionStorage.getItem("idToken");

        // remove tokens from session storage
        sessionStorage.clear();

        // redirect to oidc logout endpoint
        document.location = await oAuth2Client.authorizationCode.getLogoutUri({
          idTokenHint: idToken,
        });
    }

    return (
        <Button color='neutral' onClick={startLogout}>Logout</Button>
    );
}

export default LogoutButton;