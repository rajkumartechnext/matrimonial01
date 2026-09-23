"use client";

import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Row, Col, Modal, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useRouter } from "next/navigation";
import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";

import {
  ChevronLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  BanknoteCheck,
  ChevronRight,
  Settings,
  Bell,
  Trash,
  ShieldKeyhole,
  LogOut,
  Mail,
  MessageSquareText,
  Phone,
} from "lucide-react";

function Page() {
  const router = useRouter();
  const [phonePrivacy, setPhonePrivacy] = useState([1, 3]);
  const [profileVisibility, setProfileVisibility] = useState([1]);
  const [albumPrivacy, setAlbumPrivacy] = useState([1]);
  const [hideDuration, setHideDuration] = useState("7");

  const [emailMatchAlert, setEmailMatchAlert] = useState("daily");
  const [emailVisitorAlert, setEmailVisitorAlert] = useState("daily");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDeleteReason, setSelectedDeleteReason] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [formData, setFormData] = useState({
    about: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeleteReason = (reason) => {
    setSelectedDeleteReason(reason);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedDeleteReason("");
    setFormData({
      about: "",
    });
  };

  const countWords = (text = "") => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  return (
    <>
      <AcountHeader />
      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={12}>
              <div className="partner-prefarance">
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
                    <h3>Account & Settings</h3>
                  </div>
                </div>

                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Settings size={18} /> Privacy Settings
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className="all-settings">
                        <div className="dashboard-panel-header">
                          <div>
                            <h3>Privacy Settings</h3>
                            <p>
                              These settings help you control and manage your
                              privacy
                            </p>
                          </div>
                        </div>

                        <div className="privacy-phone">
                          <span className="privacy-label">Phone Number</span>

                          <span className="privacy-number">+91 6297357452</span>
                        </div>

                        <div className="privacy-options">
                          <ToggleButtonGroup
                            type="checkbox"
                            value={phonePrivacy}
                            onChange={setPhonePrivacy}
                          >
                            <ToggleButton
                              id="phone-privacy-visible"
                              value={1}
                              className={
                                phonePrivacy.includes(1)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <Eye size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Visible to All</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>

                            <ToggleButton
                              id="phone-privacy-hidden"
                              value={2}
                              className={
                                phonePrivacy.includes(2)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <EyeOff size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Hide From All</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>

                            <ToggleButton
                              id="phone-privacy-interest"
                              value={3}
                              className={
                                phonePrivacy.includes(3)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <ShieldCheck size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Only to Interest Sent/Accepted</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </div>
                      </div>

                      <div className="all-settings">
                        <div className="dashboard-panel-header">
                          <div>
                            <h3>Advanced Settings</h3>
                            <p>
                              Unlock exclusive controls for added privacy, with
                              a paid membership
                            </p>
                          </div>
                        </div>

                        <div className="privacy-phone">
                          <span className="privacy-number">
                            Profile Visibility
                          </span>
                        </div>

                        <div className="privacy-options">
                          <ToggleButtonGroup
                            type="checkbox"
                            value={profileVisibility}
                            onChange={setProfileVisibility}
                          >
                            <ToggleButton
                              id="profile-visibility-default"
                              value={1}
                              className={
                                profileVisibility.includes(1)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <Eye size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Visible to All (default)</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>

                            <ToggleButton
                              id="profile-visibility-matches"
                              value={2}
                              className={
                                profileVisibility.includes(2)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <EyeOff size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>
                                  Only to Matches That Fit My Criteria
                                </strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </div>
                      </div>

                      <div className="all-settings">
                        <div className="privacy-phone">
                          <span className="privacy-number">Album Privacy</span>
                        </div>

                        <div className="privacy-options">
                          <ToggleButtonGroup
                            type="checkbox"
                            value={albumPrivacy}
                            onChange={setAlbumPrivacy}
                          >
                            <ToggleButton
                              id="album-privacy-visible"
                              value={1}
                              className={
                                albumPrivacy.includes(1)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <Eye size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Visible to All</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>

                            <ToggleButton
                              id="album-privacy-paid"
                              value={2}
                              className={
                                albumPrivacy.includes(2)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <BanknoteCheck size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Only to Paid Matches</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>

                            <ToggleButton
                              id="album-privacy-interest"
                              value={3}
                              className={
                                albumPrivacy.includes(3)
                                  ? "privacy-toggle active"
                                  : "privacy-toggle"
                              }
                            >
                              <span className="privacy-toggle-icon">
                                <ShieldCheck size={18} />
                              </span>

                              <span className="privacy-toggle-content">
                                <strong>Only to Interest Sent/Accepted</strong>
                              </span>

                              <span className="privacy-radio"></span>
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <EyeOff size={18} />
                      Hide Profile
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className="all-settings">
                        <div className="dashboard-panel-header">
                          <div>
                            <h3>Hide Profile</h3>
                            <p>
                              Before you go, help us understand why you’ve
                              decided to hide your profile temporarily
                            </p>
                          </div>
                        </div>

                        <div className="privacy-phone">
                          <span className="privacy-label">Select Duration</span>
                        </div>

                        <div className="radio-group">
                          <label className="radio-option">
                            <input
                              type="radio"
                              name="hideDuration"
                              value="7"
                              checked={hideDuration === "7"}
                              onChange={(e) => setHideDuration(e.target.value)}
                            />

                            <span>7 days</span>
                          </label>

                          <label className="radio-option">
                            <input
                              type="radio"
                              name="hideDuration"
                              value="15"
                              checked={hideDuration === "15"}
                              onChange={(e) => setHideDuration(e.target.value)}
                            />

                            <span>15 days</span>
                          </label>

                          <label className="radio-option">
                            <input
                              type="radio"
                              name="hideDuration"
                              value="30"
                              checked={hideDuration === "30"}
                              onChange={(e) => setHideDuration(e.target.value)}
                            />

                            <span>30 days</span>
                          </label>
                        </div>

                        <div className="mt-4">
                          <button type="button" className="primarybtn">
                            Hide My Profile
                          </button>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <Trash size={18} /> Delete Profile
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className="all-settings">
                        <div className="dashboard-panel-header">
                          <div>
                            <h3>Delete Profile</h3>

                            <p>
                              Before you go, help us understand why you’ve
                              decided to delete your account permanently
                            </p>
                          </div>
                        </div>

                        <div className="link-group mt-4">
                          <button
                            type="button"
                            onClick={() => handleDeleteReason("marry-later")}
                            className="reason-delete"
                          >
                            Marry Later / Create profile later
                            <ChevronRight size={16} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteReason("profile-changes")
                            }
                            className="reason-delete"
                          >
                            I am unable to make changes in my profile
                            <ChevronRight size={16} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteReason("experience")}
                            className="reason-delete"
                          >
                            Not satisfied with Matrimonial experience
                            <ChevronRight size={16} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteReason("found-match")}
                            className="reason-delete"
                          >
                            I found my match
                            <ChevronRight size={16} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteReason("other")}
                            className="reason-delete"
                          >
                            Other Reasons
                            <ChevronRight size={16} />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteReason("privacy")}
                            className="reason-delete"
                          >
                            Privacy / Security concerns
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <ShieldKeyhole size={18} />
                      Change Password
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className="all-settings">
                        <div className="dashboard-panel-header">
                          <div>
                            <h3>Change Password</h3>

                            <p>
                              We advise you to use a strong password to keep
                              your account safe
                            </p>
                          </div>
                        </div>

                        <div className="form-group full-width mt-4">
                          <label htmlFor="existingPassword">
                            Existing Password
                          </label>

                          <div className="mobile-input password-input">
                            <input
                              id="existingPassword"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your existing password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                              type="button"
                              className="password-toggle"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                            >
                              {showPassword ? (
                                <EyeOff size={18} />
                              ) : (
                                <Eye size={18} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="form-group full-width mt-3">
                          <label htmlFor="newPassword">New Password</label>

                          <div className="mobile-input password-input">
                            <input
                              id="newPassword"
                              type={showNewPassword ? "text" : "password"}
                              placeholder="Enter your new password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />

                            <button
                              type="button"
                              className="password-toggle"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              aria-label={
                                showNewPassword
                                  ? "Hide password"
                                  : "Show password"
                              }
                            >
                              {showNewPassword ? (
                                <EyeOff size={18} />
                              ) : (
                                <Eye size={18} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <Bell size={18} /> Notifications & Alert Manager
                    </Accordion.Header>

                    <Accordion.Body className="notification-settings">
                      <Accordion>
                        <Accordion.Item eventKey="4.1">
                          <Accordion.Header>
                            <Mail size={16} /> Email Manager
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="all-settings mt-2">
                              <div className="dashboard-panel-header">
                                <div>
                                  <h3>Email Notifications</h3>
                                  <p>
                                    Choose which alerts you want to receive on
                                    your registered mail ID
                                  </p>
                                </div>
                              </div>

                              <div className="privacy-phone">
                                <span className="privacy-label">
                                  Match Alert Mails
                                </span>

                                <span className="privacy-number">
                                  (Recommended)
                                </span>
                              </div>

                              <div className="radio-group">
                                <label className="radio-option">
                                  <input
                                    type="radio"
                                    name="emailMatchAlert"
                                    value="daily"
                                    checked={emailMatchAlert === "daily"}
                                    onChange={(e) =>
                                      setEmailMatchAlert(e.target.value)
                                    }
                                  />

                                  <span>Daily</span>
                                </label>

                                <label className="radio-option">
                                  <input
                                    type="radio"
                                    name="emailMatchAlert"
                                    value="three-times-week"
                                    checked={
                                      emailMatchAlert === "three-times-week"
                                    }
                                    onChange={(e) =>
                                      setEmailMatchAlert(e.target.value)
                                    }
                                  />

                                  <span>3 times/week</span>
                                </label>

                                <label className="radio-option">
                                  <input
                                    type="radio"
                                    name="emailMatchAlert"
                                    value="unsubscribe"
                                    checked={emailMatchAlert === "unsubscribe"}
                                    onChange={(e) =>
                                      setEmailMatchAlert(e.target.value)
                                    }
                                  />

                                  <span>Unsubscribe</span>
                                </label>
                              </div>
                            </div>

                            <div className="all-settings pt-3">
                              <div className="privacy-phone">
                                <span className="privacy-label">
                                  Visitor Alert Mails
                                </span>

                                <span className="privacy-number">
                                  (Profile Visitors)
                                </span>
                              </div>

                              <div className="radio-group">
                                <label className="radio-option">
                                  <input
                                    type="radio"
                                    name="emailVisitorAlert"
                                    value="daily"
                                    checked={emailVisitorAlert === "daily"}
                                    onChange={(e) =>
                                      setEmailVisitorAlert(e.target.value)
                                    }
                                  />

                                  <span>Daily</span>
                                </label>

                                <label className="radio-option">
                                  <input
                                    type="radio"
                                    name="emailVisitorAlert"
                                    value="days-no-login"
                                    checked={
                                      emailVisitorAlert === "days-no-login"
                                    }
                                    onChange={(e) =>
                                      setEmailVisitorAlert(e.target.value)
                                    }
                                  />

                                  <span>Days I don't login</span>
                                </label>

                                <label className="radio-option">
                                  <input
                                    type="radio"
                                    name="emailVisitorAlert"
                                    value="unsubscribe"
                                    checked={
                                      emailVisitorAlert === "unsubscribe"
                                    }
                                    onChange={(e) =>
                                      setEmailVisitorAlert(e.target.value)
                                    }
                                  />

                                  <span>Unsubscribe</span>
                                </label>
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>New Matches Mails</h5>
                                  <p>
                                    Receive mails where Matrimonial recommends
                                    new profiles to you.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Contact Alert Mails</h5>
                                  <p>
                                    Receive mails when someone on Matrimonial
                                    "Expresses Interest" in your profile.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Photo Request Mails</h5>
                                  <p>
                                    Receive mails when someone on Matrimonial
                                    "Requests you to upload photo" in your
                                    profile.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Service Mails</h5>
                                  <p>
                                    Receive mails (other than Visitor Alert /
                                    Match Alert / Photo request) from
                                    Matrimonial.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Promotional Mails</h5>
                                  <p>
                                    Receive promotional mails and special offers
                                    from Matrimonial.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4.2">
                          <Accordion.Header>
                            <MessageSquareText size={16} /> SMS Notifications
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="all-settings mt-2">
                              <div className="dashboard-panel-header">
                                <div>
                                  <h3>SMS Notifications</h3>
                                  <p>
                                    Choose which alerts you want to receive on
                                    SMS
                                  </p>
                                </div>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Membership SMS</h5>
                                  <p>
                                    Receive membership information and special
                                    offers from Matrimonial for your profile.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Transactional SMS</h5>
                                  <p>
                                    Receive important notifications from
                                    Matrimonial on your profile.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4.3">
                          <Accordion.Header>
                            <Phone size={16} /> Call Alerts
                          </Accordion.Header>

                          <Accordion.Body>
                            <div className="all-settings mt-2">
                              <div className="dashboard-panel-header">
                                <div>
                                  <h3>Call Alerts</h3>
                                  <p>
                                    Choose which alerts you want to receive on
                                    Call
                                  </p>
                                </div>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Membership SMS</h5>
                                  <p>
                                    Receive membership information and special
                                    offers from Matrimonial for your profile.
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Offer Calls</h5>
                                  <p>
                                    Receive calls (including AI calls) for
                                    Special offers / discounts on Membership
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Website Help</h5>
                                  <p>
                                    Receive calls (including AI calls) for
                                    Explanation of site features
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>

                              <div className="notification-option">
                                <div className="notification-content">
                                  <h5>Profile Completion</h5>
                                  <p>
                                    Receive calls (including AI calls) which aid
                                    in "Completion of Profile"
                                  </p>
                                </div>

                                <label className="notification-switch">
                                  <input type="checkbox" defaultChecked />
                                  <span className="notification-slider"></span>
                                </label>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  <button type="button" className="primarybtn">
                    <LogOut size={18} /> Logout
                  </button>
                </Accordion>
              </div>
            </Col>
          </Row>
        </div>
      </SideBar>

      <Modal
        show={showDeleteModal}
        onHide={handleCloseDeleteModal}
        centered
        backdrop="static"
        className="profile-popup-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedDeleteReason === "marry-later" &&
              "Marry Later / Create Profile Later"}

            {selectedDeleteReason === "profile-changes" && "Profile Changes"}

            {selectedDeleteReason === "experience" && "Your Experience"}

            {selectedDeleteReason === "found-match" && "Congratulations!"}

            {selectedDeleteReason === "other" && "Other Reason"}

            {selectedDeleteReason === "privacy" && "Privacy & Security"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedDeleteReason === "marry-later" && (
            <>
              <p className="profile-popup-text">
                Are you planning to look for a partner at a later time?
              </p>

              <Form>
                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="marry-later-1"
                      name="deleteReason"
                      value="not-ready"
                    />
                    <span>I am not ready for marriage right now</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="marry-later-2"
                      name="deleteReason"
                      value="break"
                    />
                    <span>I want to take a break from matrimonial search</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="marry-later-3"
                      name="deleteReason"
                      value="later"
                    />
                    <span>I will create a profile again later</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="marry-later-4"
                      name="deleteReason"
                      value="busy"
                    />
                    <span>
                      I am currently busy with personal or professional
                      commitments
                    </span>
                  </label>
                </div>
              </Form>
            </>
          )}

          {selectedDeleteReason === "profile-changes" && (
            <>
              <p className="profile-popup-text">
                Tell us what problem you are facing with your profile.
              </p>

              <Form>
                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="profile-change-1"
                      name="deleteReason"
                      value="cannot-edit"
                    />
                    <span>I cannot edit my profile details</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="profile-change-2"
                      name="deleteReason"
                      value="photo-problem"
                    />
                    <span>I cannot upload or change photos</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="profile-change-3"
                      name="deleteReason"
                      value="not-updating"
                    />
                    <span>My profile information is not updating</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="profile-change-4"
                      name="deleteReason"
                      value="technical"
                    />
                    <span>I am facing technical issues</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="profile-change-5"
                      name="deleteReason"
                      value="other"
                    />
                    <span>Something else</span>
                  </label>
                </div>
              </Form>
            </>
          )}

          {selectedDeleteReason === "experience" && (
            <>
              <p className="profile-popup-text">
                What could we have done better?
              </p>

              <Form>
                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="experience-1"
                      name="deleteReason"
                      value="irrelevant-matches"
                    />
                    <span>I am not getting relevant matches</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="experience-2"
                      name="deleteReason"
                      value="no-responses"
                    />
                    <span>I am not receiving enough responses</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="experience-3"
                      name="deleteReason"
                      value="unwanted"
                    />
                    <span>Too many unwanted messages or interests</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="experience-4"
                      name="deleteReason"
                      value="difficult"
                    />
                    <span>The website/app is difficult to use</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="experience-5"
                      name="deleteReason"
                      value="membership"
                    />
                    <span>Membership or payment related issues</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="experience-6"
                      name="deleteReason"
                      value="overall"
                    />
                    <span>I am not satisfied with the overall experience</span>
                  </label>
                </div>
              </Form>
            </>
          )}

          {selectedDeleteReason === "found-match" && (
            <>
              <p className="profile-popup-text">
                Congratulations! We are happy that you found your match.
              </p>

              <Form>
                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="found-match-1"
                      name="deleteReason"
                      value="found-here"
                    />
                    <span>I found my partner on this platform</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="found-match-2"
                      name="deleteReason"
                      value="found-outside"
                    />
                    <span>I found my partner outside this platform</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="found-match-3"
                      name="deleteReason"
                      value="family"
                    />
                    <span>My family found a suitable match</span>
                  </label>
                </div>
              </Form>
            </>
          )}

          {selectedDeleteReason === "other" && (
            <>
              <Form>
                <div className="form-group full-width">
                  <label className="mt-3" htmlFor="about">
                    Reason for Deleting Profile
                  </label>

                  <textarea
                    id="about"
                    name="about"
                    rows="5"
                    placeholder="Please tell us your reason for deleting your profile. Minimum 25 words."
                    value={formData.about}
                    onChange={handleInputChange}
                  />

                  <div className="textarea-counter">
                    {countWords(formData.about)} / 25 minimum words
                  </div>
                </div>
              </Form>
            </>
          )}

          {selectedDeleteReason === "privacy" && (
            <>
              <p className="profile-popup-text">
                Help us understand your privacy concern.
              </p>

              <Form>
                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="privacy-1"
                      name="deleteReason"
                      value="visibility"
                    />
                    <span>I don't want my profile visible anymore</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="privacy-2"
                      name="deleteReason"
                      value="personal-info"
                    />
                    <span>I am concerned about my personal information</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="privacy-3"
                      name="deleteReason"
                      value="communication"
                    />
                    <span>I am receiving unwanted communication</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="privacy-4"
                      name="deleteReason"
                      value="security"
                    />
                    <span>I have security concerns</span>
                  </label>
                </div>

                <div className="mt-2">
                  <label className="radio-option">
                    <input
                      type="radio"
                      id="privacy-5"
                      name="deleteReason"
                      value="other"
                    />
                    <span>Other privacy concern</span>
                  </label>
                </div>
              </Form>
            </>
          )}

          <div className="d-flex mt-4 gap-2">
            <button
              type="button"
              className="mycancel"
              onClick={handleCloseDeleteModal}
            >
              Cancel
            </button>

            <button type="button" className="primarybtn">
              Continue
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Page;
