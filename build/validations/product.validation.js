"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidation = exports.productValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const productValidation = (payload) => {
    const schema = joi_1.default.object({
        productId: joi_1.default.string().required(),
        name: joi_1.default.string().required(),
        price: joi_1.default.number().allow("", null)
    });
    return schema.validate(payload);
};
exports.productValidation = productValidation;
const updateValidation = (payload) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().allow("", null),
        price: joi_1.default.number().allow("", null)
    });
    return schema.validate(payload);
};
exports.updateValidation = updateValidation;
//# sourceMappingURL=product.validation.js.map