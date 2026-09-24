"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { ChevronRight, Home, Search } from "lucide-react";
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
              <h1>Profile & Selfie Verification</h1>
              <span className="about-breadcrumb-small">
                Find Your Perfect Match
              </span>
            </div>

            <nav className="about-breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">
                <Home size={15} />
                <span>Home</span>
              </Link>

              <Link href="/">
                <ChevronRight size={15} />
                <span>Help</span>
              </Link>

              <ChevronRight size={15} />

              <span className="active">Profile & Selfie Verification</span>
            </nav>
          </div>
        </Container>
      </section>

      <Container className="mt-5">
        <div className="experience-header text-center">
          <h2>
            Profile & Selfie <span>Verification</span>
          </h2>
        </div>

        <div className="profile-search-wrapper">
          <div className="search-bar help">
            <Search className="search-icon" size={18} />

            <input type="text" placeholder="What can we help with?" />

            <button type="button" className="search-btn">
              Search
            </button>
          </div>
        </div>
      </Container>

      <section className="faq-section">
        <Container>
          <div className="accordian">
            <Accordion defaultActiveKey="0">
              <AccordionItem eventKey="0">
                <AccordionHeader>
                  What is Profile & Selfie Verification?
                </AccordionHeader>
                <AccordionBody>
                  Profile & Selfie Verification helps confirm that a member's
                  profile information and submitted selfie belong to the same
                  person. This verification process helps create a more trusted
                  environment for members looking for genuine matrimonial
                  connections.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="1">
                <AccordionHeader>
                  How do I verify my matrimonial profile?
                </AccordionHeader>
                <AccordionBody>
                  Go to your profile settings and select the Profile
                  Verification option. Follow the instructions provided on the
                  screen and submit the required information along with a clear
                  selfie. Once submitted, the verification request will be
                  reviewed according to the platform's verification process.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="2">
                <AccordionHeader>
                  How should I take my selfie for verification?
                </AccordionHeader>
                <AccordionBody>
                  Take a clear and recent selfie in a well-lit environment. Make
                  sure your face is fully visible and unobstructed. Avoid
                  wearing sunglasses, masks, or anything that makes it difficult
                  to clearly see your face. Follow any additional instructions
                  shown during the verification process.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="3">
                <AccordionHeader>
                  What type of photo should I upload?
                </AccordionHeader>
                <AccordionBody>
                  Upload a recent, clear profile photo where your face is easily
                  visible. Avoid heavily edited, blurry, dark, group, or
                  duplicate photos. Using a genuine and recent photo can make
                  your profile easier for other members to understand.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="4">
                <AccordionHeader>
                  Why is selfie verification required?
                </AccordionHeader>
                <AccordionBody>
                  Selfie verification is designed to help reduce misleading or
                  impersonated profiles and improve trust between members. It
                  can provide an additional verification step beyond the
                  information entered in a profile.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="5">
                <AccordionHeader>
                  How long does profile verification take?
                </AccordionHeader>
                <AccordionBody>
                  Verification time may vary depending on the verification
                  process and the information submitted. You can check your
                  profile or verification section for the current status of your
                  request.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="6">
                <AccordionHeader>
                  What happens if my verification is unsuccessful?
                </AccordionHeader>
                <AccordionBody>
                  If your verification cannot be completed, review the
                  instructions provided and submit a new verification request
                  when the option is available. Make sure your selfie and
                  profile photo are clear, recent, and meet the verification
                  requirements.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="7">
                <AccordionHeader>
                  Can I change my profile photo after verification?
                </AccordionHeader>
                <AccordionBody>
                  You can update your profile photo according to the profile
                  settings available on your account. Depending on the
                  platform's verification rules, changing your photo may require
                  additional verification.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="8">
                <AccordionHeader>
                  Can someone else complete the selfie verification for me?
                </AccordionHeader>
                <AccordionBody>
                  No. The selfie submitted for verification should be your own
                  recent selfie. Do not use another person's photo or allow
                  someone else to complete the verification on your behalf.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="9">
                <AccordionHeader>
                  What should I do if my verification is not working?
                </AccordionHeader>
                <AccordionBody>
                  Make sure you have a stable internet connection, allow the
                  required camera permissions, and use a clear selfie with
                  sufficient lighting. If the issue continues, contact the
                  support team for assistance.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="10">
                <AccordionHeader>
                  Is my selfie used as my profile photo?
                </AccordionHeader>
                <AccordionBody>
                  The selfie submitted for verification may be handled
                  separately from your public profile photo depending on the
                  platform's verification and privacy settings. Check your
                  account privacy settings and verification information for
                  details about how your submitted selfie is handled.
                </AccordionBody>
              </AccordionItem>

              <AccordionItem eventKey="11">
                <AccordionHeader>
                  How can I get help with profile verification?
                </AccordionHeader>
                <AccordionBody>
                  If you need help with profile verification, selfie submission,
                  verification status, or a verification issue, contact the
                  support team through the Help or Contact Us section of the
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
