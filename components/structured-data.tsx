import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'breadcrumb' | 'project'
  data?: any
}

export function OrganizationStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BHAL Group & Rajarshi Construction Co",
    "alternateName": ["BHAL Group", "Rajarshi Construction Co", "BHAL Construction Co"],
    "description": "Leading industrial construction company since 1967 specializing in manufacturing facilities, steel fabrication, plant construction, warehouses and distribution centers.",
    "url": "https://bhalgroup.com",
    "logo": "https://bhalgroup.com/images/logo.png",
    "foundingDate": "1967",
    "founder": {
      "@type": "Person",
      "name": "BHAL Group Founder"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bhal-group",
      "https://twitter.com/bhalgroup"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your Postal Code",
      "addressCountry": "Your Country"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Your Country"
    },
    "knowsAbout": [
      "Industrial Construction",
      "Manufacturing Facility Construction",
      "Steel Fabrication",
      "Plant Construction",
      "Warehouse Construction",
      "Distribution Center Construction",
      "Structural Steel Erection",
      "Civil Infrastructure",
      "Processing Plant Construction",
      "Energy Facility Construction"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plant Construction & Expansion",
            "description": "Complete construction and expansion services for manufacturing plants and industrial facilities with minimal operational disruption."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Steel Fabrication & Erection",
            "description": "Custom steel fabrication and installation for industrial structures and frameworks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing Facilities Construction",
            "description": "Comprehensive construction services for various manufacturing and production facilities."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehouses & Distribution Centers Construction",
            "description": "Large-scale warehouse and distribution center construction and retrofitting."
          }
        }
      ]
    }
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bhalgroup.com/#organization",
    "name": "BHAL Group & Rajarshi Construction Co",
    "image": "https://bhalgroup.com/images/logo.png",
    "description": "Leading industrial construction company since 1967 specializing in manufacturing facilities, steel fabrication, plant construction, warehouses and distribution centers.",
    "url": "https://bhalgroup.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "Your Postal Code",
      "addressCountry": "Your Country"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  }

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  )
}

export function ServiceStructuredData() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Construction Services",
    "description": "Comprehensive industrial construction services including manufacturing facilities, steel fabrication, plant construction, and warehouse construction.",
    "provider": {
      "@type": "Organization",
      "name": "BHAL Group & Rajarshi Construction Co",
      "url": "https://bhalgroup.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Your Country"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Manufacturing Facility Construction",
            "description": "Construction and expansion of manufacturing plants across various industries."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Steel Fabrication & Erection",
            "description": "Custom steel fabrication and installation for industrial structures."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Warehouse & Distribution Center Construction",
            "description": "Large-scale warehouse and distribution center construction and retrofitting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Processing Plant Construction", 
            "description": "Specialized construction for chemical, food, and other processing facilities."
          }
        }
      ]
    }
  }

  return (
    <Script
      id="service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
    />
  )
} 