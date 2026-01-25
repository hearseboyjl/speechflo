import Menubar from "../components/Menubar";
import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const interview = state?.interview;
  const interviewDate = interview?.date ?? "2025-09-15";
  const interviewer = interview?.interviewer ?? "JL";

  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "border border-token",
    "shadow-card",
    "p-6 pb-7",
  ].join(" ");

  const primaryBtn = [
    "h-9 px-5 rounded-xl",
    "bg-btn-primary font-semibold",
    "shadow-card",
    "hover:brightness-95 active:translate-y-[1px] transition-all duration-200",
  ].join(" ");

  const smallBtn = [
    "h-9 px-4 rounded-md",
    "bg-btn-primary font-semibold",
    "shadow-card",
    "hover:brightness-95 transition",
  ].join(" ");

  return (
    <div className="min-h-screen w-full bg-app-bloom">
      <Menubar />

      <main className="min-h-screen bg-app-bloom layout-main">
        <div className="max-w-[1200px] mx-auto px-10 py-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-title">
                Interview Details
                {interview?.candidate ? ` - ${interview.candidate}` : ""}
              </h1>

              <p className="mt-1 text-xs text-muted">
                Date: <span className="font-medium text-main">{interviewDate}</span>{" "}
                | Interviewer:{" "}
                <span className="font-medium text-main">{interviewer}</span>
              </p>
            </div>

            <button type="button" onClick={() => navigate(-1)} className={primaryBtn}>
              Back
            </button>
          </div>

          {/* Main grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">
              <SectionCard title="Transcript" cardCls={cardCls} />
              <SectionCard title="Skills extracted from resume" cardCls={cardCls} />

              <section className={cardCls}>
                <h2 className="text-lg font-semibold text-main">Summary</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-muted">Overall Validation Score</div>
                    <div className="mt-2 h-10 w-[140px] rounded-md bg-surface-soft border border-token" />
                  </div>

                  <div className="md:text-right">
                    <div className="text-xs text-muted">Skill Validation accuracy</div>
                    <div className="mt-2 h-10 w-[140px] md:ml-auto rounded-md bg-surface-soft border border-token" />
                  </div>
                </div>

                <div className="mt-5 h-[190px] rounded-md bg-surface-soft border border-token" />
              </section>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <SectionCard title="Metrics" cardCls={cardCls} />
              <SectionCard title="Per-Skill Validation" cardCls={cardCls} />

              <section className={cardCls}>
                <h2 className="text-lg font-semibold text-main">Recommended Next Step</h2>

                <div className="mt-4 min-h-[120px] rounded-md bg-surface-soft border border-token" />

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className={smallBtn}>Add recruiter note</button>
                  <button className={smallBtn}>Export Report</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SectionCard({ title, cardCls }) {
  return (
    <section className={cardCls}>
      <h2 className="text-lg font-semibold text-main">{title}</h2>
      <div className="mt-4 h-[140px] rounded-md bg-surface-soft border border-token" />
    </section>
  );
}
