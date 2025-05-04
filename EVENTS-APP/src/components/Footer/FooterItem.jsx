import { Link } from 'react-router-dom';

function FooterItem({navItem}) {
  return (
    <li  
      className="nav__item"
    >
      <Link to={navItem.direction} className="nav__link">
        {navItem.icon}
        {navItem.name}
      </Link>
    </li>
  )
}

export default FooterItem;