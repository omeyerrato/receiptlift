'use client'

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Receipt, 
  Upload, 
  CheckCircle2, 
  Download, 
  Share2, 
  Zap, 
  Shield, 
  Clock,
  ArrowRight,
  ReceiptIcon
} from "lucide-react"

export default function Home() {
  const handleWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const emailInput = form.elements.namedItem("email") as HTMLInputElement
    const email = emailInput?.value
    if (!email) return
    
    const waitlist = JSON.parse(localStorage.getItem("receiptlift_waitlist") || "[]")
    if (waitlist.includes(email)) {
      toast("You're already on the list! We'll be in touch.")
      return
    }
    waitlist.push(email)
    localStorage.setItem("receiptlift_waitlist", JSON.stringify(waitlist))
    toast("You're on the list! We'll notify you when we launch.")
    form.reset()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="h-6 w-6 text-emerald-600" />
            <span className="font-bold text-lg">ReceiptLift</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <Button size="sm" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
              Get Early Access
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
            <Zap className="h-3 w-3 mr-1 text-amber-500" />
            Coming Soon — Join the waitlist
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            Snap a receipt. <br className="hidden md:block" />
            <span className="text-emerald-600">Get it categorized.</span><br />
            Export it to your accountant.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            ReceiptLift solves receipt chaos for owner-operators who don&apos;t need full bookkeeping software. 
            Just snap, categorize, and export — ready for tax time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
              Join the Waitlist <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>
              See How It Works
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Free to join · First month $1 · Cancel anytime</p>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">See ReceiptLift in action</h2>
            <Card className="border-2 border-emerald-100 dark:border-emerald-900">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Upload area */}
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                      <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                      <p className="font-medium">Drop a receipt image here</p>
                      <p className="text-sm text-muted-foreground mt-1">or click to browse your files</p>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Supports JPG, PNG, PDF · Your data is encrypted and never shared
                    </p>
                  </div>
                  {/* Result preview */}
                  <div className="space-y-4">
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span className="font-medium text-sm text-emerald-700 dark:text-emerald-400">Categorized!</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Vendor:</span>
                          <span className="font-medium">Office Depot</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="font-medium">$47.82</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Category:</span>
                          <Badge variant="secondary" className="text-xs">Office Supplies</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date:</span>
                          <span className="font-medium">Apr 3, 2026</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ReceiptIcon className="h-3 w-3 mr-1" /> Change Category
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" /> Export CSV
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Everything you need. Nothing you don&apos;t.</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Built for owner-operators who just need their receipts organized and export-ready — without the complexity of full accounting software.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Receipt className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Receipt Capture</CardTitle>
                <CardDescription>Snap a photo or upload from your camera roll. Works with any receipt format.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Auto-Categorization</CardTitle>
                <CardDescription>AI reads the receipt and assigns the right category. Tap to override if needed.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Download className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>One-Click Export</CardTitle>
                <CardDescription>Generate a clean CSV or PDF grouped by category. Send it to your accountant in seconds.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Share2 className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Accountant Share Link</CardTitle>
                <CardDescription>Generate a read-only link to share directly with your accountant or bookkeeper.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>Your financial data is encrypted. We never sell or share your information.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-emerald-600 mb-2" />
                <CardTitle>Tax-Time Ready</CardTitle>
                <CardDescription>Every quarter, export everything your accountant needs — organized and categorized.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Stop drowning in receipt chaos</h2>
            <div className="space-y-6 text-left">
              <div className="bg-background rounded-lg p-6 border">
                <p className="text-lg mb-4">&quot;I&apos;ve been using the shoebox method for years. Anything that gets me organized without learning QuickBooks is worth its weight in gold.&quot;</p>
                <p className="text-sm text-muted-foreground">— Landscaping business owner, 5 employees</p>
              </div>
              <div className="bg-background rounded-lg p-6 border">
                <p className="text-lg mb-4">&quot;My accountant charges me $200 extra every tax season because of the time she spends organizing my receipts. ReceiptLift would pay for itself in one season.&quot;</p>
                <p className="text-sm text-muted-foreground">— Solo consultant, service business</p>
              </div>
              <div className="bg-background rounded-lg p-6 border">
                <p className="text-lg mb-4">&quot;I keep receipts in five different places — my wallet, my car, my desk drawer... I need something that just works.&quot;</p>
                <p className="text-sm text-muted-foreground">— Mobile cleaning service owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Simple, honest pricing</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            No hidden fees. No surprise charges. Just organized receipts.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-amber-100 text-amber-700 hover:bg-amber-100">Founding User</Badge>
                <CardTitle className="text-3xl font-bold">$9<span className="text-lg font-normal text-muted-foreground">/month</span></CardTitle>
                <CardDescription>Solo owner-operator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Unlimited receipt capture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Auto-categorization AI</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Monthly CSV/PDF export</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Accountant share link</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Encrypted storage</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
            <Card className="relative border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Most Popular</Badge>
                <CardTitle className="text-3xl font-bold">$19<span className="text-lg font-normal text-muted-foreground">/month</span></CardTitle>
                <CardDescription>Growing business (2+ users)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Everything in Solo</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Up to 5 team members</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Bulk receipt import</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Priority support</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tax-ready export formats</li>
                </ul>
                <Button variant="outline" className="w-full" onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}>
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Annual billing saves 2 months · First month $1 trial · Cancel anytime
          </p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get early access to ReceiptLift</h2>
          <p className="text-emerald-100 max-w-xl mx-auto mb-8">
            Join the waitlist and be the first to know when we launch. Founding users get 50% off for life.
          </p>
          <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Label htmlFor="email" className="sr-only">Email address</Label>
              <Input 
                id="email"
                name="email"
                type="email" 
                placeholder="you@yourbusiness.com" 
                required
                className="bg-white text-foreground h-11"
              />
            </div>
            <Button type="submit" size="lg" variant="secondary" className="h-11 font-medium">
              Join Waitlist
            </Button>
          </form>
          <p className="text-sm text-emerald-200 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
          <Accordion className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>I already use QuickBooks/Wave/Xero. Why do I need ReceiptLift?</AccordionTrigger>
              <AccordionContent>
                ReceiptLift isn&apos;t an accounting tool — it&apos;s a focused tool for the specific pain point of receipt organization. 
                If you&apos;re already paying for full accounting software but still find yourself stuffing receipts in a shoebox, 
                ReceiptLift bridges the gap without requiring you to change your existing workflow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my financial data secure?</AccordionTrigger>
              <AccordionContent>
                Yes. Your receipt data is encrypted at rest and in transit. We never sell or share your data with third parties. 
                ReceiptLift is designed for privacy-first businesses who need organized receipts, not another company harvesting their data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if the AI categorizes something wrong?</AccordionTrigger>
              <AccordionContent>
                Easy — just tap to change the category. The AI learns from your corrections over time, but you&apos;re always in control. 
                No AI is perfect, which is why manual override is built into the core flow, not hidden in settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How is this different from Expensify or Dext?</AccordionTrigger>
              <AccordionContent>
                Expensify is designed for teams and approval workflows. Dext is designed to serve accountants receiving client receipts. 
                ReceiptLift is built for the solo owner-operator who just needs their receipts organized and ready to hand to their accountant — 
                simpler, cheaper, and focused on the export, not approval chains.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
              <AccordionContent>
                Yes. Monthly subscribers can cancel any time with no penalties. Annual subscribers get a prorated refund. 
                Your data can be exported in CSV format before you cancel, so you never lose access to your receipts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-emerald-600" />
              <span className="font-bold">ReceiptLift</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 ReceiptLift. Built for owner-operators who want receipts organized without the bookkeeping headache.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
