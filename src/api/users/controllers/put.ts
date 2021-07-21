import { UserHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";

const putUser: UserHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const { email, username, biography, avatarUrl, firstname, lastname } =
    req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        username,
        biography,
        avatarUrl,
        firstname,
        lastname,
      },
      select: {
        id: true,
        email: true,
        username: true,
        firstname: true,
        lastname: true,
        avatarUrl: true,
        biography: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export default putUser;
