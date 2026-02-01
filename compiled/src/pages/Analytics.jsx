import Menubar from "../components/Menubar";
import { useEffect, useMemo, useState } from "react";
import { applyTheme, getSavedTheme } from "../theme";

export default function Analytics() {
  useEffect(() => {
    applyTheme(getSavedTheme());
  }, []);

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

  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "border-2 border-token",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "shadow-card",
    "transition-shadow",
  ].join(" ");

  const panelCls = [
    "mt-4 rounded-xl",
    "bg-surface-soft backdrop-blur-sm",
    "border border-token",
    "shadow-soft",
  ].join(" ");

  const kpiBg = [
    "mt-8 rounded-2xl",
    "bg-kpi",
    "border border-token",
    "shadow-kpi",            
    "px-4 sm:px-6 py-4",
  ].join(" ");

  const kpiTile = [
    "rounded-2xl",
    "bg-surface-strong",
    "border border-token",
    "shadow-kpi-tile",      
    "px-4 py-4 sm:px-6 sm:py-5",
    "min-h-[92px] sm:min-h-[110px]",
    "w-full",
  ].join(" ");

  const kpiLabel = "text-[12px] sm:text-[13px] font-semibold text-muted leading-snug";
  const kpiValue = "mt-1 text-xl sm:text-2xl font-extrabold text-main";

  const primaryBtn = [
    "h-9 px-5 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const selectCls = [
    "h-9 w-full rounded-xl",
    "text-xs sm:text-sm font-semibold",
    "bg-surface-strong text-main",
    "border border-token",
    "px-3 pr-8",
    "shadow-sm appearance-none outline-none cursor-pointer",
    "hover:brightness-[0.98]",
    "transition",
  ].join(" ");

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-8">
          <h1 className="text-4xl font-bold text-title">Analytics</h1>
          <p className="mt-2 text-sm text-muted">
            Review performance metrics, distributions, and candidate rankings.
          </p>

          {/* TOP KPIs */}
          <div className={kpiBg}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {stats.map((s) => (
                <div key={s.label} className={kpiTile}>
                  <div className={`${kpiLabel} line-clamp-2`}>{s.label}</div>
                  <div className={kpiValue}>{s.value}</div>
                  {s.sub ? (
                    <div className="mt-2 text-[11px] sm:text-xs text-muted leading-snug line-clamp-2">
                      {s.sub}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Main grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-main">Skill Validation Distribution</h2>
              <div className={`${panelCls} h-[240px]`} />
            </section>

            <div className="space-y-6">
              <section className={`p-6 ${cardCls}`}>
                <h2 className="text-xl font-semibold text-main">Filters</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <SelectPill
                    name="role"
                    value={filters.role}
                    onChange={onChange}
                    options={["All Roles", "Frontend Dev", "Backend Dev", "UI/UX Designer"]}
                    className={selectCls}
                  />
                  <SelectPill
                    name="recruiter"
                    value={filters.recruiter}
                    onChange={onChange}
                    options={["All Recruiters", "Recruiter A", "Recruiter B"]}
                    className={selectCls}
                  />
                  <SelectPill
                    name="date"
                    value={filters.date}
                    onChange={onChange}
                    options={["Date", "This Week", "This Month", "This Year"]}
                    className={selectCls}
                  />
                </div>

                <div className="mt-5 flex justify-end">
                  <button onClick={onApply} className={primaryBtn} type="button">
                    Apply Filters
                  </button>
                </div>
              </section>

              <section className={`p-6 ${cardCls}`}>
                <h2 className="text-xl font-semibold text-main">AI Confidence Summary</h2>
                <ul className="mt-4 text-sm text-muted space-y-2">
                  <li>
                    <span className="font-semibold text-main">High (0.85+)</span> – Low review priority
                  </li>
                  <li>
                    <span className="font-semibold text-main">Medium (0.70–0.84)</span> – Review suggested
                  </li>
                  <li>
                    <span className="font-semibold text-main">Low (&lt;0.70)</span> – Manual review recommended
                  </li>
                </ul>
              </section>

              <section className={`p-6 ${cardCls}`}>
                <h2 className="text-xl font-semibold text-main">Actionable Insights</h2>
                <div className="mt-4 text-sm text-muted">•</div>
              </section>
            </div>
          </div>

          {/* Topic */}
          <section className={`mt-8 p-6 ${cardCls}`}>
            <h2 className="text-xl font-semibold text-main">Topic Coverage</h2>
            <div className={`${panelCls} h-[220px] flex items-center justify-center text-sm text-muted`}>
              [Heatmap placeholder]
            </div>
          </section>

          {/* Candidates */}
          <section className={`mt-8 p-6 ${cardCls}`}>
            <h2 className="text-xl font-semibold text-main">Top Candidates (by validation score)</h2>

            <div className="mt-4 overflow-x-auto">
              <div className="min-w-[680px]">
                <div className="grid grid-cols-4 text-xs font-semibold text-muted px-2">
                  <div>Candidate</div>
                  <div>Role</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>

                <div className="mt-3 border-t border-token" />

                {candidates.map((c, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 text-sm px-2 py-4 items-center text-main border-b border-token"
                  >
                    <div className="font-medium">{c.name}</div>
                    <div className="text-muted">{c.role}</div>
                    <div className="text-muted">{c.date}</div>
                    <div>
                      <StatusPill status={c.status} />
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

function SelectPill({ name, value, onChange, options, className }) {
  return (
    <div className="relative min-w-0">
      <select name={name} value={value} onChange={onChange} className={className}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted text-[10px]">
        ▾
      </span>
    </div>
  );
}

function StatusPill({ status }) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border";

  if (status === "Completed") {
    return (
      <span
        className={[
          base,
          "bg-emerald-100 text-emerald-900 border-emerald-200",
          "dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/25",
        ].join(" ")}
      >
        Completed
      </span>
    );
  }

  if (status === "Processing") {
    return (
      <span
        className={[
          base,
          "bg-sky-100 text-sky-900 border-sky-200",
          "dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/25",
        ].join(" ")}
      >
        Processing
      </span>
    );
  }

  return (
    <span
      className={[
        base,
        "bg-slate-100 text-slate-800 border-slate-200",
        "dark:bg-white/10 dark:text-slate-100 dark:border-white/15",
      ].join(" ")}
    >
      {status}
    </span>
  );
}
