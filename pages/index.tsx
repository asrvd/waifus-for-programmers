/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center font-amatic min-h-screen min-w-screen bg-center bg-gradient-to-r from-rose-300 to-rose-500 selection:bg-rose-300">
      <div className="flex flex-wrap flex-col text-center items-center min-h-screen lg:w-2/3 justify-between p-4">
        <div className="flex w-1/2 justify-center gap-12 text-2xl items-center font-extrabold text-rose-100 lg:text-3xl">
          <a
            className="cursor-pointer duration-300 hover:text-rose-50 underline underline-offset-2 decoration-dotted"
            href="/"
          >
            Home
          </a>
          -
          <a
            className="cursor-pointer duration-300 hover:text-rose-50 underline underline-offset-2 decoration-dotted"
            href="/app/lang/ABAP"
          >
            App
          </a>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-0">
          <h2 className="w-full flex flex-col justify-center items-center text-[3rem] md:text-[4rem] lg:text-[7rem] tracking-wide font-extrabold p-0 text-rose-100 drop-shadow-2xl leading-none">
            waifus for
            <span className="flex">
              pr{` `}
              <img
                src="https://cdn3.emoji.gg/emojis/5608-zerotwo-flushed.png"
                alt="logo"
                className="select-none rounded self-center w-12 h-12 saturate-150 lg:w-24 lg:h-24 md:h-16 md:w-16"
              />
              {` `}grammers
            </span>
          </h2>
          <p className=" text-rose-200 font-semibold tracking-wide text-2xl lg:text-3xl">
            a frontend for{" "}
            <a
              className="text-rose-100 underline underline-offset-2 decoration-dotted cursor-pointer"
              target={"_blank"}
              href="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books"
              rel="noreferrer"
            >
              anime-girls-holding-programming-books
            </a>
          </p>
        </div>
        <div>
          <p className=" text-rose-100 font-semibold tracking-wide text-xl lg:text-2xl">
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
