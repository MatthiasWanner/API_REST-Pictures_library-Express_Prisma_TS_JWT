import express from "express";
import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";
import postCategory from "./controllers/post";
import putCategory from "./controllers/put";
import deleteCategory from "./controllers/delete";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", postCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

export default router;
