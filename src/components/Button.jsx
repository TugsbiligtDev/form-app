import React from "react";
import { motion } from "framer-motion";

const Button = ({ step, onNext, onBack }) => {
  return (
    <div className="flex gap-2">
      {onBack && (
        <motion.div
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex justify-center items-center w-[40%] bg-white rounded-md border border-[#CBD5E1] text-[#202124] py-3 px-2.5 gap-1 cursor-pointer"
        >
          <img src="./chevron_left.svg" alt="right icon" />
          <p>Back</p>
        </motion.div>
      )}

      <motion.div
        onClick={onNext}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex justify-center items-center w-full bg-[#121316] rounded-md text-white py-3 px-2.5 gap-1 cursor-pointer"
      >
        <p>Continue</p>
        <p>{step}/3</p>
        <img src="./chevron_right.svg" alt="right icon" />
      </motion.div>
    </div>
  );
};

export default Button;
