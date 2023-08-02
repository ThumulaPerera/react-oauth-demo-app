import Button from '@mui/joy/Button';

function LogoutButton() {
    return (
        <a href="http://localhost:4180/oauth2/sign_out">
            <Button color="neutral">Log out</Button>
        </a>
    );
}

export default LogoutButton;