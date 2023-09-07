import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";

const { Link } = require("react-router-dom");

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: "20px" }}>
            <div style={{ textAlign: "left" }}>
                <ButtonGroup variant="plain" color="primary">

                    <Link to="/" >
                        <Button>
                            Home
                        </Button>
                    </Link>

                    {isLoggedIn &&
                        <Link to="/protected">
                            <Button>Protected Page</Button>
                        </Link>
                    }
                </ButtonGroup>
            </div>
            <div style={{ marginLeft: "auto", paddingRight: "1em" }}>
                {isLoggedIn ?
                    <LogoutButton />
                    :
                    <LoginButton />
                }
            </div>
        </nav>
    );
};
export default Navbar;