import { useNavigate } from "react-router-dom";

export default function My_Applications() {
  const navigate = useNavigate();

  // Example data (this will come from backend later)
  const applications = [
    {
      id: 1,
      position: "Frontend Developer",
      date: "2025-09-28",
      status: "Received",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fc] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-[#0b1440]">
          My Applications
        </h1>

        {/* SUBMISSIONS */}
        <div className="bg-white rounded-xl border border-[#2475AF]/100 p-5 sm:p-6 shadow mb-6">
          <h2 className="font-semibold mb-4 text-[#0b1440]">
            Submissions
          </h2>

          {/* EMPTY STATE */}
          {applications.length === 0 ? (
            <p className="text-sm text-gray-600">
              You have not submitted any applications yet.
            </p>
          ) : (
            <>
              {/* TABLE HEADER */}
              <div className="hidden sm:grid grid-cols-3 text-sm font-semibold text-gray-700 mb-3">
                <span>Position</span>
                <span>Date</span>
                <span>Status</span>
              </div>

              {/* TABLE ROWS */}
              <div className="space-y-3">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="
                      grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0
                      text-sm text-gray-800
                      bg-white
                      border border-[#2475AF]/100
                      rounded-lg
                      p-4
                    "
                  >
                    <div>
                      <span className="sm:hidden block text-xs font-semibold text-gray-500">
                        Position
                      </span>
                      {app.position || "N/A"}
                    </div>

                    <div>
                      <span className="sm:hidden block text-xs font-semibold text-gray-500">
                        Date
                      </span>
                      {app.date || "N/A"}
                    </div>

                    <div>
                      <span className="sm:hidden block text-xs font-semibold text-gray-500">
                        Status
                      </span>
                      <span className="font-medium">
                        {app.status || "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* HELP SECTION */}
        <div className="bg-white rounded-xl border border-[#2475AF]/100 p-5 sm:p-6 shadow">
          <h2 className="font-semibold mb-2 text-[#0b1440]">
            Help
          </h2>

          <p className="text-sm text-gray-700 break-words">
            If you have questions about your application, contact{" "}
            <span className="font-medium text-[#2475AF]">
              emailhere@avanteph.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
