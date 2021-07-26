import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { errorHandler, notFound } from "./middleware/errors";
import api from "./api";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", api);

app.use(notFound);
app.use(errorHandler);

export default app;
