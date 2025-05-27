"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-bhal-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Get in touch with our team to discuss your construction needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Information</h2>
              <p className="mt-4 text-lg text-gray-600">
                Reach us directly using the contact information below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-bhal-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">614/615, Centre Point, R.C. Dutt Road,</p>
                    <p className="text-gray-600">Alkapuri, Vadodara - 390 005</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-bhal-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 99099 20959</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-bhal-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">bhalgroup614@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="rounded-lg overflow-hidden h-80 relative shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.96637247257!2d73.16789642204651!3d22.310350816625263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b036d6aa0f%3A0x9728eda131014b00!2sCentre%20Point%2C%20RC%20Dutt%20Rd%2C%20Aradhana%20Society%2C%20Vishwas%20Colony%2C%20Vadiwadi%2C%20Vadodara%2C%20Gujarat%20390020!5e0!3m2!1sen!2sin!4v1748365367349!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BHAL Group Location - Centre Point, R.C. Dutt Road, Vadodara"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-bhal-50 p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Contact BHAL Group today to discuss how we can help bring your construction project to life.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+919909920959">Call Us Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
