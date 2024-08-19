const Portofolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>portfolio</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/CV.BRV.png"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">
                          CV Berkat Rezeki Yosev Product Distribution
                          Information System
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="assets/images/portfolio/form-rawat-jalan.png"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">
                          Management of Outpatient Loan and Return Files
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/posyandu.png"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">
                          Posyandu services in Nanggalo District, Padang City
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src="assets/images/portfolio/kodefikasi_penyakit.png"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">
                          Disease Management and Codification Search
                        </a>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src="assets/images/portfolio/surat-masuk-keluar.png"
                        alt="portfolio image"
                      />
                      <div className="isotope-overlay">
                        <a href="#">
                          Management of Incoming and Outgoing Patient Letters
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
