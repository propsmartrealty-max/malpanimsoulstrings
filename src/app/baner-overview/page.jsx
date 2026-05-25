export default function HubPage() {
  return (
    <main>
      

    {/* Overlay Fullscreen Menu */}
    <div id="overlay-menu" className="overlay-menu">
      <button id="close-overlay" aria-label="Close Mobile Menu" >&times;</button>
      <div className="overlay-content">
        <a href="#masterpiece" className="overlay-link">Legacy</a>
        <a href="#about" className="overlay-link">Vision</a>
        <a href="#floor-plans" className="overlay-link">Layouts</a>
        <a href="#gallery" className="overlay-link">Gallery</a>
        <a href="#amenities" className="overlay-link">Amenities</a>
        <a href="#location" className="overlay-link">Location</a>
        <a href="#faq" className="overlay-link">FAQ</a>
      </div>
    </div>
    <section className="section" >
      <div className="container">
        <h1 className="section-title">The Baner Pashan Link Road real estate Market Dominance</h1>
        <p className="section-text" >
          Baner has evolved into the absolute epicenter of luxury real estate in West Pune. Driven by proximity to the Hinjewadi IT Park and the vibrant Balewadi High Street, it commands the highest appreciation rates in the city.
        </p>
        
        <div >
          <div className="card" >
            <h3 >Pan Card Club Road Elegance</h3>
            <p>Often referred to as the "Billionaire's Row" of West Pune, Pan Card Club Road is home to ultra-premium developments like Malpani M SoulStrings. Here, luxury isn't just an option; it's the standard.</p>
          </div>
          <div className="card" >
            <h3 >Unmatched Connectivity</h3>
            <p>With direct access to the Mumbai-Pune Expressway and the upcoming Metro Line 3, Baner offers seamless connectivity, making it the top choice for NRIs and High-Net-Worth Individuals (HNIs).</p>
          </div>
          <div className="card" >
            <h3 >Baner vs. Aundh</h3>
            <p>While Aundh boasts legacy, Baner represents the future. Baner's real estate market offers superior modern amenities, larger gated communities, and higher ROI, outpacing Aundh's saturated market.</p>
          </div>
        </div>

        <div >
          <h2 >Invest in Baner's Crown Jewel</h2>
          <p >Secure your legacy at Malpani M SoulStrings.</p>
          <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary">Enquire Now</a>
        </div>
      </div>
    </section>
    
    </main>
  );
}