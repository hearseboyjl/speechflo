import Menubar from "../components/Menubar";
import { useMemo, useState } from "react";

export default function Analytics() {
  const stats = useMemo(
    () => [
      { label: "Interviews Uploaded", value: "--" },
      { label: "Avg. Skill Validation Confidence", value: "--" },
      { label: "Avg. Experience Alignment", value: "--%" },
      {
        label: "Avg. Communication Clarity",
        value: "--",
        sub: "Measure of how clearly candidates explain technical concepts",
      },
      {
        label: "Candidate Differentiation Index",
        value: "--",
        sub: "Higher = more variance between candidates",
      },
    ],
    []
  );

  const candidates = useMemo(
    () => [
      { name: "John D.", role: "Frontend Dev", date: "09-10-2025", status: "Pending" },
      { name: "Kim Z.", role: "Backend Dev", date: "09-10-2025", status: "Completed" },
      { name: "Maria L.", role: "UI/UX Designer", date: "09-13-2025", status: "Processing" },
    ],
    []
  );

  const [filters, setFilters] = useState({
    role: "All Roles",
    recruiter: "All Recruiters",
    date: "Date",
  });

  function onChange(e) {
    setFilters((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onApply() {
    console.log("Apply Filters:", filters);
  }

  const statsCardCls = [
    "rounded-2xl",
    "bg-[#2475AF]/20 backdrop-blur-md",
    "border border-[#2475AF]/30",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
  ].join(" ");

  const cardCls = [
    "rounded-2xl",
    "bg-white/70 backdrop-blur-md",
    "border border-white/50",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
  ].join(" ");

  const primaryBtn = [
    "h-9 px-5 rounded-xl",
    "bg-[#2F8DCD] text-white font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
          <h1 className="text-4xl font-bold text-[#002853]">Analytics</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review performance metrics, distributions, and candidate rankings.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} cardCls={statsCardCls} />
            ))}
          </div>

          {/* Main grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Blank chart card */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Skill Validation Distribution
              </h2>
              <div className="mt-4 h-[240px] rounded-xl border border-white/50 bg-white/45 backdrop-blur-sm" />
            </section>

            {/* Right column */}
            <div className="space-y-6">
              <section className={`p-6 ${cardCls}`}>
                <h2 className="text-xl font-semibold text-slate-900">Filters</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <SelectPill
                    name="role"
                    value={filters.role}
                    onChange={onChange}
                    options={["All Roles", "Frontend Dev", "Backend Dev", "UI/UX Designer"]}
                  />
                  <SelectPill
                    name="recruiter"
                    value={filters.recruiter}
                    onChange={onChange}
                    options={["All Recruiters", "Recruiter A", "Recruiter B"]}
                  />
                  <SelectPill
                    name="date"
                    value={filters.date}
                    onChange={onChange}
                    options={["Date", "This Week", "This Month", "This Year"]}
                  />
                </div>

                <div className="mt-5 flex justify-end">
                  <button onClick={onApply} className={primaryBtn}>
                    Apply Filters
                  </button>
                </div>
              </section>

              <section className={`p-6 ${cardCls}`}>
                <h2 className="text-xl font-semibold text-slate-900">
                  AI Confidence Summary
                </h2>
                <ul className="mt-4 text-sm text-slate-700 space-y-2">
                  <li>
                    <span className="font-semibold">High (0.85+)</span> – Low review
                    priority
                  </li>
                  <li>
                    <span className="font-semibold">Medium (0.70–0.84)</span> – Review
                    suggested
                  </li>
                  <li>
                    <span className="font-semibold">Low (&lt;0.70)</span> – Manual review
                    recommended
                  </li>
                </ul>
              </section>

              <section className={`p-6 ${cardCls}`}>
                <h2 className="text-xl font-semibold text-slate-900">
                  Actionable Insights
                </h2>
                <div className="mt-4 text-sm text-slate-600">•</div>
              </section>
            </div>
          </div>

          {/* Topic Coverage */}
          <section className={`mt-8 p-6 ${cardCls}`}>
            <h2 className="text-xl font-semibold text-slate-900">Topic Coverage</h2>
            <div className="mt-4 h-[220px] rounded-xl border border-white/50 bg-white/45 backdrop-blur-sm flex items-center justify-center text-sm text-slate-500">
              [Heatmap placeholder]
            </div>
          </section>

          <section className={`mt-8 p-6 ${cardCls}`}>
            <h2 className="text-xl font-semibold text-slate-900">
              Top Candidates (by validation score)
            </h2>

            <div className="mt-4 overflow-x-auto">
              <div className="min-w-[680px]">
                <div className="grid grid-cols-4 text-xs font-semibold text-slate-600 px-2">
                  <div>Candidate</div>
                  <div>Role</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>

                <div className="mt-3 border-t border-slate-200" />

                {candidates.map((c, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 text-sm px-2 py-4 items-center text-slate-900 border-b border-slate-200"
                  >
                    <div className="font-medium">{c.name}</div>
                    <div className="text-slate-700">{c.role}</div>
                    <div className="text-slate-700">{c.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-white/60 px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                        {c.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, sub, cardCls }) {
  return (
    <div className={`${cardCls} p-5`}>
      <div className="text-[11px] text-slate-700 leading-snug line-clamp-2">
        {label}
      </div>

      <div className="mt-2 text-2xl font-bold text-slate-900">{value}</div>

      {sub ? (
        <div className="mt-2 text-[10px] text-slate-600 leading-snug line-clamp-2">
          {sub}
        </div>
      ) : null}
    </div>
  );
}

function SelectPill({ name, value, onChange, options }) {
  const selectCls = [
    "h-9 w-full rounded-xl",
    "text-xs sm:text-sm font-semibold",
    "bg-[#2F8DCD]/15 text-[#2475AF]",
    "border border-[#2F8DCD]/30",
    "px-3 pr-8",
    "shadow-sm appearance-none outline-none cursor-pointer",
    "hover:bg-[#2F8DCD]/20",
    "transition",
  ].join(" ");

  return (
    <div className="relative min-w-0">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={selectCls}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#2475AF] text-[10px]">
        ▾
      </span>
    </div>
  );
}

