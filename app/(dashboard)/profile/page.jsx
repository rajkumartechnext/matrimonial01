"use client";

import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Select from "react-select";
import {
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  FilePen,
  CalendarDays,
  Ruler,
  Church,
  Check,
  Pin,
  House,
  Users,
  WineOff,
  Utensils,
  CigaretteOff,
  Music,
  BookOpen,
  Plane,
  Camera,
  CookingPot,
  Mic2,
  Languages,
  Music2,
  Shirt,
  Dumbbell,
  Plus,
  Wallet,
  Gem,
  Baby,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import AcountHeader from "@/components/AcountHeader";
import SideBar from "@/components/SideBar";
import Primium from "@/components/Primium";
import ProfileSlider from "@/components/ProfileSlider";

const ABOUT_MIN_LENGTH = 50;
const ABOUT_MAX_LENGTH = 500;

const multiSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "48px",
    borderRadius: "9px",
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
    color: "#555",
    fontSize: "14px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
    fontSize: "14px",
  }),
  input: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#fce9ef",
    borderRadius: "5px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#c84b6b",
    fontSize: "13px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#c84b6b",
    "&:hover": {
      backgroundColor: "#c84b6b",
      color: "#fff",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#c84b6b"
      : state.isFocused
        ? "#fce9ef"
        : "#fff",
    color: state.isSelected ? "#fff" : "#333",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  }),
  menuPortal: (provided) => ({
    ...provided,
    zIndex: 99999,
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 99999,
  }),
};

