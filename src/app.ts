import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { errorHandler, notFound } from "./middleware/errors";
import api from "./api";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", api);

app.use(notFound);
app.use(errorHandler);

export default app;
