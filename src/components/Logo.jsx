import logoMark from '../assests/neww.svg';
import './Logo.css';

const Logo = ({ size = "medium", hideText = false }) => {
  return (
    <div className={`logo-wrapper logo-${size}`}>
      <div className={`logo-img-container logo-img-${size}`}>
        <img src={logoMark} alt="Dot Square Automation" className="logo-img" />
      </div>

      {!hideText && (
        <div className="logo-text-container">
          <div className="logo-name">
            <span className="n-dot">dot</span><span className="n-sq">square</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
