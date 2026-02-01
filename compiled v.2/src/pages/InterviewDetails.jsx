import Menubar from "../components/Menubar";
import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const interview = state?.interview;

  const interviewDate = interview?.date ?? "2025-09-15";
  const interviewer = interview?.interviewer ?? "JL";

  const pageBg = "bg-app-bloom";
  const titleCls = "text-3xl font-bold text-title";
  const metaCls = "mt-1 text-xs text-muted";
  const metaStrong = "font-medium text-main";

  const cardBase = [
    "rounded-2xl",
    "backdrop-blur-md",
    "border border-token",
    "shadow-soft",
    "p-6 pb-7",
  ].join(" ");

  const leftCardCls = [cardBase, "bg-surface"].join(" ");

  const rightCardCls = [
    cardBase, 
    "bg-kpi",
    "ring-1 ring-white/15",
    "text-white",
  ].join(" ");

  const sectionTitleLeft = "text-lg font-semibold text-main";
  const sectionTitleRight = "text-lg font-semibold text-white";

  const btnBase = [
    "font-semibold",
    "shadow-card",
    "hover:brightness-95",
    "active:translate-y-[1px]",
    "transition",
  ].join(" ");

  const primaryBtn = [
    "h-9 px-5 rounded-xl",
    "bg-btn-primary text-white",
    "border border-white/25",
    btnBase,
  ].join(" ");

  const secondaryBtn = [
    "h-9 px-4 rounded-md",
    "bg-btn-primary text-white",
    "border border-white/20",
    "shadow-soft",
    "hover:brightness-95",
    "active:translate-y-[1px]",
    "transition",
  ].join(" ");

  const placeholderBoxLeft = [
    "rounded-md",
    "bg-surface-strong/70",
    "border border-token",
  ].join(" ");

  const placeholderBoxRight = [
    "rounded-md",
    "bg-black/15",
    "border border-white/15",
  ].join(" ");

  return (
    <div className={`min-h-screen w-full ${pageBg}`}>
      <Menubar />

      <main className={`min-h-screen ${pageBg} layout-main`}>
        <div className="max-w-[1200px] mx-auto px-10 py-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className={titleCls}>
                Interview Details
                {interview?.candidate ? ` - ${interview.candidate}` : ""}
              </h1>

              <p className={metaCls}>
                Date: <span className={metaStrong}>{interviewDate}</span> |{" "}
                Interviewer: <span className={metaStrong}>{interviewer}</span>
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
              <SectionCard title="Transcript" cardCls={leftCardCls} titleCls={sectionTitleLeft}>
                <div className={`h-[140px] ${placeholderBoxLeft}`} />
              </SectionCard>

              <SectionCard
                title="Skills extracted from resume"
                cardCls={leftCardCls}
                titleCls={sectionTitleLeft}
              >
                <div className={`h-[110px] ${placeholderBoxLeft}`} />
              </SectionCard>

              <SectionCard title="Summary" cardCls={leftCardCls} titleCls={sectionTitleLeft}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-muted">Overall Validation Score</div>
                    <div className={`mt-2 h-10 w-[140px] ${placeholderBoxLeft}`} />
                  </div>

                  <div className="md:text-right">
                    <div className="text-xs text-muted">Skill Validation accuracy</div>
                    <div className={`mt-2 h-10 w-[140px] md:ml-auto ${placeholderBoxLeft}`} />
                  </div>
                </div>

                <div className={`mt-5 h-[190px] ${placeholderBoxLeft}`} />
              </SectionCard>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <SectionCard title="Metrics" cardCls={rightCardCls} titleCls={sectionTitleRight}>
                <div className={`h-[110px] ${placeholderBoxRight}`} />
              </SectionCard>

              <SectionCard
                title="Per-Skill Validation"
                cardCls={rightCardCls}
                titleCls={sectionTitleRight}
              >
                <div className={`h-[120px] ${placeholderBoxRight}`} />
              </SectionCard>

              <SectionCard
                title="Recommended Next Step"
                cardCls={rightCardCls}
                titleCls={sectionTitleRight}
              >
                <div className={`min-h-[120px] ${placeholderBoxRight}`} />

                <div className="mt-5 flex flex-wrap gap-3">
                  <button type="button" className={secondaryBtn}>
                    Add recruiter note
                  </button>
                  <button type="button" className={secondaryBtn}>
                    Export Report
                  </button>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SectionCard({ title, children, cardCls, titleCls }) {
  return (
    <section className={cardCls}>
      <h2 className={titleCls}>{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
