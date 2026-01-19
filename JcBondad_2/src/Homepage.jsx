import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [headerH, setHeaderH] = useState(96);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - (headerH || 0) - 10;

    window.scrollTo({ top: y, behavior: "smooth" });
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

  return (
    <div className={`min-h-screen w-full ${PAGE_BG}`}>
      {/* ===================== HEADER ===================== */}
      <header ref={headerRef} className="sticky top-0 z-50">
        <div className={`w-full ${PAGE_BG}`}>
          <div className="mx-auto max-w-[90rem] 2xl:max-w-[96rem] px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-20 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
            <div
  className="
    flex items-center shrink-0
    h-[60px] w-[190px]
    sm:h-[78px] sm:w-[255px]
    lg:h-[86px] lg:w-[300px]
    xl:h-[98px] xl:w-[340px]
    2xl:h-[108px] 2xl:w-[380px]
    [@media(max-width:1366px)]:h-[78px]
    [@media(max-width:1366px)]:w-[260px]
  "
>
  <img
    src="/avantelogo.png"
    alt="AvantePH"
    className="h-full w-full object-contain"
  />
</div>




              {/* Nav */}
              <div className="flex items-center gap-3 sm:gap-6">
                <nav
                   className={`hidden sm:flex items-center gap-7 lg:gap-11 xl:gap-14 font-semibold
  text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]
  [@media(max-width:1536px)]:text-[17px]
  ${NAV_DARK}`}
                >
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

             
                <div className="sm:hidden flex gap-3">
                  <button onClick={() => scrollToId("home")} className={`text-sm font-semibold ${NAV_DARK}`}>
                    Home
                  </button>
                  <button onClick={() => scrollToId("about")} className={`text-sm font-semibold ${NAV_DARK}`}>
                    About
                  </button>
                </div>

                <button
                  onClick={() =>
                    window.open("https://www.facebook.com/YOUR_PAGE_HERE", "_blank")
                  }
                  className="h-9 w-9 sm:h-10 sm:w-10 xl:h-11 xl:w-11 rounded-full bg-[#1E63D6] flex items-center justify-center text-white font-bold hover:opacity-90 transition shrink-0"
                  title="Facebook"
                >
                  f
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== HOME ===================== */}
      <section id="home" className="w-full">
        <div className="mx-auto max-w-[90rem] 2xl:max-w-[96rem] px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-20">
          <div
            className="
              grid grid-cols-1 lg:grid-cols-2 items-center
              gap-8 xl:gap-12 2xl:gap-16
              pt-6 sm:pt-8 lg:pt-9

              pb-10 lg:pb-12
              min-h-[calc(100svh-min(var(--hdr),110px))]

              [@media(max-height:768px)]:pt-5
              [@media(max-height:768px)]:pb-8
            "
            style={{ ["--hdr"]: `${headerH}px` }}
          >
            {/* Left */}
            <div
              className="
                text-left max-w-[46rem]
                lg:pl-2 xl:pl-4 2xl:pl-6
                [@media(max-width:1366px)]:max-w-[40rem]
              "
            >
              <h1
                className="
                  font-extrabold text-black tracking-tight
                  leading-[1.08] sm:leading-[1.05] lg:leading-[1.03]
                  text-[clamp(2.0rem,4.0vw+0.35rem,5.7rem)]
                  [@media(max-width:1536px)]:text-[clamp(1.9rem,3.4vw+0.3rem,5.0rem)]
                  [@media(max-width:1366px)]:text-[clamp(1.75rem,3.2vw+0.25rem,4.4rem)]
                  [@media(max-height:768px)]:leading-[1.04]
                "
              >
                <span className="block">Find</span>

                <span className="block">
                  <span className="block lg:flex lg:items-baseline lg:gap-3">
                    <span>opportunities</span>
                    <span>that</span>
                  </span>
                </span>

                <span className="block mt-2 sm:mt-3 [@media(max-height:768px)]:mt-1.5">
                  <span className={`${ACCENT_BLUE} whitespace-nowrap`}>fit your skills</span>
                </span>

                <span className="block mt-2 sm:mt-3 [@media(max-height:768px)]:mt-1.5 whitespace-nowrap">
                  and shape your
                </span>

                <span className="block mt-2 sm:mt-3 [@media(max-height:768px)]:mt-1.5">
                  <span className={`${ACCENT_BLUE} whitespace-nowrap`}>future career</span>
                </span>
              </h1>

              <p
                className="
                  mt-4 sm:mt-5
                  text-slate-800 leading-relaxed max-w-2xl
                  text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[19px]
                  [@media(max-width:1536px)]:text-[16px]
                  [@media(max-width:1366px)]:text-[15px]
                  [@media(max-height:768px)]:mt-3
                "
              >
                From discovery to placement, we support you at every step of your
                professional journey.
              </p>

              <div className="mt-6 sm:mt-7 flex justify-start max-sm:justify-center [@media(max-height:768px)]:mt-5">
                <button
                  onClick={() => navigate("/jobs")}
                  className="
                    bg-[#1E4ED8] text-white rounded-full font-semibold hover:opacity-90 transition shadow
                    px-8 sm:px-10 py-3.5 sm:py-4
                    text-sm sm:text-base xl:text-lg
                    [@media(max-width:1366px)]:px-8
                    [@media(max-width:1366px)]:py-3
                  "
                >
                  I&apos;m looking for a JOB
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="
                  w-full
                  max-w-[520px] sm:max-w-[600px]
                  lg:max-w-[700px]
                  xl:max-w-[820px]
                  2xl:max-w-[920px]
                  [@media(max-width:1536px)]:lg:max-w-[640px]
                  [@media(max-width:1366px)]:lg:max-w-[560px]
                "
              >
                <img
                  src="/oppotunities.png"
                  alt="Opportunities"
                  className="
                    w-full h-auto object-contain origin-center
                    scale-[1.02] sm:scale-[1.05]
                    lg:scale-[1.07] xl:scale-[1.10] 2xl:scale-[1.12]
                    [@media(max-width:1536px)]:lg:scale-[1.03]
                    [@media(max-width:1366px)]:lg:scale-[1.00]
                    [@media(max-height:768px)]:lg:scale-[0.98]
                  "
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
          
            <div className="bg-white/95 rounded-3xl shadow-lg px-7 sm:px-10 py-9 sm:py-12 flex flex-col items-center text-center w-full max-w-[620px] mx-auto">
              <img
                src="/miclogo.png"
                alt="Microphone"
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain mb-6"
              />
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] leading-relaxed text-slate-900">
                With the help of Speechflo, AvantePH makes sure every applicant gets a
                fair chance. It helps us evaluate communication skills objectively, so
                hiring decisions are based on talent and potential—not personal bias.
              </p>
            </div>

        
            <div className="bg-white/95 rounded-3xl shadow-lg px-7 sm:px-10 py-9 sm:py-12 flex flex-col items-center text-center w-full max-w-[620px] mx-auto">
              <img
                src="/avantelogo.png"
                alt="AvantePH"
                className="h-[78px] sm:h-[96px] lg:h-[132px] xl:h-[150px] w-auto object-contain mb-6"
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
      <section id="footer" className={`w-full ${FOOTER_BG}`}>
        <div className="mx-auto max-w-[90rem] 2xl:max-w-[96rem] px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-20 py-8">
          <h3 className="text-center text-white font-semibold tracking-wide text-[16px] sm:text-[18px] mb-7">
            GET IN TOUCH
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 text-white/90 text-[13px] sm:text-[14px] items-start">
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
            <div className="flex items-start gap-8">
             <a
  href="https://www.linkedin.com/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 hover:opacity-80 transition"
>
  <img src="/linkedin.png" alt="LinkedIn" className={FOOTER_ICON} />
  <span className="leading-snug whitespace-nowrap">AvantePH</span>
</a>


              <a
                href="https://www.facebook.com/YOUR_PAGE_HERE"
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
