'use client'
import Layout from "../components/Layout";
import { Input } from "../components/Input";

const Registracia = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("token", "token");
    window.location.href = "/";
  };
  return (
    <Layout showNavbar={false} showVectors={true} showLogin={false}>
      <div
        className="px-4 relative h-full flex flex-col justify-center mt-80"
        style={{ maxWidth: "420px", width: "420px" }}
      >
        <h1 className="text-red-600 text-2xl text-center font-bold">
          Registracia 
        </h1>
        <form className='mt-4 gap-2' onSubmit={onSubmit}>
          <Input id='email' placeholder='Email' />
          <Input id='password' placeholder='Heslo' type='password' />
          <button className='bg-red-600 px-4 py-2 my-4 w-full rounded-md text-white' type='submit'>
            Prihlásiť sa
          </button>
        </form>
        <span>
          Máte účet?{" "}
          <a href="/prihlasenie" className="text-red-600">
            Prihláste sa
          </a>
        </span>
      </div>
    </Layout>
  );
};

export default Registracia;
