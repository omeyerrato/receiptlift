import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"

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
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧾</text></svg>",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does ReceiptLift categorize my receipts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ReceiptLift uses AI to read your receipt photo and automatically categorize expenses into IRS-approved categories like Office Supplies, Meals & Entertainment, Transportation, and more."
      }
    },
    {
      "@type": "Question",
      "name": "What file formats can I export?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can export your categorized receipts as a clean CSV file, ready to hand to your accountant or import into QuickBooks, TurboTax, or any spreadsheet software."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an accounting degree to use ReceiptLift?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. ReceiptLift is designed for owner-operators who just need receipts organized — not full bookkeeping software. Snap, categorize, export. Done."
      }
    },
    {
      "@type": "Question",
      "name": "Is my receipt data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. ReceiptLift uses encryption for all data in transit and at rest. We never share your financial data with third parties."
      }
    },
    {
      "@type": "Question",
      "name": "How much does ReceiptLift cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Founding-user pricing is $9/month. Your first month is just $1. No contracts, cancel anytime."
      }
    }
  ]
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "ReceiptLift",
  "description": "Receipt capture, auto-categorization, and accountant-ready CSV export for small business owners.",
  "brand": {
    "@type": "Brand",
    "name": "ReceiptLift"
  },
  "offers": {
    "@type": "Offer",
    "price": "9",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-06-01",
    "availability": "https://schema.org/PreOrder",
    "description": "Founding-user pricing: $9/month. First month $1."
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
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
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </body>
    </html>
  )
}
