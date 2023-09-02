"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = exports.jwtSign = void 0;
const enviremoent_1 = __importDefault(require("../config/enviremoent"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = require("./logger");
const jwtSign = (payload, options) => {
    return jsonwebtoken_1.default.sign(payload, `${enviremoent_1.default.jwt_private}`, Object.assign(Object.assign({}, (options && options)), { algorithm: 'RS256' }));
};
exports.jwtSign = jwtSign;
const jwtVerify = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, enviremoent_1.default.jwt_public);
        return {
            valid: true,
            expired: false,
            decoded
        };
    }
    catch (err) {
        logger_1.logger.error(`ERROR: jwtverify = ${err}`);
        return {
            valid: false,
            expired: err.message === "jwt is expired or not eligible to use",
            decoded: false
        };
    }
};
exports.jwtVerify = jwtVerify;
//# sourceMappingURL=jwt.js.map