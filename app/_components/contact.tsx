'use client'


export default function Contact() {
  const onHeaderClick = () => {
    document.getElementById("contact")?.scrollIntoView();
  };

  return (
    <section id="contact" className=" w-full">
      <div
        className=" p-5 px-10 bg-purple-700 sticky top-20 cursor-pointer"
        onClick={onHeaderClick}
      >
        <h2 className="font-title text-3xl">Contact</h2>
       
      </div>

      <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 py-28 mx-auto gap-6">
       
      </div>
    </section>
  );
}