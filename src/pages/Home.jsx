import AboutUsSection from "../components/about";
import StoriesSection from "../blog";
import HeroSection from "../components/HeroSection";
import Impact from "../ourImpact";
import ThreeCardSections from "../ThreeCardSections";

function Home({ menuOpen }) {
  return (
    <div>
      <HeroSection menuOpen={menuOpen} />
      <ThreeCardSections />
      <AboutUsSection />
      <Impact />
      <StoriesSection />
    </div>
  );
}

export default Home;
