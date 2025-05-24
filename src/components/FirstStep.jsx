import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const FirstStep = ({ nextStep, formData, updateFormData, errors }) => {
  return (
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
            type="text"
            text="First name"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={(e) => updateFormData("firstName", e.target.value)}
            error={errors.firstName}
          />
          <Input
            type="text"
            text="Last name "
            placeholder="Your last name"
            value={formData.lastName}
            onChange={(e) => updateFormData("lastName", e.target.value)}
            error={errors.lastName}
          />
          <Input
            type="text"
            text="Username "
            placeholder="Your username"
            value={formData.userName}
            onChange={(e) => updateFormData("userName", e.target.value)}
            error={errors.userName}
          />
        </div>
      </div>

      <Button step={1} onNext={nextStep} />
    </div>
  );
};

export default FirstStep;
