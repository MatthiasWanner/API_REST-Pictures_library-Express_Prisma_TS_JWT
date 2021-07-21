import express from "express";
import getAll from "./controllers/getAll";
import getOne from "./controllers/getOne";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

export default router;
