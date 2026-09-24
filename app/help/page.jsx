"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";

import {
  ChevronRight,
  Home,
  Search,
  ShieldUser,
  HandCoins,
  UserRound,
  Heart,
  MessageCircle,
  LockKeyhole,
  Settings,
  PhoneCall,
  CircleHelp,
} from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

function page() {
  return (
    <div>
      <Header />
      <section className="about-breadcrumb">
        <Container>
          <div className="about-breadcrumb-content">
            <div className="about-breadcrumb-text">
              <h1>Help</h1>
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

              <span className="active">Help</span>
            </nav>
          </div>
        </Container>
      </section>

      <Container className="mt-4 mb-5">
        <div className="experience-header text-center">
          <h2>
            Hi, how can we <span>help</span> you?
          </h2>
        </div>

        <div className="profile-search-wrapper">
          <div className="search-bar help">
            <Search className="search-icon" size={18} />

            <input type="text" placeholder="What can we help with?" />

            <button type="button" className="search-btn">
              Search
            </button>
          </div>
        </div>
      </Container>

      <section className="help mb-5">
        <Container>
          <Row>
            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <ShieldUser size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">
                  Profile & Selfie Verification
                </Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <HandCoins size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Membership & Payments</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <UserRound size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Account & Login</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <Heart size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Matches & Interests</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <MessageCircle size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Messages & Chat</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <LockKeyhole size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Privacy & Safety</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <Settings size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Profile Settings</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <PhoneCall size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Calls & Communication</Link>
              </div>
            </Col>

            <Col md={4} xm={6}>
              <div className="help-card">
                <div className="help-icon">
                  <CircleHelp size={20} strokeWidth={1.75} />
                </div>
                <Link href="help/helpDetails">Technical Support</Link>
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
