import OpenSection from "./components/OpenSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets:['latin']});

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${montserrat.className}`}>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <OpenSection />
        <ContactSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
