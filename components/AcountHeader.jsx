"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  Menu,
  X,
  UserRound,
  CircleQuestionMark,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  ChevronDown,
  Crown,
  UserRoundPen,
  HeartMinus,
  BookHeadphones,
} from "lucide-react";

function AcountHeader() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const closeMenu = () => setShowOffcanvas(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="account-header">
        <div className="account-header-container">
          <Link href="/profile" className="account-logo">
            <span className="brand-text">Logo Here</span>
          </Link>

          <div className="account-header-right">
            <div className="header-dropdown" ref={notificationRef}>
              <button
                type="button"
                className={`account-icon-btn ${
                  notificationOpen ? "dropdown-active" : ""
                }`}
                onClick={() => {
                  setNotificationOpen((prev) => !prev);
                  setProfileOpen(false);
                }}
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="notification-dot"></span>
              </button>

              {notificationOpen && (
                <div className="notification-dropdown">
                  <div className="notification-dropdown-top">
                    <div className="profile-dropdown-avatar">
                      <Bell size={19} />
                    </div>
                    <div>
                      <h4>Notifications</h4>
                      <span>3 new notifications</span>
                    </div>
                  </div>

                  <div className="notification-list">
                    <Link
                      href="/matches"
                      className="notification-item"
                      onClick={() => setNotificationOpen(false)}
                    >
                      <div className="notification-content">
                        <strong>New Match</strong>
                        <p>You have a new profile match waiting for you.</p>
                        <small>5 minutes ago</small>
                      </div>
                    </Link>

                    <Link
                      href="/messages"
                      className="notification-item"
                      onClick={() => setNotificationOpen(false)}
                    >
                      <div className="notification-content">
                        <strong>New Message</strong>
                        <p>Someone sent you a new message.</p>
                        <small>20 minutes ago</small>
                      </div>
                    </Link>

                    <Link
                      href="/profile"
                      className="notification-item"
                      onClick={() => setNotificationOpen(false)}
                    >
                      <div className="notification-content">
                        <strong>Complete Your Profile</strong>
                        <p>Add more details to get better matches.</p>
                        <small>1 hour ago</small>
                      </div>
                    </Link>
                  </div>

                  <Link
                    href="/notifications"
                    className="view-all-notifications"
                    onClick={() => setNotificationOpen(false)}
                  >
                    View all notifications
                    <ChevronRight size={16} />
                  </Link>
                </div>
              )}
            </div>

            <Link href="/premium" className="step-next-btn">
              <Crown size={17} />
              <span>Premium</span>
            </Link>

            <div
              className="header-dropdown profile-dropdown-wrapper"
              ref={profileRef}
            >
              <button
                type="button"
                className={`account-profile ${
                  profileOpen ? "dropdown-active" : ""
                }`}
                onClick={() => {
                  setProfileOpen((prev) => !prev);
                  setNotificationOpen(false);
                }}
              >
                <div className="account-avatar">
                  <img src="/images/user.png" alt="" />
                </div>

                <div className="account-user-info">
                  <strong>My Profile</strong>
                  <small>View Profile</small>
                </div>

                <ChevronDown
                  size={16}
                  className={`profile-chevron ${profileOpen ? "rotate" : ""}`}
                />
              </button>

              {profileOpen && (
                <div className="profile-dropdown">
                  <div className="profile-dropdown-top">
                    <div className="account-avatar">
                      <img src="/images/user.png" alt="" />
                    </div>

                    <div>
                      <strong>My Profile</strong>
                      <span>80% completed</span>
                    </div>
                  </div>

                  <Link
                    href="/profile"
                    className="profile-dropdown-link"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="dropdown-link-icon">
                      <UserRoundPen size={17} />
                    </span>

                    <span>
                      <strong>Edit Profile</strong>
                    </span>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/partner"
                    className="profile-dropdown-link"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="dropdown-link-icon">
                      <HeartMinus size={17} />
                    </span>

                    <span>
                      <strong>Partner Preferences</strong>
                    </span>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/accountSettings"
                    className="profile-dropdown-link"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="dropdown-link-icon">
                      <Settings size={17} />
                    </span>

                    <span>
                      <strong>Account & Settings</strong>
                    </span>

                    <ChevronRight size={16} />
                  </Link>

                  <Link
                    href="/accountSettings"
                    className="profile-dropdown-link"
                    onClick={() => setProfileOpen(false)}
                  >
                    <span className="dropdown-link-icon">
                      <CircleQuestionMark size={17} />
                    </span>

                    <span>
                      <strong>Help</strong>
                    </span>

                    <ChevronRight size={16} />
                  </Link>

                  <button
                    type="button"
                    className="primarybtn"
                    onClick={() => {
                      setProfileOpen(false);
                    }}
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              className="account-menu-btn"
              onClick={() => setShowOffcanvas(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`account-offcanvas-overlay ${showOffcanvas ? "show" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`account-offcanvas ${showOffcanvas ? "open" : ""}`}>
        <div className="offcanvas-header">
          <Link href="/profile" className="account-logo" onClick={closeMenu}>
            <span className="brand-text">Logo Here</span>
          </Link>

          <button
            type="button"
            className="offcanvas-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="offcanvas-profile-card">
          <div className="account-avatar">
            <img src="/images/user.png" alt="" />
          </div>

          <div className="offcanvas-profile-info">
            <h4>My Profile</h4>
            <p>Complete your profile</p>

            <div className="profile-progress">
              <span></span>
            </div>

            <small>80% completed</small>
          </div>
        </div>

        <div className="offcanvas-nav">
          <Link
            href="/profile"
            className="profile-dropdown-link"
            onClick={() => setProfileOpen(false)}
          >
            <span className="dropdown-link-icon">
              <UserRoundPen size={17} />
            </span>

            <span>
              <strong>Edit Profile</strong>
            </span>

            <ChevronRight size={16} />
          </Link>

          <Link
            href="/partner"
            className="profile-dropdown-link"
            onClick={() => setProfileOpen(false)}
          >
            <span className="dropdown-link-icon">
              <HeartMinus size={17} />
            </span>

            <span>
              <strong>Partner Preferences</strong>
            </span>

            <ChevronRight size={16} />
          </Link>

          <Link
            href="/accountSettings"
            className="profile-dropdown-link"
            onClick={() => setProfileOpen(false)}
          >
            <span className="dropdown-link-icon">
              <Settings size={17} />
            </span>

            <span>
              <strong>Account & Settings</strong>
            </span>

            <ChevronRight size={16} />
          </Link>

          <Link
            href="/accountSettings"
            className="profile-dropdown-link"
            onClick={() => setProfileOpen(false)}
          >
            <span className="dropdown-link-icon">
              <CircleQuestionMark size={17} />
            </span>

            <span>
              <strong>Help</strong>
            </span>

            <ChevronRight size={16} />
          </Link>

          <button
            type="button"
            className="primarybtn"
            onClick={() => {
              closeMenu();
            }}
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>

        <div className="offcanvas-footer">
          <p>Made with for meaningful connections</p>
        </div>
      </aside>
    </>
  );
}

export default AcountHeader;
