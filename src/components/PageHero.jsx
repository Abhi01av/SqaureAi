import './PageHero.css';

const PageHero = ({ tag, title, subtitle, highlight }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-bg"></div>
      <div className="container">
        <div className="page-hero-content">
          {tag && <div className="page-hero-tag">{tag}</div>}
          <h1 className="page-hero-title">
            {title}
            {highlight && <><br /><span className="page-hero-highlight">{highlight}</span></>}
          </h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
