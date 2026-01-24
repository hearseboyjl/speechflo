// JobDetails.jsx
import React from "react";

export default function JobDetails() {
  return (
    <div className="min-h-screen w-full app-bg">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6">
        {/* Header */}
       <header className="rounded-xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 text-left">
  <h1 className="text-2xl font-extrabold tracking-wide text-[#0B1F3B] sm:text-3xl">
    Branch Team Leader in the Fast-Food Industry
  </h1>

  <p className="mt-2 text-sm font-semibold text-[#FF0000]">
    On-site AvantePH Headhunting Full time
  </p>

  <p className="mt-1 text-sm font-semibold text-[#FFA500]">
    Makati / Cainta / Quezon City
  </p>
</header>


        <section className="mt-8 flex min-h-0 flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="min-h-0 flex-1 overflow-auto p-6 sm:p-8">
          
            <div>
              <h2 className="text-base font-bold text-[#000080]">Description</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                We are looking for a Branch Team Leader with fast-food experience who is
                ready to take on a leadership role in a fast-paced environment. The ideal
                candidate should be a hands-on leader, setting an example through action
                rather than just words. We prioritize integrity, a positive attitude over
                skills, and a strong leadership mindset.
              </p>

              <h3 className="mt-8 text-base font-bold text-[#000080]">
                Key Responsibilities
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                <li>Lead and manage branch operations efficiently.</li>
                <li>Ensure high-quality customer service and satisfaction.</li>
                <li>Motivate and train team members for better performance.</li>
                <li>Handle daily reports, sales monitoring, and inventory control.</li>
                <li>Maintain cleanliness and compliance with health &amp; safety standards.</li>
                <li>Set a positive example through action and work ethic.</li>
              </ul>

             
              <h2 className="mt-10 text-base font-bold text-[#000080]">Requirements</h2>

              <div className="mt-3 space-y-6 text-sm leading-6 text-slate-700">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Experience: At least supervisor level in the fast-food or restaurant
                    industry.
                  </li>
                  <li>
                    Education: Senior High School graduate to College level (College
                    undergraduates are welcome to apply).
                  </li>
                  <li>
                    Health &amp; Fitness: Can handle a super fast-paced environment.
                  </li>
                </ul>

                <div>
                  <p className="font-semibold text-[#000080]">
                    Character Requirements:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>No criminal records</li>
                    <li>Non-smoker and non-vaper</li>
                    <li>No visible tattoos</li>
                    <li>Positive attitude</li>
                    <li>Strong sense of integrity and accountability</li>
                  </ul>
                </div>
              </div>
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
