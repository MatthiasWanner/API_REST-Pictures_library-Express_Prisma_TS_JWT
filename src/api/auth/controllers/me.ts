import { AuthHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const me: AuthHandlers["me"] = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.user.username,
      },
    });

    if (user) {
      delete user.password;
      return res.status(200).json(user);
    }

    res.status(401);
    throw new Error("Unknown user.");
  } catch (e) {
    return next(e);
  }
};

export default me;
