import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const services = [
  {
    title: "Custom AI Development",
    desc: "Bespoke AI models and intelligent systems engineered for your unique workflows and business objectives.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    title: "Generative AI & LLM Solutions",
    desc: "Harness the power of GPT-4, Claude, and open-source LLMs with fine-tuned models and RAG pipelines.",
    className: "card-icon--orange",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8M8 14h5"/>
      </svg>
    )
  },
  {
    title: "AWS Cloud AI Integration",
    desc: "Leverage AWS Bedrock, SageMaker, and Lambda to build scalable, production-ready AI infrastructure.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    )
  },
  {
    title: "Business Process Automation",
    desc: "Automate repetitive tasks, optimize workflows, and reduce operational costs with intelligent automation.",
    className: "card-icon--blue",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <circle cx="12" cy="12" r="8" strokeDasharray="2 4"/>
      </svg>
    )
  },
  {
    title: "AI Consulting & Strategy",
    desc: "Expert guidance on AI adoption, roadmap planning, and ROI-driven strategy for enterprise transformation.",
    className: "card-icon--orange",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    )
  },
  {
    title: "Data Engineering & MLOps",
    desc: "End-to-end data pipelines, feature engineering, model monitoring, and CI/CD for ML systems at scale.",
    className: "card-icon--blue",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    )
  }
];

const Services = () => {
  const setRevealRef = useScrollReveal();

  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-header reveal" ref={setRevealRef}>
          <div className="section-tag">Our Capabilities</div>
          <h2>Enterprise AI Services</h2>
          <p>From strategy to deployment, we deliver end-to-end AI solutions tailored to your business needs.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card reveal stagger-${index + 1}`} 
              ref={setRevealRef}
            >
              <div className={`card-icon ${service.className || ''}`}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className="card-link">
                Learn More 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
