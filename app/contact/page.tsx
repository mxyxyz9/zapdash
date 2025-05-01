import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PatternBackground from "@/components/pattern-background"

export default function ContactPage() {
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
                  Get In Touch
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Ready to revolutionize quick commerce? Get in touch with our team to discuss investment and
                  partnership opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="rounded-[2rem] overflow-hidden">
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" className="rounded-full" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Your email address" type="email" className="rounded-full" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="interest">I'm interested in</Label>
                        <select
                          id="interest"
                          className="flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an option</option>
                          <option value="investing">Investing</option>
                          <option value="franchise">Becoming a Franchise Partner</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" className="rounded-xl min-h-[120px]" />
                      </div>
                      <Button type="submit" className="w-full rounded-full bg-teal-600 hover:bg-teal-700">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card className="rounded-[2rem] overflow-hidden">
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>Reach out to us directly</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-teal-100 p-2">
                          <Mail className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-sm text-gray-500">info@ZapDash.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-teal-100 p-2">
                          <Phone className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-sm text-gray-500">+91 98765 43210</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="rounded-full bg-teal-100 p-2">
                          <MapPin className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Office</h4>
                          <p className="text-sm text-gray-500">
                            123 Innovation Hub, Tech Park
                            <br />
                            Bengaluru, Karnataka 560001
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="rounded-[2rem] overflow-hidden">
                    <CardHeader>
                      <CardTitle>Stay Updated</CardTitle>
                      <CardDescription>Subscribe to our newsletter</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="subscribe-email">Email</Label>
                          <Input
                            id="subscribe-email"
                            placeholder="Your email address"
                            type="email"
                            className="rounded-full"
                          />
                        </div>
                        <Button type="submit" className="rounded-full bg-teal-600 hover:bg-teal-700">
                          Subscribe
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="w-full py-12 md:py-24 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
                  Our Location
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Our Office</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  We're located in the heart of Bengaluru's tech district.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="rounded-[2rem] overflow-hidden h-[400px] bg-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Map Placeholder</h3>
                    <p className="text-gray-500">Interactive map would be displayed here</p>
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
