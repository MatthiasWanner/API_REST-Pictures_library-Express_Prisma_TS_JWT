import jwt from "jsonwebtoken";
import { ICustomJWT } from "../../custom";

import { AuthHandlers } from "../../env";

const checkToken: AuthHandlers["checkToken"] = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      throw new Error("You need to login.");
    }

    req.user = jwt.verify(token, process.env.SECRET as string) as ICustomJWT;

    return next();
  } catch (err) {
    res.status(401);

    return next(err);
  }
};

export default checkToken;
