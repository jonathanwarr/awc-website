import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { BookingForm } from "../_components/BookingForm";
import {
  conceptMetadata,
  EMAIL,
  IMG,
  LocalBusinessJsonLd,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../_components/business";

export const metadata = conceptMetadata;

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

/* ─── Shared styles ─── */

const mono = "font-(family-name:--font-plex-mono)";
const sans = "font-(family-name:--font-grotesk)";
const meta = `m-0 ${mono} text-[13px] text-[#4A4D52]`;
const section =
  "flex flex-col gap-10 border-t border-[#111214] py-16 md:py-[88px]";
const sectionHead = "flex flex-wrap items-end justify-between gap-5";
const h2 =
  "m-0 text-[clamp(36px,7vw,52px)] font-bold leading-[1.02] tracking-[-0.03em]";
const body = "m-0 text-[17px] leading-[1.6] text-[#3A3D42]";
const card = "border border-[#C9C7C2] bg-white";
const fieldLabel = `${mono} text-[13px]`;
const input =
  "box-border min-h-[46px] border border-[#8F8C86] bg-white p-3 font-[inherit] text-base";

/* ─── Content ─── */

const services = [
  "Volkswagen service",
  "Audi service",
  "Brakes",
  "Oil & filter change",
  "Tune-ups & repairs",
];

const specialisms = [
  {
    code: "VW",
    title: "Volkswagen service",
    body: "Maintenance, diagnostics and repair for the Volkswagens North Shore drivers rely on every day.",
    models: ["GOLF", "GTI", "JETTA", "TIGUAN", "PASSAT", "ATLAS"],
    image: { src: "vw.jpg", alt: "White Volkswagen Golf", width: 1600, height: 1067 },
  },
  {
    code: "AUDI",
    title: "Audi service",
    body: "Specialist care for Audi sedans, wagons and SUVs, from routine service to complex electrical faults.",
    models: ["A3", "A4", "A6", "Q3", "Q5", "Q7"],
    image: { src: "audi.jpg", alt: "Red Audi with the hood open showing the engine bay", width: 1600, height: 1000 },
  },
];

const steps = [
  { title: "Book", body: "Call or send a request with your car and what you need." },
  { title: "Drop off", body: "Bring it to 246 E 1st St, a short walk from Lonsdale Quay." },
  { title: "Diagnose", body: "We inspect the car and explain what it needs. [Confirm quote process.]" },
  { title: "Drive", body: "Pick up your car, backed by our workmanship warranty." },
];

const facts = [
  { term: "ESTABLISHED", detail: "1991, North Vancouver" },
  { term: "OWNERSHIP", detail: "Family owned and operated" },
  { term: "COVERAGE", detail: "Insured and bonded" },
  { term: "WARRANTY", detail: "On all workmanship [confirm term]" },
  { term: "VEHICLES", detail: "VW and Audi up to 20 years old, plus other makes" },
];

const reviewCount = 3;

const pad = (n: number) => String(n).padStart(2, "0");

export default function ConceptBPage() {
  return (
    <div
      className={`bs-root bs-b ${grotesk.variable} ${plexMono.variable} ${sans} box-border min-h-[900px] w-full bg-[#EEEDEA] text-base leading-normal text-[#111214]`}
    >
      <LocalBusinessJsonLd />
      <div className="mx-auto box-border max-w-[1320px] px-5 md:px-10">
        {/* ─── Header ─── */}
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-[#111214] py-6">
          <a
            href="#"
            className="text-[22px] font-bold tracking-[-0.02em] no-underline"
          >
            BEETLE SPA
          </a>
          <nav
            aria-label="Main"
            className={`flex flex-wrap gap-x-5 gap-y-2 ${mono} text-[13px] uppercase tracking-[0.04em] md:gap-6`}
          >
            <a href="#specialisms" className="no-underline">Volkswagen</a>
            <a href="#specialisms" className="no-underline">Audi</a>
            <a href="#specialisms" className="no-underline">Services</a>
            <a href="#shop" className="no-underline">About</a>
            <a href="#contact" className="no-underline">Contact</a>
          </nav>
          <a
            href="#contact"
            className="box-border inline-flex min-h-11 items-center bg-(--b-accent) px-5 py-3 text-[15px] font-medium text-white no-underline"
          >
            Book a service
          </a>
        </header>

        {/* ─── Hero ─── */}
        <section className="flex flex-wrap gap-12 pt-10 pb-10 md:pt-14">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
            <p className={`m-0 ${mono} text-[13px] tracking-[0.06em] text-[#4A4D52]`}>
              EST. 1991 / NORTH VANCOUVER, BC
            </p>
            <h1 className="m-0 text-[clamp(44px,10vw,84px)] font-bold leading-[0.98] tracking-[-0.04em]">
              VW &amp; Audi specialists for the North Shore.
            </h1>
            <p className="m-0 max-w-[540px] text-[19px] leading-[1.55] text-[#3A3D42]">
              Diagnostics, repairs and scheduled maintenance from a family-owned
              shop that has worked on German cars for over three decades.
            </p>
          </div>
          <nav
            aria-label="Services"
            className="flex min-w-0 flex-[1_1_380px] flex-col border-t border-[#111214]"
          >
            {services.map((service, i) => (
              <a
                key={service}
                href="#specialisms"
                className="flex min-h-11 items-center justify-between border-b border-[#C9C7C2] py-[18px] text-xl font-medium no-underline"
              >
                <span className="flex items-baseline gap-[18px]">
                  <span className={`${mono} text-[13px] text-(--b-accent)`}>
                    {pad(i + 1)}
                  </span>
                  {service}
                </span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </nav>
        </section>

        <div className="flex flex-wrap gap-4 pb-10">
          <Image
            src={`${IMG}/beetle-spa-car.jpg`}
            alt="Classic cream Volkswagen Beetle with Beetle Spa lettering on the door"
            width={889}
            height={337}
            loading="eager"
            sizes="(min-width: 1100px) 820px, 100vw"
            className="block h-[300px] w-full min-w-0 flex-[2_1_520px] object-cover"
          />
          <div
            className={`box-border flex min-w-0 flex-[1_1_300px] flex-col justify-between gap-5 bg-[#111214] p-6 ${mono} text-sm leading-[1.7] text-[#EEEDEA]`}
          >
            <div>
              246 E 1ST ST
              <br />
              NORTH VANCOUVER, BC V7L 1B3
            </div>
            <div>
              MON-FRI 08:00-17:00
              <br />
              SAT-SUN CLOSED
            </div>
            <a
              href={PHONE_HREF}
              className={`${sans} text-[26px] font-bold text-[#EEEDEA] no-underline`}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* ─── Specialisms ─── */}
        <section id="specialisms" className={section}>
          <div className={sectionHead}>
            <h2 className={`${h2} max-w-[720px]`}>
              Two marques. One shop that knows them.
            </h2>
            <p className={meta}>/ 02 SPECIALISMS</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
            {specialisms.map((s) => (
              <div key={s.code} className={`${card} flex flex-col gap-5 p-6 md:p-9`}>
                <Image
                  src={`${IMG}/${s.image.src}`}
                  alt={s.image.alt}
                  width={s.image.width}
                  height={s.image.height}
                  sizes="(min-width: 1100px) 560px, 100vw"
                  className="block h-[240px] w-full object-cover"
                />
                <p className={`m-0 ${mono} text-[13px] text-(--b-accent)`}>{s.code}</p>
                <h3 className="m-0 text-[32px] font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className={body}>{s.body}</p>
                <div className={`flex flex-wrap gap-2 ${mono} text-[13px]`}>
                  {s.models.map((model) => (
                    <span key={model} className="border border-[#C9C7C2] px-2.5 py-1.5">
                      {model}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-base font-medium underline">
                  {s.title} →
                </a>
              </div>
            ))}
          </div>
          <p className={meta}>
            NOTE: VEHICLES UP TO 20 YEARS OLD, DUE TO PARTS AVAILABILITY. OTHER
            MAKES WELCOME FOR MAINTENANCE.
          </p>
        </section>

        {/* ─── Process ─── */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={`${h2} max-w-[720px]`}>How a visit works.</h2>
            <p className={meta}>/ 03 PROCESS</p>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] border-l border-[#C9C7C2] p-0">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col gap-3.5 border-r border-[#C9C7C2] py-5 pr-7 pl-6 md:py-2"
              >
                <span className={`${mono} text-[13px] text-(--b-accent)`}>{pad(i + 1)}</span>
                <h3 className="m-0 text-[22px] font-bold">{step.title}</h3>
                <p className="m-0 text-base leading-[1.55] text-[#3A3D42]">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ─── The shop ─── */}
        <section
          id="shop"
          className="flex flex-wrap gap-12 border-t border-[#111214] py-16 md:py-[88px]"
        >
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
            <p className={meta}>/ 04 THE SHOP</p>
            <h2 className={h2}>Family owned. Since 1991.</h2>
            <p className={body}>
              Beetle Spa started as a Volkswagen shop in North Vancouver and
              grew alongside the brands its customers drive. [Owner story, 2 to
              3 sentences, in their words.]
            </p>
          </div>
          <dl className="m-0 grid min-w-0 flex-[1_1_520px] grid-cols-[minmax(120px,1fr)_minmax(0,2fr)] border-t border-[#C9C7C2] text-[17px] md:grid-cols-[minmax(160px,1fr)_minmax(0,2fr)]">
            {facts.map((fact) => (
              <div key={fact.term} className="contents">
                <dt className={`border-b border-[#C9C7C2] py-[18px] ${mono} text-[13px] text-[#4A4D52]`}>
                  {fact.term}
                </dt>
                <dd className="m-0 border-b border-[#C9C7C2] py-[18px]">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ─── Reviews ─── */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>[★ rating] on Google.</h2>
            <p className={meta}>/ 05 REVIEWS · [N] TOTAL</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4">
            {Array.from({ length: reviewCount }, (_, i) => (
              <figure
                key={i}
                className={`${card} m-0 flex flex-col justify-between gap-6 p-6 md:p-7`}
              >
                <blockquote className="m-0 text-[19px] leading-[1.5]">
                  [Real customer review from Google.]
                </blockquote>
                <figcaption className={`${mono} text-[13px] text-[#4A4D52]`}>
                  [NAME] / [MODEL]
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section
          id="contact"
          className="flex flex-wrap gap-12 border-t border-[#111214] py-16 md:py-[88px]"
        >
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
            <p className={meta}>/ 06 CONTACT</p>
            <h2 className={h2}>Book a service.</h2>
            <div className="box-border flex h-[280px] items-end border border-dashed border-[#8F8C86] bg-[#DCDAD5] p-5">
              <p className={meta}>[Map embed: 246 E 1st St]</p>
            </div>
            <p className={`m-0 ${mono} text-sm leading-[1.8]`}>
              246 E 1ST ST, NORTH VANCOUVER, BC V7L 1B3
              <br />
              <a href={PHONE_HREF} className="underline">{PHONE_DISPLAY}</a> ·{" "}
              <a href={`mailto:${EMAIL}`} className="underline">{EMAIL.toUpperCase()}</a>
              <br />
              MON-FRI 08:00-17:00 · SAT-SUN CLOSED
            </p>
          </div>
          <BookingForm
            className={`${card} box-border flex min-w-0 flex-[1_1_440px] flex-col gap-[18px] p-6 md:p-9`}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="b-name" className={fieldLabel}>NAME</label>
              <input id="b-name" type="text" className={input} />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex min-w-0 flex-[1_1_180px] flex-col gap-1.5">
                <label htmlFor="b-phone" className={fieldLabel}>PHONE</label>
                <input id="b-phone" type="tel" className={input} />
              </div>
              <div className="flex min-w-0 flex-[1_1_180px] flex-col gap-1.5">
                <label htmlFor="b-email" className={fieldLabel}>EMAIL</label>
                <input id="b-email" type="email" className={input} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="b-car" className={fieldLabel}>VEHICLE (YEAR, MAKE, MODEL)</label>
              <input id="b-car" type="text" className={input} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="b-msg" className={fieldLabel}>WHAT DOES IT NEED?</label>
              <textarea id="b-msg" rows={4} className={`${input} min-h-0 resize-y`} />
            </div>
            <button
              type="submit"
              className="min-h-12 cursor-pointer border-0 bg-(--b-accent) p-4 font-[inherit] text-base font-medium text-white"
            >
              Send request
            </button>
          </BookingForm>
        </section>

        {/* ─── Footer ─── */}
        <footer
          className={`flex flex-wrap justify-between gap-5 border-t border-[#111214] pt-8 pb-12 ${mono} text-[13px] text-[#4A4D52]`}
        >
          <span>© 2026 BEETLE SPA LTD. · VW &amp; AUDI SPECIALISTS · NORTH VANCOUVER, BC</span>
          <nav aria-label="Footer" className="flex gap-5">
            <a href="#specialisms" className="underline">SERVICES</a>
            <a href="#contact" className="underline">CONTACT</a>
            <a href="https://www.facebook.com/BeetleSpa/" className="underline">FACEBOOK</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
