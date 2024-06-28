import { NavLink } from 'react-router-dom';
import Logo from "../../assets/SELHONO.png"
import '../../index.css';

const Navbar = () => {
    return (
        <nav>
            <ul><li>
                <NavLink to="/" className="logo" ><img src={Logo} alt="logo" /></NavLink>
            </li>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active-link' : '')}>Projects</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

