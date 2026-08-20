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
          "https://www.google.com/maps/place/M-Soulstrings/@18.5449193,73.7910949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf7096fc9d67:0x286e77f435256d6!8m2!3d18.5449193!4d73.7910949!16s%2Fg%2F11l2r1p7gl",
          "https://www.facebook.com/malpanigroup/",
          "https://www.instagram.com/malpanigroup/",
          "https://twitter.com/malpani_group",
          "https://www.linkedin.com/company/malpani-estates"
        ],
        "owns": { "@id": "https://www.malpanimsoulstrings.com/#apartmentcomplex" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": generateBreadcrumbs()
      },
      {
        "@type": "WebSite",
        "@id": "https://www.malpanimsoulstrings.com/#website",
        "url": "https://www.malpanimsoulstrings.com",
        "name": "Malpani M SoulStrings",
        "publisher": { "@id": "https://www.malpanimsoulstrings.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.malpanimsoulstrings.com/blog-malpani-m-soulstrings-baner-pashan-link-road?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://www.malpanimsoulstrings.com/#apartmentcomplex",
        "name": "Malpani M SoulStrings",
        "alternateName": [
          "Malpani M Soulstrings",
          "M SoulStrings",
          "Malpani M SoulStrings Baner",
          "Malpani M SoulStrings Baner Pashan Link Road",
          "M SoulStrings Baner",
          "Malpani Soul Strings Pune",
          "Malpani Estates Baner Link Road"
        ],
        "description": "Ultra-premium 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse luxury estates with 35+ world-class amenities at Baner-Pashan Link Road, Pune West.",
        "url": "https://www.malpanimsoulstrings.com/",
        "telephone": "+91 7744009295",
        "governmentIdentifier": "MahaRERA Registration: P52100076782 (Wing B), P52100055678 (Wing C)",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "priceRange": "₹1.95 Cr - ₹6.5 Cr",
        "hasMap": "https://www.google.com/maps/place/M-Soulstrings/@18.5449193,73.7910949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf7096fc9d67:0x286e77f435256d6!8m2!3d18.5449193!4d73.7910949!16s%2Fg%2F11l2r1p7gl",
        "sameAs": [
          "https://www.google.com/maps/place/M-Soulstrings/@18.5449193,73.7910949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf7096fc9d67:0x286e77f435256d6!8m2!3d18.5449193!4d73.7910949!16s%2Fg%2F11l2r1p7gl"
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".hero-title", ".section-desc", ".pillar-header p", "article h2"]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "148"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Kulkarni" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Unmatched low density and highest construction quality on Baner Pashan Link Road. Perfect Vastu layout for our 4 BHK.",
            "datePublished": "2026-06-10"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram Sethi (NRI Investor)" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Seamless legal process with clear MahaRERA numbers and direct builder transparency from Malpani Estates.",
            "datePublished": "2026-07-02"
          }
        ],
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
          "latitude": "18.5449193",
          "longitude": "73.7910949"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Infinity Swimming Pool", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Grand Clubhouse & Spa", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Smart Home Automation", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "Vastu Compliant Architecture", "value": "True" },
          { "@type": "LocationFeatureSpecification", "name": "EV Vehicle Charging Stations", "value": "True" }
        ]
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://www.malpanimsoulstrings.com/#realestateagent",
        "name": "Malpani M SoulStrings Sales Gallery",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "telephone": "+91 7744009295",
        "url": "https://www.malpanimsoulstrings.com/",
        "hasMap": "https://www.google.com/maps/place/M-Soulstrings/@18.5449193,73.7910949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf7096fc9d67:0x286e77f435256d6!8m2!3d18.5449193!4d73.7910949!16s%2Fg%2F11l2r1p7gl",
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
          "latitude": "18.5449193",
          "longitude": "73.7910949"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "priceRange": "₹1.95 Cr - ₹6.5 Cr"
      },
      {
        "@type": "Event",
        "@id": "https://www.malpanimsoulstrings.com/#openhouse",
        "name": "Malpani M SoulStrings VIP Private Experience Center Tour",
        "description": "Daily guided architectural walkthrough of show residences, sample duplexes, and interactive masterplan for prospective homebuyers.",
        "startDate": "2026-08-01T09:00:00+05:30",
        "endDate": "2026-12-31T20:00:00+05:30",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "Malpani M SoulStrings Experience Centre",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Baner Pashan Link Road",
            "addressLocality": "Pune",
            "postalCode": "411045",
            "addressCountry": "IN"
          }
        },
        "organizer": {
          "@id": "https://www.malpanimsoulstrings.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "url": "https://www.malpanimsoulstrings.com"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.malpanimsoulstrings.com/#product",
        "name": "Ultra-Luxury Apartments at Malpani M SoulStrings",
        "alternateName": "Malpani M SoulStrings Residences Baner Pashan Link Road Pune",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "description": "Ultra-premium 3 BHK, 4 BHK, 4.5 BHK, 5 BHK Sky Duplex, and Penthouse luxury estates at Baner-Pashan Link Road, Pune West by Malpani Estates.",
        "sku": "MALPANI-MSOUL-2026",
        "mpn": "P52100076782",
        "category": "Real Estate > Residential Properties > Luxury Apartments",
        "brand": {
          "@type": "Brand",
          "name": "Malpani Group",
          "url": "https://www.malpanimsoulstrings.com"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "148"
        },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "4",
          "priceCurrency": "INR",
          "lowPrice": "19500000",
          "highPrice": "65000000",
          "price": "19500000",
          "seller": {
            "@type": "Organization",
            "name": "Malpani Estates"
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "3 BHK Premium Luxury Flats",
              "price": "19500000",
              "priceCurrency": "INR",
              "url": "https://www.malpanimsoulstrings.com/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": { "@type": "Organization", "name": "Malpani Estates" }
            },
            {
              "@type": "Offer",
              "name": "4 BHK Ultra-Luxury Presidential Flats",
              "price": "35000000",
              "priceCurrency": "INR",
              "url": "https://www.malpanimsoulstrings.com/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": { "@type": "Organization", "name": "Malpani Estates" }
            },
            {
              "@type": "Offer",
              "name": "5 BHK Sky Duplex Homes",
              "price": "55000000",
              "priceCurrency": "INR",
              "url": "https://www.malpanimsoulstrings.com/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": { "@type": "Organization", "name": "Malpani Estates" }
            },
            {
              "@type": "Offer",
              "name": "Luxury Sky Penthouses with Private Terrace",
              "price": "65000000",
              "priceCurrency": "INR",
              "url": "https://www.malpanimsoulstrings.com/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": { "@type": "Organization", "name": "Malpani Estates" }
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
