import express, { Request, Response } from "express";
import DataModel from "../models/data";

const router = express.Router();

router.get("/data/:code", async (req: Request, res: Response) => {
  try {
    const { code } = req.params;

    const data = await DataModel.find({ code })
      .sort({ timestamp: -1 })
      .limit(20);

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
