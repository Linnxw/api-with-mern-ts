"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = (0, express_1.Router)();
productRouter.get("/", product_controller_1.getProducts);
productRouter.get("/:id", product_controller_1.getProducts);
productRouter.post("/", auth_1.requiredUser, product_controller_1.saveProduct);
productRouter.patch("/:id", auth_1.requiredUser, product_controller_1.updateProducts);
productRouter.delete("/:id", auth_1.requiredUser, product_controller_1.deleteProducts);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map