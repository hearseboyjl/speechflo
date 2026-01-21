import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [headerH, setHeaderH] = useState(96);

  // ✅ Better scrolling for sticky header: rely on scrollMarginTop
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const update = () => {
      const h = headerRef.current?.getBoundingClientRect().height || 96;
      setHeaderH(Math.round(h));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Palette
  const PAGE_BG = "bg-[#c9d8dd]";
  const NAV_DARK = "text-[#0B1456]";
  const ACCENT_BLUE = "text-[#1E4ED8]";
  const FOOTER_BG = "bg-[#002853]";
  const FOOTER_ICON = "h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0";

  const CONTAINER =
    "mx-auto max-w-[96rem] xl:max-w-[104rem] 2xl:max-w-[120rem] px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-20";

  return (
    <div className={`min-h-screen w-full ${PAGE_BG}`}>
      {/* ===================== HEADER ===================== */}
      <header ref={headerRef} className="sticky top-0 z-50">
        <div className="w-full bg-[#E6F0FA]/95 backdrop-blur border-b border-black/10 shadow-sm">

          <div className={`${CONTAINER} py-1.5 sm:py-2`}>
            <div className="flex items-center justify-between gap-4">
             <div
  className="
    h-[42px] w-[160px]
    sm:h-[56px] sm:w-[210px]
    lg:h-[70px] lg:w-[270px]
    xl:h-[82px] xl:w-[310px]
    2xl:h-[90px] 2xl:w-[340px]
    overflow-visible
    flex items-center
  "
>
  <img
    src="/avantelogo.png"
    alt="AvantePH"
    className="
      h-full w-auto object-contain
      origin-left
      scale-[1.2]
      -translate-y-1 ml-24 mt-4
    "
  />
</div>


              {/* Nav */}
              <div className="flex items-center gap-3 sm:gap-6">
              <nav
  className={`hidden sm:flex items-center gap-7 lg:gap-11 xl:gap-14 font-semibold
  text-[16px] lg:text-[18px] xl:text-[20px] ${NAV_DARK}`}
>
  <button
    onClick={() => scrollToId("home")}
    className="
      px-3 py-1.5 rounded-md
      transition-colors duration-200
      hover:bg-[#2563EB]/15
    "
  >
    Home
  </button>

  <button
    onClick={() => scrollToId("about")}
    className="
      px-3 py-1.5 rounded-md
      transition-colors duration-200
      hover:bg-[#2563EB]/15
    "
  >
    About
  </button>

  <button
    onClick={() => navigate("/jobs")}
    className="
      px-3 py-1.5 rounded-md
      transition-colors duration-200
      hover:bg-[#2563EB]/15
    "
  >
    Jobs
  </button>
</nav>

                 <button
  onClick={() =>
    window.open("https://web.facebook.com/AvantePHStaffingandConsultancy")
  }
  className="
    h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9
    rounded-full
    bg-[#1E63D6] text-white font-bold
    flex items-center justify-center
    transition-all duration-200
    hover:bg-[#1E40AF]
  "
>
  f
</button>
              </div>
            </div>
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
      className="
         pt-15 sm:pt-17 lg:pt-19
        pb-17 sm:pb-20 lg:pb-24
        min-h-[calc(100svh-var(--hdr))]
        lg:min-h-[calc(110svh-var(--hdr))]
        2xl:min-h-[calc(120svh-var(--hdr))]
      "
      style={{ ["--hdr"]: `${headerH}px` }}
    >
      <div className="bg-white/95 rounded-3xl shadow-lg px-6 sm:px-8 lg:px-10 py-7 sm:py-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left */}
          <div>
           <h1 className="font-extrabold leading-tight text-black text-[clamp(2rem,3.3vw,4.4rem)]">
  <span className="block">Find opportunities that</span>
  <span className={`${ACCENT_BLUE}`}>fit your skills</span>
  <span className="block">and shape your</span>
  <span className={`${ACCENT_BLUE}`}>future career</span>
</h1>


            <p className="mt-4 text-slate-800 max-w-2xl">
              From discovery to placement, we support you at every step of your
              professional journey.
            </p>

            <button
              onClick={() => navigate("/jobs")}
              className="mt-6 bg-[#1E4ED8] text-white rounded-full px-8 py-3.5 font-semibold"
            >
              I&apos;m looking for a JOB
            </button>
          </div>

          {/* Right */}
        <img
  src="/oppotunities.png"
  alt="Opportunities"
  className="w-full max-w-[1200px] lg:max-w-[1600px] xl:max-w-[2000px] mx-auto"
/>

        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===================== ABOUT ===================== */}
      <section
        id="about"
        className="w-full"
        style={{ scrollMarginTop: `${headerH + 16}px` }}
      >
        <div className="mx-auto max-w-[90rem] 2xl:max-w-[96rem] px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-20 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-center font-extrabold tracking-tight"
            style={{ fontSize: "clamp(1.7rem, 1.8vw + 1rem, 3.1rem)" }}
          >
            <span className="text-[#0B1456]">ABOUT</span>{" "}
            <span className="text-[#1E4ED8]">US</span>
          </h2>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-stretch">
           <div className="bg-white/95 rounded-3xl shadow-lg px-7 sm:px-10 py-9 sm:py-12 flex flex-col items-center text-left w-full max-w-[620px] mx-auto">
  <img
    src="/miclogo.png"
    alt="Microphone"
    className="mx-auto h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain mb-6"
  />

  <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed text-slate-900">
    With the help of Speechflo, AvantePH makes sure every applicant gets a
    fair chance. It helps us evaluate communication skills objectively, so
    hiring decisions are based on talent and potential—not personal bias.
  </p>
</div>

            <div className="bg-white/95 rounded-3xl shadow-lg px-7 sm:px-10 py-9 sm:py-12 flex flex-col items-center text-left w-full max-w-[620px] mx-auto">
              <img
  src="/avantelogo.png"
  alt="AvantePH"
  className="mx-auto h-[78px] sm:h-[96px] lg:h-[132px] xl:h-[150px] w-auto object-contain mb-6"
/>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed text-slate-900">
                We specialize in staffing excellence, providing business process
                assistance, and offering outsourcing solutions as a dedicated staffing
                and consulting business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
     <section id="footer" className="w-full bg-[#002853]">
  <div className="mx-auto w-full max-w-[120rem] px-6 sm:px-10 xl:px-16 2xl:px-24 py-8">

          <h3 className="text-center text-white font-semibold tracking-wide text-[16px] sm:text-[18px] mb-7">
            GET IN TOUCH
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 text-white/90 text-[13px] sm:text-[14px] items-start">
            <div className="flex items-center gap-4">
              <img src="/location.png" alt="Location" className={FOOTER_ICON} />
              <p className="leading-snug">
                Unit 910 Scandic Palace Bldg, 4291, Emilia St. Palanan,
                <br />
                Makati City PH 1235
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/email.png" alt="Email" className={FOOTER_ICON} />
              <p className="leading-snug break-words">apply@avanteph.com</p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/telephone.png" alt="Phone" className={FOOTER_ICON} />
              <p className="leading-snug">0927 184 7613</p>
            </div>

            <div className="flex items-start gap-8">
              <a
                href="https://www.linkedin.com/company/avanteph/posts/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <img src="/linkedin.png" alt="LinkedIn" className={FOOTER_ICON} />
                <span className="leading-snug whitespace-nowrap">AvantePH</span>
              </a>

              <a
                href="https://web.facebook.com/AvantePHStaffingandConsultancy"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition"
                title="Facebook"
              >
                <img src="/facebook.png" alt="Facebook" className={FOOTER_ICON} />
                <span className="leading-snug whitespace-nowrap">AvantePH</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
