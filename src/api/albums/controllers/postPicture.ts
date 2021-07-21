import { prisma } from "../../../../prisma/prisma.client";
import { AlbumHandlers } from "../../../../env";

const postPicture: AlbumHandlers["postPicture"] = async (req, res, next) => {
  const { albumId, pictureId } = req.params;
  try {
    await prisma.album.update({
      where: {
        id: albumId,
      },
      data: {
        pictures: {
          connect: {
            id: pictureId,
          },
        },
      },
    });

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};

export default postPicture;
