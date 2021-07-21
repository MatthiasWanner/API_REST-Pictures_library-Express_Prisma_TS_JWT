import { UserHandlers } from "../../../../env";
import { prisma } from "../../../../prisma/prisma.client";
import bcrypt from "bcrypt";

const postUser: UserHandlers["post"] = async (req, res, next) => {
  const {
    email,
    username,
    password,
    biography,
    avatarUrl,
    firstname,
    lastname,
  } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
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

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
export default postUser;
