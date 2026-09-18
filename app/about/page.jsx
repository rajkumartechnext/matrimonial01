"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import {
  ChevronRight,
  Home,
  HandHeart,
  ShieldLock,
  UserRound,
} from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

function page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <section className="about-breadcrumb">
        <Container>
          <div className="about-breadcrumb-content">
            <div className="about-breadcrumb-text">
              <h1>About Us</h1>
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

              <span className="active">About Us</span>
            </nav>
          </div>
        </Container>
      </section>

      <section className="about-body">
        <Container>
          <div className="about-content">
            <div className="about-intro">
              <div className="experience-header">
                <span className="experience-tag">About Us</span>
                <h2>
                  Helping You Find a <span>Meaningful Connection </span>
                </h2>
              </div>
              <p>
                Finding the right life partner is one of the most important
                journeys in life. Our matrimonial platform is created to make
                that journey simple, secure, and meaningful by bringing people
                and families together with genuine intentions.
              </p>
            </div>

            <div className="about-story">
              <div className="about-story-image" data-aos="fade-right">
                <img
                  src="/images/hero1.png"
                  alt="Couple building a meaningful relationship"
                />
              </div>

              <div className="about-story-content" data-aos="fade-left">
                <div className="experience-header">
                  <span className="experience-tag">Our Story</span>
                  <h2>
                    Where Compatibility <span>Meets Trust</span>
                  </h2>
                </div>
                <p>
                  We believe that a matrimonial platform should be more than
                  just a collection of profiles. It should be a place where
                  people can connect with honesty, respect, and shared values.
                </p>
                <p>
                  Our platform brings together modern technology and a
                  relationship-focused approach to help you explore profiles
                  that align with your preferences, lifestyle, values, and
                  expectations.
                </p>
                <p>
                  Whether you are beginning your search or ready to take the
                  next step, we are here to make every part of your matrimonial
                  journey easier and more comfortable.
                </p>
              </div>
            </div>

            <div className="about-values">
              <div className="about-section-heading">
                <div className="experience-header">
                  <span className="experience-tag">What We Believe</span>
                  <h2>
                    Built Around Meaningful <span>Relationships</span>
                  </h2>
                </div>

                <p>
                  Every profile represents a person, a family, and a unique
                  story. That is why we focus on creating an experience built
                  around trust, privacy, and genuine connections.
                </p>
              </div>

              <Row className="g-4">
                <Col lg={4} md={6}>
                  <div className="about-value-card" data-aos="fade-up">
                    <div className="about-value-icon">
                      <HandHeart size={18} />
                    </div>
                    <h4>Meaningful Connections</h4>
                    <p>
                      Discover people who share your relationship goals, values,
                      interests, and expectations for the future.
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={6}>
                  <div className="about-value-card" data-aos="fade-up">
                    <div className="about-value-icon">
                      <ShieldLock size={18} />
                    </div>
                    <h4>Privacy & Trust</h4>
                    <p>
                      Your personal information and preferences matter. We aim
                      to provide a comfortable environment where you remain in
                      control of your profile and interactions.
                    </p>
                  </div>
                </Col>

                <Col lg={4} md={6}>
                  <div className="about-value-card" data-aos="fade-up">
                    <div className="about-value-icon">
                      <UserRound size={18} />
                    </div>
                    <h4>Family & Values</h4>
                    <p>
                      We understand the importance of family, traditions, and
                      shared values when taking the journey toward marriage.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="about-journey">
              <Row>
                <Col md={3}>
                  <div className="about-journey-img" data-aos="fade-right">
                    <img src="images/about1.png" alt="" className="img-fluid" />
                  </div>
                </Col>
                <Col md={9}>
                  <div className="about-journey-content">
                    <div className="experience-header m-0">
                      <span className="experience-tag">Your Journey</span>
                      <h2>
                        From <span>First Profile</span> to Forever
                      </h2>
                    </div>
                    <p>
                      Your matrimonial journey can begin with a simple profile.
                      Share your story, understand what you are looking for,
                      explore suitable profiles, and connect with people who
                      feel right for you.
                    </p>

                    <div className="about-steps">
                      <div className="about-step">
                        <span>01</span>
                        <div>
                          <h5>Create Your Profile</h5>
                          <p>
                            Tell us about yourself, your family, and what you
                            seek.
                          </p>
                        </div>
                      </div>

                      <div className="about-step">
                        <span>02</span>
                        <div>
                          <h5>Discover Matches</h5>
                          <p>
                            Explore profiles based on your preferences and
                            interests.
                          </p>
                        </div>
                      </div>

                      <div className="about-step">
                        <span>03</span>
                        <div>
                          <h5>Connect & Communicate</h5>
                          <p>
                            Express interest and start meaningful conversations.
                          </p>
                        </div>
                      </div>

                      <div className="about-step">
                        <span>04</span>
                        <div>
                          <h5>Take the Next Step</h5>
                          <p>
                            Build trust and move forward when the connection
                            feels right.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="about-cta">
              <Row>
                <Col md={8}>
                  <span className="about-subtitle">Start Your Journey</span>
                  <h3>Your Story Could Begin With a Connection</h3>
                  <p>
                    Create your profile and take the first step toward meeting
                    someone who could become an important part of your life.
                  </p>
                  <Link href="/" className="hero-explore-btn mt-4">
                    Create Your Profile <UserRound size={16} />
                  </Link>
                </Col>
                <Col md={4}>
                  <div className="about-cta-img" data-aos="fade-left">
                    <img src="images/about.png" alt="" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default page;