function Page() {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("edit");
  const [activeSection, setActiveSection] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const router = useRouter();

  const [lifestyleValues, setLifestyleValues] = useState({
    habits: [],
    assets: [],
  });

  const [familyMembers, setFamilyMembers] = useState({
    fatherName: "",
    fatherOccupations: [],
    motherName: "",
    motherOccupations: [],
    siblings: [],
  });

  const [formData, setFormData] = useState({
    name: "A Shab Ghosh",
    location: "Durgapur, West Bengal",
    height: "5ft 2in",
    religion: "Hindu",
    community: "Bania",
    income: "Rs. 7.5 - 10 Lakh p.a",
    motherTongue: "Bengali",
    maritalStatus: "Never Married",
    children: "No",
    about:
      "She is a simple, caring and family-oriented person. She believes in maintaining a healthy balance between personal and professional life. She enjoys spending time with family and close friends and values honesty, understanding and mutual respect in a relationship.",
    education: "M.Com - Post Graduation",
    educationStream: "Commerce",
    career: "IT Professional",
    sector: "Private Sector",
    birthDate: "1999-09-12",
    familyType: "Upper Middle Nuclear Family",
    familyLocation: "Durgapur, West Bengal",
    familyValues: "Moderate values",
    gotra: "Kashyap Gotra",
    father: "Businessman",
    mother: "Homemaker",
    siblings: "One younger brother",
    familyAbout:
      "I belong to an upper-middle-class family, and family will always be my greatest priority.",
    livingWith: "Living with parents",
  });

  const selectOptions = {
    religion: [
      { value: "Hindu", label: "Hindu" },
      { value: "Muslim", label: "Muslim" },
      { value: "Christian", label: "Christian" },
      { value: "Sikh", label: "Sikh" },
      { value: "Buddhist", label: "Buddhist" },
      { value: "Jain", label: "Jain" },
      { value: "Other", label: "Other" },
    ],

    community: [
      { value: "Bania", label: "Bania" },
      { value: "Brahmin", label: "Brahmin" },
      { value: "Rajput", label: "Rajput" },
      { value: "Kayastha", label: "Kayastha" },
      { value: "Agarwal", label: "Agarwal" },
      { value: "Jat", label: "Jat" },
      { value: "Other", label: "Other" },
    ],

    income: [
      { value: "No Income", label: "No Income" },
      { value: "Below Rs. 3 Lakh", label: "Below Rs. 3 Lakh" },
      { value: "Rs. 3 - 5 Lakh p.a", label: "Rs. 3 - 5 Lakh p.a" },
      { value: "Rs. 5 - 7.5 Lakh p.a", label: "Rs. 5 - 7.5 Lakh p.a" },
      { value: "Rs. 7.5 - 10 Lakh p.a", label: "Rs. 7.5 - 10 Lakh p.a" },
      { value: "Rs. 10 - 15 Lakh p.a", label: "Rs. 10 - 15 Lakh p.a" },
      { value: "Rs. 15 - 25 Lakh p.a", label: "Rs. 15 - 25 Lakh p.a" },
      { value: "Above Rs. 25 Lakh p.a", label: "Above Rs. 25 Lakh p.a" },
    ],

    motherTongue: [
      { value: "Bengali", label: "Bengali" },
      { value: "Hindi", label: "Hindi" },
      { value: "English", label: "English" },
      { value: "Marwari", label: "Marwari" },
      { value: "Gujarati", label: "Gujarati" },
      { value: "Punjabi", label: "Punjabi" },
      { value: "Tamil", label: "Tamil" },
      { value: "Telugu", label: "Telugu" },
    ],

    maritalStatus: [
      { value: "Never Married", label: "Never Married" },
      { value: "Divorced", label: "Divorced" },
      { value: "Widowed", label: "Widowed" },
      { value: "Awaiting Divorce", label: "Awaiting Divorce" },
    ],

    children: [
      { value: "No", label: "No" },
      { value: "Yes - Living with me", label: "Yes - Living with me" },
      { value: "Yes - Not living with me", label: "Yes - Not living with me" },
    ],

    height: [
      { value: "4ft 8in", label: "4ft 8in" },
      { value: "4ft 10in", label: "4ft 10in" },
      { value: "5ft", label: "5ft" },
      { value: "5ft 2in", label: "5ft 2in" },
      { value: "5ft 4in", label: "5ft 4in" },
      { value: "5ft 6in", label: "5ft 6in" },
      { value: "5ft 8in", label: "5ft 8in" },
      { value: "5ft 10in", label: "5ft 10in" },
      { value: "6ft", label: "6ft" },
    ],

    qualification: [
      { value: "10th", label: "10th" },
      { value: "12th", label: "12th" },
      { value: "Diploma", label: "Diploma" },
      { value: "B.A - Graduation", label: "B.A - Graduation" },
      { value: "B.Com - Graduation", label: "B.Com - Graduation" },
      { value: "B.Sc - Graduation", label: "B.Sc - Graduation" },
      { value: "B.Tech - Graduation", label: "B.Tech - Graduation" },
      { value: "M.A - Post Graduation", label: "M.A - Post Graduation" },
      { value: "M.Com - Post Graduation", label: "M.Com - Post Graduation" },
      { value: "M.Sc - Post Graduation", label: "M.Sc - Post Graduation" },
      { value: "M.Tech - Post Graduation", label: "M.Tech - Post Graduation" },
      { value: "MBA", label: "MBA" },
      { value: "MCA", label: "MCA" },
      { value: "Ph.D", label: "Ph.D" },
      { value: "Other", label: "Other" },
    ],

    stream: [
      { value: "Arts", label: "Arts" },
      { value: "Commerce", label: "Commerce" },
      { value: "Science", label: "Science" },
      { value: "Computer Science", label: "Computer Science" },
      { value: "Engineering", label: "Engineering" },
      { value: "Management", label: "Management" },
      { value: "Medical", label: "Medical" },
      { value: "Law", label: "Law" },
      { value: "Other", label: "Other" },
    ],

    occupation: [
      { value: "Businessman", label: "Businessman" },
      { value: "Businesswoman", label: "Businesswoman" },
      { value: "IT Professional", label: "IT Professional" },
      { value: "Software Engineer", label: "Software Engineer" },
      { value: "Doctor", label: "Doctor" },
      { value: "Engineer", label: "Engineer" },
      { value: "Teacher", label: "Teacher" },
      { value: "Professor", label: "Professor" },
      { value: "Accountant", label: "Accountant" },
      { value: "Banking Professional", label: "Banking Professional" },
      { value: "Government Employee", label: "Government Employee" },
      { value: "Business Owner", label: "Business Owner" },
      { value: "Entrepreneur", label: "Entrepreneur" },
      { value: "Lawyer", label: "Lawyer" },
      { value: "Designer", label: "Designer" },
      { value: "Consultant", label: "Consultant" },
      { value: "HR Professional", label: "HR Professional" },
      { value: "Marketing Professional", label: "Marketing Professional" },
      { value: "Homemaker", label: "Homemaker" },
      { value: "Retired", label: "Retired" },
      { value: "Not Working", label: "Not Working" },
      { value: "Other", label: "Other" },
    ],

    sector: [
      { value: "Private Sector", label: "Private Sector" },
      { value: "Government", label: "Government" },
      { value: "Business", label: "Business" },
      { value: "Self Employed", label: "Self Employed" },
      { value: "Not Working", label: "Not Working" },
    ],

    familyType: [
      {
        value: "Upper Middle Nuclear Family",
        label: "Upper Middle Nuclear Family",
      },
      {
        value: "Upper Middle Joint Family",
        label: "Upper Middle Joint Family",
      },
      {
        value: "Middle Class Nuclear Family",
        label: "Middle Class Nuclear Family",
      },
      {
        value: "Middle Class Joint Family",
        label: "Middle Class Joint Family",
      },
      { value: "Affluent Family", label: "Affluent Family" },
    ],

    familyValues: [
      { value: "Liberal values", label: "Liberal values" },
      { value: "Moderate values", label: "Moderate values" },
      { value: "Traditional values", label: "Traditional values" },
    ],

    livingWith: [
      { value: "Living with parents", label: "Living with parents" },
      { value: "Living independently", label: "Living independently" },
      { value: "Living with father", label: "Living with father" },
      { value: "Living with mother", label: "Living with mother" },
      { value: "Living with siblings", label: "Living with siblings" },
    ],

    habits: [
      { value: "She does not drink", label: "She does not drink" },
      {
        value: "She drinks occasionally",
        label: "She drinks occasionally",
      },
      {
        value: "She drinks socially",
        label: "She drinks socially",
      },
      { value: "She is a vegetarian", label: "She is a vegetarian" },
      { value: "She is a non vegetarian", label: "She is a non vegetarian" },
      { value: "She does not smoke", label: "She does not smoke" },
      {
        value: "She smokes occasionally",
        label: "She smokes occasionally",
      },
    ],

    assets: [
      { value: "Owns a house", label: "Owns a house" },
      { value: "Owns a Car", label: "Owns a Car" },
      { value: "Owns Land", label: "Owns Land" },
      { value: "Owns Property", label: "Owns Property" },
      { value: "Has Investments", label: "Has Investments" },
    ],

    siblings: [
      { value: "Brother", label: "Brother" },
      { value: "Sister", label: "Sister" },
    ],

    favourites: [
      { value: "Listening to Music", label: "Listening to Music" },
      { value: "Reading Books", label: "Reading Books" },
      { value: "Travelling", label: "Travelling" },
      { value: "Photography", label: "Photography" },
      { value: "Cooking", label: "Cooking" },
      { value: "Singing", label: "Singing" },
      {
        value: "Spending Time with Family",
        label: "Spending Time with Family",
      },
      { value: "Watching Movies", label: "Watching Movies" },
      { value: "Dancing", label: "Dancing" },
      { value: "Gardening", label: "Gardening" },
      { value: "Fitness", label: "Fitness" },
      { value: "Art & Painting", label: "Art & Painting" },
    ],

    languages: [
      { value: "Bengali", label: "Bengali" },
      { value: "Hindi", label: "Hindi" },
      { value: "English", label: "English" },
      { value: "Marwari", label: "Marwari" },
      { value: "Gujarati", label: "Gujarati" },
      { value: "Punjabi", label: "Punjabi" },
      { value: "Tamil", label: "Tamil" },
      { value: "Telugu", label: "Telugu" },
    ],

    cuisine: [
      { value: "Bengali Cuisine", label: "Bengali Cuisine" },
      { value: "North Indian", label: "North Indian" },
      { value: "South Indian", label: "South Indian" },
      { value: "Chinese", label: "Chinese" },
      { value: "Italian", label: "Italian" },
      { value: "Continental", label: "Continental" },
    ],

    music: [
      { value: "Bollywood", label: "Bollywood" },
      { value: "Classical", label: "Classical" },
      { value: "Romantic", label: "Romantic" },
      { value: "Devotional", label: "Devotional" },
      { value: "Western", label: "Western" },
      { value: "Indie", label: "Indie" },
    ],

    dress: [
      { value: "Traditional", label: "Traditional" },
      { value: "Casual", label: "Casual" },
      { value: "Western", label: "Western" },
      { value: "Ethnic Wear", label: "Ethnic Wear" },
      { value: "Saree", label: "Saree" },
      { value: "Formal Wear", label: "Formal Wear" },
    ],

    sports: [
      { value: "Cricket", label: "Cricket" },
      { value: "Football", label: "Football" },
      { value: "Badminton", label: "Badminton" },
      { value: "Tennis", label: "Tennis" },
      { value: "Swimming", label: "Swimming" },
      { value: "Gym", label: "Gym" },
      { value: "Yoga", label: "Yoga" },
    ],
  };

  const sectionConfig = {
    basic: {
      editTitle: "Edit Basic Information",
      addTitle: "Add Basic Information",
      type: "basic",
    },
    about: {
      editTitle: "Edit About",
      addTitle: "Add About",
      type: "about",
    },
    education: {
      editTitle: "Edit Education",
      addTitle: "Add Education",
      type: "education",
    },
    career: {
      editTitle: "Edit Career",
      addTitle: "Add Career",
      type: "career",
    },
    birth: {
      editTitle: "Edit Birth Date",
      addTitle: "Add Birth Date",
      type: "birth",
    },
    family: {
      editTitle: "Edit Family Information",
      addTitle: "Add Family Information",
      type: "family",
    },
    lifestyle: {
      editTitle: "Edit Lifestyle & Interests",
      addTitle: "Add Lifestyle & Interests",
      type: "lifestyle",
    },
    favourites: {
      editTitle: "Edit Her Favourites",
      addTitle: "Add Her Favourites",
      type: "select",
      label: "Select hobbies and interests",
      options: selectOptions.favourites,
      values: [
        "Listening to Music",
        "Reading Books",
        "Travelling",
        "Photography",
        "Cooking",
        "Singing",
        "Spending Time with Family",
      ],
    },
    languages: {
      editTitle: "Edit Languages",
      addTitle: "Add Languages",
      type: "select",
      label: "Languages",
      options: selectOptions.languages,
      values: [],
    },
    cuisine: {
      editTitle: "Edit Cuisine",
      addTitle: "Add Cuisine",
      type: "select",
      label: "Favourite Cuisine",
      options: selectOptions.cuisine,
      values: [],
    },
    music: {
      editTitle: "Edit Music",
      addTitle: "Add Music",
      type: "select",
      label: "Favourite Music",
      options: selectOptions.music,
      values: [],
    },
    dress: {
      editTitle: "Edit Dress",
      addTitle: "Add Dress",
      type: "select",
      label: "Preferred Dress Style",
      options: selectOptions.dress,
      values: [],
    },
    sports: {
      editTitle: "Edit Sports",
      addTitle: "Add Sports",
      type: "select",
      label: "Favourite Sports",
      options: selectOptions.sports,
      values: [],
    },
  };

  const getOption = (options, value) => {
    return options?.find((option) => option.value === value) || null;
  };

  const openModal = (section, mode = "edit") => {
    const config = sectionConfig[section];

    setActiveSection(section);
    setModalMode(mode);

    if (section === "lifestyle") {
      setLifestyleValues({
        habits: selectOptions.habits.filter((item) =>
          [
            "She does not drink",
            "She is a non vegetarian",
            "She does not smoke",
          ].includes(item.value),
        ),
        assets: selectOptions.assets.filter((item) =>
          ["Owns a house", "Owns a Car"].includes(item.value),
        ),
      });
    } else if (section === "family") {
      setFamilyMembers({
        fatherName: formData.father || "",
        fatherOccupations: selectOptions.occupation.filter(
          (item) => item.value === "Businessman",
        ),
        motherName: formData.mother || "",
        motherOccupations: selectOptions.occupation.filter(
          (item) => item.value === "Homemaker",
        ),
        siblings: [],
      });
    } else if (config?.values) {
      const values = config.values
        .map((value) =>
          config.options?.find((option) => option.value === value),
        )
        .filter(Boolean);

      setSelectedValues(values);
    } else {
      setSelectedValues([]);
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveSection("");
    setSelectedValues([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAboutChange = (e) => {
    const value = e.target.value.slice(0, ABOUT_MAX_LENGTH);

    setFormData((prev) => ({
      ...prev,
      about: value,
    }));
  };

  const handleFamilyMemberChange = (field, value) => {
    setFamilyMembers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFamilySave = () => {
    setFormData((prev) => ({
      ...prev,
      father: familyMembers.fatherName,
      mother: familyMembers.motherName,
      siblings:
        familyMembers.siblings.length > 0
          ? familyMembers.siblings.map((item) => item.label).join(", ")
          : "No siblings added",
    }));

    closeModal();
  };

  const handleSave = () => {
    if (activeSection === "family") {
      handleFamilySave();
      return;
    }

    if (
      activeSection === "about" &&
      (formData.about.trim().length < ABOUT_MIN_LENGTH ||
        formData.about.trim().length > ABOUT_MAX_LENGTH)
    ) {
      return;
    }

    console.log("Saving:", {
      section: activeSection,
      mode: modalMode,
      formData,
      selectedValues,
      lifestyleValues,
    });

    closeModal();
  };

  const renderEditButtons = (section, showAdd = true) => (
    <div className="edit">
      <Link
        href="#"
        className="edit-btn"
        onClick={(e) => {
          e.preventDefault();
          openModal(section, "edit");
        }}
      >
        <FilePen size={15} />
      </Link>

      {showAdd && (
        <Link
          href="#"
          className="add-more-item new"
          onClick={(e) => {
            e.preventDefault();
            openModal(section, "add");
          }}
        >
          <Plus size={15} />
        </Link>
      )}
    </div>
  );

  const renderSelect = (
    name,
    label,
    options,
    isMulti = false,
    customValue = null,
    customOnChange = null,
  ) => {
    const value = customValue || getOption(options, formData[name]);

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>

        <Select
          inputId={name}
          isMulti={isMulti}
          isSearchable
          options={options}
          value={value}
          onChange={(option) => {
            if (customOnChange) {
              customOnChange(option);
              return;
            }

            setFormData((prev) => ({
              ...prev,
              [name]: isMulti ? option || [] : option?.value || "",
            }));
          }}
          placeholder={`Select ${label.toLowerCase()}...`}
          classNamePrefix="profile-select"
          closeMenuOnSelect={!isMulti}
          styles={multiSelectStyles}
          menuPortalTarget={
            typeof document !== "undefined" ? document.body : null
          }
        />
      </div>
    );
  };

  const renderFamilyOccupationInput = (selectedOccupations, namePrefix) => {
    if (!selectedOccupations?.length) return null;

    return (
      <div className="family-selected-occupations">
        {selectedOccupations.map((occupation) => (
          <div className="form-group" key={occupation.value}>
            <label htmlFor={`${namePrefix}-${occupation.value}`}>
              {occupation.label} Name
            </label>

            <input
              id={`${namePrefix}-${occupation.value}`}
              type="text"
              placeholder={`Enter ${occupation.label.toLowerCase()} name`}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderSiblingInputs = () => {
    if (!familyMembers.siblings.length) return null;

    return (
      <div className="family-selected-occupations">
        {familyMembers.siblings.map((sibling) => (
          <div className="form-group" key={sibling.value}>
            <label htmlFor={`sibling-${sibling.value}`}>
              {sibling.label} Name
            </label>

            <input
              id={`sibling-${sibling.value}`}
              type="text"
              placeholder={`Enter ${sibling.label.toLowerCase()} name`}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderModalContent = () => {
    const config = sectionConfig[activeSection];

    if (!config) return null;

    if (config.type === "select") {
      return (
        <div className="form-group">
          <label htmlFor="profile-multi-select">{config.label}</label>

          <Select
            inputId="profile-multi-select"
            isMulti
            isSearchable
            options={config.options}
            value={selectedValues}
            onChange={(values) => setSelectedValues(values || [])}
            placeholder={`Select ${config.label.toLowerCase()}...`}
            classNamePrefix="profile-select"
            closeMenuOnSelect={false}
            styles={multiSelectStyles}
            menuPortalTarget={
              typeof document !== "undefined" ? document.body : null
            }
          />
        </div>
      );
    }

    if (config.type === "basic") {
      return (
        <div className="profile-modal-form">
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                />
              </div>
            </Col>

            <Col md={6}>
              {renderSelect("height", "Height", selectOptions.height)}
            </Col>

            <Col md={6}>
              {renderSelect("religion", "Religion", selectOptions.religion)}
            </Col>

            <Col md={6}>
              {renderSelect("community", "Community", selectOptions.community)}
            </Col>

            <Col md={6}>
              {renderSelect("income", "Annual Income", selectOptions.income)}
            </Col>

            <Col md={6}>
              {renderSelect(
                "motherTongue",
                "Mother Tongue",
                selectOptions.motherTongue,
              )}
            </Col>

            <Col md={6}>
              {renderSelect(
                "maritalStatus",
                "Marital Status",
                selectOptions.maritalStatus,
              )}
            </Col>

            <Col md={6}>
              {renderSelect("children", "Children", selectOptions.children)}
            </Col>
          </Row>
        </div>
      );
    }

    if (config.type === "about") {
      const aboutLength = formData.about.length;
      const isTooShort = aboutLength < ABOUT_MIN_LENGTH;

      return (
        <div className="form-group">
          <label htmlFor="about">About</label>

          <textarea
            id="about"
            name="about"
            rows={7}
            value={formData.about}
            onChange={handleAboutChange}
            minLength={ABOUT_MIN_LENGTH}
            maxLength={ABOUT_MAX_LENGTH}
            placeholder="Write something about her..."
          />

          <div
            className="profile-input-help"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              marginTop: "6px",
            }}
          >
            <span>
              Minimum {ABOUT_MIN_LENGTH} characters and maximum{" "}
              {ABOUT_MAX_LENGTH} characters.
            </span>

            <span
              style={{
                color: isTooShort ? "#dc3545" : "#777",
                whiteSpace: "nowrap",
              }}
            >
              {aboutLength}/{ABOUT_MAX_LENGTH}
            </span>
          </div>
        </div>
      );
    }

    if (config.type === "education") {
      return (
        <Row>
          <Col md={7}>
            {renderSelect(
              "education",
              "Highest Qualification",
              selectOptions.qualification,
            )}
          </Col>

          <Col md={5}>
            {renderSelect("educationStream", "Stream", selectOptions.stream)}
          </Col>
        </Row>
      );
    }

    if (config.type === "career") {
      return (
        <Row>
          <Col md={7}>
            {renderSelect("career", "Occupation", selectOptions.occupation)}
          </Col>

          <Col md={5}>
            {renderSelect("sector", "Sector", selectOptions.sector)}
          </Col>
        </Row>
      );
    }

    if (config.type === "birth") {
      return (
        <div className="form-group">
          <label htmlFor="birthDate">Birth Date</label>

          <input
            id="birthDate"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />
        </div>
      );
    }

    if (config.type === "family") {
      return (
        <div className="profile-modal-form">
          <Row>
            <Col md={6}>
              {renderSelect(
                "familyType",
                "Family Type",
                selectOptions.familyType,
              )}
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="familyLocation">Family Location</label>

                <input
                  id="familyLocation"
                  type="text"
                  name="familyLocation"
                  value={formData.familyLocation}
                  onChange={handleInputChange}
                  placeholder="Enter family location"
                />
              </div>
            </Col>

            <Col md={6}>
              {renderSelect(
                "familyValues",
                "Family Values",
                selectOptions.familyValues,
              )}
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="gotra">Gotra</label>

                <input
                  id="gotra"
                  type="text"
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleInputChange}
                  placeholder="Enter gotra"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="fatherName">Father Name</label>

                <input
                  id="fatherName"
                  type="text"
                  value={familyMembers.fatherName}
                  onChange={(e) =>
                    handleFamilyMemberChange("fatherName", e.target.value)
                  }
                  placeholder="Enter father name"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="fatherOccupation">Father Occupation</label>

                <Select
                  inputId="fatherOccupation"
                  isMulti
                  isSearchable
                  options={selectOptions.occupation}
                  value={familyMembers.fatherOccupations}
                  onChange={(values) =>
                    handleFamilyMemberChange("fatherOccupations", values || [])
                  }
                  placeholder="Select father occupation..."
                  classNamePrefix="profile-select"
                  closeMenuOnSelect={false}
                  styles={multiSelectStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                />
              </div>
            </Col>

            <Col md={12}>
              {renderFamilyOccupationInput(
                familyMembers.fatherOccupations,
                "father",
              )}
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="motherName">Mother Name</label>

                <input
                  id="motherName"
                  type="text"
                  value={familyMembers.motherName}
                  onChange={(e) =>
                    handleFamilyMemberChange("motherName", e.target.value)
                  }
                  placeholder="Enter mother name"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label htmlFor="motherOccupation">Mother Occupation</label>

                <Select
                  inputId="motherOccupation"
                  isMulti
                  isSearchable
                  options={selectOptions.occupation}
                  value={familyMembers.motherOccupations}
                  onChange={(values) =>
                    handleFamilyMemberChange("motherOccupations", values || [])
                  }
                  placeholder="Select mother occupation..."
                  classNamePrefix="profile-select"
                  closeMenuOnSelect={false}
                  styles={multiSelectStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                />
              </div>
            </Col>

            <Col md={12}>
              {renderFamilyOccupationInput(
                familyMembers.motherOccupations,
                "mother",
              )}
            </Col>

            <Col md={12}>
              <div className="form-group">
                <label htmlFor="siblings">Brother / Sister</label>

                <Select
                  inputId="siblings"
                  isMulti
                  isSearchable
                  options={selectOptions.siblings}
                  value={familyMembers.siblings}
                  onChange={(values) =>
                    handleFamilyMemberChange("siblings", values || [])
                  }
                  placeholder="Select brother / sister..."
                  classNamePrefix="profile-select"
                  closeMenuOnSelect={false}
                  styles={multiSelectStyles}
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : null
                  }
                />
              </div>
            </Col>

            <Col md={12}>{renderSiblingInputs()}</Col>

            <Col md={12}>
              <div className="form-group">
                <label htmlFor="familyAbout">About Family</label>

                <textarea
                  id="familyAbout"
                  name="familyAbout"
                  rows={4}
                  value={formData.familyAbout}
                  onChange={handleInputChange}
                  placeholder="Write something about your family..."
                />
              </div>
            </Col>

            <Col md={12}>
              {renderSelect(
                "livingWith",
                "Living With",
                selectOptions.livingWith,
              )}
            </Col>
          </Row>
        </div>
      );
    }

    if (config.type === "lifestyle") {
      return (
        <>
          <div className="form-group">
            <label htmlFor="habits">Habits</label>

            <Select
              inputId="habits"
              isMulti
              isSearchable
              options={selectOptions.habits}
              value={lifestyleValues.habits}
              onChange={(values) =>
                setLifestyleValues((prev) => ({
                  ...prev,
                  habits: values || [],
                }))
              }
              placeholder="Select habits..."
              classNamePrefix="profile-select"
              closeMenuOnSelect={false}
              styles={multiSelectStyles}
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : null
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="assets">Assets</label>

            <Select
              inputId="assets"
              isMulti
              isSearchable
              options={selectOptions.assets}
              value={lifestyleValues.assets}
              onChange={(values) =>
                setLifestyleValues((prev) => ({
                  ...prev,
                  assets: values || [],
                }))
              }
              placeholder="Select assets..."
              classNamePrefix="profile-select"
              closeMenuOnSelect={false}
              styles={multiSelectStyles}
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : null
              }
            />
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <AcountHeader />

      <SideBar>
        <div className="dashboard-page profile-page">
          <Row>
            <Col xl={9} lg={8}>
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
                  <h3>Brief outline of personal information</h3>
                </div>
              </div>
              <ProfileSlider />

              <div className="user-profile-details">
                <div className="offcanvas-profile-card m-0">
                  <div className="offcanvas-profile-info">
                    <h4>My Profile</h4>
                    <p>Complete your profile</p>

                    <div className="profile-progress">
                      <span></span>
                    </div>

                    <small>80% completed</small>
                  </div>
                </div>

                <section className="user-profile-section">
                  {renderEditButtons("basic", false)}

                  <div className="prof-header">
                    <h1>{formData.name}</h1>

                    <div className="tag-badge-prof-det">
                      Profile managed by <span>Self</span>
                    </div>
                  </div>

                  <div className="user-profile-info-grid">
                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <MapPin size={17} />
                      </div>

                      <div>
                        <small>Location</small>
                        <strong>{formData.location}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Ruler size={17} />
                      </div>

                      <div>
                        <small>Height</small>
                        <strong>{formData.height}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Church size={17} />
                      </div>

                      <div>
                        <small>Religion</small>
                        <strong>{formData.religion}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Users size={17} />
                      </div>

                      <div>
                        <small>Community</small>
                        <strong>{formData.community}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Wallet size={17} />
                      </div>

                      <div>
                        <small>Annual Income</small>
                        <strong>{formData.income}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Languages size={17} />
                      </div>

                      <div>
                        <small>Mother Tongue</small>
                        <strong>{formData.motherTongue}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Gem size={17} />
                      </div>

                      <div>
                        <small>Marital Status</small>
                        <strong>{formData.maritalStatus}</strong>
                      </div>
                    </div>

                    <div className="user-profile-info-item">
                      <div className="user-profile-info-icon">
                        <Baby size={17} />
                      </div>

                      <div>
                        <small>Children</small>
                        <strong>{formData.children}</strong>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("about", false)}

                  <div className="user-profile-section-heading">
                    <h3>About Her</h3>
                    <span>About her personality and lifestyle</span>
                  </div>

                  <p className="user-profile-about">{formData.about}</p>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("education")}

                  <div className="user-profile-section-heading">
                    <h3>Education</h3>
                    <span>Academic background</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <GraduationCap size={19} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>{formData.education}</strong>
                      <span>{formData.educationStream}</span>
                    </div>

                    <Check size={18} className="user-profile-detail-check" />
                  </div>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("career")}

                  <div className="user-profile-section-heading">
                    <h3>Career</h3>
                    <span>Professional information</span>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <BriefcaseBusiness size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>{formData.career}</strong>
                      <span>{formData.sector}</span>
                    </div>

                    <Check size={18} className="user-profile-detail-check" />
                  </div>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("birth", false)}

                  <div className="user-profile-section-heading">
                    <h3>Birth Date</h3>
                  </div>

                  <div className="user-profile-detail-row user-profile-horoscope-row">
                    <div className="user-profile-detail-icon">
                      <CalendarDays size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>
                        {new Date(formData.birthDate).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </strong>
                    </div>
                  </div>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("family")}

                  <div className="user-profile-section-heading">
                    <h3>Family</h3>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <House size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>
                        {formData.familyType} from {formData.familyLocation}
                      </strong>

                      <span>
                        {formData.familyValues} • {formData.gotra}
                      </span>
                    </div>
                  </div>

                  <div className="user-profile-detail-row">
                    <div className="user-profile-detail-icon">
                      <Users size={18} />
                    </div>

                    <div className="user-profile-detail-content">
                      <strong>Father: {formData.father}</strong>

                      <span>
                        Mother: {formData.mother} • {formData.siblings}
                      </span>
                    </div>
                  </div>

                  <div className="user-profile-family-badge">
                    <strong>About Family : </strong>
                    {formData.familyAbout}
                  </div>

                  <div className="user-profile-tags mt-3">
                    <span>
                      <Pin size={17} />
                      {formData.livingWith}
                    </span>
                  </div>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("lifestyle")}

                  <div className="user-profile-section-heading">
                    <h3>Lifestyle and Interests</h3>
                  </div>

                  <div className="prof-sub-heading">Habits</div>

                  <div className="user-profile-tags">
                    <span>
                      <WineOff size={17} />
                      She does not drink
                    </span>

                    <span>
                      <Utensils size={17} />
                      She is a non vegetarian
                    </span>

                    <span>
                      <CigaretteOff size={17} />
                      She does not smoke
                    </span>
                  </div>

                  <div className="prof-sub-heading">Assets</div>

                  <div className="user-profile-tags">
                    <span>
                      <House size={17} />
                      Owns a house
                    </span>

                    <span>
                      <Wallet size={17} />
                      Owns a Car
                    </span>
                  </div>
                </section>

                <section className="user-profile-section">
                  {renderEditButtons("favourites")}

                  <div className="user-profile-section-heading">
                    <h3>Favourites</h3>
                  </div>

                  <div className="user-profile-tags">
                    <span>
                      <Music size={17} />
                      Listening to Music
                    </span>

                    <span>
                      <BookOpen size={17} />
                      Reading Books
                    </span>

                    <span>
                      <Plane size={17} />
                      Travelling
                    </span>

                    <span>
                      <Camera size={17} />
                      Photography
                    </span>

                    <span>
                      <CookingPot size={17} />
                      Cooking
                    </span>

                    <span>
                      <Mic2 size={17} />
                      Singing
                    </span>

                    <span>
                      <Users size={17} />
                      Spending Time with Family
                    </span>
                  </div>
                </section>

                <section className="add-more-details pt-4">
                  <div className="user-profile-section-heading">
                    <h3>Add More Details</h3>
                  </div>

                  <div className="user-profile-tags add-more">
                    <span>
                      <Languages size={17} />
                      Languages
                      <Link
                        href="#"
                        className="add-more-item"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal("languages", "add");
                        }}
                      >
                        <Plus size={15} />
                      </Link>
                    </span>

                    <span>
                      <Utensils size={17} />
                      Cuisine
                      <Link
                        href="#"
                        className="add-more-item"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal("cuisine", "add");
                        }}
                      >
                        <Plus size={15} />
                      </Link>
                    </span>

                    <span>
                      <Music2 size={17} />
                      Music
                      <Link
                        href="#"
                        className="add-more-item"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal("music", "add");
                        }}
                      >
                        <Plus size={15} />
                      </Link>
                    </span>

                    <span>
                      <Shirt size={17} />
                      Dress
                      <Link
                        href="#"
                        className="add-more-item"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal("dress", "add");
                        }}
                      >
                        <Plus size={15} />
                      </Link>
                    </span>

                    <span>
                      <Dumbbell size={17} />
                      Sports
                      <Link
                        href="#"
                        className="add-more-item"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal("sports", "add");
                        }}
                      >
                        <Plus size={15} />
                      </Link>
                    </span>
                  </div>
                </section>
              </div>
            </Col>

            <Col xl={3} lg={4}>
              <Primium />
            </Col>
          </Row>
        </div>
      </SideBar>

      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size="lg"
        backdrop="static"
        keyboard={true}
        className="profile-edit-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {activeSection
              ? modalMode === "add"
                ? sectionConfig[activeSection]?.addTitle
                : sectionConfig[activeSection]?.editTitle
              : "Edit Profile"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>{renderModalContent()}</Modal.Body>

        <Modal.Footer>
          <button className="mycancel" onClick={closeModal}>
            Cancel
          </button>

          <button
            className="primarybtn"
            onClick={handleSave}
            disabled={
              activeSection === "about" &&
              formData.about.trim().length < ABOUT_MIN_LENGTH
            }
          >
            {activeSection === "family"
              ? "Save Family Details"
              : modalMode === "add"
                ? "Add Details"
                : "Save Changes"}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Page;
