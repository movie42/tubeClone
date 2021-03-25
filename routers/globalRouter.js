import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("hi"));
globalRouter.get(routes.login, (req, res) => res.send("login"));
globalRouter.get(routes.logout, (req, res) => res.send("logout"));
globalRouter.get(routes.join, (req, res) => res.send("join"));

export default globalRouter;
