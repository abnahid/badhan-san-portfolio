import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("🔌 connectDB called"); // debug log
  if (mongoose.connections[0].readyState) {
    console.log("✅ Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "Editscapes",
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw new Error("Database connection failed");
  }
};
