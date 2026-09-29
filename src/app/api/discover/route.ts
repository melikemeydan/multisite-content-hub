import { NextResponse } from "next/server";
import { discoverContentTypes } from "@/lib/wordpress";

export async function POST(request: Request) {
  const body = await request.json();

  const contentTypes = await discoverContentTypes(body.siteUrl);

  return NextResponse.json({
    siteUrl: body.siteUrl,
    contentTypes: contentTypes,
  });
}