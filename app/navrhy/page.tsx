"use client";

import { useState, useRef, useEffect } from "react";
import { navrhy } from "@/data";
import Layout from "../components/Layout";
import PollCard from "../components/PollCard";

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
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setActiveCard({ ...activeCard, active: false });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCard]);

  const canVote = localStorage.getItem("token");

  const voteButtonColor = canVote ? "bg-blue-500" : "bg-gray-300";

  return (
    <Layout showNavbar={true}>
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
              {activeCard.options.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center w-1/2">
                    <div
                      className={`w-1/${option.percentage} h-4 rounded-full bg-blue-500`}
                    ></div>
                    <div className="flex flex-col w-full">
                      <span className="text-gray-600">
                        {option.title} {option.percentage}%
                      </span>
                      <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 h-full bg-${option.color}-500`}
                          style={{ width: `${option.percentage}%` }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
                            {option.percentage}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`${voteButtonColor} text-white px-4 py-2 cursor-pointer rounded`}
                    disabled={!canVote}
                  >
                    Hlasovať
                  </button>
                </div>
              ))}
              {!canVote && (
                <p className="my-8 text-center">Pre hlasovanie sa prihláste</p>
              )}
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                  onClick={() =>
                    setActiveCard({ ...activeCard, active: false })
                  }
                >
                  Zavrieť
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10">
          <h2 className="text-gray-600 font-semibold text-left">
            Názory a návrhy
          </h2>
          <div className="mt-4 gap-4">
            {navrhy.map((navrh, index) => (
              <PollCard
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
    </Layout>
  );
}
