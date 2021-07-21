import express from "express";

import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import getCategories from "./controllers/getCategories";
import getPictures from "./controllers/getPictures";
import postAlbum from "./controllers/post";
import postPicture from "../albums/controllers/postPicture";
import putAlbum from "./controllers/put";
import deletePicture from "./controllers/deletePicture";
import deleteAlbum from "./controllers/delete";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/pictures", getPictures);
router.get("/:id/categories", getCategories);

router.post("/", postAlbum);
router.post("/:albumId/pictures/:pictureId", postPicture);
router.put("/:id", putAlbum);
router.delete("/:id", deleteAlbum);
router.delete("/:albumId/pictures/:pictureId", deletePicture);

export default router;
