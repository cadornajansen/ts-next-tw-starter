import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
      {
        method: "GET",
      },
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ Error: error });
  }
}
