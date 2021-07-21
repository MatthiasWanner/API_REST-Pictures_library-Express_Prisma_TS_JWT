import { prisma } from "../../../../prisma/prisma.client";
import { AlbumHandlers } from "../../../../env";

const postAlbum: AlbumHandlers["post"] = async (req, res, next) => {
  const { title, description, userId } = req.body;

  try {
    const album = await prisma.album.create({
      data: {
        title,
        description,
        userId,
      },
    });

    res.status(201).json(album);
  } catch (err) {
    next(err);
  }
};
export default postAlbum;
