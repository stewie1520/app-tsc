import express from "express";
import { middleware as expressCtxMiddleware } from "express-ctx";
import bodyParser from "body-parser";
import helmet from "helmet";
import "dotenv/config";
import config from "config";

import { isDev } from "./common/util/env";

const app = express();

app.use(helmet({
  crossOriginResourcePolicy: {
    policy: isDev() ? "cross-origin" : "same-site",
  },
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressCtxMiddleware);

app.listen(config.get<string>("Connection.port"), () => {
  console.log("server is listening on port 3000");
});

