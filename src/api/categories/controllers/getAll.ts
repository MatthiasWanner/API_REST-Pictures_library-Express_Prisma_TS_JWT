import { CategoryHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const getAll: CategoryHandlers["getAll"] = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany();
    return res.status(200).json(categories);
  } catch (e) {
    return next(e);
  }
};

export default getAll;
