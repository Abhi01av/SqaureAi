import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WhyUs.css';

const StatCard = ({ number, label, suffix = "", isOrange = false }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const setRevealRef = useScrollReveal();

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const target = parseInt(number);
      const duration = 1800;
      const step = Math.ceil(target / (duration / 16));
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [hasStarted, number]);

  const onReveal = (el) => {
    if (el) {
      setHasStarted(true);
      setRevealRef(el);
    }
  };

  return (
    <div className="stat-card reveal" ref={onReveal}>
      <div className={`stat-number ${isOrange ? 'aws-orange' : ''}`}>
        {number === "AWS" ? "AWS" : count}<span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const WhyUs = () => {
  const setRevealRef = useScrollReveal();

  return (
    <section className="why-us section-pad" id="why-us">
      <div className="container">
        <div className="section-header reveal" ref={setRevealRef}>
          <div className="section-tag">Why Dot Square</div>
          <h2>Built for the AI Era</h2>
          <p>We combine deep technical expertise with business acumen to deliver AI solutions that create real value.</p>
        </div>
        
        <div className="stats-row reveal" ref={setRevealRef}>
          <StatCard number="50" suffix="+" label="AI Projects Delivered" />
          <div className="stat-divider"></div>
          <StatCard number="AWS" label="Certified Partner" isOrange />
          <div className="stat-divider"></div>
          <StatCard number="24" suffix="/7" label="Expert Support" />
        </div>

        <div className="why-us-content reveal" ref={setRevealRef}>
          <div className="why-us-features">
            {[
              { title: "Production-Grade Quality", desc: "Every solution we build is designed for real-world scale, reliability, and maintainability." },
              { title: "AWS-Native Architectures", desc: "Deep expertise in the entire AWS AI/ML stack — SageMaker, Bedrock, Rekognition, and more." },
              { title: "Agile, Transparent Delivery", desc: "Iterative sprints, regular demos, and complete visibility into project progress at all times." },
              { title: "Measurable ROI", desc: "We define success metrics upfront and ensure every AI initiative drives tangible business impact." }
            ].map((f, i) => (
              <div key={i} className="why-feature">
                <div className="why-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-us-visual reveal" ref={setRevealRef}>
            <svg viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="why-svg">
              <rect x="20" y="20" width="360" height="340" rx="16" fill="#111116" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
              <line x1="20" y1="100" x2="380" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
              <line x1="20" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
              <line x1="20" y1="260" x2="380" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
              <rect x="60" y="220" width="40" height="80" rx="4" fill="#0a3bfe" opacity="0.5"/>
              <rect x="120" y="160" width="40" height="140" rx="4" fill="#5e8ee7" opacity="0.6"/>
              <rect x="180" y="120" width="40" height="180" rx="4" fill="#0a3bfe" opacity="0.75"/>
              <rect x="240" y="80" width="40" height="220" rx="4" fill="#f59e0b" opacity="0.85"/>
              <rect x="300" y="50" width="40" height="250" rx="4" fill="#7c3aed" opacity="0.80"/>
              <polyline points="80,230 140,180 200,130 260,90 320,60" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="80" cy="230" r="4" fill="#f59e0b"/><circle cx="140" cy="180" r="4" fill="#f59e0b"/><circle cx="200" cy="130" r="4" fill="#f59e0b"/><circle cx="260" cy="90" r="4" fill="#f59e0b"/><circle cx="320" cy="60" r="5" fill="#f59e0b"/>
              <text x="200" y="348" fontFamily="Inter" fontSize="11" fill="rgba(255,255,255,0.35)" textAnchor="middle">AI ROI Growth (Avg. Client)</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
