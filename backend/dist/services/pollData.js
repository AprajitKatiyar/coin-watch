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
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fetchData = (codes) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apiKey = process.env.LIVECOINWATCH_API_KEY;
        console.log("Using API Key: ", apiKey);
        console.log("Fetching data...");
        const res = yield axios_1.default.post("https://api.livecoinwatch.com/coins/map", {
            codes: codes,
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 3,
            meta: false,
        }, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.LIVECOINWATCH_API_KEY,
            },
        });
        const coins = res.data;
        console.log(coins);
    }
    catch (error) {
        console.error(error);
    }
});
exports.fetchData = fetchData;
