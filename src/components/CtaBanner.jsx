import { useScrollReveal } from '../hooks/useScrollReveal';
import './CtaBanner.css';

const CtaBanner = () => {
  const setRevealRef = useScrollReveal();

  return (
    <section className="cta-banner" id="contact">
      <div className="cta-bg-svg">
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ctaGrad" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#0a3bfe" stopOpacity="0.14"/>
              <stop offset="100%" stopColor="#000" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect width="1440" height="300" fill="url(#ctaGrad)"/>
          <circle cx="200" cy="150" r="200" fill="#7c3aed" opacity="0.05"/>
          <circle cx="1240" cy="100" r="220" fill="#f59e0b" opacity="0.04"/>
        </svg>
      </div>
      <div className="container">
        <div className="cta-content reveal" ref={setRevealRef}>
          <div className="section-tag cta-tag">Start Your AI Journey</div>
          <h2>Ready to Automate Your Future?</h2>
          <p>Let's discuss your AI goals. Our experts will craft a tailored strategy for your business in a free, no-obligation discovery session.</p>
          <div className="cta-actions">
            <a href="mailto:contact@dotsquareai.com" className="btn btn-primary btn-lg">Book a Free Discovery Call</a>
            <div className="cta-contact-info">
              <span>or reach us at</span>
              <a href="mailto:contact@dotsquareai.com">contact@dotsquareai.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
