export default function SchemaMarkup() {
  const schemaPayload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.malpanimsoulstrings.com/#website",
        "url": "https://www.malpanimsoulstrings.com/",
        "name": "Malpani M SoulStrings",
        "description": "Ultra-premium 3 & 4 BHK Luxury Estates in Baner, Pune.",
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
              "text": "We offer ultra-luxury 3 BHK and 4 BHK spacious estates designed with low-density architecture, massive decks, and Vastu compliance."
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
          "postalCode": "411021",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "ApartmentComplex",
        "name": "Malpani M SoulStrings",
        "description": "Ultra-premium 3 & 4 BHK Luxury Estates in Baner, Pune.",
        "url": "https://www.malpanimsoulstrings.com/",
        "telephone": "+91 7744009295",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Pashan Link Road",
          "addressLocality": "Pune",
          "addressRegion": "MH",
          "postalCode": "411021",
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
