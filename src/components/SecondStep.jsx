import React from "react";
import Input from "./Input";
import Button from "./Button";

const SecondStep = ({
  nextStep,
  prevStep,
  formData,
  updateFormData,
  errors,
}) => {
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
              error={errors.email}
            />
            <Input
              type="text"
              text="Phone number "
              placeholder="Your phone number"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData("phoneNumber", e.target.value)}
              error={errors.phoneNumber}
            />
            <Input
              type="password"
              text="Password "
              placeholder="Your password"
              value={formData.password}
              onChange={(e) => updateFormData("password", e.target.value)}
              error={errors.password}
            />
            <Input
              type="password"
              text="Confirm password "
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={(e) =>
                updateFormData("confirmPassword", e.target.value)
              }
              error={errors.confirmPassword}
            />
          </div>
        </div>
        <Button step={2} onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
};

export default SecondStep;
