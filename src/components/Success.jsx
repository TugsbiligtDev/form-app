import React from "react";

const Success = ({ formData }) => {
  console.log("Form Data:", formData);

  return (
    <div className="w-[480px] h-auto bg-white rounded-md p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-2 pb-7">
        <img src="./logo.png" alt="logo" width={60} height={60} />
        <h2 className="text-[#202124] text-[26px] font-semibold ">
          You're All Set 🔥
        </h2>
        <p className="text-[#8E8E8E] text-lg font-normal">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};

export default Success;
