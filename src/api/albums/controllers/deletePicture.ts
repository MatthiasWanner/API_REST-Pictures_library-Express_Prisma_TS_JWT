import { prisma } from "../../../../prisma/prisma.client";
import { AlbumHandlers } from "../../../../env";

const deletePicture: AlbumHandlers["deletePicture"] = async (
  req,
  res,
  next
) => {
  const { albumId, pictureId } = req.params;
  try {
    await prisma.album.update({
      where: {
        id: albumId,
      },
      data: {
        pictures: {
          disconnect: {
            id: pictureId,
          },
        },
      },
    });

    //TODO: Send error or 204 if picture is not found => today it respond ok when related to a picture that does not exist
    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};

export default deletePicture;
