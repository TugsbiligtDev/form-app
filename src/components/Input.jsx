import React from "react";

const Input = ({ text, placeholder, type, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#334155] text-sm font-semibold leading-4">
        {text} <span className="text-[#E14942]">*</span>
      </p>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-[#8B8E95] rounded-lg p-2 outline-[#0CA5E9] text-base font-normal"
        value={value}
        onChange={onChange}
      />
      {/* <p className="text-[#E14942] text-sm font-normal">{error}</p> */}
    </div>
  );
};

export default Input;
