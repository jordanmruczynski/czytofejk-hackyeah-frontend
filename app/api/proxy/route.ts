import { NextResponse } from "next/server"

const BACKEND_URL = "https://fastapi-backend-eoqp3a5lb-joromruc-2316s-projects.vercel.app"

export async function GET() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const contentType = response.headers.get("content-type")

      // Check if it's an HTML response (likely auth page)
      if (contentType?.includes("text/html")) {
        return NextResponse.json(
          {
            error: "Backend requires authentication",
            status: response.status,
            message:
              "The FastAPI backend is protected by Vercel Deployment Protection. Please disable it or provide a bypass token.",
          },
          { status: 401 },
        )
      }

      return NextResponse.json({ error: `Backend returned status ${response.status}` }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Proxy error:", error)
    return NextResponse.json(
      { error: "Failed to fetch from backend", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
