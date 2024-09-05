import Image from "next/image";
import React from "react";

const AnnouncementCard = ({
  card,
  index,
}: {
  card: {
    image?: string;
    text: string;
    title: string;
  };
  index: number;
}) => {
  return (
    <div key={index} className="border-b border-gray-400 my-2 bg-white">
      {card.image && (
        <Image
          src={card.image}
          alt="oznam"
          width={390}
          height={100}
          className="rounded-md"
        />
      )}
      <div className="py-4">
        <h2 className="text-xl font-bold">{card.title}</h2>
        <p className="mt-2 text-sm text-gray-500">
          {card.text.slice(0, 100)}...
        </p>
        <a className="text-red-600 mt-4" href="#">
          Čítať viac
        </a>
      </div>
    </div>
  );
};

export default AnnouncementCard;
