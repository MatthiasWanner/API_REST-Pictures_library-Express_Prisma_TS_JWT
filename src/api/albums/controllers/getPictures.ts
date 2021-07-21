import { prisma } from "../../../../prisma/prisma.client";
import { AlbumHandlers } from "../../../../env";

const getPictures: AlbumHandlers["getPictures"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const pictures = await prisma.picture.findMany({
      where: {
        Albums: {
          some: {
            id,
          },
        },
      },
    });

    return res.status(200).json(pictures);
  } catch (e) {
    next(e);
  }
};

export default getPictures;
