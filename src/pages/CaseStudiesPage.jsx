import PageHero from '../components/PageHero.jsx';
import CaseStudies from '../components/CaseStudies.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const CaseStudiesPage = () => {
  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Client Success Stories"
        highlight="Real Impact, Real Numbers"
        subtitle="Explore how we've helped enterprises across industries unlock the power of AI — with measurable outcomes that speak for themselves."
      />
      <CaseStudies />
      <CtaBanner />
    </>
  );
};

export default CaseStudiesPage;
