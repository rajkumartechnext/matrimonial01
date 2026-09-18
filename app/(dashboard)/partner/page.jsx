"use client";

import React, { useState } from "react";
import Select from "react-select";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useRouter } from "next/navigation";
import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";

import {
  MapPin,
  Home,
  Heart,
  UserRound,
  AlertTriangle,
  GraduationCap,
  IndianRupee,
  BriefcaseBusiness,
  Church,
  Users,
  Languages,
  Sparkles,
  Wine,
  Utensils,
  Cigarette,
  ChevronLeft,
  Search,
  ContactRound,
  BookOpenText,
  HouseHeart,
} from "lucide-react";

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "48px",
    borderRadius: "0 8px 8px 0",
    borderColor: state.isFocused ? "#c84b6b" : "#e4dfe1",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(200, 75, 107, 0.08)" : "none",
    "&:hover": {
      borderColor: "#c84b6b",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "4px 12px",
    fontSize: "14px",
    fontWeight: "600",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#777",
    fontSize: "14px",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#333",
    fontSize: "14px",
  }),

  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: state.data.value === "other" ? "#fff3e0" : "#fce9ef",
    borderRadius: "5px",
    border:
      state.data.value === "other"
        ? "1px solid #f0a500"
        : "1px solid transparent",
  }),

  multiValueLabel: (provided, state) => ({
    ...provided,
    color: state.data.value === "other" ? "#c77700" : "#c84b6b",
    fontSize: "13px",
    fontWeight: "600",
  }),

  multiValueRemove: (provided, state) => ({
    ...provided,
    color: state.data.value === "other" ? "#c77700" : "#c84b6b",
    "&:hover": {
      backgroundColor: state.data.value === "other" ? "#f0a500" : "#c84b6b",
      color: "#fff",
    },
  }),

  option: (provided, state) => {
    const isOther =
      state.data?.value === "other" ||
      state.data?.label?.toLowerCase().startsWith("other");

    return {
      ...provided,
      backgroundColor: isOther
        ? state.isSelected
          ? "#f0a500"
          : state.isFocused
            ? "#fff3e0"
            : "#fffaf2"
        : state.isSelected
          ? "#c84b6b"
          : state.isFocused
            ? "#fce9ef"
            : "#fff",
      color: isOther
        ? state.isSelected
          ? "#fff"
          : "#b66a00"
        : state.isSelected
          ? "#fff"
          : "#333",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: isOther ? "600" : "500",
      padding: "11px 14px",
    };
  },

  menuPortal: (provided) => ({
    ...provided,
    zIndex: 99999,
  }),

  menu: (provided) => ({
    ...provided,
    zIndex: 99999,
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  }),
};

const profileCreatedForOptions = [
  { value: "myself", label: "Myself" },
  { value: "son", label: "Son" },
  { value: "daughter", label: "Daughter" },
  { value: "brother", label: "Brother" },
  { value: "sister", label: "Sister" },
  { value: "relative", label: "Relative" },
  { value: "friend", label: "Friend" },
];

