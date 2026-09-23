"use client";

import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Primium from "@/components/Primium";
import ProfileSearch from "@/components/ProfileSearch";
import MatchesProfile from "@/components/MatchesProfile";

function Page() {
  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={12}>
              <div className="matches-search-wrapper">
                <ProfileSearch />
              </div>
              <MatchesProfile />
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
