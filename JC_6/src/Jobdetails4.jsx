// JobDetails.jsx
import React from "react";

export default function JobDetails() {
  return (
    <div className="min-h-screen w-full app-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6">
        {/* Header */}
       <header className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 text-left">
  <h1 className="text-2xl font-extrabold tracking-wide text-[#0B1F3B] sm:text-3xl">
    Electrician (Heavy Equipment and Automotive)
  </h1>

  <p className="mt-2 text-sm font-semibold text-[#FF0000]">
    On-site AvantePH Headhunting Full time
  </p>

  <p className="mt-1 text-sm font-semibold text-[#FFA500]">
    Leyte, Eastern Visayas, Philippines
  </p>
</header>


        <section className="mt-8 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-auto p-6 sm:p-8">

            <div>
              <h2 className="text-base font-bold text-[#000080]">Description</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                We are hiring a Heavy Equipment and Automotive Electrician to perform
                electrical diagnostics, repair, and maintenance on heavy machinery and
                vehicles. The role requires in-depth knowledge of automotive electrical
                systems and the ability to troubleshoot issues using diagnostic tools and
                schematics.
              </p>

              <h3 className="mt-8 text-base font-bold text-[#000080]">
                Key Responsibilities
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>
                  Diagnose and repair electrical systems on heavy equipment and vehicles,
                  including loaders, trucks, mixers, and forklifts.
                </li>
                <li>
                  Use scanners and tools to identify faults and correct them efficiently.
                </li>
                <li>Interpret wiring diagrams and schematics.</li>
                <li>
                  Maintain and repair components such as batteries, relays, starters,
                  alternators, sensors, and control modules.
                </li>
                <li>
                  Perform preventive maintenance and ensure repairs meet operational and
                  safety standards.
                </li>
                <li>
                  Document all work and report equipment status regularly.
                </li>
              </ul>

         
              <h2 className="mt-10 text-base font-bold text-[#000080]">
                Qualifications
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>
                  At least 5 years of experience in electrical repair of heavy equipment
                  and vehicles.
                </li>
                <li>Skilled in using diagnostic scanners and reading schematics.</li>
                <li>
                  Strong knowledge of AC/DC circuits and electronic components.
                </li>
                <li>Experience with China-branded equipment is a plus.</li>
                <li>Detail-oriented, safety-conscious, and team-focused.</li>
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
