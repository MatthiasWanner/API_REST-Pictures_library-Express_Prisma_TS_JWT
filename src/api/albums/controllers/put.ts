import { AlbumHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const putAlbum: AlbumHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    await prisma.album.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
export default putAlbum;
