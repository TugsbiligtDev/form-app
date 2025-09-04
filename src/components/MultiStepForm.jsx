import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Success from "./Success";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birth: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});

  const validationErrors = () => {
    const newErrors = {};

    if (step === 1) {
      if (
        !formData.firstName.trim() ||
        /[^a-zA-Z\s]/.test(formData.firstName)
      ) {
        newErrors.firstName =
          "First name cannot contain special characters or numbers.";
      }

      if (!formData.lastName.trim() || /[^a-zA-Z\s]/.test(formData.lastName)) {
        newErrors.lastName =
          "Last name cannot contain special characters or numbers.";
      }

      if (!formData.userName.trim()) {
        newErrors.userName =
          "This username is already taken. Please choose another one.";
      }
    }

    if (step === 2) {
      if (!formData.email.trim() || !formData.email.includes("@")) {
        newErrors.email = "Please provide a valid email address.";
      }

      if (
        !formData.phoneNumber.trim() ||
        formData.phoneNumber.length < 8 ||
        formData.phoneNumber.length > 8 ||
        !/^\d+$/.test(formData.phoneNumber)
      ) {
        newErrors.phoneNumber = "Please enter a valid phone number.";
      }

      if (
        !formData.password.trim() ||
        formData.password.length < 8 ||
        !/[a-zA-Z]/.test(formData.password) ||
        !/[0-9]/.test(formData.password)
      ) {
        newErrors.password = "Password must include letters and numbers.";
      }

      if (
        !formData.confirmPassword.trim() ||
        formData.confirmPassword !== formData.password
      ) {
        newErrors.confirmPassword = "Passwords do not match. Please try again.";
      }
    }

    if (step === 3) {
      if (!formData.birth.trim()) {
        newErrors.birth = "Please select a date.";
      } else {
        const selectedDate = new Date(formData.birth);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        if (selectedDate > today) {
          newErrors.birth = "Please select a past date, not a future date.";
        }
      }

      if (!formData.profileImage) {
        newErrors.profileImage = "Please upload a profile image.";
      }
    }

    return newErrors;
  };

  const nextStep = () => {
    const currentErrors = validationErrors();

    if (Object.keys(currentErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(currentErrors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.3,
  };

  if (step === 1) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="step1"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <FirstStep
            nextStep={nextStep}
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        </motion.div>
      </AnimatePresence>
    );
  } else if (step === 2) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="step2"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <SecondStep
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        </motion.div>
      </AnimatePresence>
    );
  } else if (step === 3) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="step3"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <ThirdStep
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Success prevStep={prevStep} formData={formData} />
        </motion.div>
      </AnimatePresence>
    );
  }
};

export default MultiStepForm;
