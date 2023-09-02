"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    productId: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, { timestamps: true });
const productModel = mongoose_1.default.model('product', productSchema);
exports.default = productModel;
//# sourceMappingURL=product.models.js.map