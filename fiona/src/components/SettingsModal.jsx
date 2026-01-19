export default function SettingsModal({ open, onClose, message }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl mx-6 rounded-2xl bg-[#EEF2F6] border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10">
        <div className="text-center font-semibold text-black">
          {message}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="h-9 px-10 rounded-md bg-[#2F8DCD] text-white font-semibold shadow hover:brightness-95 active:translate-y-[1px] transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
