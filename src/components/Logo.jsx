import logoMark from '../assests/Untitled design.svg';
import './Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`logo-wrapper logo-${size}`}>
      <img
        src={logoMark}
        alt=""
        className={`logo-mark logo-mark-${size}`}
        aria-hidden="true"
      />
      <div className="logo-name">
        <span className="logo-dot">dot</span><span className="logo-sq">square</span>
      </div>
    </div>
  );
};

export default Logo;
