import express from "express";

import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import getAlbums from "./controllers/getAlbums";
import getPictures from "./controllers/getPictures";
import postUser from "./controllers/post";
import putUser from "./controllers/put";
import deleteUser from "./controllers/deleteUser";
import getCategories from "./controllers/getCategories";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/albums", getAlbums);
router.get("/:id/pictures", getPictures);
router.get("/:id/categories", getCategories);

router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
