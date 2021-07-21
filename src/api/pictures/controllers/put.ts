import { PictureHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const putPicture: PictureHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    await prisma.picture.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
export default putPicture;
