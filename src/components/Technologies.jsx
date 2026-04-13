import { useScrollReveal } from '../hooks/useScrollReveal';
import './Technologies.css';

const techs = [
  { name: "AWS Bedrock", sub: "Bedrock" },
  { name: "SageMaker", sub: "SageMaker" },
  { name: "Lambda", sub: "Lambda" },
  { name: "OpenAI", color: "#10a37f" },
  { name: "Python", color: "#3776ab" },
  { name: "TensorFlow", color: "#ff6f00" },
  { name: "LangChain", color: "#378ADD" },
  { name: "Hugging Face", emoji: "🤗", color: "#ff9d00" },
  { name: "Kubernetes", color: "#326ce5" },
  { name: "Docker", color: "#0db7ed" }
];

const Technologies = () => {
  const setRevealRef = useScrollReveal();

  return (
    <section className="technologies section-pad" id="technologies">
      <div className="container">
        <div className="section-header reveal" ref={setRevealRef}>
          <div className="section-tag">Tech Stack</div>
          <h2>Powered by Best-in-Class Technologies</h2>
          <p>We leverage the most powerful tools in the AI ecosystem to build reliable, cutting-edge solutions.</p>
        </div>
        <div className="tech-grid reveal" ref={setRevealRef}>
          {techs.map((tech, i) => (
            <div key={i} className={`tech-card stagger-${(i % 5) + 1}`}>
              <div className="tech-logo-wrapper" style={{ borderColor: tech.color || 'transparent' }}>
                {tech.sub ? (
                  <div className="aws-tech-logo">
                    <span className="aws-txt">aws</span>
                    <span className="sub-txt">{tech.sub}</span>
                  </div>
                ) : (
                  <div className="tech-txt-logo" style={{ color: tech.color }}>
                    {tech.emoji ? <span className="emoji">{tech.emoji}</span> : tech.name}
                  </div>
                )}
              </div>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
