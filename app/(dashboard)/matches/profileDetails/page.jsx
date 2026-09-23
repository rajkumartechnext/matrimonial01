"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  LockKeyhole,
  CalendarDays,
  Ruler,
  Church,
  Check,
  Pin,
  ArrowRight,
  X,
  House,
  Users,
  WineOff,
  Utensils,
  CigaretteOff,
  Music,
  BookOpen,
  Plane,
  Camera,
  CookingPot,
  Mic2,
} from "lucide-react";
import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import ProfileImageSlider from "@/components/ProfileImageSlider";
import Primium from "@/components/Primium";

function Page() {
  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page profile-page">
          <Row>
            <Col xl={9} lg={8}>
              <ProfileImageSlider />

              <div className="user-profile-details">
                <section className="user-profile-section">
                  <div className="prof-header">
                    <h1>A Shab Ghosh</h1>
                    <div className="tag-badge-prof-det">
                      Profile managed by <span>Self</span>
                    </div>
                  </div>

                  <div className="user-profile-info-grid">
                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <MapPin size={17} />
                      </div>
                      <div>
                        <small>Location</small>
                        <strong>Durgapur, West Bengal</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Ruler size={17} />
                      </div>
                      <div>
                        <small>Height</small>
                        <strong>5ft 2in</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Church size={17} />
                      </div>
                      <div>
                        <small>Religion</small>
                        <strong>Hindu</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Users size={17} />
                      </div>
                      <div>
                        <small>Community</small>
                        <strong>Bania</strong>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>About Her</h3>
                    <span>About her personality and lifestyle</span>
                  </div>

                  <p className="user-profile-about">
                    She is a simple, caring and family-oriented person. She
                    believes in maintaining a healthy balance between personal
                    and professional life. She enjoys spending time with family
                    and close friends and values honesty, understanding and
                    mutual respect in a relationship.
                  </p>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>You & Her</h3>
                    <span>Things you both may have in common</span>
                  </div>

                  <div className="user-profile-tags">
                    <span>Family Values</span>
                    <span>Similar Lifestyle</span>
                    <span>Same Community</span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Education</h3>
                    <span>Academic background</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <GraduationCap size={19} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>M.Com - Post Graduation</strong>
                      <span>Commerce</span>
                    </div>

                    <Check size={18} className="user-profile-detail-check" />
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Contact</h3>
                    <span>Connect with her when you are ready</span>
                  </div>

                  <div className="user-profile-contact-card">
                    <div className="user-profile-contact-icon">
                      <LockKeyhole size={20} />
                    </div>

                    <div className="user-profile-contact-content">
                      <strong>Contact details are private</strong>

                      <p>
                        Send an interest or connect with her to see contact
                        information.
                      </p>

                      <a href="/premium" className="upgrade-btn">
                        Upgrade Now <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Career</h3>
                    <span>Professional information</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>Student</strong>
                      <span>Not working currently</span>
                    </div>
                  </div>

                  <div className="user-profile-income">
                    <strong>Annual Income</strong>
                    <span>No Income</span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Family</h3>
                    <span>Family background and values</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <House size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>
                        Upper Middle Nuclear Family from Durgapur, West Bengal
                      </strong>
                      <span>Moderate values • kashyap Gotra</span>
                    </div>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <Users size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>
                        Father is a Businessman, Mother is a Homemaker
                      </strong>
                      <span>One younger brother</span>
                    </div>
                  </div>

                  <div className="user-profile-family-badge">
                    <strong>About Family : </strong>I belong to an
                    upper-middle-class family, and family will always be my
                    greatest priority.I belong to an upper-middle-class family,
                    and family will always be my greatest priority.
                  </div>

                  <div className="user-profile-tags mt-3">
                    <span>
                      <Pin size={17} /> Living with parents
                    </span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Lifestyle and Interests</h3>
                  </div>

                  <div className="prof-sub-heading">Her Habits</div>

                  <div className="user-profile-tags">
                    <span>
                      <WineOff size={17} />
                      She does not drink
                    </span>

                    <span>
                      <Utensils size={17} />
                      She is a non vegetarian
                    </span>

                    <span>
                      <CigaretteOff size={17} />
                      She does not smoke
                    </span>
                  </div>

                  <div className="prof-sub-heading">Her Assets</div>

                  <div className="user-profile-tags">
                    <span>Owns a house</span>
                    <span>Owns a Car</span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Her Favourites</h3>
                    <span>Things she enjoys in her free time</span>
                  </div>

                  <div className="user-profile-tags">
                    <span>
                      <Music size={17} />
                      Listening to Music
                    </span>

                    <span>
                      <BookOpen size={17} />
                      Reading Books
                    </span>

                    <span>
                      <Plane size={17} />
                      Travelling
                    </span>

                    <span>
                      <Camera size={17} />
                      Photography
                    </span>

                    <span>
                      <CookingPot size={17} />
                      Cooking
                    </span>

                    <span>
                      <Mic2 size={17} />
                      Singing
                    </span>

                    <span>
                      <Users size={17} />
                      Spending Time with Family
                    </span>
                  </div>
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Birth Date</h3>
                  </div>

                  <div className="user-profile-detail-row user-profile-horoscope-row">
                    <div className="user-profile-detail-icon">
                      <CalendarDays size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>12 September, 1999</strong>
                    </div>
                  </div>

                  {/* <div className="user-profile-horoscope-private">
                    <LockKeyhole size={14} />
                    Horoscope details are private
                  </div>

                  <div className="user-profile-horoscope-action">
                    <strong>Contact Horoscope</strong>
                    <span>Ask her to share horoscope details with you.</span>
                  </div> */}
                </section>

                <section className="user-profile-section">
                  <div className="user-profile-section-heading">
                    <h3>Who is she looking for?</h3>
                    <span>Her preferences in a life partner</span>
                  </div>

                  <div className="user-profile-looking-header">
                    <div className="user-profile-looking-person">
                      <div className="user-profile-looking-avatar">
                        <img src="/images/matches/no-1.jpg" alt="" />
                      </div>
                      <strong>Her Preferences</strong>
                    </div>

                    <div className="user-profile-connection">
                      <span></span>
                      <Heart size={18} className="user-profile-heart-icon" />
                      <span></span>
                    </div>

                    <div className="user-profile-looking-person">
                      <div className="user-profile-looking-avatar">
                        <img src="/images/matches/no-6.jpg" alt="" />
                      </div>
                      <strong>Your Profile</strong>
                    </div>
                  </div>

                  <div className="user-profile-match-message">
                    You match 6/11 of her preference
                  </div>

                  <div className="user-profile-preference-list">
                    <div className="user-profile-preference-row">
                      <div>
                        <small>Age</small>
                        <strong>25 - 30 Years</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Height</small>
                        <strong>5ft 4in and above</strong>
                      </div>
                      <div className="cross">
                        <X size={18} />
                      </div>
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Marital Status</small>
                        <strong>Never Married</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Religion</small>
                        <strong>Hindu</strong>
                      </div>
                      <div className="cross">
                        <X size={18} />
                      </div>
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Mother Tongue</small>
                        <strong>Hindi, Bengali</strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Caste</small>
                        <strong>
                          Bania, Brahmin, Kayastha, Agarwal, Maheshwari
                        </strong>
                      </div>
                      <Check size={18} />
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>City</small>
                        <strong>Kolkata, Durgapur, Asansol, Bengaluru</strong>
                      </div>
                      <div className="cross">
                        <X size={18} />
                      </div>
                    </div>

                    <div className="user-profile-preference-row">
                      <div>
                        <small>Country</small>
                        <strong>India</strong>
                      </div>
                      <Check size={18} />
                    </div>
                  </div>
                </section>
              </div>
            </Col>

            <Col xl={3} lg={4}>
              <Primium />
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
