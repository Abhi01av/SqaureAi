import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-warm" id="hero">
      <div className="hero-warm-content fade-in">
        <div className="warm-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Accelerating Intelligent Success
        </div>
        <h1 className="warm-headline">
          Seamless AI Automation.<br/>
          <span className="warm-gradient-text">For a Thriving Enterprise.</span>
        </h1>
        <p className="warm-subheadline">
          Dot Square empowers your business with intelligent, customized AI solutions that automate complex workflows, boost efficiency, and foster human connection.
        </p>
        <div className="warm-cta-group">
          <a href="#contact" className="btn-warm-primary">Start Your Transformation</a>
          <a href="#services" className="btn-warm-outline">Explore Our Solutions</a>
        </div>
        <div className="aws-trust-pill">
          <svg width="24" height="16" viewBox="0 0 40 24" fill="#854F0B">
            <text x="0" y="18" font-family="Arial Black" font-size="14" font-weight="900">aws</text>
          </svg>
          <span>Advanced Tier Service Partner</span>
        </div>
      </div>
      <div className="hero-warm-visual">
        <div className="glass-shape gs-1"></div>
        <div className="glass-sphere s-1"></div>
      </div>
    </section>
  );
};

export default Hero;
