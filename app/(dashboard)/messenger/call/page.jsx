"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  PhoneOff,
  UserRound,
  MessageCircle,
} from "lucide-react";

const profile = {
  name: "Debasmita Saha",
  age: 24,
  image: "/images/matches/no-2.jpg",
};

function Page() {
  const router = useRouter();

  const [seconds, setSeconds] = useState(0);
  const [muted, setMuted] = useState(false);
  const [speaker, setSpeaker] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds,
    ).padStart(2, "0")}`;
  };

  const endCall = () => {
    router.back();
  };

  return (
    <div className="call-page">
      <div className="call-background">
        <div className="call-overlay"></div>

        <div className="call-topbar">
          <button
            type="button"
            className="call-back-btn"
            onClick={() => router.back()}
            aria-label="Back"
          >
            <ArrowLeft size={21} />
          </button>

          <div className="call-top-title">
            <span>Private Call</span>
            <small>End-to-end encrypted</small>
          </div>

          <button
            type="button"
            className="call-more-btn"
            aria-label="More options"
          >
            <UserRound size={21} />
          </button>
        </div>

        <div className="call-main">
          <div className="call-profile">
            <div className="call-avatar-wrapper">
              <div className="call-avatar-ring">
                <img src={profile.image} alt={profile.name} />
              </div>

              <span className="call-online-dot"></span>
            </div>

            <h1>
              {profile.name}, {profile.age}
            </h1>

            <p className="call-status">Connected</p>

            <div className="call-timer">{formatTime()}</div>
          </div>

          <div className="call-controls">
            <button
              type="button"
              className={`call-control ${muted ? "active" : ""}`}
              onClick={() => setMuted((prev) => !prev)}
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <MicOff size={21} /> : <Mic size={21} />}
              <span>{muted ? "Unmute" : "Mute"}</span>
            </button>

            <button
              type="button"
              className={`call-control ${speaker ? "active" : ""}`}
              onClick={() => setSpeaker((prev) => !prev)}
              aria-label={speaker ? "Speaker off" : "Speaker on"}
            >
              {speaker ? <Volume2 size={21} /> : <VolumeX size={21} />}
              <span>{speaker ? "Speaker" : "Earpiece"}</span>
            </button>

            <button
              type="button"
              className="call-control"
              aria-label="Message"
              onClick={() => router.push("/messenger?type=acceptances")}
            >
              <MessageCircle size={21} />
              <span>Message</span>
            </button>
          </div>

          <button
            type="button"
            className="end-call-btn"
            onClick={endCall}
            aria-label="End call"
          >
            <PhoneOff size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
