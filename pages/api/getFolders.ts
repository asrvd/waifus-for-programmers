import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const folders = await axios.get(
      "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/",
      {
        headers: {
          Authorization: `token ${process.env.GH_PAT}`,
        },
      }
    );
    res.status(200).json(folders.data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
