"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserealizeToken = void 0;
const jwt_1 = require("../utils/jwt");
const deserealizeToken = (req, res, next) => {
    var _a;
    const accesToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!accesToken) {
        return next();
    }
    const { valid, expire, decoded } = (0, jwt_1.jwtVerify)(accesToken);
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }
    next();
};
exports.deserealizeToken = deserealizeToken;
//# sourceMappingURL=deserealizeToken.js.map