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
            Accounting Lead in Food and Beverage Industry
          </h1>

          <p className="mt-2 text-sm font-semibold text-[#FF0000]">
            On-site AvantePH Headhunting Full time
          </p>

          <p className="mt-1 text-sm font-semibold text-[#FFA500]">
            City Of Manila, MetroManila
          </p>
        </header>

        <section className="mt-8 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-auto p-6 sm:p-8">

            <div>
              <h2 className="text-base font-bold text-[#000080]">Description</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                The Accounting Lead is responsible for overseeing the accurate, timely, and
                complete execution of accounting operations. This includes managing store
                transactions, disbursements, payroll entries, and consolidating financial
                reports. The role ensures compliance with internal accounting standards and
                supports the financial health of the organization.
              </p>

              <h3 className="mt-8 text-base font-bold text-[#000080]">
                Key Responsibilities
              </h3>

              <div className="mt-3 space-y-5 text-sm leading-6 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-800">
                    Accounting Operations Oversight
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Supervise bookkeepers and oversee accounts payable/receivable and payroll-related entries.</li>
                    <li>Manage daily journal entries, sales encoding, and expense tracking.</li>
                    <li>Lead the month-end closing process, ensuring timely and accurate schedules and adjusting entries.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Financial Statement Preparation
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Prepare consolidated income statements, balance sheets, and cash flow statements.</li>
                    <li>Ensure accuracy and completeness of inter-branch and consolidated reports.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Disbursement &amp; Reconciliation Control
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Monitor accounts payable aging and manage vendor payment scheduling.</li>
                    <li>Reconcile store sales with bank deposits on a weekly basis and address any discrepancies.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Internal Process Compliance
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Enforce internal finance SOPs, including Chart of Accounts usage and voucher control.</li>
                    <li>Coordinate with the Compliance team for audit preparation and documentation.</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-10 text-base font-bold text-[#000080]">Qualifications</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>CPA license preferred but not mandatory.</li>
                <li>Minimum of 4 years accounting experience, preferably in the food & beverage or retail sector.</li>
                <li>Proven experience in supervising accounting teams.</li>
                <li>Proficient in accounting systems such as Odoo, QuickBooks, SAP, or similar platforms.</li>
                <li>Advanced Excel skills and strong analytical abilities.</li>
                <li>High level of accuracy, attention to detail, and organizational skills.</li>
              </ul>

              <h3 className="mt-8 text-base font-bold text-[#000080]">Requirements</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Salary range: 25,000-30,000 negotiable</li>
                <li>Competitive salary package (commensurate with experience)</li>
                <li>Sales incentives and performance-based rewards</li>
                <li>Career growth opportunities in a leading retail fashion brand</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 p-4 sm:p-5">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => navigate("/signup")}  // ✅ NOW WORKS
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