const locationOptions = [
  { value: "kolkata", label: "Kolkata" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
  { value: "bangalore", label: "Bangalore" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "chennai", label: "Chennai" },
  { value: "pune", label: "Pune" },
  { value: "ahmedabad", label: "Ahmedabad" },
  { value: "jaipur", label: "Jaipur" },
  { value: "lucknow", label: "Lucknow" },
  { value: "patna", label: "Patna" },
  { value: "durgapur", label: "Durgapur" },
];

const maritalStatusOptions = [
  { value: "never-married", label: "Never Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "awaiting-divorce", label: "Awaiting Divorce" },
];

const profileManagedOptions = [
  { value: "self", label: "Self" },
  { value: "parent", label: "Parent" },
  { value: "sibling", label: "Sibling" },
  { value: "relative", label: "Relative" },
  { value: "friend", label: "Friend" },
];

const specialCaseOptions = [
  { value: "none", label: "No Special Case" },
  { value: "differently-abled", label: "Differently Abled" },
  { value: "widowed", label: "Widowed" },
  { value: "divorced", label: "Divorced" },
  { value: "awaiting-divorce", label: "Awaiting Divorce" },
];

const educationOptions = [
  { value: "school", label: "School" },
  { value: "higher-secondary", label: "Higher Secondary" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "mba", label: "MBA" },
  { value: "mca", label: "MCA" },
  { value: "m-tech", label: "M.Tech" },
  { value: "phd", label: "PhD" },
  { value: "medical", label: "Medical" },
  { value: "law", label: "Law" },
  { value: "ca", label: "CA" },
  { value: "other", label: "Other" },
];

const incomeOptions = [
  { value: "no-income", label: "No Income" },
  { value: "0-3", label: "₹0 - ₹3 Lakh" },
  { value: "3-5", label: "₹3 - ₹5 Lakh" },
  { value: "5-7.5", label: "₹5 - ₹7.5 Lakh" },
  { value: "7.5-10", label: "₹7.5 - ₹10 Lakh" },
  { value: "10-15", label: "₹10 - ₹15 Lakh" },
  { value: "15-20", label: "₹15 - ₹20 Lakh" },
  { value: "20-30", label: "₹20 - ₹30 Lakh" },
  { value: "30-50", label: "₹30 - ₹50 Lakh" },
  { value: "50-plus", label: "₹50 Lakh+" },
];

const occupationOptions = [
  { value: "private", label: "Private Sector" },
  { value: "government", label: "Government / Civil Services" },
  { value: "business", label: "Business / Entrepreneur" },
  { value: "self-employed", label: "Self Employed" },
  { value: "defence", label: "Defence" },
  { value: "medical", label: "Medical / Healthcare" },
  { value: "legal", label: "Legal" },
  { value: "education", label: "Education / Teaching" },
  { value: "finance", label: "Finance / Accounting" },
  { value: "it", label: "IT / Software" },
  { value: "consulting", label: "Consulting" },
  { value: "media", label: "Media / Entertainment" },
  { value: "artist", label: "Artist / Creative" },
  { value: "student", label: "Student" },
  { value: "not-working", label: "Not Working" },
];

const religionOptions = [
  { value: "hindu", label: "Hindu" },
  { value: "muslim", label: "Muslim" },
  { value: "christian", label: "Christian" },
  { value: "sikh", label: "Sikh" },
  { value: "buddhist", label: "Buddhist" },
  { value: "jain", label: "Jain" },
  { value: "parsi", label: "Parsi" },
  { value: "jewish", label: "Jewish" },
  { value: "other", label: "Other" },
];

const casteOptions = {
  hindu: [
    { value: "brahmin", label: "Brahmin" },
    { value: "rajput", label: "Rajput" },
    { value: "kayastha", label: "Kayastha" },
    { value: "baniya", label: "Baniya" },
    { value: "agarwal", label: "Agarwal" },
    { value: "jati", label: "Jat" },
    { value: "gujjar", label: "Gujjar" },
    { value: "yadav", label: "Yadav" },
    { value: "kurmi", label: "Kurmi" },
    { value: "maratha", label: "Maratha" },
    { value: "nair", label: "Nair" },
    { value: "reddy", label: "Reddy" },
    { value: "kamma", label: "Kamma" },
    { value: "lingayat", label: "Lingayat" },
    { value: "other", label: "Other Hindu Caste" },
  ],
  muslim: [
    { value: "sunni", label: "Sunni" },
    { value: "shia", label: "Shia" },
    { value: "syed", label: "Syed" },
    { value: "shaikh", label: "Shaikh" },
    { value: "pathan", label: "Pathan" },
    { value: "ansari", label: "Ansari" },
    { value: "bohra", label: "Bohra" },
    { value: "other", label: "Other Muslim Community" },
  ],
  christian: [
    { value: "catholic", label: "Catholic" },
    { value: "protestant", label: "Protestant" },
    { value: "orthodox", label: "Orthodox" },
    { value: "syrian-christian", label: "Syrian Christian" },
    { value: "anglo-indian", label: "Anglo Indian" },
    { value: "other", label: "Other Christian Community" },
  ],
  sikh: [
    { value: "jat", label: "Jat Sikh" },
    { value: "khatri", label: "Khatri" },
    { value: "ramgarhia", label: "Ramgarhia" },
    { value: "arora", label: "Arora" },
    { value: "majabi", label: "Mazhabi Sikh" },
    { value: "other", label: "Other Sikh Community" },
  ],
  buddhist: [
    { value: "tibetan", label: "Tibetan Buddhist" },
    { value: "newar", label: "Newar Buddhist" },
    { value: "navayana", label: "Navayana Buddhist" },
    { value: "other", label: "Other Buddhist Community" },
  ],
  jain: [
    { value: "digambar", label: "Digambar" },
    { value: "shwetambar", label: "Shwetambar" },
    { value: "sthanakvasi", label: "Sthanakvasi" },
    { value: "terapanthi", label: "Terapanthi" },
    { value: "other", label: "Other Jain Community" },
  ],
  parsi: [{ value: "parsi", label: "Parsi" }],
  jewish: [
    { value: "bene-israel", label: "Bene Israel" },
    { value: "baghdadi-jewish", label: "Baghdadi Jewish" },
    { value: "cochin-jewish", label: "Cochin Jewish" },
    { value: "other", label: "Other Jewish Community" },
  ],
  other: [{ value: "other", label: "Other Community" }],
};

const motherTongueOptions = [
  { value: "bengali", label: "Bengali" },
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "telugu", label: "Telugu" },
  { value: "marathi", label: "Marathi" },
  { value: "tamil", label: "Tamil" },
  { value: "gujarati", label: "Gujarati" },
  { value: "urdu", label: "Urdu" },
  { value: "kannada", label: "Kannada" },
  { value: "odia", label: "Odia" },
  { value: "malayalam", label: "Malayalam" },
  { value: "punjabi", label: "Punjabi" },
  { value: "assamese", label: "Assamese" },
  { value: "nepali", label: "Nepali" },
  { value: "konkani", label: "Konkani" },
  { value: "sindhi", label: "Sindhi" },
  { value: "other", label: "Other" },
];

const manglikOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "anshik", label: "Anshik / Partial" },
  { value: "dont-know", label: "Don't Know" },
];

