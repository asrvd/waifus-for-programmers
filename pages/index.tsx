/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center font-amatic min-h-screen min-w-screen bg-center bg-gradient-to-r from-rose-300 to-rose-500">
      <div className="flex flex-wrap flex-col text-center items-center min-h-screen lg:w-2/3 justify-between p-4">
        <div className="flex w-1/2 justify-center gap-12 text-2xl items-center font-extrabold text-rose-100">
          <a
            className="cursor-pointer duration-300 hover:text-rose-50 underline underline-offset-2 decoration-dotted"
            href="/"
          >
            Home
          </a>
          <a
            className="cursor-pointer duration-300 hover:text-rose-50 underline underline-offset-2 decoration-dotted"
            href="/app/lang/ABAP"
          >
            App
          </a>
        </div>
        <div>
          <h2 className="text-[3rem] lg:text-[6rem] tracking-wide font-extrabold p-0 text-rose-100 drop-shadow-2xl">
            waifus for programmers
          </h2>
          <p className=" text-rose-200 font-semibold tracking-wide text-2xl">
            a frontend for{" "}
            <a
              className="text-rose-100 underline underline-offset-2 decoration-dotted cursor-pointer"
              target={"_blank"}
              href="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books"
            >
              anime-girls-holding-programming-books
            </a>
          </p>
        </div>
        <div>
          <p className=" text-rose-100 font-semibold tracking-wide text-xl">
            made with {`<3 & </>`} by{" "}
            <a
              className="cursor-pointer duration-300 hover:text-rose-50 underline underline-offset-2 decoration-dotted"
              target={"_blank"}
              href="https://github.com/asrvd"
              rel="noreferrer"
            >
              ashish
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
