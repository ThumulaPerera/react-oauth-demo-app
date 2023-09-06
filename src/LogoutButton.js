import Button from '@mui/joy/Button';

function LogoutButton() {
    return (
        <a href={"/auth/logout"}>
            <Button color="neutral">Log out</Button>
        </a>
    );
}

export default LogoutButton;