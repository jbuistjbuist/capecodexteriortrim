import Nav from "./_components/nav";
import Hero from "./_components/hero";
import Projects from "./_components/beforeafter";
import Pricing from "./_components/pricing";
import Contact from "./_components/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen bg-stone-100">
      <Nav />
      <Hero />
      <Projects />
      <Pricing />
     <Contact />
      <section id="contact">
        contact 
      </section>
    </div>
  );
}
