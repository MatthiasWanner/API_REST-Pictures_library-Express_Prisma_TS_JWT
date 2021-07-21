import { AlbumHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const getAll: AlbumHandlers["getAll"] = async (req, res, next) => {
  try {
    const albums = await prisma.album.findMany();
    return res.status(200).json(albums);
  } catch (e) {
    return next(e);
  }
};

export default getAll;
