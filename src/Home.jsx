import AboutUsSection from "./about";
import StoriesSection from "./blog";
import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import Impact from "./ourImpact";

 function Home({ menuOpen }) {
   return (
     <div>
       <HeroSection menuOpen={menuOpen} />
       <ImpactSection />
       <AboutUsSection />
       <Impact />
       <StoriesSection />
     </div>
   );
 }

export default Home;