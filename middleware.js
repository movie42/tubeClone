import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/video/" });

export const uploadVideo = multerVideo.single("videoFile");

export const middleware = (req, res, next) => {
  res.locals.webTitle = "클론튜브";
  res.locals.routes = routes;
  res.locals.isLoggedIn = req.get("Cookie").split("=")[1];
  next();
};
