import React from "react";
import Input from "./Input";

const FirstStep = () => {
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
          <Input text="First name" value="Your first name" />
          <Input text="Last name " value="Your last name" />
          <Input text="Username " value="Your username" />
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-[#121316] rounded-md text-white py-3 px-2.5 gap-1">
        <p>Continue</p>
        <p>1/3</p>
        <img src="./chevron_right.svg" alt="right icon" />
      </div>
    </div>
  );
};

export default FirstStep;
