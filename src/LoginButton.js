import Button from '@mui/joy/Button';

function LoginButton() {
    return (
        <a href={"/auth/login/start"}>
            <Button>Login</Button>
        </a>
    );
}

export default LoginButton;