import { RequestHandler } from "express";
import { User, Picture, Album, Category } from "@prisma/client";

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

type IPicturePostBoby = Omit<Picture, "id">;

type IPicturePutBody = Omit<Picture, "id" | "url" | "userId">;

interface PictureHandlers {
  getAll: RequestHandler<Record<string, never>, Picture[], null>;
  getOne: RequestHandler<{ id: string }, Picture, null>;
  post: RequestHandler<
    Record<string, never>,
    Picture | Error,
    IPicturePostBoby
  >;
  put: RequestHandler<{ id: string }, null, IPicturePutBody>;
  delete: RequestHandler<{ id: string }, null, null>;
}

type IAlbumPostBoby = Omit<Album, "id">;

type IAlbumPutBody = Omit<Picture, "id" | "userId">;

interface AlbumHandlers {
  getAll: RequestHandler<Record<string, never>, Album[], null>;
  getOne: RequestHandler<{ id: string }, Album, null>;
  getPictures: RequestHandler<{ id: string }, Picture[], null>;
  post: RequestHandler<Record<string, never>, Album | Error, IAlbumPostBoby>;
  postPicture: RequestHandler<
    { albumId: string; pictureId: string },
    null | Error,
    null
  >;
  put: RequestHandler<{ id: string }, null, IAlbumPutBody>;
  delete: RequestHandler<{ id: string }, null, null>;
  deletePicture: RequestHandler<
    { albumId: string; pictureId: string },
    null,
    null
  >;
}

type ICategoryPostBoby = Omit<Category, "id">;

type ICategoryPutBoby = Omit<Category, "id" | "userId">;

interface CategoryHandlers {
  getAll: RequestHandler<Record<string, never>, Category[], null>;
  getOne: RequestHandler<{ id: string }, Category, null>;
  post: RequestHandler<
    Record<string, never>,
    Category | Error,
    ICategoryPostBoby
  >;
  put: RequestHandler<{ id: string }, null, ICategoryPutBoby>;
  delete: RequestHandler<{ id: string }, null, null>;
}
