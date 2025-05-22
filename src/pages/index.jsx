import FirstStep from "@/components/FirstStep";
import SecondStep from "@/components/SecondStep";
import ThirdStep from "@/components/ThirdStep";
import React from "react";

const index = () => {
  return (
    <div className="h-screen w-screen bg-[#F4F4F4] flex justify-center items-center  gap-20">
      <FirstStep />
      <SecondStep />
      <ThirdStep />
    </div>
  );
};

export default index;
