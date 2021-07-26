import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AuthHandlers } from "../interfaces";
import { prisma } from "../../../../prisma/prisma.client";

const login: AuthHandlers["login"] = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      res.status(401);
      throw new Error("Unknow user");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      res.status(401);
      throw new Error("Wrong password");
    }

    const { password: _pw, ...withoutPassword } = user;

    const token = jwt.sign(
      { username: user.username, role: user.role },
      process.env.SECRET as string,
      { expiresIn: "24h" }
    );

    res.cookie("token", token, {
      maxAge: 86_400_000,
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
    });

    return res.status(200).json(withoutPassword);
  } catch (e) {
    res.status(400);
    return next(e);
  }
};
export default login;
