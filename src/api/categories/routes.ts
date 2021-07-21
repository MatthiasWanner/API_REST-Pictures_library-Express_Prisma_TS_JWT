import express from "express";

import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import getAlbums from "./controllers/getAlbums";
import postCategory from "./controllers/post";
import postAlbum from "./controllers/postAlbum";
import putCategory from "./controllers/put";
import deleteCategory from "./controllers/delete";
import deleteAlbum from "./controllers/deleteAlbum";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/albums", getAlbums);

router.post("/", postCategory);
router.post("/:categoryId/albums/:albumId", postAlbum);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);
router.delete("/:categoryId/albums/:albumId", deleteAlbum);

export default router;
