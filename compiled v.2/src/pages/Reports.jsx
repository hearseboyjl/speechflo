import Menubar from "../components/Menubar";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { applyTheme, getSavedTheme } from "../theme";

export default function Reports() {
  const navigate = useNavigate();

  useEffect(() => {
    applyTheme(getSavedTheme());
  }, []);

  const reports = useMemo(
    () => [
      { id: "rpt-003", candidate: "Kim Z.", date: "2025-09-10", status: "Completed" },
    ],
    []
  );

  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "shadow-card",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "border-2 border-token",
  ].join(" ");

  const primaryBtn = [
    "h-9 px-8 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const dividerCls = "border-t border-slate-200 dark:border-slate-700/60";

const statusCompletedBtnCls = [
  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
  "status-completed",
  "hover:brightness-95 active:translate-y-[1px] transition",
].join(" ");

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-title">Reports</h1>
              <p className="mt-2 text-sm text-muted">
                Review recent interview reports and export insights.
              </p>
            </div>
          </div>

          <section className={`mt-8 p-8 ${cardCls}`}>
            <h2 className="text-sm font-semibold text-main">Recent Reports</h2>

            <div className="mt-8">
              {/* table head */}
              <div className="grid grid-cols-4 text-xs font-semibold text-muted px-6">
                <div className="text-center">Candidates</div>
                <div className="text-center">Date</div>
                <div className="text-center">Status</div>
                <div className="text-center">Actions</div>
              </div>

              <div className={`mt-4 ${dividerCls}`} />

              {/* rows */}
              <div className="mt-2 space-y-2">
                {reports.map((r) => (
                  <div key={r.id}>
                    <div className="grid grid-cols-4 items-center px-6 py-4">
                      <div className="text-center text-sm font-medium text-main">
                        {r.candidate}
                      </div>

                      <div className="text-center text-sm text-muted">{r.date}</div>

                      <div className="text-center">
                        <span className={statusCompletedBtnCls}>{r.status}</span>
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

                    <div className={dividerCls} />
                  </div>
                ))}

                {reports.length === 0 && (
                  <div className="px-6 py-10 text-center text-sm text-muted">
                    No reports yet.
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
