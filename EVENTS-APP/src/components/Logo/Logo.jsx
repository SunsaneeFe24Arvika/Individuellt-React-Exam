import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/events" className="page-logo">
        <img src={logo} alt="Where it's@ Logo" className="logo" />
    </Link>
  );
}

export default Logo;