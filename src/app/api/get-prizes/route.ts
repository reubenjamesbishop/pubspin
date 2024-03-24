import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pubID = searchParams.get("pubID");
  console.log("pub id: ", { pubID });

  const prizes = await sql`select * from Prizes`;
  // console.log(prizes);

  return NextResponse.json({ prizes }, { status: 200 });
}
