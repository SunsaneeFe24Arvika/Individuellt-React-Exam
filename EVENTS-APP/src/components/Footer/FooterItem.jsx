

function FooterItem({footerItem}) {
  return (
    <li  
      className="footer__item"
    >
      <button onClick={footerItem.action} className="footer__link">
        <i className="icon">
        {footerItem.icon}
        {footerItem.name}
        </i>

        
      </button>
    </li>
  )
}

export default FooterItem;