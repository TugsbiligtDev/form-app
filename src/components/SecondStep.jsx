import React from "react";
import Input from "./Input";
import Button from "./Button";

const SecondStep = ({ nextStep, prevStep }) => {
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
            <Input type="email" text="Email " value="Your email" />
            <Input
              type="number"
              text="Phone number "
              value="Your phone number"
            />
            <Input type="password" text="Password " value="Your password" />
            <Input
              type="password"
              text="Confirm password "
              value="Confirm password"
            />
          </div>
        </div>
        <Button step={2} onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
};

export default SecondStep;
