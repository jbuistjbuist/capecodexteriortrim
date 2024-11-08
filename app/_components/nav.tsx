
function ListItem({href, text}:{href: string, text: string}) {

  return (
    <li className="flex justify-center items-center py-1 underline underline-offset-4 hover:underline-offset-8">
    <a href={`${href}`}>{text}</a>
  </li>
  )
}


export default function Nav() {
  return (
    <nav className="grid grid-cols-1 sm:grid-cols-2 gap-5  py-4 px-10 items-center justify-center bg-green-800 text-stone-50 sticky -top-3 w-full shadow-lg">
      <p className="text-3xl font-title text-center sm:text-left">Cape Cod Exterior Trim Inc.</p>
      <ul className="w-full sm:w-5/6 grid grid-cols-4 text-sm font-normal tracking-wide max-w-3xl ">
        <ListItem href="#about" text="About" />
        <ListItem href="#before-after" text="Projects" />
        <ListItem href="#pricing" text="Pricing" />
        <ListItem href="#contact" text="Contact" />
       
      </ul>
    </nav>
  );
}


