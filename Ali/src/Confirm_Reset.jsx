import { useNavigate } from "react-router-dom";

export default function Confirm_Reset() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef2f5] flex items-center justify-center relative px-4">
      
      {/* CONFIRM CARD */}
      <div
        className="
          w-full max-w-md rounded-xl
          bg-[#2475AF]
          border border-[#1e5f8f]
          px-6 sm:px-10 py-8 sm:py-10
          shadow-[0_14px_40px_rgba(15,23,42,0.35)]
        "
      >
        <h2 className="text-center text-[#f8f6f1] text-base sm:text-lg font-semibold mb-3">
          Confirm Password Reset
        </h2>

        <p className="text-center text-xs sm:text-sm text-[#f8f6f1]/85 mb-6 leading-relaxed">
          Enter the 6 digit code we’ve sent to your email
          <br className="hidden sm:block" />
          to reset your password.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-xs text-[#f8f6f1]/90 mb-2">
              Verification Code
            </label>
            <input
              type="text"
              maxLength={6}
              placeholder="Enter code"
              className="
                w-full h-11 rounded-xl
                bg-white px-3 text-sm text-gray-900
                outline-none
                tracking-widest text-center
                focus:ring-1 focus:ring-[#2475AF]
              "
            />
          </div>

          {/* BUTTON (FIXED) */}
          <div className="flex justify-center pt-1">
            <button
              type="submit"
              onClick={() => navigate("/set_new_password")}
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
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
