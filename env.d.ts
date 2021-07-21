import { RequestHandler } from "express";
import { User, Picture, Album } from "@prisma/client";

type IUserResponse = Omit<User, "password">;

type IUserPost = Omit<User, "id">;

type IUserPut = Omit<User, "id" | "password">;

interface UserHandlers {
  getAll: RequestHandler<Record<string, never>, IUserResponse[], null>;
  getOne: RequestHandler<{ id: string }, IUserResponse, null>;
  post: RequestHandler<Record<string, never>, IUserResponse | Error, IUserPost>;
  put: RequestHandler<{ id: string }, null, IUserPut>;
  delete: RequestHandler<{ id: string }, null, null>;
}

type IPictureBoby = Omit<Picture, "id">;

type IPicturePutBody = Omit<Picture, "id" | "url" | "userId">;

interface PictureHandlers {
  getAll: RequestHandler<Record<string, never>, Picture[], null>;
  getOne: RequestHandler<{ id: string }, Picture, null>;
  post: RequestHandler<Record<string, never>, Picture | Error, IPictureBoby>;
  put: RequestHandler<{ id: string }, null, IPictureBoby>;
  delete: RequestHandler<{ id: string }, null, null>;
}

type IAlbumBoby = Omit<Album, "id">;

interface AlbumHandlers {
  getAll: RequestHandler<Record<string, never>, Album[], null>;
  getOne: RequestHandler<{ id: string }, Album, null>;
  post: RequestHandler<Record<string, never>, Album | Error, IAlbumBoby>;
  put: RequestHandler<{ id: string }, null, IAlbumBoby>;
  delete: RequestHandler<{ id: string }, null, null>;
}
