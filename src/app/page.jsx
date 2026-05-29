import SchemaMarkup from '@/components/SchemaMarkup';
import Image from 'next/image';
import VRModal from '@/components/VRModal';
import InteractiveMasterplan from '@/components/InteractiveMasterplan';

export default function Home() {
  return (
    <main>
      <SchemaMarkup />
      <section id="hero" className="hero">
      <div className="hero-bg">
        <video src="https://malpani-cms.firsteconomy.com/uploads/video_51_98e1310033.mp4" preload="auto" poster="https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg" autoPlay loop muted playsInline className="video-bg"></video>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title split-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="line"><span className="word">Malpani</span> <span className="word">M</span> <span className="word">SoulStrings</span></div>
          <div className="line" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: '400', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
            <span className="word">Ultra-Premium 3 & 4 BHK Luxury Apartments in Baner Pashan Link Road</span>
          </div>
        </h1>
        <p className="hero-subtitle fade-in-up" >The Preferred Choice for Elite Buyers from Aundh, Shivajinagar, Balewadi, and Wakad.</p>
        <a href="#masterpiece" className="btn btn-outline pulse-vip fade-in-up" >Enter The Legacy</a>
      </div>
    </section>

    {/* Masterpiece Narrative Section */}
    <section id="masterpiece" className="section masterpiece" >
      <div className="parallax-text" data-speed="0.2">MASTERPIECE</div>
      <div className="container" >
        <div className="fade-in-up" >
          <h2 className="section-title gradient-text" >The Crown Jewel of the<br />Pune Luxury Real Estate Market</h2>
          <p className="section-desc" >
            Malpani M SoulStrings is not just a residence; it is a visionary masterpiece. This iconic project stands as the most aspiring residential development for <strong>premium 3 BHK and 4 BHK flats for sale in Baner-Pashan Link Road</strong>. It is the preferred destination where discerning buyers from <strong>Aundh, Shivajinagar, Balewadi, Pashan, and Wakad</strong> converge to secure the absolute pinnacle of luxury. When you seek the highest echelon of the West Pune real estate market, M SoulStrings is the undeniable answer.
          </p>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-text slide-in-left">
          <h2 className="section-title">The Epitome of Exclusivity</h2>
          <p className="section-desc"><strong>Malpani M SoulStrings</strong> by Malpani Estates (often searched as <strong>Malpani M soultraings</strong>) is destined to be the new realty capital of the city, completely redefining the <strong>Baner Pashan Link Road real estate market</strong>. For those seeking the finest address, the <strong>Malpani m soulstrings baner pashan link road</strong> project offers stupendously designed 3BHK and 4BHK Luxury Estates with state-of-the-art amenities and facilities, setting a new benchmark for the adjacent Aundh Real estate market.</p>
          <div className="stats" >
            <div className="stat-item">
              <span className="stat-value" >1,597,548</span>
              <span className="stat-label">Sq.Ft Construction Area</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" >455</span>
              <span className="stat-label">Exclusive 3 & 4 BHK Estates</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" >04</span>
              <span className="stat-label">Luxury Wings</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" >MAHARERA APPROVED</span>
              <span className="stat-label" >Wing B: P52100076782<br />Wing C: P52100055678</span>
            </div>
          </div>
        </div>
        <div className="about-image slide-in-right">
          <Image src="https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png" alt="Malpani M SoulStrings Baner Pashan Link Road real estate" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>

    {/* Specifications Section (NEW) */}
    <section id="specs" className="section specs" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Ultra-Luxury Specifications</h2>
          <p className="section-desc">Every 3BHK and 4BHK residence at Malpani M SoulStrings is crafted with the highest standards of luxury.</p>
        </div>
        <div className="specs-grid fade-in-up" >
          <div className="spec-card" >
            <h3 >Premium Flooring</h3>
            <p >Imported Italian marble in the living and dining areas, accompanied by premium engineered wooden flooring in the master bedroom.</p>
          </div>
          <div className="spec-card" >
            <h3 >Smart Home Automation</h3>
            <p >State-of-the-art integrated smart home systems controlling lighting, climate, and advanced multi-tier biometric security.</p>
          </div>
          <div className="spec-card" >
            <h3 >Bespoke Kitchens</h3>
            <p >Fully modular premium kitchens equipped with top-tier international branded fittings, hob, and chimney systems.</p>
          </div>
          <div className="spec-card" >
            <h3 >Designer Bathrooms</h3>
            <p >European standard CP and sanitary fittings (Grohe/Kohler or equivalent), glass shower partitions, and exquisite wall tiling.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Comprehensive Amenities Section */}
    {/* Master Plan & Floor Plans */}
    <section id="floor-plans" className="section floor-plans" >
      <div className="parallax-text" data-speed="0.15">LAYOUTS</div>
      <div className="container" >
        <div className="section-header fade-in-up">
          <div className="scarcity-badge fade-in-up" >
            <span className="material-symbols-outlined" >hourglass_empty</span>
            Only <span id="scarcity-counter" >45</span> Premium Units Remaining
          </div>
          <h2 className="section-title gradient-text">Project Master Plan & Layouts</h2>
          <p className="section-desc">Explore the grand vision of M SoulStrings and our expansive 3BHK and 4BHK residences.</p>
        </div>
        
        {/* Master Plan */}
        <div className="master-plan-container fade-in-up" >
          <div className="plan-card" >
            <h3 >The Grand Master Plan</h3>
            <Image src="https://malpani-cms.firsteconomy.com/uploads/m_soulstrings_Masterplan_da0ad90428.png" alt="Malpani M SoulStrings Baner Pashan Link Road 3BHK" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
            <p >Over 35+ amenities spread across acres of ultra-luxury landscape.</p>
          </div>
        </div>

        <div className="floor-plans-grid fade-in-up" >
          <div className="plan-card" >
            <h3 >Tower B Typical Layout</h3>
            <Image src="https://malpani-cms.firsteconomy.com/uploads/Tower_B_Typical_Floor_Plan_d8871dabad.png" alt="Malpani M SoulStrings Baner Pashan Link Road 4BHK" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
            <p >Expansive 3BHK and 4BHK configurations maximizing ventilation and sunlight.</p>
          </div>
          <div className="plan-card" >
            <h3 >Tower C Typical Layout</h3>
            <Image src="https://malpani-cms.firsteconomy.com/uploads/Tower_C_Typical_Floor_Plan_a1e5399ac9.png" alt="Malpani M SoulStrings Baner Pashan Link Road 4BHK" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
            <p >Premium core units featuring ultra-luxury bespoke specifications.</p>
          </div>
        </div>
        
        <div className="vr-hub-container fade-in-up" >
          <div className="loc-card" >
            <span className="material-symbols-outlined" >view_in_ar</span>
            <h3 >Immersive 3D Walkthrough</h3>
            <p >Step inside M SoulStrings from anywhere in the world. Experience the sheer scale and luxury of our Show Flats in stunning Virtual Reality.</p>
            <button data-bs-toggle="modal" data-bs-target="#vrModal" className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "1rem 3rem" }}>Launch VR Tour (Native)</button>
          </div>
        </div>
      </div>
    </section>

    {/* Luxury Masonry Gallery */}
    <section id="gallery" className="section gallery" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">A Glimpse of Grandeur</h2>
          <p className="section-desc">Click any image to enlarge and explore the unmatched luxury of Malpani Estates.</p>
        </div>
        
        <div className="masonry-grid fade-in-up">
          {/* Official Elevation & Interior Renders */}
          <Image src="https://malpani-cms.firsteconomy.com/uploads/01_1_97625c7cd6.png" alt="3 BHK luxury apartments in Baner-Pashan Link Road exterior" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/02_1_fccd839fae.png" alt="4 BHK premium flats for sale in Baner-Pashan Link Road interior" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/03_5afad0394f.png" alt="Ready to move 3 BHK in Baner Pashan Link Road amenities" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/04_1_dfeed3efb5.png" alt="New luxury residential projects in Baner-Pashan Link Road" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/05_1_767fc1bb82.png" alt="Gated community luxury flats in Pashan Pune pool" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/Entrance_Lobby_9d4d367801.png" alt="Malpani M SoulStrings Grand Entrance Lobby Baner Pune" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png" alt="Malpani M SoulStrings Project Elevation West Pune Real Estate" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg" alt="Luxury apartments in Pune Baner Pashan Link Road" width={1200} height={800} className="gallery-img" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>


