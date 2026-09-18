"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ProfileCardFooter from "@/components/ProfileCardFooter";

function ShortListedProfile() {
  const router = useRouter();

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "A Shab",
      age: 26,
      location: "Durgapur",
      caste: "Bania",
      height: "5ft 2in",
      work: "Student",
      income: "No Income",
      education: "M.Com",
      managedBy: "Self",
      active: "Active Today",
      online: false,
      nearby: "Nearby",
      acceptance: {
        message: "Shortlisted",
        date: "Today",
      },
      images: [
        "/images/matches/no-5.jpg",
        "/images/matches/no-2.jpg",
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
      ],
    },
    {
      id: 2,
      name: "Debasmita Saha",
      age: 24,
      location: "Durgapur",
      caste: "Kayastha",
      height: "5ft 3in",
      work: "Not planning to work",
      income: "No Income",
      education: "B.Sc",
      managedBy: "Self",
      active: "Last Yeasterday at 12:45 PM",
      nearby: "Nearby",
      online: false,
      acceptance: {
        message: "Shortlisted",
        date: "on 26-Aug-26",
      },
      images: [
        "/images/matches/no-4.jpg",
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
        "/images/matches/no-5.jpg",
      ],
    },
    {
      id: 3,
      name: "Ananya",
      age: 25,
      location: "Kolkata",
      caste: "Brahmin",
      height: "5ft 4in",
      work: "Software Professional",
      income: "₹5 Lakh",
      education: "B.Tech",
      managedBy: "Self",
      active: "Active Now",
      nearby: "Nearby",
      online: true,
      acceptance: {
        message: "Shortlisted",
        date: "on 26-sep-26",
      },
      images: [
        "/images/matches/no-3.jpg",
        "/images/matches/no-4.jpg",
        "/images/matches/no-5.jpg",
        "/images/matches/no-1.jpg",
      ],
    },
  ]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      animated: true,
      showClass: "f-fadeIn",
      hideClass: "f-fadeOut",
      dragToClose: true,

      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },

      Thumbs: {
        type: "classic",
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, [profiles]);

  const handleCardClick = () => {
    router.push("/matches/profileDetails");
  };

  const handleInterest = (profileId) => {
    setInterestedProfiles((prev) => ({
      ...prev,
      [profileId]: !prev[profileId],
    }));
  };

  const handleShortlist = (profileId) => {
    setShortlistedProfiles((prev) => ({
      ...prev,
      [profileId]: !prev[profileId],
    }));
  };

  const handleIgnore = (profileId) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== profileId));

    setInterestedProfiles((prev) => {
      const updated = { ...prev };
      delete updated[profileId];
      return updated;
    });

    setShortlistedProfiles((prev) => {
      const updated = { ...prev };
      delete updated[profileId];
      return updated;
    });
  };

  const renderProfile = (profile) => {
    return (
      <div
        className="mateches-profile"
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
          }
        }}
      >
        <img
          className="profile-card-image"
          src={profile.images[0]}
          alt={profile.name}
        />

        <div className="details-overlay">
          <div className="profile-card-top">
            <div className="acceptence">
              <p>{profile.acceptance?.message}</p>
              <span>{profile.acceptance?.date}</span>
            </div>

            <div className="profile-card-top-right">
              {profile.online && <div className="dot online"></div>}

              <div
                className="more-images"
                data-fancybox={`profile-${profile.id}`}
                data-src={profile.images[0]}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <ImagePlus size={14} />
                <span>{profile.images.length}</span>
              </div>
            </div>
          </div>

          <div className="profile-card-content">
            <div
              className={`activity ${
                ["Active Today", "Active Now"].includes(profile.active)
                  ? "today"
                  : ""
              }`}
            >
              {profile.active}
            </div>

            <div className="name">
              {profile.name}, <span>{profile.age}</span>
            </div>

            <div className="profile-details">
              <span>
                {profile.height} • {profile.location} • {profile.caste}
              </span>

              <span>
                {profile.work} • {profile.income}
              </span>

              <span>{profile.education}</span>
            </div>

            <div className="tag-badge">
              Profile managed by <span>{profile.managedBy}</span>
            </div>
          </div>

          <ProfileCardFooter profile={profile} section="shortlist" />
        </div>

        <div className="fancybox-hidden-gallery">
          {profile.images.map((image, index) => (
            <a
              key={`${profile.id}-${index}`}
              href={image}
              data-fancybox={`profile-${profile.id}`}
              data-caption={`${profile.name} - ${index + 1}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={image} alt={`${profile.name} ${index + 1}`} />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="activity-matches-profile">
      <Swiper
        modules={[Autoplay]}
        loop={profiles.length > 1}
        spaceBetween={12}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={600}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
        }}
      >
        {profiles.map((profile) => (
          <SwiperSlide key={profile.id}>{renderProfile(profile)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ShortListedProfile;
