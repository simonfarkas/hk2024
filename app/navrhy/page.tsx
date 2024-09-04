"use client";

import Card from "../components/Card";
import { useState, useRef, useEffect } from "react";

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

export default function Navrhy() {
  const [activeCard, setActiveCard] = useState({
    active: false,
    title: "",
    text: "",
    options: [],
  });
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setActiveCard({ ...activeCard, active: false });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCard]);

  return (
    <div className="px-4" style={{ maxWidth: "420px", width: "420px" }}>
      {activeCard.active && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <div
            ref={dialogRef}
            className="relative bg-white p-6 rounded-lg shadow-lg w-full px-4"
            style={{ maxWidth: "420px", width: "390px" }}
          >
            <h2 className="font-semibold text-xl mb-4">Názor a návrh</h2>
            <p className="text-gray-600 mb-4">{activeCard.text}</p>
            <div className="grid grid-cols-2 gap-4">
              {activeCard.options.map((option, index) => (
                <div key={index} className="flex justify-between mt-2">
                  <span>{option.title}</span>
                  <span>{option.percentage}%</span>
                </div>
              ))}
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
              onClick={() => setActiveCard({ ...activeCard, active: false })}
            >
              Zavrieť
            </button>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h2 className="text-gray-600 font-semibold text-left">
          Názory a návrhy
        </h2>
        <div className="mt-4 gap-4">
          {navrhy.map((navrh, index) => (
            <Card
              key={index}
              index={index}
              card={navrh}
              onClick={() => {
                setActiveCard({
                  active: true,
                  title: "Názor a návrh",
                  text: navrh.text,
                  options: navrh.options,
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
