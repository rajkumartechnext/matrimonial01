"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ChevronRight,
  Home,
  CircleUserRound,
  Timer,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div>
      <Header />
      <section className="about-breadcrumb">
        <Container>
          <div className="about-breadcrumb-content">
            <div className="about-breadcrumb-text">
              <h1>Blog</h1>
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

              <span className="active">Blog</span>
            </nav>
          </div>
        </Container>
      </section>

      <section className="blog-body pb-5 pt-5">
        <Container>
          <div className="blog-navigation">
            <div className="blog-nav-item">
              <MoveLeft /> Previous Blog Posts
            </div>
            <div className="blog-nav-item">
              Next Blog Posts <MoveRight />
            </div>
          </div>

          <Row>
            <Col lg={4} md={6}>
              <div className="blog-post">
                <img
                  src="/images/hero1.png"
                  alt="Building a Strong and Meaningful Relationship"
                  className="img-fluid"
                />
                <div className="blog-post-content">
                  <span className="blog-post-date">January 1, 2026</span>
                  <div className="blog-post-meta">
                    <div className="blog-post-author">
                      <CircleUserRound size={12} /> Admin
                    </div>
                    <div className="blog-post-read-time">
                      <Timer size={12} /> 6 minute read
                    </div>
                  </div>
                  <Link href="/blog/blogDetails">
                    <h3>Building a Strong and Meaningful Relationship</h3>
                  </Link>
                  <p>
                    Discover simple ways to build trust, understanding, and
                    meaningful connections that create a strong relationship.
                  </p>
                  <Link href="/blog/blogDetails" className="read-more">
                    Read More
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="blog-post">
                <img
                  src="/images/hero2.png"
                  alt="Finding the Right Life Partner"
                  className="img-fluid"
                />
                <div className="blog-post-content">
                  <span className="blog-post-date">January 2, 2026</span>
                  <div className="blog-post-meta">
                    <div className="blog-post-author">
                      <CircleUserRound size={12} /> Admin
                    </div>
                    <div className="blog-post-read-time">
                      <Timer size={12} /> 4 minute read
                    </div>
                  </div>
                  <Link href="/blog/blogDetails">
                    <h3>Finding the Right Life Partner</h3>
                  </Link>
                  <p>
                    Learn what truly matters when choosing a life partner and
                    how shared values can help create a lasting bond.
                  </p>
                  <Link href="/blog/blogDetails" className="read-more">
                    Read More
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="blog-post">
                <img
                  src="/images/hero3.png"
                  alt="Tips for a Successful Matrimonial Journey"
                  className="img-fluid"
                />
                <div className="blog-post-content">
                  <span className="blog-post-date">January 3, 2026</span>
                  <div className="blog-post-meta">
                    <div className="blog-post-author">
                      <CircleUserRound size={12} /> Admin
                    </div>
                    <div className="blog-post-read-time">
                      <Timer size={12} /> 8 minute read
                    </div>
                  </div>
                  <Link href="/blog/blogDetails">
                    <h3>Tips for a Successful Matrimonial Journey</h3>
                  </Link>
                  <p>
                    Explore practical tips to make your matrimonial journey more
                    positive, confident, and focused on meaningful connections.
                  </p>
                  <Link href="/blog/blogDetails" className="read-more">
                    Read More
                    <ChevronRight size={14} />
                  </Link>
                </div>
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
