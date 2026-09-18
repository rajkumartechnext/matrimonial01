"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Row, Col, Modal, Form } from "react-bootstrap";
import Link from "next/link";

import {
  ArrowLeft,
  Phone,
  MoreVertical,
  UserRound,
  Send,
  MailPlus,
  MailCheck,
  CheckCheck,
  Ban,
  Flag,
  UserX,
  AlertTriangle,
  MessageCircleWarning,
} from "lucide-react";

import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import Primium from "@/components/Primium";

const profiles = {
  1: {
    name: "Debasmita Saha",
    age: 24,
    image: "/images/matches/no-2.jpg",
    online: true,
  },

  2: {
    name: "Ananya",
    age: 25,
    image: "/images/matches/no-3.jpg",
    lastSeen: "Last seen at 10:15 AM",
  },

  3: {
    name: "SAAZ6753",
    age: 24,
    image: "/images/matches/no-1.jpg",
    lastSeen: "Last seen yesterday",
  },
};

function Page() {
  const params = useParams();
  const router = useRouter();
  const chatBodyRef = useRef(null);

  const profile = profiles[params?.id] || profiles[1];

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "date",
      text: "27 Aug 2026",
    },
    {
      id: 2,
      type: "received",
      text: "Kothai Job koro",
      time: "3:59 PM",
    },
    {
      id: 3,
      type: "date",
      text: "Yesterday",
    },
    {
      id: 4,
      type: "sent",
      text: "kolkata",
      time: "9:46 AM",
    },
    {
      id: 5,
      type: "sent",
      text: "hiiiiii",
      time: "4:31 PM",
    },
    {
      id: 6,
      type: "received",
      text: "hm",
      time: "6:34 PM",
    },
    {
      id: 7,
      type: "date",
      text: "Today",
    },
    {
      id: 8,
      type: "sent",
      text: "ki korcho?",
      time: "9:13 AM",
    },
  ]);

  const [showMenu, setShowMenu] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [reportReason, setReportReason] = useState("");
  const [interested, setInterested] = useState(false);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleInterest = () => {
    if (interested) return;

    setInterested(true);

    setMessages((prevMessages) => {
      const alreadySent = prevMessages.some(
        (item) =>
          item.type === "sent" &&
          item.text === "I’m interested in your profile.",
      );

      if (alreadySent) {
        return prevMessages;
      }

      return [
        ...prevMessages,
        {
          id: Date.now(),
          type: "sent",
          text: "I’m interested in your profile.",
          time: "Now",
        },
      ];
    });
  };

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "sent",
        text: trimmedMessage,
        time: "Now",
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const openModal = (type) => {
    setShowMenu(false);
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleBlock = () => {
    setModalType(null);
    router.push("/messenger?type=acceptances");
  };

  const handleReport = () => {
    if (!reportReason) return;

    console.log("Report submitted:", {
      profile: profile.name,
      reason: reportReason,
    });

    setReportReason("");
    setModalType(null);
  };

  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="messenger-page">
          <Row className="g-4">
            <Col xl={8} lg={8}>
              <div className="chat-card">
                <div className="chat-header">
                  <button
                    type="button"
                    className="chat-back"
                    onClick={() => router.push("/messenger?type=acceptances")}
                  >
                    <ArrowLeft size={20} />
                  </button>

                  <div className="chat-profile-image">
                    <img src={profile.image} alt={profile.name} />
                  </div>

                  <div className="chat-profile-info">
                    <strong>
                      {profile.name}, {profile.age}
                    </strong>

                    <span className="on-the-line">
                      {profile.online && <span className="online-dot"></span>}
                      {profile.online ? "Online" : profile.lastSeen}
                    </span>
                  </div>

                  <div className="chat-actions">
                    <Link
                      type="button"
                      className="contact"
                      aria-label="View profile"
                      href="/matches/profileDetails"
                    >
                      <UserRound size={18} />
                    </Link>

                    <Link
                      href="/messenger/call"
                      type="button"
                      className="call"
                      aria-label="Call"
                    >
                      <Phone size={18} />
                    </Link>

                    <div className="my-chat-dropdown">
                      <button
                        type="button"
                        aria-label="More options"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <MoreVertical size={18} />
                      </button>

                      {showMenu && (
                        <div className="msg-action-dropdown">
                          <button
                            type="button"
                            onClick={() => openModal("block")}
                            className="block"
                          >
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
                </div>

                <div className="chat-body" ref={chatBodyRef}>
                  {messages.map((item) => {
                    if (item.type === "date") {
                      return (
                        <div className="chat-date" key={item.id}>
                          <span>{item.text}</span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.id}
                        className={`chat-message-row ${
                          item.type === "sent" ? "sent" : "received"
                        }`}
                      >
                        {item.type === "received" && (
                          <div className="chat-small-avatar">
                            <img src={profile.image} alt={profile.name} />
                          </div>
                        )}

                        <div className="chat-message">
                          <span>{item.text}</span>

                          <small>
                            {item.time}

                            {item.type === "sent" && <CheckCheck size={12} />}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="chat-footer">
                  <div className="chat-input-wrapper">
                    <input
                      type="text"
                      value={message}
                      placeholder="Send a message for free..."
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>

                  <button
                    type="button"
                    className={`interest-send-msg ${
                      interested ? "is-interested" : ""
                    }`}
                    onClick={handleInterest}
                    aria-pressed={interested}
                  >
                    {interested ? (
                      <MailCheck size={17} />
                    ) : (
                      <MailPlus size={17} />
                    )}
                  </button>

                  <button
                    type="button"
                    className="chat-send"
                    onClick={sendMessage}
                    aria-label="Send message"
                  >
                    <Send size={19} />
                  </button>
                </div>
              </div>
            </Col>

            <Col xl={4} lg={4}>
              <div className="dashboard-premium-sticky">
                <Primium />
              </div>
            </Col>
          </Row>
        </div>

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
              <span>Block / Ignore Profile</span>
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

              <button
                type="button"
                className="primarybtn"
                onClick={handleBlock}
              >
                <Ban size={15} />
                <span>Block / Ignore</span>
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
              <span>Report Profile</span>
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
                <span>Report Profile</span>
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </SideBar>
    </>
  );
}

export default Page;
