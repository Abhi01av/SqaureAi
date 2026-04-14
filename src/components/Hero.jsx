import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-warm" id="hero">
      <div className="hero-layout">

        {/* ── LEFT: copy ── */}
        <div className="hero-warm-content">
          <div className="warm-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Accelerating Intelligent Success
          </div>
          <h1 className="warm-headline">
            Seamless AI Automation.<br/>
            <span className="warm-gradient-text">For a Thriving Enterprise.</span>
          </h1>
          <p className="warm-subheadline">
            Dot Square empowers your business with intelligent, customized AI solutions that automate complex workflows, boost efficiency, and foster human connection.
          </p>
          <div className="warm-cta-group">
            <a href="#contact" className="btn-warm-primary">Start Your Transformation</a>
            <a href="#services" className="btn-warm-outline">Explore Our Solutions</a>
          </div>
          <div className="aws-trust-pill">
            <svg width="24" height="16" viewBox="0 0 40 24" fill="#854F0B">
              <text x="0" y="18" fontFamily="Arial Black" fontSize="14" fontWeight="900">aws</text>
            </svg>
            <span>Advanced Tier Service Partner</span>
          </div>
        </div>

        {/* ── RIGHT: visual panel ── */}
        <div className="hero-visual-panel">

          {/* main dashboard card */}
          <div className="hv-card hv-card-main">
            <div className="hv-card-topbar">
              <div className="hv-dots">
                <span className="hv-dot red"></span>
                <span className="hv-dot yellow"></span>
                <span className="hv-dot green"></span>
              </div>
              <span className="hv-card-title">AI Workflow Engine</span>
            </div>
            <div className="hv-bars">
              {[88, 65, 92, 74, 55, 80].map((h, i) => (
                <div key={i} className="hv-bar-wrap">
                  <div className="hv-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
                </div>
              ))}
            </div>
            <div className="hv-card-footer">
              <span className="hv-status-dot"></span>
              <span>Processing 1,240 tasks / min</span>
            </div>
          </div>

          {/* floating stat badges */}
          <div className="hv-badge hv-badge-1">
            <div className="hv-badge-icon">⚡</div>
            <div>
              <div className="hv-badge-num">98%</div>
              <div className="hv-badge-label">Efficiency Gain</div>
            </div>
          </div>

          <div className="hv-badge hv-badge-2">
            <div className="hv-badge-icon">🤖</div>
            <div>
              <div className="hv-badge-num">50+</div>
              <div className="hv-badge-label">AI Workflows</div>
            </div>
          </div>

          {/* secondary info card */}
          <div className="hv-card hv-card-secondary">
            <div className="hv-secondary-row">
              <div className="hv-icon-circle blue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <div>
                <div className="hv-sec-title">Response Time</div>
                <div className="hv-sec-val">↓ 3× faster</div>
              </div>
            </div>
            <div className="hv-secondary-row">
              <div className="hv-icon-circle teal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <div className="hv-sec-title">Cost Savings</div>
                <div className="hv-sec-val">↑ 40% avg</div>
              </div>
            </div>
          </div>

          {/* background glow */}
          <div className="hv-glow"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
