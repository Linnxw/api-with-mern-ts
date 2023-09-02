"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    db: process.env.DB,
    jwt_private: `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`,
    jwt_public: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAkW1zqJmZwk1CSzgPrEcU
ZBi19vY7z8CtZGdep+P11fZ/2HBKevT3lga09oC748Th8Y7EGiztTy2qEfyZcywo
GtEXCeGdBtTE+2ckz1wDaghVuD6buFZJFr715rKo8Jw9ar+WciNOVIMRgPeTbE+D
WrrnPlPJ40/fR44RyjPNBwKnVuvbhVOt2+bD1MAFX2vuwPcaHCT3ohYrDuauZv8I
E1UyrbmWO/kdZL531b2Oy4BfIVzTi4p1fWEfRAWWuao817j7setjzB2MDCdAWklq
kLG8aTRbTBsBvKLVedDmFIkROVuVbTVh+eK8bus4k+qLHm/9fKPWsWRKyEvYiZUd
K+nii0YV9DwuSRS+gjDwmQGOGyAoBJMlbh0s98Wrtn/V9Pblr3MlJvMDlNlWIoBh
pbPWmsWGI01x7Uu2lpEZcExqIy7e1rjZ9CLThzJ/sgw4HjyPI9PirviP7weth41c
EGwa1ipUHc5BKKslzCTn9LZXS5cDjkAO4pvMqFQIEHFGyZpNZ3MHpI17oCDF37LJ
NNF2X2l50nxK/nFNKuWQWsAwNDTlCuAhQSxfFNcC1jofIw1NCJs+faD7V9ZM7Enl
Qx14wobFroO11uLts3OxHQBO6AZqUDsD9PWaRzzt5rB5acem7JyWkokHyfhVcF/a
fRN4+dq3AdFQXI0mlv4h4dsCAwEAAQ==
-----END PUBLIC KEY-----`
};
exports.default = config;
//# sourceMappingURL=enviremoent.js.map