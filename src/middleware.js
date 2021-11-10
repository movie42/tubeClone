import routes from "./routes";
import multer from "multer";

const multerVideo = multer({
  dest: "uploads/video/",
  limits: {
    fileSize: 10000000
  }
});

const multerAvatar = multer({
  dest: "uploads/avatar/",
  limits: {
    fileSize: 3000000
  }
});

export const uploadVideo = multerVideo.single("video");
export const uploadAvatar = multerAvatar.single("avatar");

export const localMiddleware = (req, res, next) => {
  res.locals.webTitle = "클론튜브";
  res.locals.routes = routes;
  res.locals.loggedUser = Boolean(req.session.loggedIn);
  res.locals.user = req.session.user || {};
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.session.loggedIn) {
    req.flash("error", "접근할 수 없습니다.");
    return res.redirect(routes.home);
  } else {
    return next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "로그인이 필요합니다.");
    return res.redirect(routes.login);
  }
};
