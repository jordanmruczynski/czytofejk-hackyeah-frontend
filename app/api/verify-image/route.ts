import { type NextRequest, NextResponse } from "next/server"

const BACKEND_URL = "https://czytofejk-hackyeah-backend.vercel.app"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const response = await fetch(`${BACKEND_URL}/api/verify-image`, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ error: `Backend error: ${errorText}` }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Image verification error:", error)
    return NextResponse.json(
      { error: "Failed to verify image", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
