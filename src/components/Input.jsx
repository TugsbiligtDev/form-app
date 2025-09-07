import { motion } from "framer-motion";

const Input = ({
  text,
  placeholder,
  type,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-[#334155] text-sm font-semibold leading-4">
        {text} <span className="text-[#E14942]">*</span>
      </p>
      <motion.input
        type={type}
        placeholder={placeholder}
        className={`border ${
          !error ? "border-[#8B8E95]" : "border-[#E14942]"
        }  rounded-lg p-2 outline-[#0CA5E9] text-base font-normal`}
        value={value}
        onChange={onChange}
        whileFocus={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        {...props}
      />
      <motion.p
        className="text-[#E14942] text-sm font-normal"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: error ? 1 : 0, height: error ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
      >
        {error}
      </motion.p>
    </motion.div>
  );
};

export default Input;
