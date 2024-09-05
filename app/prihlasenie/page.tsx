"use client";
import Layout from "../components/Layout";
import { Input } from "../components/Input";
import { useState } from "react";

const Prihlasenie = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("token", "token");
      window.location.href = "/";
    }
  };
  return (
    <Layout showNavbar={false} showVectors={true} showLogin={false}>
      <div
        className="px-4 relative h-full flex flex-col justify-center mt-32"
        style={{ maxWidth: "420px", width: "420px" }}
      >
        <h1 className="text-red-600 text-2xl text-center font-bold">
          Prihlásenie
        </h1>
        <form className="mt-4 gap-2" onSubmit={onSubmit}>
          <Input
            //@ts-ignore
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            //@ts-ignore
            id="password"
            placeholder="Heslo"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <button
            className="bg-red-600 px-4 py-2 my-4 w-full rounded-md text-white"
            type="submit"
          >
            Prihlásiť sa
          </button>
        </form>
        <span>
          Nemáte účet?{" "}
          <a href="/registracia" className="text-red-600">
            Registrujte sa
          </a>
        </span>
      </div>
    </Layout>
  );
};

export default Prihlasenie;
