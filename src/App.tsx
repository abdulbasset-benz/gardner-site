import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Experience />
      <Services />
    </div>
  );
};

export default App;
