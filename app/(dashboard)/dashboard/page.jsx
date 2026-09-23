"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import Primium from "@/components/Primium";

import {
  ArrowRight,
  Heart,
  Eye,
  UserPlus,
  MailPlus,
  MessageCircle,
  MailCheck,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Page() {
  const [interestSent, setInterestSent] = useState({});

  const recommendedMatches = [
    {
      id: 1,
      name: "Ananya",
      age: 24,
      location: "Kolkata",
      height: "5ft 4in",
      image: "/images/matches/no-1.jpg",
    },
    {
      id: 2,
      name: "Priya",
      age: 25,
      location: "Durgapur",
      height: "5ft 3in",
      image: "/images/matches/no-2.jpg",
    },
    {
      id: 3,
      name: "Sneha",
      age: 26,
      location: "Siliguri",
      height: "5ft 5in",
      image: "/images/matches/no-3.jpg",
    },
    {
      id: 4,
      name: "Riya",
      age: 25,
      location: "Kolkata",
      height: "5ft 2in",
      image: "/images/matches/no-4.jpg",
    },
    {
      id: 5,
      name: "Moumita",
      age: 27,
      location: "Asansol",
      height: "5ft 4in",
      image: "/images/matches/no-5.jpg",
    },
    {
      id: 6,
      name: "Puja",
      age: 24,
      location: "Durgapur",
      height: "5ft 3in",
      image: "/images/matches/no-1.jpg",
    },
  ];

  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={9}>
              <Row className="dashboard-stats">
                <Col xs={6} sm={6} xl={3}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <Heart size={20} />
                    </div>

                    <div>
                      <span>Total Matches</span>
                      <strong>128</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} xl={3}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <Eye size={20} />
                    </div>

                    <div>
                      <span>Profile Views</span>
                      <strong>46</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} xl={3}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <UserPlus size={20} />
                    </div>

                    <div>
                      <span>Interests</span>
                      <strong>18</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} xl={3}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <MessageCircle size={20} />
                    </div>

                    <div>
                      <span>Messages</span>
                      <strong>12</strong>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="dashboard-grid">
                <div className="dashboard-panel">
                  <div className="dashboard-panel-header">
                    <div>
                      <h3>Recommended Matches</h3>
                    </div>
                  </div>

                  <div className="match-carousel-wrapper">
                    <Swiper
                      className="dashboard-match-carousel"
                      modules={[Autoplay]}
                      loop={recommendedMatches.length > 1}
                      spaceBetween={12}
                      slidesPerView={1}
                      autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      speed={600}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        576: {
                          slidesPerView: 2,
                          spaceBetween: 12,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 12,
                        },
                        992: {
                          slidesPerView: 2,
                          spaceBetween: 12,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 14,
                        },
                      }}
                    >
                      {recommendedMatches.map((profile) => (
                        <SwiperSlide key={profile.id}>
                          <div className="dashboard-match-slide">
                            <div className="dashboard-match">
                              <div className="dashboard-match-avatar">
                                <img src={profile.image} alt={profile.name} />
                              </div>

                              <div className="dashboard-match-info">
                                <strong>{profile.name}</strong>

                                <span>
                                  {profile.age} years • {profile.location} •{" "}
                                  {profile.height}
                                </span>
                              </div>

                              <div className="d-flex gap-2">
                                <Link
                                  className={`interest-sent-btn ${
                                    interestSent[profile.id]
                                      ? "interest-sent-active"
                                      : ""
                                  }`}
                                  href="#"
                                  onClick={() => {
                                    setInterestSent((prev) => ({
                                      ...prev,
                                      [profile.id]: true,
                                    }));
                                  }}
                                >
                                  {interestSent[profile.id] ? (
                                    <>
                                      Interest Sent <MailCheck size={13} />
                                    </>
                                  ) : (
                                    <>
                                      Interests <MailPlus size={13} />
                                    </>
                                  )}
                                </Link>

                                <Link
                                  className="profile-view-btn"
                                  href={`/matches/profileDetails`}
                                >
                                  <ArrowRight size={13} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                <div className="dashboard-panel">
                  <div className="dashboard-panel-header">
                    <div>
                      <h3>Recent Activity</h3>
                    </div>
                  </div>

                  <Row>
                    <Col md={6} className="mb-2">
                      <div className="dashboard-activity">
                        <div className="dashboard-activity-icon">
                          <Eye size={17} />
                        </div>

                        <span>
                          <strong>3 people</strong> viewed your profile
                          <small>2 hours ago</small>
                        </span>
                      </div>
                    </Col>

                    <Col md={6} className="mb-2">
                      <div className="dashboard-activity">
                        <div className="dashboard-activity-icon">
                          <Heart size={17} />
                        </div>

                        <span>
                          <strong>Priya</strong> sent you an interest
                          <small>5 hours ago</small>
                        </span>
                      </div>
                    </Col>

                    <Col md={6} className="mb-2">
                      <div className="dashboard-activity">
                        <div className="dashboard-activity-icon">
                          <MessageCircle size={17} />
                        </div>

                        <span>
                          You received a new message
                          <small>Yesterday</small>
                        </span>
                      </div>
                    </Col>

                    <Col md={6} className="mb-2">
                      <div className="dashboard-activity">
                        <div className="dashboard-activity-icon">
                          <Heart size={17} />
                        </div>

                        <span>
                          <strong>Ananya</strong> liked your profile
                          <small>Yesterday</small>
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>

            <Col xl={3}>
              <div className="dashboard-premium-sticky">
                <Primium />
              </div>
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
