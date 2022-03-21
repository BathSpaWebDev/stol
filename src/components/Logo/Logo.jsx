import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => <Link to={"/"} ><img src={logo} className="logo" alt="logo" /></Link>;
