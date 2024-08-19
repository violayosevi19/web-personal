const Education = () => {
  return (
    <>
      <section id="education" className="education">
        <div className="section-heading text-center">
          <h2>education</h2>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}>
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2020 - 2023</h2>
                    <h3>
                      Associate <span>of </span> informatics management
                    </h3>
                  </div>
                  <div className="timeline-horizontal-border">
                    {/* <i className="fa fa-circle" aria-hidden="true"></i> */}
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">Padang State Polytechnic</h4>
                      <h5>Padang, West Sumatera, Indonesia</h5>
                      <p className="description">
                        Studying for 3 years, working in the world of IT,
                        especially web and mobile based application development.
                        Ends with the creation of a final assignment as a
                        requirement for graduation. Achieved a GPA of 3.77.
                      </p>
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

export default Education;
