import routes from "../routes";
import User from "../model/userModel";
import Video from "../model/videoModel";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res, next) => {
  const { name, email, userName, password, password2 } =
    req.body;
  const exists = await User.exists({
    $or: [{ userName }, { email }],
  });

  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "회원가입",
      errorMessage:
        "이미 사용하고 있는 닉네임 혹은 가입된 이메일입니다.",
    });
  }

  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "회원가입",
      errorMessage: "비밀번호가 서로 다릅니다.",
    });
  } else {
    try {
      await User.create({
        name,
        email,
        userName,
        password,
      });
    } catch (error) {
      console.log(error);
      res.status(400).render("join", {
        pageTitle: "회원가입",
        errorMessage: "회원 가입을 완료할 수 없습니다.",
      });
    }
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).populate(
    "videos",
  );
  res.render("userDetail", {
    pageTitle: "사용자 정보",
    user,
  });
};

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetail", {
      pageTitle: "사용자 정보",
      user,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditProfile = (req, res) =>
  res.render("editProfile", {
    pageTitle: "프로필 수정",
    user: req.user,
  });

export const postEditProfile = async (req, res) => {
  const {
    body: { email, name },
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      email,
      name,
    });
    res.redirect(routes.me);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getChangePassword = (req, res) =>
  res.render("changePassword");
export const postChangePassword = (req, res) =>
  res.render("changePassword");
