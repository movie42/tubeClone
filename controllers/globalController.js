import routes from "../routes";
import User from "../model/userModel";
import bcrypt from "bcrypt";
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

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).render("login", {
      pageTitle: "로그인",
      errorMessage: "회원 정보가 존재하지 않습니다.",
    });
  }
  const confirm = await bcrypt.compare(
    password,
    user.password,
  );
  if (!confirm) {
    res.status(400).render("login", {
      pageTitle: "로그인",
      errorMessage: "잘못된 비밀번호를 입력하였습니다.",
    });
  }

  req.session.loggedin = true;
  req.session.user = user;
  return res.redirect(routes.home);
};

// export const postLogin = passport.authenticate("local", {
//   failureRedirect: routes.login,
//   successRedirect: routes.home,
// });
