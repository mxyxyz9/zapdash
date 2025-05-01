import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionizing Quick Commerce with EV Efficiency & Franchise Dark Stores
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Transforming India's quick commerce landscape with sustainable EV delivery and strategically located
                franchise dark stores.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#business-model">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#invest">Invest Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Partner with Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-green-100 to-blue-100 p-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-green-600 font-bold text-xl">ZapDash</div>
                      <div className="text-blue-600 text-sm">Sustainable Commerce</div>
                    </div>
                  </div>
                  <div className="absolute top-[15%] left-[15%] w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
                    <Battery className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-[20%] left-[25%] w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-[15%] right-[15%] w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Battery, Leaf, MapPin, Truck } from "lucide-react"
