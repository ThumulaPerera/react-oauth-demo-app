import Button from '@mui/joy/Button';

function LoginButton() {
    return (
        <a href={window.config.oauth2ProxyBaseUrl + "/oauth2/sign_in"}>
            <Button>Login</Button>
        </a>
    );
}

export default LoginButton;