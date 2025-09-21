/* eslint-disable @typescript-eslint/no-unused-vars */
import { addPortfolio, getPortfolios } from "@/lib/portfolios";
import { NextResponse } from "next/server";

function convertToEmbedUrl(url: string): string {
  try {
    let videoId = "";

    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    } else if (url.includes("/embed/")) {
      return url;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return url;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (
      !body.categoryId ||
      !body.categoryName ||
      !body.title ||
      !body.videoUrl
    ) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = {
      ...body,
      videoUrl: convertToEmbedUrl(body.videoUrl),
    };

    const newPortfolio = await addPortfolio(data);

    return NextResponse.json(newPortfolio, { status: 201 });
  } catch (err) {
    console.error("POST /api/portfolio error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const portfolios = await getPortfolios();
    return NextResponse.json(portfolios, { status: 200 });
  } catch (err) {
    console.error("GET /api/portfolio error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
