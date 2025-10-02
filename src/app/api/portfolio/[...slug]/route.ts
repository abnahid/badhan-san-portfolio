import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  try {
    const { slug } = await params;
    await connectDB();
    const data = await Portfolio.find({ slug: slug[0] });
    // const data = await getPortfolioBySlug(slug);
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching portfolio:", err);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
