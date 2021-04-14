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

export const postLogin = (req, res) => {
  req.session.isLoggedIn = true;
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.render("logout");
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res) => {
  const {
    body: { email, password, password2, name },
  } = req;
  if (password === password2) {
    await UserModel.create({
      email,
      name,
      password,
    });
    return res.redirect(routes.home);
  }
};
