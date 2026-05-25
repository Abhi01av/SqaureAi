import { lazy, Suspense } from 'react';
import './Hero.css';
const HeroScene = lazy(() => import('./HeroScene'));

const features = [
  {
    title: 'Tailored AI Solutions',
    desc: 'AI systems engineered to fit your exact workflow and business objectives.',
  },
  {
    title: 'Fast Implementation',
    desc: 'Deploy automation and AI tools in weeks, not months.',
  },
  {
    title: 'Measurable Impact',
    desc: 'ROI-focused approach backed by real metrics and clear KPIs.',
  },
];

const avatars = ['MR', 'SA', 'JP', 'KL'];

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* Warm ambient background glow */}
      <div className="hero-ambient" aria-hidden="true" />

      <div className="hero-inner">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            AI Automation · AWS Partner
          </div>

          <h1 className="hero-headline">
            Accelerate Your Business<br />
            With Strategic<br />
            <span className="hero-headline-warm">AI Integration.</span>
          </h1>

          <p className="hero-sub">
            From automation to advanced predictive systems, we help
            companies unlock real value with AI that fits their goals.
          </p>

          {/* 3 feature cards */}
          <div className="hero-cards">
            {features.map((f, i) => (
              <div className="hero-feat-card" key={i}>
                <div className="hfc-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">
              Book a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/about" className="hero-btn-ghost">Learn About Us →</a>
          </div>
        </div>

        {/* ── RIGHT: Three.js animated scene ── */}
        <div className="hero-right" aria-hidden="true">
          <div className="hero-canvas-wrap">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>

          {/* Social proof — bottom right */}
          <div className="hero-social-proof">
            <div className="sp-avatars">
              {avatars.map((a, i) => (
                <div className="sp-avatar" key={i} style={{ zIndex: avatars.length - i }}>
                  {a}
                </div>
              ))}
              <div className="sp-avatar sp-avatar-plus">+</div>
            </div>
            <div className="sp-text">
              <span className="sp-score">4.8 / 5</span>
              <span className="sp-label">1.4k Client Satisfaction</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
