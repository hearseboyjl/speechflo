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
    localStorage.clear();
    sessionStorage.clear();
    navigate("/recruiter/login", { replace: true });
  };

  const iconWrap = "h-10 w-10 grid place-items-center";
  const iconSize = "h-5 w-5";

  const iconCls = [
    iconSize,
    "icon-light icon-dark",
    "opacity-90 group-hover:opacity-100 transition",
  ].join(" ");

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={[
        "fixed top-0 left-0 z-50 h-screen",
        expanded ? "w-[260px]" : "w-[88px]",
        "transition-all duration-300 ease-out",
        "bg-sidebar backdrop-blur-md",
        "border-r border-token",
      ].join(" ")}
    >
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="px-4 pt-6 pb-5">
          <div className={`flex items-center ${expanded ? "gap-3" : "justify-center"}`}>
            <div className="h-11 w-11 rounded-xl bg-white/25 flex items-center justify-center">
              <img src={Logo} alt="SpeechFlo" className="h-full w-full object-contain" />
            </div>

            <div className={`overflow-hidden transition ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
              <div className="text-xl font-semibold text-white">SpeechFlo</div>
            </div>
          </div>
        </div>

        {/* Nav */}
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
                      isActive
                        ? "bg-nav-active"
                        : "hover:bg-white/20",
                    ].join(" ")
                  }
                >
                  <span className={iconWrap}>
                    <img src={item.icon} alt="" aria-hidden className={iconCls} />
                  </span>

                  <span
                    className={[
                      "text-sm font-medium whitespace-nowrap",
                      "text-white",
                      expanded ? "opacity-100 w-auto" : "opacity-0 w-0",
                      "transition-all duration-200",
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

        {/* Profile + Logout */}
        <div className="px-3 pb-6">
          <div className={`rounded-2xl ${expanded ? "px-4 py-3.5" : "px-0 py-3"}`}>
            <div className={`flex items-center ${expanded ? "justify-between" : "justify-center"}`}>
              <div className={`flex items-center ${expanded ? "gap-3" : "justify-center"}`}>
                <div className="h-10 w-10 rounded-full bg-white/25 grid place-items-center">
                  <img src={UserPfpIcon} alt="Profile" className={iconCls} />
                </div>

                <div className={`overflow-hidden transition ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>
                  <div className="text-sm font-medium text-white">Profile</div>
                  <div className="text-xs text-white/70">Recruiter</div>
                </div>
              </div>

              {expanded && (
                <button onClick={handleLogout} className="opacity-80 hover:opacity-100 transition">
                  <span className={`${iconWrap} rounded-xl hover:bg-white/20`}>
                    <img src={LogoutIcon} alt="Logout" className={iconCls} />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
