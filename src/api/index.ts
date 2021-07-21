import express from "express";

import users from "./users/routes";
import pictures from "./pictures/routes";
import albums from "./albums/routes";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/users", users);
router.use("/pictures", pictures);
router.use("/albums", albums);

export default router;
