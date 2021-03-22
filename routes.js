// global
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";

const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_DETAIL = "/:id/edit";
const CHANGE_PASSWORD = "/:id/change-password";

const VIDEO = "/video";
const UPLOAD_VIDEO = "/upload-video";
const DELETE_VIDEO = "/:id/delete-video";
const EDIT_VIDEO = "/:id/edit-video";

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  user: USER,
  userDetail: USER_DETAIL,
  editDetail: EDIT_DETAIL,
  video: VIDEO,
  uploadVideo: UPLOAD_VIDEO,
  deleteVideo: DELETE_VIDEO,
  editVideo: EDIT_VIDEO,
  changePassword: CHANGE_PASSWORD,
};

export default routes;
