import './Marquee.css';

const Marquee = () => {
  const tags = [
    "AWS Partner", "Custom AI Development", "Generative AI", "LLM Integration",
    "ML Models", "Process Automation", "Cloud AI", "MLOps", "Data Engineering", "AI Strategy"
  ];

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-inner">
          {[...tags, ...tags].map((tag, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-tag">{tag}</span>
              <span className="marquee-sep">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
