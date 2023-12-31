import Button from '@mui/joy/Button';

function LogoutButton() {
    return (
        <a href={window.config.oauth2ProxyBaseUrl + "/oauth2/sign_out"}>
            <Button color="neutral">Log out</Button>
        </a>
    );
}

export default LogoutButton;