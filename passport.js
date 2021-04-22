import passport from "passport";
import GithubStrategy from "passport-github2";
import User from "./model/userModel";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:3000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// 쿠키에 아이디를 담을 것이다.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
