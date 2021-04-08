import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/video/" });

const isLoggedIn = (req, res, next) => {
  console.log(req.session.isLoggedIn);
};

export const uploadVideo = multerVideo.single("videoFile");

export const middleware = (req, res, next) => {
  res.locals.webTitle = "클론튜브";
  res.locals.routes = routes;
  res.locals.isLoggedIn = isLoggedIn;
  next();
};
