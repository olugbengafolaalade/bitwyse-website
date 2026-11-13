import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LOGO =
  'https://uploads-ssl.webflow.com/642aaea4ec2dcc5e5d00d195/642ab035972b9ee9eee8b640_Bitwyse%20Logo%20-wbg%202.png'

const links = [
  { to: '/design', label: 'Design' },
  { to: '/projects', label: 'Projects' },
  { to: '/people', label: 'People' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const close = () => {
    setMenuOpen(false)
    setDropOpen(false)
  }

  return (
    <div className="navbar-no-shadow wf-section">
      <div
        data-animation="default"
        data-collapse="medium"
        role="banner"
        className="navbar-no-shadow-container w-nav"
      >
        <div className="container-regular">
          <div className="navbar-wrapper">
            <Link to="/" className="navbar-brand w-nav-brand" onClick={close}>
              <img src={LOGO} width="132" alt="Bitwyse" />
            </Link>
            <nav
              role="navigation"
              className="nav-menu-wrapper w-nav-menu"
              style={menuOpen ? { display: 'block' } : undefined}
              data-nav-menu-open={menuOpen ? '' : undefined}
            >
              <ul role="list" className="nav-menu w-list-unstyled">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={close}
                      className={({ isActive }) => 'nav-link-2' + (isActive ? ' highlighted' : '')}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <div className={'nav-dropdown-2 w-dropdown' + (dropOpen ? ' w--open' : '')}>
                    <div
                      className={'nav-dropdown-toggle-2 w-dropdown-toggle' + (dropOpen ? ' w--open' : '')}
                      role="button"
                      tabIndex={0}
                      aria-expanded={dropOpen}
                      onClick={() => setDropOpen((o) => !o)}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setDropOpen((o) => !o)}
                    />
                    <nav className={'nav-dropdown-list-2 shadow-three mobile-shadow-hide w-dropdown-list' + (dropOpen ? ' w--open' : '')}>
                      {[1, 2, 3].map((n) => (
                        <a key={n} href="#" className="nav-dropdown-link-2 w-dropdown-link" onClick={(e) => e.preventDefault()}>
                          Resource Link {n}
                        </a>
                      ))}
                    </nav>
                  </div>
                </li>
                <li className="mobile-margin-top-11">
                  <div className="nav-button-wrapper">
                    <Link to={{ pathname: '/', hash: '#Contact-sales' }} onClick={close} className="button-primary-2 w-button">
                      Contact Sales
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            <div
              className={'menu-button-2 w-nav-button' + (menuOpen ? ' w--open' : '')}
              role="button"
              tabIndex={0}
              aria-label="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setMenuOpen((o) => !o)}
            >
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
