"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, FileText, Building, ArrowRight } from "lucide-react"
import { projects, type Project } from "@/data/projects"

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const projectId = params.id
    const foundProject = projects.find((p) => p.id === projectId)

    if (!foundProject) {
      notFound()
    }

    setProject(foundProject)
  }, [params.id])

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse text-xl">Loading project details...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bhal-800 via-bhal-700 to-bhal-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">{project.title}</h1>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.tag && (
                  <span className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${
                    project.tag === 'BHAL' 
                      ? 'bg-white/10 text-white border border-white/20' 
                      : 'bg-blue-500/20 text-blue-200 border border-blue-400/30'
                  }`}>
                    {project.tag}
                  </span>
                )}
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-white">
                  {project.category === 'industrial-civil' ? 'Industrial Civil' : 'Sub-Station'}
                </span>
                <div className="flex items-center text-white/90">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">{project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-8">{project.description}</p>

              <h3 className="text-xl font-bold mb-4">Project Scope</h3>
              <p className="text-gray-700 mb-6">
                This project involved comprehensive civil construction work including foundations, structural elements,
                and finishing works. Our team ensured timely completion while maintaining the highest quality standards
                and adhering to all safety protocols.
              </p>

              <h3 className="text-xl font-bold mb-4">Challenges & Solutions</h3>
              <p className="text-gray-700 mb-6">
                One of the key challenges in this project was coordinating with other contractors on site while
                maintaining our construction schedule. Our experienced project management team implemented a detailed
                phasing plan that allowed for efficient work coordination and minimized disruptions to the client's
                operations.
              </p>

              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-gray-700 mb-6">
                The project was successfully completed{" "}
                {project.workDoneValue > project.workOrderValue ? "with additional scope" : "within budget"} and
                delivered on schedule, meeting all client specifications and quality requirements. The client was highly
                satisfied with our work, leading to additional project opportunities.
              </p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24 border shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-bhal-800">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <Building className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Client</span>
                    </div>
                    <p className="font-semibold text-gray-900">{project.client}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <FileText className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Work Order</span>
                    </div>
                    <p className="font-semibold text-gray-900">{project.workOrderNo}</p>
                    <p className="text-sm text-gray-500 mt-1">Dated: {project.workOrderDate}</p>
                  </div>

                  <div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <span className="text-sm font-medium">Work Order Value</span>
                    </div>
                    <p className="font-semibold text-gray-900">₹{project.workOrderValue} Lakhs</p>
                  </div>

                  <div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <span className="text-sm font-medium">Value of Work Done</span>
                    </div>
                    <p className="font-semibold text-bhal-700 text-lg">₹{project.workDoneValue} Lakhs</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <Button className="w-full" asChild>
                      <Link href="/contact">Contact Us About Similar Projects</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Projects</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore similar projects from our extensive portfolio in the {project.category === 'industrial-civil' ? 'industrial civil' : 'sub-station'} category.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md flex flex-col h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${relatedProject.category === 'industrial-civil' ? 'bg-primary/10' : 'bg-bhal-50'}`}>
                        <Building className={`h-8 w-8 ${relatedProject.category === 'industrial-civil' ? 'text-primary' : 'text-bhal-600'}`} />
                      </div>
                      <div className="flex gap-2">
                        {relatedProject.tag && (
                          <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            relatedProject.tag === 'BHAL' 
                              ? 'bg-bhal-100 text-bhal-800 border border-bhal-200' 
                              : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {relatedProject.tag}
                          </span>
                        )}
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${relatedProject.category === 'industrial-civil' ? 'bg-primary/10 text-primary' : 'bg-bhal-50 text-bhal-700'}`}>
                          {relatedProject.category === "industrial-civil" ? "Industrial Civil" : "Sub-Station Jobs"}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2 min-h-[3.5rem]">{relatedProject.title}</CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-1">
                      {relatedProject.client}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <div className="space-y-3 mb-6 flex-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">{relatedProject.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                        <span>{relatedProject.year}</span>
                      </div>
                      <div className="text-sm font-medium text-bhal-700">
                        Value: ₹{relatedProject.workDoneValue >= 100 ? `${(relatedProject.workDoneValue / 100).toFixed(2)} Crore` : `${relatedProject.workDoneValue} Lakhs`}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <Link
                        href={`/projects/${relatedProject.id}`}
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
          {projects.filter((p) => p.category === project.category && p.id !== project.id).length > 3 && (
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
