import passport from "passport";
import routes from "../routes";
import UserModel from "../model/userModel";
import VideoModel from "../model/videoModel";

export const home = async (req, res) => {
  const video = await VideoModel.find({});
  try {
    res.render("home", { pageTitle: "메인", video });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTItle: "메인", video: [] });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  res.render("logout");
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { email, name, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "회원가입" });
  } else {
    try {
      const user = await UserModel({
        email,
        name,
      });
      await UserModel.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
    }
  }
};
