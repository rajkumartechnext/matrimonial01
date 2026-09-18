"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  ChevronDown,
  ChevronRight,
  LogIn,
  Menu,
  X,
  Search,
  Languages,
  Users,
  Church,
  Building2,
  Briefcase,
  MapPin,
  Globe,
  GraduationCap,
} from "lucide-react";
import Login from "./Login";
import ProfileSearch from "./ProfileSearch";

const categories = [
  {
    id: "mother-tongue",
    label: "Mother Tongue",
    icon: Languages,
    basePath: "/profiles/language",
    items: [
      "Bihari",
      "Hindi",
      "Malayalam",
      "Punjabi",
      "Telugu",
      "Konkani",
      "Assamese",
      "Tulu",
      "Bengali",
      "Gujarati",
      "Marathi",
      "Rajasthani",
      "Hindi UP",
      "Himachali",
      "Kashmiri",
      "Hindi Delhi",
      "Kannada",
      "Oriya",
      "Tamil",
      "Hindi MP",
      "Haryanvi",
      "Sikkim Nepali",
    ],
  },
  {
    id: "caste",
    label: "Caste",
    icon: Users,
    basePath: "/profiles/caste",
    items: ["Brahmin", "Kshatriya", "Vaishya", "Shudra", "Jat", "Gujjar"],
  },
  {
    id: "religion",
    label: "Religion",
    icon: Church,
    basePath: "/profiles/religion",
    items: ["Hindu", "Muslim", "Sikh", "Christian", "Jain", "Buddhist"],
  },
  {
    id: "city",
    label: "City",
    icon: Building2,
    basePath: "/profiles/city",
    items: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune"],
  },
  {
    id: "occupation",
    label: "Occupation",
    icon: Briefcase,
    basePath: "/profiles/occupation",
    items: [
      "Doctor",
      "Engineer",
      "Teacher",
      "Business",
      "Lawyer",
      "IAS Officer",
    ],
  },
  {
    id: "state",
    label: "State",
    icon: MapPin,
    basePath: "/profiles/state",
    items: [
      "Maharashtra",
      "Uttar Pradesh",
      "Karnataka",
      "Tamil Nadu",
      "Gujarat",
      "Rajasthan",
    ],
  },
  {
    id: "nri",
    label: "NRI",
    icon: Globe,
    basePath: "/profiles/nri",
    items: ["USA", "UK", "Canada", "Australia", "UAE", "Singapore"],
  },
  {
    id: "college",
    label: "College",
    icon: GraduationCap,
    basePath: "/profiles/college",
    items: ["IIT", "IIM", "AIIMS", "NIT", "BITS Pilani", "Delhi University"],
  },
];

