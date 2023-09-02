"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.createProduct = exports.getProduct = void 0;
const product_models_1 = __importDefault(require("../models/product.models"));
const getProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.default.find();
});
exports.getProduct = getProduct;
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.default.create(payload);
});
exports.createProduct = createProduct;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.default.findOne({ productId: id });
});
exports.getProductById = getProductById;
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.default.findOneAndUpdate({ productId: id }, { $set: payload });
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.default.findOneAndDelete({ productId: id });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.service.js.map