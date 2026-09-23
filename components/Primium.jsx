import React from "react";
import Link from "next/link";
import { ArrowRight, Crown, UserShield } from "lucide-react";

function Primium() {
  return (
    <div>
      <div className="dashboard-upgrade-card">
        <div className="upgrade-card-top">
          <div className="upgrade-icon">
            <Crown size={20} />
          </div>

          <span className="upgrade-badge">PREMIUM</span>
        </div>

        <h3>Unlock More Matches</h3>

        <p>
          Get unlimited messages, advanced profile visibility and more
          meaningful connections.
        </p>

        <div className="upgrade-activity">
          <div>
            <UserShield size={14} />
          </div>

          <span>
            <strong>Get upto 3x</strong> more profile views
          </span>
        </div>

        <div className="upgrade-activity">
          <div>
            <UserShield size={14} />
          </div>

          <span>
            Get access to <strong>contact details</strong>
          </span>
        </div>

        <span className="upgrade-note mb-3">
          Flat 59% OFF till <strong>28 Aug</strong>
        </span>

        <Link href="/premium" className="upgrade-btn">
          Upgrade Now
          <ArrowRight size={14} />
        </Link>

        <span className="upgrade-note">
          Starting from <strong>₹299/month</strong>
        </span>
      </div>
    </div>
  );
}

export default Primium;
