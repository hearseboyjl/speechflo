import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Applicant_SignUp() {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Please accept the Terms & Conditions.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/login-applicant");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7653970/pexels-photo-7653970.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* BACKDROP */}
      {showTerms && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/40 z-40" />
      )}

      {/* TERMS MODAL */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-[#002853] mb-4">
              Terms & Conditions
            </h3>

            <div className="text-sm text-slate-600 max-h-60 overflow-y-auto space-y-3">
              <p>
                By creating an account and using AvantePH, you agree to comply with these
                Terms and Conditions. AvantePH provides digital tools and services intended
                to support company operations, recruitment processes, and related business
                activities.
              </p>

              <p>
                You confirm that all information, files, and data you submit through the
                platform are accurate, lawful, and provided with proper authorization.
                You grant AvantePH permission to collect, store, process, and use this data
                for operational, analytical, and service-improvement purposes.
              </p>

              <p>
                Any data collected may be used to improve platform performance, enhance
                user experience, support internal evaluations, and generate insights
                relevant to company processes. AvantePH will not sell or disclose personal
                data to unauthorized third parties without consent, except when required
                by law.
              </p>

              <p>
                You acknowledge that system-generated outputs, insights, or recommendations
                are provided for informational and support purposes only and should not be
                relied upon as the sole basis for critical business or employment decisions.
              </p>

              <p>
                All user data, records, and system-generated content are treated as
                confidential and are accessible only to authorized personnel. Any misuse
                of the platform, violation of company policies, or unlawful activity may
                result in suspension or termination of access.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="px-6 h-10 rounded-xl bg-[#2F8DCD] text-white font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-none grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="hidden lg:block" />

        <div className="flex justify-center">
          <div className="w-full max-w-130 rounded-[28px] bg-white/70 backdrop-blur-xl shadow-2xl border border-white/50 p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-[#002853]">
              Create an account
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Sign up to start your application
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="h-11 px-4 rounded-xl bg-white/90 border border-slate-200"
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="h-11 px-4 rounded-xl bg-white/90 border border-slate-200"
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full h-11 px-4 rounded-xl bg-white/90 border border-slate-200"
              />

              {/* PASSWORD */}
              <div>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full h-11 px-4 rounded-xl bg-white/90 border ${
                    errors.password ? "border-red-500" : "border-slate-200"
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className={`w-full h-11 px-4 rounded-xl bg-white/90 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* TERMS */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-[#2F8DCD] font-semibold hover:underline"
                  >
                    Terms & Conditions
                  </button>
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      termsAccepted: !formData.termsAccepted,
                    })
                  }
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                    formData.termsAccepted
                      ? "bg-[#2F8DCD]"
                      : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full transform transition-transform ${
                      formData.termsAccepted ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>

              {errors.termsAccepted && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.termsAccepted}
                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full h-11 rounded-xl bg-[#2F8DCD] text-white font-semibold"
              >
                Create Account
              </button>

              {/* LOGIN */}
              <p className="text-sm text-center text-slate-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login-applicant")}
                  className="text-[#2F8DCD] font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>

            <div className="mt-8 text-center text-xs text-slate-400">
              © 2026 AvantePH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
