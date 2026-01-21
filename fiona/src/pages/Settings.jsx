import Menubar from "../components/Menubar";
import { useMemo, useState } from "react";
import SettingsModal from "../components/SettingsModal";

export default function Settings() {
  const themes = useMemo(() => ["Light", "Dark", "System"], []);
  const languages = useMemo(() => ["English", "Filipino", "Spanish"], []);

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [account, setAccount] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    password: "",
  });

  const [prefs, setPrefs] = useState({
    theme: "System",
    language: "English",
  });

  const cardCls = [
    "rounded-2xl",
    "bg-white/70 backdrop-blur-md",
    "shadow-[0_12px_30px_rgba(15,23,42,0.08)]",
    "hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
    "transition-shadow",
    "border-2 border-[#77bce1]",
  ].join(" ");

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

  function onAccountChange(e) {
    const { name, value } = e.target;
    setAccount((p) => ({ ...p, [name]: value }));
  }

  function onPrefsChange(e) {
    const { name, value } = e.target;
    setPrefs((p) => ({ ...p, [name]: value }));
  }

  function onUpdateAccount(e) {
    e.preventDefault();
    setModalMessage("Updated successfully");
    setShowModal(true);
  }

  function onResetAccount() {
    setAccount({
      lastName: "",
      firstName: "",
      middleName: "",
      email: "",
      password: "",
    });
  }

  function onSavePrefs(e) {
    e.preventDefault();
    setModalMessage("Preferences saved successfully");
    setShowModal(true);
  }

  return (
    <div className="min-h-screen w-full bg-app">
      <Menubar />

      <main className="min-h-screen bg-app layout-main">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <h1 className="text-4xl font-bold text-[#002853]">Settings</h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage your account details and system preferences.
          </p>

          <div className="mt-8 space-y-8">
            {/* Account Settings */}
            <section className={`${cardCls} p-6 sm:p-8`}>
              <h2 className="text-lg font-semibold text-slate-900">
                Account Settings
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Update your profile information and login credentials.
              </p>

              <form onSubmit={onUpdateAccount} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <Field className="md:col-span-3" label="Last Name">
                    <input
                      name="lastName"
                      value={account.lastName}
                      onChange={onAccountChange}
                      className={inputCls}
                    />
                  </Field>

                  <Field className="md:col-span-6" label="First Name">
                    <input
                      name="firstName"
                      value={account.firstName}
                      onChange={onAccountChange}
                      className={inputCls}
                    />
                  </Field>

                  <Field className="md:col-span-3" label="Middle Name">
                    <input
                      name="middleName"
                      value={account.middleName}
                      onChange={onAccountChange}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5">
                  <Field className="md:col-span-6" label="Email">
                    <input
                      type="email"
                      name="email"
                      value={account.email}
                      onChange={onAccountChange}
                      className={inputCls}
                    />
                  </Field>

                  <Field className="md:col-span-6" label="Password">
                    <input
                      type="password"
                      name="password"
                      value={account.password}
                      onChange={onAccountChange}
                      className={inputCls}
                    />
                  </Field>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className={primaryBtn}>Update</button>
                  <button
                    type="button"
                    onClick={onResetAccount}
                    className={secondaryBtn}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </section>

            {/* System Preferences */}
            <section className={`${cardCls} p-6 sm:p-8`}>
              <h2 className="text-lg font-semibold text-slate-900">
                System Preferences
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Customize appearance and language.
              </p>

              <form onSubmit={onSavePrefs} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  <Field className="md:col-span-4" label="Theme">
                    <select
                      name="theme"
                      value={prefs.theme}
                      onChange={onPrefsChange}
                      className={selectCls}
                    >
                      {themes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>

                  <Field className="md:col-span-4" label="Language">
                    <select
                      name="language"
                      value={prefs.language}
                      onChange={onPrefsChange}
                      className={selectCls}
                    >
                      {languages.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="mt-6">
                  <button className={primaryBtn}>Save</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>

      <SettingsModal
        open={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
    </div>
  );
}

function Field({ label, className = "", children }) {
  return (
    <label className={`block ${className}`}>
      <div className="text-xs font-semibold text-slate-700 mb-2">{label}</div>
      {children}
    </label>
  );
}

const inputCls =
  "h-10 w-full rounded-xl bg-white/80 border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-[#2F8DCD]/30 focus:border-[#2F8DCD]/40";

const selectCls = inputCls + " cursor-pointer";
