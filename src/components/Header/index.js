import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/CP22-Blog-List/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/CP22-Blog-List/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/CP22-Blog-List/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
