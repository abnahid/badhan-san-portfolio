import Highlight from "@/models/Highlight";
import { connectDB } from "./mongodb";

// ✅ Get all highlights
export async function getHighlights() {
  await connectDB();
  return await Highlight.find().lean();
}

// ✅ Get single highlight by ID
export async function getHighlightById(id: string) {
  await connectDB();
  return await Highlight.findById(id).lean();
}

// ✅ Add new highlight
export async function addHighlight(data: {
  name: string;
  title: string;
  videoUrl: string;
  thumbnailUrl?: string;
}) {
  await connectDB();
  const newHighlight = new Highlight(data);
  return await newHighlight.save();
}

// ✅ Update highlight
export async function updateHighlight(
  id: string,
  data: Partial<{
    name: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
  }>
) {
  await connectDB();
  return await Highlight.findByIdAndUpdate(id, data, { new: true }).lean();
}

// ✅ Delete highlight
export async function deleteHighlight(id: string) {
  await connectDB();
  return await Highlight.findByIdAndDelete(id);
}
