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
            Bookkeeper
          </h1>

          <p className="mt-2 text-sm font-semibold text-[#FF0000]">
            On-site AvantePH Headhunting Full time
          </p>

          <p className="mt-1 text-sm font-semibold text-[#FFA500]">
            Quezon City, Metro Manila, Philippines
          </p>
        </header>

        {/* Card */}
        <section className="mt-8 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-auto p-6 sm:p-8">
            <div>
              <h2 className="text-base font-bold text-[#000080]">Description</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Our client, a company in the trading industry, is seeking a
                detail-oriented and highly organized Bookkeeper to manage
                day-to-day accounting tasks and financial records. The role
                is ideal for someone with a strong background in bookkeeping,
                accounting principles, and keen attention to detail.
              </p>

              <h3 className="mt-8 text-base font-bold text-[#000080]">
                Key Responsibilities
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Maintain accurate financial records, including general ledger entries and reconciliations.</li>
                <li>Record daily financial transactions, monitor accounts payable/receivable, and prepare invoices.</li>
                <li>Assist in preparing financial reports such as balance sheets, income statements, and cash flow summaries.</li>
                <li>Ensure compliance with accounting standards and government regulations.</li>
                <li>Organize and file supporting documents for financial transactions.</li>
                <li>Assist with payroll preparation and monitoring employee-related expenses.</li>
                <li>Coordinate with external auditors, accountants, and management for reporting requirements.</li>
                <li>Provide administrative support to management when necessary.</li>
              </ul>

              <h2 className="mt-10 text-base font-bold text-[#000080]">Benefits</h2>
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
                <li>Bachelor’s degree in Accounting, Finance, or related field (Accounting graduate preferred).</li>
                <li>At least 3 years of experience as a Bookkeeper.</li>
                <li>Strong knowledge of accounting principles and practices.</li>
                <li>Proficiency in MS Office (Excel/Word) and accounting software is an advantage.</li>
                <li>Very organized, detail-oriented, and able to manage multiple tasks.</li>
                <li>Preferably residing near Quezon City to avoid commute issues.</li>
                <li>Female candidates are encouraged to apply.</li>
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
