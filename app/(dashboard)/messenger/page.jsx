"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Row, Col } from "react-bootstrap";

import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import Primium from "@/components/Primium";

const tabs = [
  {
    value: "messages",
    label: "Messages",
  },
  {
    value: "interests",
    label: "Interests",
  },
  {
    value: "calls",
    label: "Calls",
  },
];

const messagesData = [
  {
    id: 1,
    name: "Debasmita Saha",
    age: 24,
    image: "/images/matches/no-2.jpg",
    message: "ki korcho?",
    time: "9 m ago",
    online: true,
  },
  {
    id: 2,
    name: "Ananya",
    age: 25,
    image: "/images/matches/no-3.jpg",
    message: "Hello",
    time: "1 hr ago",
    online: false,
  },
  {
    id: 3,
    name: "Shreya Roy",
    age: 23,
    image: "/images/matches/no-5.jpg",
    message: "How are you?",
    time: "2 hr ago",
    online: true,
  },
  {
    id: 4,
    name: "Suparna Mondal",
    age: 22,
    image: "/images/matches/no-4.jpg",
    message: "Nice to meet you!",
    time: "Yesterday",
    online: false,
  },
  {
    id: 5,
    name: "Sumang Adhikari",
    age: 21,
    image: "/images/matches/no-2.jpg",
    message: "Are you free today?",
    time: "Yesterday",
    online: true,
  },
  {
    id: 6,
    name: "Priyanka Das",
    age: 26,
    image: "/images/matches/no-1.jpg",
    message: "Good morning ",
    time: "Yesterday",
    online: true,
  },
  {
    id: 7,
    name: "Moumita Ghosh",
    age: 24,
    image: "/images/matches/no-3.jpg",
    message: "Thank you!",
    time: "Mon",
    online: false,
  },
  {
    id: 8,
    name: "Riya Banerjee",
    age: 27,
    image: "/images/matches/no-4.jpg",
    message: "Let's talk later.",
    time: "Mon",
    online: true,
  },
  {
    id: 9,
    name: "Sanjana Roy",
    age: 25,
    image: "/images/matches/no-5.jpg",
    message: "That's great!",
    time: "Sun",
    online: false,
  },
  {
    id: 10,
    name: "Puja Chatterjee",
    age: 23,
    image: "/images/matches/no-2.jpg",
    message: "Where are you from?",
    time: "Sun",
    online: true,
  },
  {
    id: 11,
    name: "Rupsa Mukherjee",
    age: 26,
    image: "/images/matches/no-1.jpg",
    message: "I will call you.",
    time: "Sat",
    online: false,
  },
  {
    id: 12,
    name: "Sneha Das",
    age: 24,
    image: "/images/matches/no-3.jpg",
    message: "Have a nice day!",
    time: "Sat",
    online: true,
  },
  {
    id: 13,
    name: "Roshni Saha",
    age: 22,
    image: "/images/matches/no-4.jpg",
    message: "Okay, sure.",
    time: "Fri",
    online: false,
  },
  {
    id: 14,
    name: "Tania Paul",
    age: 25,
    image: "/images/matches/no-5.jpg",
    message: "Nice talking to you.",
    time: "Thu",
    online: true,
  },
  {
    id: 15,
    name: "Payel Dutta",
    age: 27,
    image: "/images/matches/no-1.jpg",
    message: "See you soon!",
    time: "Wed",
    online: false,
  },
];

const interestData = [
  {
    id: 1,
    name: "SAAZ6753",
    age: 24,
    image: "/images/matches/no-1.jpg",
    message: "hii",
    time: "yesterday",
  },
  {
    id: 2,
    name: "Sumang Adhikari",
    age: 21,
    image: "/images/matches/no-2.jpg",
    height: `5' 2"`,
    details: "Brahmin • Durgapur",
    time: "Wed",
  },
  {
    id: 3,
    name: "Suparna Mondal",
    age: 22,
    image: "/images/matches/no-3.jpg",
    height: `5' 4"`,
    details: "Goala • Durgapur",
    time: "Wed",
  },
  {
    id: 4,
    name: "TRRZ4149",
    age: 24,
    image: "/images/matches/no-4.jpg",
    message: "hii",
    time: "Mon",
  },
  {
    id: 5,
    name: "Shreya Roy",
    age: 23,
    image: "/images/matches/no-5.jpg",
    message: "hi",
    time: "Mon",
  },
];

