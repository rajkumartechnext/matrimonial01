"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Row, Col, Modal } from "react-bootstrap";
import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import ActivityMatchesProfile from "@/components/ActivityMatchesProfile";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  ArrowRight,
  MailPlus,
  MailCheck,
  Crown,
  Ban,
  HeartHandshake,
  Inbox,
  Send,
  Star,
  HeartCrack,
  X,
  UserRoundCheck,
  UserRoundPlus,
} from "lucide-react";
import ShortListedProfile from "@/components/ShortListedProfile";

function Page() {
  const [interestSent, setInterestSent] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const interestReceived = [
    {
      id: 1,
      name: "Ananya",
      age: 24,
      location: "Kolkata",
      height: "5ft 4in",
      image: "/images/matches/no-4.jpg",
    },
    {
      id: 2,
      name: "Priya",
      age: 25,
      location: "Durgapur",
      height: "5ft 3in",
      image: "/images/matches/no-5.jpg",
    },
    {
      id: 3,
      name: "Sneha",
      age: 26,
      location: "Siliguri",
      height: "5ft 5in",
      image: "/images/matches/no-6.jpg",
    },
  ];

  const BlockProfile = [
    {
      id: 1,
      name: "Ananya",
      age: 24,
      location: "Kolkata",
      height: "5ft 4in",
      image: "/images/matches/no-4.jpg",
    },
  ];

  const profileVisitors = [
    {
      id: 1,
      name: "XXXXX",
      age: 24,
      location: "Kolkata",
      image: "/images/matches/no-4.jpg",
    },
    {
      id: 2,
      name: "XXXXX",
      age: 25,
      location: "Durgapur",
      image: "/images/matches/no-3.jpg",
    },
  ];

  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={12}>
              <Row className="dashboard-stats activity">
                <Col xs={6} sm={6} md={4} xl={2}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <HeartHandshake size={20} />
                    </div>

                    <div>
                      <span>Interests</span>
                      <strong>02</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={4} xl={2}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <Inbox size={20} />
                    </div>

                    <div>
                      <span>Received</span>
                      <strong>3</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={4} xl={2}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <Send size={20} />
                    </div>

                    <div>
                      <span>Sent</span>
                      <strong>05</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={4} xl={2}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <Star size={20} />
                    </div>

                    <div>
                      <span>Shortlisted</span>
                      <strong>12</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={4} xl={2}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <HeartCrack size={20} />
                    </div>

                    <div>
                      <span>Declined</span>
                      <strong>02</strong>
                    </div>
                  </div>
                </Col>

                <Col xs={6} sm={6} md={4} xl={2}>
                  <div className="dashboard-stat-card">
                    <div className="dashboard-stat-icon">
                      <HeartCrack size={20} />
                    </div>

                    <div>
                      <span>Blocked </span>
                      <strong>01</strong>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="dashboard-panel-header mt-3">
                <div>
                  <h3>
                    Accepted Interests <span>(2)</span>
                  </h3>
                  <p>Follow up by starting a conversation!</p>
                </div>
              </div>

              <ActivityMatchesProfile />

              <Row className="dashboard-grid mt-4">
                <div className="dashboard-panel">
                  <div className="dashboard-panel-header">
                    <div>
                      <h3>
                        Profile Visitors <span>(2)</span>
                      </h3>
                      <p>These profiles might be interested in you</p>
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
                          slidesPerView: 5,
                          spaceBetween: 14,
                        },
                      }}
                    >
                      {profileVisitors.map((profile) => (
                        <SwiperSlide key={profile.id}>
                          <div className="dashboard-match-slide">
                            <Link href="#" onClick={handleShow}>
                              <div className="dashboard-match visitors">
                                <div className="dashboard-match-avatar">
                                  <img src={profile.image} alt={profile.name} />
                                </div>

                                <div className="dashboard-match-info">
                                  <strong>{profile.name}</strong>

                                  <span>
                                    {profile.age} years • {profile.location}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </Row>

              <Row className="dashboard-grid mt-4">
                <div className="dashboard-panel">
                  <div className="dashboard-panel-header">
                    <div>
                      <h3>
                        Interests Sent <span>(5)</span>
                      </h3>
                      <p>Respond to profiles that show interest!</p>
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

                              <div className="d-flex gap-1">
                                <Link
                                  className={`interest-sent-btn ${
                                    interestSent[profile.id] !== false
                                      ? "interest-sent-active"
                                      : ""
                                  }`}
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();

                                    setInterestSent((prev) => ({
                                      ...prev,
                                      [profile.id]:
                                        prev[profile.id] === false
                                          ? true
                                          : false,
                                    }));
                                  }}
                                >
                                  {interestSent[profile.id] !== false ? (
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
              </Row>

              <Row className="dashboard-grid mt-4">
                <div className="dashboard-panel">
                  <div className="dashboard-panel-header">
                    <div>
                      <h3>
                        Interests Received <span>(3)</span>
                      </h3>
                      <p>You’ve shown interest in these profiles</p>
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
                      {interestReceived.map((profile) => (
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
                                <Link className="profile-remove-btn" href="#">
                                  <X size={15} />
                                </Link>

                                <Link
                                  className={`interest-sent-btn-rec ${
                                    interestSent[profile.id]
                                      ? "interest-sent-active-rec"
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
                                      Accepted <UserRoundCheck size={13} />
                                    </>
                                  ) : (
                                    <>
                                      Accept <UserRoundPlus size={13} />
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
              </Row>

              <Row className="dashboard-grid mt-4">
                <div className="dashboard-panel">
                  <div className="dashboard-panel-header">
                    <div>
                      <h3>
                        Interests Received <span>(3)</span>
                      </h3>
                      <p>You’ve shown interest in these profiles</p>
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
                          slidesPerView: 4,
                          spaceBetween: 12,
                        },
                        1200: {
                          slidesPerView: 5,
                          spaceBetween: 14,
                        },
                      }}
                    >
                      {BlockProfile.map((profile) => (
                        <SwiperSlide key={profile.id}>
                          <div className="dashboard-match-slide">
                            <div className="dashboard-match blocked-profile">
                              <div className="dashboard-match-avatar">
                                <img
                                  src={profile.image}
                                  alt={profile.name}
                                  className="blocked-profile-image"
                                />
                              </div>

                              <div className="dashboard-match-info">
                                <strong>{profile.name}</strong>

                                <span className="blocked">Blocked You</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </Row>

              <div className="dashboard-panel-header mt-4">
                <div>
                  <h3>
                    Shortlisted Profiles <span>(4)</span>
                  </h3>
                  <p>Follow up by starting a conversation!</p>
                </div>
              </div>

              <ShortListedProfile />
            </Col>
          </Row>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          centered
          backdrop="static"
          className="profile-popup-modal"
        >
          <Modal.Body>
            <div className="profile-popup-warning-icon">
              <Crown size={28} />
            </div>

            <div className="profile-popup-confirm">
              <h4>Unlock profile visitors!</h4>

              <p>
                Become a paid member for unlimited access to matches who viewed
                your profile and might be interested in you
              </p>
            </div>

            <div className="d-flex mt-3 gap-2">
              <button type="button" className="mycancel" onClick={handleClose}>
                Cancel
              </button>

              <Link href="/premium" type="button" className="primarybtn">
                <Ban size={15} />
                Upgrade Now
              </Link>
            </div>
          </Modal.Body>
        </Modal>
      </SideBar>
    </>
  );
}

export default Page;
