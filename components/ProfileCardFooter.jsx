"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MailPlus,
  MailCheck,
  Star,
  X,
  Sparkles,
  MessageCircleMore,
} from "lucide-react";

function ProfileCardFooter({ profile, onIgnore, section = "match" }) {
  const router = useRouter();

  const [interested, setInterested] = useState(section === "intrest");
  const [shortlisted, setShortlisted] = useState(section === "shortlist");

  const stopCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleInterest = (e) => {
    stopCardClick(e);
    setInterested((prev) => !prev);
  };

  const handleShortlist = (e) => {
    stopCardClick(e);
    setShortlisted((prev) => !prev);
  };

  const handleIgnore = (e) => {
    stopCardClick(e);

    if (onIgnore) {
      onIgnore();
    }
  };

  const handleChat = (e) => {
    stopCardClick(e);
    router.push("/messenger/chat");
  };

  return (
    <div className="overlay-footer">
      <button
        type="button"
        className={`overlay-item ${interested ? "is-interested" : ""}`}
        onClick={handleInterest}
        aria-pressed={interested}
      >
        {interested ? <MailCheck size={17} /> : <MailPlus size={17} />}

        <span>
          {section === "intrest"
            ? "Cancel"
            : interested
              ? "Interested"
              : "Interest"}
        </span>
      </button>

      <button
        type="button"
        className={`overlay-item ${shortlisted ? "is-shortlisted" : ""}`}
        onClick={handleShortlist}
        aria-pressed={shortlisted}
      >
        {shortlisted ? <Sparkles size={17} /> : <Star size={17} />}

        <span>{shortlisted ? "Shortlisted" : "Shortlist"}</span>
      </button>

      {section !== "intrest" && section !== "shortlist" && (
        <button
          type="button"
          className="overlay-item ignore"
          onClick={handleIgnore}
        >
          <X size={17} />
          <span>Ignore</span>
        </button>
      )}
      <button type="button" className="overlay-item" onClick={handleChat}>
        <MessageCircleMore size={17} />
        <span>Chat</span>
      </button>
    </div>
  );
}

export default ProfileCardFooter;
