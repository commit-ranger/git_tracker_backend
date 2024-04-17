function require_user(req, res, next) {
    console.log("beginning authorization prosess", req.user)
    
    if (!req.user) {
        next({
            name: "MissingUserError",
            message: "You must be logged in to perform this action",
        });
    }
    console.log("made it through require user")
    next();
}
function require_admin(req, res, next) {
    if (!req.user.is_admin) {
        next({
            name: "No Admin access found",
            message: "You must be an admin to perform this action",
        });
    }

    next();
}

module.exports = {require_admin, require_user};