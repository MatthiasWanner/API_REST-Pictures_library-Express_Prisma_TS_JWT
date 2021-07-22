import { prisma } from "../../../../prisma/prisma.client";
import { UserHandlers } from "../../../../env";

const getOne: UserHandlers["getPictures"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const pictures = await prisma.picture.findMany({
      where: {
        userId: id,
      },
    });

    return res.status(200).json(pictures);
  } catch (e) {
    next(e);
  }
};

export default getOne;
