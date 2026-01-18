import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Applicant_SignUp() {
  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Full name must contain letters only";
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted =
        "You must agree to the Terms and Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setShowSuccess(true);
  };

  const inputClass = (field) =>
    `w-full h-10 rounded-xl bg-white px-3 text-sm border ${
      errors[field] ? "border-red-500" : "border-gray-300"
    } focus:outline-none focus:ring-1 ${
      errors[field] ? "focus:ring-red-500" : "focus:ring-[#2475AF]"
    } transition`;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-[#f6f8fc]">

      {/* BACKGROUND DECOR */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] 
          bg-[#2F8DCD]/20 rounded-full blur-3xl
          animate-[float_10s_ease-in-out_infinite]" />

        <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] 
          bg-[#2475AF]/20 rounded-full blur-3xl
          animate-[float_14s_ease-in-out_infinite]" />
      </div>

      {/* SIGN UP CARD – SOLID BLUE */}
      <div
        className={`relative z-10 w-full max-w-sm rounded-xl
        bg-[#2475AF]
        border border-[#1e5f8f]
        px-6 py-7
        shadow-[0_14px_40px_rgba(15,23,42,0.35)]
        hover:shadow-[0_20px_55px_rgba(15,23,42,0.45)]
        transition-all duration-700 ease-out overflow-hidden
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${showTerms ? "blur-sm pointer-events-none" : ""}`}
      >

        {/* CONTENT */}
        <div className="relative z-10">
          <h2 className="text-center text-[#f8f6f1] text-lg font-semibold mb-6">
            Register an account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-[#f8f6f1]/90 mb-1">
                  First Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass("fullName")}
                  placeholder="First name"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-200 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs text-[#f8f6f1]/90 mb-1">
                  Last Name
                </label>
                <input
                  className="w-full h-10 rounded-xl bg-white px-3 text-sm border border-gray-300
                  focus:outline-none focus:ring-1 focus:ring-[#2475AF] transition"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs text-[#f8f6f1]/90 mb-1">
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-xs text-red-200 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-xs text-[#f8f6f1]/90 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={inputClass("password")}
              />
              {errors.password && (
                <p className="text-xs text-red-200 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-xs text-[#f8f6f1]/90 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputClass("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-200 mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* TERMS */}
            <div>
              <label className="flex items-start gap-2 text-xs text-[#f8f6f1]/90">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1"
                />
                <span>
                  I agree to the{" "}
                  <span
                    className="underline cursor-pointer"
                    onClick={() => setShowTerms(true)}
                  >
                    Terms and Conditions
                  </span>
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="text-xs text-red-200 mt-1">
                  {errors.termsAccepted}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-8 py-2 rounded-full
                bg-[#2F8DCD]
                text-[#f8f6f1] font-semibold
                shadow-[0_6px_18px_rgba(47,141,205,0.45)]
                hover:bg-[#2a7fc0]
                hover:shadow-[0_10px_24px_rgba(47,141,205,0.6)]
                active:scale-95
                transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-[11px] text-[#f8f6f1]/85 mt-4">
            Already have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/login-applicant")}
            >
              Login here
            </span>
          </p>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
        `}
      </style>
    </div>
  );
}
