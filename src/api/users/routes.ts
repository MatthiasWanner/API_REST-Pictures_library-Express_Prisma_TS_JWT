import express from "express";

import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import postUser from "./controllers/post";
import putUser from "./controllers/put";
import deleteUser from "./controllers/deleteUser";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
