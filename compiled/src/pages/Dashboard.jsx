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

  const cardCls =
    "rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl transition-shadow";

  const panelCls =
    "mt-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200";

  const kpiBg =
    "mt-8 rounded-2xl bg-[#77bce1] border border-slate-200 shadow-lg px-4 sm:px-6 py-4";

  const kpiTile =
    "rounded-2xl bg-white border border-slate-200 shadow-md px-4 py-4 sm:px-6 sm:py-5 min-h-[92px] sm:min-h-[110px] w-full";

  const primaryBtn =
    "h-10 px-5 rounded-xl bg-[#2F8DCD] text-white font-semibold shadow-md hover:brightness-95 active:translate-y-[1px] transition-all duration-200";

  const primaryBtnFull =
    "w-full h-12 rounded-xl bg-[#2F8DCD] text-white font-semibold shadow-md hover:brightness-95 active:translate-y-[1px] transition-all duration-200";

  const kpiLabel =
    "text-[12px] sm:text-[13px] font-semibold text-slate-600 leading-snug";
  const kpiValue = "mt-1 text-xl sm:text-2xl font-extrabold text-slate-900";

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#abd7f4] via-[#c4d6e3] to-[#4a8fc1]">
      <Menubar />

      <main className="min-h-screen pl-[110px] pr-8 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#002853]">Dashboard</h1>
              <p className="mt-2 text-sm text-slate-600">
                Overview of interviews, coverage, and pipeline activity.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => navigate("/recruiter/dashboard/export")} className={primaryBtn}>
                Export
              </button>
              <button onClick={() => navigate("/upload-interview")} className={primaryBtn}>
                Upload Interview
              </button>
            </div>
          </div>

          {/* KPIs */}
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

          {/* Middle */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Keyword Coverage Trends
              </h2>
              <div className={`${panelCls} h-[320px]`} />
            </section>

            <section className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Recent Interviews
              </h2>

              <div className="mt-4">
                <div className="grid grid-cols-4 text-xs font-semibold text-slate-500 px-2">
                  <div>Candidate</div>
                  <div>Role</div>
                  <div>Date</div>
                  <div>Status</div>
                </div>

                <div className="mt-3 border-t border-slate-200" />

                {recent.map((r, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 text-sm px-2 py-4 items-center text-slate-800 border-b border-slate-200"
                  >
                    <div className="font-medium">{r.candidate}</div>
                    <div className="text-slate-500">{r.role}</div>
                    <div className="text-slate-500">{r.date}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border bg-slate-100 text-slate-800 border-slate-200">
                        {r.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Lower */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">
                Pipeline Overview
              </h2>
              <div className={`${panelCls} h-[300px]`} />
            </section>

            <section className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">Quick Actions</h2>
              <div className="mt-6 space-y-4">
                <button onClick={() => navigate("/dashboard/new-upload")} className={primaryBtnFull}>
                  New Upload
                </button>
                <button onClick={() => navigate("/dashboard/bulk-analysis")} className={primaryBtnFull}>
                  Run Bulk Analysis
                </button>
                <button onClick={() => navigate("/dashboard/export-summary")} className={primaryBtnFull}>
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
