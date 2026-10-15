import phoneIcon from "./assets/Group 60.svg";
import emailIcon from "./assets/Group 61.svg";
import addressIcon from "./assets/Group 62.svg";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="contact-info-texts">
              <h3 className="section-title">Contact Us</h3>

              <h2 className="section-subtitle">Have Questions?</h2>

              <p className="info-title">
                Ready to partner with us? Whether you're a platform, business,
                or investor — we're built to scale with you. How can we help
                you? Feel free to get in touch!
              </p>
            </div>

            <div className="info-box">
              <div className="info-item">
                <div className="info-icon">
                  <img src={phoneIcon} alt="Phone Icon" />
                </div>

                <div className="info-content">
                  <p>+971 563 951 975</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <img src={emailIcon} alt="Email Icon" />
                </div>

                <div className="info-content">
                  <p>info@lbdgo.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <img src={addressIcon} alt="Address Icon" />
                </div>

                <div className="info-content">
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-box">
              {/* Contact form - no validation */}

              <form
                onSubmit={function (e) {
                  e.preventDefault();
                }}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="contactName"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="contactEmail"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="contactPhone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="submit-row d-flex">
                  <button type="submit" className="btn-submit">
                    Submit
                    <i className="bi bi-arrow-right"></i>
                  </button>

                  <div className="checkbox-wrapper">
                    <div className="checkbox-row">
                      <input type="checkbox" id="privacyCheck" />

                      <label htmlFor="privacyCheck">
                        I agree that my data is collected and stored.
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
