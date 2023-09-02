"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = require("../utils/logger");
const tesRouter = (0, express_1.Router)();
tesRouter.get("/", (req, res) => {
    logger_1.logger.info("Succes getConnect tes.ts");
    res.status(200).json({ msg: "succes connect" });
});
exports.default = tesRouter;
//# sourceMappingURL=tes.js.map