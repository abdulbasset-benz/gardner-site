import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Steps from "./components/Steps";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <Experience />
      <Services />
      <Steps />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
