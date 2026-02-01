// models/Counter.ts
import mongoose, { Schema } from "mongoose";

export interface ICounter {
  _id: string;  // collection name: "users", "companies", etc.
  seq: number;
}

const counterSchema = new Schema<ICounter>({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

export default mongoose.model<ICounter>("Counter", counterSchema);