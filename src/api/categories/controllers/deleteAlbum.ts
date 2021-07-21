import { prisma } from "../../../../prisma/prisma.client";
import { CategoryHandlers } from "../../../../env";

const deleteAlbum: CategoryHandlers["deleteAlbum"] = async (req, res, next) => {
  const { categoryId, albumId } = req.params;
  try {
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        albums: {
          disconnect: {
            id: albumId,
          },
        },
      },
    });

    //TODO: Send error if album not found => it respond ok when a relation does not exist
    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};

export default deleteAlbum;
