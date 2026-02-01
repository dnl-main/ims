// utils/getNextId.ts
import Counter from "../models/Counter.js";

export async function getNextId(collectionName: string): Promise<number> {
  const counter = await Counter.findOneAndUpdate(
    { _id: collectionName },        // e.g. "users", "companies"
    { $inc: { seq: 1 } },           // increment by 1
    { new: true, upsert: true }     // create if it doesn't exist
  );

  if (!counter) {
    throw new Error(`Failed to generate ID for collection: ${collectionName}`);
  }

  return counter.seq;
}