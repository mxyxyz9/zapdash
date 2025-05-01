import { BarChart, LineChart, PieChart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PatternBackground from "@/components/pattern-background"

export default function MarketAnalysisPage() {
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
                  Market Insights
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Market Analysis</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  India's quick commerce market is experiencing explosive growth, creating a massive opportunity for our
                  innovative solution.
                </p>
              </div>
            </div>
          </section>

          {/* Market Analysis Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <LineChart className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle>Industry Trends</CardTitle>
                      <CardDescription>Rapid growth in India's quick commerce sector</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Market Size Growth</div>
                          <div className="text-sm text-gray-500">16.07% CAGR</div>
                        </div>
                        <div className="h-3 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[80%] rounded-full bg-teal-500"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">User Penetration</div>
                          <div className="text-sm text-gray-500">Increasing rapidly</div>
                        </div>
                        <div className="h-3 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[65%] rounded-full bg-teal-500"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Urban Demand</div>
                          <div className="text-sm text-gray-500">High growth</div>
                        </div>
                        <div className="h-3 w-full rounded-full bg-gray-100">
                          <div className="h-full w-[90%] rounded-full bg-teal-500"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 h-[200px] w-full bg-gradient-to-b from-teal-50 to-teal-100 rounded-[1.5rem] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600">$9.7B</div>
                        <div className="text-sm text-gray-500">Projected Market Size by 2029</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-blue-100 p-2">
                      <BarChart className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Pain Points & Opportunities</CardTitle>
                      <CardDescription>Current challenges in the quick commerce ecosystem</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">High Delivery Costs</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Current players struggle with expensive last-mile delivery, which our EV fleet directly
                          addresses.
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Limited Scalability</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Centralized dark store models face expansion challenges that our franchise approach solves.
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Environmental Concerns</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Traditional delivery fleets contribute to pollution, while our EV solution offers a
                          sustainable alternative.
                        </p>
                      </div>
                      <div className="rounded-[1rem] border p-4">
                        <h4 className="font-medium">Operational Inefficiencies</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Existing players like Dmart and More face logistical challenges our integrated model
                          addresses.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mx-auto max-w-5xl mt-12">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-teal-100 p-2">
                      <PieChart className="h-8 w-8 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle>Competitive Landscape</CardTitle>
                      <CardDescription>How our solution compares to existing market players</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2 rounded-l-lg">Feature</th>
                            <th className="text-center p-2">ZapDash</th>
                            <th className="text-center p-2">Competitor A</th>
                            <th className="text-center p-2 rounded-r-lg">Competitor B</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">EV Fleet</td>
                            <td className="text-center p-2 text-teal-600">✓</td>
                            <td className="text-center p-2 text-red-600">✗</td>
                            <td className="text-center p-2 text-red-600">✗</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Franchise Model</td>
                            <td className="text-center p-2 text-teal-600">✓</td>
                            <td className="text-center p-2 text-red-600">✗</td>
                            <td className="text-center p-2 text-red-600">✗</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Operational Costs</td>
                            <td className="text-center p-2">Low</td>
                            <td className="text-center p-2">High</td>
                            <td className="text-center p-2">Medium</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Scalability</td>
                            <td className="text-center p-2">High</td>
                            <td className="text-center p-2">Medium</td>
                            <td className="text-center p-2">Low</td>
                          </tr>
                          <tr>
                            <td className="p-2">Environmental Impact</td>
                            <td className="text-center p-2">Low</td>
                            <td className="text-center p-2">High</td>
                            <td className="text-center p-2">High</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Market Opportunity Section */}
          <section className="w-full py-12 md:py-24 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
                  Growth Potential
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Market Opportunity</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  The quick commerce sector in India presents a significant opportunity for growth and innovation.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="bg-white p-6 rounded-[2rem] text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">16.07%</div>
                    <h3 className="text-xl font-medium mb-2">CAGR</h3>
                    <p className="text-sm text-gray-500">
                      Compound Annual Growth Rate of India's quick commerce market through 2029
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-[2rem] text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">450M+</div>
                    <h3 className="text-xl font-medium mb-2">Potential Users</h3>
                    <p className="text-sm text-gray-500">
                      Urban population with increasing demand for quick delivery services
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-[2rem] text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">30%</div>
                    <h3 className="text-xl font-medium mb-2">Cost Advantage</h3>
                    <p className="text-sm text-gray-500">
                      Our operational model delivers significant cost savings over competitors
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
