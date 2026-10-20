import { Archivo } from "next/font/google";
import Image from "next/image";
import {
  conceptMetadata,
  EMAIL,
  IMG,
  LocalBusinessJsonLd,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../_components/business";
import { THEME_ROOT_ID, themeInitScript } from "../_components/theme";
import { ThemeToggle } from "../_components/ThemeToggle";

export const metadata = conceptMetadata;

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

/* ─── Shared styles ─── */

const container = "mx-auto box-border max-w-[1280px] px-5 md:px-10";
const sectionPad = "py-16 md:py-24";
const eyebrow =
  "m-0 text-sm font-semibold uppercase tracking-[0.14em] text-(--a-accent)";
const h2 =
  "m-0 text-[clamp(32px,6vw,44px)] font-extrabold leading-[1.08] tracking-[-0.02em]";
const label =
  "text-[13px] uppercase tracking-[0.08em] text-(--a-subtle)";
const btn =
  "box-border inline-flex min-h-11 items-center rounded-[4px] px-[26px] py-4 text-base font-semibold no-underline";
const btnPrimary = `${btn} bg-[#E8B04B] text-[#121416]`;
const btnSecondary = `${btn} border border-(--a-line2) text-(--a-text)`;
const card =
  "rounded-[6px] border border-(--a-line) bg-(--a-bg) p-6 md:p-7";
const autoGrid300 =
  "grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5";

/* ─── Content ─── */

const services = [
  {
    title: "Volkswagen service & repair",
    body: "Scheduled maintenance, diagnostics and repairs for Golf, Jetta, Tiguan, Passat and more.",
  },
  {
    title: "Audi service & repair",
    body: "Specialist care for A3, A4, Q5 and the rest of the range, from routine service to complex faults.",
  },
  {
    title: "Brake repair",
    body: "Pads, rotors, fluid and inspections, so you stop confidently on every North Shore hill.",
  },
  {
    title: "Oil & filter change",
    body: "The right oil spec for your engine, with a quick check of the essentials while it is on the hoist.",
  },
  {
    title: "Tune-ups",
    body: "Keep your car running smoothly and efficiently with regular tune-ups and check-ups.",
  },
  {
    title: "Other makes",
    body: "Not driving a VW or Audi? We also handle maintenance and repairs for other brands.",
  },
];

const reasons = [
  {
    stat: "1991",
    title: "Family owned and operated",
    body: "The same family, the same values, serving the North Shore for over 30 years.",
  },
  {
    stat: "100%",
    title: "Insured and bonded",
    body: "Your car is protected the moment it comes through our doors.",
  },
  {
    stat: "[X] yr",
    title: "Workmanship warranty",
    body: "Every repair is backed by our warranty. [Confirm terms with shop.]",
  },
];

const reviewCount = 3;

export default function ConceptAPage() {
  return (
    <div
      id={THEME_ROOT_ID}
      data-theme="light"
      suppressHydrationWarning
      className={`bs-root bs-a ${archivo.className} box-border w-full bg-(--a-bg) text-base leading-normal text-(--a-text) transition-[background-color,color] duration-200`}
    >
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      <LocalBusinessJsonLd />

      {/* ─── Header + Hero ─── */}
      <div className={container}>
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-(--a-line) py-6 md:py-7">
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-[-0.01em] text-(--a-text) no-underline"
          >
            <span
              className="inline-block h-3 w-3 rounded-full bg-[#E8B04B]"
              aria-hidden="true"
            />
            Beetle Spa
          </a>
          <nav
            aria-label="Main"
            className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] md:gap-7"
          >
            <a href="#services" className="text-(--a-text) no-underline">Volkswagen</a>
            <a href="#services" className="text-(--a-text) no-underline">Audi</a>
            <a href="#services" className="text-(--a-text) no-underline">Services</a>
            <a href="#reviews" className="text-(--a-text) no-underline">Reviews</a>
            <a href="#visit" className="text-(--a-text) no-underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2.5">
            <ThemeToggle className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[4px] border border-(--a-line2) bg-transparent text-(--a-text)" />
            <a
              href={PHONE_HREF}
              className="box-border inline-flex min-h-11 items-center rounded-[4px] border border-(--a-line2) px-[18px] py-3 text-[15px] font-semibold text-(--a-text) no-underline"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </header>

        <section className="flex flex-wrap items-stretch gap-10 pt-12 pb-14 md:gap-14 md:pt-[72px]">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col justify-center gap-7">
            <p className={eyebrow}>
              Independent VW &amp; Audi specialists · North Vancouver
            </p>
            <h1 className="m-0 text-[clamp(40px,9vw,68px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              Volkswagen &amp; Audi repair, done right since 1991.
            </h1>
            <p className="m-0 max-w-[520px] text-[19px] leading-[1.55] text-(--a-muted)">
              A family-owned North Shore shop that knows your car inside out.
              Servicing VW and Audi models up to 20 years old, plus maintenance
              for other makes.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#visit" className={btnPrimary}>
                Book a service
              </a>
              <a href="#services" className={btnSecondary}>
                See our services
              </a>
            </div>
          </div>
          <Image
            src={`${IMG}/mechanic.jpg`}
            alt="Technician working in a car engine bay"
            width={1600}
            height={2000}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1100px) 540px, 100vw"
            className="block h-[520px] min-h-[480px] w-full min-w-0 flex-[1_1_440px] rounded-[6px] object-cover"
          />
        </section>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 border-t border-(--a-line) pt-7 pb-12 text-[15px]">
          <div className="flex flex-col gap-1.5">
            <span className={label}>Visit</span>
            <span>246 E 1st St, North Vancouver</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>Hours</span>
            <span>Mon to Fri, 8:00 am to 5:00 pm</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={label}>Peace of mind</span>
            <span>Insured, bonded and warrantied work</span>
          </div>
        </div>
      </div>

      {/* ─── Services ─── */}
      <section
        id="services"
        className="border-y border-(--a-line) bg-(--a-surface)"
      >
        <div className={`${container} ${sectionPad} flex flex-col gap-12`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[640px] flex-col gap-3.5">
              <p className={eyebrow}>Services</p>
              <h2 className={h2}>
                Everything your VW or Audi needs, under one roof.
              </h2>
            </div>
            <a href="#" className="text-base font-semibold text-(--a-text) underline">
              All services
            </a>
          </div>
          <div className={autoGrid300}>
            {services.map((service, i) => (
              <a
                key={service.title}
                href="#"
                className={`${card} flex flex-col gap-3 text-(--a-text) no-underline`}
              >
                <span className="text-[13px] font-semibold text-(--a-accent)">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 text-[22px] font-bold">{service.title}</h3>
                <p className="m-0 text-base leading-[1.55] text-(--a-muted)">
                  {service.body}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why us ─── */}
      <section
        className={`${container} ${sectionPad} flex flex-wrap gap-10 md:gap-14`}
      >
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
          <p className={eyebrow}>Why Beetle Spa</p>
          <h2 className={h2}>
            Three decades of knowing these cars inside out.
          </h2>
          <p className="m-0 text-lg leading-[1.6] text-(--a-muted)">
            Beetle Spa has looked after Volkswagen and Audi owners on the North
            Shore since 1991. We are still family-owned, and we still treat
            every car like it is our own.
          </p>
          <Image
            src={`${IMG}/beetle-spa-car.jpg`}
            alt="Classic cream Volkswagen Beetle with Beetle Spa lettering on the door"
            width={889}
            height={337}
            sizes="(min-width: 1100px) 560px, 100vw"
            className="mt-2 block aspect-[889/337] h-auto w-full rounded-[6px] object-cover"
          />
          <div className="rounded-[6px] bg-(--a-surface2) p-5 text-[15px] leading-[1.55] text-(--a-muted)">
            <strong className="text-(--a-text)">Good to know:</strong> because
            of parts availability, we service and repair vehicles up to 20
            years old.
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_480px] flex-col">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`flex gap-6 border-t border-(--a-line) py-7 ${i === reasons.length - 1 ? "border-b" : ""}`}
            >
              <span className="min-w-24 text-[32px] font-extrabold text-(--a-accent)">
                {reason.stat}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="m-0 text-xl font-bold">{reason.title}</h3>
                <p className="m-0 text-base leading-[1.55] text-(--a-muted)">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <section
        id="reviews"
        className="border-y border-(--a-line) bg-(--a-surface)"
      >
        <div className={`${container} ${sectionPad} flex flex-col gap-10`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-3.5">
              <p className={eyebrow}>Reviews</p>
              <h2 className={h2}>What North Shore drivers say.</h2>
            </div>
            <p className="m-0 text-base text-(--a-muted)">
              [★ rating] from [N] Google reviews
            </p>
          </div>
          <div className={autoGrid300}>
            {Array.from({ length: reviewCount }, (_, i) => (
              <figure key={i} className={`${card} m-0 flex flex-col gap-5`}>
                <blockquote className="m-0 text-lg leading-[1.55]">
                  [Real customer review from Google, 1 to 3 sentences.]
                </blockquote>
                <figcaption className="text-sm text-(--a-subtle)">
                  [First name] · [Car model]
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Visit ─── */}
      <section
        id="visit"
        className={`${container} ${sectionPad} flex flex-wrap items-stretch gap-12`}
      >
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-7">
          <p className={eyebrow}>Visit the shop</p>
          <h2 className={h2}>Book your next service in Lower Lonsdale.</h2>
          <div className="grid grid-cols-1 gap-6 text-base leading-[1.6] sm:grid-cols-2">
            <div>
              <div className={`${label} mb-1.5`}>Address</div>
              246 E 1st St
              <br />
              North Vancouver, BC V7L 1B3
            </div>
            <div>
              <div className={`${label} mb-1.5`}>Hours</div>
              Mon to Fri, 8 am to 5 pm
              <br />
              Sat and Sun, closed
            </div>
            <div>
              <div className={`${label} mb-1.5`}>Phone</div>
              <a href={PHONE_HREF} className="text-(--a-text) underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <div className={`${label} mb-1.5`}>Email</div>
              <a href={`mailto:${EMAIL}`} className="text-(--a-text) underline">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <a href={PHONE_HREF} className={btnPrimary}>
              Call to book
            </a>
            <a href="#" className={btnSecondary}>
              Get directions
            </a>
          </div>
        </div>
        <div className="box-border flex min-h-[320px] min-w-0 flex-[1_1_480px] items-end rounded-[6px] border border-dashed border-(--a-line2) bg-(--a-surface2) p-6 md:min-h-[420px]">
          <p className="m-0 text-sm text-(--a-subtle)">
            [Map embed: 246 E 1st St, North Vancouver]
          </p>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-(--a-line)">
        <div
          className={`${container} flex flex-wrap justify-between gap-8 py-12 text-[15px] text-(--a-muted)`}
        >
          <div className="flex max-w-[360px] flex-col gap-2.5">
            <span className="text-lg font-extrabold text-(--a-text)">
              Beetle Spa
            </span>
            <span className="leading-[1.6]">
              Volkswagen and Audi specialists in North Vancouver, BC. Family
              owned since 1991.
            </span>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap items-start gap-6">
            <a href="#services" className="text-(--a-muted) underline">Services</a>
            <a href="#reviews" className="text-(--a-muted) underline">Reviews</a>
            <a href="#visit" className="text-(--a-muted) underline">Contact</a>
            <a href="https://www.facebook.com/BeetleSpa/" className="text-(--a-muted) underline">Facebook</a>
          </nav>
          <span className="basis-full text-[13px] text-(--a-subtle)">
            © 2026 Beetle Spa Ltd. · 246 E 1st St, North Vancouver, BC V7L 1B3
            · 604-985-0481
          </span>
        </div>
      </footer>
    </div>
  );
}
