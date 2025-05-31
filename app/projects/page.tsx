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
import TrustedPartnersSection from "@/components/trusted-partners-section"

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
      <TrustedPartnersSection />

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
