import express from "express";

import deleteAlbum from "./controllers/delete";
import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import postAlbum from "./controllers/post";
import putAlbum from "./controllers/put";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", postAlbum);
router.put("/:id", putAlbum);
router.delete("/:id", deleteAlbum);

export default router;
