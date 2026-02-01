// JobDetails.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED

export default function JobDetails() {
  const navigate = useNavigate(); // ✅ ADDED

  return (
    <div className="min-h-screen w-full app-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6">
        {/* Header */}
        <header className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 text-left">
          <h1 className="text-2xl font-extrabold tracking-wide text-[#0B1F3B] sm:text-3xl">
            Commissary Manager in Food and Beverage Industry
          </h1>

          <p className="mt-2 text-sm font-semibold text-[#FF0000]">
            On-site AvantePH Headhunting Full time
          </p>

          <p className="mt-1 text-sm font-semibold text-[#FFA500]">
            Tacloban City
          </p>
        </header>

        <section className="mt-8 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-auto p-6 sm:p-8">
            <div>
              <h2 className="text-base font-bold text-[#000080]">Description</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Our client is looking for a Commissary Manager to oversee the
                day-to-day operations of their commissary facility. The role
                ensures food cost control, manpower efficiency, and the
                consistent availability of raw materials and packaging. This
                includes supervising production, warehouse, and delivery
                teams.
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-700">
                The Commissary Manager will monitor stock levels, production
                planning, and raw material usage in line with brand standards.
                The role also coordinates with sales and logistics to meet
                daily production requirements and ensure timely deliveries to
                branches. This position requires strong leadership, attention
                to detail, and a hands-on approach in maintaining food safety,
                audit compliance, and operational efficiency.
              </p>

              <h3 className="mt-8 text-base font-bold text-[#000080]">
                Key Responsibilities
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Manage food cost, inventory, and manpower efficiency.</li>
                <li>Ensure availability of raw materials and supplies at all times.</li>
                <li>Supervise commissary personnel and monitor performance.</li>
                <li>Coordinate with sales on production forecasts and delivery schedules.</li>
                <li>Compute raw material needs and manage usage to reduce variance.</li>
                <li>Oversee preventive maintenance and pest control schedules.</li>
                <li>Ensure proper documentation, storage, and stock reporting by storekeepers.</li>
                <li>Submit monthly production reports on time.</li>
                <li>Ensure audit scores meet brand standards.</li>
              </ul>

              <h2 className="mt-10 text-base font-bold text-[#000080]">
                Qualifications
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Bachelor’s Degree in Production Management or related field.</li>
                <li>At least 3–5 years of experience in commissary operations, food production, or supply chain management.</li>
                <li>Strong leadership and team management skills.</li>
                <li>Excellent organizational and problem-solving abilities.</li>
                <li>Proficient in inventory systems, production planning, and cost control.</li>
                <li>Knowledgeable in food safety standards and preventive maintenance.</li>
                <li>Willing to be assigned in Tacloban, Leyte.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 p-4 sm:p-5">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => navigate("/signup")}  // ✅ WORKS NOW
                className="
                  cursor-pointer
                  text-sm font-semibold text-[#0B1F3B]
                  px-4 py-2 rounded-full
                  transition-all duration-200
                  hover:bg-[#E6F0FA]
                  hover:text-[#0B1456]
                  active:scale-[0.97]
                "
              >
                Apply for this Job
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
