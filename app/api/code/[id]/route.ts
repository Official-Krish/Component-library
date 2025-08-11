import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const filePath = path.join(process.cwd(), "components", "CustomComponents", `${id}.tsx`);
    const code = await fs.readFile(filePath, "utf8");

    return NextResponse.json({ code });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
} 