import { Schema, model, models } from "mongoose";

const PortfolioSchema = new Schema({
  categoryId: { type: String, required: true },
  categoryName: { type: String, required: true },
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  alt: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.Portfolio || model("Portfolio", PortfolioSchema);
