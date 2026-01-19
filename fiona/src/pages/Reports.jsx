import Menubar from "../components/Menubar";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();

  const reports = useMemo(
    () => [
      { id: "rpt-003", candidate: "Kim Z.", date: "2025-09-10", status: "Completed" },
    ],
    []
  );

  const COLLAPSED_W = 88;
  const OUTER_GAP = 16;
  const CONTENT_LEFT = COLLAPSED_W + OUTER_GAP;

  const cardCls = [
    "rounded-2xl",
    "bg-white/70 backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "border border-white/50",
  ].join(" ");

  const primaryBtn = [
    "h-9 px-8 rounded-xl",
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
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#002853]">Reports</h1>
              <p className="mt-2 text-sm text-slate-600">
                Review recent interview reports and export insights.
              </p>
            </div>
          </div>

          <section className={`mt-8 p-8 ${cardCls}`}>
            <h2 className="text-sm font-semibold text-slate-700">Recent Reports</h2>

            {/* table */}
            <div className="mt-8">
              <div className="grid grid-cols-4 text-xs font-semibold text-slate-600 px-6">
                <div className="text-center">Candidates</div>
                <div className="text-center">Date</div>
                <div className="text-center">Status</div>
                <div className="text-center">Actions</div>
              </div>

              <div className="mt-4 border-t border-slate-200" />

              <div className="mt-2 space-y-2">
                {reports.map((r) => (
                  <div key={r.id}>
                    <div className="grid grid-cols-4 items-center px-6 py-4">
                      <div className="text-center text-sm text-slate-900 font-medium">
                        {r.candidate}
                      </div>
                      <div className="text-center text-sm text-slate-700">{r.date}</div>
                      <div className="text-center text-sm text-slate-700">
                        <span className="inline-flex items-center rounded-full bg-emerald-100/70 px-2.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                          {r.status}
                        </span>
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => navigate(`/reports/${r.id}`)}
                          className={primaryBtn}
                        >
                          View
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-slate-200" />
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
