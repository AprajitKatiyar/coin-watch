import axios from "axios";
import DataModel from "../models/data";
import dotenv from "dotenv";
dotenv.config();

const fetchData = async (codes: string[]) => {
  try {
    const apiKey = process.env.LIVECOINWATCH_API_KEY;
    console.log("Using API Key: ", apiKey);
    console.log("Fetching data...");
    const res = await axios.post(
      "https://api.livecoinwatch.com/coins/map",
      {
        codes: codes,
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 3,
        meta: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.LIVECOINWATCH_API_KEY,
        },
      }
    );
    const coins = res.data;
    for (const coin of coins) {
      const { code, rate } = coin;
      const data = new DataModel({
        code,
        price: rate,
      });
      await data.save();
    }
    console.log(coins);
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
