import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceAndEducation from "./components/ExperienceAndEducation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-slate-900 antialiased selection:bg-indigo-200/60">
      <Nav />
      <main>
        <Hero />
        <About />
        <ExperienceAndEducation />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
