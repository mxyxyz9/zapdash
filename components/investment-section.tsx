import Link from "next/link"
import { ArrowRight, BadgeDollarSign, Building, LineChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvestmentSection() {
  return (
    <section id="invest" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Investment & Partnership Opportunities
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Join us in revolutionizing India's quick commerce landscape with our innovative, sustainable solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BadgeDollarSign className="h-8 w-8 text-green-600" />
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
              <Button asChild className="w-full mt-4">
                <Link href="#contact">
                  Invest Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Building className="h-8 w-8 text-blue-600" />
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
                <p className="text-sm text-gray-500">Complete training, technology, and ongoing business assistance</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Growth Potential</h4>
                <p className="text-sm text-gray-500">
                  Opportunity to expand with multiple locations as the network grows
                </p>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="#contact">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-center">Why Partner With Us?</CardTitle>
              <CardDescription className="text-center">Key advantages of our innovative business model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center space-y-2 p-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium">High Growth Potential</h4>
                  <p className="text-sm text-gray-500">Positioned in one of India's fastest-growing market segments</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-4">
                  <div className="rounded-full bg-blue-100 p-2">
                    <LineChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium">Proven Business Model</h4>
                  <p className="text-sm text-gray-500">Data-backed strategy with clear operational advantages</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2 p-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium">Sustainability Focus</h4>
                  <p className="text-sm text-gray-500">
                    Eco-friendly operations aligned with global environmental goals
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <Link href="#contact">
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
  )
}

import { Leaf } from "lucide-react"
