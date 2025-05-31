import Link from "next/link"
import { Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4 lg:col-span-2">
            {/* Logos Section */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/bhal-logo.png"
                  alt="BHAL Group Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto sm:h-10 max-w-[120px]"
                />
              </div>
              <div className="hidden sm:block h-8 w-px bg-gray-600 flex-shrink-0"></div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/rajarshi-logo.png"
                  alt="Rajarshi Construction Co Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto sm:h-10 max-w-[200px]"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Delivering excellence in industrial construction, civil infrastructure, and support services through our partnership between BHAL Construction Co. and Rajarshi Construction Co.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Us On</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.indiamart.com/bhal-construction-co/?srsltid=AfmBOooztWWhmrOVEwKeuf-_wrrImzE4R3ge1DQ4J7WS7V23ihB1O_sW" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IndiaMART - BHAL Construction Co.
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.indiamart.com/bhal-infrastructure/?srsltid=AfmBOorXceQinLuqlZGOwuFwZLe7d_bgnqVuFNj9xJtSvxt6hb0IsfSM" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IndiaMART - Rajarshi Construction Co.
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.justdial.com/Vadodara/Bhal-Construction-Company-Alkapuri/0265P265STD6744_BZDET" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  JustDial
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.tradeindia.com/bhal-construction-co-7042702/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TradeIndia
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Section - Full Width on Mobile, Better Layout */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">614/615, Centre Point, R.C. Dutt Road, Alkapuri, Vadodara - 390 005</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 94275 42723</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@bhalconstruction.net</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex items-center justify-center md:justify-end">
              <p className="text-center md:text-right text-sm text-gray-400">
                &copy; {new Date().getFullYear()} BHAL Group & Rajarshi Construction Co. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
