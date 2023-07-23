import { useRouter } from "next/router";
import PoweredByVercel from "./vercel";

export default function Sidebar(props: any) {
  const router = useRouter();
  const currentPath = router.asPath.substring(10).slice(0, -1);
  // console.log(currentPath)
  return (
    <div className="sidebar fixed lg:static md:static z-[2000] bg-zinc-800 h-screen overflow-y-scroll lg:z-0 md:z-0 w-[78%] lg:w-full md:w-full">
      <div className="flex flex-col p-4 justify-center w-full items-center gap-4 bg-zinc-800">
        {props?.folders
          ?.filter(
            (folder: any) =>
              folder.name !== "README.md" && folder.name !== "CONTRIBUTING.md" && folder.name !== ".DS_Store"
          )
          .map((folder: any) => (
            <button
              key={folder.name}
              className={
                currentPath === encodeURIComponent(folder.name)
                  ? "flex cursor-pointer ring-2 bg-zinc-600 ring-offset-rose-300 hover:shadow-2xl hover:-translate-y-1 duration-300 hover:bg-zinc-600 md:text-sm text-base lg:text-base ring-rose-100 justify-start items-center p-2 rounded shadow-2xl w-full text-gray-200 hover:text-rose-200"
                  : "flex cursor-pointer focus:ring-2 focus:bg-zinc-600 ring-offset-rose-300 hover:shadow-2xl hover:-translate-y-1 duration-300 hover:bg-zinc-600 md:text-sm text-base lg:text-base ring-rose-100 justify-start items-center bg-zinc-700 p-2 rounded shadow-2xl w-full text-gray-200 hover:text-rose-200"
              }
              onClick={() => {
                router.push(`/app/lang/${encodeURIComponent(folder.name)}`);
              }}
            >
              <p>{folder.name}</p>
            </button>
          ))}
          <PoweredByVercel />
      </div>
    </div>
  );
}
