import { prisma } from "../../../../prisma/prisma.client";
import { AlbumHandlers } from "../../../../env";

const getCategories: AlbumHandlers["getCategories"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    const categories = await prisma.category.findMany({
      where: {
        albums: {
          some: {
            id,
          },
        },
      },
    });

    return res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

export default getCategories;
