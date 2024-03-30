import { useEffect, useRef, useState } from "react"
import { FaBars, FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const firstMenuItemRef = useRef(null)
  const menuToggleRef = useRef(null)

  useEffect(() => {
    if (isOpen && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus()
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    menuToggleRef.current.focus()
  }

  return (
    <div className="mobile-menu">
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="navigation"
      >
        <FaBars />
      </button>
      <nav
        id="navigation"
        className={`menu ${isOpen ? "open" : ""}`}
        style={{ opacity: isOpen ? 1 : 0, transition: "opacity .5s" }}
        aria-hidden={!isOpen}
      >
        <ul className="mobile-list">
          <li>
            <Link to="/" className="mobile-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/classes" className="mobile-link">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="mobile-link">
              Photos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mobile-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="mobile-link">
              About
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com/artsyactivekids"
              target="_blank"
              className="mobile-link"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default MobileMenu
