import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Confirm_Reset() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(45);
  const [error, setError] = useState("");

  // Countdown for resend
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setError("");

    // ✅ Verification API call goes here

    navigate("/set-new-password");
  };

  const handleResend = () => {
    if (timer > 0) return;

    setTimer(45);
    // ✅ Resend code API call goes here
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
          <h1 className="text-2xl font-bold text-[#002853]">
            AvantePH
          </h1>

          <p className="mt-4 text-slate-600 max-w-sm">
            Enter the verification code sent to your email to continue.
          </p>

          <img
            src="/Forgot_Password.png"
            alt="Verification"
            className="mt-10 mx-auto w-full max-w-[320px] object-contain drop-shadow-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 sm:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#002853] mb-2">
            Verify Code
          </h2>

          <p className="text-sm text-slate-600 mb-8">
            Enter the 6-digit verification code.
          </p>

          <form onSubmit={handleVerify} className="space-y-5">
            {/* CODE INPUT */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={code}
                onChange={(e) =>
                  setCode(e.target.value.replace(/\D/g, ""))
                }
                placeholder="••••••"
                className="
                  w-full h-11 px-4 rounded-xl
                  bg-white border border-slate-200
                  outline-none
                  tracking-widest text-center
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

            {/* VERIFY BUTTON */}
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
              Verify
            </button>

            {/* RESEND */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleResend}
                disabled={timer > 0}
                className={`
                  text-sm font-medium
                  ${
                    timer > 0
                      ? "text-slate-400 cursor-not-allowed"
                      : "text-[#2F8DCD] hover:underline"
                  }
                `}
              >
                {timer > 0
                  ? `Resend code in ${timer}s`
                  : "Resend Code"}
              </button>
            </div>

            {/* BACK TO LOGIN */}
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
