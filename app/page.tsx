import Nav from "./_components/nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen bg-stone-50">
      <Nav />
      <section id="hero">
          hero section
      </section>
      <section id="about">
        about section
      </section>
      <section id="before-after">
        before after 
      </section>
      <section id="pricing">
        pricing
      </section>
      <section id="contact">
        contact 
      </section>
    </div>
  );
}
