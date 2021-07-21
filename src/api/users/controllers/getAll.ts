import { UserHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const getAll: UserHandlers["getAll"] = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
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
    return res.status(200).json(users);
  } catch (e) {
    return next(e);
  }
};

export default getAll;
