import { prisma } from "../../../../prisma/prisma.client";
import { UserHandlers } from "../../../../env";

const getOne: UserHandlers["getAlbums"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const albums = await prisma.album.findMany({
      where: {
        userId: id,
      },
    });

    return res.status(200).json(albums);
  } catch (e) {
    next(e);
  }
};

export default getOne;
