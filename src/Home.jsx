import AboutUsSection from "./about";
import StoriesSection from "./blog";
import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import Impact from "./ourImpact";

 function Home() {
  return (
    <div>
          <HeroSection />
          <ImpactSection />
          <AboutUsSection />
          <Impact />
          <StoriesSection/>
    </div>
  );
}

export default Home;