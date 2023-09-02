"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../middleware/auth");
const auth_controller_1 = require("../controllers/auth.controller");
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
authRouter.post("/", auth_1.requiredUser, auth_controller_1.createUser);
authRouter.get("/", auth_controller_1.getUser);
authRouter.post("/login", auth_controller_1.createSession);
authRouter.delete("/:id", auth_1.requiredAdmin, auth_controller_1.deleteUser);
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map