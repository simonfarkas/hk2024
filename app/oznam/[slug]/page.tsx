"use client";

import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout";

export default function Profile() {
  return (
    <Layout showNavbar={true} showVectors={false}>
      <div className="px-4 flex flex-col" style={{ maxWidth: "420px", width: "420px" }}>
        <h1 className="text-2xl font-semibold text-center">Profil</h1>
      </div>
    </Layout>
  );
}
