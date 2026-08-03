export default function SchemaMarkup({ pageName, pageUrl }) {
  const generateBreadcrumbs = () => {
    const list = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.malpanimsoulstrings.com/" }];
    if (!pageUrl || pageUrl === '/') return list;
    
    const parts = pageUrl.split('/').filter(Boolean);
    let currentPath = '';
    
    parts.forEach((part, index) => {
      currentPath += `/${part}`;
      let name = part.replace(/-/g, ' ');
      name = name.replace(/\b\w/g, c => c.toUpperCase());
      
      if (index === parts.length - 1 && pageName) {
        name = pageName;
      }
      
      list.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `https://www.malpanimsoulstrings.com${currentPath}`
      });
    });
    return list;
  };

  const schemaPayload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.malpanimsoulstrings.com/#organization",
        "name": "Malpani Group",
        "url": "https://www.malpanimsoulstrings.com/",
        "logo": "https://www.malpaniestates.com/assets/images/apple-touch-icon.png",
        "sameAs": [
          "https://www.facebook.com/malpanigroup/",
          "https://www.instagram.com/malpanigroup/",
          "https://twitter.com/malpani_group"
        ],
        "owns": { "@id": "https://www.malpanimsoulstrings.com/#apartmentcomplex" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": generateBreadcrumbs()
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.malpanimsoulstrings.com/#apartmentcomplex",
        "name": "Malpani M SoulStrings",
        "description": "Ultra-premium 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse luxury estates with 35+ world-class amenities at Baner-Pashan Link Road, Pune West.",
        "url": "https://www.malpanimsoulstrings.com/",
        "telephone": "+91 7744009295",
        "governmentIdentifier": "MahaRERA Registration: P52100076782 (Wing B), P52100055678 (Wing C)",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "priceRange": "$$$$",
        "hasMap": "https://maps.google.com/?q=18.5539,73.7915",
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
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.malpanimsoulstrings.com/#realestateagent",
        "name": "Malpani M SoulStrings Sales Gallery",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "telephone": "+91 7744009295",
        "url": "https://www.malpanimsoulstrings.com/",
        "hasMap": "https://maps.google.com/?q=18.553715,73.774577",
        "parentOrganization": { "@id": "https://www.malpanimsoulstrings.com/#organization" },
        "knowsAbout": { "@id": "https://www.malpanimsoulstrings.com/#apartmentcomplex" },
        "governmentIdentifier": "MahaRERA Registration: P52100076782, P52100055678",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baner Pashan Link Road, near Vighnaharta Chowk, Pashan",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411021",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.553715",
          "longitude": "73.774577"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        },
        "priceRange": "$$$$"
      },
      {
        "@type": "Product",
        "@id": "https://www.malpanimsoulstrings.com/#product",
        "name": "Ultra-Luxury Apartments at Malpani M SoulStrings",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "description": "Ultra-premium 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse luxury estates at Baner-Pashan Link Road.",
        "brand": {
          "@type": "Brand",
          "name": "Malpani Group"
        },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "4",
          "priceCurrency": "INR",
          "lowPrice": "19500000",
          "highPrice": "55000000",
          "offers": [
            {
              "@type": "Offer",
              "name": "3 BHK Premium Flats",
              "url": "https://www.malpanimsoulstrings.com/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            {
              "@type": "Offer",
              "name": "4 BHK Premium Flats",
              "url": "https://www.malpanimsoulstrings.com/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            {
              "@type": "Offer",
              "name": "5 BHK & Duplex Homes",
              "url": "https://www.malpanimsoulstrings.com/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            {
              "@type": "Offer",
              "name": "Luxury Penthouses",
              "url": "https://www.malpanimsoulstrings.com/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            }
          ]
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
