const Profiles = () => {
  return (
    <>
      <section id="profiles" className="profiles">
        <div className="profiles-details">
          <div className="section-heading text-center">
            <h2>profiles</h2>
          </div>
          <div className="container">
            <div className="profiles-content">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-profile">
                    <div className="profile-txt">
                      <a
                        href="https://www.linkedin.com/in/viola-yosevi-492489256"
                        target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <div className="profile-icon-name">linkedin</div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <a
                          href="https://www.linkedin.com/in/viola-yosevi-492489256"
                          target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <div className="profile-icon-name">linkedin</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="single-profile profile-no-border">
                    <div className="profile-txt">
                      <a
                        href="https://github.com/violayosevi19"
                        target="_blank">
                        <i className="flaticon-github-logo"></i>
                      </a>
                      <div className="profile-icon-name">github</div>
                    </div>
                    <div className="single-profile-overlay">
                      <div className="profile-txt">
                        <a
                          href="https://github.com/violayosevi19"
                          target="_blank">
                          <i className="flaticon-github-logo"></i>
                        </a>
                        <div className="profile-icon-name">github</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-border"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profiles;
