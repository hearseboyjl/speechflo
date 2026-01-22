import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reset_Password() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSendCode = () => {
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // simulate sending code
  };

  const handleReset = (e) => {
  e.preventDefault();

  if (!email || !code) {
    setError("Please complete all fields.");
    return;
  }

  if (!isValidEmail(email)) {
    setError("Invalid email address.");
    return;
  }

  setError("");
  navigate("/set-new-password");
};


  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #abd7f4 0%, #C4D6E3 48%, #4a8fc1 100%)",
      }}
    >
      {/* BACKDROP BLUR */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 z-0" />

      {/* GLASS CARD */}
      <div
        className="
          relative z-10
          w-full max-w-5xl
          grid grid-cols-1 lg:grid-cols-2
          rounded-[32px]
          bg-white/60 backdrop-blur-xl
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
          overflow-hidden
        "
      >
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center p-12">
          <h1 className="text-2xl font-bold text-[#002853] leading-tight">
            SpeechFlow
          </h1>

          <p className="mt-4 text-slate-600 max-w-sm">
            Reset your password securely and regain access to your account.
          </p>

          <img
            src="/public/Forgot_Password.png"
            alt="Forgot Password Illustration"
            className="
              mt-10
              mx-auto
              w-full max-w-[320px]
              object-contain
              drop-shadow-xl
            "
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 sm:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#002853] mb-2">
            Reset Password
          </h2>

          <p className="text-sm text-slate-600 mb-8">
            Enter your email and verification code.
          </p>

          <form onSubmit={handleReset} className="space-y-5">

            {/* EMAIL + SEND CODE */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Email Address
              </label>

              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="
                    w-full h-11 px-4 rounded-xl
                    bg-white
                    border border-slate-200
                    outline-none
                    focus:ring-2 focus:ring-[#2F8DCD]/40
                  "
                />

                <button
                  type="button"
                  onClick={handleSendCode}
                  className="
                    px-4 h-11 rounded-xl
                    bg-[#2F8DCD]
                    text-sm font-semibold text-white
                    hover:bg-[#2a7fc0]
                    transition
                  "
                >
                  Send Code
                </button>
              </div>
            </div>

            {/* VERIFICATION CODE */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter the 6-digit code"
                className="
                  w-full h-11 px-4 rounded-xl
                  bg-white
                  border border-slate-200
                  outline-none
                  focus:ring-2 focus:ring-[#2F8DCD]/40
                "
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            {/* RESET BUTTON */}
            <button
              type="submit"
              className="
                w-full h-11 rounded-xl
                bg-[#2F8DCD]
                text-white font-semibold
                shadow-[0_10px_25px_rgba(47,141,205,0.35)]
                hover:brightness-95
                transition
              "
            >
              Reset Password
            </button>

            <p
              onClick={() => navigate("/login-applicant")}
              className="text-sm text-center text-slate-600 hover:underline cursor-pointer"
            >
              Back to Login
            </p>
          </form>
            <div className="mt-8 text-center text-s text-slate-400">
              © 2026 AvantePH
            </div>
        </div>
      </div>
    </div>
  );
}
