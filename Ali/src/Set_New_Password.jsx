import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Set_New_Password() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setShowSuccess(true);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #abd7f4 0%, #C4D6E3 48%, #4a8fc1 100%)",
      }}
    >
      {/* BACKDROP BLUR */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 z-0" />

      {/* MAIN GLASS CARD */}
      <div
        className="
          relative z-10
          w-full max-w-6xl
          grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]
          rounded-[32px]
          bg-white/60 backdrop-blur-xl
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        {/* LEFT IMAGE */}
        <div className="hidden lg:flex justify-center items-center p-12">
          <img
            src="/Set_New_Password.png"
            alt="Set New Password Illustration"
            className="
              w-full
              max-w-[520px]
              scale-110
              translate-x-8
              object-contain
              drop-shadow-2xl
            "
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 sm:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#002853] text-center mb-2">
            Set New Password
          </h2>

          <p className="text-sm text-slate-600 text-center mb-8">
            Please enter and confirm your new password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NEW PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="
                  w-full h-11 px-4 rounded-xl
                  bg-white border border-slate-200
                  outline-none
                  focus:ring-2 focus:ring-[#2F8DCD]/40
                "
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="
                  w-full h-11 px-4 rounded-xl
                  bg-white border border-slate-200
                  outline-none
                  focus:ring-2 focus:ring-[#2F8DCD]/40
                "
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {/* BUTTON */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="
                  px-10 py-2 rounded-full
                  bg-[#2F8DCD]
                  text-sm font-semibold text-white
                  shadow-[0_10px_25px_rgba(47,141,205,0.35)]
                  hover:brightness-95
                  active:scale-95
                  transition-all
                "
              >
                Change Password
              </button>
            </div>
          </form>
          {/* FOOTER INSIDE CARD */}
              <div className="mt-8 text-center text-xs text-slate-500">
                © 2026 AvantePH
              </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xs rounded-xl bg-white px-6 py-5 text-center shadow-xl">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Password Changed Successfully!
            </h3>

            <button
              type="button"
              onClick={() => navigate("/login-applicant")}
              className="
                mx-auto px-6 py-2 rounded-full
                bg-[#2475AF]
                text-xs font-semibold text-white
                hover:bg-[#1e5f8f]
                transition
              "
            >
              LOGIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
