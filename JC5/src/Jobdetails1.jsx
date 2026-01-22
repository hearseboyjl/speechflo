// JobDetails.jsx
import React from "react";

export default function JobDetails() {
  return (
    <div className="min-h-screen w-full app-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6">

       
<header className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
  <h1 className="text-2xl font-extrabold tracking-wide text-[#0B1F3B] sm:text-3xl">
    AREA SALES SUPERVISOR
  </h1>

  <p className="mt-2 text-sm font-semibold text-[#FF0000]">
    On-site AvantePH Headhunting Full time
  </p>

  <p className="mt-1 text-sm font-semibold text-[#FFA500]">
    Muntinlupa City Philippines
  </p>
</header>
        <section className="mt-8 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-auto p-6 sm:p-8">
            
            <div>
              <h2 className="text-base font-bold text-[#000080]">Description</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                We are seeking a results-driven Area Sales Supervisor to oversee multiple
                retail stores in the clothing and fashion industry. This role is responsible
                for driving sales performance, ensuring excellent customer service,
                supervising store staff, and implementing strategies to achieve business
                targets within the assigned area.
              </p>

              <h3 className="mt-8 text-base font-bold text-[#000080]">
                Key Responsibilities
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>
                  Supervise and monitor daily sales operations of assigned stores in
                  Muntinlupa and nearby areas.
                </li>
                <li>
                  Lead, train, and motivate store staff to achieve individual and team
                  sales goals.
                </li>
                <li>
                  Implement promotional campaigns, visual merchandising standards, and
                  store operational guidelines.
                </li>
                <li>
                  Analyze sales trends and prepare regular reports on performance,
                  inventory, and customer feedback.
                </li>
                <li>
                  Ensure excellent customer experience and address client concerns
                  effectively.
                </li>
                <li>
                  Conduct store visits to audit compliance with company policies and
                  procedures.
                </li>
                <li>
                  Collaborate with management to develop and execute area sales
                  strategies.
                </li>
                <li>
                  Monitor inventory levels and coordinate with warehouse/purchasing to
                  prevent stock shortages.
                </li>
              </ul>

             
              <h2 className="mt-10 text-base font-bold text-[#000080]">Qualifications</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>
                  Bachelor’s degree in Business, Marketing, or related field is an
                  advantage.
                </li>
                <li>
                  Minimum of 3–5 years of supervisory experience in retail sales,
                  preferably in clothing, fashion, or lifestyle brands.
                </li>
                <li>Strong leadership, coaching, and team management skills.</li>
                <li>
                  Sales-driven, with proven track record of meeting or exceeding sales
                  targets.
                </li>
                <li>
                  Excellent communication, interpersonal, and problem-solving abilities.
                </li>
                <li>
                  Flexible to travel within assigned area and work on weekends/holidays
                  as required.
                </li>
              </ul>

         
              <h3 className="mt-8 text-base font-bold text-[#000080]">Requirements</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Salary range: 25,000–30,000 negotiable</li>
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
  className="
    cursor-pointer
    text-sm font-semibold text-[#0B1F3B]
    px-4 py-2 rounded-full
    transition-all duration-200
    hover:bg-[#E6F0FA]
    hover:text-[#0B1456]
    active:scale-[0.97]
  "
  onClick={() => {}}
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
