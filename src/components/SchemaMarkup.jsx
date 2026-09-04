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
        "owns": { "@id": "https://www.malpanimsoulstrings.com/#apartmentcomplex" },
        "memberOf": {
          "@type": "Organization",
          "name": "CREDAI Pune Metro",
          "url": "https://credaipune.org"
        }
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
        "datePublished": "2024-01-15T09:00:00+05:30",
        "dateModified": "2026-09-04T12:00:00+05:30",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Malpani Group",
          "url": "https://www.malpaniestates.com"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "CREDAI Pune Metro",
          "url": "https://credaipune.org"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "MahaRERA Registration",
            "name": "Maharashtra Real Estate Regulatory Authority Registration - Wing B",
            "recognizedBy": {
              "@type": "GovernmentOrganization",
              "name": "Maharashtra Real Estate Regulatory Authority (MahaRERA)",
              "url": "https://maharera.maharashtra.gov.in"
            },
            "identifier": "P52100076782"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "MahaRERA Registration",
            "name": "Maharashtra Real Estate Regulatory Authority Registration - Wing C",
            "recognizedBy": {
              "@type": "GovernmentOrganization",
              "name": "Maharashtra Real Estate Regulatory Authority (MahaRERA)",
              "url": "https://maharera.maharashtra.gov.in"
            },
            "identifier": "P52100055678"
          }
        ],
        "governmentIdentifier": "MahaRERA Registration: P52100076782 (Wing B), P52100055678 (Wing C)",
        "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
        "priceRange": "₹1.95 Cr - ₹6.5 Cr",
        "hasMap": "https://www.google.com/maps/place/M-Soulstrings/@18.5449193,73.7910949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf7096fc9d67:0x286e77f435256d6!8m2!3d18.5449193!4d73.7910949!16s%2Fg%2F11l2r1p7gl",
        "sameAs": [
          "https://www.google.com/maps/place/M-Soulstrings/@18.5449193,73.7910949,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf7096fc9d67:0x286e77f435256d6!8m2!3d18.5449193!4d73.7910949!16s%2Fg%2F11l2r1p7gl"
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Baner",
            "@id": "https://www.wikidata.org/wiki/Q4853518",
            "sameAs": "https://en.wikipedia.org/wiki/Baner"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Pashan",
            "@id": "https://www.wikidata.org/wiki/Q7141975",
            "sameAs": "https://en.wikipedia.org/wiki/Pashan"
          },
          {
            "@type": "City",
            "name": "Pune",
            "@id": "https://www.wikidata.org/wiki/Q1538",
            "sameAs": "https://en.wikipedia.org/wiki/Pune"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Hinjawadi",
            "@id": "https://www.wikidata.org/wiki/Q5764259",
            "sameAs": "https://en.wikipedia.org/wiki/Hinjawadi"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Maharashtra",
            "@id": "https://www.wikidata.org/wiki/Q1191",
            "sameAs": "https://en.wikipedia.org/wiki/Maharashtra"
          }
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
        ],
        "containsPlace": [
          {
            "@type": ["FloorPlan", "Apartment"],
            "name": "3 BHK Luxury Residence",
            "description": "Premium 3 BHK residences with 1,450 to 1,650 sq.ft. carpet area, private sundeck, and panoramic views of Sus Hills.",
            "numberOfRooms": 3,
            "numberOfBedrooms": 3,
            "numberOfBathroomsTotal": 3,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 1550,
              "minValue": 1450,
              "maxValue": 1650,
              "unitCode": "FTK"
            },
            "offers": {
              "@type": "Offer",
              "price": "19500000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://www.malpanimsoulstrings.com/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road"
            },
            "url": "https://www.malpanimsoulstrings.com/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
            "image": "https://malpani-cms.firsteconomy.com/uploads/01_1_97625c7cd6.png",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Italian Marble Flooring", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Vastu Compliant Layout", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Panoramic Hills View", "value": "True" }
            ]
          },
          {
            "@type": ["FloorPlan", "Apartment"],
            "name": "4 BHK Presidential Estate",
            "description": "Expansive 4 BHK estates with 1,950 to 2,600 sq.ft. carpet area, private elevator access, double master bedrooms, and servant quarters.",
            "numberOfRooms": 4,
            "numberOfBedrooms": 4,
            "numberOfBathroomsTotal": 4,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 2275,
              "minValue": 1950,
              "maxValue": 2600,
              "unitCode": "FTK"
            },
            "offers": {
              "@type": "Offer",
              "price": "28500000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://www.malpanimsoulstrings.com/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road"
            },
            "url": "https://www.malpanimsoulstrings.com/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
            "image": "https://malpani-cms.firsteconomy.com/uploads/02_1_fccd839fae.png",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Private Elevator Core", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Servant Quarters with Separate Entry", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Imported Marble & Wooden Flooring", "value": "True" }
            ]
          },
          {
            "@type": ["FloorPlan", "Apartment"],
            "name": "5 BHK Sky Duplex Villa",
            "description": "Ultra-exclusive 5 BHK duplex residences with 3,400 to 4,200 sq.ft. carpet area, 22-foot double-height living ceilings, and private sky lounge.",
            "numberOfRooms": 5,
            "numberOfBedrooms": 5,
            "numberOfBathroomsTotal": 5,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 3800,
              "minValue": 3400,
              "maxValue": 4200,
              "unitCode": "FTK"
            },
            "offers": {
              "@type": "Offer",
              "price": "45000000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://www.malpanimsoulstrings.com/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road"
            },
            "url": "https://www.malpanimsoulstrings.com/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road",
            "image": "https://malpani-cms.firsteconomy.com/uploads/03_5afad0394f.png",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Double-Height 22ft Ceilings", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Multigenerational Floor Plan", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Internal Private Staircase", "value": "True" }
            ]
          },
          {
            "@type": ["FloorPlan", "Apartment"],
            "name": "Presidential Sky Penthouse with Private Terrace",
            "description": "Trophy sky penthouses with 4,200 to 5,200 sq.ft. carpet area, private open-to-sky terrace garden, and 270-degree unhindered valley views.",
            "numberOfRooms": 5,
            "numberOfBedrooms": 5,
            "numberOfBathroomsTotal": 6,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 4700,
              "minValue": 4200,
              "maxValue": 5200,
              "unitCode": "FTK"
            },
            "offers": {
              "@type": "Offer",
              "price": "65000000",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://www.malpanimsoulstrings.com/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road"
            },
            "url": "https://www.malpanimsoulstrings.com/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road",
            "image": "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg",
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Private Open Terrace Garden", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "270-Degree Valley Views", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Private Jacuzzi Provisions", "value": "True" }
            ]
          }
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
