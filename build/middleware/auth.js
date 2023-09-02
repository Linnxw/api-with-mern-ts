"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredAdmin = exports.requiredUser = void 0;
const requiredUser = (req, res, next) => {
    const user = res.locals.user;
    if (!user) {
        return res.sendStatus(403);
    }
    next();
};
exports.requiredUser = requiredUser;
const requiredAdmin = (req, res, next) => {
    const user = res.locals.user;
    if (!user || user.role !== "admin") {
        return res.sendStatus(403);
    }
    return next();
};
exports.requiredAdmin = requiredAdmin;
//# sourceMappingURL=auth.js.map