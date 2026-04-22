import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Test from "@/components/Test";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />
      {/* <Test /> */}
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>

  );
}
