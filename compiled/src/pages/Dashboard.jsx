import Menubar from "../components/Menubar";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = useMemo(
    () => [
      { label: "Interviews Recorded (This Month)", value: "--" },
      { label: "Average Keyword Coverage", value: "--" },
      { label: "Top Skill Mentioned", value: "--" },
    ],
    []
  );

  const recent = useMemo(
    () => [
      {
        candidate: "John D.",
        role: "Front End Dev",
        date: "10/15/2025",
        status: "Pending",
      },
    ],
    []
  );

  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "border-2 border-token",
    "shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
  ].join(" ");

  const panelCls = [
    "mt-4 rounded-xl",
    "bg-surface-soft backdrop-blur-sm",
    "border border-token",
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

  const primaryBtn = [
    "h-10 px-5 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-card",
    "hover:brightness-95",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const primaryBtnFull = [
    "w-full h-12 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-card",
    "hover:brightness-95",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const kpiLabel =
    "text-[12px] sm:text-[13px] font-semibold text-muted leading-snug";
  const kpiValue = "mt-1 text-xl sm:text-2xl font-extrabold text-main";

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-title">Dashboard</h1>
              <p className="mt-2 text-sm text-muted">
                Overview of interviews, coverage, and pipeline activity.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/dashboard/export")}
                className={primaryBtn}
                type="button"
              >
                Export
              </button>

              <button
                onClick={() => navigate("/upload-interview")}
                className={primaryBtn}
                type="button"
              >
                Upload Interview
              </button>
            </div>
          </div>

          {/* TOP KPIs */}
          <div className={kpiBg}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className={kpiTile}>
                  <div className={kpiLabel}>{s.label}</div>
                  <div className={kpiValue}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE GRID */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Keyword Coverage Trends */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-main">
                Keyword Coverage Trends
              </h2>
              <div className={`${panelCls} h-[320px]`} />
            </section>

            {/* Recent Interviews */}
            <section className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-main">
                Recent Interviews
              </h2>

              <div className="mt-4">
                <div className="grid grid-cols-4 text-xs font-semibold text-muted px-2">
                  <div>Candidate</div>
                  <div>Role</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>

                <div className="mt-3 border-t border-token" />

                {recent.map((r, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 text-sm px-2 py-4 items-center text-main border-b border-token"
                  >
                    <div className="font-medium">{r.candidate}</div>
                    <div className="text-muted">{r.role}</div>
                    <div className="text-muted">{r.date}</div>
                    <div>
                      <span className={statusPendingCls}>{r.status}</span>
                    </div>
                  </div>
                ))}

                {/* placeholders */}
                <div className="grid grid-cols-4 text-xs font-semibold text-muted/60 px-2 py-4 border-b border-token">
                  <div>--</div>
                  <div>--</div>
                  <div>--</div>
                  <div>--</div>
                </div>
                <div className="grid grid-cols-4 text-xs font-semibold text-muted/60 px-2 py-4">
                  <div>--</div>
                  <div>--</div>
                  <div>--</div>
                  <div>--</div>
                </div>
              </div>
            </section>
          </div>

          {/* LOWER GRID */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pipeline Overview */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-main">
                Pipeline Overview
              </h2>
              <div className={`${panelCls} h-[300px]`} />
            </section>

            {/* Quick Actions */}
            <section className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-main">Quick Actions</h2>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() => navigate("/dashboard/new-upload")}
                  className={primaryBtnFull}
                  type="button"
                >
                  New Upload
                </button>

                <button
                  onClick={() => navigate("/dashboard/bulk-analysis")}
                  className={primaryBtnFull}
                  type="button"
                >
                  Run Bulk Analysis
                </button>

                <button
                  onClick={() => navigate("/dashboard/export-summary")}
                  className={primaryBtnFull}
                  type="button"
                >
                  Export Summary
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

const statusPendingCls = [
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border",
  "bg-slate-100 text-slate-800 border-slate-200", // light
  "dark:bg-white/10 dark:text-slate-100 dark:border-white/15", // dark
].join(" ");
