import { AuthHandlers } from "../interfaces";
import { prisma } from "../../../../prisma/prisma.client";

const me: AuthHandlers["me"] = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.user?.username,
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

    if (user) {
      return res.status(200).json(user);
    }

    res.status(401);
    throw new Error("Unknown user.");
  } catch (e) {
    return next(e);
  }
};

export default me;
