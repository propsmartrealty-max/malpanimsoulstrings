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
        
        <a href="malpani-m-soulstrings-baner-pashan-link-road-real-estate.html" className="overlay-link">Baner Pashan Link Road real estate Guide</a>
        <a href="malpani-m-soulstrings-baner-pashan-link-road-4bhk-luxury.html" className="overlay-link">4 BHK luxury Residences</a>
        <a href="#faq" className="overlay-link">FAQ</a>
      </div>
    </div>
        <section className="section" >
          <div className="container" >
            <h1 className="section-title" >Why NRIs are Choosing Baner for Luxury Real Estate Investment in 2024</h1>
            <div >
              
            <p>The Pune Real Estate Market has seen a massive influx of investment from Non-Resident Indians (NRIs) over the past decade. However, the geographic focus of this investment has sharply shifted. Gone are the days when Koregaon Park and Kalyani Nagar were the sole focus. Today, Baner—specifically the Pan Card Club Road and Baner-Pashan Link Road—has emerged as the undisputed crown jewel for NRI luxury real estate investment.</p>
            
            <h2>1. Unprecedented Return on Investment (ROI)</h2>
            <p>For NRIs, real estate investment is a numbers game balanced with emotional security. Baner offers a unique proposition: it is fully developed in terms of social infrastructure yet still offers significant capital appreciation compared to saturated markets like Aundh. Historical data from the past five years indicates that premium 3 BHK and 4 BHK luxury Estates in Baner have appreciated at a steady 8-12% annually. Projects like <strong>Malpani M SoulStrings</strong> are perfectly positioned to capitalize on this upward trajectory.</p>

            <h2>2. The IT Corridor Synergy</h2>
            <p>Baner’s strategic location acts as a golden bridge. On one side, it offers seamless connectivity to the Hinjewadi IT Park—India's massive software hub. On the other, it borders the Mumbai-Pune Expressway. This makes Baner the preferred residential destination for top-tier executives, CEOs, and expat professionals working in Hinjewadi. For an NRI investor, this guarantees a high-yield, premium rental market that rarely sees vacancies.</p>

            <h2>3. Uncompromising Luxury and Amenities</h2>
            <p>NRIs expect international standards of living. Global exposure means they demand smart home automation, infinity pools, vast open green spaces, and rigorous security protocols. The developers in Baner have responded. Gated communities in this locality are now sprawling ecosystems. The integration of 35+ amenities, Vastu-compliant layouts, and architectural marvels ensures that an investment here isn't just a financial asset, but a lifestyle statement.</p>

            <h2>4. Favorable Exchange Rates and Transparency</h2>
            <p>The current global economic climate, coupled with favorable foreign exchange rates against the Indian Rupee, has created a highly lucrative window for NRIs. Furthermore, the implementation of RERA (Real Estate Regulatory Authority) has brought unprecedented transparency to the Indian real estate market. NRIs can now invest in premium projects like M SoulStrings with absolute confidence, knowing their investments are protected by stringent regulatory frameworks.</p>

            <h2>Conclusion</h2>
            <p>The synthesis of high ROI, strategic location, and ultra-luxury living makes Baner the ultimate destination for NRI investment in Pune. As the landscape continues to evolve, securing a 4 BHK luxury flat in Baner isn't just buying property; it's securing a legacy.</p>
            
            </div>
            
            <div >
                <h3>Ready to elevate your lifestyle?</h3>
                <p>Discover the pinnacle of luxury at Malpani M SoulStrings.</p>
                <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" >Enquire Now</a>
            </div>
          </div>
        </section>
        
    {/* Interactive EMI Calculator Section */}
    <section className="py-5" >
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 mb-5 mb-lg-0">
                    <h2 className="display-5 fw-bold mb-4" >Interactive Mortgage Calculator</h2>
                    <p className="text-white-50 fs-5 mb-4">Plan your cash flow with precision. Adjust the parameters to estimate your monthly EMI for an investment in Malpani M SoulStrings.</p>
                    <ul className="list-unstyled text-white-50 fs-6">
                        <li className="mb-2"><span className="material-symbols-outlined align-middle me-2" >check_circle</span> Real-time computation</li>
                        <li className="mb-2"><span className="material-symbols-outlined align-middle me-2" >check_circle</span> Adjustable interest rates</li>
                        <li className="mb-2"><span className="material-symbols-outlined align-middle me-2" >check_circle</span> Instant down payment metrics</li>
                    </ul>
                </div>
                <div className="col-lg-7">
                    <div className="card bg-dark border-secondary p-4 p-md-5" >
                        
                        <div className="mb-4">
                            <label htmlFor="propValue" className="form-label text-white d-flex justify-content-between">
                                <span>Property Value (₹)</span>
                                <span id="propValueDisplay" >₹ 2,50,00,000</span>
                            </label>
                            <input type="range" className="form-range" id="propValue" min="15000000" max="50000000" step="500000" value="25000000" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="downPayment" className="form-label text-white d-flex justify-content-between">
                                <span>Down Payment (₹)</span>
                                <span id="downPaymentDisplay" >₹ 50,00,000</span>
                            </label>
                            <input type="range" className="form-range" id="downPayment" min="1000000" max="40000000" step="500000" value="5000000" />
                        </div>

                        <div className="row mb-4">
                            <div className="col-6">
                                <label htmlFor="interestRate" className="form-label text-white">Interest Rate (%)</label>
                                <input type="number" className="form-control bg-dark text-white border-secondary" id="interestRate" value="8.5" step="0.1" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="loanTenure" className="form-label text-white">Loan Tenure (Years)</label>
                                <input type="number" className="form-control bg-dark text-white border-secondary" id="loanTenure" value="20" min="1" max="30" />
                            </div>
                        </div>

                        <div className="mt-5 p-4 rounded text-center" >
                            <h5 className="text-white-50 mb-2">Estimated Monthly EMI</h5>
                            <h2 className="display-4 fw-bold mb-0" id="emiResult" >₹ 1,73,564</h2>
                            <p className="text-white-50 mt-2 mb-0" >Loan Amount: <span id="loanAmountDisplay">₹ 2,00,00,000</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    


    </main>
  );
}