export const middleware = (req, res, next) => {
  res.locals.webTitle = "클론튜브";
  next();
};
