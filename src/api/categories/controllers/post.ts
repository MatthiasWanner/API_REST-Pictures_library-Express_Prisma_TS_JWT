import { prisma } from "../../../../prisma/prisma.client";
import { CategoryHandlers } from "../../../../env";

const postCategory: CategoryHandlers["post"] = async (req, res, next) => {
  const { name, userId } = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        name,
        userId,
      },
    });

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};
export default postCategory;
