import { prisma } from "../../../../prisma/prisma.client";
import { UserHandlers } from "../../../../env";

const getOne: UserHandlers["getCategories"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const categories = await prisma.category.findMany({
      where: {
        userId: id,
      },
    });

    return res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

export default getOne;
