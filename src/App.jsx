import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ChaptersMap from "./sections/ChaptersMap";
import EventsSection from "./sections/EventsSection";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
    
      <ChaptersMap/>
      <EventsSection/>

      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
