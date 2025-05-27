"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, MapPin, FileText } from "lucide-react"
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
              <TabsTrigger value="civil">Civil</TabsTrigger>
              <TabsTrigger value="energy">Energy</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/images/projects/steel-structure-construction.jpg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="inline-block rounded-full bg-bhal-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                      <div className="mb-4 flex flex-wrap gap-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 line-clamp-3 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <FileText className="mr-1 h-3 w-3" />
                          <span>WO: {project.workOrderNo}</span>
                        </div>
                        <div className="flex items-center font-medium text-bhal-700">
                          <span>{formatCurrency(project.workDoneValue)}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Project</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Take a closer look at one of our most significant recent projects.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative">
              <Image
                src={featuredProject.image || "/images/projects/steel-structure-construction.jpg"}
                alt={featuredProject.title}
                width={600}
                height={800}
                className="rounded-lg object-cover h-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {featuredProject.category.charAt(0).toUpperCase() + featuredProject.category.slice(1)}
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <MapPin className="mr-1 h-3 w-3" />
                  {featuredProject.location}
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-3 w-3" />
                  {featuredProject.year}
                </span>
              </div>
              <p className="mt-4 text-lg text-gray-600">{featuredProject.description}</p>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold">Project Details:</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Client:</span>
                      <span>{featuredProject.client}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Work Order:</span>
                      <span>
                        {featuredProject.workOrderNo} dated {featuredProject.workOrderDate}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Work Order Value:</span>
                      <span>{formatCurrency(featuredProject.workOrderValue)}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">Value of Work Done:</span>
                      <span>{formatCurrency(featuredProject.workDoneValue)}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Scope of Work:</h4>
                  <p className="mt-2 text-gray-600">
                    The project involved comprehensive civil construction work including foundations, structural
                    elements, and finishing works. Our team ensured timely completion while maintaining the highest
                    quality standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Results:</h4>
                  <p className="mt-2 text-gray-600">
                    The project was successfully completed{" "}
                    {featuredProject.workDoneValue > featuredProject.workOrderValue
                      ? "with additional scope"
                      : "within budget"}{" "}
                    and delivered on schedule, meeting all client specifications and quality requirements.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href={`/projects/${featuredProject.id}`}>View Full Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Clients</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to have worked with leading organizations across various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Linxon India Private Limited",
              "Ark Golden India Pvt Ltd",
              "Steelsmith Continental Mfg. Pvt. Ltd.",
              "Interplex Mazzucchelli Pvt Ltd",
              "Aluplast India Pvt.Ltd.",
              "Svaryu Energy Limited",
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <div className="h-12 flex items-center justify-center text-center text-sm font-medium text-gray-600 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all">
                  {client}
                </div>
              </div>
            ))}
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
