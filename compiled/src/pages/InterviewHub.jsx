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
      navigate("/recruiter/interview-details", { state: { interview: row } });
    },
    [navigate]
  );


  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "border-2 border-token",
  ].join(" ");

  const tableWrapCls = [
    "mt-5 overflow-hidden rounded-xl",
    "bg-surface-strong/70 backdrop-blur-md",
    "border border-token",
  ].join(" ");

  const tableHeadCls = [
    "grid grid-cols-4 text-xs font-semibold",
    "text-muted",
    "bg-surface-strong/80",
    "border-b border-token",
  ].join(" ");

  const tableRowCls = "grid grid-cols-4 text-sm text-main border-b border-token";

  const searchCls = [
    "h-10 rounded-xl px-4",
    "bg-surface-strong border border-token",
    "bg-kpi", 
    "shadow-sm",
    "text-main placeholder:text-muted",
    "outline-none focus:ring-2 focus:ring-[#2F8DCD]/30 focus:border-[#2F8DCD]/40",
  ].join(" ");

  const primaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const secondaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-surface text-main font-semibold",
    "border border-token",
    "shadow-sm",
    "hover:brightness-[0.98]",
    "active:translate-y-[1px]",
    "transition",
  ].join(" ");

  const selectPillCls = [
    "h-10 w-full rounded-xl px-4 pr-10",
    "bg-surface-strong border border-token",
    "bg-kpi", 
    "text-main font-semibold",
    "appearance-none outline-none",
    "shadow-sm",
    "focus:ring-2 focus:ring-[#2F8DCD]/30 focus:border-[#2F8DCD]/40",
  ].join(" ");

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-title">Interviewer Hub</h1>
              <p className="mt-2 text-sm text-muted">
                Manage uploads, review transcripts, assign next steps
              </p>
            </div>

            {/* Upload Interview */}
            <div className="sm:pt-1 flex items-start justify-between sm:justify-end gap-3">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-main leading-none">
                  Upload Interview
                </span>
                <span className="mt-1 text-xs text-muted">Add a new recording</span>
              </div>

              <button
                type="button"
                onClick={() => navigate("/recruiter/upload-interview")}
                className={primaryBtn}
              >
                Upload New
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <SelectPill
              name="role"
              value={filters.role}
              onChange={onChange}
              options={["All Roles", "Frontend Dev", "Backend Dev", "UI/UX Designer"]}
              className="w-[170px]"
              selectCls={selectPillCls}
            />

            <SelectPill
              name="status"
              value={filters.status}
              onChange={onChange}
              options={["All Status", "Processing", "Completed", "Pending Review"]}
              className="w-[170px]"
              selectCls={selectPillCls}
            />

            <SelectPill
              name="date"
              value={filters.date}
              onChange={onChange}
              options={["Date", "This Week", "This Month", "This Year"]}
              className="w-[150px]"
              selectCls={selectPillCls}
            />

            <input
              name="search"
              value={filters.search}
              onChange={onChange}
              placeholder="Search candidate or job..."
              className={`${searchCls} w-full sm:w-[320px]`}
            />

            <button onClick={onApply} className={primaryBtn} type="button">
              Apply
            </button>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Interview Queue */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-main">Interview Queue</h3>
              </div>

              <div className={tableWrapCls}>
                <div className={tableHeadCls}>
                  <div className="px-6 py-3 text-center">File</div>
                  <div className="px-6 py-3 text-center">Candidate</div>
                  <div className="px-6 py-3 text-center">Role</div>
                  <div className="px-6 py-3 text-center">Status</div>
                </div>

                {rows.map((r) => (
                  <div key={r.id} className={tableRowCls}>
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

                    <div className="px-6 py-5 text-center text-muted">{r.role}</div>

                    <div className="px-6 py-5 text-center">
                      {r.status === "Completed" && (
                        <button
                          type="button"
                          onClick={() => goToDetails(r)}
                          className={statusCompletedBtnCls}
                          title="Open interview details"
                        >
                          Completed
                        </button>
                      )}

                      {r.status === "Processing" && (
                        <button
                          type="button"
                          onClick={() => onStatusQuickFilter(r.status)}
                          className={statusProcessingBtnCls}
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
                <button className={secondaryBtn} type="button">
                  Export CSV
                </button>
              </div>
            </section>

            {/* Right side cards */}
            <div className="space-y-6">
              <section className={`p-6 ${cardCls}`}>
                <h3 className="text-lg font-semibold text-main">Hub Summary</h3>
                <div className="mt-4 text-sm text-muted space-y-3">
                  {hubSummaryStats.map((item) => (
                    <div key={item.label}>
                      <span className="font-semibold text-main">{item.label}:</span>{" "}
                      {item.value}
                    </div>
                  ))}
                </div>
              </section>

              <section className={`p-6 ${cardCls}`}>
                <h3 className="text-lg font-semibold text-main">AI Suggestions</h3>
                <ol className="mt-4 text-sm text-muted list-decimal pl-5 space-y-2">
                  {aiSuggestions.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
              </section>

              <section className={`p-6 ${cardCls}`}>
                <h3 className="text-lg font-semibold text-main">Tips</h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">{tipsText}</p>
              </section>
            </div>
          </div>

          {/* Bulk Actions */}
          <section className={`mt-10 p-6 ${cardCls}`}>
            <h3 className="text-xl font-semibold text-main">Bulk Actions</h3>
            <p className="mt-2 text-sm text-muted">
              Select multiple interviews to run batch transcription and analysis or export
              multiple reports.
            </p>

            <button className={`${primaryBtn} mt-4 h-10 px-6`} type="button">
              Run Batch Analysis
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

function SelectPill({ name, value, onChange, options, className = "", selectCls }) {
  return (
    <div className={`relative ${className}`}>
      <select name={name} value={value} onChange={onChange} className={selectCls}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
        ▾
      </span>
    </div>
  );
}

const statusCompletedBtnCls = [
  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
  "status-completed",
  "hover:brightness-95 active:translate-y-[1px] transition",
].join(" ");

const statusProcessingBtnCls = [
  "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
  "status-processing",
  "hover:brightness-95 active:translate-y-[1px] transition",
].join(" ");
