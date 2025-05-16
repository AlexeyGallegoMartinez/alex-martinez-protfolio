import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "alexcv.pdf");

  try {
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="alexcv.pdf"',
      },
    });
  } catch (err) {
    return new NextResponse("File not found", { status: 404 });
  }
}
