import express from "express";
import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import postAlbum from "./controllers/post";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", postAlbum);

export default router;
