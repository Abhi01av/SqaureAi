import WhyUs from '../components/WhyUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Technologies from '../components/Technologies.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <WhyUs />
      <HowItWorks />
      <Technologies />
      <CtaBanner />
    </div>
  );
};

export default AboutPage;
