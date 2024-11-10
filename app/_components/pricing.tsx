'use client'


export default function Pricing() {
  const onHeaderClick = () => {
    document.getElementById("pricing")?.scrollIntoView();
  };

  return (
    <section id="pricing" className=" w-full">
      <div
        className=" p-5 px-10 bg-teal-700 sticky top-16 cursor-pointer"
        onClick={onHeaderClick}
      >
        <h2 className="font-title text-3xl">Pricing</h2>
       
      </div>

      <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 py-28 mx-auto gap-6 h-screen">
       
      </div>
    </section>
  );
}
