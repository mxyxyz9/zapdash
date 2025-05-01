import { Cloud, MapPin, Route, Server } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PatternBackground from "@/components/pattern-background"

export default function OperationsPage() {
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
                  Operational Excellence
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Operational Plan</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our comprehensive operational strategy ensures efficient, reliable service delivery across all
                  markets.
                </p>
              </div>
            </div>
          </section>

          {/* Operational Plan Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <Route className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle>Delivery Logistics</CardTitle>
                      <CardDescription>Optimized last-mile delivery</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Advanced Routing</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          AI-powered software optimizes delivery routes for maximum efficiency
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Real-Time Tracking</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          GPS-enabled fleet management for complete visibility
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">In-House Fleet</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Directly managed EV fleet ensures quality control and reliability
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <MapPin className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Dark Store Management</CardTitle>
                      <CardDescription>Strategic fulfillment centers</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Strategic Positioning</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Data-driven location selection for optimal market coverage
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Efficient Staffing</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Lean team structure with comprehensive training programs
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Inventory Management</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Advanced systems for real-time stock tracking and optimization
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <Cloud className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle>Tech Backbone</CardTitle>
                      <CardDescription>Powerful digital infrastructure</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Cloud-Based Platform</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Scalable architecture supporting all operational functions
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Order Management</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Streamlined system for efficient order processing and fulfillment
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Partner Portal</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Dedicated interface for franchise partners to manage operations
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto max-w-5xl mt-12">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Server className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Operational Excellence</CardTitle>
                      <CardDescription>Our commitment to quality and efficiency</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2 bg-teal-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">Quality Assurance</h4>
                        <p className="text-sm text-gray-500">
                          Rigorous standards and continuous monitoring ensure consistent service quality across all
                          locations
                        </p>
                      </div>
                      <div className="space-y-2 bg-blue-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">Continuous Improvement</h4>
                        <p className="text-sm text-gray-500">
                          Data-driven approach to identifying and implementing operational enhancements
                        </p>
                      </div>
                      <div className="space-y-2 bg-teal-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">Partner Support</h4>
                        <p className="text-sm text-gray-500">
                          Comprehensive training and ongoing assistance for franchise partners
                        </p>
                      </div>
                      <div className="space-y-2 bg-blue-50 p-6 rounded-[1.5rem]">
                        <h4 className="font-medium">Scalable Systems</h4>
                        <p className="text-sm text-gray-500">
                          Infrastructure designed to support rapid growth and market expansion
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Process Flow Section */}
          <section className="w-full py-12 md:py-24 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
                  Process Flow
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our Operations Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  A seamless end-to-end process designed for efficiency and customer satisfaction.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="relative">
                  {/* Process Steps */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 -translate-x-1/2"></div>
                  <div className="space-y-12 relative">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right">
                        <div className="bg-white p-6 rounded-[2rem] inline-block">
                          <h3 className="text-xl font-bold mb-2">Customer Order Placement</h3>
                          <p className="text-gray-500">
                            Customers place orders through our intuitive mobile app or website
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2"></div>
                      <div className="mt-4 md:mt-0"></div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:order-2">
                        <div className="bg-white p-6 rounded-[2rem] inline-block">
                          <h3 className="text-xl font-bold mb-2">Order Processing</h3>
                          <p className="text-gray-500">Orders are routed to the nearest dark store for fulfillment</p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2"></div>
                      <div className="mt-4 md:mt-0 md:order-1"></div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right">
                        <div className="bg-white p-6 rounded-[2rem] inline-block">
                          <h3 className="text-xl font-bold mb-2">Picking & Packing</h3>
                          <p className="text-gray-500">Items are efficiently picked and packed by trained staff</p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2"></div>
                      <div className="mt-4 md:mt-0"></div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right md:order-2">
                        <div className="bg-white p-6 rounded-[2rem] inline-block">
                          <h3 className="text-xl font-bold mb-2">EV Delivery</h3>
                          <p className="text-gray-500">
                            Orders are delivered via our eco-friendly electric vehicle fleet
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2"></div>
                      <div className="mt-4 md:mt-0 md:order-1"></div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className="md:text-right">
                        <div className="bg-white p-6 rounded-[2rem] inline-block">
                          <h3 className="text-xl font-bold mb-2">Customer Delivery</h3>
                          <p className="text-gray-500">
                            Orders are delivered to customers with real-time tracking and updates
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2"></div>
                      <div className="mt-4 md:mt-0"></div>
                    </div>
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
