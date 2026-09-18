"use client";

import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heart, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";
import { Check, Crown, Sparkles, MessageCircle, Star } from "lucide-react";
import Footer from "@/components/Footer";

const testimonials = [
  {
    text: "Finding my life partner through this platform was one of the best decisions I ever made. The profiles felt genuine and the entire experience was smooth.",
    name: "Priya & Rahul",
    role: "Married Couple",
    image: "/images/story/st-01.jpg",
  },
  {
    text: "We connected through the platform and instantly felt that there was something special. Today, we are happily married and building our life together.",
    name: "Ananya & Arjun",
    role: "Happy Couple",
    image: "/images/story/st-02.jpg",
  },
  {
    text: "The quality of profiles and thoughtful matching process made our search much easier. We are grateful to have found each other here.",
    name: "Sneha & Raj",
    role: "Married Couple",
    image: "/images/story/st-03.jpg",
  },
  {
    text: "What started as a simple profile search turned into a beautiful relationship. We found compatibility, trust and ultimately our forever partner.",
    name: "Sarah & Daniel",
    role: "Happy Couple",
    image: "/images/story/st-04.jpg",
  },
  {
    text: "We connected through the platform and instantly felt that there was something special. Today, we are happily married and building our life together.",
    name: "Ananya & Arjun",
    role: "Happy Couple",
    image: "/images/story/st-05.jpg",
  },
];

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === testimonials.length - 1) {
          return 0;
        }

        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <section className="hero-carousel">
        <Carousel
          controls={false}
          indicators={true}
          interval={5000}
          pause={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero1.png"
              alt="Happy couple"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero2.png"
              alt="Couple together"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hero3.png"
              alt="Couple together"
            />
          </Carousel.Item>
        </Carousel>

        <div className="overlay-banner">
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={7} className="hero-left">
                <div className="hero-content" data-aos="fade-right">
                  <div className="hero-badge">
                    <Heart size={15} fill="currentColor" />

                    <span>Find someone truly special</span>
                  </div>

                  <h1>
                    Find Your Perfect Life <span>Partner</span>
                  </h1>

                  <p>
                    Discover meaningful connections and start your beautiful
                    journey together
                    <br />
                    with someone who truly understands you.
                  </p>

                  <div className="hero-actions">
                    <Link href="/about" className="hero-explore-btn">
                      <Search size={18} />
                      Know more
                    </Link>
                  </div>

                  <div className="hero-trust">
                    <div className="trust-item">
                      <ShieldCheck size={18} />

                      <span>Safe & Secure</span>
                    </div>

                    <div className="trust-divider"></div>

                    <div className="trust-item">
                      <Heart size={17} />

                      <span>Meaningful Matches</span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={5} className="hero-right">
                <div data-aos="fade-left">
                  <RegisterForm />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="experience-section">
        <Container>
          <Row className="g-4 justify-content-center align-items-center">
            <Col lg={6} md={6}>
              <div className="exp-img">
                <img src="/images/exp.png" alt="" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="experience-header">
                <span className="experience-tag">WHY CHOOSE US</span>
                <h2>
                  Trusted by <span>Thousands of Families</span>
                </h2>
              </div>
              <Row>
                <Col lg={6} md={6}>
                  <div className="exp-card" data-aos="fade-up">
                    <div className="exp-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>

                    <div className="exp-content">
                      <h4>100%</h4>
                      <h5>Mobile-Verified Profiles</h5>
                    </div>

                    <span className="exp-number">01</span>
                  </div>
                </Col>

                <Col lg={6} md={6}>
                  <div className="exp-card" data-aos="fade-up">
                    <div className="exp-icon">
                      <i className="fa-solid fa-shield-heart"></i>
                    </div>

                    <div className="exp-content">
                      <h4>30 Days</h4>
                      <h5>Money Back Guarantee</h5>
                    </div>

                    <span className="exp-number">02</span>
                  </div>
                </Col>

                <Col lg={12} className="mt-3">
                  <div className="exp-card" data-aos="fade-up">
                    <div className="exp-icon">
                      <i className="fa-solid fa-heart"></i>
                    </div>

                    <div className="exp-content">
                      <h4>16 Years</h4>
                      <h5>Successful Matchmaking</h5>
                    </div>

                    <span className="exp-number">03</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pricing-section">
        <Container>
          {/* Header */}
          <div className="experience-header text-center">
            <span className="experience-tag text-white">Pricing</span>

            <h2 className="text-white">
              Find Your <span>Perfect Match</span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <Row className="g-4 justify-content-center pricing-row">
            {/* Basic */}
            <Col lg={4} md={6}>
              <div className="pricing-card" data-aos="fade-up">
                <div className="pricing-icon">
                  <Heart size={24} />
                </div>

                <h3>Basic</h3>

                <p className="pricing-description">
                  Everything you need to start your matchmaking journey.
                </p>

                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">499</span>
                  <span className="duration">/month</span>
                </div>

                <button className="pricing-btn">
                  <Heart size={17} />
                  Get Started
                </button>

                <div className="pricing-divider"></div>

                <h5>Plan Includes</h5>

                <ul className="pricing-features">
                  <li>
                    <Check size={17} />
                    <span>View verified profiles</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Send interest requests</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Basic profile search</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Mobile verified profiles</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Profile privacy controls</span>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Premium */}
            <Col lg={4} md={6}>
              <div className="pricing-card premium-card" data-aos="fade-up">
                <div className="popular-badge">
                  <Sparkles size={14} />
                  Most Popular
                </div>

                <div className="pricing-icon premium-icon">
                  <Crown size={25} />
                </div>

                <h3>Premium</h3>

                <p className="pricing-description">
                  More visibility and better ways to connect with your ideal
                  match.
                </p>

                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">999</span>
                  <span className="duration">/month</span>
                </div>

                <button className="pricing-btn premium-btn">
                  <Crown size={17} />
                  Choose Premium
                </button>

                <div className="pricing-divider"></div>

                <h5>Everything in Basic, plus</h5>

                <ul className="pricing-features">
                  <li>
                    <Check size={17} />
                    <span>Unlimited profile browsing</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Unlimited interest requests</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Advanced profile filters</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Priority profile visibility</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Direct messaging</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Profile spotlight</span>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Elite */}
            <Col lg={4} md={6}>
              <div className="pricing-card" data-aos="fade-up">
                <div className="pricing-icon elite-icon">
                  <Star size={24} />
                </div>

                <h3>Elite</h3>

                <p className="pricing-description">
                  A complete matchmaking experience for serious relationships.
                </p>

                <div className="pricing-price">
                  <span className="currency">₹</span>
                  <span className="amount">1,999</span>
                  <span className="duration">/month</span>
                </div>

                <button className="pricing-btn">
                  <Star size={17} />
                  Go Elite
                </button>

                <div className="pricing-divider"></div>

                <h5>Everything in Premium, plus</h5>

                <ul className="pricing-features">
                  <li>
                    <Check size={17} />
                    <span>Personalized match suggestions</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Premium profile placement</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Priority customer support</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Profile verification badge</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Advanced matchmaking tools</span>
                  </li>

                  <li>
                    <Check size={17} />
                    <span>Dedicated relationship assistance</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Trust Row */}
          <div className="pricing-trust">
            <div className="pricing-trust-item">
              <ShieldCheck size={21} />
              <span>100% Verified Profiles</span>
            </div>

            <div className="pricing-trust-item">
              <MessageCircle size={21} />
              <span>Secure Conversations</span>
            </div>

            <div className="pricing-trust-item">
              <Heart size={21} />
              <span>Made for Meaningful Relationships</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="testimonial">
        <div className="experience-header" data-aos="fade-right">
          <span className="experience-tag">WHY CHOOSE US</span>
          <h2>
            Trusted by <span>Thousands of Families</span>
          </h2>
        </div>

        <div className="under-test-item" data-aos="fade-left">
          <div className="slider">
            <div
              className="slide-row"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="slide-col" key={index}>
                  <div className="content">
                    <div className="quote-icon">“</div>

                    <p className="testimonial-text">{testimonial.text}</p>

                    <h2>{testimonial.name}</h2>

                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>

                  <div className="hero">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="indicator">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider-btn ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Page;
