import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"})
};

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"})
    } else {
        // To Do : register User
        // To Do : Log User In
        res.redirect(routes.home)
    }
    res.render("join", {pageTitle: "Join"})
};

export const getLogin = (req, res) => res.render("login", {pageTitle: "Login"});

export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // To Do : 로그아웃 처리
    res.redirect(routes.home);
}

export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});