const slugify = (str) => str.toLowerCase().replace(/\s+/g, "-");

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  const [activeCategory, setActiveCategory] = useState(null);

  const [canHover, setCanHover] = useState(true);

  const browseRef = useRef(null);
  const megaMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Detect hover capability
  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");

    setCanHover(mql.matches);

    const handler = (e) => {
      setCanHover(e.matches);
    };

    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, []);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    if (!openMegaMenu) return;

    const handleClickOutside = (e) => {
      if (
        browseRef.current &&
        !browseRef.current.contains(e.target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target)
      ) {
        setOpenMegaMenu(false);
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [openMegaMenu]);

  // Close everything on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpenMegaMenu(false);
        setActiveCategory(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleBrowseMouseEnter = () => {
    if (!canHover) return;

    clearCloseTimeout();

    setOpenMegaMenu(true);

    if (!activeCategory) {
      setActiveCategory(categories[0].id);
    }
  };

  const handleBrowseMouseLeave = () => {
    if (!canHover) return;

    closeTimeoutRef.current = setTimeout(() => {
      if (megaMenuRef.current && !megaMenuRef.current.matches(":hover")) {
        setOpenMegaMenu(false);
        setActiveCategory(null);
      }
    }, 200);
  };

  const handleBrowseClick = (e) => {
    e.stopPropagation();

    setOpenMegaMenu((prev) => {
      const next = !prev;

      if (next) {
        setActiveCategory(categories[0].id);
      } else {
        setActiveCategory(null);
      }

      return next;
    });
  };

  const handleCategoryMouseEnter = (id) => {
    if (!canHover) return;

    clearCloseTimeout();
    setActiveCategory(id);
  };

  const handleCategoryClick = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const closeAllMenus = () => {
    setOpenMegaMenu(false);
    setActiveCategory(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="matrimony-header">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-brand">
          <Link href="/" className="brand-link" onClick={closeAllMenus}>
            {/* <span className="brand-text">Logo Here</span> */}
            <img src="images/logo.png" alt="" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Main Menu */}
        <div
          className={`menu-container ${isMobileMenuOpen ? "active" : ""}`}
          ref={mobileMenuRef}
        >
          <ul className="menu-list">
            {/* Mega Menu Item */}
            <li
              className="menu-item mega-menu-item"
              ref={browseRef}
              onMouseEnter={handleBrowseMouseEnter}
              onMouseLeave={handleBrowseMouseLeave}
            >
              <button
                className={`menu-link browse-btn ${
                  openMegaMenu ? "active" : ""
                }`}
                onClick={handleBrowseClick}
                aria-expanded={openMegaMenu}
              >
                Browse Profiles By
                <ChevronDown
                  className={`arrow-icon ${openMegaMenu ? "rotate" : ""}`}
                  size={14}
                />
              </button>

              {openMegaMenu && (
                <div
                  className="mega-menu browse-menu"
                  ref={megaMenuRef}
                  onMouseEnter={clearCloseTimeout}
                  onMouseLeave={handleBrowseMouseLeave}
                >
                  {/* =========================
                      CATEGORY LIST
                      ========================= */}
                  <ul className="category-list">
                    {categories.map((cat) => {
                      const IconComponent = cat.icon;

                      const isActive = activeCategory === cat.id;

                      return (
                        <li
                          key={cat.id}
                          className={`category-item ${
                            isActive ? "active" : ""
                          }`}
                          onMouseEnter={() => handleCategoryMouseEnter(cat.id)}
                          onClick={() => handleCategoryClick(cat.id)}
                        >
                          {/* Category Row */}
                          <div className="category-item-row">
                            <span className="category-label">
                              <IconComponent
                                size={18}
                                className="category-icon"
                              />

                              {cat.label}
                            </span>

                            <ChevronRight
                              size={16}
                              className="category-arrow"
                            />
                          </div>

                          {/* =================================
                              MOBILE / TABLET PANEL ONLY
                              ================================= */}
                          {isActive && (
                            <div className="mobile-category-panel">
                              <div className="category-panel">
                                <div className="category-panel-header">
                                  <IconComponent
                                    size={20}
                                    className="panel-icon"
                                  />

                                  <span>{cat.label}</span>
                                </div>

                                <div
                                  className="category-panel-grid"
                                  style={{
                                    "--rows": Math.ceil(cat.items.length / 3),
                                  }}
                                >
                                  {cat.items.map((item) => (
                                    <Link
                                      key={item}
                                      href={`${cat.basePath}/${slugify(item)}`}
                                      onClick={closeAllMenus}
                                      className="category-link"
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  {/* =================================
                      DESKTOP PANEL ONLY
                      ================================= */}
                  {activeCategory && (
                    <div className="category-panel-wrapper">
                      {categories
                        .filter((cat) => cat.id === activeCategory)
                        .map((cat) => {
                          const IconComponent = cat.icon;

                          return (
                            <div key={cat.id} className="category-panel">
                              <div className="category-panel-header">
                                <IconComponent
                                  size={20}
                                  className="panel-icon"
                                />

                                <span>{cat.label}</span>
                              </div>

                              <div
                                className="category-panel-grid"
                                style={{
                                  "--rows": Math.ceil(cat.items.length / 3),
                                }}
                              >
                                {cat.items.map((item) => (
                                  <Link
                                    key={item}
                                    href={`${cat.basePath}/${slugify(item)}`}
                                    onClick={closeAllMenus}
                                    className="category-link"
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}
            </li>

            <li className="menu-item">
              <Link href="/register" className="menu-link">
                Help?
              </Link>
            </li>

            {/* Search Bar */}
            <li className="menu-item search-item">
              <ProfileSearch />
            </li>

            {/* Login */}
            <li className="menu-item cta-item">
              <Login />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
