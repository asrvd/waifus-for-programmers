import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  const [sideBarData, setSideBarData] = useState<any>([]);
  useEffect(() => {
    const getFolders = async () => {
      const folders = await fetch(
        "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/"
      );
      const folderValues = await folders.json();
      setSideBarData(folderValues);
    };
    getFolders();
  }, []);
  return (
    <div className="flex min-w-screen min-h-screen bg-zinc-900">
      <div className="lg:w-[20%] overflow-y-hidden">
        <Sidebar folders={sideBarData} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
