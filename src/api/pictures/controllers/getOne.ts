import { prisma } from "../../../../prisma/prisma.client";
import { PictureHandlers } from "../../../../env";

const getOne: PictureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const picture = await prisma.picture.findUnique({
      where: {
        id,
      },
    });

    if (!picture) return res.sendStatus(204);

    return res.status(200).json(picture);
  } catch (e) {
    next(e);
  }
};

export default getOne;
