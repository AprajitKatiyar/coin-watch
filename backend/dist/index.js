"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pollData_1 = require("./services/pollData");
const app = (0, express_1.default)();
const codes = ["BTC", "ETH", "GRIN"];
setInterval(() => {
    console.log("Polling data...");
    (0, pollData_1.fetchData)(codes);
}, 10000);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
