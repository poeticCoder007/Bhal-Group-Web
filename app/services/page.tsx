"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, HardHat, CheckCircle2, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const sectionRefs = {
    intro: useRef<HTMLElement>(null),
    industrial: useRef<HTMLElement>(null),
    maintenance: useRef<HTMLElement>(null),
    cta: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-bhal-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Comprehensive construction solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={sectionRefs.intro} className="py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Construction Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              BHAL Group offers a wide range of construction services to meet the diverse needs of our clients. From
              industrial construction to ongoing support, our experienced team delivers quality results on time and
              within budget.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Services</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
              <TabsTrigger value="maintenance">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <Card className="transition-all hover:shadow-xl duration-300 border-0 shadow-md group">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <Building2 className="h-12 w-12 text-bhal-600 group-hover:text-bhal-700 transition-colors" />
                    </div>
                    <CardTitle className="text-xl mb-2">Industrial Construction</CardTitle>
                    <CardDescription className="text-gray-600">
                      Specialized construction services for manufacturing, processing, and industrial facilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-sm text-gray-600 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-bhal-600 mr-3 flex-shrink-0" />
                        <span>Plant Construction & Expansion</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-bhal-600 mr-3 flex-shrink-0" />
                        <span>Equipment Installation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-bhal-600 mr-3 flex-shrink-0" />
                        <span>Process Piping & Mechanical</span>
                      </li>
                    </ul>
                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href="#industrial"
                        className="inline-flex items-center text-primary hover:text-bhal-700 font-medium transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className="transition-all hover:shadow-xl duration-300 border-0 shadow-md group">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <HardHat className="h-12 w-12 text-bhal-600 group-hover:text-bhal-700 transition-colors" />
                    </div>
                    <CardTitle className="text-xl mb-2">Support</CardTitle>
                    <CardDescription className="text-gray-600">
                      Ensuring the longevity and efficiency of your facilities and infrastructure.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-sm text-gray-600 mb-6">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-bhal-600 mr-3 flex-shrink-0" />
                        <span>Preventative Maintenance</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-bhal-600 mr-3 flex-shrink-0" />
                        <span>Emergency Repairs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-bhal-600 mr-3 flex-shrink-0" />
                        <span>Facility Upgrades & Retrofits</span>
                      </li>
                    </ul>
                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href="#maintenance"
                        className="inline-flex items-center text-primary hover:text-bhal-700 font-medium transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="industrial" className="mt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold">Industrial Construction</h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Our industrial construction services are designed to meet the unique needs of manufacturing,
                    processing, and industrial facilities. We understand the complexities of industrial projects and
                    deliver solutions that enhance operational efficiency and productivity.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Plant Construction & Expansion</h4>
                        <p className="text-gray-600">
                          Complete construction and expansion services for manufacturing plants and industrial
                          facilities.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Equipment Installation</h4>
                        <p className="text-gray-600">Precision installation of industrial equipment and machinery.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Process Piping & Mechanical</h4>
                        <p className="text-gray-600">
                          Specialized piping and mechanical systems for industrial processes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Structural Steel Fabrication & Erection</h4>
                        <p className="text-gray-600">
                          Custom steel fabrication and installation for industrial structures.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/images/projects/steel-structure-construction.jpg"
                    alt="Construction project showcase"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover h-full"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="maintenance" className="mt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold">Support</h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Our support services help extend the life of your facilities and infrastructure while ensuring
                    optimal performance. We offer both preventative maintenance programs and responsive repair
                    services.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Preventative Maintenance</h4>
                        <p className="text-gray-600">
                          Scheduled maintenance to prevent costly breakdowns and extend asset life.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Emergency Repairs</h4>
                        <p className="text-gray-600">Rapid response services for unexpected issues and breakdowns.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Facility Upgrades & Retrofits</h4>
                        <p className="text-gray-600">
                          Modernization of existing facilities to improve efficiency and functionality.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-bhal-800 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Equipment Servicing</h4>
                        <p className="text-gray-600">
                          Regular servicing and maintenance of industrial equipment and machinery.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/images/projects/building-construction.jpg"
                    alt="Maintenance and support services"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover h-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industrial Construction */}
      <section
        id="industrial"
        ref={sectionRefs.industrial}
        className="bg-gray-50 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative">
              <Image
                src="/images/projects/steel-structure-construction.jpg"
                alt="Construction project showcase"
                width={600}
                height={800}
                className="rounded-lg object-cover h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Industrial Construction</h2>
              <p className="mt-4 text-lg text-gray-600">
                BHAL Group specializes in industrial construction projects that require precision, expertise, and
                adherence to strict safety standards. Our team has extensive experience working in operational
                facilities, minimizing disruptions while delivering quality results.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Manufacturing Facilities</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Construction and expansion of manufacturing plants with minimal operational disruption.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Processing Plants</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Specialized construction for food, chemical, and other processing facilities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Warehouses & Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Large-scale warehouse and distribution center construction and retrofitting.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Energy Facilities</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Construction services for power generation and distribution facilities.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <Link
                  href="/projects?category=industrial"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View industrial projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section
        id="maintenance"
        ref={sectionRefs.maintenance}
        className="py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Support</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our support services help extend the life of your facilities and infrastructure while ensuring
                optimal performance. We offer both preventative maintenance programs and responsive repair
                services to keep your operations running smoothly.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Preventative Maintenance</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Scheduled maintenance to prevent costly breakdowns and extend asset life.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Emergency Services</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      24/7 emergency response for critical infrastructure and facility issues.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Facility Upgrades</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Modernization of existing facilities to improve efficiency and functionality.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-bhal-800">Equipment Servicing</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">
                      Regular servicing and maintenance of industrial equipment and machinery.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center text-primary hover:underline">
                  Request support services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <Image
                src="/images/projects/building-construction.jpg"
                alt="Maintenance and support services"
                width={600}
                height={800}
                className="rounded-lg object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={sectionRefs.cta}
        className="bg-gray-50 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-bhal-50 p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Discuss Your Project?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Contact us today to learn more about our services and how we can help bring your construction project
                  to life.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/about/construction-team.jpg"
                  alt="Construction team meeting"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
