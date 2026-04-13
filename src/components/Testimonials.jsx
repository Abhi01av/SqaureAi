import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    stars: "★★★★★",
    quote: "Dot Square Automation transformed our document processing pipeline completely. Their AI solution not only cut costs dramatically but delivered accuracy levels we didn't think were achievable.",
    name: "Mark Richardson",
    title: "CTO, FinServe Global",
    initials: "MR"
  },
  {
    stars: "★★★★★",
    quote: "The team's depth of knowledge in AWS AI services is impressive. They built our entire ML infrastructure from scratch in under 3 months. The quality, documentation, and support have been outstanding.",
    name: "Sarah Aguilar",
    title: "VP Engineering, MedTech Solutions",
    initials: "SA",
    color: "linear-gradient(135deg, #378ADD, #185FA5)"
  },
  {
    stars: "★★★★★",
    quote: "We evaluated multiple AI vendors, and Dot Square stood out for their strategic thinking combined with execution speed. The demand forecasting model they delivered exceeded every benchmark we set.",
    name: "James Park",
    title: "Head of Digital, RetailFirst",
    initials: "JP",
    color: "linear-gradient(135deg, #FF9900, #e07b00)"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const setRevealRef = useScrollReveal();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next]);

  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="container">
        <div className="section-header reveal" ref={setRevealRef}>
          <div className="section-tag">Testimonials</div>
          <h2>What Our Clients Say</h2>
          <p>Trusted by enterprises and innovators across industries.</p>
        </div>
        <div className="testimonial-carousel reveal" ref={setRevealRef}>
          <div className="testimonial-track">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card ${i === current ? 'active' : ''}`}>
                <div className="stars">{t.stars}</div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`dot ${i === current ? 'active' : ''}`} 
                  onClick={() => setCurrent(i)}
                ></button>
              ))}
            </div>
            <button className="carousel-btn" onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
