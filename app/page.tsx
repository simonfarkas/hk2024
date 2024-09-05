"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import { Fragment } from "react";
import { data, navrhy, oznamy } from "../data";
import Layout from "./components/Layout";

const Oznam = ({
  card,
  onClick,
}: {
  card: {
    image: string;
    title: string;
    text: string;
  };
  onClick: () => void;
}) => {
  return (
    <div className="max-w-[300px] mb-4" onClick={onClick}>
      <Image src={card.image} alt="oznam" width={300} height={150} />
      <div className="bg-white shadow-md p-2">
        <h3 className="font-semibold">{card.title}</h3>
        <p className="text-gray-600 text-sm">{card.text}</p>
        <button className="text-red-500 mt-2">Čítať ďalej</button>
      </div>
    </div>
  );
};

export default function Home() {
  const reducedData = data.reduce((acc: any, curr) => {
    if (!acc[curr.label]) {
      acc[curr.label] = curr;
    }
    return acc;
  }, {});

  return (
    <Layout showNavbar={true}>
      <div className="px-4" style={{ maxWidth: "420px", width: "420px" }}>
        {/* {activeOznam.active && ( */}
        {/*   <div className="fixed inset-0 flex items-center justify-center z-50"> */}
        {/*     <div className="absolute inset-0 bg-black bg-opacity-75"></div> */}
        {/*     <dialog */}
        {/*       open={activeOznam.active} */}
        {/*       className="relative bg-white p-6 rounded-lg shadow-lg w-full px-4" */}
        {/*       style={{ maxWidth: "420px", width: "390px" }} */}
        {/*       ref={oznamRef} */}
        {/*     > */}
        {/*       <Image src={activeOznam.img} alt="oznam" width={300} height={150} /> */}
        {/*       <h2 className="font-semibold text-xl mb-4">{activeOznam.title}</h2> */}
        {/*       <p className="text-gray-600 mb-4">{activeOznam.text}</p> */}
        {/*       <button */}
        {/*         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" */}
        {/*         onClick={() => setActiveOznam({ ...activeOznam, active: false })} */}
        {/*       > */}
        {/*         Zavrieť */}
        {/*       </button> */}
        {/*     </dialog> */}
        {/*   </div> */}
        {/* )} */}
        <div>
          <ul className="w-full mt-10">
            {data.map((event) => (
              <Fragment key={event.id}>
                {reducedData[event.label] === event && (
                  <li className="text-gray-600 font-semibold text-left">
                    {event.label}
                  </li>
                )}
                <li
                  key={event.id}
                  className="flex items-center py-2 my-2 rounded-md bg-gray-100 relative w-full"
                >
                  <div
                    className={`w-4 h-full absolute left-0 top-0 ${event.color} rounded-l-md`}
                  />
                  <div className="flex w-full px-4">
                    <div className="flex-shrink-0 w-1/3">
                      <p className="text-gray-500 ml-4">
                        {event.time ?? event.date}
                      </p>
                    </div>
                    <div className="flex-grow">
                      <h2 className="font-semibold">{event.name}</h2>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-gray-500">{event.place || ""}</p>
                    </div>
                  </div>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-gray-600 font-semibold text-left mb-4">Oznamy</h2>
          <div className="grid grid-cols-2 gap-4">
            {oznamy.slice(0, 2).map((oznam, index) => (
              <Link href="/oznamy">
                <Oznam key={index} card={oznam} onClick={() => {}} />
              </Link>
            ))}
          </div>
          {oznamy.length > 1 && (
            <Link href="/oznamy">
              <button className="text-red-500 mt-2 border-2 rounded-md py-2 border-red-500 w-full">
                Načítať viac
              </button>
            </Link>
          )}
        </div>

        <div className="mt-10">
          <h2 className="text-gray-600 font-semibold text-left">
            Názory a návrhy
          </h2>
          <div className="mt-4">
            {navrhy.slice(0, 1).map((navrh, index) => (
              <Card card={navrh} index={index}  />
            ))}
            <Link href="/navrhy">
              <button className="text-red-500 mt-2 border-2 rounded-md py-2 border-red-500 w-full">
                Všetky návrhy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
