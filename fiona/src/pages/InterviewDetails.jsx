import Menubar from "../components/Menubar";
import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const interview = state?.interview;

  const interviewDate = interview?.date ?? "2025-09-15";
  const interviewer = interview?.interviewer ?? "JL";

  return (
    <div className="min-h-screen w-full bg-app-bloom">
      <Menubar />

      <main className="min-h-screen bg-app-bloom layout-main">
        <div className="max-w-[1200px] mx-auto px-10 py-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-[#002853]">
                Interview Details
                {interview?.candidate ? ` - ${interview.candidate}` : ""}
              </h1>

              <p className="mt-1 text-xs text-slate-600">
                Date:{" "}
                <span className="font-medium text-slate-800">
                  {interviewDate}
                </span>{" "}
                | Interviewer:{" "}
                <span className="font-medium text-slate-800">
                  {interviewer}
                </span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="h-9 px-5 rounded-xl bg-[#2F8DCD] backdrop-blur-md border border-white/70 text-[#f8f6f1] font-semibold shadow hover:brightness-95 active:translate-y-[1px] transition"
            >
              Back
            </button>
          </div>

          {/* Main grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">
              <SectionCard title="Transcript">
                <div className="h-[140px] rounded-md bg-white/60 border border-slate-200" />
              </SectionCard>

              <SectionCard title="Skills extracted from resume">
                <div className="h-[110px] rounded-md bg-white/60 border border-slate-200" />
              </SectionCard>

              <SectionCard title="Summary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-slate-600">
                      Overall Validation Score
                    </div>
                    <div className="mt-2 h-10 w-[140px] rounded-md bg-white/60 border border-slate-200" />
                  </div>

                  <div className="md:text-right">
                    <div className="text-xs text-slate-600">
                      Skill Validation accuracy
                    </div>
                    <div className="mt-2 h-10 w-[140px] md:ml-auto rounded-md bg-white/60 border border-slate-200" />
                  </div>
                </div>

                <div className="mt-5 h-[190px] rounded-md bg-white/60 border border-slate-200" />
              </SectionCard>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <SectionCard title="Metrics">
                <div className="h-[110px] rounded-md bg-white/60 border border-slate-200" />
              </SectionCard>

              <SectionCard title="Per-Skill Validation">
                <div className="h-[120px] rounded-md bg-white/60 border border-slate-200" />
              </SectionCard>

              <SectionCard title="Recommended Next Step">
                <div className="min-h-[120px] rounded-md bg-white/60 border border-slate-200" />

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="h-9 px-4 rounded-md bg-[#2F8DCD] text-white font-semibold shadow hover:brightness-95 transition">
                    Add recruiter note
                  </button>
                  <button className="h-9 px-4 rounded-md bg-[#2F8DCD] text-white font-semibold shadow hover:brightness-95 transition">
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

function SectionCard({ title, children }) {
  return (
    <section className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_12px_30px_rgba(15,23,42,0.08)] p-6 pb-7">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

