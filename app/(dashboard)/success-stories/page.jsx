"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  CalendarDays,
  ChevronDown,
  Heart,
  Plus,
  Upload,
  X,
  Home,
  ChevronRight,
} from "lucide-react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import Link from "next/link";

const successStories = [
  {
    image: "/images/hero1.png",
    date: "January 15, 2023",
    category: "A Beautiful Beginning",
    title: "Two Hearts, One Beautiful Journey",
    description:
      "Our success stories are a testament to the power of love and the impact of our platform. We are proud to have played a role in bringing together countless couples who have found their perfect match through our services. Each story is unique, filled with joy, laughter, and the promise of a bright future together.",
    coupleNames: ["Rahul Das", "Sneha Roy"],
    profileImages: ["/images/matches/no-3.jpg", "/images/matches/no-1.jpg"],
    weddingDate: "15 January 2023",
  },
  {
    image: "/images/hero2.png",
    date: "January 15, 2023",
    category: "Made for Each Other",
    title: "A Match That Turned Into Forever",
    description:
      "Our success stories are a testament to the power of love and the impact of our platform. We are proud to have played a role in bringing together countless couples who have found their perfect match through our services. Each story is unique, filled with joy, laughter, and the promise of a bright future together.",
    coupleNames: ["Arjun Sharma", "Priya Singh"],
    profileImages: ["/images/matches/no-2.jpg", "/images/matches/no-4.jpg"],
    weddingDate: "22 March 2023",
  },
  {
    image: "/images/hero3.png",
    date: "February 14, 2024",
    category: "A Love Written in the Stars",
    title: "From a Perfect Match to Forever",
    description:
      "Sometimes, the most beautiful relationships begin with a simple introduction. Through our platform, two hearts discovered a special connection built on trust, understanding, and shared dreams. Their journey is a beautiful reminder that the right person can turn an ordinary day into the beginning of something extraordinary.",
    coupleNames: ["Amit Ghosh", "Riya Das"],
    profileImages: ["/images/matches/no-5.jpg", "/images/matches/no-1.jpg"],
    weddingDate: "14 February 2024",
  },
  {
    image: "/images/hero4.png",
    date: "November 20, 2024",
    category: "Together Is a Beautiful Place",
    title: "Finding Love, Building a Future",
    description:
      "What started as two families connecting soon blossomed into a wonderful love story. With shared values, mutual respect, and endless support, they found everything they had been hoping for in a life partner. Today, they look forward to building a happy future together, proving that meaningful connections can last a lifetime.",
    coupleNames: ["Sourav Mukherjee", "Ananya Sen"],
    profileImages: ["/images/matches/no-3.jpg", "/images/matches/no-4.jpg"],
    weddingDate: "20 November 2024",
  },
  {
    image: "/images/wedding.mp4",
    date: "November 20, 2024",
    category: "Together Is a Beautiful Place",
    title: "A Celebration of True Love",
    description:
      "Their journey began with a simple introduction and grew into a beautiful relationship filled with care, laughter, and understanding. With the support of their families, they discovered that the best relationships are built on friendship, trust, and shared dreams for the future.",
    coupleNames: ["Kunal Banerjee", "Moumita Paul"],
    profileImages: ["/images/matches/no-2.jpg", "/images/matches/no-5.jpg"],
    weddingDate: "8 December 2024",
  },
  {
    image: "/images/wedding1.mp4",
    date: "December 12, 2024",
    category: "Forever Starts Here",
    title: "A Beautiful Promise for Tomorrow",
    description:
      "What began as a thoughtful match soon became a lifelong commitment. They connected through their shared values, supported each other's ambitions, and found happiness in the little things. Their story reminds us that meaningful relationships grow stronger through respect, patience, and genuine affection.",
    coupleNames: ["Debjit Chatterjee", "Ishita Dey"],
    profileImages: ["/images/matches/no-1.jpg", "/images/matches/no-3.jpg"],
    weddingDate: "12 December 2024",
  },
];

