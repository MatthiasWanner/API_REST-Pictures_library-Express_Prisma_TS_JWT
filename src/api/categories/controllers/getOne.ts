import { prisma } from "../../../../prisma/prisma.client";
import { CategoryHandlers } from "../../../../env";

const getOne: CategoryHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) return res.sendStatus(204);

    return res.status(200).json(category);
  } catch (e) {
    next(e);
  }
};

export default getOne;
