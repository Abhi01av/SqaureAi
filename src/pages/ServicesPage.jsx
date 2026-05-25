import PageHero from '../components/PageHero.jsx';
import Services from '../components/Services.jsx';
import Technologies from '../components/Technologies.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const ServicesPage = () => {
  return (
    <>
      <PageHero
        tag="What We Build"
        title="Enterprise AI Services"
        highlight="Tailored for Scale"
        subtitle="From custom LLM solutions to AWS-native ML infrastructure — we deliver production-grade AI that creates measurable business impact."
      />
      <Services />
      <Technologies />
      <CtaBanner />
    </>
  );
};

export default ServicesPage;
