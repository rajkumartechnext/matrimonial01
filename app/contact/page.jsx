import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";

import {
  ChevronRight,
  Home,
  HandHeart,
  ShieldCheck,
  UserRound,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";
import { Container, Row, Col, Form } from "react-bootstrap";

function page() {
  return (
    <div>
      <Header />

      <section className="about-breadcrumb">
        <Container>
          <div className="about-breadcrumb-content">
            <div className="about-breadcrumb-text">
              <h1>Contact Us</h1>
              <span className="about-breadcrumb-small">
                Find Your Perfect Match
              </span>
            </div>

            <nav className="about-breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">
                <Home size={15} />
                <span>Home</span>
              </Link>

              <ChevronRight size={15} />

              <span className="active">Contact Us</span>
            </nav>
          </div>
        </Container>
      </section>

      <section className="contact-body">
        <Container>
          <Row className="g-4 contact-main-row">
            <Col lg={5}>
              <div className="contact-info-card">
                <div className="experience-header">
                  <span className="experience-tag">Get In Touch</span>
                  <h2>
                    We’d Love To Hear <span>From You</span>
                  </h2>
                  <p>
                    Reach out to us and our team will be happy to assist you
                    with your matrimonial journey.
                  </p>
                </div>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Mail size={19} />
                    </div>
                    <div>
                      <span>Email Us</span>
                      <a href="mailto:support@example.com">
                        support@example.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Phone size={19} />
                    </div>
                    <div>
                      <span>Call Us</span>
                      <a href="tel:+919876543210">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <MapPin size={19} />
                    </div>
                    <div>
                      <span>Our Office</span>
                      <p>Durgapur, West Bengal, India</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Clock3 size={19} />
                    </div>
                    <div>
                      <span>Support Hours</span>
                      <p>Monday - Saturday, 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="contact-info-card">
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <div className="form-group">
                        <label className="mt-3">Full Name</label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        <label className="mt-3">Email Address</label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        <label className="mt-3">Phone Number</label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        <label className="mt-3">Subject</label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="How can we help?"
                        />
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="form-group">
                        <label className="mt-3">Your Message</label>

                        <textarea
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Write your message here..."
                        />
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="contact-form-bottom">
                        <p>
                          <ShieldCheck size={16} />
                          We respect your privacy and never share your details.
                        </p>
                      </div>
                    </Col>

                    <button
                      type="submit"
                      className="pricing-btn premium-btn mt-4"
                    >
                      Send Message
                      <Send size={16} />
                    </button>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default page;
