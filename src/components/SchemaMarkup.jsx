export default function SchemaMarkup() {
  const schemaPayload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.malpanimsoulstrings.com/#website",
        "url": "https://www.malpanimsoulstrings.com/",
        "name": "Malpani M SoulStrings",
        "description": "Ultra-premium 3 BHK and 4 BHK Luxury Estates for sale in Baner Pashan Link Road, Pune. Ready to move luxury residential projects.",
        "publisher": {
          "@id": "https://www.malpanimsoulstrings.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.malpanimsoulstrings.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.malpanimsoulstrings.com/#organization",
        "name": "Malpani Estates",
        "url": "https://www.malpanimsoulstrings.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.malpanimsoulstrings.com/favicon.ico"
        },
        "sameAs": [
          "https://www.facebook.com/malpanigroup/",
          "https://www.instagram.com/malpanigroup/"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.malpanimsoulstrings.com/" },
          { "@type": "ListItem", "position": 2, "name": "4 BHK Luxury Estates", "item": "https://www.malpanimsoulstrings.com/4bhk-luxury" },
          { "@type": "ListItem", "position": 3, "name": "Pune Market Analysis", "item": "https://www.malpanimsoulstrings.com/market-analysis" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the exact location of Malpani M SoulStrings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Malpani M SoulStrings is strategically located on the premium Baner-Pashan Link Road in Pune West, offering seamless connectivity to Hinjewadi IT Park and Aundh."
            }
          },
          {
            "@type": "Question",
            "name": "What configurations are available at Malpani M SoulStrings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer ultra-luxury 3 BHK and 4 BHK spacious apartments and premium flats designed with low-density architecture, massive decks, and Vastu compliance, targeting elite buyers in Pune West."
            }
          },
          {
            "@type": "Question",
            "name": "What is the expected possession date for M SoulStrings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The premium luxury residences at Malpani M SoulStrings are slated for possession by December 2028 as per MahaRERA guidelines."
            }
          }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "name": "Malpani Estates",
        "image": "https://www.malpanimsoulstrings.com/favicon.ico",
        "@id": "https://www.malpanimsoulstrings.com/#organization",
        "url": "https://www.malpanimsoulstrings.com/",
        "telephone": "+91 7744009295",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Pashan Link Road",
          "addressLocality": "Pune",
          "addressRegion": "MH",
          "postalCode": "411045",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.malpanimsoulstrings.com/#localbusiness",
        "name": "Malpani M SoulStrings",
        "url": "https://www.malpanimsoulstrings.com/",
        "image": "https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png",
        "telephone": "+91 7744009295",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Pashan Link Road",
          "addressLocality": "Pune",
          "addressRegion": "MH",
          "postalCode": "411045",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5539",
          "longitude": "73.7915"
        }
      },
      {
        "@type": "ApartmentComplex",
        "name": "Malpani M SoulStrings",
        "description": "Premium residential project offering spacious 3 BHK and 4 BHK luxury apartments with world-class amenities at Baner-Pashan Link Road, Pune West.",
        "url": "https://www.malpanimsoulstrings.com/",
        "telephone": "+91 7744009295",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Pashan Link Road",
          "addressLocality": "Pune",
          "addressRegion": "MH",
          "postalCode": "411045",
          "addressCountry": "IN"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Swimming Pool",
            "value": "True"
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Clubhouse",
            "value": "True"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "4 BHK Premium Flat in Baner-Pashan Link Road",
        "description": "Ultra-luxurious 4 BHK premium flats for sale with Vastu-compliant layouts, smart home automation, and massive private decks.",
        "image": "https://malpani-cms.firsteconomy.com/uploads/04_1_dfeed3efb5.png",
        "brand": {
          "@type": "Brand",
          "name": "Malpani Estates"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.malpanimsoulstrings.com/4bhk-luxury",
          "priceCurrency": "INR",
          "price": "30000000",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPayload) }}
    />
  );
}
