"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"

export default function AboutPage() {
  const [showShivrajsinhDetails, setShowShivrajsinhDetails] = useState(false)
  
  const sectionRefs = {
    mission: useRef<HTMLElement>(null),
    timeline: useRef<HTMLElement>(null),
    team: useRef<HTMLElement>(null),
    teamMembers: useRef<HTMLElement>(null),
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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">About BHAL Group</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Building excellence through innovation, quality, and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section ref={sectionRefs.mission} className="py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-8">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 text-center mb-12">
              At BHAL Group, our mission is to deliver exceptional construction services that exceed client
              expectations, while maintaining the highest standards of safety, quality, and environmental
              responsibility. We are committed to building infrastructure that stands the test of time and contributes
              positively to communities and industries.
            </p>
            <h3 className="text-2xl font-bold text-center mb-8">Our Values</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-bhal-800 mt-1 mr-2" />
                <div>
                  <h4 className="font-semibold">Safety First</h4>
                  <p className="text-gray-600">We prioritize the well-being of our team and communities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-bhal-800 mt-1 mr-2" />
                <div>
                  <h4 className="font-semibold">Quality Excellence</h4>
                  <p className="text-gray-600">We deliver superior workmanship in every project.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-bhal-800 mt-1 mr-2" />
                <div>
                  <h4 className="font-semibold">Integrity</h4>
                  <p className="text-gray-600">We operate with honesty and transparency in all relationships.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-bhal-800 mt-1 mr-2" />
                <div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-gray-600">We embrace new technologies and methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership/Team */}
      <section ref={sectionRefs.team} className="bg-gray-50 py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company's vision and drive our operations.
            </p>
          </div>
          
          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ranjitsinh Chudasama</h3>
                    <p className="text-gray-500 text-sm mb-1">B.E. Civil</p>
                    <p className="text-bhal-600 font-semibold text-sm">Founder</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Late Viramdevsinh Chudasama</h3>
                    <p className="text-gray-500 text-sm mb-1">B.Com</p>
                    <p className="text-bhal-600 font-semibold text-sm">Former Partner</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Harendra Ranjitsinh Chudasama</h3>
                    <p className="text-gray-500 text-sm mb-1">B.Sc. Computer Science</p>
                    <p className="text-bhal-600 font-semibold text-sm">Partner</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Subhash C. Gupta</h3>
                    <p className="text-gray-500 text-sm mb-1">D.C.E.</p>
                    <p className="text-bhal-600 font-semibold text-sm">Sr. G.M.</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Rudraduttsinh H. Chudasama</h3>
                    <p className="text-gray-500 text-sm mb-1">B.E. Civil</p>
                    <p className="text-bhal-600 font-semibold text-sm">Partner</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Shivrajsinh V. Chudasama</h3>
                    <p className="text-gray-500 text-sm mb-1">MS Civil</p>
                    {showShivrajsinhDetails && (
                      <p className="text-gray-500 text-xs mb-1">With specialization in Construction & Transportation Engineering, PMP, CMQ/OR, CQA, CMIT, LEED Green Associate</p>
                    )}
                    <div className="flex items-center justify-between">
                      <p className="text-bhal-600 font-semibold text-sm">External Advisor</p>
                      <button
                        onClick={() => setShowShivrajsinhDetails(!showShivrajsinhDetails)}
                        className="flex items-center text-xs text-bhal-600 hover:text-bhal-700 transition-colors"
                      >
                        {showShivrajsinhDetails ? (
                          <>
                            <ChevronUp className="w-3 h-3 mr-1" />
                            Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3 mr-1" />
                            More
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Management & Engineering */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Management & Engineering</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sanjiv C. Pathak</h3>
                    <p className="text-gray-500 text-sm mb-1">B.E. Civil</p>
                    <p className="text-blue-600 font-semibold text-sm">General Manager</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sunil Mandia</h3>
                    <p className="text-gray-500 text-sm mb-1">I.T.I.</p>
                    <p className="text-purple-600 font-semibold text-sm">Billing</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Mukesh G. Parmar</h3>
                    <p className="text-gray-500 text-sm mb-1">B.E. Civil</p>
                    <p className="text-indigo-600 font-semibold text-sm">Sr. Engineer</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Kartik Quila</h3>
                    <p className="text-gray-500 text-sm mb-1">B.E. Civil</p>
                    <p className="text-indigo-600 font-semibold text-sm">Sr. Engineer</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Chanparaj Bhambhala</h3>
                    <p className="text-gray-500 text-sm mb-1">B.E. Civil</p>
                    <p className="text-indigo-600 font-semibold text-sm">Sr. Engineer</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Tarbada Adityabhai Dineshbhai</h3>
                    <p className="text-gray-500 text-sm mb-1">D.C.E.</p>
                    <p className="text-violet-600 font-semibold text-sm">D.C.E.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Office Operations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Office Operations</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Bhadresh D. Patel</h3>
                    <p className="text-gray-500 text-sm mb-1">B.Com</p>
                    <p className="text-slate-600 font-semibold text-sm">Accounts</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white rounded-lg p-6 group-hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ashok N. Patel</h3>
                    <p className="text-gray-500 text-sm mb-1">B.Com</p>
                    <p className="text-slate-600 font-semibold text-sm">Accounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-bhal-800 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with BHAL Group?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
              Contact us today to discuss your next construction project and discover how our experienced team can help
              bring your vision to life.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
