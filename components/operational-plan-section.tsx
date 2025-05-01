import { Cloud, MapPin, Route, Server } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OperationalPlanSection() {
  return (
    <section id="operations" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Operational Plan</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Our comprehensive operational strategy ensures efficient, reliable service delivery across all markets.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Route className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle>Delivery Logistics</CardTitle>
                <CardDescription>Optimized last-mile delivery</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Advanced Routing</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    AI-powered software optimizes delivery routes for maximum efficiency
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Real-Time Tracking</h4>
                  <p className="text-sm text-gray-500 mt-1">GPS-enabled fleet management for complete visibility</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">In-House Fleet</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Directly managed EV fleet ensures quality control and reliability
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <MapPin className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Dark Store Management</CardTitle>
                <CardDescription>Strategic fulfillment centers</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Strategic Positioning</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Data-driven location selection for optimal market coverage
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Efficient Staffing</h4>
                  <p className="text-sm text-gray-500 mt-1">Lean team structure with comprehensive training programs</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Inventory Management</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Advanced systems for real-time stock tracking and optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Cloud className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle>Tech Backbone</CardTitle>
                <CardDescription>Powerful digital infrastructure</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Cloud-Based Platform</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Scalable architecture supporting all operational functions
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Order Management</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Streamlined system for efficient order processing and fulfillment
                  </p>
                </div>
                <div className="rounded-lg border p-4">
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
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Server className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Operational Excellence</CardTitle>
                <CardDescription>Our commitment to quality and efficiency</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Quality Assurance</h4>
                  <p className="text-sm text-gray-500">
                    Rigorous standards and continuous monitoring ensure consistent service quality across all locations
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Continuous Improvement</h4>
                  <p className="text-sm text-gray-500">
                    Data-driven approach to identifying and implementing operational enhancements
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Partner Support</h4>
                  <p className="text-sm text-gray-500">
                    Comprehensive training and ongoing assistance for franchise partners
                  </p>
                </div>
                <div className="space-y-2">
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
  )
}
