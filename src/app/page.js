import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import AboutMe from "./component/aboutme/AboutMe";
import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Container configurations optimized to keep elements floating within boundaries */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Hero />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
