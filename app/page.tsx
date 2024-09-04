"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import { Fragment, useRef, useState, useEffect } from "react";

const data = [
  {
    id: 1,
    name: "Hackathon",
    time: "09:00",
    date: "04.09.",
    place: "PKO Čierny orol",
    label: "Dnes",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Koncert",
    date: "07.09.",
    place: "Hlavná ulica",
    label: "Tento týždeň",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Pivné dni",
    date: "08.09.",
    place: "",
    label: "Tento týždeň",
    color: "bg-green-500",
  },
];

const oznamy = [
  {
    img: "/Group 8.png",
    title: "Výročie SNP",
    text: "asjd as ddas ajasudhas sadbasid asjdsajd",
  },
  {
    img: "/Group 8.png",
    title: "Výročie SNP",
    text: "asjd as ddas ajasudhas sadbasid asjdsajd",
  },
  {
    img: "/Group 8.png",
    title: "Výročie SNP",
    text: "asjd as ddas ajasudhas sadbasid asjdsajd",
  },
  {
    img: "/Group 8.png",
    title: "Výročie SNP",
    text: "asjd as ddas ajasudhas sadbasid asjdsajd",
  },
  {
    img: "/Group 8.png",
    title: "Výročie SNP",
    text: "asjd as ddas ajasudhas sadbasid asjdsajd",
  },
  {
    img: "/Group 8.png",
    title: "Výročie SNP",
    text: "asjd as ddas ajasudhas sadbasid asjdsajd",
  },
];

const navrhy = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: [
      {
        id: 1,
        percentage: 40,
        title: "Ano",
      },
      {
        id: 2,
        percentage: 60,
        title: "Nie",
      },
    ],
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    options: [
      {
        id: 1,
        title: "Ano",
        percentage: 40,
      },
      {
        id: 2,
        title: "Nie",
        percentage: 40,
      },
      {
        id: 3,
        title: "Neviem",
        percentage: 20,
      },
    ],
  },
];


const Oznam = ({
  card,
  onClick,
}: {
  card: {
    img: string;
    title: string;
    text: string;
  };
  onClick: () => void;
}) => {
  return (
    <div className="max-w-[300px] mb-4" onClick={onClick}>
      <Image src={card.img} alt="oznam" width={300} height={150} />
      <div className="bg-white shadow-md p-2">
        <h3 className="font-semibold">{card.title}</h3>
        <p className="text-gray-600 text-sm">{card.text}</p>
        <button className="text-red-500 mt-2">Čítať ďalej</button>
      </div>
    </div>
  );
};

export default function Home() {
  const [sliceIndexOznamy, setSliceIndexOznamy] = useState(2);
  const [activeOznam, setActiveOznam] = useState({
    index: 0,
    active: false,
    text: "",
    title: "",
    img: "",
  });
  const oznamRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (oznamRef.current && !oznamRef.current.contains(event.target)) {
        setActiveOznam({ ...activeOznam, active: false });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [oznamRef]);

  return (
    <div className="px-4" style={{ maxWidth: "420px", width: "420px" }}>
      {activeOznam.active && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <dialog
            open={activeOznam.active}
            className="relative bg-white p-6 rounded-lg shadow-lg w-full px-4"
            style={{ maxWidth: "420px", width: "390px" }}
            ref={oznamRef}
          >
            <Image src={activeOznam.img} alt="oznam" width={300} height={150} />
            <h2 className="font-semibold text-xl mb-4">{activeOznam.title}</h2>
            <p className="text-gray-600 mb-4">{activeOznam.text}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setActiveOznam({ ...activeOznam, active: false })}
            >
              Zavrieť
            </button>
          </dialog>
        </div>
      )}
      <div>
        <ul className="w-full mt-10">
          {data.map((event) => (
            <Fragment key={event.id}>
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
          {oznamy.slice(0, sliceIndexOznamy).map((oznam, index) => (
            <Oznam
              key={index}
              card={oznam}
              onClick={() =>
                setActiveOznam({
                  active: true,
                  index: oznamy.indexOf(oznam),
                  text: oznam.text,
                  title: oznam.title,
                  img: oznam.img,
                })
              }
            />
          ))}
        </div>
        {oznamy.length > sliceIndexOznamy && (
          <button
            className="text-red-500 mt-2 border-2 rounded-md py-2 border-red-500 w-full"
            onClick={() => setSliceIndexOznamy(sliceIndexOznamy + 2)}
          >
            Načítať viac
          </button>
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-gray-600 font-semibold text-left">
          Názory a návrhy
        </h2>
        <div className="mt-4">
          {navrhy.slice(0, 1).map((navrh, index) => (
            <Card card={navrh} index={index} />
          ))}
          <Link href="/navrhy">
            <button className="text-red-500 mt-2 border-2 rounded-md py-2 border-red-500 w-full">
              Všetky návrhy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
