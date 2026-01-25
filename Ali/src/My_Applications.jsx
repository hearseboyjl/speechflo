import { useNavigate } from "react-router-dom";

export default function My_Applications() {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      position: "Frontend Developer",
      date: "2025-09-28",
      status: "Received",
    },
  ];

  const IconBox = ({ src, alt }) => (
    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
      <img src={src} alt={alt} className="w-6 h-6 object-contain" />
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#f3f4f6]">
      {/* SIDEBAR */}
      <div
        className="
          group
          fixed top-0 left-0 h-full z-30
          transition-all duration-300
          w-16 hover:w-56
          shadow-xl
          bg-[#77bce1]
        "
      >
        <div className="flex flex-col h-full py-6">
          {/* HEADER (LOGO ONLY – BIG ON EXPAND) */}
          <div className="px-3 mb-10 flex justify-center group-hover:justify-start">
            <img
              src="/AvantePH_logo.png"
              alt="AvantePH"
              className="
                hidden group-hover:block
                h-16
                w-auto
              "
            />
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-3 px-3">
            {/* MY PROFILE (NOW FIRST) */}
            <button
              onClick={() => navigate("/my-profile")}
              className="
                flex items-center gap-3
                text-[#0b1440] text-sm
                hover:bg-white/40
                rounded-lg
                transition
              "
            >
              <IconBox src="/profile_icon.png" alt="My Profile" />
              <span className="hidden group-hover:block whitespace-nowrap">
                My Profile
              </span>
            </button>

            {/* MY APPLICATIONS (NOW SECOND) */}
            <button
              onClick={() => navigate("/my_applications")}
              className="
                flex items-center gap-3
                text-[#0b1440] text-sm
                hover:bg-white/40
                rounded-lg
                transition
              "
            >
              <IconBox
                src="/my_applications_icon.png"
                alt="My Applications"
              />
              <span className="hidden group-hover:block whitespace-nowrap">
                My Applications
              </span>
            </button>
          </div>

          {/* LOGOUT */}
          <div className="mt-auto px-3">
            <button
              onClick={() => navigate("/login-applicant")}
              className="
                w-full
                flex items-center gap-3
                text-[#0b1440] text-sm
                hover:bg-white/40
                rounded-lg
                transition
              "
            >
              <IconBox src="/logout_icon.png" alt="Logout" />
              <span className="hidden group-hover:block whitespace-nowrap">
                Log Out
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-16 group-hover:ml-56 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto min-h-[calc(100vh-4rem)] flex flex-col">
          <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-[#0b1440]">
            My Applications
          </h1>

          {/* SUBMISSIONS */}
          <div className="bg-white rounded-xl border border-[#2475AF]/60 p-6 shadow mb-6">
            <h2 className="font-semibold mb-4 text-[#0b1440]">
              Submissions
            </h2>

            {applications.length === 0 ? (
              <p className="text-sm text-gray-600">
                You have not submitted any applications yet.
              </p>
            ) : (
              <div className="space-y-3">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="
                      grid grid-cols-1 sm:grid-cols-3 gap-2
                      bg-white
                      border border-[#2475AF]/50
                      rounded-lg p-4 text-sm
                    "
                  >
                    <div>{app.position}</div>
                    <div>{app.date}</div>
                    <div className="font-medium">{app.status}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* HELP */}
          <div className="bg-white rounded-xl border border-[#2475AF]/60 p-6 shadow mb-8">
            <h2 className="font-semibold mb-2 text-[#0b1440]">
              Help
            </h2>
            <p className="text-sm text-gray-700">
              If you have questions about your application, contact{" "}
              <span className="font-medium text-[#2475AF]">
                emailhere@avanteph.com
              </span>
            </p>
          </div>

          {/* FOOTER */}
          <div className="mt-auto text-center text-xs text-[#0b1440]/70">
            © 2026 AvantePH
          </div>
        </div>
      </div>
    </div>
  );
}
