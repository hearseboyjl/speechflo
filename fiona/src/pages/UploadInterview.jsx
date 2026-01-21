import Menubar from "../components/Menubar";
import { useMemo, useState } from "react";
import UploadInterviewModal from "../components/UploadInterviewModal";

export default function UploadInterview() {
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);

  const keywordDefaults = useMemo(
    () => ["communication", "teamwork", "problem-solving", "leadership", "adaptability"],
    []
  );

  const [form, setForm] = useState({
    jobTitle: "",
    applicantName: "",
    recruiterName: "",
    date: "",
    template: "",
    useDefault: true,
    keywordInput: "",
    templateName: "",
    file: null,
  });

  const [keywords, setKeywords] = useState(["Java", "OOP", "Teamwork"]);

  function onChange(e) {
    const { name, value, type, checked, files } = e.target;
    setForm((p) => ({
      ...p,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files?.[0] ?? null
          : value,
    }));
  }

  function addKeyword() {
    const k = form.keywordInput.trim();
    if (!k) return;
    if (keywords.some((x) => x.toLowerCase() === k.toLowerCase())) return;

    setKeywords((p) => [...p, k]);
    setForm((p) => ({ ...p, keywordInput: "" }));
  }

  function removeKeyword(k) {
    setKeywords((p) => p.filter((x) => x !== k));
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log("UPLOAD payload:", { form, keywords });
    alert("Upload form submitted (demo). Check console.");
  }

  const cardCls = [
    "rounded-2xl",
    "bg-white/70 backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "border-2 border-[#77bce1]",
  ].join(" ");

  const panelCls = ["mt-4 rounded-xl", "bg-white/45 backdrop-blur-sm", "border border-white/50"].join(
    " "
  );

  const primaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-[#2F8DCD] text-white font-semibold",
    "shadow-[0_8px_20px_rgba(15,23,42,0.15)]",
    "hover:brightness-95 hover:shadow-[0_12px_28px_rgba(15,23,42,0.2)]",
    "active:translate-y-[1px]",
    "transition-all duration-200",
  ].join(" ");

  const secondaryBtn = [
    "h-10 px-6 rounded-xl",
    "bg-white/70 text-slate-900 font-semibold",
    "border border-slate-200",
    "shadow-sm",
    "hover:bg-white/80",
    "active:translate-y-[1px]",
    "transition",
  ].join(" ");

  const inputCls =
    "h-10 w-full rounded-xl bg-white/80 border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-[#2F8DCD]/30 focus:border-[#2F8DCD]/40";

  const selectCls = inputCls + " pr-10 appearance-none cursor-pointer";

  const chipCls =
    "inline-flex items-center gap-2 rounded-full " +
    "bg-[#2F8DCD]/10 text-[#2475AF] " +
    "border border-[#2F8DCD]/30 " +
    "px-3 py-1.5 text-xs font-semibold";

  return (
    <div className="min-h-screen bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main" >
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-[#002853]">Upload Interview</h1>
              <p className="mt-2 text-sm text-slate-600">
                Add a new interview, configure keywords, and attach a recording.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT BIG */}
            <section className={`lg:col-span-2 p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">Interview Details</h2>

              {/* inputs */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={onChange}
                  placeholder="Job Title (e.g. Front End Developer)"
                  className={inputCls}
                />
                <TextInput
                  name="applicantName"
                  value={form.applicantName}
                  onChange={onChange}
                  placeholder="Applicant Name"
                  className={inputCls}
                />
                <TextInput
                  name="recruiterName"
                  value={form.recruiterName}
                  onChange={onChange}
                  placeholder="Recruiter Name"
                  className={inputCls}
                />
                <TextInput
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  placeholder="mm/dd/yy"
                  className={inputCls}
                />
              </div>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">
                Keywords for this Interview
              </h3>

              {/* template */}
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
                <div className="text-xs font-semibold text-slate-700 w-[140px]">
                  Keyword Template
                </div>

                <div className="relative w-[220px]">
                  <select
                    name="template"
                    value={form.template}
                    onChange={onChange}
                    className={selectCls}
                  >
                    <option value="">--select template--</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="design">Design</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
                    ▾
                  </span>
                </div>

                <div className="md:ml-auto text-xs text-slate-500 md:text-right">
                  set job-specific keywords
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowTemplatesModal(true)}
                      className="text-[#2F8DCD] hover:underline font-semibold"
                    >
                      Manage templates
                    </button>
                  </div>
                </div>
              </div>

              {/* use default checkbox */}
              <div className="mt-6 flex items-center gap-3">
                <input
                  type="checkbox"
                  name="useDefault"
                  checked={form.useDefault}
                  onChange={onChange}
                  className="h-4 w-4 accent-[#2F8DCD]"
                />
                <span className="text-sm text-slate-700">
                  Use default/global keyword set
                </span>
              </div>

              {/* keyword input row */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <input
                  name="keywordInput"
                  value={form.keywordInput}
                  onChange={onChange}
                  placeholder="Type a keyword and press Enter"
                  className={inputCls}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addKeyword();
                    }
                  }}
                />

                <button type="button" onClick={addKeyword} className={primaryBtn}>
                  Add
                </button>
              </div>

              {/* keyword chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {keywords.map((k) => (
                  <span key={k} className={chipCls}>
                    {k}
                    <button
                      type="button"
                      onClick={() => removeKeyword(k)}
                      className="text-slate-500 hover:text-slate-700"
                      aria-label={`Remove ${k}`}
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>

              {/* save template row */}
              <div className="mt-8 flex flex-col md:flex-row md:items-center gap-3">
                <button type="button" className={secondaryBtn}>
                  Save as template
                </button>

                <input
                  name="templateName"
                  value={form.templateName}
                  onChange={onChange}
                  placeholder="Template Name"
                  className={`${inputCls} md:w-[320px]`}
                />
              </div>

              {/* bottom, buttons */}
              <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
                <button type="submit" className={primaryBtn}>
                  Upload Interview
                </button>

                <label className="text-sm text-slate-600 underline cursor-pointer">
                  Add Interview Recording File
                  <input
                    type="file"
                    name="file"
                    onChange={onChange}
                    className="hidden"
                    accept="audio/*,video/*"
                  />
                </label>

                {form.file ? (
                  <span className="text-sm text-slate-600 truncate max-w-[320px]">
                    Selected: {form.file.name}
                  </span>
                ) : null}
              </div>

              <div className={`${panelCls} h-[1px]`} />
            </section>

            {/* RIGHT */}
            <aside className={`p-6 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-slate-900">Keyword Defaults</h2>
              <p className="mt-2 text-xs text-slate-600">
                Default global keywords (used when “use default” is checked)
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {keywordDefaults.map((k) => (
                  <span key={k} className={chipCls}>
                    {k}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 text-lg font-semibold text-slate-900">
                Saved Templates
              </h3>

              <div className={`${panelCls} h-[420px]`} />
            </aside>
          </form>
        </div>
      </main>

      <UploadInterviewModal
        open={showTemplatesModal}
        onClose={() => setShowTemplatesModal(false)}
      />
    </div>
  );
}

function TextInput({ name, value, onChange, placeholder, className = "" }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}
