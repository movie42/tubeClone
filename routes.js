// global
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";

const USER = "/user";
const USER_DETAIL = "/:id(\\d+)";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

const VIDEO = "/video";
const UPLOAD_VIDEO = "/upload";
const VIDEO_DETAIL = "/:id(\\d+)";
const EDIT_VIDEO = "/:id(\\d+)/edit";
const DELETE_VIDEO = "/:id(\\d+)/delete";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  user: USER,
  userDetail: (id) => {
    if (id) {
      return `/user/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  video: VIDEO,
  videoDetail: (id) => {
    if (id) {
      return `/video/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  uploadVideo: UPLOAD_VIDEO,
  deleteVideo: (id) => {
    if (id) {
      return `/video/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/video/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  me: ME,
};

export default routes;
