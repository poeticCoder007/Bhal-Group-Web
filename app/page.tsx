"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, HardHat, ArrowRight, CheckCircle2, MapPin, Calendar } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"

// Function to calculate years in business since 1967
const getYearsInBusiness = () => {
  const foundingYear = 1967
  const currentYear = new Date().getFullYear()
  return currentYear - foundingYear
}

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
  
  // Calculate current years in business
  const yearsInBusiness = getYearsInBusiness()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        className="relative h-[90vh] min-h-[600px] w-full opacity-0 translate-y-4 transition-all duration-700"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover brightness-50"
            poster="/images/hero/construction-site-hero.jpg"
          >
            <source src="/videos/hero-construction-background.mp4" type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <Image
              src="/images/hero/construction-site-hero.jpg"
              alt="Construction site with heavy machinery"
              fill
              priority
              className="object-cover brightness-50"
            />
          </video>
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
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 hover:text-white" asChild>
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
              <p className="text-5xl font-bold text-bhal-800">{yearsInBusiness}</p>
              <p className="mt-2 text-gray-600">Years in Business since 1967</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-bhal-800">150+</p>
              <p className="mt-2 text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-bhal-800">4</p>
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
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About BHAL Group</h2>
              <p className="mt-4 text-lg text-gray-600">
                With over {yearsInBusiness} years of experience since our founding in 1967, BHAL Group (BHAL Construction Co. and Rajarshi Construction Co.) has established itself as a leader in the construction
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">Delivering excellence in every project we undertake.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Safety</h3>
                <p className="text-gray-600">Maintaining the highest safety standards in the industry.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Embracing new technologies and methodologies.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">Completing projects on time and within budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client & Consultant Logos */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We're proud to have partnered with leading organizations across various industries throughout Gujarat and India, 
              delivering excellence in every project.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-bhal-600 to-bhal-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Clients Grid */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-bhal-50/30 via-transparent to-bhal-50/30 rounded-3xl"></div>
            
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {[
                  { name: "Linxon India", logo: "/images/clients/linxon.png" },
                  { name: "Ark Golden India", logo: "/images/clients/ark.png" },
                  { name: "Steelsmith Continental", logo: "/images/clients/steelsmith.png" },
                  { name: "Interplex Mazzucchelli", logo: "/images/clients/interplex.png" },
                  { name: "Aluplast India", logo: "/images/clients/aluplast.svg" },
                  { name: "Svaryu Energy", logo: "/images/clients/svaryu.png" },
                  { name: "Mehi Power Transformers", logo: "/images/clients/Mehi.png" },
                  { name: "Advatech Life Science", logo: "/images/clients/advatech.png" },
                  { name: "GE T&D India", logo: "/images/clients/ge.svg" },
                  { name: "Rishi FIBC Solutions", logo: "/images/clients/rishi-fibc-solutions-pvt-ltd.png" },
                  { name: "Koch Chemical", logo: "/images/clients/koch.png" },
                  { name: "Koshambh Multitred", logo: "/images/clients/koshambh.png" },
                  { name: "Yashvin Industries", logo: "/images/clients/yashvin-industries.jpg" },
                  { name: "Stelmec Limited", logo: "/images/clients/stelmec.png" },
                  { name: "L&T Construction", logo: "/images/clients/landt.png" },
                  { name: "ABB India", logo: "/images/clients/abb.webp" },
                  { name: "Lalit Rohr Fittings", logo: "/images/clients/lalitrohrlogo.jpg" },
                  { name: "Jindal Rail Infrastructure", logo: "/images/clients/jindalrail.png" },
                  { name: "EMC Limited", logo: "/images/clients/emc.jpg" },
                  { name: "Sagar Springs", logo: "/images/clients/sagarspings.png" },
                  { name: "Nandolia Organic", logo: "/images/clients/nandolia.png" },
                  { name: "Finolex Industries", logo: "/images/clients/finolex.png" },
                  { name: "Inox Air Products", logo: "/images/clients/inox.png" },
                  { name: "KDAC Chem", logo: "/images/clients/kdac.png" },
                  { name: "Damodar Engineering", logo: "/images/clients/damodar.png" },
                  { name: "NBCC Limited", logo: "/images/clients/nbcc.jpg" },
                  { name: "Indian Petrochemicals", logo: "/images/clients/indianpetrochem.jpeg" },
                  { name: "GETCO", logo: "/images/clients/getco.png" },
                  { name: "PGCIL", logo: "/images/clients/pgcil.png" },
                  { name: "IOCL", logo: "/images/clients/iocl.png" }
                ].map((client, i) => (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="relative bg-white rounded-xl p-4 h-24 flex items-center justify-center border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-bhal-300 group-hover:bg-gradient-to-br group-hover:from-bhal-50/50 group-hover:to-white">
                      {/* Logo Container */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          width={120}
                          height={60}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          style={{
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '100%',
                            maxHeight: '100%'
                          }}
                        />
                      </div>
                      
                      {/* Hover accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-bhal-600 to-bhal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
                      
                      {/* Subtle background pattern on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-bhal-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Consultants Section */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-bhal-900 mb-2">Professional Consultants</h3>
                  <p className="text-gray-600">Expert consulting partnerships for comprehensive project solutions</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                  {[
                    { name: "Vyom Consultants", logo: "/images/consultants/vyomlogo.png" },
                    { name: "Soft Skill Consultants", logo: "/images/consultants/softskill.png.avif" },
                    { name: "Bhagwati Consultants", logo: "/images/consultants/bhgwati.png" },
                    { name: "Shah & Talati Associates", logo: "/images/consultants/shah&talati.png" }
                  ].map((consultant, i) => (
                    <div 
                      key={i} 
                      className="group relative overflow-hidden"
                      style={{ animationDelay: `${(i + 30) * 50}ms` }}
                    >
                      <div className="relative bg-white rounded-xl p-4 h-24 flex items-center justify-center border border-bhal-200/60 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-bhal-400 group-hover:bg-gradient-to-br group-hover:from-bhal-50/60 group-hover:to-white">
                        {/* Logo Container */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={consultant.logo}
                            alt={`${consultant.name} logo`}
                            width={120}
                            height={60}
                            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                            style={{
                              width: 'auto',
                              height: 'auto',
                              maxWidth: '100%',
                              maxHeight: '100%'
                            }}
                          />
                        </div>
                        
                        {/* Hover accent */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-bhal-600 to-bhal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
                        
                        {/* Subtle background pattern on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-bhal-600/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom text */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 font-medium">
                  And many more trusted partners across Gujarat and India
                </p>
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
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md flex flex-col h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${project.category === 'industrial-civil' ? 'bg-primary/10' : 'bg-bhal-50'}`}>
                      <Building2 className={`h-8 w-8 ${project.category === 'industrial-civil' ? 'text-primary' : 'text-bhal-600'}`} />
                    </div>
                    <div className="flex gap-2">
                      {project.tag && (
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          project.tag === 'BHAL' 
                            ? 'bg-bhal-100 text-bhal-800 border border-bhal-200' 
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {project.tag}
                        </span>
                      )}
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${project.category === 'industrial-civil' ? 'bg-primary/10 text-primary' : 'bg-bhal-50 text-bhal-700'}`}>
                        {project.category === "industrial-civil" ? "Industrial Civil" : "Sub-Station Jobs"}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2 min-h-[3.5rem]">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-1">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>{project.year}</span>
                    </div>
                    <div className="text-sm font-medium text-bhal-700">
                      Value: ₹{project.workDoneValue >= 100 ? `${(project.workDoneValue / 100).toFixed(2)} Crore` : `${project.workDoneValue} Lakhs`}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center text-primary hover:text-bhal-700 font-medium transition-colors"
                    >
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
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