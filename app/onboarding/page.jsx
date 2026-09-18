"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  UserRound,
  StepForward,
  MapPin,
  X,
  UsersRound,
  ImagePlus,
  UserRoundPlus,
} from "lucide-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Header from "@/app/onboarding/_components/Header";
import Footer from "@/components/Footer";

const profileForOptions = [
  { value: "myself", label: "Myself" },
  { value: "son", label: "Son" },
  { value: "daughter", label: "Daughter" },
  { value: "brother", label: "Brother" },
  { value: "sister", label: "Sister" },
  { value: "friend", label: "Friend" },
  { value: "relative", label: "Relative" },
];

const HaveChildren = [
  { value: "no", label: "No Children" },
  { value: "living-with", label: "Yes, Living With Me" },
  { value: "not-living", label: "Yes, Not Living With Me" },
  { value: "doesnt-matter", label: "Doesn't Matter" },
];

const religionOptions = [
  { value: "hindu", label: "Hindu" },
  { value: "muslim", label: "Muslim" },
  { value: "christian", label: "Christian" },
  { value: "sikh", label: "Sikh" },
  { value: "buddhist", label: "Buddhist" },
  { value: "jain", label: "Jain" },
  { value: "other", label: "Other" },
];

const motherTongueOptions = [
  { value: "bengali", label: "Bengali" },
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "telugu", label: "Telugu" },
  { value: "tamil", label: "Tamil" },
  { value: "marathi", label: "Marathi" },
  { value: "gujarati", label: "Gujarati" },
  { value: "punjabi", label: "Punjabi" },
  { value: "kannada", label: "Kannada" },
  { value: "malayalam", label: "Malayalam" },
];

const educationOptions = [
  { value: "high-school", label: "High School" },
  { value: "diploma", label: "Diploma" },
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "phd", label: "PhD" },
  { value: "professional", label: "Professional Degree" },
];

const occupationOptions = [
  { value: "government", label: "Government / Public Sector" },
  { value: "private", label: "Private Sector" },
  { value: "business", label: "Business / Self Employed" },
  { value: "professional", label: "Professional" },
  { value: "defence", label: "Defence" },
  { value: "not-working", label: "Not Working Currently" },
  { value: "student", label: "Student" },
];

const maritalStatusOptions = [
  { value: "never-married", label: "Never Married" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
  { value: "separated", label: "Separated" },
];

const dietOptions = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "non-vegetarian", label: "Non Vegetarian" },
  { value: "eggetarian", label: "Eggetarian" },
  { value: "jain", label: "Jain" },
];

const incomeOptions = [
  { value: "below-2", label: "Below ₹2 Lakh" },
  { value: "2-5", label: "₹2 - ₹5 Lakh" },
  { value: "5-10", label: "₹5 - ₹10 Lakh" },
  { value: "10-20", label: "₹10 - ₹20 Lakh" },
  { value: "20-30", label: "₹20 - ₹30 Lakh" },
  { value: "30-plus", label: "₹30 Lakh+" },
];

const heightOptions = [
  { value: "4-6", label: `4'6"` },
  { value: "4-9", label: `4'9"` },
  { value: "5-0", label: `5'0"` },
  { value: "5-3", label: `5'3"` },
  { value: "5-6", label: `5'6"` },
  { value: "5-9", label: `5'9"` },
  { value: "6-0", label: `6'0"` },
  { value: "6-3", label: `6'3"` },
];

const countryOptions = [
  { value: "india", label: "India" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "uae", label: "United Arab Emirates" },
  { value: "singapore", label: "Singapore" },
  { value: "other", label: "Other" },
];

const stateOptions = [
  { value: "west-bengal", label: "West Bengal" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "delhi", label: "Delhi" },
  { value: "karnataka", label: "Karnataka" },
  { value: "telangana", label: "Telangana" },
  { value: "tamil-nadu", label: "Tamil Nadu" },
  { value: "uttar-pradesh", label: "Uttar Pradesh" },
  { value: "bihar", label: "Bihar" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "odisha", label: "Odisha" },
  { value: "gujarat", label: "Gujarat" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "madhya-pradesh", label: "Madhya Pradesh" },
  { value: "punjab", label: "Punjab" },
  { value: "kerala", label: "Kerala" },
  { value: "assam", label: "Assam" },
  { value: "other", label: "Other" },
];

