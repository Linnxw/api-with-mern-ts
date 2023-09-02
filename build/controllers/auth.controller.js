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
exports.deleteUser = exports.createSession = exports.getUser = exports.createUser = void 0;
const auth_service_1 = require("../services/auth.service");
const logger_1 = require("../utils/logger");
const uuid_1 = require("uuid");
const jwt_1 = require("../utils/jwt");
const password_hash_1 = __importDefault(require("password-hash"));
const auth_validation_1 = require("../validations/auth.validation");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.userId = (0, uuid_1.v4)();
    const { error, value } = (0, auth_validation_1.authValidate)(req.body);
    if (error) {
        logger_1.logger.error(`ERROR: user - create - validate= ${error}`);
        return res.status(400).json({ status: false, statusCode: 400, message: error.details[0].message
        });
    }
    try {
        value.password = password_hash_1.default.generate(value.password);
        yield (0, auth_service_1._createUser)(value);
        logger_1.logger.info("Succes create user");
        res.status(200).json({ status: true, statusCode: 200, message: "Succes create user", data: value });
    }
    catch (error) {
        logger_1.logger.error(`ERROR: user - create - create= ${error.message}`);
        res.status(500).json({ status: false, statusCode: 500, message: error.message });
    }
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, auth_service_1._getUser)();
        logger_1.logger.info("Succes get user");
        res.status(200).json({ status: true, statusCode: 200, message: "Succes get user", data: user });
    }
    catch (err) {
        logger_1.logger.error("ERROR:user - get ", err);
    }
});
exports.getUser = getUser;
const createSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = (0, auth_validation_1.sessionValidate)(req.body);
    if (error) {
        logger_1.logger.error(`ERROR:user - session = ${error.details[0].message}`);
        return res.status(400).json({ status: false, statusCode: 400, message: error.details[0].message });
    }
    try {
        const user = yield (0, auth_service_1._findByEmail)(value.email);
        const match = password_hash_1.default.verify(value.password, user.password);
        if (!match) {
            return res.status(400).json({ status: false, statusCode: 401, message: "Invalid email or password" });
        }
        const jwt = (0, jwt_1.jwtSign)({ id: user.userId, name: user.name, email: user.email, role: user.role }, { expiresIn: '1d' });
        return res.status(200).json({ status: true, statusCode: 200, data: jwt });
    }
    catch (error) {
        logger_1.logger.error(`ERROR: user - session = ${error.message}`);
        res.status(500).json({ status: false, statusCode: 500, message: error.message });
    }
});
exports.createSession = createSession;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_service_1._deleteUser)(req.params.id);
        logger_1.logger.info(`SUCCES user - delete`);
        return res.status(200).json({ status: true, statusCode: 200, message: "Succes delete user" });
    }
    catch (err) {
        logger_1.logger.error(`ERROR: user - delete = ${err}`);
        res.status(500).json({ status: false, statusCode: 500, message: err.message });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=auth.controller.js.map