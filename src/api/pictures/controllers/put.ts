import { PictureHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const putUser: PictureHandlers["put"] = async (req, res, next) => {
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
export default putUser;
