import passport from "passport";
import User from "./model/userModel";

passport.use(User.createStrategy());

// 쿠키에 아이디를 담을 것이다.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
