import { NextRequest, NextResponse } from 'next/server'

// In-memory store for now — will migrate to Postgres once credentials are available
const waitlistEmails: string[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email: string = body?.email?.trim()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    const normalized = email.toLowerCase()

    if (waitlistEmails.includes(normalized)) {
      return NextResponse.json(
        { message: 'Already on the list!' },
        { status: 200 }
      )
    }

    waitlistEmails.push(normalized)
    console.log(`[Waitlist] New signup: ${normalized} (total: ${waitlistEmails.length})`)

    return NextResponse.json(
      { message: "You're on the list! We'll notify you when we launch." },
      { status: 200 }
    )
  } catch (err) {
    console.error('[Waitlist API error]', err)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ count: waitlistEmails.length })
}
