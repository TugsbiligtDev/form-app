import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Success from "./Success";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    birth: "",
  });

  if (step === 1) {
    return <FirstStep nextStep={nextStep} />;
  } else if (step === 2) {
    return <SecondStep nextStep={nextStep} prevStep={prevStep} />;
  } else if (step === 3) {
    return <ThirdStep nextStep={nextStep} prevStep={prevStep} />;
  } else {
    return <Success prevStep={prevStep} />;
  }
};

export default MultiStepForm;
