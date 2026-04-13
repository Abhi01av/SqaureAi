import { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <Logo size="small" />
        </a>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#why-us" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#case-studies" onClick={() => setIsOpen(false)}>Case Studies</a></li>
          <li><a href="#technologies" onClick={() => setIsOpen(false)}>Technologies</a></li>
          <li><a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Get Started</a></li>
        </ul>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          id="hamburger" 
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
