import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login_Applicant() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleLogin(e) {
    e.preventDefault();
    navigate("/submit-application");
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002853]/40 via-[#2F8DCD]/15 to-white/15" />

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="mx-auto max-w-[1200px] min-h-screen px-6 md:px-10 py-10 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT: Text */}
            <div className="text-white">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center text-white/90 hover:text-white text-lg font-semibold tracking-wide"
              >
                AVANTEPH
              </button>

              <h1 className="mt-14 text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
                Apply smarter.
                <br />
                Build your future.
              </h1>

              <p className="mt-5 text-sm md:text-base text-white/80 max-w-md">
                Access job opportunities, submit applications, and track your
                progress — all in one place.
              </p>

              <div className="mt-10 text-xs text-white/60">
                © 2026 AVANTEPH
              </div>
            </div>

            {/* RIGHT: Login Card */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full lg:w-[520px] rounded-[28px] bg-white/75 backdrop-blur-xl shadow-2xl border border-white/50 p-8 sm:p-10">
                
                <h2 className="text-3xl font-bold text-[#002853]">
                  Welcome back
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Login to your applicant account
                </p>

                <form onSubmit={handleLogin} className="mt-8">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="
                        mt-2 w-full h-11 px-4 rounded-xl
                        bg-white/90 border border-slate-200
                        shadow-sm outline-none
                        focus:ring-2 focus:ring-[#2F8DCD]/30
                        focus:border-[#2F8DCD]/40
                      "
                    />
                  </div>

                  {/* Password */}
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-slate-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
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

                  {/* Actions */}
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
                      onClick={() => navigate("/reset_password")}
                      className="text-sm text-[#2F8DCD] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </div>
    </div>
  );
}
