"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Profile() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <Layout showNavbar={true} showVectors={false}>
      <div
        className="px-4 flex flex-col items-center justify-center"
        style={{ maxWidth: "420px", width: "420px" }}
      >
        <h1 className="text-2xl font-semibold text-center mb-20">Profil</h1>
        <Image
          src="/face.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full z-50"
        />
        <div className="mt-20 flex flex-row w-full justify-between">
          <div>
            <h2 className="font-bold text-2xl">Kamila Zelenova</h2>
            <span>26 rokov, Mlýnska 3</span>
          </div>
          <div className="px-4 py-2 bg-red-600 rounded-md text-white items-center flex">
            545 kreditov
          </div>
        </div>
        <ul>
          <button
            className="mt-20 bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={logout}
          >
            Odhlásiť sa
          </button>
        </ul>
      </div>
    </Layout>
  );
}
