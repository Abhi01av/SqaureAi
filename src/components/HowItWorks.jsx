import { useScrollReveal } from '../hooks/useScrollReveal';
import './HowItWorks.css';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We deep-dive into your business goals, data landscape, and existing infrastructure to craft an AI roadmap aligned with your objectives.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  },
  {
    num: "02",
    title: "AI Design & Development",
    desc: "Our engineers build, train, and fine-tune AI models with rigorous testing cycles, ensuring precision, fairness, and performance at every step.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  {
    num: "03",
    title: "Deploy, Monitor & Scale",
    desc: "We handle production deployment on AWS, implement continuous monitoring, and scale your AI solutions as your business grows.",
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  }
];

const HowItWorks = () => {
  const setRevealRef = useScrollReveal();

  return (
    <section className="how-it-works section-pad" id="how-it-works">
      <div className="container">
        <div className="section-header reveal" ref={setRevealRef}>
          <div className="section-tag">Our Process</div>
          <h2>How We Deliver AI Solutions</h2>
          <p>A structured, transparent approach that ensures your AI initiative succeeds from day one.</p>
        </div>
        <div className="steps-container reveal" ref={setRevealRef}>
          {steps.map((step, index) => (
            <div key={index} className="step-wrapper">
              <div className="step-item">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#378ADD">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
