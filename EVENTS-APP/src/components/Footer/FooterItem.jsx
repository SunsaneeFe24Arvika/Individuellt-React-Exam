

function FooterItem({footerItem}) {
  return (
    <li  
      className="footer__item"
    >
      <button onClick={footerItem.action} className="footer__link">
        {footerItem.icon}
        {footerItem.name}
      </button>
    </li>
  )
}

export default FooterItem;