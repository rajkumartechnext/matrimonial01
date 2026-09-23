"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookImage,
  Upload,
  X,
  Trash2,
} from "lucide-react";
import Modal from "react-bootstrap/Modal";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { toast } from "react-hot-toast";

const ProfileSlider = () => {
  const profile = {
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
    compatible: "Most Compatible",
    images: [
      "/images/matches/no-1.jpg",
      "/images/matches/no-2.jpg",
      "/images/matches/no-3.jpg",
      "/images/matches/no-4.jpg",
    ],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [lgShow, setLgShow] = useState(false);
  const [galleryImages, setGalleryImages] = useState(profile.images);

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const [removeModal, setRemoveModal] = useState(false);
  const [removeIndex, setRemoveIndex] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!lgShow) {
      return;
    }

    const timer = setTimeout(() => {
      Fancybox.bind("[data-fancybox='profile-gallery']", {
        Thumbs: {
          type: "classic",
          showOnStart: true,
        },

        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [
              "zoomIn",
              "zoomOut",
              "toggle1to1",
              "rotateCCW",
              "rotateCW",
            ],
            right: ["slideshow", "fullscreen", "close"],
          },
        },

        Carousel: {
          infinite: true,
        },

        Images: {
          zoom: true,
        },

        hideScrollbar: false,
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      Fancybox.unbind("[data-fancybox='profile-gallery']");
    };
  }, [lgShow, galleryImages]);

  const nextImage = () => {
    if (galleryImages.length === 0) {
      return;
    }

    setCurrentImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const previousImage = () => {
    if (galleryImages.length === 0) {
      return;
    }

    setCurrentImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const validateFile = (selectedFile) => {
    if (!selectedFile) {
      return false;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(selectedFile.type)) {
      toast.error("Please select a JPG, PNG or WEBP image.");
      return false;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error("Maximum file size is 5MB.");
      return false;
    }

    return true;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      handleFile(selectedFile);
    }

    e.target.value = "";
  };

  const handleFile = (selectedFile) => {
    if (!validateFile(selectedFile)) {
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    const previewUrl = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreview(previewUrl);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];

    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const openFilePicker = (e) => {
    if (e) {
      e.stopPropagation();
    }

    inputRef.current?.click();
  };

  const removePhoto = (e) => {
    if (e) {
      e.stopPropagation();
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(null);
    setFile(null);
    setDragActive(false);
  };

  const handleUpload = () => {
    if (!preview || !file) {
      toast.error("Please select an image first.");
      return;
    }

    const uploadedImage = preview;

    setGalleryImages((prev) => {
      const newImages = [...prev, uploadedImage];

      setCurrentImage(newImages.length - 1);

      return newImages;
    });

    setPreview(null);
    setFile(null);
    setDragActive(false);

    toast.success("Image successfully uploaded");
  };

  const openRemoveModal = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    setRemoveIndex(index);
    setRemoveModal(true);
  };

  const closeRemoveModal = () => {
    setRemoveModal(false);
    setRemoveIndex(null);
  };

  const confirmRemove = () => {
    if (removeIndex === null) {
      return;
    }

    const removedImage = galleryImages[removeIndex];

    if (typeof removedImage === "string" && removedImage.startsWith("blob:")) {
      URL.revokeObjectURL(removedImage);
    }

    setGalleryImages((prev) => {
      const updatedImages = prev.filter((_, index) => index !== removeIndex);

      if (updatedImages.length === 0) {
        setCurrentImage(0);
      } else if (currentImage >= updatedImages.length) {
        setCurrentImage(updatedImages.length - 1);
      } else if (removeIndex < currentImage) {
        setCurrentImage((prev) => prev - 1);
      }

      return updatedImages;
    });

    setRemoveModal(false);
    setRemoveIndex(null);

    toast.success("Image successfully removed");
  };

  const handleModalClose = () => {
    setLgShow(false);
  };

  return (
    <>
      <div className="profile-details-wrapper">
        <div className="mateches-profile">
          <div className="profile-image-slider">
            {galleryImages.length > 0 ? (
              <img
                src={galleryImages[currentImage]}
                alt={`${profile.name} ${currentImage + 1}`}
                className="profile-card-image"
              />
            ) : (
              <div className="profile-no-image">
                <BookImage size={40} />
                <span>No photos available</span>
              </div>
            )}

            {galleryImages.length > 1 && (
              <button
                type="button"
                className="profile-slider-arrow profile-slider-prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {galleryImages.length > 1 && (
              <button
                type="button"
                className="profile-slider-arrow profile-slider-next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          <div className="details-overlay">
            <div className="profile-card-top"></div>

            <div className="text-center">
              <button
                type="button"
                className="add-button"
                onClick={() => setLgShow(true)}
              >
                <BookImage size={17} />
                Add More Photos
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={handleModalClose}
        centered
        className="profile-photos-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>All Photos</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="all-photos">
            <div className="fancybox-gallery profile-fancybox-gallery">
              {galleryImages.map((image, index) => (
                <div className="image-item" key={`${image}-${index}`}>
                  <a
                    href={image}
                    data-fancybox="profile-gallery"
                    data-caption={`${profile.name} - Photo ${index + 1}`}
                    className="fancybox-image-link"
                  >
                    <img src={image} alt={`${profile.name} ${index + 1}`} />
                  </a>

                  <button
                    type="button"
                    className="remove-photo"
                    onClick={(e) => openRemoveModal(index, e)}
                    aria-label="Remove photo"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="profile-upload-wrapper">
              {!preview ? (
                <div
                  className={`profile-upload-box ${
                    dragActive ? "drag-active" : ""
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={openFilePicker}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleFileChange}
                    hidden
                  />

                  <div className="upload-icon">
                    <Upload size={28} />
                  </div>

                  <h5>Add Profile Photo</h5>

                  <p>
                    or <span>browse from your device</span>
                  </p>

                  <small>JPG, PNG or WEBP • Maximum file size 5MB</small>
                </div>
              ) : (
                <div className="uploaded-photo-box">
                  <div className="uploaded-photo">
                    <img src={preview} alt="Profile preview" />

                    <button
                      type="button"
                      className="remove-photo-btn"
                      onClick={removePhoto}
                    >
                      <X size={17} />
                    </button>
                  </div>

                  <div className="uploaded-photo-info">
                    <h5>Profile photo selected</h5>

                    <p>{file?.name || "Photo"}</p>

                    <span>
                      {file ? (file.size / 1024 / 1024).toFixed(2) : "0.00"} MB
                    </span>

                    <button
                      type="button"
                      className="change-photo-btn"
                      onClick={openFilePicker}
                    >
                      Change Photo
                    </button>

                    <input
                      ref={inputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleFileChange}
                      hidden
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="upload-action">
              <button
                type="button"
                className="primarybtn"
                onClick={handleUpload}
                disabled={!preview}
              >
                <Upload size={16} />
                Upload Image
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={removeModal}
        onHide={closeRemoveModal}
        centered
        className="remove-photo-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove Photo</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <div className="remove-photo-icon">
            <Trash2 size={35} />
          </div>

          <h5>Are you sure you want to remove this image?</h5>

          <p>This photo will be removed from your profile gallery.</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="mycancel" onClick={closeRemoveModal}>
            Cancel
          </button>

          <button className="primarybtn" onClick={confirmRemove}>
            Remove Image
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileSlider;
