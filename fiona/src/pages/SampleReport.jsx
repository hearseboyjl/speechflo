import Menubar from "../components/Menubar";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

export default function SampleReport() {
  const { reportId } = useParams();

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

  const panelCls = [
    "mt-4 rounded-xl",
    "bg-white/45 backdrop-blur-sm",
    "border border-white/50",
  ].join(" ");

  const primaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-[#2F8DCD]/15 text-[#2475AF] font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const secondaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-[#2F8DCD] text-white font-semibold",
    "border border-[#2F8DCD]/30",
    "shadow-sm",
    "hover:bg-[#2F8DCD]/20",
    "active:translate-y-[1px]",
    "transition",
  ].join(" ");


  const rejectBtn = [
    "h-10 px-6 rounded-xl",
    "bg-red-600 text-white font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:bg-red-700",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  // Keywords detected
  const chipCls =
    "inline-flex items-center justify-center rounded-full bg-[#2F8DCD]/10 text-[#2475AF] border border-[#2F8DCD]/30 px-3 py-1.5 text-xs font-semibold";

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <div className={`p-8 ${cardCls}`}>
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-[#002853]">
                  {report.title}
                </h1>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="text-sm text-slate-700">
                    <span className="font-semibold">Date:</span> {report.date}
                  </div>

                  <button className={primaryBtn}>Export PDF</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3">
                <button className={secondaryBtn}>Endorse to CEO</button>
                <button className={rejectBtn}>Reject</button>
              </div>
            </div>

            {/* Line below title */}
            <div className="mt-6 border-t border-slate-200" />

            {/* Applicant info */}
            <section className="mt-6">
              <h2 className="text-xs font-bold text-slate-700 tracking-wide">
                APPLICANT INFORMATION
              </h2>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoPill label="Name" value={report.applicant.name} />
                <InfoPill label="Email" value={report.applicant.email} />
                <InfoPill label="Position" value={report.applicant.position} />
                <InfoPill label="Interviewed By" value={report.applicant.interviewedBy} />
              </div>
            </section>

            {/* AI Analysis Summary */}
            <section className="mt-6">
              <h2 className="text-xs font-bold text-slate-700 tracking-wide">
                AI ANALYSIS SUMMARY
              </h2>

              <div className={`${panelCls} p-5`}>
                <div className="text-sm text-slate-800">
                  <span className="font-semibold">Sentiment Score:</span>{" "}
                  {report.aiSummary.sentimentScore}
                </div>

                <div className="mt-2 text-sm text-slate-800">
                  <span className="font-semibold">Confidence Level:</span>{" "}
                  {report.aiSummary.confidenceLevel}
                </div>
              </div>

              {/* Keywords */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="text-sm font-semibold text-slate-700">
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
              <h2 className="text-xs font-bold text-slate-700 tracking-wide">
                AI INSIGHTS
              </h2>

              <div className="mt-4 bg-[#F6E7B7]/70 border-l-4 border-[#E0B400] rounded-xl p-5 shadow-sm">
                <p className="text-sm text-slate-900 leading-relaxed">
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
  const pillCls =
    "rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-sm px-5 py-3";

  return (
    <div className={pillCls}>
      <div className="text-sm text-slate-800">
        <span className="font-semibold">{label}:</span> {value}
      </div>
    </div>
  );
}
