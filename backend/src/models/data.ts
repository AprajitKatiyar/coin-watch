import mongoose, { Schema, Document } from "mongoose";

interface IData extends Document {
  code: string;
  price: number;
  timestamp: Date;
}

const DataSchema: Schema = new Schema({
  code: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const DataModel = mongoose.model<IData>("Data", DataSchema);

export default DataModel;
