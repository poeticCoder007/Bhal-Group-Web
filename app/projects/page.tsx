"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, MapPin, FileText, Building2 } from "lucide-react"
import { projects, getProjectsByCategory, type Project } from "@/data/projects"

// Utility function to format currency amounts
const formatCurrency = (amount: number) => {
  if (amount >= 100) {
    // Convert to crores if 100 lakhs or more
    const crores = amount / 100
    return `₹${crores.toFixed(2)} Crore`
  } else {
    // Keep as lakhs if less than 100 lakhs
    return `₹${amount} Lakhs`
  }
}

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [activeTab, setActiveTab] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [visibleCount, setVisibleCount] = useState(6) // Show 6 projects initially (2 rows)

  useEffect(() => {
    if (categoryParam) {
      setActiveTab(categoryParam)
    }
  }, [categoryParam])

  useEffect(() => {
    setFilteredProjects(getProjectsByCategory(activeTab))
    setVisibleCount(6) // Reset to initial count when category changes
  }, [activeTab])

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6) // Load 6 more projects (2 more rows)
  }

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMoreProjects = visibleCount < filteredProjects.length

  // Featured project (using the first one marked as featured)
  const featuredProject = projects.find((project) => project.featured) || projects[0]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-bhal-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Projects</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Explore our portfolio of successful projects across various industries throughout Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="industrial-civil">Industrial Civil</TabsTrigger>
              <TabsTrigger value="sub-station">Sub-Station Jobs</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md flex flex-col h-full"
                  >
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
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span className="line-clamp-1">WO: {project.workOrderNo}</span>
                        </div>
                        <div className="text-sm font-medium text-bhal-700">
                          Value: {formatCurrency(project.workDoneValue)}
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
              {hasMoreProjects && (
                <div className="mt-8 text-center">
                  <Button size="lg" onClick={handleShowMore}>Show More</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Featured Project</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Take a closer look at one of our most significant recent projects.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="px-8 py-6 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {featuredProject.tag && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-bhal-100 text-bhal-700">
                      {featuredProject.tag}
                    </span>
                  )}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {featuredProject.category === "industrial-civil" ? "Industrial Civil" : "Sub-Station Jobs"}
                  </span>
                  <span className="text-sm text-gray-500">{featuredProject.location}</span>
                  <span className="text-sm text-gray-500">{featuredProject.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredProject.title}</h3>
                <p className="text-gray-600 leading-relaxed">{featuredProject.description}</p>
              </div>

              {/* Content */}
              <div className="px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Project Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Client</span>
                        <p className="text-gray-900">{featuredProject.client}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Work Order</span>
                        <p className="text-gray-900">{featuredProject.workOrderNo}</p>
                        <p className="text-sm text-gray-500">Dated: {featuredProject.workOrderDate}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Project Value</span>
                        <p className="text-lg font-semibold text-bhal-600">{formatCurrency(featuredProject.workDoneValue)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Scope & Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Scope & Results</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 leading-relaxed">
                          Comprehensive civil construction work including foundations, structural elements, and finishing works with the highest quality standards.
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-sm text-green-800">
                          ✓ Project completed {featuredProject.workDoneValue > featuredProject.workOrderValue ? "with additional scope" : "within budget"} and delivered on schedule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="inline-flex items-center px-6 py-3 bg-bhal-600 text-white rounded-lg hover:bg-bhal-700 transition-colors font-medium"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
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

      {/* CTA Section */}
      <section className="bg-bhal-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Contact BHAL Group today to discuss how we can help bring your construction project to life.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
