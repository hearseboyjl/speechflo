import Menubar from "../components/Menubar";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { applyTheme, getSavedTheme } from "../theme";

export default function SampleReport() {
  const { reportId } = useParams();

  useEffect(() => {
    applyTheme(getSavedTheme());
  }, []);

  const report = useMemo(
    () => ({
      id: reportId ?? "rpt-003",
      title: "Applicant Interview Report",
      date: "October 15, 2025",
      applicant: {
        name: "Kim Zamora",
        email: "kim.zamora@northstartech.com",
        position: "Back-end Developer (Python)",
        interviewedBy: "JL",
      },
      aiSummary: {
        sentimentScore: "0.82 (Positive)",
        confidenceLevel: "High",
        keywords: ["Python", "Flask", "Docker", "React"],
      },
      insight:
        "The applicant demonstrated strong knowledge and credible technical experience in back-end tasks. Maintained consistency on resume-interview cross-check analysis by AI. Analysis indicated high confidence level. (report result is highly accurate.)",
    }),
    [reportId]
  );

  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]",
    "transition-shadow",
    "border-2 border-token",
  ].join(" ");

  const panelCls = [
    "mt-4 rounded-xl",
    "bg-surface-strong backdrop-blur-sm",
    "border border-token",
  ].join(" ");

  const dividerCls = "border-t border-token";

  const exportBtn = [
    "h-10 px-6 rounded-xl",
    "shadow-[0_8px_20px_rgba(15,23,42,0.12)]",
    "bg-btn-primary font-semibold",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
    "dark:bg-sky-400/10 dark:text-sky-200 dark:border dark:border-sky-300/20",
  ].join(" ");

  const primaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95",
    "active:translate-y-[1px]",
    "transition",
  ].join(" ");

  const rejectBtn = [
    "h-10 px-6 rounded-xl",
    "bg-btn-reject font-semibold",
    "shadow-card",
    "hover:brightness-95",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const chipCls = [
    "inline-flex items-center justify-center rounded-full",
    "bg-chip text-chip border border-chip",
    "px-3 py-1.5 text-xs font-semibold",
  ].join(" ");

  const sectionTitleCls =
    "text-xs font-bold tracking-wide text-title";

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <div className={`p-8 ${cardCls}`}>
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-title">{report.title}</h1>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="text-sm text-muted">
                    <span className="font-semibold text-main">Date:</span>{" "}
                    {report.date}
                  </div>

                  <button className={exportBtn} type="button">
                    Export PDF
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3">
                <button className={primaryBtn} type="button">
                  Endorse to CEO
                </button>
                <button className={rejectBtn} type="button">
                  Reject
                </button>
              </div>
            </div>

            {/* Line below title */}
            <div className={`mt-6 ${dividerCls}`} />

            {/* Applicant info */}
            <section className="mt-6">
              <h2 className={sectionTitleCls}>APPLICANT INFORMATION</h2>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoPill label="Name" value={report.applicant.name} />
                <InfoPill label="Email" value={report.applicant.email} />
                <InfoPill label="Position" value={report.applicant.position} />
                <InfoPill
                  label="Interviewed By"
                  value={report.applicant.interviewedBy}
                />
              </div>
            </section>

            {/* AI Analysis Summary */}
            <section className="mt-6">
              <h2 className={sectionTitleCls}>AI ANALYSIS SUMMARY</h2>

              <div className={`${panelCls} p-5`}>
                <div className="text-sm text-main">
                  <span className="font-semibold">Sentiment Score:</span>{" "}
                  <span className="text-muted">{report.aiSummary.sentimentScore}</span>
                </div>

                <div className="mt-2 text-sm text-main">
                  <span className="font-semibold">Confidence Level:</span>{" "}
                  <span className="text-muted">
                    {report.aiSummary.confidenceLevel}
                  </span>
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="text-sm font-semibold text-main">
                  Keywords Detected:
                </div>

                <div className="flex flex-wrap gap-2">
                  {report.aiSummary.keywords.map((k) => (
                    <span key={k} className={chipCls}>
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Insights */}

            <section className="mt-6">
              <h2 className={sectionTitleCls}>AI INSIGHTS</h2>
              <div
                className={[
                  "mt-4 rounded-xl p-5 border-l-4",
                  "bg-insight border-insight ring-insight text-insight",
                  "shadow-soft",
                ].join(" ")}
              >
                <p className="text-sm leading-relaxed text-insight">
                  {report.insight}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoPill({ label, value }) {
  const pillCls = [
    "rounded-xl",
    "bg-surface-strong backdrop-blur-md",
    "border border-token",
    "shadow-sm px-5 py-3",
  ].join(" ");

  return (
    <div className={pillCls}>
      <div className="text-sm text-main">
        <span className="font-semibold">{label}:</span>{" "}
        <span className="text-muted">{value}</span>
      </div>
    </div>
  );
}
  