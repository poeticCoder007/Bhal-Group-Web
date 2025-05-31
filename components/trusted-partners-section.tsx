import Image from "next/image"

export default function TrustedPartnersSection() {
  return (
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
                { name: "IOCL", logo: "/images/clients/iocl.png" },
                { name: "Finolex Industries", logo: "/images/clients/finolex.png" },
                { name: "Jindal Rail Infrastructure", logo: "/images/clients/jindalrail.png" },
                { name: "Inox Air Products", logo: "/images/clients/inox.png" },
                { name: "Indian Petrochemicals", logo: "/images/clients/indianpetrochem.jpeg" },
                { name: "PGCIL", logo: "/images/clients/pgcil.png" },
                { name: "GETCO", logo: "/images/clients/getco.png" },
                { name: "NBCC Limited", logo: "/images/clients/nbcc.jpg" },
                { name: "Linxon India", logo: "/images/clients/linxon.png" },
                { name: "Ark Golden India", logo: "/images/clients/ark.png" },
                { name: "Nandolia Organic", logo: "/images/clients/nandolia.png" },
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
                { name: "EMC Limited", logo: "/images/clients/emc.jpg" },
                { name: "Sagar Springs", logo: "/images/clients/sagarspings.png" },
                { name: "KDAC Chem", logo: "/images/clients/kdac.png" },
                { name: "Damodar Engineering", logo: "/images/clients/damodar.png" },
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
                        className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "Vyom Consultants", logo: "/images/consultants/vyomlogo.png" },
                  { name: "Soft Skill Consultants", logo: "/images/consultants/softskill.png.avif" },
                  { name: "Bhagwati Consultants", logo: "/images/consultants/bhgwati.png" },
                  { name: "Shah & Talati Associates", logo: "/images/consultants/shah&talati.png" },
                  { name: "Uhde India", logo: "/images/consultants/uhde.jpeg" },
                  { name: "Engineers India Limited", logo: "/images/consultants/eil.png" },
                  { name: "Associated Engineers", logo: "/images/consultants/aasociatedengin.png" }
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
                          className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
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
  )
} 