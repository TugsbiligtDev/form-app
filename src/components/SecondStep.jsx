import React from "react";
import Input from "./Input";
import Button from "./Button";

const SecondStep = ({ nextStep, prevStep, formData, updateFormData }) => {
  const handleSubmit = () => {
    const validationErrors = () => {};
    if (!formData.email) {
      validationErrors.email = "Please provide a valid email address.";
    }
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = "Please enter a valid phone number.";
    }
    if (!formData.password) {
      validationErrors.password = "Password must include letters and numbers.";
    }
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword =
        "Passwords do not match. Please try again.";
    }
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
              type="email"
              text="Email "
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
            />
            <Input
              type="number"
              text="Phone number "
              placeholder="Your phone number"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData("phoneNumber", e.target.value)}
            />
            <Input
              type="password"
              text="Password "
              placeholder="Your password"
              value={formData.password}
              onChange={(e) => updateFormData("password", e.target.value)}
            />
            <Input
              type="password"
              text="Confirm password "
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) =>
                updateFormData("confirmPassword", e.target.value)
              }
            />
          </div>
        </div>
        <Button step={2} onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
};

export default SecondStep;
