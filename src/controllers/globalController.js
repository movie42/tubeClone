import routes from "../routes";
import User from "../model/userModel";
import bcrypt from "bcrypt";
import VideoModel from "../model/videoModel";

export const home = async (req, res) => {
  const video = await VideoModel.find({});
  try {
    res.render("global/home", { pageTitle: "메인", video });
  } catch (error) {
    console.log(error);
    res.render("global/home", { pageTItle: "메인", video: [] });
  }
};

export const getLogin = (req, res) => {
  res.render("global/login", { pageTitle: "로그인" });
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    socialOnly: false,
  });
  if (!user) {
    return res.status(400).render("global/login", {
      pageTitle: "로그인",
      errorMessage: "회원 정보가 존재하지 않습니다.",
    });
  }
  const confirm = await bcrypt.compare(password, user.password);
  if (!confirm) {
    return res.status(400).render("global/login", {
      pageTitle: "로그인",
      errorMessage: "잘못된 비밀번호를 입력하였습니다.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect(routes.home);
};
