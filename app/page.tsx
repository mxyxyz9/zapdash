import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StatsCard from "@/components/stats-card"
import FeatureCard from "@/components/feature-card"
import PatternBackground from "@/components/pattern-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PatternBackground>
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-4">
                    Revolutionizing Quick Commerce
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    EV Efficiency & Franchise Dark Stores
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Transforming India's quick commerce landscape with sustainable EV delivery and strategically located
                    franchise dark stores.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full bg-teal-600 hover:bg-teal-700">
                      <Link href="/business-model">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      <Link href="/invest">Invest Now</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      <Link href="/contact">Partner with Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative h-[350px] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-teal-100 to-blue-100 p-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <div className="text-center">
                            <div className="text-teal-600 font-bold text-xl">ZapDash</div>
                            <div className="text-blue-500 text-sm">Sustainable Commerce</div>
                          </div>
                        </div>
                        <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
                          <Truck className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-md">
                          <Battery className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute bottom-[20%] left-[25%] w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-md">
                          <Leaf className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute bottom-[15%] right-[15%] w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-md">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full py-12 md:py-24 bg-gradient-to-r from-teal-600 to-blue-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Key Market Metrics
                  </h2>
                  <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                    India's quick commerce market is experiencing explosive growth, creating a massive opportunity for
                    our innovative solution.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard value="$9.7B" label="Market Size by 2029" />
                <StatsCard value="16.07%" label="Annual Growth Rate" />
                <StatsCard value="₹700" label="Monthly Savings per EV" />
                <StatsCard value="30%" label="Lower Operational Costs" />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800 mb-4">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose ZapDash?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our innovative approach combines sustainability with efficiency to create a revolutionary quick
                  commerce solution.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={<Truck className="h-10 w-10 text-teal-500" />}
                  title="EV-Driven Delivery"
                  description="Lower costs and zero emissions with our electric vehicle fleet"
                />
                <FeatureCard
                  icon={<Building className="h-10 w-10 text-teal-500" />}
                  title="Franchise Dark Stores"
                  description="Strategic network of partner-operated fulfillment centers"
                />
                <FeatureCard
                  icon={<Leaf className="h-10 w-10 text-teal-500" />}
                  title="Eco-Friendly Operations"
                  description="Sustainable practices that reduce environmental impact"
                />
                <FeatureCard
                  icon={<TrendingUp className="h-10 w-10 text-teal-500" />}
                  title="Cost Efficiency"
                  description="Significantly lower operational costs than traditional models"
                />
                <FeatureCard
                  icon={<Clock className="h-10 w-10 text-teal-500" />}
                  title="Quick Delivery"
                  description="Optimized locations ensure rapid order fulfillment"
                />
                <FeatureCard
                  icon={<BarChart className="h-10 w-10 text-teal-500" />}
                  title="Scalable Model"
                  description="Franchise approach allows for rapid market expansion"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 bg-teal-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
                <div className="inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                  Ready to Join Us?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-[900px]">
                  Be Part of India's Quick Commerce Revolution
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Whether you're an investor looking for high returns or a potential franchise partner, we have
                  opportunities for you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full bg-teal-600 hover:bg-teal-700">
                    <Link href="/invest">Become an Investor</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-50"
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

import { BarChart, Battery, Building, Clock, Leaf, MapPin, Truck, TrendingUp } from "lucide-react"
