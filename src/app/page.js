import Image from "next/image";
import Navbar from "./component/navbar/Navbar"; 
import Hero from "./component/hero/Hero";
import AboutMe from "./component/aboutme/AboutMe";
import Projects from "./component/projects/Projects";
import Footer from "./component/footer/Footer";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <AboutMe/>
    <Projects/>
    <Footer/>
    </>
  );
}
