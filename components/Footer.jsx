"use client";

import React from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="matrimonial-footer">
      {/* CTA Section */}
      {/* <div className="footer-cta">
        <div className="container-fluid">
          <div className="footer-cta-inner">
            <div className="footer-cta-content">
              <h2>Ready to Find Your Perfect Match?</h2>
              <p>
                Start your journey today and discover meaningful connections
                with verified profiles.
              </p>
            </div>

            <button className="footer-cta-btn">
              Find Your Match
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container-fluid">
          <div className="row gy-5">
            {/* Brand */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-brand">
                <a href="/" className="footer-logo">
                  {/* <span>Logo Here</span> */}
                  <img src="images/logo-footer.png" alt="" />
                </a>

                <p className="footer-description">
                  Bringing hearts closer and helping people find meaningful,
                  lasting relationships. Your journey to a beautiful
                  relationship starts here.
                </p>

                {/* Trust Badge */}
                <div className="footer-trust">
                  <div className="trust-icon">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <strong>Safe & Verified</strong>
                    <span>Trusted matrimonial platform</span>
                  </div>
                </div>

                <div className="footer-socials">
                  <a href="#" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a href="#" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  <a href="#" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>

                  <a href="#" aria-label="X">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="footer-column">
                <h5>Quick Links</h5>

                <ul>
                  <li>
                    <a href="/">
                      <ChevronRight size={14} />
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="/about">
                      <ChevronRight size={14} />
                      About Us
                    </a>
                  </li>

                  <li>
                    <a href="/matches">
                      <ChevronRight size={14} />
                      Find Matches
                    </a>
                  </li>

                  <li>
                    <a href="/success-stories">
                      <ChevronRight size={14} />
                      Success Stories
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="footer-column">
                <h5>Support</h5>

                <ul>
                  <li>
                    <a href="/help">
                      <ChevronRight size={14} />
                      Help Center
                    </a>
                  </li>

                  <li>
                    <a href="/contact">
                      <ChevronRight size={14} />
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a href="/faq">
                      <ChevronRight size={14} />
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="footer-column">
                <h5>Legal</h5>

                <ul>
                  <li>
                    <a href="/help">
                      <ChevronRight size={14} />
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="/contact">
                      <ChevronRight size={14} />
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a href="/faq">
                      <ChevronRight size={14} />
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-column footer-contact">
                <h5>Get In Touch</h5>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={17} />
                  </div>

                  <div>
                    <span>Call Us</span>
                    <a href="tel:+911234567890">+91 12345 67890</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={17} />
                  </div>

                  <div>
                    <span>Email Us</span>
                    <a href="mailto:hello@soulmate.com">hello@soulmate.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <span>Our Office</span>
                    <p>Kolkata, West Bengal, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <div>
              <h4>Stay Connected With Us</h4>
              <p>
                Get relationship tips, success stories and updates directly in
                your inbox.
              </p>
            </div>

            <form className="newsletter-form">
              <div className="newsletter-input">
                <Mail size={17} />
                <input type="email" placeholder="Enter your email address" />
              </div>

              <button type="submit">
                Subscribe
                <ArrowUpRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>
              © {new Date().getFullYear()} Matrimonial. All rights reserved.
            </p>

            <button
              type="button"
              className="back-top"
              onClick={handleScrollTop}
              aria-label="Back to top"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
