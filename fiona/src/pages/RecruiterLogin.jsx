import { useNavigate } from "react-router-dom";

export default function RecruiterLogin() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#002853]/35 via-[#2F8DCD]/10 to-white/15" />

      <div className="relative z-10 min-h-screen">
        <div className="min-h-screen w-full flex">
          {/* LEFT */}
          <div className="w-full lg:w-1/2 px-6 md:px-10 py-10 flex items-center">
            <div className="w-full max-w-[520px] text-white">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center text-white/90 hover:text-white text-2xl font-semibold tracking-wide"
              >
                SpeechFlo
              </button>

              <h1 className="mt-14 text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
                Recruit smarter.
                <br />
                Interview better.
              </h1>

              <p className="mt-5 text-sm md:text-base text-white/80 max-w-md">
                random txt insert here
              </p>

              <div className="mt-10 text-xs text-white/60">© 2026 SpeechFlo</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="fixed inset-y-0 right-0 w-[50vw]">
              <div className="h-full w-full p-5 pr-10 flex">
                <div className="w-full h-full rounded-[28px] bg-white/70 backdrop-blur-md shadow-2xl p-10 flex flex-col">
                  {/* Top content */}
                  <div>
                    <h2 className="text-4xl font-bold text-[#002853]">
                      Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                      Login to your recruiter account
                    </p>
                  </div>

                  {/* Email/PW */}
                  <div className="mt-17">
                    <label className="block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="
                        mt-2 w-full h-12 px-4 rounded-xl
                        bg-white/90 border border-slate-200
                        shadow-sm outline-none
                        focus:ring-2 focus:ring-[#2F8DCD]/50
                        focus:border-[#2F8DCD]/40
                      "
                    />

                    <div className="mt-8">
                      <label className="block text-sm font-semibold text-slate-700">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        className="
                          mt-2 w-full h-12 px-4 rounded-xl
                          bg-white/90 border border-slate-200
                          shadow-sm outline-none
                          focus:ring-2 focus:ring-[#2F8DCD]/50
                          focus:border-[#2F8DCD]/40
                        "
                      />
                    </div>
                  </div>

                  {/* Submit/Login */}
                  <form onSubmit={handleLogin} className="mt-auto pt-12">
                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="
                          h-12 px-14 rounded-xl
                          bg-[#2F8DCD] text-white font-semibold
                          shadow-[0_8px_20px_rgba(15,23,42,0.15)]
                          hover:brightness-95
                          active:translate-y-[1px]
                          transition-all
                        "
                      >
                        Login
                      </button>

                      <button
                        type="button"
                        className="text-sm text-[#2F8DCD] hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Responsiveness */}
          <div className="lg:hidden w-full px-6 py-10">
            <div className="w-full rounded-[28px] bg-white/75 backdrop-blur-xl shadow-2xl border border-white/50 p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-[#002853]">Welcome back</h2>
              <p className="mt-2 text-sm text-slate-600">
                Login to your recruiter account
              </p>

              <form onSubmit={handleLogin} className="mt-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="
                      mt-2 w-full h-11 px-4 rounded-xl
                      bg-white/90 border border-slate-200
                      shadow-sm outline-none
                      focus:ring-2 focus:ring-[#2F8DCD]/30
                      focus:border-[#2F8DCD]/40
                    "
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="
                      mt-2 w-full h-11 px-4 rounded-xl
                      bg-white/90 border border-slate-200
                      shadow-sm outline-none
                      focus:ring-2 focus:ring-[#2F8DCD]/30
                      focus:border-[#2F8DCD]/40
                    "
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="submit"
                    className="
                      h-11 px-10 rounded-xl
                      bg-[#2F8DCD] text-white font-semibold
                      shadow-[0_8px_20px_rgba(15,23,42,0.15)]
                      hover:brightness-95
                      active:translate-y-[1px]
                      transition-all
                    "
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    className="text-sm text-[#2F8DCD] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </form>
            </div>
          </div> {/* end > responsive */}
        </div>
      </div>
    </div>
  );
}
