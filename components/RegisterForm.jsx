"use client";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();

  const [otpSent, setOtpSent] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
  };

  const handleRegister = () => {
    if (mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("Sending OTP to:", mobile);

    setOtpSent(true);

    toast.success(`OTP sent to +91 ${mobile}`);

    setTimeout(() => {
      document.getElementById("otp-0")?.focus();
    }, 100);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    const newOtp = [...otp];

    if (!value) {
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }

    newOtp[index] = value.charAt(0);
    setOtp(newOtp);

    if (index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }

    if (e.key === "ArrowRight" && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();

    const pastedOtp = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pastedOtp) return;

    const newOtp = ["", "", "", "", "", ""];

    pastedOtp.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const focusIndex = Math.min(pastedOtp.length, 5);

    setTimeout(() => {
      document.getElementById(`otp-${focusIndex}`)?.focus();
    }, 50);
  };

  const handleVerifyOtp = () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      toast.error("Please enter the complete 6-digit OTP.");
      return;
    }

    console.log("Verifying OTP:", otpValue);

    toast.success("OTP verified successfully!");

    setTimeout(() => {
      router.push("/onboarding");
    }, 500);
  };

  const handleChangeNumber = () => {
    setOtpSent(false);
    setOtp(["", "", "", "", "", ""]);
  };

  const handleResendOtp = () => {
    if (mobile.length !== 10) {
      toast.error("Invalid mobile number.");
      return;
    }

    console.log("OTP resent to:", mobile);

    toast.success(`OTP resent to +91 ${mobile}`);

    setOtp(["", "", "", "", "", ""]);

    setTimeout(() => {
      document.getElementById("otp-0")?.focus();
    }, 100);
  };

  return (
    <div className="hero-form">
      <h2>{otpSent ? "Verify your mobile" : "Find your perfect match"}</h2>

      {!otpSent && (
        <div className="register-fields mt-4">
          <div className="form-group full-width">
            <label htmlFor="profileFor">Profile created for</label>

            <select id="profileFor" defaultValue="">
              <option value="" disabled>
                Select
              </option>
              <option value="myself">Myself</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="friend">Friend</option>
              <option value="relative">Relative</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="name">Name</label>

            <input id="name" type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group full-width">
            <label htmlFor="mobile">Mobile Number</label>

            <div className="mobile-input">
              <span className="country-code">+91</span>

              <input
                id="mobile"
                type="tel"
                inputMode="numeric"
                placeholder="Enter mobile number"
                maxLength={10}
                value={mobile}
                onChange={handleMobileChange}
              />
            </div>
          </div>
        </div>
      )}

      {otpSent && (
        <div className="otp-section full-width mt-4">
          <div className="otp-heading">
            <div className="otp-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h4>Verify your mobile</h4>

              <p>
                We've sent a 6-digit OTP to <strong>+91 {mobile}</strong>
              </p>
            </div>
          </div>

          <div className="form-group">
            <label>Enter OTP</label>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="tel"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  onPaste={handleOtpPaste}
                  className="otp-box"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                />
              ))}
            </div>
          </div>

          <div className="otp-actions">
            <button
              type="button"
              className="resend-otp"
              onClick={handleResendOtp}
            >
              Resend OTP
            </button>

            <button
              type="button"
              className="change-number"
              onClick={handleChangeNumber}
            >
              Change Number
            </button>
          </div>
        </div>
      )}

      {!otpSent ? (
        <button
          type="button"
          className="form-register-btn"
          onClick={handleRegister}
        >
          Register Free
          <span>→</span>
        </button>
      ) : (
        <button
          type="button"
          className="form-register-btn"
          onClick={handleVerifyOtp}
        >
          Verify OTP
          <span>→</span>
        </button>
      )}

      <div className="form-footer">
        <ShieldCheck size={15} />
        <span>Your information is completely secure</span>
      </div>
    </div>
  );
}

export default RegisterForm;
