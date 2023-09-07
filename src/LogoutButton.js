import Button from '@mui/joy/Button';

function LogoutButton() {
    const startLogout = async () => {
        // remove tokens from session storage

        // redirect to oidc logout endpoint

        // In a browser this might work as follows:
        // document.location = await oAuth2Client.authorizationCode.getAuthorizeUri({
        
        //   // URL in the app that the user should get redirected to after authenticating
        //   redirectUri: 'http://localhost:3000/auth/callback',
        
        //   // Optional string that can be sent along to the auth server. This value will
        //   // be sent along with the redirect back to the app verbatim.
        //   state: 'some-string',
        
        //   codeVerifier,
        
        //   scope: ['openid', 'profile'],
        
        // });
    }

    return (
        <Button color='neutral' onClick={startLogout}>Logout</Button>
    );
}

export default LogoutButton;