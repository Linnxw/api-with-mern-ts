"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const tes_1 = __importDefault(require("./tes"));
const authRouter_1 = __importDefault(require("./authRouter"));
const productRouter_1 = __importDefault(require("./productRouter"));
const _route = [
    ["/tes", tes_1.default],
    ["/product", productRouter_1.default],
    ["/auth", authRouter_1.default]
];
const routes = (app) => {
    _route.forEach(route => {
        const [url, router] = route;
        app.use(url, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map