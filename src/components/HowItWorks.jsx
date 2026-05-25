import { useScrollReveal } from '../hooks/useScrollReveal';
import './HowItWorks.css';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We deep-dive into your business goals, data landscape, and existing infrastructure to craft an AI roadmap aligned with your objectives.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    )
  },
  {
    num: "02",
    title: "AI Design & Development",
    desc: "Our engineers build, train, and fine-tune AI models with rigorous testing cycles, ensuring precision, performance, and fairness at every step.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    num: "03",
    title: "Deploy, Monitor & Scale",
    desc: "We handle production deployment on AWS, implement continuous monitoring, and scale your AI solutions as your business grows.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    )
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
