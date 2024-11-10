import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen min-w-screen w-full">
      <div className="absolute bottom-8 left-8 right-8 flex justify-left items-end gap-6">
        <p className="opacity-100 text-white  text-base sm:text-lg bg-green-800 bg-opacity-100 p-4 sm:w-2/5 shadow-lg rounded">
          <span className="font-semibold">Cape Cod Exterior Trim Inc.</span> has
          been replacing worn-out or rotting wood columns, rails and exterior
          trim in the Greater Toronto Area for over 30 years. Give your home a
          fresh and safe renewed look. We use Canadian-made material from{" "}
          <a
            href="http://www.alpaoutdoor.com/content/home/home.cfm"
            className="underline underline-offset-2"
          >
            Alpa Outdoor Products
          </a>{" "}
          located in Brampton, Ontario.
        </p>
      </div>

      <a
        className="hidden p-3 rounded-full sm:absolute sm:flex right-20 bottom-8 justify-center items-center bg-teal-600 bg-opacity-100 hover:bg-teal-700 mb-1"
        href="/#beforeafter"
      >
        <FaChevronDown className="text-2xl text-white" />
      </a>

      <Image
        src={"/images/regularrails/20211110_161529.jpeg"}
        alt="Railing picture"
        width={2000}
        height={1000}
        className="w-full  min-h-screen min-w-screen max-h-screen object-cover shadow-lg"
      />
    </section>
  );
}
