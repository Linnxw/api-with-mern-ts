"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enviremoent_1 = __importDefault(require("../config/enviremoent"));
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("./logger");
mongoose_1.default.connect(`${enviremoent_1.default.db}`)
    .then(conect => {
    logger_1.logger.info("Mongoo connected");
})
    .catch(err => {
    logger_1.logger.error(err);
});
//# sourceMappingURL=connectDb.js.map