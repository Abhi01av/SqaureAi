import Hero from '../components/Hero.jsx';
import Marquee from '../components/Marquee.jsx';
import Services from '../components/Services.jsx';
import WhyUs from '../components/WhyUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
};

export default HomePage;
