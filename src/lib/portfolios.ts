import Portfolio from "@/models/Portfolio";
import { connectDB } from "./mongodb";

export async function getAllPortfolioSlugs() {
  await connectDB();
  const slugs = await Portfolio.distinct("slug");
  return slugs;
}

export async function getPortfolios() {
  await connectDB();
  return await Portfolio.find().lean();
}

export async function getPortfoliosByCategory(categoryName: string) {
  await connectDB();
  return await Portfolio.find({ categoryName }).lean();
}

export async function getPortfolioBySlug(slug: string) {
  await connectDB();
  return await Portfolio.find({ slug }).lean();
}

export async function addPortfolio(data: {
  categoryId: string;
  categoryName: string;
  title: string;
  videoUrl: string;
  alt?: string;
  slug: string;
}) {
  await connectDB();
  const newPortfolio = new Portfolio(data);
  return await newPortfolio.save();
}

export async function updatePortfolio(
  id: string,
  data: Partial<{
    categoryId: string;
    categoryName: string;
    title: string;
    videoUrl: string;
    alt: string;
    slug: string;
  }>
) {
  await connectDB();
  return await Portfolio.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deletePortfolio(id: string) {
  await connectDB();
  return await Portfolio.findByIdAndDelete(id);
}
