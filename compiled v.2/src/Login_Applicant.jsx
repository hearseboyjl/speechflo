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
    navigate("/My_Profile");
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
            <div className="text-white lg:pl-10">

              <h1 className="mt-14 text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
                Apply smarter.
                <br />
                Build your future.
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/85 max-w-lg leading-relaxed">
                Access job opportunities, submit applications, and track your
                progress — all in one place.
              </p>

              <div className="inline-flex items-center text-white/700 hover:text-white text-m font-semibold tracking-wide">
                © 2026 AVANTEPH
              </div>
            </div>

            {/* RIGHT: Login Card (BIGGER CARD ONLY) */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full lg:w-[620px] rounded-[32px] bg-white/75 backdrop-blur-xl shadow-2xl border border-white/50 p-12 sm:p-14">
                
                <h2 className="text-4xl font-bold text-[#002853]">
                  Welcome back
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Login to your applicant account
                </p>

                <form onSubmit={handleLogin} className="mt-12">
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
                      placeholder="email"
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
                  <div className="mt-8">
                    <label className="block text-sm font-semibold text-slate-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="password"
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
                  <div className="mt-12 flex items-center justify-between">
                    <button
                      type="submit"
                      className="
                        h-12 px-14 rounded-xl
                        bg-[#2F8DCD] text-white text-base font-semibold
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
                      className="text-base text-[#2F8DCD] hover:underline"
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
