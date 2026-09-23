"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Share2,
  Ban,
  Flag,
  CheckCircle,
  Copy,
  UserX,
  AlertTriangle,
  MessageCircleWarning,
} from "lucide-react";
import { Modal, Button, Form } from "react-bootstrap";
import ProfileCardFooter from "@/components/ProfileCardFooter";

const ProfileImageSlider = () => {
  const profile = {
    id: 1,
    name: "A Shab",
    age: 26,
    location: "Durgapur",
    caste: "Bania",
    height: "5ft 2in",
    work: "Student",
    income: "No Income",
    education: "M.Com",
    managedBy: "Self",
    active: "Active Today",
    compatible: "Most Compatible",
    images: [
      "/images/matches/no-1.jpg",
      "/images/matches/no-2.jpg",
      "/images/matches/no-3.jpg",
      "/images/matches/no-4.jpg",
    ],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [reportReason, setReportReason] = useState("");
  const [copied, setCopied] = useState(false);

  const menuRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === profile.images.length - 1 ? 0 : prev + 1,
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? profile.images.length - 1 : prev - 1,
    );
  };

  const getTagClass = (tag) => {
    switch (tag) {
      case "Most Compatible":
        return "tag-most-compatible";
      case "Good Match":
        return "tag-good-match";
      case "Top Profile":
        return "tag-top-profile";
      case "New Profile":
        return "tag-new-profile";
      case "Highly Recommended":
        return "tag-highly-recommended";
      default:
        return "tag-default";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openModal = (type) => {
    setShowMenu(false);
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
    setReportReason("");
    setCopied(false);
  };

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log("Unable to copy profile link");
    }
  };

  const handleBlock = () => {
    console.log("Profile blocked:", profile.id);
    closeModal();
  };

  const handleReport = () => {
    if (!reportReason) return;

    console.log("Reported profile:", profile.id);
    console.log("Reason:", reportReason);

    closeModal();
  };

  return (
    <div className="profile-details-wrapper">
      <div className="mateches-profile">
        <div className="profile-image-slider">
          <img
            src={profile.images[currentImage]}
            alt={`${profile.name} ${currentImage + 1}`}
            className="profile-card-image"
          />

          {profile.images.length > 1 && (
            <button
              type="button"
              className="profile-slider-arrow profile-slider-prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {profile.images.length > 1 && (
            <button
              type="button"
              className="profile-slider-arrow profile-slider-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          )}

          <div className="profile-menu-wrapper" ref={menuRef}>
            <div className="profile-activity online">Online</div>
            <button
              type="button"
              className="drop-log"
              onClick={() => setShowMenu((prev) => !prev)}
              aria-label="Profile options"
            >
              <EllipsisVertical size={16} />
            </button>

            {showMenu && (
              <div className="profile-action-dropdown">
                <button type="button" onClick={() => openModal("share")}>
                  <Share2 size={15} />
                  <span>Share</span>
                </button>

                <button type="button" onClick={() => openModal("block")}>
                  <Ban size={15} />
                  <span>Block / Ignore</span>
                </button>

                <button
                  type="button"
                  className="profile-report-action"
                  onClick={() => openModal("report")}
                >
                  <Flag size={15} />
                  <span>Report Profile</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="details-overlay">
          <div className="profile-card-top">
            <div className={`tag ${getTagClass(profile.compatible)}`}>
              {profile.compatible}
            </div>
          </div>

          <ProfileCardFooter />
        </div>
      </div>

      <Modal
        show={modalType === "share"}
        onHide={closeModal}
        centered
        backdrop="static"
        className="profile-popup-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Share2 size={19} />
            Share Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="profile-popup-profile">
            <img src={profile.images[0]} alt={profile.name} />

            <div>
              <strong>
                {profile.name}, {profile.age}
              </strong>
              <span>{profile.location}</span>
            </div>
          </div>

          <p className="profile-popup-text">
            Share this profile with someone who may be interested.
          </p>

          <div className="profile-share-link">
            {/* <span>{window.location.href}</span> */}

            <button type="button" onClick={copyProfileLink}>
              {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={modalType === "block"}
        onHide={closeModal}
        centered
        backdrop="static"
        className="profile-popup-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <UserX size={19} />
            Block / Ignore Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="profile-popup-warning-icon">
            <AlertTriangle size={28} />
          </div>

          <div className="profile-popup-confirm">
            <h4>Are you sure?</h4>

            <p>
              You will no longer see <strong>{profile.name}'s</strong> profile
              in your recommendations.
            </p>
          </div>

          <div className="d-flex mt-3 gap-2">
            <button type="button" className="mycancel" onClick={closeModal}>
              Cancel
            </button>

            <button type="button" className="primarybtn" onClick={handleBlock}>
              <Ban size={15} />
              Block / Ignore
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={modalType === "report"}
        onHide={closeModal}
        centered
        backdrop="static"
        className="profile-popup-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <MessageCircleWarning size={19} />
            Report Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="profile-popup-text">
            Help us understand why you are reporting{" "}
            <strong>{profile.name}</strong>.
          </p>

          <Form>
            <Form.Check
              type="radio"
              id="report-fake"
              name="reportReason"
              label="This profile looks fake"
              value="fake"
              checked={reportReason === "fake"}
              onChange={(e) => setReportReason(e.target.value)}
            />

            <Form.Check
              type="radio"
              id="report-inappropriate"
              name="reportReason"
              label="Inappropriate content"
              value="inappropriate"
              checked={reportReason === "inappropriate"}
              onChange={(e) => setReportReason(e.target.value)}
            />

            <Form.Check
              type="radio"
              id="report-harassment"
              name="reportReason"
              label="Harassment or inappropriate behavior"
              value="harassment"
              checked={reportReason === "harassment"}
              onChange={(e) => setReportReason(e.target.value)}
            />

            <Form.Check
              type="radio"
              id="report-scam"
              name="reportReason"
              label="Scam or suspicious activity"
              value="scam"
              checked={reportReason === "scam"}
              onChange={(e) => setReportReason(e.target.value)}
            />

            <Form.Check
              type="radio"
              id="report-other"
              name="reportReason"
              label="Other"
              value="other"
              checked={reportReason === "other"}
              onChange={(e) => setReportReason(e.target.value)}
            />
          </Form>

          <div className="d-flex mt-3 gap-2">
            <button type="button" className="mycancel" onClick={closeModal}>
              Cancel
            </button>

            <button
              type="button"
              className="primarybtn"
              disabled={!reportReason}
              onClick={handleReport}
            >
              <Flag size={15} />
              Report Profile
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProfileImageSlider;
