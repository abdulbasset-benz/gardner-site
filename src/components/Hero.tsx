import heroImage from "@/assets/heroImage.png";
import Navigation from "./Navigation";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="landscape"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navigation */}
      <div className="relative z-30">
        <Navigation />
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <p className="text-accent text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide font-poppins mb-2">
          Jardinage & Paysagisme
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins capitalize leading-tight max-w-2xl sm:max-w-3xl mb-4">
          Imaginez un <span className="text-accent">jardin</span> qui vous{" "}
          <span className="text-accent">apaise</span> dès le premier regard
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-lg mb-8">
          Créez un espace extérieur où chaque détail invite à la détente, à la
          convivialité et au plaisir de se retrouver avec ceux que vous aimez.
        </p>

        <div className="z-40">
          <Button
            className="bg-accent text-primary text-md capitalize rounded-xl hover:bg-accent/90 cursor-pointer px-6 py-3"
            size="lg"
          >
            contactez-nous
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-bounce text-accent text-2xl border-2 border-accent rounded-full p-2">
        ↓
      </div>
    </div>
  );
};

export default Hero;
