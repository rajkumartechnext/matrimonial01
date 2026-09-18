"use client";

import { useState } from "react";
import Select from "react-select";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";

const initialFilters = {
  // Looking For
  bride: false,
  groom: false,

  // Single Select
  minAge: "",
  maxAge: "",
  minHeight: "",
  maxHeight: "",

  // Multi Select
  religion: [],
  motherTongue: [],
  income: [],
  maritalStatus: [],
  children: [],
  manglik: [],
  education: [],
  occupation: [],
  diet: [],
  smoke: [],
  settleAbroad: [],
  challenged: [],

  // Horoscope
  horoscopeYes: false,
  horoscopeDoesntMatter: false,

  // Drink
  drinkYes: false,
  drinkNo: false,
  drinkOccasionally: false,

  // HIV
  hivYes: false,
  hivNo: false,
};

const ageOptions = [
  { value: "18", label: "18" },
  { value: "21", label: "21" },
  { value: "25", label: "25" },
  { value: "30", label: "30" },
  { value: "35", label: "35" },
  { value: "40", label: "40" },
  { value: "45", label: "45" },
  { value: "50", label: "50+" },
];

const heightOptions = [
  { value: `4'6"`, label: `4'6"` },
  { value: `4'9"`, label: `4'9"` },
  { value: `5'0"`, label: `5'0"` },
  { value: `5'3"`, label: `5'3"` },
  { value: `5'6"`, label: `5'6"` },
  { value: `5'9"`, label: `5'9"` },
  { value: `6'0"`, label: `6'0"` },
  { value: `6'3"`, label: `6'3"` },
  { value: `6'6"`, label: `6'6"` },
];

const religionOptions = [
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Christian", label: "Christian" },
  { value: "Sikh", label: "Sikh" },
  { value: "Buddhist", label: "Buddhist" },
  { value: "Jain", label: "Jain" },
  { value: "Other", label: "Other" },
];

const motherTongueOptions = [
  { value: "Bengali", label: "Bengali" },
  { value: "Hindi", label: "Hindi" },
  { value: "English", label: "English" },
  { value: "Telugu", label: "Telugu" },
  { value: "Tamil", label: "Tamil" },
  { value: "Marathi", label: "Marathi" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Kannada", label: "Kannada" },
  { value: "Malayalam", label: "Malayalam" },
];

const incomeOptions = [
  {
    value: "below-2",
    label: "Below ₹2 Lakh",
  },
  {
    value: "2-5",
    label: "₹2 - ₹5 Lakh",
  },
  {
    value: "5-10",
    label: "₹5 - ₹10 Lakh",
  },
  {
    value: "10-20",
    label: "₹10 - ₹20 Lakh",
  },
  {
    value: "20-30",
    label: "₹20 - ₹30 Lakh",
  },
  {
    value: "30-plus",
    label: "₹30 Lakh+",
  },
];

const maritalOptions = [
  {
    value: "never-married",
    label: "Never Married",
  },
  {
    value: "divorced",
    label: "Divorced",
  },
  {
    value: "widowed",
    label: "Widowed",
  },
  {
    value: "separated",
    label: "Separated",
  },
];

const childrenOptions = [
  {
    value: "no",
    label: "No Children",
  },
  {
    value: "living-with",
    label: "Yes, Living With Me",
  },
  {
    value: "not-living",
    label: "Yes, Not Living With Me",
  },
  {
    value: "doesnt-matter",
    label: "Doesn't Matter",
  },
];

const manglikOptions = [
  {
    value: "manglik",
    label: "Manglik",
  },
  {
    value: "non-manglik",
    label: "Non Manglik",
  },
  {
    value: "partial",
    label: "Angshik (Partial Manglik)",
  },
];

const educationOptions = [
  {
    value: "be-btech",
    label: "B.E / B.Tech",
  },
  {
    value: "bpharma",
    label: "B.Pharma",
  },
  {
    value: "bfad",
    label: "B.FAD",
  },
  {
    value: "btech-llb",
    label: "B.Tech LL.B.",
  },
  {
    value: "cise",
    label: "CISE",
  },
  {
    value: "itil",
    label: "ITIL",
  },
  {
    value: "mftech",
    label: "M.FTech",
  },
  {
    value: "bftech",
    label: "B.FTech",
  },
];

const occupationOptions = [
  {
    value: "government",
    label: "Government / Public Sector",
  },
  {
    value: "civil-services",
    label: "Civil Services",
  },
  {
    value: "business",
    label: "Business / Self Employed",
  },
  {
    value: "not-working",
    label: "Not Working Currently",
  },
  {
    value: "defence",
    label: "Defence",
  },
];

const dietOptions = [
  {
    value: "vegetarian",
    label: "Vegetarian",
  },
  {
    value: "non-vegetarian",
    label: "Non Vegetarian",
  },
  {
    value: "jain",
    label: "Jain",
  },
  {
    value: "eggetarian",
    label: "Eggetarian",
  },
];

const smokeOptions = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
  {
    value: "occasionally",
    label: "Occasionally",
  },
];

