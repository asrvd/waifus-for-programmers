/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { GetStaticProps, GetStaticPaths } from "next";
import type { NextPageWithLayout } from "../../_app";
import type { ImgData } from "../../api/images/[slug]";
import type { ReactElement } from "react";
import Layout from "../../../components/layout";
import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar";
import Header from "../../../components/header";
import { FiMenu, FiX } from "react-icons/fi";

type Props = {
  images?: ImgData[];
  slug?: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const folders = await fetch("/api/getFolders");
  const folderValues = await folders.json();
  const paths = folderValues
    .filter(
      (folder: any) =>
        folder.name !== "README.md" || folder.name !== "CONTRIBUTING.md"
    )
    .map((folder: any) => ({
      params: { slug: folder.name },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const files = await fetch(`/api/images/${params?.slug}`);
  const fileValues = await files.json();
  if (fileValues) {
    return {
      props: {
        images: fileValues,
        slug: params?.slug,
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

const Index: NextPageWithLayout = (props: Props) => {
  const [filteredImages, setFilteredImages] = useState<ImgData[]>(
    props?.images ? props?.images : []
  );
  useEffect(() => {
    setFilteredImages(props?.images ? props?.images : []);
  }, [props?.images]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <div
      className={
        showSideBar === false
          ? "fixed lg:static md:static z-[5000] flex flex-col p-4 items-center w-screen lg:w-[80%] md:w-[90%] bg-zinc-900 h-screen pb-8 lg:pb-4 "
          : "z-0 relative flex flex-col p-4 items-center w-screen lg:w-[80%] md:w-[90%] bg-zinc-900 h-screen pb-12 lg:pb-4"
      }
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-center pb-4">
        <div className="flex gap-4 sm:w-full md:w-full lg:w-[100%] lg:col-span-2">
          <SearchBar
            imageValues={props.images}
            handleSearch={setFilteredImages}
          />
          <div className="flex w-[17%] items-center lg:hidden md:hidden">
            <button
              className="bg-zinc-700 w-full hover:text-rose-200 p-2 py-3 hover:bg-zinc-600 focus:ring-1 ring-rose-200 duration- text-zinc-200 rounded shadow-2xl flex items-center justify-center"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              {showSideBar ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div className="sm:w-full md:w-full lg:w-[100%] ">
          <Header />
        </div>
      </div>
      <div className="relative gallery lg:columns-3 md:columns-3 sm:columns-2 gap-4 overflow-y-scroll bg-zinc-900">
        {filteredImages.map((image) => (
          <div
            key={image.name}
            className="rounded-lg mb-4 shaodw-xl cursor-pointer"
          >
            <img
              src={image.url}
              alt={image.name}
              onClick={() => {
                window.open(image.download_url, "_blank");
              }}
              className="w-full saturate-150 rounded-md lg:grayscale hover:grayscale-0 duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
