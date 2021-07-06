import routes from "../routes";
import User from "../model/userModel";
import fetch from "node-fetch";
import Video from "../model/videoModel";
import session from "express-session";

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
      return res.redirect("/");
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
  req.session.destroy();
  return res.redirect(routes.home);
};

// export const getMe = async (req, res) => {
//   // const user = await User.findById(req.user.id).populate(
//   //   "videos",
//   // );
//   res.render("userDetail", {
//     pageTitle: "사용자 정보",
//     user,
//   });
// };

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

export const getEditProfile = (req, res) => {
  return res.render("editProfile", {
    pageTitle: "프로필 수정",
  });
};

export const postEditProfile = async (req, res) => {
  const {
    session: {
      user: {
        _id,
        name: sessionName,
        email: sessionEmail,
        userName: sessionUserName,
      },
    },
    body: { name, email, userName },
  } = req;
  // session과 form의 정보가 다르면 바꾼다는 것이다.
  if (
    sessionName !== name ||
    sessionEmail !== email ||
    sessionUserName !== userName
  ) {
    try {
      // email, name이 이미 있는 경우를 체크해야한다.

      const updateUser = await User.findByIdAndUpdate(
        _id,
        {
          email,
          userName,
          name,
        },
        { new: true },
      );

      req.session.user = updateUser;
      res.redirect(`/user${routes.editProfile}`);
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  } else {
    return res.redirect(`/`);
  }
};

export const startGithubLogin = (req, res) => {
  const baseUrl =
    "https://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    allow_signup: false,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const callbackGithubLogin = async (req, res) => {
  const baseUrl =
    "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  console.log(tokenRequest);

  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) =>
        email.primary === true && email.verified === true,
    );
    if (!emailObj) {
      return res.redirect(routes.login);
    }
    let user = await User.findOne({
      email: emailObj.email,
    });
    if (!user) {
      user = await User.create({
        name: userData.name,
        userName: userData.login,
        email: emailObj.email,
        password: "",
        socialOnly: true,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect(routes.login);
  }
};

export const getChangePassword = (req, res) =>
  res.render("changePassword");
export const postChangePassword = (req, res) =>
  res.render("changePassword");
