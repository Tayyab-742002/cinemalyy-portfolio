import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import FeaturedWork from "@/components/FeaturedWork";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSlideshow />
      <FeaturedWork />
    </div>
  );
};

export default Home;