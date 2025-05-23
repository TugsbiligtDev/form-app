import React from "react";
import Input from "./Input";
import Button from "./Button";

const ThirdStep = ({ nextStep, prevStep }) => {
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
            <Input type="date" text="Date of birth " placeholder="--/--/--" />
            <p className="text-[#334155] text-sm font-semibold leading-4">
              Profile image <span className="text-[#E14942]">*</span>
            </p>
            <div className="w-full h-[180px] rounded-md bg-[#7F7F800D] flex flex-col justify-center items-center gap-2">
              <img src="./pic.svg" alt="pic" />
              <p className="text-[#09090B] text-sm font-medium">Add image</p>
            </div>
          </div>
        </div>
        <Button step={3} onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
};

export default ThirdStep;
