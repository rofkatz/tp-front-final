import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InnovaIcon from '../Icons/InnovaIcon';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="innova-navbar">
      <NavLink to="/" className="innova-icon" onClick={closeMenu}>
        <InnovaIcon /> Innova Home
      </NavLink>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Menú de navegación"
      >
        ☰
      </button>

      <ul className={`innova-navbar-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="innova-navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `innova-navbar-link ${isActive ? 'active' : ''}`
            }
            onClick={closeMenu}
          >
            Inicio
          </NavLink>
        </li>
        <li className="innova-navbar-item">
          <NavLink
            to="/preguntas-frecuentes"
            className={({ isActive }) =>
              `innova-navbar-link ${isActive ? 'active' : ''}`
            }
            onClick={closeMenu}
          >
            Preguntas frecuentes
          </NavLink>
        </li>
        <li className="innova-navbar-item">
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              `innova-navbar-link ${isActive ? 'active' : ''}`
            }
            onClick={closeMenu}
          >
            Servicios
          </NavLink>
        </li>
        <li className="innova-navbar-item">
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `innova-navbar-link ${isActive ? 'active' : ''}`
            }
            onClick={closeMenu}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
