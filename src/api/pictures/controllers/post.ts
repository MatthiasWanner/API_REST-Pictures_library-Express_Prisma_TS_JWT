import { prisma } from "../../../../prisma/prisma.client";
import { PictureHandlers } from "../../../../env";

const postPicture: PictureHandlers["post"] = async (req, res, next) => {
  const { title, url, description, userId } = req.body;

  try {
    const picture = await prisma.picture.create({
      data: {
        title,
        url,
        description,
        userId,
      },
    });

    res.status(201).json(picture);
  } catch (err) {
    next(err);
  }
};
export default postPicture;
