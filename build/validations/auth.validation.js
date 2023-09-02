"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionValidate = exports.authValidate = void 0;
const joi_1 = __importDefault(require("joi"));
const authValidate = (payload) => {
    const schema = joi_1.default.object({
        userId: joi_1.default.string().required(),
        name: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        role: joi_1.default.string().allow("", null)
    });
    return schema.validate(payload);
};
exports.authValidate = authValidate;
const sessionValidate = (payload) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    });
    return schema.validate(payload);
};
exports.sessionValidate = sessionValidate;
//# sourceMappingURL=auth.validation.js.map