import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";

const { Link } = require("react-router-dom");

const Navbar = ({ user }) => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: "20px" }}>
            <div style={{ textAlign: "left" }}>
                <Link to="/" style={{ padding: "1em" }}>
                    Home
                </Link>
                {user &&
                    <Link to="/items" style={{ padding: "1em" }}>
                        Items
                    </Link>
                }
                <Link to="/about" style={{ padding: "1em" }}>
                    About
                </Link>
            </div>
            <div style={{ marginLeft: "auto", paddingRight: "1em" }}>
                {user ?
                    <LogoutButton />
                    :
                    <LoginButton />
                }
            </div>
        </nav>
    );
};
export default Navbar;