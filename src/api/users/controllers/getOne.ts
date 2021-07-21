import { prisma } from "../../../../prisma/prisma.client";
import { UserHandlers } from "../../../../env";

const getOne: UserHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        firstname: true,
        lastname: true,
        email: true,
        biography: true,
        avatarUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) return res.sendStatus(204);

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export default getOne;
