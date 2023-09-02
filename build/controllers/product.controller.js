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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = exports.updateProducts = exports.saveProduct = exports.getProducts = void 0;
const product_validation_1 = require("../validations/product.validation");
const logger_1 = require("../utils/logger");
const product_service_1 = require("../services/product.service");
const uuid_1 = require("uuid");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        if (id) {
            const product = yield (0, product_service_1.getProductById)(id);
            if (!product) {
                logger_1.logger.info("Can't find product,404");
                return res.status(404).json({ status: false, statusCode: 404, message: "product not found" });
            }
            logger_1.logger.info("succes get product");
            return res.status(200).json({ status: true, statusCode: 200, data: product });
        }
        else {
            const product = yield (0, product_service_1.getProduct)();
            logger_1.logger.info("succes get product");
            return res.status(200).json({ status: true, statusCode: 200, data: product });
        }
    }
    catch (err) {
        logger_1.logger.error(`ERR:Get product ${err}`);
    }
});
exports.getProducts = getProducts;
const saveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.productId = (0, uuid_1.v4)();
    try {
        const { error, value } = (0, product_validation_1.productValidation)(req.body);
        if (error) {
            logger_1.logger.error(`ERR Validate : ${error.details[0].message}`);
            return res.status(400)
                .json({ status: false, statusCode: 400, message: error.details[0].message, data: [] });
        }
        const product = yield (0, product_service_1.createProduct)(value);
        logger_1.logger.info("succes save data");
        res.status(200).json({ status: true, statusCode: 200, message: "succes save data", data: product });
    }
    catch (err) {
        logger_1.logger.error("error save product", err);
        return res.status(500).json({ status: false, statusCode: 500, message: err, data: [] });
    }
});
exports.saveProduct = saveProduct;
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const { error, value } = (0, product_validation_1.updateValidation)(req.body);
        if (error) {
            logger_1.logger.error(`ERROR Validate Update product,${error}`);
            return res.status(400).json({ status: false, statusCode: 400, message: error });
        }
        const product = yield (0, product_service_1.updateProduct)(id, req.body);
        if (!product) {
            logger_1.logger.info("Can't find product,404");
            return res.status(404).json({ status: false, statusCode: 404, message: "product not found" });
        }
        logger_1.logger.info("Succes update product");
        res.status(200).json({ status: true, statusCode: 200, message: "Succes update data", data: value });
    }
    catch (err) {
        logger_1.logger.error(err);
        res.status(500).json({ status: false, statusCode: 500, message: err });
    }
});
exports.updateProducts = updateProducts;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.deleteProduct)(req.params.id);
        if (!product) {
            logger_1.logger.info("Can't find product,404");
            return res.status(404).json({ status: false, statusCode: 404, message: "product not found" });
        }
        logger_1.logger.info("Succes delete product");
        res.status(200).json({ status: true, statusCode: 200, message: "Succes delete data" });
    }
    catch (err) {
        logger_1.logger.error(err);
        res.status(500).json({ status: false, statusCode: 500, message: err });
    }
});
exports.deleteProducts = deleteProducts;
//# sourceMappingURL=product.controller.js.map