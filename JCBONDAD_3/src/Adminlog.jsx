import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLog() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard"); 
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col">
    
      

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        {/* Login card */}
        <div className="w-[520px] max-w-[90%] rounded-md bg-gradient-to-b from-[#0B1456] to-[#071047] shadow-lg px-12 py-10">
          <h1 className="text-center text-white font-semibold text-2xl tracking-wide mb-10">
            SpeechFlo Admin
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs text-white/80 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 rounded-md bg-white px-4 text-slate-900 outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div>
              <label className="block text-xs text-white/80 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 rounded-md bg-white px-4 text-slate-900 outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="text-white/90 text-sm hover:text-white transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AdminLog