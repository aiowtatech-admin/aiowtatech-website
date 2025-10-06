import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <Image src="/modern-professional-office-with-computers-and-comm.jpg" alt="Contact Us" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/70 to-accent/20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground">Get in touch with our team for all your IT service needs</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:aiowtatech@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      aiowtatech@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a
                      href="tel:4129168966"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      (412) 916-8966
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Office</h3>
                    <p className="text-sm text-muted-foreground">
                      3925 Irish Hills Dr
                      <br />
                      South Bend, IN 46614
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold">Business Hours (EST)</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8!2d-86.2!3d41.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816d0e0e0e0e0e0%3A0x0!2s3925%20Irish%20Hills%20Dr%2C%20South%20Bend%2C%20IN%2046614!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AIOWTA TECHNOLOGIES Office Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
