import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Submit_Application() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    position: "",
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

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
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
    ${error ? "border-red-500" : "border-gray-300"}
    outline-none
    focus:ring-1
    ${error ? "focus:ring-red-500" : "focus:ring-[#2475AF]"}
    transition`;

  return (
    <div className="min-h-screen bg-[#f6f8fc] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-[#0b1440]">
          Submit Application
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* PERSONAL INFORMATION */}
          <div className="bg-white rounded-xl border border-[#2475AF]/100 p-5 sm:p-6 shadow">
            <h2 className="font-semibold mb-4 text-[#0b1440]">
              Personal Information
            </h2>

            <div className="space-y-4">
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass(errors.fullName)}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass(errors.email)}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  name="contact"
                  type="tel"
                  inputMode="numeric"
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
                  <p className="text-xs text-red-500 mt-1">{errors.contact}</p>
                )}
              </div>

              <div>
                <input
                  name="position"
                  type="text"
                  placeholder="Position applying for"
                  value={formData.position}
                  onChange={handleChange}
                  className={inputClass(errors.position)}
                />
                {errors.position && (
                  <p className="text-xs text-red-500 mt-1">{errors.position}</p>
                )}
              </div>
            </div>
          </div>

          {/* UPLOADS */}
          <div className="bg-white rounded-xl border border-[#2475AF]/100 p-5 sm:p-6 shadow">
            <h2 className="font-semibold mb-2 text-[#0b1440]">
              Uploads
            </h2>

            <p className="text-xs text-gray-600 mb-3">
              Resume (PDF / DOCX)
            </p>

            <input
              name="resume"
              type="file"
              onChange={handleChange}
              className={inputClass(errors.resume)}
            />
            {errors.resume && (
              <p className="text-xs text-red-500 mt-1">{errors.resume}</p>
            )}

            {/* BUTTON */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="
                  px-8 py-2 rounded-full
                  bg-[#2F8DCD]
                  text-sm font-semibold text-[#f8f6f1]
                  shadow-[0_6px_18px_rgba(47,141,205,0.45)]
                  hover:bg-[#2a7fc0]
                  active:scale-95
                  transition-all duration-300
                "
              >
                Submit Application
              </button>
            </div>
          </div>
        </form>

        {/* AFTER SUBMISSION */}
        <div className="bg-white rounded-xl border border-[#2475AF]/100 p-5 sm:p-6 shadow mt-6">
          <h2 className="font-semibold mb-2 text-[#0b1440]">
            After Submission
          </h2>

          <p className="text-xs text-gray-700 leading-relaxed">
            Your application will be stored and made available to AvantePH
            recruiters. Shortlisted applicants will receive scheduling details
            via email. Track updates via the Application Status page.
          </p>
        </div>
      </div>
    </div>
  );
}
