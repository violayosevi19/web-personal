const AboutMe = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>
                    I am a Professional Web developer. Experience in build and
                    maintenance project for 2 years.
                  </h3>
                  <p>
                    Graduate from Padang State Polytechnic majoring information
                    technology. I have a some program languages and framework
                    such as PHP, javascript, react.js, next,js, Laravel, html
                    and CSS. I have been experience in organization, internship
                    and working as a Fullstack Engineer for 3 years. I can work
                    together in a team, do not give up easily, good time
                    management, problem solver, and adapted in other projects. I
                    am ready to hone my skills in actively contributing to the
                    development and maintenance of projects as well as improving
                    the performance and scalability of existing web
                    applications.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>
                          <a href="https://wa.me/6283184206039" target="_blank">
                            +628 3184206039
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>
                          <a
                            href="mailto:viola.yosevi19@gmailcom"
                            target="_blank">
                            viola.yosevi19@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="single-about-add-info">
                        <h3>website</h3>
                        <p>
                          <a
                            href="https://mycraftweb.netlify.app/"
                            target="_blank">
                            mycraftweb.netlify.app
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img
                    src="assets/images/about/viola.yosevi.JPG"
                    alt="profile_image"
                  />
                  <div className="about-list-icon">
                    <ul>
                      {/* <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li> */}
                      <li>
                        <a href="https://www.linkedin.com/in/viola-yosevi-492489256">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li> */}
                    </ul>
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

export default AboutMe;
