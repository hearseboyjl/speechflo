export function GlassCard({ className = "", children }) {
  return (
    <div
      className={[
        "rounded-[22px]",
        "bg-white/60 backdrop-blur-xl",
        "border border-white/50",
        "shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
        "ring-1 ring-black/5",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function SoftButton({ className = "", variant = "primary", ...props }) {
  const base =
    "h-11 px-5 rounded-[14px] font-semibold text-sm transition cursor-pointer select-none";
  const styles =
    variant === "primary"
      ? "bg-[#1e2a52] text-white shadow hover:brightness-110 active:brightness-95"
      : "bg-white/60 text-black/70 border border-white/60 shadow hover:bg-white/80 active:bg-white/60";

  return <button className={[base, styles, className].join(" ")} {...props} />;
}

export function SoftInput({ className = "", ...props }) {
  return (
    <input
      className={[
        "h-11 w-full rounded-[14px]",
        "bg-white/70",
        "border border-black/10",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "px-4 outline-none",
        "focus:ring-2 focus:ring-[#87F5F5]/70",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function SoftSelect({ className = "", children, ...props }) {
  return (
    <select
      className={[
        "h-11 rounded-[14px]",
        "bg-white/70",
        "border border-black/10",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "px-4 pr-10 outline-none appearance-none cursor-pointer",
        "focus:ring-2 focus:ring-[#87F5F5]/70",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </select>
  );
}