const districtOptions = [
  { value: "birbhum", label: "Birbhum" },
  { value: "paschim-bardhaman", label: "Paschim Bardhaman" },
  { value: "purba-bardhaman", label: "Purba Bardhaman" },
  { value: "hooghly", label: "Hooghly" },
  { value: "howrah", label: "Howrah" },
  { value: "kolkata", label: "Kolkata" },
  { value: "north-24-parganas", label: "North 24 Parganas" },
  { value: "south-24-parganas", label: "South 24 Parganas" },
  { value: "bankura", label: "Bankura" },
  { value: "purulia", label: "Purulia" },
  { value: "murshidabad", label: "Murshidabad" },
  { value: "malda", label: "Malda" },
  { value: "other", label: "Other" },
];

const cityOptions = [
  { value: "kolkata", label: "Kolkata" },
  { value: "durgapur", label: "Durgapur" },
  { value: "asansol", label: "Asansol" },
  { value: "suri", label: "Suri" },
  { value: "bolpur", label: "Bolpur" },
  { value: "bardhaman", label: "Bardhaman" },
  { value: "howrah", label: "Howrah" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi", label: "Delhi" },
  { value: "bangalore", label: "Bangalore" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "chennai", label: "Chennai" },
  { value: "pune", label: "Pune" },
];

const ageOptions = [
  { value: "21-25", label: "21 - 25" },
  { value: "26-30", label: "26 - 30" },
  { value: "31-35", label: "31 - 35" },
  { value: "36-40", label: "36 - 40" },
  { value: "41-45", label: "41 - 45" },
];

const countOptions = Array.from({ length: 11 }, (_, index) => ({
  value: String(index),
  label: String(index),
}));

const fatherProfessionOptions = [
  { value: "government", label: "Government Employee" },
  { value: "private", label: "Private Employee" },
  { value: "business", label: "Business Owner" },
  { value: "professional", label: "Professional" },
  { value: "farmer", label: "Farmer" },
  { value: "retired", label: "Retired" },
  { value: "self-employed", label: "Self Employed" },
  { value: "not-working", label: "Not Working" },
  { value: "deceased", label: "Deceased" },
];

const motherProfessionOptions = [
  { value: "homemaker", label: "Homemaker" },
  { value: "government", label: "Government Employee" },
  { value: "private", label: "Private Employee" },
  { value: "business", label: "Business Owner" },
  { value: "professional", label: "Professional" },
  { value: "teacher", label: "Teacher" },
  { value: "retired", label: "Retired" },
  { value: "self-employed", label: "Self Employed" },
  { value: "not-working", label: "Not Working" },
  { value: "deceased", label: "Deceased" },
];

const stepData = [
  {
    number: 1,
    title: "Basic Details",
  },
  {
    number: 2,
    title: "Location Details",
  },
  {
    number: 3,
    title: "Personal Details",
  },
  {
    number: 4,
    title: "Education & Career",
  },
  {
    number: 5,
    title: "Lifestyle",
  },
  {
    number: 6,
    title: "Preferences",
  },
  {
    number: 7,
    title: "Family",
  },
  {
    number: 8,
    title: "Profile",
  },
];

const selectStyles = {
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

function StepFormPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [mounted, setMounted] = useState(false);

  const [dragActive, setDragActive] = useState({
    profile: false,
    family: false,
  });

  const [formData, setFormData] = useState({
    profileFor: null,
    gender: "",
    name: "",
    dateOfBirth: "",
    country: null,
    state: null,
    district: null,
    city: null,
    village: "",
    area: "",
    pinCode: "",
    address: "",
    religion: null,
    motherTongue: [],
    height: null,
    maritalStatus: null,
    children: null,
    about: "",
    education: [],
    occupation: [],
    income: null,
    company: "",
    diet: null,
    smoking: "",
    drinking: "",
    manglik: "",
    settleAbroad: "",
    preferredAge: [],
    preferredReligion: [],
    preferredMotherTongue: [],
    preferredEducation: [],
    fatherProfession: null,
    fatherOccupation: "",
    motherProfession: null,
    motherOccupation: "",
    brotherCount: null,
    sisterCount: null,
    familyAbout: "",
    bio: "",
    profilePhoto: null,
    profilePhotoPreview: "",
    familyPhoto: null,
    familyPhotoPreview: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return () => {
      if (formData.profilePhotoPreview) {
        URL.revokeObjectURL(formData.profilePhotoPreview);
      }

      if (formData.familyPhotoPreview) {
        URL.revokeObjectURL(formData.familyPhotoPreview);
      }
    };
  }, []);

  const totalSteps = stepData.length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const countWords = (text = "") => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const renderSelect = (
    name,
    options,
    placeholder = "Select",
    isMulti = false,
  ) => {
    if (!mounted) {
      return (
        <div className="profile-select__control">
          <span>{placeholder}</span>
        </div>
      );
    }

    return (
      <Select
        isMulti={isMulti}
        isSearchable
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={!isMulti}
        options={options}
        value={formData[name] || (isMulti ? [] : null)}
        onChange={(selected) => handleSelectChange(name, selected)}
        placeholder={placeholder}
        styles={selectStyles}
        classNamePrefix="profile-select"
        noOptionsMessage={() => "No options found"}
        menuPortalTarget={
          typeof document !== "undefined" ? document.body : null
        }
      />
    );
  };

  const handlePhotoUpload = (file, type) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Photo must be less than 5MB.");
      return;
    }

    const preview = URL.createObjectURL(file);

    if (type === "profile") {
      if (formData.profilePhotoPreview) {
        URL.revokeObjectURL(formData.profilePhotoPreview);
      }

      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
        profilePhotoPreview: preview,
      }));
    }

    if (type === "family") {
      if (formData.familyPhotoPreview) {
        URL.revokeObjectURL(formData.familyPhotoPreview);
      }

      setFormData((prev) => ({
        ...prev,
        familyPhoto: file,
        familyPhotoPreview: preview,
      }));
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files?.[0];

    if (file) {
      handlePhotoUpload(file, type);
    }

    e.target.value = "";
  };

  const handleDragOver = (e, type) => {
    e.preventDefault();

    setDragActive((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleDragLeave = (type) => {
    setDragActive((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  const handleDrop = (e, type) => {
    e.preventDefault();

    setDragActive((prev) => ({
      ...prev,
      [type]: false,
    }));

    const file = e.dataTransfer.files?.[0];

    if (file) {
      handlePhotoUpload(file, type);
    }
  };

  const removePhoto = (type) => {
    if (type === "profile") {
      if (formData.profilePhotoPreview) {
        URL.revokeObjectURL(formData.profilePhotoPreview);
      }

      setFormData((prev) => ({
        ...prev,
        profilePhoto: null,
        profilePhotoPreview: "",
      }));
    }

    if (type === "family") {
      if (formData.familyPhotoPreview) {
        URL.revokeObjectURL(formData.familyPhotoPreview);
      }

      setFormData((prev) => ({
        ...prev,
        familyPhoto: null,
        familyPhotoPreview: "",
      }));
    }
  };

  const openFilePicker = (id) => {
    document.getElementById(id)?.click();
  };

  const validateStep = () => {
    if (currentStep === 1) {
      if (!formData.profileFor) {
        toast.error("Please select who this profile is for.");
        return false;
      }

      if (!formData.gender) {
        toast.error("Please select your gender.");
        return false;
      }

      if (!formData.name.trim()) {
        toast.error("Please enter your full name.");
        return false;
      }

      if (!formData.dateOfBirth) {
        toast.error("Please select your date of birth.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!formData.country) {
        toast.error("Please select your country.");
        return false;
      }

      if (!formData.state) {
        toast.error("Please select your state / province.");
        return false;
      }

      if (!formData.district) {
        toast.error("Please select your district.");
        return false;
      }

      if (!formData.city) {
        toast.error("Please select your city / town.");
        return false;
      }

      if (!formData.pinCode.trim()) {
        toast.error("Please enter your PIN / postal code.");
        return false;
      }
    }

    if (currentStep === 3) {
      if (!formData.religion) {
        toast.error("Please select your religion.");
        return false;
      }

      if (!formData.motherTongue?.length) {
        toast.error("Please select at least one mother tongue.");
        return false;
      }

      if (!formData.height) {
        toast.error("Please select your height.");
        return false;
      }

      if (!formData.maritalStatus) {
        toast.error("Please select your marital status.");
        return false;
      }

      if (!formData.children) {
        toast.error("Please select your children status.");
        return false;
      }
    }

    if (currentStep === 4) {
      if (!formData.education?.length) {
        toast.error("Please select your education.");
        return false;
      }

      if (!formData.occupation?.length) {
        toast.error("Please select your occupation.");
        return false;
      }

      if (!formData.income) {
        toast.error("Please select your annual income.");
        return false;
      }

      if (!formData.company.trim()) {
        toast.error("Please enter your company / organization.");
        return false;
      }
    }

    if (currentStep === 5) {
      if (!formData.manglik) {
        toast.error("Please select your Manglik status.");
        return false;
      }

      if (!formData.settleAbroad) {
        toast.error("Please select your settle abroad preference.");
        return false;
      }
    }

    if (currentStep === 6) {
      if (!formData.preferredAge?.length) {
        toast.error("Please select your preferred age.");
        return false;
      }

      if (!formData.preferredReligion?.length) {
        toast.error("Please select your preferred religion.");
        return false;
      }

      if (!formData.preferredMotherTongue?.length) {
        toast.error("Please select your preferred mother tongue.");
        return false;
      }

      if (!formData.preferredEducation?.length) {
        toast.error("Please select your preferred education.");
        return false;
      }
    }

    if (currentStep === 7) {
      if (!formData.fatherProfession) {
        toast.error("Please select your father's profession.");
        return false;
      }

      if (
        formData.fatherProfession &&
        !["not-working", "retired", "deceased"].includes(
          formData.fatherProfession.value,
        ) &&
        !formData.fatherOccupation.trim()
      ) {
        toast.error("Please enter your father's occupation.");
        return false;
      }

      if (!formData.motherProfession) {
        toast.error("Please select your mother's profession.");
        return false;
      }

      if (
        formData.motherProfession &&
        !["homemaker", "not-working", "retired", "deceased"].includes(
          formData.motherProfession.value,
        ) &&
        !formData.motherOccupation.trim()
      ) {
        toast.error("Please enter your mother's occupation.");
        return false;
      }

      if (!formData.brotherCount) {
        toast.error("Please select the number of brothers.");
        return false;
      }

      if (!formData.sisterCount) {
        toast.error("Please select the number of sisters.");
        return false;
      }
    }

    if (currentStep === 8) {
      if (!formData.profilePhoto) {
        toast.error("Please upload your profile photo.");
        return false;
      }

      if (countWords(formData.bio) < 25) {
        toast.error("Your bio must contain at least 25 words.");
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateStep()) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStep !== 8) {
      return;
    }

    if (!validateStep()) {
      return;
    }

    const profileData = {
      ...formData,
      profileFor: formData.profileFor,
      country: formData.country,
      state: formData.state,
      district: formData.district,
      city: formData.city,
      religion: formData.religion,
      motherTongue: formData.motherTongue,
      height: formData.height,
      maritalStatus: formData.maritalStatus,
      children: formData.children,
      education: formData.education,
      occupation: formData.occupation,
      income: formData.income,
      diet: formData.diet,
      preferredAge: formData.preferredAge,
      preferredReligion: formData.preferredReligion,
      preferredMotherTongue: formData.preferredMotherTongue,
      preferredEducation: formData.preferredEducation,
      fatherProfession: formData.fatherProfession,
      motherProfession: formData.motherProfession,
      brotherCount: formData.brotherCount,
      sisterCount: formData.sisterCount,
      profileCompleted: true,
      completedAt: new Date().toISOString(),
    };

    try {
      const profileDataForStorage = {
        ...profileData,
        profilePhoto: null,
        familyPhoto: null,
      };

      localStorage.setItem(
        "matrimonialProfile",
        JSON.stringify(profileDataForStorage),
      );

      if (formData.profilePhotoPreview) {
        localStorage.setItem(
          "profilePhotoPreview",
          formData.profilePhotoPreview,
        );
      }

      if (formData.familyPhotoPreview) {
        localStorage.setItem("familyPhotoPreview", formData.familyPhotoPreview);
      }

      toast.success("Profile created successfully!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating your profile.");
    }
  };

  const UploadBox = ({ type, title, icon, inputId, preview, file }) => {
    const isProfile = type === "profile";

    return (
      <div className="profile-upload-wrapper">
        {!preview ? (
          <div
            className={`profile-upload-box ${
              dragActive[type] ? "drag-active" : ""
            }`}
            onDragOver={(e) => handleDragOver(e, type)}
            onDragLeave={() => handleDragLeave(type)}
            onDrop={(e) => handleDrop(e, type)}
            onClick={() => openFilePicker(inputId)}
          >
            <input
              id={inputId}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => handleFileChange(e, type)}
              hidden
            />

            <div className="upload-icon">{icon}</div>

            <h5>{title}</h5>

            <p>
              or <span>browse from your device</span>
            </p>

            <small>JPG, PNG or WEBP • Maximum file size 5MB</small>
          </div>
        ) : (
          <div className="uploaded-photo-box">
            <div className="uploaded-photo">
              <img
                src={preview}
                alt={isProfile ? "Profile preview" : "Family photo preview"}
              />

              <button
                type="button"
                className="remove-photo-btn"
                onClick={() => removePhoto(type)}
              >
                <X size={17} />
              </button>
            </div>

            <div className="uploaded-photo-info">
              <h5>
                {isProfile ? "Profile photo uploaded" : "Family photo uploaded"}
              </h5>

              <p>{file?.name || "Photo"}</p>

              <button
                type="button"
                className="change-photo-btn"
                onClick={() => openFilePicker(inputId)}
              >
                Change Photo
              </button>

              <input
                id={inputId}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => handleFileChange(e, type)}
                hidden
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Header />

      <main className="step-form-page">
        <section className="step-form">
          <Container>
            <div className="experience-header text-center">
              <span className="experience-tag mb-2">Create Profile</span>

              <h2>
                Tell Us About <span>You</span>
              </h2>
            </div>

            <div className="step-form-card">
              <div className="step-form-card-header">
                <div className="d-flex gap-2 align-items-center">
                  <div className="step-form-icon">
                    {currentStep === 2 ? (
                      <MapPin size={22} />
                    ) : currentStep === 7 ? (
                      <UsersRound size={22} />
                    ) : (
                      <UserRound size={22} />
                    )}
                  </div>

                  <div>
                    <h3>{stepData[currentStep - 1].title}</h3>
                  </div>
                </div>

                <div className="next-card">
                  Step {currentStep} of {totalSteps}
                  <StepForward size={18} />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Profile created for</label>

                          {renderSelect(
                            "profileFor",
                            profileForOptions,
                            "Select profile",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Gender</label>

                          <div className="radio-group">
                            <label className="radio-option">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleInputChange}
                              />

                              <span>Male</span>
                            </label>

                            <label className="radio-option">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleInputChange}
                              />

                              <span>Female</span>
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="name">
                            Full Name
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="dateOfBirth">
                            Date of Birth
                          </label>

                          <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Country</label>

                          {renderSelect(
                            "country",
                            countryOptions,
                            "Select country",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">State / Province</label>

                          {renderSelect(
                            "state",
                            stateOptions,
                            "Select state / province",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">District</label>

                          {renderSelect(
                            "district",
                            districtOptions,
                            "Select district",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">City / Town</label>

                          {renderSelect(
                            "city",
                            cityOptions,
                            "Select city / town",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="village">
                            Village
                          </label>

                          <input
                            id="village"
                            name="village"
                            type="text"
                            placeholder="Enter village name"
                            value={formData.village}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="area">
                            Area / Locality
                          </label>

                          <input
                            id="area"
                            name="area"
                            type="text"
                            placeholder="Enter area or locality"
                            value={formData.area}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="pinCode">
                            PIN / Postal Code
                          </label>

                          <input
                            id="pinCode"
                            name="pinCode"
                            type="text"
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="Enter PIN code"
                            value={formData.pinCode}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="address">
                            Full Address
                          </label>

                          <input
                            id="address"
                            name="address"
                            type="text"
                            placeholder="House no, street, landmark"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Religion</label>

                          {renderSelect(
                            "religion",
                            religionOptions,
                            "Select religion",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Mother Tongue</label>

                          {renderSelect(
                            "motherTongue",
                            motherTongueOptions,
                            "Select mother tongue",
                            true,
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Height</label>

                          {renderSelect(
                            "height",
                            heightOptions,
                            "Select height",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Marital Status</label>

                          {renderSelect(
                            "maritalStatus",
                            maritalStatusOptions,
                            "Select marital status",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Have Children?</label>

                          {renderSelect(
                            "children",
                            HaveChildren,
                            "Select children status",
                          )}
                        </div>
                      </Col>
                    </Row>

                    <div className="form-group full-width">
                      <label className="mt-3" htmlFor="about">
                        About Me
                      </label>

                      <textarea
                        id="about"
                        name="about"
                        rows="5"
                        placeholder="Tell potential matches something interesting about yourself. Minimum 25 words."
                        value={formData.about}
                        onChange={handleInputChange}
                      />

                      <div className="textarea-counter">
                        {countWords(formData.about)} / 25 minimum words
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Highest Education</label>

                          {renderSelect(
                            "education",
                            educationOptions,
                            "Select education",
                            true,
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Occupation</label>

                          {renderSelect(
                            "occupation",
                            occupationOptions,
                            "Select occupation",
                            true,
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Annual Income</label>

                          {renderSelect(
                            "income",
                            incomeOptions,
                            "Select income",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3" htmlFor="company">
                            Company / Organization
                          </label>

                          <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Diet</label>

                          {renderSelect("diet", dietOptions, "Select diet")}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Smoking</label>

                          <div className="radio-group">
                            {["no", "occasionally", "yes"].map((item) => (
                              <label className="radio-option" key={item}>
                                <input
                                  type="radio"
                                  name="smoking"
                                  value={item}
                                  checked={formData.smoking === item}
                                  onChange={handleInputChange}
                                />

                                <span>
                                  {item === "no"
                                    ? "No"
                                    : item === "occasionally"
                                      ? "Occasionally"
                                      : "Yes"}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Drinking</label>

                          <div className="radio-group">
                            {["no", "occasionally", "yes"].map((item) => (
                              <label className="radio-option" key={item}>
                                <input
                                  type="radio"
                                  name="drinking"
                                  value={item}
                                  checked={formData.drinking === item}
                                  onChange={handleInputChange}
                                />

                                <span>
                                  {item === "no"
                                    ? "No"
                                    : item === "occasionally"
                                      ? "Occasionally"
                                      : "Yes"}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Manglik Status</label>

                          <div className="radio-group">
                            <label className="radio-option">
                              <input
                                type="radio"
                                name="manglik"
                                value="manglik"
                                checked={formData.manglik === "manglik"}
                                onChange={handleInputChange}
                              />

                              <span>Manglik</span>
                            </label>

                            <label className="radio-option">
                              <input
                                type="radio"
                                name="manglik"
                                value="non-manglik"
                                checked={formData.manglik === "non-manglik"}
                                onChange={handleInputChange}
                              />

                              <span>Non Manglik</span>
                            </label>

                            <label className="radio-option">
                              <input
                                type="radio"
                                name="manglik"
                                value="dont-know"
                                checked={formData.manglik === "dont-know"}
                                onChange={handleInputChange}
                              />

                              <span>Don't Know</span>
                            </label>
                          </div>
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">
                            Ready to Settle Abroad?
                          </label>

                          <div className="radio-group">
                            <label className="radio-option">
                              <input
                                type="radio"
                                name="settleAbroad"
                                value="yes"
                                checked={formData.settleAbroad === "yes"}
                                onChange={handleInputChange}
                              />

                              <span>Yes</span>
                            </label>

                            <label className="radio-option">
                              <input
                                type="radio"
                                name="settleAbroad"
                                value="no"
                                checked={formData.settleAbroad === "no"}
                                onChange={handleInputChange}
                              />

                              <span>No</span>
                            </label>

                            <label className="radio-option">
                              <input
                                type="radio"
                                name="settleAbroad"
                                value="undecided"
                                checked={formData.settleAbroad === "undecided"}
                                onChange={handleInputChange}
                              />

                              <span>Undecided</span>
                            </label>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Preferred Age</label>

                          {renderSelect(
                            "preferredAge",
                            ageOptions,
                            "Select preferred age",
                            true,
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Preferred Religion</label>

                          {renderSelect(
                            "preferredReligion",
                            religionOptions,
                            "Select religion",
                            true,
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">
                            Preferred Mother Tongue
                          </label>

                          {renderSelect(
                            "preferredMotherTongue",
                            motherTongueOptions,
                            "Select mother tongue",
                            true,
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Preferred Education</label>

                          {renderSelect(
                            "preferredEducation",
                            educationOptions,
                            "Select education",
                            true,
                          )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}

                {currentStep === 7 && (
                  <div className="step-content">
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Father's Profession</label>

                          {renderSelect(
                            "fatherProfession",
                            fatherProfessionOptions,
                            "Select father's profession",
                          )}
                        </div>
                      </Col>

                      {formData.fatherProfession &&
                        !["not-working", "retired", "deceased"].includes(
                          formData.fatherProfession.value,
                        ) && (
                          <Col lg={6} md={6}>
                            <div className="form-group">
                              <label
                                className="mt-3"
                                htmlFor="fatherOccupation"
                              >
                                Father's Occupation
                              </label>

                              <input
                                id="fatherOccupation"
                                name="fatherOccupation"
                                type="text"
                                placeholder="Enter father's occupation"
                                value={formData.fatherOccupation}
                                onChange={handleInputChange}
                              />
                            </div>
                          </Col>
                        )}

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Mother's Profession</label>

                          {renderSelect(
                            "motherProfession",
                            motherProfessionOptions,
                            "Select mother's profession",
                          )}
                        </div>
                      </Col>

                      {formData.motherProfession &&
                        ![
                          "homemaker",
                          "not-working",
                          "retired",
                          "deceased",
                        ].includes(formData.motherProfession.value) && (
                          <Col lg={6} md={6}>
                            <div className="form-group">
                              <label
                                className="mt-3"
                                htmlFor="motherOccupation"
                              >
                                Mother's Occupation
                              </label>

                              <input
                                id="motherOccupation"
                                name="motherOccupation"
                                type="text"
                                placeholder="Enter mother's occupation"
                                value={formData.motherOccupation}
                                onChange={handleInputChange}
                              />
                            </div>
                          </Col>
                        )}

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Number of Brothers</label>

                          {renderSelect(
                            "brotherCount",
                            countOptions,
                            "Select number of brothers",
                          )}
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label className="mt-3">Number of Sisters</label>

                          {renderSelect(
                            "sisterCount",
                            countOptions,
                            "Select number of sisters",
                          )}
                        </div>
                      </Col>
                    </Row>

                    <div className="form-group full-width">
                      <label className="mt-3" htmlFor="familyAbout">
                        More About My Family
                      </label>

                      <textarea
                        id="familyAbout"
                        name="familyAbout"
                        rows="5"
                        placeholder="Tell us about your family, values, traditions, lifestyle and family background. Minimum 25 words."
                        value={formData.familyAbout}
                        onChange={handleInputChange}
                      />

                      <div className="textarea-counter">
                        {countWords(formData.familyAbout)} / 25 minimum words
                      </div>

                      <div className="sample-content">
                        <h5>Sample:</h5>

                        <p>
                          My father is a doctor in a private hospital and my
                          mother manages the home. My older sister is a software
                          engineer and my younger brother is doing MBA.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 8 && (
                  <div className="step-content">
                    <div className="profile-photo-section">
                      <div className="family-section-title">
                        <div className="family-section-icon">
                          <ImagePlus size={20} />
                        </div>

                        <div>
                          <h4>Profile Photo</h4>

                          <p>
                            Upload a clear recent photo where your face is
                            clearly visible.
                          </p>
                        </div>
                      </div>

                      <Row>
                        <Col md={6}>
                          <UploadBox
                            type="profile"
                            title="Drop your clear photo"
                            icon={<UserRoundPlus size={30} />}
                            inputId="profilePhotoInput"
                            preview={formData.profilePhotoPreview}
                            file={formData.profilePhoto}
                          />
                        </Col>

                        <Col md={6}>
                          <UploadBox
                            type="family"
                            title="Add your family photo"
                            icon={<UsersRound size={30} />}
                            inputId="familyPhotoInput"
                            preview={formData.familyPhotoPreview}
                            file={formData.familyPhoto}
                          />
                        </Col>
                      </Row>
                    </div>

                    <div className="form-group full-width">
                      <label className="mt-4" htmlFor="bio">
                        Write Your Bio
                      </label>

                      <textarea
                        id="bio"
                        name="bio"
                        rows="6"
                        placeholder="Write at least 25 words about yourself, your personality, interests, values, goals and what you are looking for in a partner."
                        value={formData.bio}
                        onChange={handleInputChange}
                      />

                      <div className="textarea-counter">
                        {countWords(formData.bio)} / 25 minimum words
                      </div>
                    </div>

                    <div className="profile-complete-box">
                      <div className="complete-icon">
                        <Check size={22} />
                      </div>

                      <div>
                        <h4>Almost there!</h4>

                        <p>
                          Complete your profile information and profile photo,
                          then finish your profile to start discovering
                          compatible matches.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="step-form-footer">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      className="step-back-btn"
                      onClick={handlePrevious}
                    >
                      <ChevronLeft size={18} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      className="step-next-btn"
                      onClick={handleNext}
                    >
                      Continue
                      <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button type="submit" className="step-next-btn">
                      Complete Profile
                      <Check size={18} />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default StepFormPage;
