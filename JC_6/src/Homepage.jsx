import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const [headerH, setHeaderH] = useState(96);
  const [mobileOpen, setMobileOpen] = useState(false);

 
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setMobileOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const update = () => {
      const h = headerRef.current?.getBoundingClientRect().height || 96;
      const rounded = Math.round(h);
      setHeaderH(rounded);
     
      document.documentElement.style.setProperty("--hdr", `${rounded}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false); // md+
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

 
  const PAGE_BG = "app-bg"; 
  const NAV_DARK = "text-[#0B1456]";
  const ACCENT_BLUE = "text-[#1E4ED8]";
  const FOOTER_ICON = "h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0";
  const ABOUT_SCROLL_GAP =1; 


  
  const CONTAINER =
    "mx-auto w-full max-w-[86rem] lg:max-w-[94rem] xl:max-w-[106rem] 2xl:max-w-[120rem] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20";

  
  const navBtn =
    "px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#2563EB]/15";

  const openFacebook = () =>
    window.open(
      "https://web.facebook.com/AvantePHStaffingandConsultancy",
      "_blank",
      "noreferrer"
    );

  return (
    <div className={`min-h-screen w-full ${PAGE_BG}`}>
      {/* ===================== HEADER ===================== */}
      <header ref={headerRef} className="sticky top-0 z-50">
        <div className="w-full bg-[#E6F0FA]/95 backdrop-blur border-b border-black/10 shadow-sm">
          <div className={`${CONTAINER} py-2 sm:py-3`}>
            <div className="flex items-center justify-between gap-3">
              {/* Logo */}
              <button
                type="button"
                onClick={() => scrollToId("home")}
                className="flex items-center cursor-pointer"
                aria-label="Go to Home"
              >
                <img
                  src="/avantelogo.png"
                  alt="AvantePH"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[72px] 2xl:h-[78px] w-auto object-contain"
                />
              </button>

              {/* Desktop / Tablet Nav (md+) */}
              <div className="hidden md:flex items-center gap-3 lg:gap-6">
                <nav
                  className={`flex items-center gap-5 lg:gap-9 xl:gap-12 font-semibold
                    text-[15px] lg:text-[17px] xl:text-[19px] ${NAV_DARK}`}
                  aria-label="Primary"
                >
                  <button onClick={() => scrollToId("home")} className={navBtn}>
                    Home
                  </button>
                  <button onClick={() => scrollToId("about")} className={navBtn}>
                    About
                  </button>
                  <button onClick={() => navigate("/jobs")} className={navBtn}>
                    Jobs
                  </button>
                </nav>

                <button
                  onClick={openFacebook}
                  className="
                    h-8 w-8 lg:h-9 lg:w-9 rounded-full
                    bg-[#1E63D6] text-white font-bold
                    flex items-center justify-center
                    cursor-pointer
                    transition-all duration-200 hover:bg-[#1E40AF]
                  "
                  aria-label="Open Facebook"
                  title="Facebook"
                >
                  f
                </button>
              </div>

              {/* Mobile controls (<md) */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={openFacebook}
                  className="
                    h-8 w-8 rounded-full
                    bg-[#1E63D6] text-white font-bold
                    flex items-center justify-center
                    cursor-pointer
                    transition-all duration-200 hover:bg-[#1E40AF]
                  "
                  aria-label="Open Facebook"
                  title="Facebook"
                >
                  f
                </button>

                <button
                  type="button"
                  onClick={() => setMobileOpen((v) => !v)}
                  className="
                    h-9 w-9 rounded-lg
                    border border-black/10 bg-white/70
                    flex items-center justify-center
                    cursor-pointer
                    active:scale-[0.98]
                  "
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  {/* hamburger / X */}
                  <span className="relative block w-5 h-5">
                    <span
                      className={`absolute left-0 top-1 w-5 h-[2px] bg-[#0B1456] transition-transform ${
                        mobileOpen ? "translate-y-[6px] rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-[9px] w-5 h-[2px] bg-[#0B1456] transition-opacity ${
                        mobileOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-[17px] w-5 h-[2px] bg-[#0B1456] transition-transform ${
                        mobileOpen ? "translate-y-[-8px] -rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            {mobileOpen && (
              <div className="md:hidden mt-2 pb-2">
                <div className="bg-white/90 rounded-2xl border border-black/10 shadow-sm p-3">
                  <div className="grid gap-2 font-semibold text-[15px] text-[#0B1456]">
                    <button
                      onClick={() => scrollToId("home")}
                      className="text-left px-3 py-2 rounded-xl cursor-pointer hover:bg-[#2563EB]/10"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => scrollToId("about")}
                      className="text-left px-3 py-2 rounded-xl cursor-pointer hover:bg-[#2563EB]/10"
                    >
                      About
                    </button>
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        navigate("/jobs");
                      }}
                      className="text-left px-3 py-2 rounded-xl cursor-pointer hover:bg-[#2563EB]/10"
                    >
                      Jobs
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ===================== HOME ===================== */}
      <section
        id="home"
        className="w-full"
        style={{ scrollMarginTop: `${headerH + 16}px` }}
      >
        <div className={CONTAINER}>
          <div
            className="min-h-[calc(100svh-var(--hdr))] flex items-center"
            style={{ ["--hdr"]: `${headerH}px` }}
          >
            <div className="w-full bg-white/95 rounded-3xl shadow-lg px-5 sm:px-8 lg:px-10 py-7 sm:py-9">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                {/* Text */}
                <div className="order-2 lg:order-1">
                  <h1
                    className="
                      font-extrabold leading-[1.05] text-black
                      text-[clamp(1.6rem,4vw,3.8rem)]
                    "
                  >
                    <span className="block whitespace-nowrap max-sm:whitespace-normal">
                      Find opportunities that
                    </span>

                    <span
                      className={`block whitespace-nowrap max-sm:whitespace-normal ${ACCENT_BLUE}`}
                    >
                      fit your skills
                    </span>

                    <span className="block whitespace-nowrap max-sm:whitespace-normal">
                      and shape your
                    </span>

                    <span
                      className={`block whitespace-nowrap max-sm:whitespace-normal ${ACCENT_BLUE}`}
                    >
                      future career
                    </span>
                  </h1>

                  <p className="mt-4 text-slate-800 max-w-[60ch] text-[14px] sm:text-[15px] lg:text-[16px]">
                    From discovery to placement, we support you at every step of
                    your professional journey.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                    <button
                      onClick={() => navigate("/jobs")}
                      className="
                        bg-[#1E4ED8] text-white rounded-full
                        px-7 py-3.5 font-semibold
                        w-full sm:w-auto
                        cursor-pointer
                        hover:bg-[#1D43B8] transition
                      "
                    >
                      I&apos;m looking for a JOB
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <img
                    src="/oppotunities.png"
                    alt="Opportunities"
                    className="
                      w-full h-auto mx-auto object-contain
                      max-w-[520px] sm:max-w-[640px] md:max-w-[700px]
                      lg:max-w-[760px] xl:max-w-[860px] 2xl:max-w-[920px]
                      max-h-[280px] sm:max-h-[340px] lg:max-h-[420px]
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
     <section
  id="about"
  className="w-full"
  style={{ scrollMarginTop: `${headerH + ABOUT_SCROLL_GAP}px` }}
>

       <div className={`${CONTAINER} pt-3 sm:pt-4 lg:pt-6 pb-10 sm:pb-14 lg:pb-16`}>

          <h2
            className="text-center font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.7rem, 1.8vw + 1rem, 3.1rem)" }}
          >
            <span className="text-[#0B1456]">ABOUT</span>{" "}
            <span className="text-[#1E4ED8]">US</span>
          </h2>

          <div className="mt-5 sm:mt-6 lg:mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-stretch">
            <div className="bg-white/95 rounded-3xl shadow-lg px-6 sm:px-10 py-9 sm:py-12 flex flex-col items-center text-left w-full">
              <img
                src="/miclogo.png"
                alt="Microphone"
                className="mx-auto h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 object-contain rounded-2xl mb-6"
              />
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed text-slate-900 max-w-[62ch]">
                With the help of Speechflo, AvantePH makes sure every applicant
                gets a fair chance. It helps us evaluate communication skills
                objectively, so hiring decisions are based on talent and
                potential—not personal bias.
              </p>
            </div>

            <div className="bg-white/95 rounded-3xl shadow-lg px-6 sm:px-10 py-9 sm:py-12 flex flex-col items-center text-left w-full">
              <img
                src="/avantelogo.png"
                alt="AvantePH"
                className="mx-auto h-[70px] sm:h-[92px] lg:h-[120px] xl:h-[140px] w-auto object-contain mb-6"
              />
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed text-slate-900 max-w-[62ch]">
                We specialize in staffing excellence, providing business process
                assistance, and offering outsourcing solutions as a dedicated
                staffing and consulting business.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* ===================== FOOTER ===================== */}
<section id="footer" className="w-full bg-[#002853]">
  <div className={`${CONTAINER} py-10`}>
    <h3 className="text-center text-white font-semibold tracking-wide text-[16px] sm:text-[18px] mb-7">
      GET IN TOUCH
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-10 text-white/90 text-[13px] sm:text-[14px] items-start">
      {/* Location */}
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
        <p className="leading-snug">0927 184 7613</p>
      </div>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/company/avanteph/posts/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 hover:opacity-80 transition"
      >
        <img src="/linkedin.png" alt="LinkedIn" className={FOOTER_ICON} />
        <span className="leading-snug whitespace-nowrap">AvantePH</span>
      </a>

      {/* Facebook */}
      <a
        href="https://web.facebook.com/AvantePHStaffingandConsultancy"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 hover:opacity-80 transition"
      >
        <img src="/facebook.png" alt="Facebook" className={FOOTER_ICON} />
        <span className="leading-snug whitespace-nowrap">AvantePH</span>
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
