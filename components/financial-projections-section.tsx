import { BarChart3, LineChart, PieChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinancialProjectionsSection() {
  return (
    <section id="financials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Financial Projections & ROI</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Our innovative business model delivers significant cost savings and attractive returns on investment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <LineChart className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle>Cost Savings</CardTitle>
                <CardDescription>EV fleet delivers significant operational advantages</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Monthly EV Savings</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">₹700</div>
                    <div className="text-sm text-gray-500">per vehicle over 1,500 km</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Annual Fleet Savings</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">₹84,000</div>
                    <div className="text-sm text-gray-500">per 10 vehicles</div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Maintenance Cost Reduction</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-gray-500">compared to traditional vehicles</div>
                  </div>
                </div>
                <div className="h-[200px] w-full bg-gradient-to-b from-green-50 to-green-100 rounded-lg flex items-center justify-center mt-4">
                  <BarChart3 className="h-16 w-16 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <PieChart className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Revenue Projections</CardTitle>
                <CardDescription>Strong growth trajectory from multiple revenue streams</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Year 1</div>
                    <div className="text-sm text-gray-500">₹X Crore</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-full w-[30%] rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Year 2</div>
                    <div className="text-sm text-gray-500">₹X Crore</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-full w-[60%] rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Year 3</div>
                    <div className="text-sm text-gray-500">₹X Crore</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-100">
                    <div className="h-full w-[90%] rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div className="rounded-lg border p-4 mt-4">
                  <h4 className="font-medium">Break-Even Timeline</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">18-24</div>
                    <div className="text-sm text-gray-500">months</div>
                  </div>
                </div>
                <div className="h-[120px] w-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto max-w-5xl mt-12">
          <Card>
            <CardHeader>
              <CardTitle>ROI Analysis</CardTitle>
              <CardDescription>Projected returns for investors and franchise partners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Investor ROI</h4>
                  <div className="mt-2 text-2xl font-bold text-green-600">XX%</div>
                  <p className="text-sm text-gray-500 mt-1">Projected annual return</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Franchise Partner ROI</h4>
                  <div className="mt-2 text-2xl font-bold text-green-600">XX%</div>
                  <p className="text-sm text-gray-500 mt-1">Projected annual return</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Payback Period</h4>
                  <div className="mt-2 text-2xl font-bold text-green-600">X Years</div>
                  <p className="text-sm text-gray-500 mt-1">For initial investment</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
