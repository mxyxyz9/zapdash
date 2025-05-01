import Link from "next/link"
import { ArrowRight, BadgeDollarSign, Building, LineChart, TrendingUp, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PatternBackground from "@/components/pattern-background"

export default function InvestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PatternBackground>
        <Navbar />
        <main className="flex-1">
          {/* Header */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-4">
                  Investment Opportunities
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Investment & Partnership Opportunities
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Join us in revolutionizing India's quick commerce landscape with our innovative, sustainable solution.
                </p>
              </div>
            </div>
          </section>

          {/* Investment Opportunities Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <BadgeDollarSign className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle>For Investors</CardTitle>
                      <CardDescription>Attractive returns in a high-growth market</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Market Opportunity</h4>
                      <p className="text-sm text-gray-500">
                        Tap into India's $9.7B quick commerce market growing at 16.07% CAGR
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Competitive Advantage</h4>
                      <p className="text-sm text-gray-500">
                        Unique dual strategy combining EV delivery and franchise dark stores
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Projected Returns</h4>
                      <p className="text-sm text-gray-500">Attractive ROI with clear path to profitability</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Sustainability Focus</h4>
                      <p className="text-sm text-gray-500">
                        ESG-aligned business model with significant environmental benefits
                      </p>
                    </div>
                    <Button asChild className="w-full mt-4 rounded-full bg-teal-600 hover:bg-teal-700">
                      <Link href="/contact">
                        Invest Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Building className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>For Franchise Partners</CardTitle>
                      <CardDescription>Operate a profitable dark store in your area</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Low Initial Investment</h4>
                      <p className="text-sm text-gray-500">Affordable entry point with comprehensive setup support</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Revenue Sharing Model</h4>
                      <p className="text-sm text-gray-500">
                        Attractive profit-sharing structure with multiple income streams
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Operational Support</h4>
                      <p className="text-sm text-gray-500">
                        Complete training, technology, and ongoing business assistance
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Growth Potential</h4>
                      <p className="text-sm text-gray-500">
                        Opportunity to expand with multiple locations as the network grows
                      </p>
                    </div>
                    <Button asChild className="w-full mt-4 rounded-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/contact">
                        Become a Partner
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto max-w-5xl mt-12">
                <Card className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-[2rem] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-center">Why Partner With Us?</CardTitle>
                    <CardDescription className="text-center">
                      Key advantages of our innovative business model
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="flex flex-col items-center text-center space-y-2 p-4">
                        <div className="rounded-full bg-teal-100 p-2">
                          <TrendingUp className="h-6 w-6 text-teal-600" />
                        </div>
                        <h4 className="font-medium">High Growth Potential</h4>
                        <p className="text-sm text-gray-500">
                          Positioned in one of India's fastest-growing market segments
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center space-y-2 p-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <LineChart className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Proven Business Model</h4>
                        <p className="text-sm text-gray-500">Data-backed strategy with clear operational advantages</p>
                      </div>
                      <div className="flex flex-col items-center text-center space-y-2 p-4">
                        <div className="rounded-full bg-teal-100 p-2">
                          <Leaf className="h-6 w-6 text-teal-600" />
                        </div>
                        <h4 className="font-medium">Sustainability Focus</h4>
                        <p className="text-sm text-gray-500">
                          Eco-friendly operations aligned with global environmental goals
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <Button size="lg" asChild className="rounded-full bg-teal-600 hover:bg-teal-700">
                        <Link href="/contact">
                          Contact Our Team
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investment Process Section */}
          <section className="w-full py-12 md:py-24 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
                  Investment Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How to Invest With Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  A simple, transparent process to become part of our quick commerce revolution.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-4">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-xl font-bold">Initial Consultation</h3>
                    <p className="text-sm text-gray-500">Schedule a meeting with our investment team</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="text-xl font-bold">Due Diligence</h3>
                    <p className="text-sm text-gray-500">Review our detailed business plan and financials</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">3</span>
                    </div>
                    <h3 className="text-xl font-bold">Investment Agreement</h3>
                    <p className="text-sm text-gray-500">Finalize terms and complete legal documentation</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">4</span>
                    </div>
                    <h3 className="text-xl font-bold">Partnership Begins</h3>
                    <p className="text-sm text-gray-500">Join our journey and receive regular updates and returns</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-4">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Partners Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Hear from our early investors and franchise partners.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="text-teal-600 font-bold">RK</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Rahul Kumar</h4>
                        <p className="text-sm text-gray-500">Early Investor</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "The team's innovative approach to quick commerce, combining EV delivery with franchise dark
                      stores, presents a compelling investment opportunity in a rapidly growing market."
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold">SP</span>
                      </div>
                      <div>
                        <h4 className="font-bold">Sunita Patel</h4>
                        <p className="text-sm text-gray-500">Franchise Partner</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "The franchise model is well-structured with excellent operational support. The technology
                      platform makes managing the dark store efficient, and the revenue sharing model is fair and
                      profitable."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </PatternBackground>
    </div>
  )
}
