import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ChaptersMap from "./sections/ChaptersMap";
import EventsSection from "./sections/EventsSection";
import ChatBot from "./sections/Chatbot";

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

      <ChatBot/>
    </div>
  );
};

export default App;
