/**
 * Navigation Bar
 * @param {*} children takes the childer of the Navbar element
 */
export function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          { props.children }
        </ul>
      </nav>
    );
}


/**
 * Navigation Title
 * @param {*} href set the redirect location
 * @param {*} icon input to add your own icons
 * @param {*} text set the custom link text of the NavItem
 */
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

/**
 * Navigation Item
 * @param {*} href set the redirect location
 * @param {*} onclick set the onClick event
 * @param {*} icon input to add your own icons
 * @param {*} text set the custom link text of the NavItem
 */
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