"use client";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { LogIn, ShieldCheck, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";

function Login() {
  const [show, setShow] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    setShow(false);
    setMobile("");
    setPassword("");
    setShowPassword(false);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setMobile(value);
  };

  const handleLogin = () => {
    if (mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    console.log("Login:", {
      mobile,
      password,
    });

    toast.success("Login successful!");

    handleClose();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="cta-btn login-btn"
      >
        <LogIn size={16} />
        Login
      </button>

      <Modal show={show} onHide={handleClose} centered className="login-modal">
        <Modal.Header closeButton />

        <Modal.Body>
          <div className="hero-form">
            <h2>Welcome Back</h2>

            <p className="form-subtitle">
              Login to your account and continue your journey towards finding
              your perfect match.
            </p>

            <div className="form-fields mt-4">
              <div className="form-group full-width">
                <label htmlFor="loginMobile">Mobile Number</label>

                <div className="mobile-input">
                  <span className="country-code">+91</span>

                  <input
                    id="loginMobile"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Enter mobile number"
                    maxLength={10}
                    value={mobile}
                    onChange={handleMobileChange}
                  />
                </div>
              </div>

              <div className="form-group full-width mt-4">
                <label htmlFor="loginPassword">Password</label>

                <div className="mobile-input password-input">
                  <input
                    id="loginPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-end mt-2">
              <Link
                href="/forgot-password"
                className="forgot-password"
                onClick={handleClose}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="form-register-btn"
              onClick={handleLogin}
            >
              Login
              <span>→</span>
            </button>

            <div className="form-footer">
              <ShieldCheck size={15} />

              <span>Your information is completely secure</span>
            </div>

            <div className="login-register-text">
              Don't have an account?{" "}
              <Link href="/register" onClick={handleClose}>
                Register Free
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
