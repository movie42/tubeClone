import passport from "passport";
import routes from "../routes";
import User from "../model/userModel";

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

export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "사용자 정보", user: req.user });
};

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "사용자 정보", user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
