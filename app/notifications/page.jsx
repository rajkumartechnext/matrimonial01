"use client";

import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Primium from "@/components/Primium";
import { useRouter } from "next/navigation";

import {
  ChevronLeft,
  Eye,
  CreditCard,
  SquareUser,
  Heart,
  HeartHandshake,
  MessageCircle,
  Camera,
  UserRoundPlus,
  Star,
  Crown,
  ShieldCheck,
  Bell,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  Sparkles,
  UserCheck,
  ImagePlus,
  LockKeyhole,
  BadgeCheck,
  Gem,
  CalendarHeart,
} from "lucide-react";

function Page() {
  const router = useRouter();

  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={9}>
              <div className="all-notifications">
                <div className="dashboard-panel-header">
                  <button
                    type="button"
                    className="back"
                    onClick={() => router.back()}
                    aria-label="Go back"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <div>
                    <h3>All Notifications</h3>
                  </div>
                </div>

                <div className="notifications-list">
                  <h4>Today</h4>

                  <Link href="/matches">
                    <div className="dashboard-activity">
                      <div className="dashboard-activity-icon">
                        <SquareUser size={17} />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          You have new matches! Explore profiles that match your
                          preferences.
                        </p>
                      </div>

                      <div className="time">
                        <p>1h</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/matches/profileDetails">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img
                          src="/images/matches/no-6.jpg"
                          alt="Priya Sharma"
                        />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Priya Sharma</strong> has expressed interest
                          in your profile.
                        </p>

                        <span className="notification-sent-btn">
                          View Profile
                        </span>
                      </div>

                      <div className="time">
                        <p>2h</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/messenger/chat">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img src="/images/matches/no-1.jpg" alt="Ananya Roy" />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Ananya Roy</strong> accepted your interest.
                          You can now start a conversation.
                        </p>

                        <span className="notification-sent-btn">
                          Send Message
                        </span>
                      </div>

                      <div className="time">
                        <p>3h</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/messenger/chat">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img src="/images/matches/no-2.jpg" alt="Riya Das" />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Riya Das</strong> sent you a new message.
                        </p>

                        <span className="notification-sent-btn">
                          Open Messenger
                        </span>
                      </div>

                      <div className="time">
                        <p>4h</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/matches/profileDetails">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img
                          src="/images/matches/no-3.jpg"
                          alt="Shreya Mukherjee"
                        />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Shreya Mukherjee</strong> viewed your profile.
                        </p>
                      </div>

                      <div className="time">
                        <p>5h</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/matches/profileDetails">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img src="/images/matches/no-4.jpg" alt="Neha Singh" />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Neha Singh</strong> requested you to add more
                          photos to your profile.
                        </p>

                        <span className="notification-sent-btn">
                          Add Photos
                        </span>
                      </div>

                      <div className="time">
                        <p>6h</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/activity">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img
                          src="/images/matches/no-5.jpg"
                          alt="Megha Banerjee"
                        />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Megha Banerjee</strong> shortlisted your
                          profile.
                        </p>
                      </div>

                      <div className="time">
                        <p>7h</p>
                      </div>
                    </div>
                  </Link>

                  <h4>Yesterday</h4>

                  <Link href="/matches">
                    <div className="dashboard-activity">
                      <div className="dashboard-activity-icon">
                        <Sparkles size={17} />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          Your daily match recommendations are ready. Discover
                          profiles selected for you.
                        </p>

                        <span className="notification-sent-btn">
                          View Matches
                        </span>
                      </div>

                      <div className="time">
                        <p>1d</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/matches">
                    <div className="dashboard-activity">
                      <div className="dashboard-activity-icon">
                        <UserRoundPlus size={17} />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          We found <strong>8 new profiles</strong> matching your
                          partner preferences.
                        </p>
                      </div>

                      <div className="time">
                        <p>1d</p>
                      </div>
                    </div>
                  </Link>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <XCircle size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        Your interest request was not accepted at this time.
                        Don't worry, there are many more compatible profiles
                        waiting for you.
                      </p>
                    </div>

                    <div className="time">
                      <p>1d</p>
                    </div>
                  </div>

                  <Link href="/profile">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img src="/images/matches/no-3.jpg" alt="Swati Ghosh" />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          <strong>Swati Ghosh</strong> accepted your photo
                          request.
                        </p>
                      </div>

                      <div className="time">
                        <p>1d</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/profile">
                    <div className="dashboard-activity">
                      <div className="dashboard-activity-icon">
                        <UserCheck size={17} />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          Your profile is <strong>80% complete</strong>. Add
                          your education and family details to get better
                          matches.
                        </p>

                        <span className="notification-sent-btn">
                          Complete Profile
                        </span>
                      </div>

                      <div className="time">
                        <p>1d</p>
                      </div>
                    </div>
                  </Link>

                  <h4>Older</h4>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <BadgeCheck size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        Your profile photo has been approved and is now visible
                        to other members.
                      </p>
                    </div>

                    <div className="time">
                      <p>3d</p>
                    </div>
                  </div>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <ShieldCheck size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        Your profile has been successfully verified. Your
                        verified badge is now active.
                      </p>
                    </div>

                    <div className="time">
                      <p>4d</p>
                    </div>
                  </div>

                  <Link href="/profile">
                    <div className="dashboard-activity">
                      <div className="notification-activity-img">
                        <img
                          src="/images/matches/no-4.jpg"
                          alt="Debasmita Saha"
                        />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          You and <strong>Debasmita Saha</strong> have mutually
                          accepted each other's interest. Start your
                          conversation today.
                        </p>

                        <span className="notification-sent-btn">
                          Start Chat
                        </span>
                      </div>

                      <div className="time">
                        <p>5d</p>
                      </div>
                    </div>
                  </Link>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <Mail size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        <strong>Payel Chatterjee</strong> requested your contact
                        information.
                      </p>
                    </div>

                    <div className="time">
                      <p>6d</p>
                    </div>
                  </div>

                  <Link href="/premium">
                    <div className="dashboard-activity">
                      <div className="dashboard-activity-icon">
                        <Crown size={17} />
                      </div>

                      <div className="notification-activity-content">
                        <p>
                          Your premium membership has expired. Upgrade now to
                          continue enjoying premium benefits.
                        </p>

                        <span className="notification-sent-btn">
                          Upgrade Now
                        </span>
                      </div>

                      <div className="time">
                        <p>1w</p>
                      </div>
                    </div>
                  </Link>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <CreditCard size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        Your membership payment was successful. Your premium
                        benefits are now active.
                      </p>
                    </div>

                    <div className="time">
                      <p>1w</p>
                    </div>
                  </div>

                  <Link href="/accountSettings">
                    <div className="dashboard-activity">
                      <div className="dashboard-activity-icon">
                        <LockKeyhole size={17} />
                      </div>

                      <div className="notification-activity-content">
                        <p>Your account password was changed successfully.</p>
                      </div>

                      <div className="time">
                        <p>2w</p>
                      </div>
                    </div>
                  </Link>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <CheckCircle size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>Your email address has been successfully verified.</p>
                    </div>

                    <div className="time">
                      <p>2w</p>
                    </div>
                  </div>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <Bell size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        Your notification preferences have been updated
                        successfully.
                      </p>
                    </div>

                    <div className="time">
                      <p>3w</p>
                    </div>
                  </div>

                  <div className="dashboard-activity">
                    <div className="dashboard-activity-icon">
                      <SquareUser size={17} />
                    </div>

                    <div className="notification-activity-content">
                      <p>
                        Welcome to Matrimonial! Your profile is now live. Start
                        exploring compatible matches.
                      </p>
                    </div>

                    <div className="time">
                      <p>1m</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3}>
              <Primium />
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
