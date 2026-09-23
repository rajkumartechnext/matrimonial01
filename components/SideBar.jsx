"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Activity, MessageCircle, LayoutDashboard } from "lucide-react";

function SideBar({ children }) {
  const pathname = usePathname();

  const isDashboard = pathname === "/dashboard";
  const isMatches = pathname.startsWith("/matches");
  const isActivity = pathname.startsWith("/activity");
  const isMessenger = pathname.startsWith("/messenger");

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-inner">
          <div className="sidebar-heading">
            <span>MY ACCOUNT</span>
          </div>

          <Link
            href="/dashboard"
            className={`sidebar-menu-item ${isDashboard ? "active" : ""}`}
          >
            <span className="sidebar-menu-icon">
              <LayoutDashboard size={19} />
            </span>

            <span className="sidebar-menu-name">Dashboard</span>
          </Link>

          <Link
            href="/matches"
            className={`sidebar-menu-item ${isMatches ? "active" : ""}`}
          >
            <span className="sidebar-menu-icon">
              <Heart size={19} />
            </span>

            <span className="sidebar-menu-name">Matches</span>

            <span className="sidebar-badge">12</span>
          </Link>

          <Link
            href="/activity"
            className={`sidebar-menu-item ${isActivity ? "active" : ""}`}
          >
            <span className="sidebar-menu-icon">
              <Activity size={19} />
            </span>

            <span className="sidebar-menu-name">Activity</span>

            <span className="sidebar-badge">5</span>
          </Link>

          <Link
            href="/messenger"
            className={`sidebar-menu-item ${isMessenger ? "active" : ""}`}
          >
            <span className="sidebar-menu-icon">
              <MessageCircle size={19} />
            </span>

            <span className="sidebar-menu-name">Messenger</span>

            <span className="sidebar-badge">3</span>
          </Link>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-content">{children}</div>
      </main>

      <nav className="dashboard-mobile-nav">
        <Link
          href="/dashboard"
          className={`mobile-nav-item ${isDashboard ? "active" : ""}`}
        >
          <span className="mobile-nav-icon">
            <LayoutDashboard size={20} />
          </span>

          <span>Dashboard</span>
        </Link>

        <Link
          href="/matches"
          className={`mobile-nav-item ${isMatches ? "active" : ""}`}
        >
          <span className="mobile-nav-icon">
            <Heart size={20} />

            <span className="mobile-nav-badge">12</span>
          </span>

          <span>Matches</span>
        </Link>

        <Link
          href="/activity"
          className={`mobile-nav-item ${isActivity ? "active" : ""}`}
        >
          <span className="mobile-nav-icon">
            <Activity size={20} />

            <span className="mobile-nav-badge">5</span>
          </span>

          <span>Activity</span>
        </Link>

        <Link
          href="/messenger"
          className={`mobile-nav-item ${isMessenger ? "active" : ""}`}
        >
          <span className="mobile-nav-icon">
            <MessageCircle size={20} />

            <span className="mobile-nav-badge">3</span>
          </span>

          <span>Messages</span>
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
