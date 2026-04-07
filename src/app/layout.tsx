import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "ReceiptLift — Snap. Categorize. Export.",
  description: "Receipt capture → auto-categorize → one-click accountant export. For owner-operators who don't want full bookkeeping software.",
  keywords: ["receipt", "expense tracking", "small business", "receipt organization", "tax prep", "accountant export"],
  openGraph: {
    title: "ReceiptLift — Snap. Categorize. Export.",
    description: "Receipt capture → auto-categorize → one-click accountant export. For owner-operators who don't want full bookkeeping software.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReceiptLift",
    description: "Snap a receipt. Get it categorized. Export it to your accountant.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
