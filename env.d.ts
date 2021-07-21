import { RequestHandler } from "express";
import { User, Picture } from "@prisma/client";

type IUserResponse = Omit<User, "password">;

type IUserPost = Omit<User, "id">;

type IUserPut = Omit<User, "id" | "password">;

interface UserHandlers {
  getAll: RequestHandler<Record<string, never>, IUserResponse[], null>;
  getOne: RequestHandler<{ id: string }, IUserResponse, null>;
  post: RequestHandler<Record<string, never>, IUserResponse | Error, IUserPost>;
  put: RequestHandler<{ id: string }, IUserPut, IUserResponse>;
  delete: RequestHandler<{ id: string }, null, null>;
}

type IPictureBoby = Omit<Picture, "id">;

interface PictureHandlers {
  getAll: RequestHandler<Record<string, never>, Picture[], null>;
  getOne: RequestHandler<{ id: string }, Picture, null>;
  post: RequestHandler<Record<string, never>, Picture | Error, IPictureBoby>;
  put: RequestHandler<{ id: string }, IPictureBoby, Picture>;
  delete: RequestHandler<{ id: string }, null, null>;
}
