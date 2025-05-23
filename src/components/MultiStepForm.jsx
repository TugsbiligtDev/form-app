import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Success from "./Success";

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
  });

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(formData);

  if (step === 1) {
    return (
      <FirstStep
        nextStep={nextStep}
        formData={formData}
        updateFormData={updateFormData}
      />
    );
  } else if (step === 2) {
    return (
      <SecondStep
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        updateFormData={updateFormData}
      />
    );
  } else if (step === 3) {
    return (
      <ThirdStep
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        updateFormData={updateFormData}
      />
    );
  } else {
    return <Success prevStep={prevStep} />;
  }
};

export default MultiStepForm;
