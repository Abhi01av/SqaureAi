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
              {tag === "AWS Partner" && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF9900" style={{ marginRight: '6px' }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                </svg>
              )}
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
