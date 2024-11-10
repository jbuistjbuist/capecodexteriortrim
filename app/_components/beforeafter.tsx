"use client";

import Image from "next/image";

const buckets = [
  {
    title: "Glass Railings",
    description: "Glass Railing Installations",
    pictures: ["/images/glassrailings/20200122_110011.jpeg"],
    coverImage: "/images/glassrailings/20200122_110011.jpeg",
  },
  {
    title: "PVC Railings",
    description: "PVC Railing Installations",
    pictures: ["/images/regularrails/20200910_133224.jpeg"],
    coverImage: "/images/regularrails/20200910_133224.jpeg",
  },
  {
    title: "Exterior Trim",
    description: "Exterior trim installations",
    pictures: ["/images/exteriortrim/20210108_123016.jpeg"],
    coverImage: "/images/exteriortrim/20210108_123016.jpeg",
  },
  {
    title: "Before & After",
    description: "Replacing old fixtures",
    pictures: ["/images/beforeaftercolumns/20241022_075411.jpeg"],
    coverImage: "/images/beforeaftercolumns/20241022_075411.jpeg",
  },
];

function PictureBucket({
  title,
  description,
  pictures,
  coverImage,
}: {
  title: string;
  description: string;
  pictures: string[];
  coverImage: string;
}) {
  return (
    <section className=" transition-all flex flex-col justify-center items-center p-2 rounded-md shadow-md text-black opacity-100 bg-white hover:bg-maroon-50 hover:scale-105">
      <div className="flex flex-col justify-left w-full pb-2 pl-2">
        <h3 className="text-lg font-semibold text-maroon-900">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <Image
        src={coverImage}
        alt="cover picture"
        width={400}
        height={400}
        className="aspect-square object-cover rounded"
      />
    </section>
  );
}

export default function Projects() {
  const onHeaderClick = () => {
    document.getElementById("beforeafter")?.scrollIntoView();
  };

  return (
    <section id="beforeafter" className=" w-full">
      <div
        className=" p-5 px-10 bg-maroon-700 lg:sticky top-16 z-10 cursor-pointer mt-16"
        onClick={onHeaderClick}
      >
        <h2 className="font-title text-3xl">Past Projects</h2>
       
      </div>

      <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 py-24 mx-auto gap-6">
        {
          buckets?.map((bucket) => {


            

       
            return (
              <PictureBucket 
              {...bucket}
              key={bucket.title}

              />
            )
          })
        }
      </div>
    </section>
  );
}
