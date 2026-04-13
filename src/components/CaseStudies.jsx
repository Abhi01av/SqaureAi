import { useScrollReveal } from '../hooks/useScrollReveal';
import './CaseStudies.css';

const cases = [
  {
    tag: "FinTech",
    title: "Intelligent Document Processing Platform",
    desc: "Built an AI-powered document extraction and classification system for a leading financial services firm.",
    metric: "72%",
    label: "reduction in manual processing time",
    bg: "linear-gradient(135deg, #042C53 0%, #185FA5 100%)"
  },
  {
    tag: "Healthcare",
    title: "Predictive Patient Analytics Engine",
    desc: "Developed an ML model that predicts patient readmission risk for a regional hospital network.",
    metric: "40%",
    label: "decrease in 30-day readmission rates",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    tagClass: "industry-tag--health"
  },
  {
    tag: "Retail & E-commerce",
    title: "AI-Powered Demand Forecasting",
    desc: "Deployed a real-time demand forecasting system on AWS for a national retail chain.",
    metric: "$2.4M",
    label: "annual inventory cost savings",
    bg: "linear-gradient(135deg, #0d1b2a 0%, #1b4332 80%)",
    tagClass: "industry-tag--retail"
  }
];

const CaseStudies = () => {
  const setRevealRef = useScrollReveal();

  return (
    <section className="case-studies section-pad" id="case-studies">
      <div className="container">
        <div className="section-header reveal" ref={setRevealRef}>
          <div className="section-tag">Portfolio</div>
          <h2>Client Success Stories</h2>
          <p>Real AI solutions. Measurable outcomes. Transformative impact.</p>
        </div>
        <div className="case-grid">
          {cases.map((c, i) => (
            <div key={i} className={`case-card reveal stagger-${(i % 3) + 1}`} ref={setRevealRef}>
              <div className="case-header" style={{ background: c.bg }}></div>
              <div className="case-body">
                <span className={`industry-tag ${c.tagClass || ''}`}>{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-metric">
                  <span className="metric-num">{c.metric}</span>
                  <span className="metric-label">{c.label}</span>
                </div>
                <a href="#" className="case-cta">
                  Read Case Study 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
