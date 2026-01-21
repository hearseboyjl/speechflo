import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../assets/icons/logo.png";
import DashboardIcon from "../assets/icons/dashboard.svg";
import InterviewsIcon from "../assets/icons/interviews.svg";
import AnalyticsIcon from "../assets/icons/analytics.svg";
import ReportsIcon from "../assets/icons/reports.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import UserPfpIcon from "../assets/icons/userPfp.svg";
import LogoutIcon from "../assets/icons/logout.svg";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Interviews", to: "/interviewer-hub", icon: InterviewsIcon },
  { label: "Analytics", to: "/analytics", icon: AnalyticsIcon },
  { label: "Reports", to: "/reports", icon: ReportsIcon },
  { label: "Settings", to: "/settings", icon: SettingsIcon },
];

export default function Menubar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/recruiter/login", { replace: true });
  };

  const iconWrap = "h-10 w-10 grid place-items-center";
  const iconSize = "h-5 w-5";

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={[
        "fixed top-0 left-0 z-50 h-screen",
        expanded ? "w-[260px]" : "w-[88px]",
        "transition-all duration-300 ease-out",
        "rounded-none shadow-none ring-0",
        "bg-[#77bce1]",
        "border-r border-white/25",
      ].join(" ")}
    >
      <div className="h-full flex flex-col">
        {/* TOP: logo */}
        <div className="px-4 pt-6 pb-5">
          <div
            className={[
              "flex items-center",
              expanded ? "gap-3" : "justify-center",
            ].join(" ")}
          >
            <div className="h-11 w-11 rounded-xl bg-white/35 shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={Logo}
                alt="SpeechFlo Logo"
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>

            <div
              className={[
                "overflow-hidden transition-all duration-200",
                expanded ? "opacity-100 w-auto" : "opacity-0 w-0",
              ].join(" ")}
            >
              <div className="text-xl font-semibold leading-none text-slate-900">
                SpeechFlo
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE: nav */}
        <nav className="px-3">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "group rounded-2xl transition-all duration-200",
                      expanded
                        ? "flex items-center gap-3 px-4 py-3.5"
                        : "flex items-center justify-center px-0 py-3.5",
                      isActive ? "bg-white/35" : "hover:bg-white/25",
                    ].join(" ")
                  }
                >
                  <span className={iconWrap}>
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className={`${iconSize} opacity-90 group-hover:opacity-100`}
                    />
                  </span>

                  <span
                    className={[
                      "text-sm font-medium whitespace-nowrap text-slate-900",
                      "transition-all duration-200 overflow-hidden",
                      expanded ? "opacity-100 w-auto" : "opacity-0 w-0",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1" />

        {/* BOTTOM: profile */}
        <div className="px-3 pb-6">
          <div
            className={[
              "rounded-2xl transition",
              expanded ? "px-4 py-3.5" : "px-0 py-3",
            ].join(" ")}
          >
            <div
              className={[
                "w-full flex items-center",
                expanded ? "justify-between" : "justify-center",
              ].join(" ")}
            >
              <div
                className={[
                  "flex items-center cursor-default select-none",
                  expanded ? "gap-3" : "justify-center",
                ].join(" ")}
                aria-hidden="true"
              >
                <div className="h-10 w-10 rounded-full bg-white/35 shadow-sm grid place-items-center overflow-hidden">
                  <img src={UserPfpIcon} alt="Profile" className={iconSize} />
                </div>

                <div
                  className={[
                    "overflow-hidden transition-all duration-200",
                    expanded ? "opacity-100 w-auto" : "opacity-0 w-0",
                  ].join(" ")}
                >
                  <div className="text-sm font-medium leading-none text-slate-900">
                    Profile
                  </div>
                  <div className="text-xs text-slate-700">Recruiter</div>
                </div>
              </div>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                className={[
                  "transition-all duration-200",
                  expanded
                    ? "opacity-80 hover:opacity-100"
                    : "opacity-0 pointer-events-none w-0",
                ].join(" ")}
                title="Logout"
                aria-hidden={!expanded}
              >
                <span
                  className={`${iconWrap} rounded-xl hover:bg-white/20 transition`}
                >
                  <img src={LogoutIcon} alt="Logout" className={iconSize} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}