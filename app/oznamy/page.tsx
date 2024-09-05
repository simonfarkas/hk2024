"use client";

import AnnouncementCard from "../components/Announcement";
import { useState, useRef, useEffect } from "react";
import { oznamy } from "@/data";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Oznamy() {
  const [activeCard, setActiveCard] = useState({
    active: false,
    title: "",
    text: "",
    image: "",
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
              <Image
                src={activeCard.image}
                alt="oznam"
                width={390}
                height={200}
              />
              <h2 className="font-semibold text-xl mb-4">Oznam</h2>
              <p className="text-gray-600 mb-4">{activeCard.text}</p>
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
          <h2 className="text-gray-600 font-semibold text-left">Oznamy</h2>
          <div className="mt-4 gap-4">
            {oznamy.map((navrh, index) => (
              <AnnouncementCard
                key={index}
                index={index}
                card={navrh}
                onClick={() => {
                  setActiveCard({
                    active: true,
                    title: "Názor a návrh",
                    text: navrh.text,
                    image: navrh.image,
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
