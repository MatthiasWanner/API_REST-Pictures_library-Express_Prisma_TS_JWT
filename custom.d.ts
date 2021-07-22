import { JwtPayload } from "jsonwebtoken";

interface ICustomJWT extends JwtPayload {
  username: string;
  role: "ADMIN" | "USER";
}

declare global {
  namespace Express {
    export interface Request {
      user?: ICustomJWT;
    }
  }
}
