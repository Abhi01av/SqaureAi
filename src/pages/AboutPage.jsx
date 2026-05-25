import PageHero from '../components/PageHero.jsx';
import WhyUs from '../components/WhyUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Technologies from '../components/Technologies.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const AboutPage = () => {
  return (
    <>
      <PageHero
        tag="About Dot Square"
        title="Built for the AI Era"
        highlight="Driven by Results"
        subtitle="We're a team of AI engineers, data scientists, and cloud architects with one mission — to make intelligent automation accessible to every enterprise."
      />
      <WhyUs />
      <HowItWorks />
      <Technologies />
      <CtaBanner />
    </>
  );
};

export default AboutPage;
