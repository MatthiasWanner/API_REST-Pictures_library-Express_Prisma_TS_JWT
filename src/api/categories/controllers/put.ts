import { CategoryHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const putCategory: CategoryHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
export default putCategory;
