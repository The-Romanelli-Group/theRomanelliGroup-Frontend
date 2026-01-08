export const jsonLdData = {
  "/": {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "The Romanelli Group",
    "url": "https://www.theromanelligroup.com",
    "logo": "https://www.theromanelligroup.com/logoUrl.avif",
    "description": "Premier real estate services with expert agents, premium properties, and personalized service.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@theromanelligroup.com"
    },
    "sameAs": []
  },
  "/buy": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Property Buying Services",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "The Romanelli Group"
    },
    "description": "Expert property buying services to help you find your perfect home.",
    "url": "https://www.theromanelligroup.com/buy"
  },
  "/sell": {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Property Selling Services",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "The Romanelli Group"
    },
    "description": "Professional property selling services to maximize your property's value.",
    "url": "https://www.theromanelligroup.com/sell"
  },
  "/properties": {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Property Listings",
    "description": "Comprehensive property listings and investment opportunities.",
    "url": "https://www.theromanelligroup.com/properties"
  },
  "/resources": {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Real Estate Resources",
    "description": "Valuable real estate resources, market insights, and expert advice.",
    "url": "https://www.theromanelligroup.com/resources",
    "publisher": {
      "@type": "Organization",
      "name": "The Romanelli Group"
    }
  },
  "/contact-us": {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact The Romanelli Group",
    "description": "Get in touch for all your real estate needs.",
    "url": "https://www.theromanelligroup.com/contact-us"
  }
};