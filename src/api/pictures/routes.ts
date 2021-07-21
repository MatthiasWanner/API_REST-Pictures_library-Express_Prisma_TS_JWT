import express from "express";

import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import postPicture from "./controllers/post";
import putPicture from "./controllers/put";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", postPicture);
router.put("/:id", putPicture);

export default router;
