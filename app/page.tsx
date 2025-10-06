"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Network, Server, Headphones, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/contactus")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/services")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/modern-it-professionals-working-with-servers-and-n.jpg"
              alt="IT Infrastructure"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/70 to-accent/20" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Professional IT Solutions for Your Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                AIOWTA TECHNOLOGIES delivers comprehensive networking, IT services, and technical support to keep your
                business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-lg" onClick={handleServicesClick}>
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="shadow-lg bg-transparent" onClick={handleContactClick}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/it-technician-installing-network-cables-and-config.jpg"
                  alt="IT Services"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">IT Infrastructure Services</h3>
                    <p className="text-muted-foreground">
                      Modernize your network infrastructure with the latest technology to improve performance, security,
                      and reliability for your business operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                      <Server className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">General IT Services</h3>
                    <p className="text-muted-foreground">
                      Professional installation services for POS systems, computers, printers, and all your IT
                      equipment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Technical Support Management</h3>
                    <p className="text-muted-foreground">
                      Reliable onsite IT support and data center services to keep your operations running 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="shadow-lg" onClick={handleServicesClick}>
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/business-professionals-shaking-hands-in-modern-off.jpg"
              alt="Partnership"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how AIOWTA TECHNOLOGIES can help your business thrive with reliable IT solutions.
              </p>
              <Button size="lg" className="shadow-lg" onClick={handleContactClick}>
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
