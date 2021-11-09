import BgAnimation from '../styles/BackgroundAnimation';
import Hero from '../components/hero';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
  );
};

export default Home;
