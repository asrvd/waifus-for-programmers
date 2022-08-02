import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export type ImgData = {
  name?: string;
  url?: string;
  key?: string;
  path?: string;
  html_url?: string;
  download_url?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ImgData[]>
) {
  if (req.method === "GET") {
    //ts-ignore
    const slug: any = req.query.slug;
    if (slug && typeof slug === "string" && slug !== undefined) {
      const files = await axios.get(
        `https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/${encodeURIComponent(
          slug
        )}?ref=master`,
        {
          headers: {
            Authorization: `token ${process.env.GH_PAT}`,
          },
        }
      );
      const images = files.data.map((file: any) => ({
        name: file.name,
        url: `https://${
          process.env.CI_TOKEN
        }.cloudimg.io/${file.download_url.substring(8)}?force_format=webp`,
        key: file.name,
        path: file.path,
        html_url: file.html_url,
        download_url: file.download_url,
      }));
      res.status(200).json(images);
    }
  } else {
    res.status(405).end();
  }
}
