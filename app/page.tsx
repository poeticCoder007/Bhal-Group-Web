"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, HardHat, ArrowRight, CheckCircle2 } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"

export default function Home() {
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    stats: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
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

  // Get featured projects for the homepage
  const featuredProjects = getFeaturedProjects().slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative h-[90vh] min-h-[600px] w-full opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/construction-site-hero.jpg"
            alt="Construction site with heavy machinery"
            fill
            priority
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Building Tomorrow's Infrastructure Today
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                BHAL Group delivers excellence in industrial construction and support services.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
                  <Link href="/projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Stats */}
      <section
        ref={sectionRefs.stats}
        className="bg-gray-100 py-12 opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-bold text-bhal-800">57</p>
              <p className="mt-2 text-gray-600">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-bhal-800">150+</p>
              <p className="mt-2 text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-bhal-800">3</p>
              <p className="mt-2 text-gray-600">Current Projects</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-bhal-800">40+</p>
              <p className="mt-2 text-gray-600">Clients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Intro Section */}
      <section ref={sectionRefs.about} className="py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About BHAL Group</h2>
              <p className="mt-4 text-lg text-gray-600">
                With over 57 years of experience since our founding in 1967, BHAL Group has established itself as a leader in the construction
                industry. We specialize in industrial construction and support services, delivering projects that
                exceed expectations in quality, safety, and efficiency.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Quality</h3>
                  <p className="text-gray-600">Delivering excellence in every project we undertake.</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Safety</h3>
                  <p className="text-gray-600">Maintaining the highest safety standards in the industry.</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">Embracing new technologies and methodologies.</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                  <p className="text-gray-600">Completing projects on time and within budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        ref={sectionRefs.services}
        className="bg-gray-50 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in comprehensive industrial construction solutions, from initial planning to project completion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="transition-all hover:shadow-xl duration-300 border-0 shadow-md group">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  <Building2 className="h-12 w-12 text-primary group-hover:text-bhal-700 transition-colors" />
                </div>
                <CardTitle className="text-xl mb-2">Industrial Construction</CardTitle>
                <CardDescription className="text-gray-600">
                  Specialized construction services for manufacturing, processing, and industrial facilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Plant Construction & Expansion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Structural Steel Fabrication & Erection</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary hover:text-bhal-700 font-medium transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our most impactful work across various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/images/projects/steel-structure-construction.jpg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-200">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="mt-2 inline-flex items-center text-white hover:underline"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section ref={sectionRefs.cta} className="py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/10 p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Build Your Next Project?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Contact us today to discuss how BHAL Group can help bring your construction project to life.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/about/ceo-quote.jpg"
                  alt="BHAL Group office building"
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
