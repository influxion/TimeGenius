import { NextResponse } from "next/server"
import { BaseDirectory, createDir } from "@tauri-apps/api/fs"

export async function GET(request: Request): Promise<NextResponse> {
  try {
    return new NextResponse("true")
  } catch (error) {
    return new NextResponse("false")
  }
}
