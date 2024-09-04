"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef, useState, useEffect } from "react";

const navrhy = [
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    against: 40,
    for: 60,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Card = ({
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

export default function Navrhy() {
  return (
    <div className="px-4" style={{ maxWidth: "420px", width: "420px" }}>
      <div className="mt-10">
        <h2 className="text-gray-600 font-semibold text-left">
          Názory a návrhy
        </h2>
        <div className="mt-4">
          {navrhy.map((navrh, index) => (
            <div key={index} className="py-4 border-b border-b-gray-400 rounded-md rounded-b-none  my-2">
              <div className="flex justify-between mb-2">
                <span className="text-green-600">Za {navrh.for}%</span>
                <span className="text-red-600">Proti {navrh.against}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{ width: `${navrh.for}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{navrh.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