const settleAbroadOptions = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
  {
    value: "undecided",
    label: "Undecided",
  },
];

const challengedOptions = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "physical-birth",
    label: "Physically - From birth",
  },
  {
    value: "physical-accident",
    label: "Physically - Due to accident",
  },
  {
    value: "mental-accident",
    label: "Mentally - Due to accident",
  },
  {
    value: "mental-birth",
    label: "Mentally - From birth",
  },
];

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

const ProfileSearch = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    ...initialFilters,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value || [],
    }));
  };

  const handleSingleSelectChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleReset = () => {
    setFilters({
      ...initialFilters,
    });

    setSearchText("");
    setShowMoreFilters(false);
  };

  const handleApply = () => {
    console.log("Applied Filters:", {
      search: searchText,
      ...filters,
    });

    setShowFilters(false);
  };

  const handleSearch = () => {
    console.log("Search:", {
      search: searchText,
      ...filters,
    });
  };

  const renderSelect = (name, options, placeholder = "Select") => {
    return (
      <Select
        isMulti
        isSearchable
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        options={options}
        value={filters[name] || []}
        onChange={(selected) => handleSelectChange(name, selected)}
        placeholder={placeholder}
        styles={multiSelectStyles}
        classNamePrefix="profile-select"
        noOptionsMessage={() => "No options found"}
        menuPortalTarget={
          typeof document !== "undefined" ? document.body : null
        }
      />
    );
  };

  const renderSingleSelect = (name, options, placeholder = "Select") => {
    return (
      <Select
        isSearchable
        isClearable
        closeMenuOnSelect={true}
        options={options}
        value={filters[name] || null}
        onChange={(selected) => handleSingleSelectChange(name, selected)}
        placeholder={placeholder}
        styles={multiSelectStyles}
        classNamePrefix="profile-select"
        noOptionsMessage={() => "No options found"}
        menuPortalTarget={
          typeof document !== "undefined" ? document.body : null
        }
      />
    );
  };

  return (
    <div className="profile-search-wrapper">
      <div
        className={`search-bar ${showFilters ? "active" : ""}`}
        onClick={() => setShowFilters(true)}
      >
        <Search className="search-icon" size={18} />

        <input
          type="text"
          placeholder="Search profiles..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />

        <button
          type="button"
          className="filter-toggle"
          onClick={(e) => {
            e.stopPropagation();

            setShowFilters((prev) => !prev);
          }}
        >
          <SlidersHorizontal size={17} />

          <span>Filters</span>

          <ChevronDown size={16} className={showFilters ? "rotate" : ""} />
        </button>

        <button
          type="button"
          className="search-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      {showFilters && (
        <div
          className="profile-filter-dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="filter-section">
            <h4>Looking For</h4>

            <div className="check-gender">
              <div className="checkbox-grid">
                <label>
                  <input
                    type="checkbox"
                    name="bride"
                    checked={filters.bride}
                    onChange={handleCheckboxChange}
                  />

                  <span>Bride</span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="groom"
                    checked={filters.groom}
                    onChange={handleCheckboxChange}
                  />

                  <span>Groom</span>
                </label>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <h4>Age</h4>

            <div className="form-group">
              {renderSingleSelect("minAge", ageOptions, "Min Age")}

              {renderSingleSelect("maxAge", ageOptions, "Max Age")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Height</h4>

            <div className="form-group">
              {renderSingleSelect("minHeight", heightOptions, "Min Height")}

              {renderSingleSelect("maxHeight", heightOptions, "Max Height")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Religion</h4>

            <div className="form-group">
              {renderSelect("religion", religionOptions, "Select Religion")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Mother Tongue</h4>

            <div className="form-group">
              {renderSelect(
                "motherTongue",
                motherTongueOptions,
                "Select Mother Tongue",
              )}
            </div>
          </div>
          <div className="filter-section">
            <h4>Income</h4>

            <div className="form-group">
              {renderSelect("income", incomeOptions, "Select Income")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Marital Status</h4>

            <div className="form-group">
              {renderSelect("maritalStatus", maritalOptions, "Select Status")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Have Children</h4>

            <div className="form-group">
              {renderSelect("children", childrenOptions, "Select")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Manglik Status</h4>

            <div className="form-group">
              {renderSelect("manglik", manglikOptions, "Select Manglik Status")}
            </div>
          </div>

          <div className="filter-section">
            <h4>Horoscope Available?</h4>

            <div className="checkbox-grid">
              <label>
                <input
                  type="checkbox"
                  name="horoscopeYes"
                  checked={filters.horoscopeYes}
                  onChange={handleCheckboxChange}
                />

                <span>Yes</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  name="horoscopeDoesntMatter"
                  checked={filters.horoscopeDoesntMatter}
                  onChange={handleCheckboxChange}
                />

                <span>Doesn't Matter</span>
              </label>
            </div>
          </div>

          <div className="more-filters">
            <button
              type="button"
              className={`more-filter-toggle ${
                showMoreFilters ? "active" : ""
              }`}
              onClick={() => setShowMoreFilters((prev) => !prev)}
            >
              <SlidersHorizontal size={16} />

              <span>More Filters</span>

              <ChevronDown
                size={16}
                className={showMoreFilters ? "rotate" : ""}
              />
            </button>

            {showMoreFilters && (
              <div className="more-filter-content">
                <div className="filter-section">
                  <h4>Highest Education</h4>

                  <div className="form-group">
                    {renderSelect(
                      "education",
                      educationOptions,
                      "Select Education",
                    )}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Occupation</h4>

                  <div className="form-group">
                    {renderSelect(
                      "occupation",
                      occupationOptions,
                      "Select Occupation",
                    )}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Diet</h4>

                  <div className="form-group">
                    {renderSelect("diet", dietOptions, "Select Diet")}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Drink</h4>

                  <div className="checkbox-grid">
                    <label>
                      <input
                        type="checkbox"
                        name="drinkYes"
                        checked={filters.drinkYes}
                        onChange={handleCheckboxChange}
                      />

                      <span>Yes</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="drinkNo"
                        checked={filters.drinkNo}
                        onChange={handleCheckboxChange}
                      />

                      <span>No</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="drinkOccasionally"
                        checked={filters.drinkOccasionally}
                        onChange={handleCheckboxChange}
                      />

                      <span>Occasionally</span>
                    </label>
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Smoke</h4>

                  <div className="form-group">
                    {renderSelect(
                      "smoke",
                      smokeOptions,
                      "Select Smoking Preference",
                    )}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Ready to settle abroad?</h4>

                  <div className="form-group">
                    {renderSelect(
                      "settleAbroad",
                      settleAbroadOptions,
                      "Select",
                    )}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Challenged</h4>

                  <div className="form-group">
                    {renderSelect("challenged", challengedOptions, "Select")}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>HIV+?</h4>

                  <div className="checkbox-grid">
                    <label>
                      <input
                        type="checkbox"
                        name="hivYes"
                        checked={filters.hivYes}
                        onChange={handleCheckboxChange}
                      />

                      <span>Yes</span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="hivNo"
                        checked={filters.hivNo}
                        onChange={handleCheckboxChange}
                      />

                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="filter-footer">
            <button type="button" className="cta-btn-2nd" onClick={handleReset}>
              Reset
            </button>

            <button type="button" className="search-btn" onClick={handleApply}>
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSearch;
