import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Submit_Application() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
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

    if (!/^\d{11}$/.test(formData.contact)) {
      newErrors.contact = "Contact number must be exactly 11 digits";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF or DOCX files are allowed";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/my_applications");
    }
  };

  const inputClass = (error) =>
    `w-full h-11 rounded-xl bg-white px-4 text-sm border
     ${error ? "border-red-500" : "border-[#2475AF]/70"}
     shadow-md outline-none
     focus:ring-2
     ${error ? "focus:ring-red-500" : "focus:ring-[#2475AF]/40"}
     transition`;

  return (
    <div
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #abd7f4 0%, #C4D6E3 48%, #4a8fc1 100%)",
      }}
    >
      <div className="relative z-20 max-w-5xl mx-auto">
        {/* BRAND TITLE */}
        <h1 className="text-2xl font-bold text-[#0b1440] mb-6">
          My Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* PERSONAL INFORMATION */}
          <div className="bg-white/75 backdrop-blur-md rounded-xl border border-[#2475AF]/80 p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-[#0b1440]">
              Personal Information
            </h2>

            <div className="space-y-4">
              <input
                name="fullName"
                type="text"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass(errors.fullName)}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500">{errors.fullName}</p>
              )}

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass(errors.email)}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}

              <input
                name="contact"
                type="tel"
                maxLength={11}
                placeholder="Contact Number (11 digits)"
                value={formData.contact}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setFormData({ ...formData, contact: value });
                  setErrors({ ...errors, contact: "" });
                }}
                className={inputClass(errors.contact)}
              />
              {errors.contact && (
                <p className="text-xs text-red-500">{errors.contact}</p>
              )}
            </div>
          </div>

          {/* UPLOADS */}
          <div className="bg-white/75 backdrop-blur-md rounded-xl border border-[#2475AF]/80 p-6 shadow-lg">
            <h2 className="font-semibold mb-2 text-[#0b1440]">
              Uploads
            </h2>

            <p className="text-xs text-gray-600 mb-4">
              Resume (PDF / DOCX)
            </p>

            <label
              className={`
                inline-flex items-center gap-3
                px-6 py-3 rounded-xl
                border-2 border-dashed
                ${errors.resume ? "border-red-500" : "border-[#2475AF]"}
                text-sm text-[#2475AF]
                cursor-pointer
                hover:bg-[#2475AF]/10
                transition
              `}
            >
              <span className="font-semibold">
                {formData.resume ? formData.resume.name : "Choose file"}
              </span>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            {errors.resume && (
              <p className="text-xs text-red-500 mt-2">{errors.resume}</p>
            )}
          </div>

          {/* SAVE */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="
                px-8 py-2 rounded-full
                bg-[#2F8DCD]
                text-sm font-semibold text-white
                shadow-[0_6px_18px_rgba(47,141,205,0.45)]
                hover:bg-[#2a7fc0]
                active:scale-95
                transition-all
              "
            >
              Save Profile
            </button>
          </div>
        </form>

        {/* FOOTER */}
        <div className="mt-10 text-center text-s text-slate-500">
          © 2026 AvantePH
        </div>
      </div>
    </div>
  );
}
