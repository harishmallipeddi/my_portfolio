import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full glow-bg-primary -z-10 pointer-events-none" />
      <div className="absolute top-[50%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full glow-bg-secondary -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full glow-bg-primary -z-10 pointer-events-none opacity-50" />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
