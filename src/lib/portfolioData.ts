import Portfolio from "@/models/Portfolio";
import { connectDB } from "./mongodb";

// ✅ Get all portfolios
export async function getPortfolios() {
  await connectDB();
  return await Portfolio.find().lean();
}

// ✅ Get by category
export async function getPortfoliosByCategory(categoryName: string) {
  await connectDB();
  return await Portfolio.find({ categoryName }).lean();
}

// ✅ Add new portfolio
export async function addPortfolio(data: {
  categoryId: string;
  categoryName: string;
  title: string;
  videoUrl: string;
  alt?: string;
}) {
  await connectDB();
  const newPortfolio = new Portfolio(data);
  return await newPortfolio.save();
}

// ✅ Update portfolio
export async function updatePortfolio(
  id: string,
  data: Partial<{
    categoryId: string;
    categoryName: string;
    title: string;
    videoUrl: string;
    alt: string;
  }>
) {
  await connectDB();
  return await Portfolio.findByIdAndUpdate(id, data, { new: true }).lean();
}

// ✅ Delete portfolio
export async function deletePortfolio(id: string) {
  await connectDB();
  return await Portfolio.findByIdAndDelete(id);
}
