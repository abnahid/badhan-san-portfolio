import {
  addHighlight,
  deleteHighlight,
  getHighlights,
  updateHighlight,
} from "@/lib/highlights";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const highlights = await getHighlights();
    // Filter out any null/undefined values and ensure valid data
    const validHighlights = highlights.filter((h) => h && h._id).slice(0, 2);
    return NextResponse.json(validHighlights, { status: 200 });
  } catch (err) {
    console.error("GET /api/highlights error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.title || !body.videoUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const highlights = await getHighlights();
    if (highlights.length >= 2) {
      return NextResponse.json(
        { error: "Limit of 2 highlights reached" },
        { status: 400 }
      );
    }

    const newHighlight = await addHighlight(body);
    return NextResponse.json(newHighlight, { status: 201 });
  } catch (err) {
    console.error("POST /api/highlights error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, data } = await req.json();
    if (!id || !data) {
      return NextResponse.json(
        { error: "Missing id or data" },
        { status: 400 }
      );
    }

    const updated = await updateHighlight(id, data);
    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("PUT /api/highlights error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await deleteHighlight(id);
    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("DELETE /api/highlights error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
