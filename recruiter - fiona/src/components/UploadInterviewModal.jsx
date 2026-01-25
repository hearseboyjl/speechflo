import { useState } from "react";

export default function UploadInterviewModal({ open, onClose }) {
  const [templateName, setTemplateName] = useState("");
  const [keywords, setKeywords] = useState("");

  if (!open) return null;

  function onCreate(e) {
    e.preventDefault();
    console.log("Create template:", templateName, keywords);

    setTemplateName("");
    setKeywords("");
  }

  function onDeleteAll() {
    console.log("Delete all templates");
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Modal container */}
      <div className="relative w-[920px] max-w-[95vw] rounded-2xl bg-[#EEF2F6] border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div>
              <h2 className="text-lg font-bold text-black">
                Manage Keyword Templates
              </h2>

              <div className="mt-6">
                <div className="text-sm font-semibold text-black/80">
                  Templates
                </div>

                <div className="mt-3 text-sm text-black/50">
                  No templates available.
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h2 className="text-lg font-bold text-black">
                Create Quick Template
              </h2>

              <form onSubmit={onCreate} className="mt-6 space-y-5">
                <input
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className={inputCls}
                  placeholder="Template Name"
                />

                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className={inputCls}
                  placeholder="comma, separated, keywords"
                />

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="h-9 px-6 rounded-md bg-[#07124A] text-white font-semibold shadow hover:brightness-95 active:translate-y-[1px] transition"
                  >
                    Create
                  </button>

                  <button
                    type="button"
                    onClick={onDeleteAll}
                    className="h-9 px-6 rounded-md bg-red-600 text-white font-semibold shadow hover:brightness-95 active:translate-y-[1px] transition"
                  >
                    Delete all
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="mt-10 flex justify-end">
            <button
              onClick={onClose}
              className="h-9 px-8 rounded-md bg-black/10 text-black font-semibold hover:bg-black/15 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "h-10 w-full rounded-md bg-white border border-black/20 px-4 text-sm text-black shadow-sm outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10";
