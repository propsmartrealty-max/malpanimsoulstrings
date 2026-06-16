export default function SchemaMarkup({ pageName, pageUrl }) {
  const schemaPayload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.malpanimsoulstrings.com/" },
          ...(pageName && pageUrl ? [{ "@type": "ListItem", "position": 2, "name": pageName, "item": `https://www.malpanimsoulstrings.com${pageUrl}` }] : [])
        ]
      },
      {
        "@type": "RealEstateAgent",
        "name": "Malpani Estates",
        "image": "https://www.malpanimsoulstrings.com/icon.png",
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
        "@type": "ApartmentComplex",
        "name": "Malpani M SoulStrings",
        "description": "Ultra-premium 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse luxury estates with 35+ world-class amenities at Baner-Pashan Link Road, Pune West.",
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5539",
          "longitude": "73.7915"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Clubhouse", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Automation", "value": "True" }
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
