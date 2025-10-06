import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Network,
  Server,
  Headphones,
  Layers,
  Activity,
  Wrench,
  Radio,
  ArrowRightLeft,
  Package,
  Monitor,
  Printer,
  ShoppingCart,
  Cable,
  ClipboardList,
  HardDrive,
  Zap,
  Download,
  AlertCircle,
  CheckCircle,
  FileText,
  Database,
  Laptop,
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/modern-data-center-with-server-racks-and-network-i.jpg"
              alt="IT Services"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background/70 to-accent/15" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive IT solutions designed to meet your business needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* IT Infrastructure Services */}
              <div id="it-infrastructure">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">IT Infrastructure Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Network className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Network Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Comprehensive network design, implementation, and management to ensure reliable connectivity and
                        optimal performance across your organization.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Server className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Server Provisioning & Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Expert server setup, configuration, and ongoing management to maintain peak performance and
                        reliability for your critical business applications.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Layers className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Virtualization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Implement and manage virtual environments to maximize resource utilization, reduce costs, and
                        improve scalability across your infrastructure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Activity className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Network Monitoring & Optimization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Proactive monitoring and performance tuning to identify issues before they impact operations and
                        ensure optimal network efficiency.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Wrench className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Physical & Virtual Server Maintenance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Regular maintenance and updates for both physical and virtual servers to ensure security,
                        stability, and optimal performance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Radio className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>IoT Infrastructure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Design and deploy Internet of Things solutions to connect devices, collect data, and enable
                        smart automation for your business.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <ArrowRightLeft className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Service Migration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Seamless migration of services and infrastructure to new platforms or cloud environments with
                        minimal disruption to operations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* General IT Services */}
              <div id="general-it">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Server className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold">General IT Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Package className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Application Deployment & Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Professional software deployment and ongoing support to ensure your business applications run
                        smoothly and efficiently.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex gap-2 mb-2">
                        <Printer className="h-8 w-8 text-accent" />
                        <Monitor className="h-8 w-8 text-accent" />
                        <ShoppingCart className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle>End Device Repair & Installation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Expert repair and installation services for printers, PCs, POS systems, and other end-user
                        devices to keep your operations running.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Cable className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Structured Cabling Installations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Professional cabling infrastructure design and installation including Cat5e, Cat6, and fiber
                        optic solutions for reliable connectivity.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <ClipboardList className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Surveys & Infrastructure Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Comprehensive site surveys and strategic infrastructure planning to design optimal IT solutions
                        for your business needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <HardDrive className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Rack & Stack Hardware Deployments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Professional equipment installation and organization in server racks with proper cable
                        management and cooling considerations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Zap className="h-8 w-8 text-accent mb-2" />
                      <CardTitle>Low-Voltage Troubleshooting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Expert diagnosis and resolution of low-voltage electrical issues affecting your IT
                        infrastructure and network systems.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Technical Support Management */}
              <div id="technical-support">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Technical Support Management</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <Download className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Patch Management & Updates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Systematic management of software patches and updates to maintain security, stability, and
                        compliance across your IT environment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <AlertCircle className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Incident, Problem & Change Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Structured approach to managing IT incidents, identifying root causes, and implementing changes
                        with minimal business disruption.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CheckCircle className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>ITIL-Based Service Delivery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Best-practice IT service management following ITIL framework to ensure consistent, high-quality
                        service delivery and continuous improvement.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <FileText className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Event & Log Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Comprehensive monitoring and analysis of system events and logs to identify issues, ensure
                        compliance, and maintain security.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Database className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>On-Site Data Center Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Dedicated on-site support for data center operations including server maintenance, monitoring,
                        and emergency response for critical infrastructure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Laptop className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Onsite IT Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Responsive on-location technical support for troubleshooting, repairs, and maintenance to
                        minimize downtime and keep your business running.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
