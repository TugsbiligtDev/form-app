import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Success from "./Success";
import { useState } from "react";

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
        formData.phoneNumber.length > 8
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

  if (step === 1) {
    return (
      <FirstStep
        nextStep={nextStep}
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
      />
    );
  } else if (step === 2) {
    return (
      <SecondStep
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
      />
    );
  } else if (step === 3) {
    return (
      <ThirdStep
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        updateFormData={updateFormData}
        errors={errors}
      />
    );
  } else {
    return <Success prevStep={prevStep} />;
  }
};

export default MultiStepForm;
