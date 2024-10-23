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
                    I am a Professional Front End Developer. Experience in build and
                    maintenance project for 3 years.
                  </h3>
                  <p>
                  I am a graduate of Padang State Polytechnic with GPA 3.77 in Information Technology. Over the past
                  three years, {`I've`} enhanced my skills as a Fullstack Developer, working with various programming
                  languages and frameworks such as PHP, JavaScript, React.js, Next.js, and Laravel. My experience
                  spans from internships to full-time positions where I contributed to projects involving web development,
                  maintenance, and scalability improvements. I am highly adaptable, a problem solver, and thrive in team
                  environments. Currently, I am focused on contributing to the development of innovative solutions in web
                  applications, aiming to enhance performance and user experience while staying abreast of the latest
                  technological advancements.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>
                          <a href="https://wa.me/6283184206039" target="_blank">
                            +62 831 8420 6039
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
