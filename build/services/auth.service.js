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
exports._deleteUser = exports._findByEmail = exports._getUser = exports._createUser = void 0;
const user_models_1 = __importDefault(require("../models/user.models"));
const _createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_1.default.create(payload);
});
exports._createUser = _createUser;
const _getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_1.default.find();
});
exports._getUser = _getUser;
const _findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_1.default.findOne({ email });
});
exports._findByEmail = _findByEmail;
const _deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_models_1.default.findOneAndDelete({ userId: id });
});
exports._deleteUser = _deleteUser;
//# sourceMappingURL=auth.service.js.map