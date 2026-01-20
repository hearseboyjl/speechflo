import Menubar from "../components/Menubar";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = useMemo(
    () => [
      { label: "Interviews Recorded (This Month)", value: "--" },
      { label: "Average Keyword Coverage", value: "--" },
      { label: "Top Skill Mentioned", value: "--", big: true },
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
    "bg-white/70 backdrop-blur-md",
    "shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
  ].join(" ");

  /* top cards */
  const panelCls = [
    "mt-4 rounded-xl",
    "border border-white/50",
  ].join(" ");

  const primaryBtn = [
    "h-10 px-5 rounded-xl",
    "bg-[#2F8DCD]",
    "text-[#f8f6f1] font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const primaryBtnFull = [
    "w-full h-12 rounded-xl",
    "bg-[#2F8DCD] text-white font-semibold",
    "hover:brightness-95 active:translate-y-[1px]",
    "transition",
  ].join(" ");

  const kpiBg = [
    "mt-8",
    "rounded-2xl",
    "bg-[#77bce1]", /* 1F6FA6 */
    "border border-white/10",
    "shadow-[0_18px_45px_rgba(15,23,42,0.18)]",
    "px-4 sm:px-6",
    "py-4",
    "flex items-center",
  ].join(" ");

  const kpiTile = [
    "rounded-2xl",
    "bg-white",
    "border border-slate-200/70",
    "shadow-[0_10px_28px_rgba(15,23,42,0.10)]",
    "px-4 py-4 sm:px-6 sm:py-5",
    "min-h-[92px] sm:min-h-[110px]",
    "w-full",
  ].join(" ");

  const kpiLabel = "text-[12px] sm:text-[13px] font-semibold text-slate-600 leading-snug";
  const kpiValue = "mt-1 text-xl sm:text-2xl font-extrabold text-[#0B2B4A]";

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#002853]">Dashboard</h1>
              <p className="mt-2 text-sm text-slate-600">
                Overview of interviews, coverage, and pipeline activity.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/dashboard/export")}
                className={primaryBtn}
              >
                Export
              </button>

              <button
                onClick={() => navigate("/upload-interview")}
                className={primaryBtn}
              >
                Upload Interview
              </button>
            </div>
          </div>

          {/* TOP KPIs (centered vertically in the blue band) */}
          <div className={kpiBg}>
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className={kpiTile}>
                    <div className={kpiLabel}>{s.label}</div>
                    <div className={kpiValue}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MIDDLE GRID */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Keyword Coverage Trends */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Keyword Coverage Trends
              </h2>
              <div className={`${panelCls} h-[320px]`} />
            </section>

            {/* Recent Interviews */}
            <section className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Recent Interviews
              </h2>

              <div className="mt-4">
                <div className="grid grid-cols-4 text-xs font-semibold text-slate-600 px-2">
                  <div>Candidate</div>
                  <div>Role</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>

                <div className="mt-3 border-t border-slate-200" />

                {recent.map((r, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 text-sm px-2 py-4 items-center text-slate-900"
                  >
                    <div className="font-medium">{r.candidate}</div>
                    <div className="text-slate-700">{r.role}</div>
                    <div className="text-slate-700">{r.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full bg-white/60 px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                        {r.status}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="border-t border-slate-200" />
                <div className="grid grid-cols-4 text-xs font-semibold text-slate-400 px-2 py-4">
                  <div>--</div>
                  <div>--</div>
                  <div>--</div>
                  <div>--</div>
                </div>
                <div className="border-t border-slate-200" />
                <div className="grid grid-cols-4 text-xs font-semibold text-slate-400 px-2 py-4">
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
              <h2 className="text-xl font-semibold text-slate-900">
                Pipeline Overview
              </h2>
              <div className={`${panelCls} h-[300px]`} />
            </section>

            {/* Quick Actions */}
            <section className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Quick Actions
              </h2>

              <div className="mt-6 space-y-4">
                <button
                  onClick={() => navigate("/dashboard/new-upload")}
                  className={primaryBtnFull}
                >
                  New Upload
                </button>

                <button
                  onClick={() => navigate("/dashboard/bulk-analysis")}
                  className={primaryBtnFull}
                >
                  Run Bulk Analysis
                </button>

                <button
                  onClick={() => navigate("/dashboard/export-summary")}
                  className={primaryBtnFull}
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
