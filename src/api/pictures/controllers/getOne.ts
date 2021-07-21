import { prisma } from "../../../../prisma/prisma.client";
import { PictureHandlers } from "../../../../env";

const getOne: PictureHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.picture.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      res.status(404);
      throw new Error("Picture not found");
    }

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export default getOne;
