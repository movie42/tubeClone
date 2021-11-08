import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import expressSession from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import routes from "./routes";
import { localMiddleware } from "./middleware";

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL
    })
  })
);

app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(morgan("dev"));

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    next();
  });
});

app.use(localMiddleware);
app.use(flash());
app.use("/api", apiRouter);
app.use(routes.home, rootRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);

export default app;
