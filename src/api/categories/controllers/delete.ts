import { CategoryHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const deleteCategory: CategoryHandlers["delete"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.category.delete({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};

export default deleteCategory;
