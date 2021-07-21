import { prisma } from "../../../../prisma/prisma.client";
import { CategoryHandlers } from "../../../../env";

const getAlbums: CategoryHandlers["getAlbums"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const albums = await prisma.album.findMany({
      where: {
        categories: {
          some: {
            id,
          },
        },
      },
    });

    return res.status(200).json(albums);
  } catch (e) {
    next(e);
  }
};

export default getAlbums;
