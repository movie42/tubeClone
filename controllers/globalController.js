export const home = (req, res) => res.render("home", { pageTitle: "메인" });
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const join = (req, res) => res.send("join");
