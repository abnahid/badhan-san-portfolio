import { connectDB } from "@/lib/mongodb";
import Highlight from "@/models/Highlight";

export async function getHighlights() {
  await connectDB();
  return Highlight.find().lean();
}

export async function addHighlight(data: {
  name: string;
  title: string;
  videoUrl: string;
}) {
  await connectDB();
  const highlight = new Highlight(data);
  return highlight.save();
}

export async function updateHighlight(
  id: string,
  data: { title?: string; videoUrl?: string }
) {
  await connectDB();
  return Highlight.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deleteHighlight(id: string) {
  await connectDB();
  return Highlight.findByIdAndDelete(id).lean();
}
