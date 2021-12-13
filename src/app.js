import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import routes from "./routes";
import boardRouter from "./routers/boardRouter";
import { localMiddleware } from "./middleware";

const app = express();

app.use((req, res, next) => {
  if (req.get("X-Forwarded-Proto") == "https" || req.hostname == "localhost") {
    next();
  } else if (
    req.get("X-Forwarded-Proto") != "https" &&
    req.get("X-Forwarded-Port") != "443"
  ) {
    res.redirect(`https://${req.hostname}${req.url}`);
  }
});

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'unsafe-eval'", process.env.URL], //development mode should allow 'unsafe-eval' because eval function
      "img-src": ["'self'", "data:", "https:"],
      "frame-src": "https://www.youtube.com/",
      "font-src": ["'self'", "data:", "https:"],
      "style-src": [
        "'self'",
        "'unsafe-inline'",
        "https://cdnjs.cloudflare.com",
      ],
    },
  }),
);
app.use(
  helmet.hsts({
    maxAge: 31536000,
    preload: true,
  }),
);
app.use(helmet.xssFilter());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
  }),
);

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(morgan("dev"));

app.use(localMiddleware);
app.use(flash());
app.use("/api", apiRouter);
app.use(routes.home, rootRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);
app.use("/board", boardRouter);

export default app;
