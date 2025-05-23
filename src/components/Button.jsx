import React from "react";

const Button = ({ step, onNext, onBack }) => {
  return (
    <div className="flex gap-2">
      {onBack && (
        <div
          onClick={onBack}
          className="flex justify-center items-center w-[40%] bg-white rounded-md border border-[#CBD5E1] text-[#202124] py-3 px-2.5 gap-1 "
        >
          <img src="./chevron_left.svg" alt="right icon" />
          <p>Back</p>
        </div>
      )}

      <div
        onClick={onNext}
        className="flex justify-center items-center w-full bg-[#121316] rounded-md text-white py-3 px-2.5 gap-1"
      >
        <p>Continue</p>
        <p>{step}/3</p>
        <img src="./chevron_right.svg" alt="right icon" />
      </div>
    </div>
  );
};

export default Button;
