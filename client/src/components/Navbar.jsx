import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex space-x-8">
            <Link to="login">Login</Link>
            <Link to="signup">Sign up</Link>
        </nav>
    );
};

export default Navbar;
