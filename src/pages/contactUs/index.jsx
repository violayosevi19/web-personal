import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const [subject, setSubject] = React.useState();
  const [message, setMessage] = React.useState();
  const serviceId = "service_v24t2xc";
  const templateId = "template_x57jrpf";
  const publicKey = "QRuWwWh5hVpNCQDA6";

  const sendEmail = (e) => {
    e.preventDefault();
    const templateForm = {
      from_name: name,
      to_name: "Viola",
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateForm, publicKey).then(
      (result) => {
        Swal.fire({
          title: "Success!",
          text: "Your email has been send to Viola",
          icon: "success",
        });
        console.log("Email successfully sent:", result.text);
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
      },
      (error) => {
        console.error("There was an error sending the email:", error.text);
      },
    );
  };
  return (
    <>
      <section id="contact" className="contact">
        <div className="section-heading text-center">
          <h2>contact me</h2>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-form">
                    <form>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name*"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Email*"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="subject"
                              onChange={(e) => setSubject(e.target.value)}
                              value={subject}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="8"
                              id="comment"
                              placeholder="Message"
                              onChange={(e) => setMessage(e.target.value)}>
                              {message}
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="single-contact-btn">
                            <button className="contact-btn" onClick={sendEmail}>
                              submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-adress">
                    <div className="contact-add-head">
                      <h3>viola yosevi</h3>
                      <p>
                        web developer / fullstack develope / frontend developer
                      </p>
                    </div>
                    <div className="contact-add-info">
                      <div className="single-contact-add-info">
                        <h3>phone</h3>
                        <p>+6283184206039</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>email</h3>
                        <p>viola.yosevi19@gmail.com</p>
                      </div>
                      {/* <div className="single-contact-add-info">
                        <h3>website</h3>
                        <p>www.brownsine.com</p>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="hm-foot-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/viola-yosevi-492489256">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
