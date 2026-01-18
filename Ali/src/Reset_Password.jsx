import { useNavigate } from "react-router-dom";

export default function Reset_Password() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef2f5] flex items-center justify-center relative px-4">
      
      {/* RESET CARD */}
      <div
        className="
          w-full max-w-sm rounded-xl
          bg-[#2475AF]
          border border-[#1e5f8f]
          px-6 sm:px-8 py-8 sm:py-9
          shadow-[0_14px_40px_rgba(15,23,42,0.35)]
        "
      >
        <h2 className="text-center text-[#f8f6f1] text-base sm:text-lg font-semibold mb-3">
          Reset Password
        </h2>

        <p className="text-center text-xs sm:text-sm text-[#f8f6f1]/85 mb-6 leading-relaxed">
          Enter your registered email address below and we’ll send you a code to
          reset your password.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-xs text-[#f8f6f1]/90 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full h-10 rounded-xl
                bg-white px-3 text-sm text-gray-900
                outline-none
                focus:ring-1 focus:ring-[#2475AF]
              "
            />
          </div>

          {/* BUTTON (FIXED) */}
          <div className="flex justify-center pt-1">
            <button
              type="submit"
              onClick={() => navigate("/confirm-reset")}
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
              Send Reset Code
            </button>
          </div>
        </form>

        <p
          onClick={() => navigate("/login-applicant")}
          className="mt-4 text-center text-[11px] text-[#f8f6f1]/80 hover:underline cursor-pointer"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}
