import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const homeRef = useRef(null);
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Palette
  const PAGE_BG = "bg-[#c9d8dd]";
  const NAV_DARK = "text-[#0B1456]";
  const ACCENT_BLUE = "text-[#1E4ED8]";
  const FOOTER_BG = "bg-[#002853]";
  const FOOTER_ICON = "h-12 w-12 md:h-11 md:w-11 object-contain shrink-0";
  



  return (
    <div className={`w-screen min-h-screen ${PAGE_BG}`}>
      <header className="sticky top-0 z-50">
        <div className={`h-[100px] w-full ${PAGE_BG}`}>
          <div className="h-full max-w-7xl mx-auto px-10 flex items-center justify-between">
            {/* Logo (kept big + stable) */}
            <div className="flex items-center h-[80px] w-[220px]">
  <img src="/avantelogo.png" alt="AvantePH" className="h-full w-full object-contain scale-200 
  transition-transform duration-300"/>
</div>

            <div className="flex items-center gap-12">
              <nav className={`flex items-center gap-16 font-semibold text-lg ${NAV_DARK}`}>
                <button onClick={() => scrollToId("home")} className="hover:opacity-80 transition">
                  Home
                </button>
                <button onClick={() => scrollToId("about")} className="hover:opacity-80 transition">
                  About
                </button>
                <button onClick={() => navigate("/jobs")} className="hover:opacity-80 transition">
                  Jobs
                </button>
              </nav>

              <button
                onClick={() => window.open("https://www.facebook.com/YOUR_PAGE_HERE", "_blank")}
                className="h-11 w-11 rounded-full bg-[#1E63D6] flex items-center justify-center text-white font-bold hover:opacity-90 transition"
                title="Facebook"
              >
                f
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== HOME SECTION ===================== */}
      <section
  id="home"
  ref={homeRef}
  className="w-full scroll-mt-[100px]"
>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-14 pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left text */}
            <div>
              <h1 className="font-extrabold leading-[1.05] text-[44px] lg:text-[56px] text-black">
                Find opportunities
                <br />
                that <span className={ACCENT_BLUE}>fit your skills</span>
                <br />
                and shape your
                <br />
                <span className={ACCENT_BLUE}>future career</span>
              </h1>

              <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-slate-800 max-w-xl">
                From discovery to placement, we support
                <br />
                you at every step of your professional
                <br />
                journey.
              </p>

              <button
                onClick={() => navigate("/jobs")}
                className="mt-10 bg-[#1E4ED8] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition shadow"
              >
                I&apos;m looking for JOB
              </button>
            </div>

          <div className="flex justify-end overflow-visible">
  <div className="w-full max-w-[980px] lg:max-w-[1080px]">
    <img src="/oppotunities.png" alt="Opportunities" className="w-full h-auto object-contain scale-110 lg:scale-115
    transition-transform duration-300 translate-x-0 lg:translate-x-4"/>
  </div>
</div>
</div>
</div>
 </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section
  id="about"
  className="w-full scroll-mt-[100px]">
  <div className="max-w-7xl mx-auto px-10 pt-6 pb-10">
    <h2 className="text-center font-extrabold tracking-tight leading-none text-[25px] sm:text-[33px] md:text-[41px] lg:text-[49px]">
<span className="text-[#0B1456]">ABOUT</span>{" "}
<span className="text-[#1E4ED8]">US</span>
</h2>

<div className="h-6"></div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-10">
<div className="flex flex-col items-center text-left">
    <img src="/miclogo.png" alt="Microphone" className="h-24 w-24 object-contain mb-8"/>

<p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-slate-900 max-w-xl">

                With the help of Speechflo, AvantePH makes sure every applicant gets a fair chance. It
                helps us evaluate communication skills objectively, so hiring decisions are based on
                talent and potential not personal bias.
              </p>
            </div>

            <div className="flex flex-col items-center text-left">
              <img
                src="/avantelogo.png"
                alt="AvantePH"
                className="h-24 w-auto object-contain mb-8"
              />

              <p className="text-[20px] leading-relaxed text-slate-900 max-w-xl">
                We specialize in staffing excellence, providing business process assistance, and offering
                outsourcing solutions as a dedicated staffing and consulting business.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== FOOTER SECTION ===================== */}
        <div className={`${FOOTER_BG}`}>
         <div className="max-w-7xl mx-auto px-10 py-5">


          <h3 className="text-center text-white font-semibold tracking-wide text-[18px] mb-7">

              GET IN TOUCH
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 text-white/90 text-[14px] items-start">
              {/* Address */}
              <div className="flex items-center gap-4">
  <img src="/location.png" alt="Location" className={FOOTER_ICON} />
  <p className="leading-snug">
    Unit 910 Scandic Palace Bldg, 4291, Emilia St. Palanan,
    <br />
    Makati City PH 1235
  </p>
</div>
              {/* Email */}
              <div className="flex items-center gap-4">
  <img src="/email.png" alt="Email" className={FOOTER_ICON} />
  <p className="leading-snug break-words">apply@avanteph.com</p>
</div>
              {/* Phone */}
              <div className="flex items-center gap-4">
  <img src="/telephone.png" alt="Phone" className={FOOTER_ICON} />
  <p className="leading-snug">09543798413</p>
</div>
              {/* Social */}
              <div className="flex items-center gap-8">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition"
                  title="LinkedIn"
                >
                  <img src="/linkedin.png" alt="LinkedIn"className={`${FOOTER_ICON} mt-1`} />
                  <span className="whitespace-nowrap">AvantePH</span>
                </a>

                <a
                  href="https://www.facebook.com/YOUR_PAGE_HERE"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition"
                  title="Facebook"
                >
                  <img src="/facebook.png" alt="Facebook" className={`${FOOTER_ICON} mt-1`} />
                  <span className="whitespace-nowrap">AvantePH</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
