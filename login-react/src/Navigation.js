export function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          { props.children }
        </ul>
      </nav>
    );
}
  
export function NavTitle(props) {
    return (
      <li className="nav-logo">
        <a className="nav-link" href={ props.href }>
          <span className="link-text nav-logo-text"> { props.text } </span>
          { props.icon }
        </a>
      </li>
    );
}
  
export function NavItem(props) {
    return (
      <li className="nav-item">
        <a className="nav-link" href={ props.href } onClick={ props.onclick }>
          { props.icon }
          <span className="link-text"> { props.text } </span>
        </a>
      </li>
    );
}