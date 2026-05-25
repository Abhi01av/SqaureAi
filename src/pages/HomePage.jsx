import { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import Services from '../components/Services.jsx';
import WhyUs from '../components/WhyUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

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

const HomePage = () => {
  useDevSig();

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default HomePage;
