import express from "express";

import users from "./users/routes";
import pictures from "./pictures/routes";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/users", users);
router.use("/pictures", pictures);

export default router;
