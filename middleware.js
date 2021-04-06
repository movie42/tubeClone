import routes from "./routes";

export const middleware = (req, res, next) => {
  res.locals.webTitle = "클론튜브";
  res.locals.routes = routes;
  next();
};
