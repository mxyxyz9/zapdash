import { Battery, Building, Leaf, Truck } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessModelSection() {
  return (
    <section id="business-model" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Business Model</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              A dual strategy that combines EV-based delivery with franchise-operated dark stores to create a
              sustainable, scalable quick commerce solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-2">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>EV-Driven Delivery</CardTitle>
              </div>
              <CardDescription>Leveraging Ola Gig EVs for sustainable, cost-effective delivery</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Battery className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Lower Operating Costs</h4>
                    <p className="text-sm text-gray-500">
                      Significant savings on fuel and maintenance compared to traditional vehicles
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Eco-Friendly Operations</h4>
                    <p className="text-sm text-gray-500">Zero-emission delivery fleet reducing carbon footprint</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Truck className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Quality Control</h4>
                    <p className="text-sm text-gray-500">
                      Direct management of delivery fleet ensures consistent service quality
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border">
                <div className="aspect-video bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                  <Truck className="h-16 w-16 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
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
                    <p className="text-sm text-gray-500">Franchise model enables quick expansion across markets</p>
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
              <div className="rounded-lg overflow-hidden border">
                <div className="aspect-video bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                  <Building className="h-16 w-16 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Streams</CardTitle>
              <CardDescription>Multiple income sources create a robust business model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Delivery Fees</h4>
                  <p className="text-sm text-gray-500">Competitive delivery charges from end customers</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Dark Store Profit-Sharing</h4>
                  <p className="text-sm text-gray-500">Revenue percentage from franchise-operated dark stores</p>
                </div>
                <div className="space-y-2">
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
  )
}

import { MapPin } from "lucide-react"
