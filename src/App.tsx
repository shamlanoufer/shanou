import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-white transition-colors duration-500 overflow-x-hidden selection:bg-accent-orange selection:text-white">
      {/* Interactive custom tracking cursor for fine-pointer systems */}
      <CustomCursor />

      {/* Floating navigation system */}
      <Navbar />

      {/* Hero stage screen */}
      <Hero />

      {/* Technical tools infinite looping ticker */}
      <Ticker />

      {/* Profile about details block */}
      <About />

      {/* Interactive services rows */}
      <Services />

      {/* Projects grid with dynamic filters and case study slide overlays */}
      <Projects />

      {/* Visual bento design methodologies */}
      <Process />

      {/* Expertise categories grid */}
      <Skills />

      {/* Academic qualifications list */}
      <Education />

      {/* Full-featured client-centered contact mailbox */}
      <Contact />

      {/* Multi-column footer coordinates */}
      <Footer />
    </div>
  );
}
