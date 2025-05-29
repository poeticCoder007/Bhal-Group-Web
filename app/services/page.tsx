"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, CheckCircle2, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const sectionRefs = {
    intro: useRef<HTMLElement>(null),
    industrial: useRef<HTMLElement>(null),
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
              Specialized industrial construction solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={sectionRefs.intro} className="py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Industrial Construction Excellence</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              BHAL Group specializes in industrial construction projects that require precision, expertise, and
              adherence to strict safety standards. Our experienced team delivers quality results on time and
              within budget.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="transition-all hover:shadow-xl duration-300 border-0 shadow-lg group">
              <CardHeader className="pb-6 text-center">
                <div className="mb-6 flex justify-center">
                  <Building2 className="h-16 w-16 text-bhal-600 group-hover:text-bhal-700 transition-colors" />
                </div>
                <CardTitle className="text-2xl mb-4">Industrial Construction</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Specialized construction services for manufacturing, processing, and industrial facilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-bhal-600 mr-3 flex-shrink-0" />
                      <span>Plant Construction & Expansion</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-bhal-600 mr-3 flex-shrink-0" />
                      <span>Structural Steel Fabrication & Erection</span>
                    </li>
                  </ul>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-bhal-600 mr-3 flex-shrink-0" />
                      <span>Manufacturing Facilities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-bhal-600 mr-3 flex-shrink-0" />
                      <span>Warehouses & Distribution Centers</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-100 text-center">
                  <Link
                    href="#industrial"
                    className="inline-flex items-center text-bhal-600 hover:text-bhal-700 font-medium transition-colors text-lg"
                  >
                    Learn more about our industrial construction services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industrial Construction Detailed */}
      <section
        id="industrial"
        ref={sectionRefs.industrial}
        className="bg-gray-50 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Industrial Construction Expertise</h2>
            <p className="text-lg text-gray-600 mb-12">
              BHAL Group specializes in industrial construction projects that require precision, expertise, and
              adherence to strict safety standards. Our team has extensive experience working in operational
              facilities, minimizing disruptions while delivering quality results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start text-left">
                <CheckCircle2 className="h-6 w-6 text-bhal-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Plant Construction & Expansion</h4>
                  <p className="text-gray-600">
                    Complete construction and expansion services for manufacturing plants and industrial
                    facilities with minimal operational disruption.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start text-left">
                <CheckCircle2 className="h-6 w-6 text-bhal-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Structural Steel Fabrication & Erection</h4>
                  <p className="text-gray-600">
                    Custom steel fabrication and installation for industrial structures and frameworks.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <Link
                href="/projects"
                className="inline-flex items-center bg-bhal-600 text-white px-6 py-3 rounded-lg hover:bg-bhal-700 transition-colors font-medium"
              >
                View our industrial projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Industrial Projects */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Types of Industrial Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We work across various industrial sectors, providing specialized construction solutions for each industry's unique requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3 text-center">
                <CardTitle className="text-xl text-bhal-800 group-hover:text-bhal-900 transition-colors">Manufacturing Facilities</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-gray-600">
                  Construction and expansion of manufacturing plants across various industries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3 text-center">
                <CardTitle className="text-xl text-bhal-800 group-hover:text-bhal-900 transition-colors">Processing Plants</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-gray-600">
                  Specialized construction for chemical, food, and other processing facilities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3 text-center">
                <CardTitle className="text-xl text-bhal-800 group-hover:text-bhal-900 transition-colors">Warehouses & Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-gray-600">
                  Large-scale warehouse and distribution center construction and retrofitting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-3 text-center">
                <CardTitle className="text-xl text-bhal-800 group-hover:text-bhal-900 transition-colors">Energy Facilities</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <p className="text-gray-600">
                  Construction services for power generation and distribution facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={sectionRefs.cta} className="bg-bhal-50 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Industrial Project?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Contact BHAL Group today to discuss your industrial construction needs and how we can help bring your project to life with our specialized expertise.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
