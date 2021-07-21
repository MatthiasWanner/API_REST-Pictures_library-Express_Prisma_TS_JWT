import { PictureHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const getAll: PictureHandlers["getAll"] = async (req, res, next) => {
  try {
    const pictures = await prisma.picture.findMany();
    return res.status(200).json(pictures);
  } catch (e) {
    return next(e);
  }
};

export default getAll;
