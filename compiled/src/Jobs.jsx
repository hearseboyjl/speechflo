import React from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  return (
    <div className="w-screen min-h-screen app-bg overflow-x-hidden">
    
{/* TOP BAR */}
<div className="bg-[#E6F0FA] py-4 px-10 relative shadow-md">

  <div className="max-w-7xl mx-auto flex items-center gap-4">
    
    {/* IMAGE */}
    <div className="relative">
      <img
  src="/worker.png"
  alt="Workers"
  className="
    h-20 w-auto object-contain
    scale-135
    -mt-4
    origin-left
  "
/>

    </div>

    {/* TITLE */}
    <span className="font-extrabold text-3xl text-slate-900 tracking-wide pl-18">
      JOBS
    </span>

  </div>
</div>


      {/* JOB CARDS */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-40 py-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <JobCard
          id="jobdetails2"
          title="Accounting Lead"
          logo="/JOB1.png"
          job={{
            industry: "Food & Beverage",
            company: "SangyupSalamat",
            desc:
              "Oversee accounting operations, manage reporting and reconciliations, and support day-to-day finance processes.",
          }}
        />

        <JobCard
          id="jobdetails3"
          title="Branch Team Leader"
          logo="/JOB2.png"
          job={{
            industry: "Fast Food",
            company: "24Chicken",
            desc:
              "Lead branch operations, supervise staff, ensure customer satisfaction, and maintain performance in a fast-paced environment.",
          }}
        />

        <JobCard
          id="jobdetails5"
          title="Bookkeeper"
          logo="/JOB3.png"
          job={{
            industry: "Tech/Education",
            company: "TechKidsPH",
            desc:
              "Maintain records, track income/expenses, handle invoicing, and support monthly bookkeeping and reporting.",
          }}
        />

        <JobCard
          id="jobdetails6"
          title="Commissary Manager"
          logo="/JOB4.png"
          job={{
            industry: "Food Services",
            company: "Companies House",
            desc:
              "Oversee commissary production, ensure quality control, manage inventory, and coordinate dispatch and delivery.",
          }}
        />

        <JobCard
          id="jobdetails1"
          title="Area Sales Supervisor"
          logo="/JOB5.png"
          job={{
            industry: "Retail",
            company: "Mosaic",
            desc:
              "Handle area sales targets, coach field teams, ensure store execution, and build relationships with key accounts.",
          }}
        />

        <JobCard
          id="jobdetails4"
          title="Electrician"
          logo="/JOB6.png"
          job={{
            industry: "Construction",
            company: "Concrete Solutions",
            desc:
              "Perform electrical installations/repairs, troubleshoot issues, follow safety standards, and support site operations.",
          }}
        />
      </div>
    </div>
  );
}

/* ===================== JOB CARD ===================== */

function JobCard({ id, title, logo, job }) {
  return (
    <Link to={`/${id}`} state={{ job }} className="block">
      <div className="group relative overflow-hidden min-w-0 rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">

        
        {/* FRONT */}
        <div className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
          
          {/* LOGO AREA */}
          <div className="bg-white py-10 flex items-center justify-center">
            <div className="h-20 w-40 bg-white flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={logo}
                alt={title}
                className="max-h-full max-w-full object-contain scale-125"
              />
            </div>
          </div>

         
          <div className="px-4 py-4 text-center bg-[#2a9df4] rounded-b-xl">
            <h3 className="text-base font-semibold text-[#0B1456]">
              {title}
            </h3>
          </div>
        </div>

        {/* BACK / SUMMARY */}
        <div className="absolute inset-0 bg-white opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 p-4 flex flex-col justify-between rounded-xl">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 text-sm text-slate-600 line-clamp-4">
              {job?.desc}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {job?.industry && (
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                  {job.industry}
                </span>
              )}
              {job?.company && (
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                  {job.company}
                </span>
              )}
            </div>
          </div>

          <div className="pt-4 text-right">
            <span className="text-xs font-medium text-[#0B1456]">
              Click to view full details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
