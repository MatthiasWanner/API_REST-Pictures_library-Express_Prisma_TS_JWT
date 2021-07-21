import { prisma } from "../../../../prisma/prisma.client";
import { AlbumHandlers } from "../../../../env";

const getOne: AlbumHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const album = await prisma.album.findUnique({
      where: {
        id,
      },
    });

    if (!album) return res.sendStatus(204);

    return res.status(200).json(album);
  } catch (e) {
    next(e);
  }
};

export default getOne;
