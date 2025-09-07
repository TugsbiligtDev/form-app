import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const ThirdStep = ({
  nextStep,
  prevStep,
  formData,
  updateFormData,
  errors,
}) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFile = (file) => {
    if (!file.type.startsWith("image/")) {
      updateFormData("profileImageError", "Please upload an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      // Set error in the main form's error state
      updateFormData("profileImageError", "Image size should be less than 5MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
      updateFormData("profileImage", file);
      // Clear any file validation errors on successful upload
      updateFormData("profileImageError", "");
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    updateFormData("profileImage", null);
    // Clear any file validation errors when removing image
    updateFormData("profileImageError", "");
  };

  return (
    <div>
      <div className="w-[480px] h-[655px] bg-white rounded-md p-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-col gap-2 pb-7">
            <img src="./logo.png" alt="logo" width={60} height={60} />
            <h2 className="text-[#202124] text-[26px] font-semibold ">
              Join Us! 😎
            </h2>
            <p className="text-[#8E8E8E] text-lg font-normal">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              type="date"
              text="Date of birth "
              placeholder="--/----"
              value={formData.birth}
              onChange={(e) => updateFormData("birth", e.target.value)}
              error={errors.birth}
              max={new Date().toISOString().split("T")[0]}
            />
            <p className="text-[#334155] text-sm font-semibold leading-4">
              Profile image <span className="text-[#E14942]">*</span>
            </p>

            <AnimatePresence mode="wait">
              {imagePreview ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-[180px] rounded-md overflow-hidden"
                >
                  <img
                    src={imagePreview}
                    alt="Profile preview"
                    className="w-full h-full object-cover"
                  />
                  <motion.button
                    onClick={removeImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-3 right-3 bg-[#202124] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-[#2d2f35] transition-colors "
                  >
                    ×
                  </motion.button>
                </motion.div>
              ) : (
                <label
                  htmlFor="file-upload"
                  className="w-full h-[180px] rounded-md bg-[#7F7F800D] flex flex-col justify-center items-center gap-2 cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col justify-center items-center gap-2"
                  >
                    <img src="./pic.svg" alt="pic" />
                    <p className="text-[#09090B] text-sm font-medium">
                      Add image
                    </p>
                  </motion.div>
                </label>
              )}
            </AnimatePresence>

            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />

            <AnimatePresence>
              {(errors.profileImage || errors.profileImageError) && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-red-500 text-sm"
                >
                  {errors.profileImage || errors.profileImageError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        <Button step={3} onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
};

export default ThirdStep;
