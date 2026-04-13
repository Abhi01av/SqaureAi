import React from 'react';
import './Logo.css';

const Logo = ({ size = "medium", hideText = false }) => {
  return (
    <div className={`logo-wrapper logo-${size}`}>
      <div className="logo-icon-container">
        <div className="outer-sq"></div>
        <div className="inner-diamond"></div>
        <div className="icon-dot"></div>
      </div>

      {!hideText && (
        <div className="logo-text-container">
          <div className="logo-name">
            <span className="n-dot">dot</span><span className="n-sq">square</span>
          </div>
          <div className="logo-sub">AUTOMATION</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