const callsData = [
  {
    id: 1,
    name: "Debasmita Saha",
    age: 24,
    image: "/images/matches/no-2.jpg",
    message: "Call ended",
    callType: "incoming",
    time: "Today",
  },
  {
    id: 2,
    name: "Ananya",
    age: 25,
    image: "/images/matches/no-3.jpg",
    message: "Missed call",
    callType: "missed",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Shreya Roy",
    age: 23,
    image: "/images/matches/no-5.jpg",
    message: "Call ended",
    callType: "outgoing",
    time: "Yesterday",
  },
  {
    id: 4,
    name: "Suparna Mondal",
    age: 22,
    image: "/images/matches/no-3.jpg",
    message: "Incoming call",
    callType: "incoming",
    time: "Mon",
  },
  {
    id: 5,
    name: "Sumang Adhikari",
    age: 21,
    image: "/images/matches/no-2.jpg",
    message: "Call ended",
    callType: "outgoing",
    time: "Sun",
  },
];

function Page() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("messages");

  const openChat = () => {
    router.push("/messenger/chat");
  };
  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="messenger-page">
          <Row className="g-4">
            <Col xl={8} lg={8}>
              <div className="messenger">
                <div className="messenger-card">
                  <div className="messenger-tabs">
                    <div className="messenger-heading">
                      <h2>Conversations</h2>
                    </div>

                    <div className="all-tabs">
                      {tabs.map((tab) => (
                        <button
                          key={tab.value}
                          type="button"
                          className={activeTab === tab.value ? "active" : ""}
                          onClick={() => setActiveTab(tab.value)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  

                  {activeTab === "messages" && (
                    <div className="messenger-list">
                      {messagesData.map((profile) => (
                        <div
                          className="messenger-list-item"
                          key={profile.id}
                          onClick={() => openChat(profile.id)}
                        >
                          <div className="messenger-avatar">
                            <img src={profile.image} alt={profile.name} />

                            {profile.online && (
                              <div className="online-dot-msg"></div>
                            )}
                          </div>

                          <div className="messenger-user-info">
                            <strong>
                              {profile.name}, {profile.age}
                            </strong>

                            <span>{profile.message}</span>
                          </div>

                          <div className="messenger-time">{profile.time}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "interests" && (
                    <div className="messenger-list">
                      {interestData.map((profile) => (
                        <div
                          className="messenger-list-item"
                          key={profile.id}
                          onClick={() => openChat(profile.id)}
                        >
                          <div className="messenger-avatar">
                            <img src={profile.image} alt={profile.name} />
                          </div>

                          <div className="messenger-user-info">
                            <strong>
                              {profile.name}, {profile.age}
                            </strong>

                            {profile.message ? (
                              <span>{profile.message}</span>
                            ) : (
                              <span>
                                {profile.height} • {profile.details}
                              </span>
                            )}
                          </div>

                          <div className="messenger-time">{profile.time}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "calls" && (
                    <div className="messenger-list">
                      {callsData.map((profile) => (
                        <div
                          className="messenger-list-item"
                          key={profile.id}
                          onClick={() => openChat(profile.id)}
                        >
                          <div className="messenger-avatar">
                            <img src={profile.image} alt={profile.name} />
                          </div>

                          <div className="messenger-user-info">
                            <strong>
                              {profile.name}, {profile.age}
                            </strong>

                            <span className={`call-status ${profile.callType}`}>
                              {profile.message}
                            </span>
                          </div>

                          <div className="messenger-time">{profile.time}</div>
                        </div>
                      ))}
                    </div>
                  )}
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
      </SideBar>
    </>
  );
}

export default Page;
