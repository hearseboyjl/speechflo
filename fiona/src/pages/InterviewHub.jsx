import Menubar from "../components/Menubar";
import { useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function InterviewHub() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    role: "All Roles",
    status: "All Status",
    date: "Date",
    search: "",
  });

  const rows = useMemo(
    () => [
      {
        id: "kim_interview",
        file: "kim_interview.mp4",
        candidate: "Kim Z.",
        role: "Backend Dev",
        status: "Completed",
      },
      {
        id: "maria_interview",
        file: "maria_interview",
        candidate: "Maria. L",
        role: "UI/UX Designer",
        status: "Processing",
      },
    ],
    []
  );

  const hubSummaryStats = useMemo(
    () => [
      { label: "Interviews This Week", value: "--" },
      { label: "Pending Reviews", value: "--" },
      { label: "Avg. Processing Time", value: "--" },
      { label: "Avg. Validation Score", value: "--" },
    ],
    []
  );

  const aiSuggestions = useMemo(
    () => ["Review John D. (Processing Complete)", "Re-run analysis for Maria L."],
    []
  );

  const tipsText =
    "Use keyword sets to customize validation per job. Toggle sentiment analysis if interviewer wants tone insights.";

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setFilters((p) => ({ ...p, [name]: value }));
  }, []);

  const onApply = useCallback(() => {
    console.log("Apply filters:", filters);
  }, [filters]);

  const onStatusQuickFilter = useCallback((status) => {
    setFilters((p) => ({ ...p, status }));
    console.log("Quick filter status:", status);
  }, []);

  const goToDetails = useCallback(
    (row) => {
      navigate("/interview-details", { state: { interview: row } });
    },
    [navigate]
  );

  const cardCls = [
    "rounded-2xl",
    "bg-white/75 backdrop-blur-sm",
    "border-2 border-[#77bce1]",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
  ].join(" ");

  const rightCardCls = [
    "rounded-2xl",
    "bg-white/70 backdrop-blur-md",
    "border-2 border-[#77bce1]", 
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "p-6",
  ].join(" ");

  const search = [
    "h-10 rounded-xl px-4",
    "bg-white/75 backdrop-blur-sm",
    "border border-white/70",
    "shadow-[0_8px_18px_rgba(15,23,42,0.06)]",
    "text-slate-800 placeholder:text-slate-500",
    "focus:outline-none focus:ring-2 focus:ring-[#9ad9ea]/60",
  ].join(" ");

  const darkBtn = [
    "h-10 px-6 rounded-xl",
    "bg-[#2F8DCD] text-white font-semibold",
    "shadow-[0_10px_25px_rgba(33,39,123,0.25)]",
    "hover:brightness-105 active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const lightBtn = [
    "h-10 px-6 rounded-xl",
    "bg-[#9ad9ea] text-[#0f172a] font-semibold",
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
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#002853]">
                Interviewer Hub
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Manage uploads, review transcripts, assign next steps
              </p>
            </div>

            {/* Upload Interview */}
            <div className="sm:pt-1 flex items-start justify-between sm:justify-end gap-3">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-slate-900 leading-none">
                  Upload Interview
                </span>
                <span className="mt-1 text-xs text-slate-500">
                  Add a new recording
                </span>
              </div>

              <button
                type="button"
                onClick={() => navigate("/upload-interview")}
                className={darkBtn}
              >
                Upload New
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SelectGlass
              name="role"
              value={filters.role}
              onChange={onChange}
              options={["All Roles", "Frontend Dev", "Backend Dev", "UI/UX Designer"]}
              className="w-[170px]"
            />

            <SelectGlass
              name="status"
              value={filters.status}
              onChange={onChange}
              options={["All Status", "Processing", "Completed", "Pending Review"]}
              className="w-[170px]"
            />

            <SelectGlass
              name="date"
              value={filters.date}
              onChange={onChange}
              options={["Date", "This Week", "This Month", "This Year"]}
              className="w-[150px]"
            />

            <input
              name="search"
              value={filters.search}
              onChange={onChange}
              placeholder="Search candidate or job..."
              className={`${search} w-full sm:w-[320px]`}
            />

            <button onClick={onApply} className={darkBtn} type="button">
              Apply
            </button>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Interview Queue */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">
                  Interview Queue
                </h3>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white/55 backdrop-blur-md">
                <div className="grid grid-cols-4 text-xs font-semibold text-slate-600 bg-white/60 border-b border-slate-200">
                  <div className="px-6 py-3 text-center">File</div>
                  <div className="px-6 py-3 text-center">Candidate</div>
                  <div className="px-6 py-3 text-center">Role</div>
                  <div className="px-6 py-3 text-center">Status</div>
                </div>

                {rows.map((r) => (
                  <div
                    key={r.id}
                    className="grid grid-cols-4 text-sm text-slate-900 border-b border-slate-200"
                  >
                    <div className="px-6 py-5">
                      {r.file.includes("kim_interview") ? (
                        <>
                          kim_interview.
                          <br />
                          mp4
                        </>
                      ) : (
                        r.file
                      )}
                    </div>

                    <div className="px-6 py-5 text-center font-medium">
                      {r.candidate}
                    </div>

                    <div className="px-6 py-5 text-center text-slate-700">
                      {r.role}
                    </div>

                    <div className="px-6 py-5 text-center">
                      {r.status === "Completed" && (
                        <button
                          type="button"
                          onClick={() => goToDetails(r)}
                          className={[
                            "inline-flex items-center px-3 py-1 rounded-full",
                            "bg-emerald-100/70 text-emerald-800 text-xs font-semibold",
                            "border border-emerald-200",
                            "hover:brightness-95 active:translate-y-[1px] transition",
                          ].join(" ")}
                          title="Open interview details"
                        >
                          Completed
                        </button>
                      )}

                      {r.status === "Processing" && (
                        <button
                          type="button"
                          onClick={() => onStatusQuickFilter(r.status)}
                          className={[
                            "inline-flex items-center px-3 py-1 rounded-full",
                            "bg-sky-100/70 text-sky-900 text-xs font-semibold",
                            "border border-sky-200",
                            "hover:brightness-95 active:translate-y-[1px] transition",
                          ].join(" ")}
                          title="Filter to Processing"
                        >
                          Processing
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Export CSV button */}
              <div className="mt-5 flex justify-end">
                <button className={lightBtn} type="button">
                  Export CSV
                </button>
              </div>
            </section>

            {/* Right side cards */}
            <div className="space-y-6">
              <section className={rightCardCls}>
                <h3 className="text-lg font-semibold text-slate-900">Hub Summary</h3>
                <div className="mt-4 text-sm text-slate-700 space-y-3">
                  {hubSummaryStats.map((item) => (
                    <div key={item.label}>
                      <span className="font-semibold text-slate-900">
                        {item.label}:
                      </span>{" "}
                      {item.value}
                    </div>
                  ))}
                </div>
              </section>

              <section className={rightCardCls}>
                <h3 className="text-lg font-semibold text-slate-900">
                  AI Suggestions
                </h3>
                <ol className="mt-4 text-sm text-slate-700 list-decimal pl-5 space-y-2">
                  {aiSuggestions.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
              </section>

              <section className={rightCardCls}>
                <h3 className="text-lg font-semibold text-slate-900">Tips</h3>
                <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                  {tipsText}
                </p>
              </section>
            </div>
          </div>

          {/* Bulk Actions */}
          <section className={`mt-10 p-6 ${cardCls}`}>
            <h3 className="text-xl font-semibold text-slate-900">Bulk Actions</h3>
            <p className="mt-2 text-sm text-slate-600">
              Select multiple interviews to run batch transcription and analysis
              or export multiple reports.
            </p>

            <button className={`${darkBtn} mt-4 h-10 px-6`} type="button">
              Run Batch Analysis
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

function SelectGlass({ name, value, onChange, options, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={[
          "h-10 w-full rounded-xl px-4 pr-10",
          "bg-white/75 backdrop-blur-sm",
          "border border-white/70",
          "shadow-[0_8px_18px_rgba(15,23,42,0.06)]",
          "text-slate-800 font-semibold",
          "appearance-none outline-none",
          "focus:ring-2 focus:ring-[#9ad9ea]/60",
        ].join(" ")}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
        ▾
      </span>
    </div>
  );
}