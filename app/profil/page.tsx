"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Profile() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <Layout showNavbar={true} showVectors={false}>
      <div className="px-4" style={{ maxWidth: "420px", width: "420px" }}>
        <h1 className="text-2xl font-semibold">Profil</h1>
        <div className="p-4 shadow-md">
          <div className="flex flex-row items-center mt-4">
            <Image
              src="/Vector 3.svg"
              alt="profile"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-semibold">John Doe</p>
              <span>Kredit: 521</span>
            </div>
          </div>
        </div>
        <ul>
          <li className="flex flex-row items-center mt-4">
            <span className="ml-2">Nákupy</span>
          </li>

          <li className="flex flex-row items-center mt-4">
            <span className="ml-2">Nastavenia</span>
          </li>

          <li className="flex flex-row items-center mt-4">
            <span className="ml-2">Pomoc</span>
          </li>

          <li className="flex flex-row items-center mt-4">
            <span className="ml-2" onClick={logout}>Odhlásiť sa</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
