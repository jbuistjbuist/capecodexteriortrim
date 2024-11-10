'use client'
function ListItem({href, text}:{href: string, text: string}) {

  return (
    <li className="flex justify-center items-center py-1 underline underline-offset-4 hover:underline-offset-8">
    <a href={`${href}`}>{text}</a>
  </li>
  )
}


export default function Nav() {
  return (
    <nav className="grid grid-cols-1 sm:flex gap-5  py-4 px-10 justify-between items-center bg-green-800 text-stone-50 fixed z-20 top-0 w-full shadow-lg">
      <p className="text-3xl font-title text-center sm:text-left cursor-pointer" onClick={() => {
        window.scrollTo({
          top: 0
        })
      }}>Cape Cod Exterior Trim Inc.</p>
      <ul className="w-full flex justify-center flex-wrap gap-4 sm:gap-0 sm:w-3/6 xl:w-2/6 sm:grid sm:grid-cols-3 text-base font-normal tracking-wide max-w-3xl mr-0 ">
        <ListItem href="#before-after" text="Pictures" />
        <ListItem href="#pricing" text="Pricing" />
        {/* <ListItem href="#contact" text="Contact" /> */}
        <li className="flex justify-center items-center">
        <button type="button" className="py-2 px-6 flex justify-center items-center font-semibold bg-teal-700 rounded-sm hover:scale-105 hover:bg-teal-800">
          Contact
        </button>
       </li>
      </ul>
    </nav>
  );
}