function Page() {
  const [expandedStories, setExpandedStories] = useState({});
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    about: "",
  });
  const [storyImage, setStoryImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [validated, setValidated] = useState(false);
  const fileInputRef = useRef(null);

  const handleClose = () => {
    setShow(false);
    setValidated(false);
    setDragActive(false);
  };

  const handleShow = () => setShow(true);

  const countWords = (text = "") => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "video/mp4"];

    if (!allowedTypes.includes(file.type)) {
      window.alert("Please upload a JPG, PNG, WEBP, or MP4 file.");
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      window.alert("File size must not exceed 50MB.");
      return;
    }

    setStoryImage(file);

    setImagePreview((current) => {
      if (current) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
      return;
    }

    if (countWords(formData.about) < 25) {
      return;
    }

    if (!storyImage) {
      window.alert("Please upload a story image or video.");
      return;
    }

    const newStory = {
      name: formData.name.trim(),
      date: formData.date,
      description: formData.about.trim(),
      media: storyImage,
      mediaType: storyImage.type.startsWith("video/") ? "video" : "image",
    };

    console.log("New success story:", newStory);

    window.alert("Your success story has been validated successfully.");

    setFormData({
      name: "",
      date: "",
      about: "",
    });

    setStoryImage(null);
    setImagePreview((current) => {
      if (current) URL.revokeObjectURL(current);
      return "";
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setValidated(false);
    setShow(false);
  };

  return (
    <div>
      <Header />

      <section className="about-breadcrumb">
        <Container>
          <div className="about-breadcrumb-content">
            <div className="about-breadcrumb-text">
              <h1>Success Stories</h1>
              <span className="about-breadcrumb-small">
                Find Your Perfect Match
              </span>
            </div>

            <nav className="about-breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">
                <Home size={15} />
                <span>Home</span>
              </Link>

              <ChevronRight size={15} />

              <span className="active">Success Stories</span>
            </nav>
          </div>
        </Container>
      </section>

      <section className="success-stories-section">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="experience-header m-0">
              <span className="experience-tag">Real Love Stories</span>
              <h2>
                Every Match Begins a <span>Beautiful Forever</span>
              </h2>
            </div>

            <button className="floating-button" onClick={handleShow}>
              <div className="floating-button-content">
                <Plus size={20} />
                <span>Add Story</span>
              </div>
            </button>
          </div>

          <Row className="g-4">
            {successStories.map((story) => (
              <Col xl={6} md={6} sm={12} key={story.image}>
                <article className="success-story-card">
                  <div className="post-profile">
                    <div className="post-profile-image">
                      <img
                        src={story.profileImages[0]}
                        alt={story.coupleNames[0]}
                        className="img-fluid overlap-image"
                      />
                      <img
                        src={story.profileImages[1]}
                        alt={story.coupleNames[1]}
                        className="img-fluid overlap-image01"
                      />
                    </div>

                    <div className="post-profile-info">
                      <h5>
                        <a href="/matches/profileDetails">
                          {story.coupleNames[0]}
                        </a>
                        and
                        <a href="/matches/profileDetails">
                          {story.coupleNames[1]}
                        </a>
                      </h5>
                      <span>{story.weddingDate}</span>
                    </div>
                  </div>

                  <div className="success-story-image">
                    {story.image.toLowerCase().endsWith(".mp4") ? (
                      <video
                        src={story.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="img-fluid"
                        width={600}
                      />
                    ) : (
                      <img
                        src={story.image}
                        alt={story.title}
                        width={600}
                        height={400}
                        className="img-fluid"
                      />
                    )}

                    <span className="success-story-category">
                      <Heart size={14} fill="currentColor" />
                      {story.category}
                    </span>
                  </div>

                  <div className="success-story-body">
                    <div className="success-story-date">
                      <CalendarDays size={16} />
                      <span>{story.date}</span>
                    </div>

                    <h3>{story.title}</h3>

                    <p
                      className={`success-story-description${
                        expandedStories[story.image] ? " is-expanded" : ""
                      }`}
                    >
                      {story.description}
                    </p>

                    <button
                      type="button"
                      className="success-story-link success-story-toggle"
                      aria-expanded={Boolean(expandedStories[story.image])}
                      onClick={() =>
                        setExpandedStories((current) => ({
                          ...current,
                          [story.image]: !current[story.image],
                        }))
                      }
                    >
                      {expandedStories[story.image] ? "Read less" : "Read more"}

                      <span className="success-story-arrow">
                        <ChevronDown
                          size={18}
                          className={
                            expandedStories[story.image] ? "rotate-icon" : ""
                          }
                        />
                      </span>
                    </button>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />

      <Modal show={show} onHide={handleClose} centered>
        <form noValidate onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Success Story</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col lg={6} md={6}>
                <div className="form-group">
                  <label className="mt-3" htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <div className="invalid-feedback">
                    Please enter your full name.
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6}>
                <div className="form-group">
                  <label className="mt-3" htmlFor="name">
                    Partner Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your partner's full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <div className="invalid-feedback">
                    Please enter your Partner Name.
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6}>
                <div className="form-group">
                  <label className="mt-3" htmlFor="name">
                    Your Email Address
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <div className="invalid-feedback">
                    Please enter your Email Address.
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6}>
                <div className="form-group">
                  <label className="mt-3" htmlFor="date">
                    Wedding Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                  <div className="invalid-feedback">
                    Please select your wedding date.
                  </div>
                </div>
              </Col>

              <Col xs={12}>
                <div className="profile-upload-wrapper mt-3">
                  <div
                    className={`profile-upload-box ${
                      dragActive ? "drag-active" : ""
                    }`}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragActive(false);
                      handleFileChange(e.dataTransfer.files?.[0]);
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        fileInputRef.current?.click();
                      }
                    }}
                  >
                    <input
                      ref={fileInputRef}
                      id="storyImage"
                      type="file"
                      accept="image/jpeg,image/png,image/webp,video/mp4"
                      onChange={(e) => handleFileChange(e.target.files?.[0])}
                      hidden
                    />

                    {imagePreview ? (
                      <div className="prev-img">
                        {storyImage?.type.startsWith("video/") ? (
                          <video
                            src={imagePreview}
                            controls
                            playsInline
                            preload="metadata"
                            className="img-fluid rounded mb-2"
                            style={{
                              maxHeight: "180px",
                              maxWidth: "100%",
                            }}
                            onClick={(e) => e.stopPropagation()}
                          />
                        ) : (
                          <img
                            src={imagePreview}
                            alt="Story preview"
                            className="img-fluid rounded mb-2"
                            style={{
                              maxHeight: "180px",
                              objectFit: "contain",
                            }}
                          />
                        )}

                        <p className="mb-0">{storyImage?.name}</p>

                        <button
                          type="button"
                          className="remove-photo-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setStoryImage(null);
                            setImagePreview((current) => {
                              if (current) URL.revokeObjectURL(current);
                              return "";
                            });

                            if (fileInputRef.current) {
                              fileInputRef.current.value = "";
                            }
                          }}
                        >
                          <X size={17} />
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <div className="upload-icon">
                          <Upload size={28} />
                        </div>

                        <div className="upload-text">
                          <h5>Upload Your Story Image or Video</h5>

                          <p>
                            or <span>browse from your device</span>
                          </p>

                          <small>
                            JPG, PNG, WEBP or MP4 • Maximum file size 50MB
                          </small>
                        </div>
                      </div>
                    )}
                  </div>

                  {validated && !storyImage && (
                    <div className="text-danger small mt-1">
                      Please upload a story image or video.
                    </div>
                  )}
                </div>
              </Col>

              <Col xs={12}>
                <div className="form-group">
                  <label className="mt-3" htmlFor="about">
                    About Success Story (Minimum 25 words)
                  </label>

                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    className={`form-control ${
                      validated && countWords(formData.about) < 25
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Write about your success story..."
                    value={formData.about}
                    onChange={handleChange}
                    required
                  />

                  <div className="textarea-counter">
                    {countWords(formData.about)} / 25 minimum words
                  </div>

                  {validated && countWords(formData.about) < 25 && (
                    <div className="text-danger small mt-1">
                      Your story must contain at least 25 words.
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="mycancel" onClick={handleClose}>
              Close
            </button>

            <button type="submit" className="primarybtn">
              Upload Story
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
