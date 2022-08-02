import { SiGithub, SiGithubsponsors, SiBuymeacoffee } from "react-icons/si";
import { FiExternalLink, FiStar } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex items-center w-full gap-4">
      <button
        className="bg-zinc-700 w-full p-2 py-3 hover:text-rose-200 hover:bg-zinc-600 focus:ring-1 ring-rose-200 duration-300 text-zinc-200 rounded shadow-2xl flex items-center justify-center"
        onClick={() =>
          window.open(
            "https://github.com/asrvd/waifus-for-programmers",
            "_blank"
          )
        }
      >
        <SiGithub />
      </button>
      <button
        className="bg-zinc-700 hover:text-rose-200 w-full p-2 py-3 hover:bg-zinc-600 focus:ring-1 ring-rose-200 duration- text-zinc-200 rounded shadow-2xl flex items-center justify-center"
        onClick={() =>
          window.open("https://github.com/sponsors/asrvd", "_blank")
        }
      >
        <SiGithubsponsors />
      </button>
      <button
        className="bg-zinc-700 w-full p-2 py-3 hover:text-rose-200 hover:bg-zinc-600 focus:ring-1 ring-rose-200 duration- text-zinc-200 rounded shadow-2xl flex items-center justify-center"
        onClick={() =>
          window.open("https://buymeacoffee.com/asheeshh", "_blank")
        }
      >
        <SiBuymeacoffee />
      </button>
      <button
        className="bg-zinc-700 w-full p-2 py-3 hover:text-rose-200 hover:bg-zinc-600 focus:ring-1 ring-rose-200 duration- text-zinc-200 rounded shadow-2xl flex items-center justify-center"
        onClick={() =>
          window.open(
            "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books",
            "_blank"
          )
        }
      >
        <FiExternalLink />
      </button>
      <button
        className="bg-zinc-700 w-full p-2 py-3 hover:text-rose-200 hover:bg-zinc-600 focus:ring-1 ring-rose-200 duration- text-zinc-200 rounded shadow-2xl flex items-center justify-center"
        onClick={() =>
          window.open(
            "https://github.com/asrvd/waifus-for-programmers",
            "_blank"
          )
        }
      >
        <FiStar />
      </button>
    </div>
  );
}
