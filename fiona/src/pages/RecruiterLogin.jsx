import { useNavigate } from "react-router-dom";
import Logo from "../assets/icons/logo.png";
import Vector from "../assets/icons/vector.png";

export default function RecruiterLogin() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  const PANEL_H = "h-[520px]";
  const CARD_W = "max-w-lg";

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
    <div className="absolute inset-0 bg-[#f1f6fb]" />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(900px 650px at 12% 30%, rgba(45,125,255,0.65), transparent 60%),
          radial-gradient(800px 600px at 75% 25%, rgba(120,90,255,0.55), transparent 55%),
          radial-gradient(1000px 750px at 50% 95%, rgba(80,160,255,0.45), transparent 65%)
        `,
      }}
    />
      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 lg:px-12">
        <div className="min-h-screen w-full flex flex-col lg:flex-row lg:items-start lg:gap-12 py-10">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <div className={`w-full ${CARD_W} mx-auto`}>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="flex items-center gap-3 focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-xl overflow-hidden">
                    <img
                      src={Logo}
                      alt="SpeechFlo Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="text-xl font-semibold tracking-wide">
                    SpeechFlo
                  </span>
                </button>
              </div>
            </div>

            {/* Left side pic */}
            <div className="hidden lg:block">
              <div className={`w-full ${CARD_W} mx-auto ${PANEL_H}`}>
                <img
                  src={Vector}
                  alt="Workspace"
                  className={"w-full ${PANEL_H} object-contain scale-110 -translate-y-6"}
                />
              </div>
            </div>
            <div className="lg:hidden mt-5">
              <img src={Vector} alt="Workspace" className="w-full max-w-md mx-auto object-contain" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 flex items-start justify-center mt-10 lg:mt-0">
            <div
              className={`
                w-full ${CARD_W} ${PANEL_H}
                bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl
                p-10 flex flex-col
              `}
            >
              {/* Header */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#002853]">
                  Welcome back
                </h2>
                <p className="mt-1 text-slate-600">
                  Login to your recruiter account
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleLogin}
                className="mt-12 flex-1 flex flex-col justify-center"
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="
                    w-80 mx-auto h-11 px-4 rounded-xl
                    bg-white border border-slate-200
                    shadow-sm outline-none
                    focus:ring-2 focus:ring-[#2F8DCD]/30
                    focus:border-[#2F8DCD]/40
                  "
                />

                <div className="h-6" />

                <div className="w-80 mx-auto">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="
                      w-full h-11 px-4 rounded-xl
                      bg-white border border-slate-200
                      shadow-sm outline-none
                      focus:ring-2 focus:ring-[#2F8DCD]/30
                      focus:border-[#2F8DCD]/40
                    "
                  />

                  {/* Forgot password */}
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      className="text-sm text-[#2F8DCD] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="mt-20" />

                  {/* Login button*/}
                  <button
                    type="submit"
                    className="
                      w-full h-11 rounded-xl
                      bg-[#2F8DCD] text-white font-semibold
                      shadow-[0_8px_20px_rgba(15,23,42,0.15)]
                      hover:brightness-95
                      active:translate-y-[1px]
                      transition-all
                    "
                  >
                    Login
                  </button>
                </div>
              </form>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}