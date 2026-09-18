"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import {
  ChevronRight,
  Home,
  HandHeart,
  ShieldLock,
  UserRound,
} from "lucide-react";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import { Container } from "react-bootstrap";
import Link from "next/link";

function page() {
  return (
    <div>
      <Header />

      <section className="about-breadcrumb">
        <Container>
          <div className="about-breadcrumb-content">
            <div className="about-breadcrumb-text">
              <h1>Faq</h1>
              <span className="about-breadcrumb-small">
                Find Your Perfect Match
              </span>
            </div>

            <nav className="about-breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">
                <Home size={15} />
                <span>Home</span>
              </Link>

              <ChevronRight size={15} />

              <span className="active">Faq</span>
            </nav>
          </div>
        </Container>
      </section>

      <section className="faq-section">
        <Container>
          <div className="accordian">
            <div className="experience-header text-center">
              <span className="experience-tag">Faq</span>
              <h2>
                Helping You Find a <span>Meaningful Connection </span>
              </h2>
            </div>

            <Accordion defaultActiveKey="0">
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  How do I create a matrimonial profile?
                </AccordionHeader>
                <AccordionBody>
                  Creating your profile is simple. Sign up with your basic
                  details, add your personal information, education, profession,
                  family details, lifestyle preferences, and upload suitable
                  profile photos. A complete profile helps other members
                  understand you better and improves your chances of meaningful
                  connections.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="1">
                <AccordionHeader>
                  How can I find suitable matches?
                </AccordionHeader>
                <AccordionBody>
                  You can use partner preferences to discover profiles based on
                  factors such as age, location, religion, community, education,
                  profession, lifestyle, and other preferences. You can update
                  these preferences anytime from your account.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="2">
                <AccordionHeader>
                  Can I change my partner preferences later?
                </AccordionHeader>
                <AccordionBody>
                  Yes. Your partner preferences can be updated whenever your
                  requirements change. You can modify preferences such as age,
                  height, location, education, occupation, religion, lifestyle,
                  and other relevant details from your profile settings.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="3">
                <AccordionHeader>
                  How can I express interest in a profile?
                </AccordionHeader>
                <AccordionBody>
                  When you find a profile that interests you, you can use the
                  available interest or connection option. If the other member
                  accepts your interest, you may be able to communicate with
                  them according to the platform's communication and privacy
                  settings.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="4">
                <AccordionHeader>
                  Can I communicate with another member?
                </AccordionHeader>
                <AccordionBody>
                  Communication features allow members to connect while
                  maintaining appropriate privacy controls. Depending on the
                  account and membership settings, available communication
                  options may include chat or other contact features.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="5">
                <AccordionHeader>
                  Is my personal information kept private?
                </AccordionHeader>
                <AccordionBody>
                  Your privacy is important to us. Profile visibility and
                  personal information should be managed through the privacy
                  settings available in your account. Avoid sharing sensitive
                  personal information with other members until you are
                  comfortable doing so.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="6">
                <AccordionHeader>
                  How can I keep my matrimonial profile safe?
                </AccordionHeader>
                <AccordionBody>
                  Use a strong password, keep your account information private,
                  and be careful when communicating with people you have
                  recently met. Never share passwords, financial information,
                  OTPs, or other sensitive details with another member.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="7">
                <AccordionHeader>
                  Can I hide or deactivate my profile?
                </AccordionHeader>
                <AccordionBody>
                  Yes, profile visibility can be managed through your account
                  settings where available. You can use privacy controls to
                  manage how your profile appears to other members.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="8">
                <AccordionHeader>
                  How do I edit my profile information?
                </AccordionHeader>
                <AccordionBody>
                  You can edit your profile information from your account.
                  Update details such as your basic information, education,
                  career, family, lifestyle, profile photos, and partner
                  preferences whenever necessary.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="9">
                <AccordionHeader>
                  What should I do if I find a suspicious profile?
                </AccordionHeader>
                <AccordionBody>
                  If you notice suspicious activity, inappropriate behaviour,
                  misleading information, or a profile that appears to violate
                  the platform guidelines, use the available report or support
                  option to notify the platform team.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="10">
                <AccordionHeader>
                  What are the membership benefits?
                </AccordionHeader>
                <AccordionBody>
                  Membership features may provide access to additional profile,
                  communication, search, or connection features depending on the
                  membership plan. Check your membership section for the
                  features included with your account.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="11">
                <AccordionHeader>
                  How can I contact customer support?
                </AccordionHeader>
                <AccordionBody>
                  If you need assistance with your account, profile, membership,
                  privacy, or other platform-related questions, you can contact
                  the support team through the Contact Us section of the
                  website.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default page;
