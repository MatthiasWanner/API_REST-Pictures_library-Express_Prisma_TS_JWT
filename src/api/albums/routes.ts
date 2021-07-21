import express from "express";

import deleteAlbum from "./controllers/delete";
import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import getPictures from "./controllers/getPictures";
import postAlbum from "./controllers/post";
import postPicture from "../albums/controllers/postPicture";
import putAlbum from "./controllers/put";
import deletePicture from "./controllers/deletePicture";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/pictures", getPictures);

router.post("/", postAlbum);
router.post("/:albumId/pictures/:pictureId", postPicture);
router.put("/:id", putAlbum);
router.delete("/:id", deleteAlbum);
router.delete("/:albumId/pictures/:pictureId", deletePicture);

export default router;