const drinkingOptions = [
  { value: "never", label: "Never Drinks" },
  { value: "occasionally", label: "Occasionally" },
  { value: "regularly", label: "Regularly" },
  { value: "socially", label: "Socially" },
];

const dietaryOptions = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "non-vegetarian", label: "Non-Vegetarian" },
  { value: "eggetarian", label: "Eggetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "jain", label: "Jain Food" },
];

const smokingOptions = [
  { value: "never", label: "Never Smokes" },
  { value: "occasionally", label: "Occasionally" },
  { value: "regularly", label: "Regularly" },
  { value: "trying-to-quit", label: "Trying to Quit" },
];

function Page() {
  const router = useRouter();
  const [ageFrom, setAgeFrom] = useState(23);
  const [ageTo, setAgeTo] = useState(32);

  const minAge = 18;
  const maxAge = 60;

  const handleFromChange = (e) => {
    const value = Number(e.target.value);

    if (value < ageTo) {
      setAgeFrom(value);
    }
  };

  const handleToChange = (e) => {
    const value = Number(e.target.value);

    if (value > ageFrom) {
      setAgeTo(value);
    }
  };

  const fromAgePosition = ((ageFrom - minAge) / (maxAge - minAge)) * 100;

  const toAgePosition = ((ageTo - minAge) / (maxAge - minAge)) * 100;

  const [heightFrom, setHeightFrom] = useState(60);
  const [heightTo, setHeightTo] = useState(72);

  const minHeight = 48;
  const maxHeight = 84;

  const handleHeightFromChange = (e) => {
    const value = Number(e.target.value);

    if (value < heightTo) {
      setHeightFrom(value);
    }
  };

  const handleHeightToChange = (e) => {
    const value = Number(e.target.value);

    if (value > heightFrom) {
      setHeightTo(value);
    }
  };

  const fromHeightPosition =
    ((heightFrom - minHeight) / (maxHeight - minHeight)) * 100;

  const toHeightPosition =
    ((heightTo - minHeight) / (maxHeight - minHeight)) * 100;

  const formatHeight = (totalInches) => {
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;

    return `${feet}'${inches}"`;
  };

  const [profileCreatedFor, setProfileCreatedFor] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [familyLocation, setFamilyLocation] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [profileManagedBy, setProfileManagedBy] = useState(null);
  const [specialCase, setSpecialCase] = useState([]);
  const [education, setEducation] = useState([]);
  const [incomeRange, setIncomeRange] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [religion, setReligion] = useState([]);
  const [caste, setCaste] = useState([]);
  const [motherTongue, setMotherTongue] = useState([]);
  const [manglikStatus, setManglikStatus] = useState([]);
  const [drinkingHabits, setDrinkingHabits] = useState([]);
  const [dietaryHabits, setDietaryHabits] = useState([]);
  const [smokingHabits, setSmokingHabits] = useState([]);

  const selectedReligions = religion.map((item) => item.value);

  const casteOptionsForReligion = selectedReligions.flatMap(
    (religionValue) => casteOptions[religionValue] || [],
  );

  const uniqueCasteOptions = casteOptionsForReligion.filter(
    (option, index, self) =>
      index === self.findIndex((item) => item.value === option.value),
  );

  const handleReligionChange = (selected) => {
    setReligion(selected || []);
    setCaste([]);
  };

  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page">
          <Row>
            <Col xl={12}>
              <div className="partner-prefarance">
                <div className="dashboard-panel-header">
                  <button
                    type="button"
                    className="back"
                    onClick={() => router.back()}
                    aria-label="Go back"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <div>
                    <h3>Tell us what you're looking for</h3>
                  </div>
                </div>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <ContactRound size={18} /> Basic Details
                    </Accordion.Header>

                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <div className="age-range-wrapper">
                            <h2>Age Range</h2>

                            <h3>
                              <span>{ageFrom}</span> Years to{" "}
                              <span>{ageTo}</span> Years
                            </h3>

                            <div className="age-slider">
                              <div
                                className="age-slider-selected"
                                style={{
                                  left: `${fromAgePosition}%`,
                                  width: `${toAgePosition - fromAgePosition}%`,
                                }}
                              />

                              <input
                                type="range"
                                min={minAge}
                                max={maxAge}
                                value={ageFrom}
                                onChange={handleFromChange}
                                className="age-range-input age-range-from"
                              />

                              <input
                                type="range"
                                min={minAge}
                                max={maxAge}
                                value={ageTo}
                                onChange={handleToChange}
                                className="age-range-input age-range-to"
                              />
                            </div>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="age-range-wrapper">
                            <h2>Height Range</h2>

                            <h3>
                              <span>{formatHeight(heightFrom)}</span> to{" "}
                              <span>{formatHeight(heightTo)}</span>
                            </h3>

                            <div className="age-slider">
                              <div
                                className="age-slider-selected"
                                style={{
                                  left: `${fromHeightPosition}%`,
                                  width: `${
                                    toHeightPosition - fromHeightPosition
                                  }%`,
                                }}
                              />

                              <input
                                type="range"
                                min={minHeight}
                                max={maxHeight}
                                value={heightFrom}
                                onChange={handleHeightFromChange}
                                className="age-range-input age-range-from"
                              />

                              <input
                                type="range"
                                min={minHeight}
                                max={maxHeight}
                                value={heightTo}
                                onChange={handleHeightToChange}
                                className="age-range-input age-range-to"
                              />
                            </div>
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">
                              Current Location
                            </label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <MapPin size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isSearchable
                                  options={locationOptions}
                                  value={currentLocation}
                                  onChange={setCurrentLocation}
                                  placeholder="Select Current Location"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Family Location */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">
                              Family based out of
                            </label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Home size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={locationOptions}
                                  value={familyLocation}
                                  onChange={setFamilyLocation}
                                  placeholder="Select Family Location"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Marital Status */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Marital Status</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Heart size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isSearchable
                                  options={maritalStatusOptions}
                                  value={maritalStatus}
                                  onChange={setMaritalStatus}
                                  placeholder="Select Marital Status"
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Profile Managed By */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">
                              Profile Managed by
                            </label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <UserRound size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isSearchable
                                  options={profileManagedOptions}
                                  value={profileManagedBy}
                                  onChange={setProfileManagedBy}
                                  placeholder="Select Profile Managed By"
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Special Case */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Special Case</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <AlertTriangle size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={specialCaseOptions}
                                  value={specialCase}
                                  onChange={setSpecialCase}
                                  placeholder="Select Special Case"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <GraduationCap size={18} /> Education & Occupation
                    </Accordion.Header>

                    <Accordion.Body>
                      <Row>
                        {/* Education */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Education</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <GraduationCap size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={educationOptions}
                                  value={education}
                                  onChange={setEducation}
                                  placeholder="Select Education"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Income */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">
                              Income range (in ₹)
                            </label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <IndianRupee size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={incomeOptions}
                                  value={incomeRange}
                                  onChange={setIncomeRange}
                                  placeholder="Select Income Range"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Occupation */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Occupation</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <BriefcaseBusiness size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={occupationOptions}
                                  value={occupation}
                                  onChange={setOccupation}
                                  placeholder="Select Occupation"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <BookOpenText size={18} /> Religion and Ethnicity
                    </Accordion.Header>

                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Religion</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Church size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={religionOptions}
                                  value={religion}
                                  onChange={handleReligionChange}
                                  placeholder="Select Religion"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Caste */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Caste-Subcaste</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Users size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={uniqueCasteOptions}
                                  value={caste}
                                  onChange={setCaste}
                                  placeholder={
                                    religion.length
                                      ? "Select Caste-Subcaste"
                                      : "Select Religion First"
                                  }
                                  isDisabled={!religion.length}
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Mother Tongue */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Mother Tongue</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Languages size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={motherTongueOptions}
                                  value={motherTongue}
                                  onChange={setMotherTongue}
                                  placeholder="Select Mother Tongue"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Manglik Status */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Manglik Status</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Sparkles size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={manglikOptions}
                                  value={manglikStatus}
                                  onChange={setManglikStatus}
                                  placeholder="Select Manglik Status"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <HouseHeart size={18} /> Lifestyle
                    </Accordion.Header>

                    <Accordion.Body>
                      <Row>
                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Drinking Habits</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Wine size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={drinkingOptions}
                                  value={drinkingHabits}
                                  onChange={setDrinkingHabits}
                                  placeholder="Select Drinking Habits"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Dietary */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Dietary Habits</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Utensils size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={dietaryOptions}
                                  value={dietaryHabits}
                                  onChange={setDietaryHabits}
                                  placeholder="Select Dietary Habits"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>

                        {/* Smoking */}

                        <Col md={6}>
                          <div className="form-group">
                            <label className="mt-2 mb-1">Smoking Habits</label>

                            <div className="partner-pref">
                              <div className="pref-icon">
                                <Cigarette size={17} />
                              </div>

                              <div className="field">
                                <Select
                                  isMulti
                                  isSearchable
                                  options={smokingOptions}
                                  value={smokingHabits}
                                  onChange={setSmokingHabits}
                                  placeholder="Select Smoking Habits"
                                  closeMenuOnSelect={false}
                                  styles={selectStyles}
                                  classNamePrefix="profile-select"
                                  menuPortalTarget={
                                    typeof document !== "undefined"
                                      ? document.body
                                      : null
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="partner-search text-center">
                <button type="button" className="search-btn partner w-50">
                  <Search size={18} /> Search
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </SideBar>
    </>
  );
}

export default Page;
