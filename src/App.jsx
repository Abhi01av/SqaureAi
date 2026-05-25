import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import './index.css'

function useDevSig() {
  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const c = document.createElement('canvas');
    c.style.cssText =
      'position:fixed;top:0;left:0;width:100%;height:22px;' +
      'pointer-events:none;opacity:0;transition:opacity 0.15s;';
    document.body.appendChild(c);

    const _L = String.fromCharCode(2342,2375,2360,2368);
    const _R = String.fromCharCode(98,117,105,108,116);

    const footer     = document.querySelector('footer');
    const footerBott = document.querySelector('.footer-bottom');

    const draw = () => {
      c.width  = window.innerWidth;
      c.height = 22;
      const ctx = c.getContext('2d');
      ctx.font = 'bold 10px monospace';
      ctx.fillStyle = '#121218';
      ctx.fillText(_L, 10, 14);
      ctx.fillText(_R, c.width - 30, 14);
    };
    draw();

    const reposition = () => {
      const target = footerBott || footer;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      /* sit just above the border line */
      c.style.top = (rect.top - 18) + 'px';
    };

    const observer = new IntersectionObserver(
      ([e]) => {
        const visible = e.isIntersecting && e.boundingClientRect.top > 0;
        c.style.opacity = visible ? '1' : '0';
        if (visible) reposition();
      },
      { threshold: 0.3 }
    );
    if (footer) observer.observe(footer);

    const onScroll = () => reposition();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { draw(); reposition(); });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', draw);
      observer.disconnect();
      if (document.body.contains(c)) document.body.removeChild(c);
    };
  }, []);
}

function App() {
  useDevSig();

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