<section id="amenities" className="section amenities">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">35+ World-Class Amenities</h2>
          <p className="section-desc">A masterfully curated ecosystem designed for absolute luxury, wellness, and entertainment.</p>
        </div>
        
        <div className="amenities-categories fade-in-up" >
          
          {/* Wellness & Aqua */}
          <div className="amenity-category loc-card" >
            <h3 >
              <span className="material-symbols-outlined">water_drop</span> Wellness & Aqua
            </h3>
            <ul className="dense-amenity-list">
              <li><span className="material-symbols-outlined">pool</span> Swimming Pool</li>
              <li><span className="material-symbols-outlined">hot_tub</span> Spa & Salon</li>
              <li><span className="material-symbols-outlined">deck</span> Pool Side Cabanas</li>
              <li><span className="material-symbols-outlined">child_care</span> Kids Pool</li>
              <li><span className="material-symbols-outlined">shower</span> Outdoor Shower</li>
              <li><span className="material-symbols-outlined">nature_people</span> Reflexology Pathway</li>
            </ul>
          </div>

          {/* Sports & Fitness */}
          <div className="amenity-category loc-card" >
            <h3 >
              <span className="material-symbols-outlined">fitness_center</span> Sports & Fitness
            </h3>
            <ul className="dense-amenity-list">
              <li><span className="material-symbols-outlined">exercise</span> Multifitness Area</li>
              <li><span className="material-symbols-outlined">sports_basketball</span> Basketball Court</li>
              <li><span className="material-symbols-outlined">sports_cricket</span> Net-cricket</li>
              <li><span className="material-symbols-outlined">sports_tennis</span> Badminton Court</li>
              <li><span className="material-symbols-outlined">sports_baseball</span> Pickle Ball Court</li>
              <li><span className="material-symbols-outlined">directions_run</span> Jogging Trail</li>
              <li><span className="material-symbols-outlined">sports_gymnastics</span> Arm-up Area</li>
            </ul>
          </div>

          {/* Club & Entertainment */}
          <div className="amenity-category loc-card" >
            <h3 >
              <span className="material-symbols-outlined">nightlife</span> Club & Social
            </h3>
            <ul className="dense-amenity-list">
              <li><span className="material-symbols-outlined">castle</span> Grand Clubhouse</li>
              <li><span className="material-symbols-outlined">stadium</span> Amphitheatre</li>
              <li><span className="material-symbols-outlined">coffee</span> Coffee Lounge</li>
              <li><span className="material-symbols-outlined">celebration</span> Dance Room</li>
              <li><span className="material-symbols-outlined">groups</span> Social Island</li>
              <li><span className="material-symbols-outlined">forum</span> Chit-chat Corner</li>
            </ul>
          </div>

          {/* Indoor Games */}
          <div className="amenity-category loc-card" >
            <h3 >
              <span className="material-symbols-outlined">sports_esports</span> Indoor Games
            </h3>
            <ul className="dense-amenity-list">
              <li><span className="material-symbols-outlined">sports_score</span> Pool Table</li>
              <li><span className="material-symbols-outlined">table_restaurant</span> Table Tennis</li>
              <li><span className="material-symbols-outlined">casino</span> Carrom & Chess Play</li>
              <li><span className="material-symbols-outlined">sports_martial_arts</span> Dart Area</li>
              <li><span className="material-symbols-outlined">terminal</span> Coding Room</li>
              <li><span className="material-symbols-outlined">palette</span> Art & Craft</li>
            </ul>
          </div>

          {/* Nature & Landscapes */}
          <div className="amenity-category loc-card" >
            <h3 >
              <span className="material-symbols-outlined">park</span> Nature & Landscapes
            </h3>
            <ul className="dense-amenity-list">
              <li><span className="material-symbols-outlined">forest</span> Forest Trail</li>
              <li><span className="material-symbols-outlined">local_florist</span> All Season Flower Garden</li>
              <li><span className="material-symbols-outlined">spa</span> Aromatic Garden</li>
              <li><span className="material-symbols-outlined">yard</span> Grand Multipurpose Lawn</li>
              <li><span className="material-symbols-outlined">eco</span> Orchard & Natures Corner</li>
              <li><span className="material-symbols-outlined">pets</span> Pets Park</li>
            </ul>
          </div>

          {/* Kids & Convenience */}
          <div className="amenity-category loc-card" >
            <h3 >
              <span className="material-symbols-outlined">family_restroom</span> Kids & Lifestyle
            </h3>
            <ul className="dense-amenity-list">
              <li><span className="material-symbols-outlined">toys</span> Kids Play Area & Club</li>
              <li><span className="material-symbols-outlined">baby_changing_station</span> Toddler Play Area & Sandpit</li>
              <li><span className="material-symbols-outlined">synagogue</span> Temple</li>
              <li><span className="material-symbols-outlined">elderly</span> Senior Citizen Corner</li>
              <li><span className="material-symbols-outlined">directions_bus</span> Bus Pick Up-Drop Off</li>
              <li><span className="material-symbols-outlined">door_front</span> Grand Entrance Lobby</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/* Location Section */}
    <section id="location" className="section location" itemscope itemtype="https://schema.org/Place">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">A Prestigious Address at Malpani M SoulStrings Baner Pashan Link Road</h2>
          <p className="section-desc">The epicenter of the Baner Pashan Link Road real estate market, unmatched by any other development.</p>
        </div>
        <div className="location-content fade-in-up" >
          <p>Situated in Pune's most coveted neighborhood, the highly acclaimed <strong>Malpani m soulstrings baner pashan link road</strong> property offers seamless connectivity to major IT hubs like Hinjewadi, while redefining the luxury standards of the <strong>Aundh Real estate market</strong>. Recognized widely for its grandeur (and known uniquely to some fans as <strong>Malpani M soultraings</strong>), the strategic location guarantees a serene retreat from the city's hustle without sacrificing urban convenience, making these 3BHK and 4BHK Luxury Homes the ultimate investment.</p>
          <div className="location-grid" >
            <div className="loc-card" >
              <h3 >Work & IT Hubs</h3>
              <ul >
                <li>✓ Hinjewadi IT Park - 15 mins</li>
                <li>✓ Wakad Business District - 10 mins</li>
                <li>✓ Prabhat Road & SB Road - 20 mins</li>
              </ul>
            </div>
            <div className="loc-card" >
              <h3 >Lifestyle & Leisure</h3>
              <ul >
                <li>✓ Balewadi High Street - 10 mins</li>
                <li>✓ The Pavillion Mall - 15 mins</li>
                <li>✓ Baner Hill - 5 mins</li>
              </ul>
            </div>
            <div className="loc-card" >
              <h3 >Education & Healthcare</h3>
              <ul >
                <li>✓ Pune University - 12 mins</li>
                <li>✓ Jupiter Hospital - 10 mins</li>
                <li>✓ Loyola High School - 15 mins</li>
              </ul>
            </div>
          </div>
          
          {/* Google Maps Business Integration */}
          <div className="map-container" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.347895240974!2d73.7845347!3d18.547844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bee2a8439281%3A0xc3b8a1c9df2bd414!2sBaner%20-%20Pashan%20Link%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716487920330!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Malpani M SoulStrings Google Map Location"></iframe>
          </div>
        </div>
      </div>
    </section>

    
    {/* West Pune Real Estate Dominance (NEW SEO SECTION) */}
    <section id="west-pune" className="section west-pune" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">Dominating West Pune Real Estate</h2>
          <p className="section-desc">The ultimate destination for large and luxury Estates in the Baner Pashan Link Road real estate landscape.</p>
        </div>
        <div className="west-pune-content fade-in-up" >
          <p >
            When it comes to the <strong>West Pune Real estate</strong> market, nothing compares to the sheer grandeur of Malpani M SoulStrings. We are setting an untouchable standard for <strong>3BHK and 4BHK large and luxury Estates</strong>. Located at the prestigious junction of Baner and Pashan, this development represents the absolute pinnacle of the <strong>Baner Pashan Link Road real estate</strong> sector.
          </p>
          <p >
            Investors and homeowners seeking the finest properties in Pune recognize that M SoulStrings isn't just a residence; it is a legacy. With over 1.5 million square feet of uncompromising quality, it stands as the undisputed crown jewel of West Pune.
          </p>
        </div>
      </div>
    </section>

    {/* Insights & Blog Section (NEW) */}
    <section id="insights" className="section insights" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Market Insights & News</h2>
          <p className="section-desc">Discover why Malpani M SoulStrings is leading the Baner Pashan Link Road real estate market.</p>
        </div>
        <div className="blog-grid fade-in-up" >
          <article className="blog-card" >
            <h3 >Why Malpani Baner Pashan Link Road-Pashan Link Road is Pune's Most Sought-After Real Estate Destination</h3>
            <p >The intersection of Malpani Baner Pashan Link Road and the serene Pashan hills has created an unmatched enclave. With premium locations like the Pan Card Club Road stretch commanding high valuations, investing here guarantees immense ROI for discerning buyers and NRIs alike.</p>
            <a href="#" >Read More</a>
          </article>
          <article className="blog-card" >
            <h3 >The 2024 Shift Toward 4BHK Luxury Homes in West Pune</h3>
            <p >As the Baner Pashan Link Road real estate market evolves, property appreciation rates have surged to ₹10,500–₹15,000 per sq. ft. Post-pandemic trends show a massive shift towards spacious 4 BHK Estates, demanding ultra-premium specifications and world-class amenities like those found at M SoulStrings.</p>
            <a href="#" >Read More</a>
          </article>
          <article className="blog-card" >
            <h3 >Comparing Malpani Baner Pashan Link Road and the Aundh Real Estate Market</h3>
            <p >While Aundh has been the traditional hub of luxury, the modern developments on Malpani Baner Pashan Link Road Pashan Link road are rapidly surpassing it. With better connectivity to Hinjewadi and newer infrastructure, Baner has cemented itself as the new "suburban luxury" capital of Pune.</p>
            <a href="#" >Read More</a>
          </article>
        </div>
      </div>
    </section>

    {/* FAQ Section for SEO */}
    <section id="faq" className="section faq" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">Learn more about the ultra-luxury lifestyle at Malpani M SoulStrings.</p>
        </div>
        <div className="faq-list fade-in-up" >
          <details className="faq-item" >
            <summary >What configurations are available in Malpani M SoulStrings?</summary>
            <p >Malpani M SoulStrings offers ultra-premium 3BHK and 4BHK Luxury Homes. These expansive residences are meticulously designed to maximize space, natural light, and cross-ventilation, setting a new benchmark for luxury living in the West Pune Real Estate market.</p>
          </details>
          <details className="faq-item" >
            <summary >Where exactly is Malpani M SoulStrings located?</summary>
            <p >The project is strategically positioned on the prestigious Malpani Baner Pashan Link Road Pashan Link Road, Pune. This prime location places it at the epicenter of West Pune, offering immediate connectivity to the Aundh Real Estate market, Shivajinagar, Balewadi High Street, and the Hinjewadi IT corridor.</p>
          </details>
          <details className="faq-item" >
            <summary >What amenities are provided at Malpani M SoulStrings?</summary>
            <p >Residents enjoy exclusive access to over 35+ state-of-the-art amenities, including a stunning Sky Infinity Pool, a Signature Clubhouse, a holistic Spa & Salon, multi-fitness arenas, Badminton and Pickle Ball courts, an Amphitheatre, and a tranquil Forest Trail.</p>
          </details>
          <details className="faq-item" >
            <summary >Why is Baner considered a top real estate investment in Pune?</summary>
            <p >Baner has rapidly evolved into the most desired residential hub for high-net-worth individuals. With its seamless connectivity to the Mumbai-Bengaluru Highway, proximity to elite educational institutions in Wakad, and world-class commercial infrastructure in Balewadi, the Baner Pashan Link Road real estate Market promises unparalleled ROI and lifestyle upgrades.</p>
          </details>
          <details className="faq-item" >
            <summary >Is Malpani M SoulStrings a good choice for IT professionals?</summary>
            <p >Absolutely. The direct connection from the Baner Pashan Link Road to the Hinjewadi IT Park and Wakad business centers makes M SoulStrings the ultimate luxury residence for tech executives seeking a zero-commute lifestyle without compromising on grandeur and exclusivity.</p>
          </details>
          <details className="faq-item" >
            <summary >Who is the developer behind Malpani M SoulStrings?</summary>
            <p >This masterpiece is developed by Malpani Estates, a legacy brand renowned across the Entire Pune Real Estate Market for delivering iconic, ultra-premium projects with uncompromising quality and architectural brilliance.</p>
          </details>
          <details className="faq-item" >
            <summary >How can I book a 3BHK or 4BHK luxury Residence here?</summary>
            <p >You can register your interest by using our smart contact form below or by clicking the WhatsApp widget. Our dedicated VIP sales team specializing in the West Pune Real Estate Market will guide you through a private presentation and site visit.</p>
          </details>
        </div>
      </div>
    </section>

    {/* Advanced Contact & Smart Form Section */}
    <section id="contact" className="section contact">
      <div className="container contact-wrapper fade-in-up">
        <div className="contact-info">
          <h2 className="section-title gradient-text">Schedule Site Visit Malpani Soulstrings</h2>
          <p>Get exclusive <strong>Malpani Soulstrings pricing</strong> and browse the finest <strong>luxury flats for sale Baner</strong>.</p>
          <div className="contact-details" >
            <p ><span className="material-symbols-outlined" >location_on</span> Malpani Baner Pashan Link Road Pashan Link Road, Pune</p>
            <p ><span className="material-symbols-outlined" >call</span> +91 98765 43210</p>
            <p><span className="material-symbols-outlined" >mail</span> sales@malpanimsoul.com</p>
          </div>
        </div>
        <div className="contact-form-container">
          <form id="smart-contact-form" className="contact-form">
            <div className="form-group floating-label-group">
              <input type="text" id="name" name="name" required className="floating-input" placeholder=" " />
              <label htmlFor="name" className="floating-label">Full Name</label>
            </div>
            <div className="form-group floating-label-group">
              <input type="email" id="email" name="email" required className="floating-input" placeholder=" " />
              <label htmlFor="email" className="floating-label">Email Address</label>
            </div>
            <div className="form-group floating-label-group">
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required className="floating-input" placeholder=" " />
              <label htmlFor="phone" className="floating-label">Phone Number (10 digits)</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Download Malpani Soulstrings Brochure</button>
            <div id="form-success-msg" style={{ display: 'none', color: '#28a745', marginTop: '1rem' }}>✓ Thank you! Our luxury consultant will contact you shortly to Book Luxury Flat in Baner.</div>
          </form>
        </div>
      </div>
    </section>
      <VRModal />
    </main>
  );
}
