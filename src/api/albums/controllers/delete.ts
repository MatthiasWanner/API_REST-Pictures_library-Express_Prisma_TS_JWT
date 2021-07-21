import { AlbumHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const deleteAlbum: AlbumHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.album.delete({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};

export default deleteAlbum;
