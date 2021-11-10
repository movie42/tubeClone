import routes from "../routes";
import User from "../model/userModel";
import bcrypt from "bcrypt";
import VideoModel from "../model/videoModel";
import Editor from "../model/editorModel";

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
  const user = await User.findOne({
    email,
    socialOnly: false,
  });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "로그인",
      errorMessage: "회원 정보가 존재하지 않습니다.",
    });
  }
  const confirm = await bcrypt.compare(password, user.password);
  if (!confirm) {
    return res.status(400).render("login", {
      pageTitle: "로그인",
      errorMessage: "잘못된 비밀번호를 입력하였습니다.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect(routes.home);
};

// test editor

export const getEditor = (req, res) => {
  try {
    return res.render("testEditor", { pageTitle: "테스트 에디터" });
  } catch (e) {
    console.log(e);
    res.render("404", { pageTitle: "404" });
  }
};

export const postEditor = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { editorBody, headTitle },
  } = req;

  try {
    console.log(editorBody);

    await Editor.create({
      headTitle,
      editorBody,
      creator: _id,
    });

    return res.sendStatus(303);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const getEditorData = async (req, res) => {
  try {
    const data = await Editor.find({});

    const body = data.map((value) => value.editorBody);
    console.log(body);
    return res.render("getEditorData", {
      pageTitle: "데이터 얻기",
      body,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getParagraph = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const notice = await Notice.findById(id);

    return res.status(303).json({ notice });
  } catch (e) {
    console.log(e);
  }
};
