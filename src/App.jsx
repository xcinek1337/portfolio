import Background from "./components/Background";
import gsap from "gsap";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  return (
    <>
      <Header />
      <main className="bottomBar-smooth bg-primaryGray relative min-h-full w-full">
        <Background />
        <HeroSection />
        <AboutMe />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
