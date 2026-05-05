import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Work />
      <Pricing />
      <Contact />
    </main>
  </>
);

export default Index;
