import Image from "next/image";
import { Fragment } from "react";

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
];

const Card = ({
  card,
}: {
  card: {
    img: string;
    title: string;
    text: string;
  };
}) => {
  return (
    <div className="max-w-[300px] mb-4">
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
  return (
    <div
      className="px-4"
      style={{ maxWidth: "420px", width: "420px" }}
    >
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
          {oznamy.map((oznam) => (
            <Card key={oznam.text} card={oznam} />
          ))}
        </div>
        <button className="text-red-500 mt-2 border-2 rounded-md py-2 border-red-500 w-full">
          Načítať viac
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-gray-600 font-semibold text-left">
          Názory a návrhy
        </h2>
        <div className="mt-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-green-600">Za 60%</span>
              <span className="text-red-600">Proti 40%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div
                className="bg-red-500 h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="text-red-500 mt-2">Zobraziť viac</button>
          </div>
        </div>
      </div>
    </div>
  );
}
