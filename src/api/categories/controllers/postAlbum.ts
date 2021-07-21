import { prisma } from "../../../../prisma/prisma.client";
import { CategoryHandlers } from "../../../../env";

const postAlbum: CategoryHandlers["postAlbum"] = async (req, res, next) => {
  const { categoryId, albumId } = req.params;
  try {
    await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        albums: {
          connect: {
            id: albumId,
          },
        },
      },
    });

    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
};

export default postAlbum;
