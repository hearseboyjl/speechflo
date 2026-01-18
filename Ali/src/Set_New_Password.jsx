import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Set_New_Password() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#eef2f5] flex items-center justify-center px-4">
      
      {/* SET NEW PASSWORD CARD */}
      <div
        className="
          w-full max-w-md rounded-xl
          bg-[#2475AF]
          border border-[#1e5f8f]
          px-6 sm:px-10 py-8 sm:py-10
          shadow-[0_14px_40px_rgba(15,23,42,0.35)]
          z-10
        "
      >
        <h2 className="text-center text-[#f8f6f1] text-base sm:text-lg font-semibold mb-2">
          Set New Password
        </h2>

        <p className="text-center text-xs sm:text-sm text-[#f8f6f1]/85 mb-7">
          Please enter your new password
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-xs text-[#f8f6f1]/90 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="
                w-full h-11 rounded-xl
                bg-white px-3 text-sm text-gray-900
                outline-none
                focus:ring-1 focus:ring-[#2475AF]
              "
            />
          </div>

          <div>
            <label className="block text-xs text-[#f8f6f1]/90 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="
                w-full h-11 rounded-xl
                bg-white px-3 text-sm text-gray-900
                outline-none
                focus:ring-1 focus:ring-[#2475AF]
              "
            />
          </div>

          {/* BUTTON */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setShowSuccess(true)}
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
              Change Password
            </button>
          </div>
        </form>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-xs rounded-lg bg-white px-6 py-5 text-center shadow-xl">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Password Changed Successfully!
            </h3>

            <button
              type="button"
              onClick={() => navigate("/login-applicant")}
              className="
                mx-auto px-6 py-2 rounded-full
                bg-[#2475AF]
                text-xs font-semibold text-[#f8f6f1]
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
