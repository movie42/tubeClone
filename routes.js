// global
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";

const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

const VIDEO = "/video";
const UPLOAD_VIDEO = "/upload-video";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/:id/delete-video";

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  user: USER,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  videoDetail: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  uploadVideo: UPLOAD_VIDEO,
  deleteVideo: (id) => {
    if (id) {
      return `/${id}/delete-video`;
    } else {
      return DELETE_VIDEO;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/${id}/edit-video`;
    } else {
      return EDIT_VIDEO;
    }
  },
};

export default routes;
