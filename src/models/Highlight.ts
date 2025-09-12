import { Schema, model, models } from "mongoose";

const HighlightSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.Highlight || model("Highlight", HighlightSchema);
