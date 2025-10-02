import { deletePortfolio, updatePortfolio } from "@/lib/portfolios";
import { NextResponse } from "next/server";

// UPDATE Portfolio
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Portfolio ID is required" },
        { status: 400 }
      );
    }

    const updatedPortfolio = await updatePortfolio(id, body);

    if (!updatedPortfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedPortfolio, { status: 200 });
  } catch (err) {
    console.error("Error updating portfolio:", err);
    return NextResponse.json(
      { error: "Failed to update portfolio" },
      { status: 500 }
    );
  }
}

// DELETE Portfolio
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Portfolio ID is required" },
        { status: 400 }
      );
    }

    const deletedPortfolio = await deletePortfolio(id);

    if (!deletedPortfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Portfolio deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting portfolio:", err);
    return NextResponse.json(
      { error: "Failed to delete portfolio" },
      { status: 500 }
    );
  }
}
