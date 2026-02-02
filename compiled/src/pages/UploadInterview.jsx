import Menubar from "../components/Menubar";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadInterview() {
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const keywordDefaults = useMemo(
    () => ["communication", "teamwork", "problem-solving", "leadership", "adaptability"],
    []
  );

  const [form, setForm] = useState({
    jobTitle: "",
    applicantName: "",
    recruiterName: "",
    date: "",
  });

  const [useDefault] = useState(true); 
  const [keywords, setKeywords] = useState(["Java", "OOP", "Teamwork"]);
  const [keywordInput, setKeywordInput] = useState("");

  const [template, setTemplate] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [savedTemplates, setSavedTemplates] = useState([]);

  const [file, setFile] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const applyTemplate = (name) => {
    setTemplate(name);
    const found = savedTemplates.find((t) => t.name === name);
    if (found) setKeywords(found.keywords);
  };

  const addKeyword = () => {
    const v = keywordInput.trim();
    if (!v) return;

    const exists = keywords.some((k) => k.toLowerCase() === v.toLowerCase());
    if (exists) {
      setKeywordInput("");
      return;
    }

    setKeywords((p) => [...p, v]);
    setKeywordInput("");
  };

  const removeKeyword = (kw) => setKeywords((p) => p.filter((k) => k !== kw));

  const onKeywordKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addKeyword();
    }
  };

  const onPickFile = (e) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
  };

  const saveAsTemplate = () => {
    const name = templateName.trim();
    if (!name) return alert("Please enter a template name.");

    const exists = savedTemplates.some((t) => t.name.toLowerCase() === name.toLowerCase());
    if (exists) return alert("A template with that name already exists.");

    setSavedTemplates((p) => [{ name, keywords }, ...p]);
    setTemplateName("");
  };

  const onUpload = () => {
    if (!form.jobTitle.trim()) return alert("Job Title is required.");
    if (!form.applicantName.trim()) return alert("Applicant Name is required.");
    if (!file) return alert("Please attach an interview recording file.");

    const payload = {
      ...form,
      useDefault,
      keywords: useDefault ? keywordDefaults : keywords,
      file,
    };

    console.log("UPLOAD PAYLOAD:", payload);
    navigate("/recruiter/interviewer-hub");
  };

  const cardCls = [
    "rounded-2xl",
    "bg-surface backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "border-2 border-token",
    "p-6",
  ].join(" ");

  const inputCls =
    "h-10 w-full rounded-xl bg-surface-strong border border-token px-4 text-sm " +
    "text-main shadow-sm outline-none " +
    "placeholder:text-muted " +
    "focus:ring-2 focus:ring-[#2F8DCD]/30 focus:border-[#2F8DCD]/40";

  const selectCls = inputCls + " cursor-pointer pr-10 appearance-none font-semibold";

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

  const chipCls = [
    "inline-flex items-center gap-2",
    "rounded-full px-3 py-1 text-xs font-semibold border",
    "bg-surface-strong text-main border-token",
  ].join(" ");

  const defaultPillCls = [
    "inline-flex items-center",
    "rounded-full px-3 py-1 text-xs font-semibold border",
    "bg-btn-primary text-white border-token",
    "shadow-sm",
  ].join(" ");

  const linkCls = "text-xs font-semibold text-[#2F8DCD] hover:underline";

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <h1 className="text-4xl font-bold text-title">Upload a new interview</h1>

            <button type="button" onClick={() => navigate(-1)} className={secondaryBtn}>
              Back
            </button>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}
            <section className={`lg:col-span-2 ${cardCls}`}>
              <h2 className="text-xl font-semibold text-main">Interview Details</h2>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="Job Title (e.g. Front End Developer)"
                />
                <input
                  name="applicantName"
                  value={form.applicantName}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="Applicant Name"
                />
                <input
                  name="recruiterName"
                  value={form.recruiterName}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="Recruiter Name"
                />
                <input
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="mm/dd/yy"
                />
              </div>

              <div className="mt-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-title">Keywords for this Interview</h3>
                    <p className="mt-1 text-sm text-muted">
                      Choose a template or set job-specific keywords.
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-muted">set job-specific keywords</div>
                    <button type="button" className={`${linkCls} mt-1`}>
                      Manage templates
                    </button>
                  </div>
                </div>

                {/* Template */}
                <div className="mt-6 space-y-4">
                  <div className="relative w-full md:w-[340px]">
                    <div className="text-xs text-muted mb-2">Keyword Template</div>

                    <select
                      value={template}
                      onChange={(e) => applyTemplate(e.target.value)}
                      className={selectCls}
                    >
                      <option value="">--select template--</option>
                      {savedTemplates.map((t) => (
                        <option key={t.name} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                    </select>

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-[2px] text-muted">
                      ▾
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-main">Use default/global keyword set</div>
                </div>

                {/* Keyword input + Add btn*/}
                <div className="mt-6">
                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                    <input
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      onKeyDown={onKeywordKeyDown}
                      disabled={useDefault}
                      className={`${inputCls} ${useDefault ? "opacity-60 cursor-not-allowed" : ""}`}
                      placeholder="Type a keyword and press Enter"
                    />
                    <button
                      type="button"
                      onClick={addKeyword}
                      disabled={useDefault}
                      className={`${primaryBtn} ${useDefault ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      Add
                    </button>
                  </div>

                  {/* Keyword chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(useDefault ? keywordDefaults : keywords).map((k) => (
                      <span key={k} className={chipCls}>
                        {k}
                        {!useDefault && (
                          <button
                            type="button"
                            onClick={() => removeKeyword(k)}
                            className="ml-1 text-muted hover:text-main transition"
                            title="Remove"
                          >
                            ✕
                          </button>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Save template */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
                  <button
                    type="button"
                    onClick={saveAsTemplate}
                    className="h-10 px-6 rounded-xl bg-emerald-500 text-white font-semibold shadow-md hover:brightness-105 whitespace-nowrap"
                  >
                    Save as template
                  </button>

                  <input
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    className={inputCls}
                    placeholder="Template Name"
                  />
                </div>

                {/* Upload */}
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                  <button type="button" onClick={onUpload} className={primaryBtn}>
                    Upload Interview
                  </button>

                  <div className="flex items-center gap-3">
                    <input
                      ref={fileRef}
                      type="file"
                      accept="audio/*,video/*"
                      onChange={onPickFile}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="text-sm text-muted underline hover:text-main transition"
                    >
                      Add Interview Recording File
                    </button>

                    {file && (
                      <span className="text-xs text-main font-semibold truncate max-w-[260px]">
                        ({file.name})
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* RIGHT */}
            <div className="space-y-6">
              <section className={cardCls}>
                <h2 className="text-xl font-semibold text-main">Keyword Defaults</h2>
                <p className="mt-2 text-xs text-muted">
                  Default global keywords (used when “use default” is checked)
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {keywordDefaults.map((k) => (
                    <span key={k} className={defaultPillCls}>
                      {k}
                    </span>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-semibold text-main">Saved Templates</h3>

                <div className="mt-4 space-y-4">
                  {savedTemplates.map((t) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => applyTemplate(t.name)}
                      className={[
                        "w-full text-left rounded-xl",
                        "bg-surface-strong/70 backdrop-blur-md",
                        "border border-token",
                        "px-4 py-4",
                        "hover:brightness-[0.98] transition",
                      ].join(" ")}
                      title="Apply template"
                    >
                      <div className="text-sm font-semibold text-main">{t.name}</div>
                      <div className="mt-1 text-xs text-muted">{t.keywords.join(" · ")}</div>
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* end */}
        </div>
      </main>
    </div>
  );
}
