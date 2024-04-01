import { FaInstagram } from "react-icons/fa6"
import MobileMenu from "./MobileMenu"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="nav-header">
      <nav className="navbar wrapper">
        <Link to="/" className="logo">
          <h1>
            Artsy Active <span>Kids</span>
          </h1>
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/classes" className="nav-link">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav-link">
              Photos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/artsyactivekids/"
            className="social-link"
            target="_blank"
          >
            <FaInstagram size={26} />
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  )
}
export default Navbar
