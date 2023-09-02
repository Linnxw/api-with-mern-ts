"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const logger_1 = require("./utils/logger");
const routes_1 = require("./routes");
const deserealizeToken_1 = require("./middleware/deserealizeToken");
require("dotenv/config");
require("./utils/connectDb");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//konfigurasi header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
app.use(deserealizeToken_1.deserealizeToken);
(0, routes_1.routes)(app);
app.listen(port, () => {
    logger_1.logger.info("server runing in port " + port);
});
//# sourceMappingURL=index.js.map