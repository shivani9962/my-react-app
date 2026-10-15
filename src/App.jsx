import logo from "./assets/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import noonLogo from "./assets/noon2.png";
import talabatLogo from "./assets/tabalat.png";
import careemLogo from "./assets/careem.png";
import deliverooLogo from "./assets/deliveroo-image.png";

import aboutImage from "./assets/about-image.png";

import service1 from "./assets/image1.png";
import service2 from "./assets/img2.png";
import service3 from "./assets/image3.png";
import service4 from "./assets/image4.png";

import deliveryImage from "./assets/Delivery-Service.png";

import icon1 from "./assets/icon-1.svg";
import icon2 from "./assets/icon-2.svg";
import icon3 from "./assets/icon-3.svg";
import icon4 from "./assets/icon-4.svg";
import icon5 from "./assets/icon-5.svg";

import formIcon1 from "./assets/formicon1.png";
import formIcon2 from "./assets/formicon2.png";
import riderIcon from "./assets/ridet-icon.png";
import secureIcon from "./assets/form-icon.svg";

import "./App.css";
import Contact from "./contact";
console.log(logo);

function Header() {
  return (
    <header className="hero-section">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container-fluid px-4 px-lg-5">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={logo}
              alt="swiftloop-logo"
              style={{ width: "200px", height: "auto" }}
            />
          </a>

          <button id="menuToggle" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#about"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Our Story
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#join">
                  Join/HireRiders
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            <div className="contact-info">
              <span>
                <a href="tel:+971563951975">
                  <i className="bi bi-telephone"></i>
                  +971 56 395 1975
                </a>
              </span>

              <span>
                <i className="bi bi-geo-alt-fill"></i>
                Dubai, UAE
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="menu-overlay" id="mainNavbar">
        <button id="closeMenu" className="close-btn">
          ✕
        </button>

        <ul className="navbar-nav">
          <li className="nav-item mb-1 dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#about"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About
            </a>

            <ul className="dropdown-menu" aria-label="About">
              <li>
                <a className="dropdown-item" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Our Team
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Our Story
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link" href="#service">
              Service
            </a>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link" href="#join">
              Join/HireRiders
            </a>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="contact-info">
          <span>
            <i className="bi bi-telephone"></i>
            +971 56 395 1975
          </span>

          <span>
            <i className="bi bi-geo-alt-fill"></i>
            Dubai, UAE
          </span>
        </div>
      </div>

      <div className="container-fluid px-4 px-lg-5">
        <div className="hero-content-wrapper">
          <div className="row">
            <div className="col-lg-12 col-xl-12 text-center text-lg-start hero-content">
              <h1 className="hero-title">
                Delivering More
                <br />
                Than Orders.
                <br />
                <span>Delivering Trust.</span>
              </h1>

              <p className="hero-description">
                Powering last-mile delivery across the UAE with trained riders,
                precision operations, and scalable logistics support.
              </p>

              <div className="btn-group d-flex flex-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#" className="btn-primary-custom">
                  Partner With Us
                  <i className="bi bi-arrow-right"></i>
                </a>

                <a href="#" className="btn-secondary-custom">
                  Join as a Rider
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="container-fluid px-0">
        <div className="row align-items-center justify-content-center g-0">
          <div className="col-6 col-md-3 logo-item">
            <img src={noonLogo} alt="noon" className="img-fluid w-100 h-100" />
          </div>

          <div className="col-6 col-md-3 logo-item">
            <img
              src={talabatLogo}
              alt="Talabat"
              className="img-fluid w-100 h-100"
            />
          </div>

          <div className="col-6 col-md-3 logo-item">
            <img
              src={careemLogo}
              alt="Careem"
              className="img-fluid w-100 h-100"
            />
          </div>

          <div className="col-6 col-md-3 logo-item">
            <img
              src={deliverooLogo}
              alt="Deliveroo"
              className="img-fluid w-100 h-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-headings">
              <h3>About</h3>
              <h2>UAE's Delivery Operations Partner</h2>
            </div>
          </div>

          <div className="row gx-lg-5 align-items-left">
            <div className="col-lg-6 col-12">
              <div className="image-container">
                <img
                  src={aboutImage}
                  alt="delivery operations"
                  className="about-image img-fluid"
                />

                <div className="stats-overlay">
                  <div className="stats-item text-center">
                    <div className="stat-number">4+</div>
                    <div className="stats-label">Platform partners</div>
                  </div>

                  <div className="stat-divider"></div>

                  <div className="stats-item text-center">
                    <div className="stat-number">24/7</div>
                    <div className="stats-label">Operations Support</div>
                  </div>

                  <div className="stat-divider"></div>

                  <div className="stats-item text-center">
                    <div className="stat-number">UAE</div>
                    <div className="stats-label">Market Expertise</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="about-text-content">
                <p className="mb-3">
                  LBDO Delivery Services is a Dubai-based logistics and
                  last-mile delivery operations company built to support the
                  fast-moving demands of modern commerce across the UAE. We
                  specialize in delivering reliable, scalable, and
                  performance-driven delivery solutions for leading e-commerce,
                  food delivery, and retail platforms through structured
                  operational support and a professionally managed rider
                  network.
                </p>

                <p>
                  From rider sourcing and onboarding to fleet coordination,
                  dispatch support, and day-to-day delivery operations, LBDO
                  manages the systems behind seamless last-mile execution. With
                  a strong focus on speed, accountability, and service
                  consistency, we help businesses streamline delivery
                  performance, improve operational efficiency, and scale
                  confidently with a trusted logistics partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="service-section" id="service">
      <div className="container">
        <div className="service-headings text-center mb-5">
          <h3>Services</h3>
          <h2>We make your work more productive</h2>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="service-card">
              <img
                src={service1}
                className="service-img img-fluid"
                alt="Service"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <img
                src={service2}
                alt="Operations Management"
                className="service-img img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <img
                src={service3}
                alt="Fleet & Logistics Support"
                className="service-img img-fluid"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card">
              <img
                src={service4}
                alt="Platform Integration"
                className="service-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyLBDGO() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 col-12">
            <div className="why-image">
              <img
                src={deliveryImage}
                alt="delivery-service"
                className="delivery-image img-fluid"
              />

              <div className="delivery-overlay">
                <div className="delivery-item text-center">
                  <div className="delivery-percent">
                    100<sup>%</sup>
                  </div>

                  <div className="delivery-label">Delivery Focus</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12">
            <div className="why-headings text-left">
              <h3>Why LBDOG</h3>
              <h2>Built for Scale & Speed</h2>
            </div>

            <div className="feature-list">
              <div className="feature-item">
                <div className="del-icon">
                  <img src={icon1} alt="icon" />
                </div>

                <div className="del-content">
                  <h3>Strong Platform Partnerships</h3>
                  <p>
                    Trusted operational partner for Noon, Talabat, Careem &
                    Carrefour
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="del-icon">
                  <img src={icon2} alt="icon" />
                </div>

                <div className="del-content">
                  <h3>Skilled & Trained Rider Workforce</h3>
                  <p>
                    Professionally recruited and continuously trained delivery
                    network
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="del-icon">
                  <img src={icon3} alt="icon" />
                </div>

                <div className="del-content">
                  <h3>Reliable & Scalable Operations</h3>
                  <p>
                    Infrastructure designed to grow with your business demands
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="del-icon">
                  <img src={icon4} alt="icon" />
                </div>

                <div className="del-content">
                  <h3>On-Time Delivery Commitment</h3>
                  <p>
                    Consistent, measurable performance with quality
                    accountability
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="del-icon">
                  <img src={icon5} alt="icon" />
                </div>

                <div className="del-content">
                  <h3>Deep UAE Market Understanding</h3>
                  <p>
                    Local expertise powering smarter, faster last-mile delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section className="get-involved" id="join">
      <div className="container">
        <div className="form-heading text-center">
          <h3 className="section-title">Get Involved</h3>

          <h2 className="section-subtitle">Join or Hire Riders</h2>

          <p className="section-description">
            Are you looking to ride with us - or need a professional rider team
            for your business? Choose your path below.
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="option-item d-flex">
              <div className="option-icon">
                <img src={formIcon1} alt="icon" />
              </div>

              <div className="option-content">
                <h3>Join as a Rider</h3>

                <p>
                  Join LBDOG's professional rider network. Earn with top
                  platforms like Noon, Talabat, Careem & Carrefour.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div className="option-item-gray d-flex">
              <div className="option-icon-gray">
                <img src={formIcon2} alt="icon" />
              </div>

              <div className="option-content-gray">
                <h3>Hire Riders for Your Business</h3>

                <p>
                  Need a trained, managed rider workforce? Tell us your
                  requirements and we'll match you fast.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="row form-top align-items-end">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="rider-item">
                <div className="application-icon">
                  <img
                    src={riderIcon}
                    alt="Application Icon"
                    className="application-icon"
                  />
                </div>

                <div className="application-content">
                  <h3>Rider Application</h3>

                  <p>
                    Fill in your details below. Our team will review your
                    application and contact you within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div className="row">
                <div className="step-wrapper">
                  <div className="step-item">
                    <span className="col-badge">1</span>
                    <h5 className="col-header-text">Personal Info</h5>
                  </div>

                  <div className="divider"></div>

                  <div className="step-item">
                    <span className="col-badge">2</span>
                    <h5 className="col-header-text">Experience</h5>
                  </div>

                  <div className="divider"></div>

                  <div className="step-item">
                    <span className="col-badge">3</span>
                    <h5 className="col-header-text">Availability</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form - validation removed */}

          <form
            onSubmit={function (e) {
              e.preventDefault();
            }}
          >
            <div className="row gx-5 gy-1">
              <div className="col-md-6 col-12">
                <div className="dashboard-col">
                  <div className="field-group">
                    <label className="form-label">
                      Full Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="field-group">
                    <label className="form-label">
                      Email Address <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="field-group">
                    <label className="form-label">
                      Age <span>*</span>
                    </label>

                    <select id="age" className="form-select" defaultValue="">
                      <option value="" disabled>
                        Select age range
                      </option>

                      <option>18-25</option>
                      <option>26-35</option>
                      <option>36-45</option>
                      <option>45+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="dashboard-col">
                  <div className="field-group">
                    <label className="form-label">
                      Phone Number <span>*</span>
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="+971 5X XXX XXX"
                    />
                  </div>

                  <div className="field-group">
                    <label className="form-label">
                      Nationality <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="nationality"
                      className="form-control"
                      placeholder="e.g. Pakistani, Indian, Filipino..."
                    />
                  </div>

                  <div className="field-group">
                    <label className="form-label">
                      Emirates ID / Visa Status <span>*</span>
                    </label>

                    <select
                      id="visaStatus"
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select status
                      </option>

                      <option>Employment Visa</option>
                      <option>Freelance Visa</option>
                      <option>Spouse/Husband Visa</option>
                      <option>Own Visa</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row form-bottom">
              <div className="col-6">
                <div className="secure-note">
                  <img
                    src={secureIcon}
                    alt="Secure Icon"
                    className="secure-icon"
                  />

                  <p className="secure-text">
                    Your information is secure and will only be used for
                    application purposes.
                  </p>
                </div>
              </div>

              <div className="col-6 text-end">
                <button type="button" className="btn-terinary-custom">
                  Next Step
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 text-center text-lg-start">
            <p className="footer-text">LBDGO © 2026. All Rights Reserved.</p>
          </div>

          <div className="col-lg-6 col-12 text-lg-end text-center">
            <div className="footer-links">
              <a href="#">Terms and Conditions</a>

              <span>|</span>

              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
function App() {
  return (
    <>
      <Header />
      <LogoStrip />
      <About />
      <Services />
      <WhyLBDGO />
      <GetInvolved />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
