import passport from "passport";
import routes from "../routes";
import User from "../model/userModel";
import Video from "../model/videoModel";

export const githubLogin = passport.authenticate("github", {
  scope: ["user:email"],
});

export const githubLoginCallback = async (_, __, profile, done) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id).populate("videos");
  res.render("userDetail", { pageTitle: "사용자 정보", user });
};

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    console.log(user);
    res.render("userDetail", { pageTitle: "사용자 정보", user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "프로필 수정", user: req.user });

export const postEditProfile = async (req, res) => {
  const {
    body: { email, name },
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, { email, name });
    res.redirect(routes.me);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getChangePassword = (req, res) => res.render("changePassword");
export const postChangePassword = (req, res) => res.render("changePassword");
