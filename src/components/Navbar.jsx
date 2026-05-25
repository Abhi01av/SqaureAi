import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        <Link to="/" className="nav-logo" onClick={close}>
          <Logo size="small" />
        </Link>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/services"     onClick={close}>Services</NavLink></li>
          <li><NavLink to="/about"        onClick={close}>About</NavLink></li>
          <li><NavLink to="/case-studies" onClick={close}>Case Studies</NavLink></li>
        </ul>

        <a href="#contact" className="nav-cta" onClick={close}>
          Book Consultation
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
