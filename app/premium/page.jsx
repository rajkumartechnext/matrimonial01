"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Heart, ShieldCheck } from "lucide-react";
import { Check, Crown, Sparkles, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div>
      <header className="matrimony-header">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link href="/" className="brand-link">
              <span className="brand-text">Logo Here</span>
            </Link>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-item">
                <Link href="/register" className="menu-link">
                  Help?
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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
              <div className="pricing-card">
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
              <div className="pricing-card premium-card">
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

            <Col lg={4} md={6}>
              <div className="pricing-card">
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
    </div>
  );
}

export default page;
