// global stuff
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id" // --> /users/1 이런식
const EDIT_PROFILE = "/edit-profile"; //router파일에서 이거 get하는걸 먼저 써줘야 edit-profile을 id라고 인식하지 않음.주의!
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; // --> /videos/1/edit 이런식
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if (id) {
            return  `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if(id) {
            return `/videos/${id}`;
        }else{
            return VIDEO_DETAIL
        }
    },
    editVideo: id => {
        if(id){
          return `/videos/${id}/edit`;
        }else{
          return EDIT_VIDEO;
        }
    },
    deleteVideo: id => {
        if(id){
            return `/videos/${id}/delete`;
        }else {
            return DELETE_VIDEO;
        }
    }
};

export default routes;