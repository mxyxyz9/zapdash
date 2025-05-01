import Link from "next/link"
import { ArrowRight, Battery, Building, Leaf, MapPin, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PatternBackground from "@/components/pattern-background"

export default function BusinessModelPage() {
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
                  Our Strategy
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Business Model</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  A dual strategy that combines EV-based delivery with franchise-operated dark stores to create a
                  sustainable, scalable quick commerce solution.
                </p>
              </div>
            </div>
          </section>

          {/* Business Model Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="border-teal-200 bg-teal-50 overflow-hidden rounded-[2rem]">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-teal-100 p-2">
                        <Truck className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle>EV-Driven Delivery</CardTitle>
                    </div>
                    <CardDescription>Leveraging Ola Gig EVs for sustainable, cost-effective delivery</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Battery className="h-5 w-5 text-teal-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Lower Operating Costs</h4>
                          <p className="text-sm text-gray-500">
                            Significant savings on fuel and maintenance compared to traditional vehicles
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Leaf className="h-5 w-5 text-teal-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Eco-Friendly Operations</h4>
                          <p className="text-sm text-gray-500">
                            Zero-emission delivery fleet reducing carbon footprint
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Truck className="h-5 w-5 text-teal-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Quality Control</h4>
                          <p className="text-sm text-gray-500">
                            Direct management of delivery fleet ensures consistent service quality
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden border">
                      <div className="aspect-video bg-gradient-to-r from-teal-100 to-teal-200 flex items-center justify-center">
                        <Truck className="h-16 w-16 text-teal-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50 overflow-hidden rounded-[2rem]">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Building className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Franchise Dark Stores</CardTitle>
                    </div>
                    <CardDescription>Strategic network of partner-operated fulfillment centers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Rapid Scalability</h4>
                          <p className="text-sm text-gray-500">
                            Franchise model enables quick expansion across markets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Strategic Locations</h4>
                          <p className="text-sm text-gray-500">
                            Optimized placement for maximum coverage and minimal delivery times
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-5 w-5 flex items-center justify-center text-blue-600 mt-0.5">₹</div>
                        <div>
                          <h4 className="font-medium">Revenue Sharing</h4>
                          <p className="text-sm text-gray-500">
                            Mutually beneficial profit-sharing model with franchise partners
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] overflow-hidden border">
                      <div className="aspect-video bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                        <Building className="h-16 w-16 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto max-w-5xl mt-12">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader>
                    <CardTitle>Revenue Streams</CardTitle>
                    <CardDescription>Multiple income sources create a robust business model</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2 bg-teal-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">Delivery Fees</h4>
                        <p className="text-sm text-gray-500">Competitive delivery charges from end customers</p>
                      </div>
                      <div className="space-y-2 bg-blue-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">Dark Store Profit-Sharing</h4>
                        <p className="text-sm text-gray-500">Revenue percentage from franchise-operated dark stores</p>
                      </div>
                      <div className="space-y-2 bg-teal-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">EV Incentives</h4>
                        <p className="text-sm text-gray-500">
                          Government subsidies and incentives for electric vehicle operations
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="w-full py-12 md:py-24 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Operational Process</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  A seamless integration of technology, logistics, and strategic partnerships.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-4">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-xl font-bold">Customer Order</h3>
                    <p className="text-sm text-gray-500">Orders placed through our intuitive mobile app</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="text-xl font-bold">Dark Store Fulfillment</h3>
                    <p className="text-sm text-gray-500">Orders processed at the nearest franchise dark store</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">3</span>
                    </div>
                    <h3 className="text-xl font-bold">EV Delivery</h3>
                    <p className="text-sm text-gray-500">Eco-friendly delivery via our electric vehicle fleet</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-2xl font-bold text-blue-600">4</span>
                    </div>
                    <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                    <p className="text-sm text-gray-500">Quick, reliable delivery with real-time tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl bg-gradient-to-r from-teal-500 to-blue-500 p-8 md:p-12 rounded-[2rem] text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Join Our Quick Commerce Revolution?
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Whether you're an investor or potential franchise partner, we have exciting opportunities for you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="rounded-full">
                    <Link href="/invest">
                      Become an Investor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10 rounded-full"
                  >
                    <Link href="/contact">Partner with Us</Link>
                  </Button>
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
