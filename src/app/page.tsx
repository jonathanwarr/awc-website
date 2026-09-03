"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faChevronUp,
  faQuoteLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CALENDLY_URL = "https://calendly.com/jonathan-amwarr/coffee-and-connect";

/* ─── Smooth Scroll Helper ─── */

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/* ─── Scroll To Top Button ─── */

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer hover:bg-[var(--color-primary-hover)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4" />
    </button>
  );
}

/* ─── Navigation ─── */

const navLinks = [
  { label: "Problems", id: "problem" },
  { label: "Solutions", id: "how-we-help" },
  { label: "About", id: "approach" },
  { label: "Contact", id: "contact" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNav(id: string) {
    setMobileOpen(false);
    smoothScrollTo(id);
  }

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <nav className="absolute inset-x-0 top-0 z-40">
      {/* Desktop: links either side of the wordmark */}
      <div className="hidden md:flex items-center justify-center gap-16 lg:gap-22 pt-12 body-2 text-[var(--color-text-dark)]">
        {leftLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => smoothScrollTo(link.id)}
            className="hover:text-[var(--color-primary-hover)] transition-colors cursor-pointer"
          >
            {link.label}
          </button>
        ))}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="h4 text-[var(--color-text-dark)] -mx-2"
        >
          AWC
        </a>
        {rightLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => smoothScrollTo(link.id)}
            className="hover:text-[var(--color-primary-hover)] transition-colors cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile: wordmark + hamburger */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="h4 text-[var(--color-text-dark)]"
        >
          AWC
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="w-10 h-10 flex items-center justify-center text-[var(--color-text-dark)] cursor-pointer shrink-0"
        >
          <FontAwesomeIcon
            icon={mobileOpen ? faXmark : faBars}
            className="w-5 h-5"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-y border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left body-1 text-[var(--color-text-light)] hover:text-[var(--color-text-dark)] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn-2 mt-2 inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] text-white px-5 py-2.5 transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Reusable Components ─── */

function PrimaryButton({
  children,
  href = CALENDLY_URL,
  large = false,
  tone = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  large?: boolean;
  tone?: "primary" | "hover";
}) {
  const bg =
    tone === "hover"
      ? "bg-[var(--color-primary-hover)]"
      : "bg-[var(--color-primary)]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg ${bg} text-white shadow-[0_8px_20px_rgba(80,74,73,0.18)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[0_10px_24px_rgba(80,74,73,0.25)] ${large ? "btn-1 px-6 py-3 sm:px-8 sm:py-4" : "btn-2 px-6 py-3"}`}
    >
      {children}
      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
    </a>
  );
}

/* ─── Hero backdrop: sales vs. customer success curves ─── */

function HeroCurves() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <path
        d="M0 716 C 600 700, 1050 520, 1440 140"
        fill="none"
        stroke="var(--color-line-subtle)"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 716 C 500 690, 1000 600, 1440 545"
        fill="none"
        stroke="var(--color-line-subtle)"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ─── Content ─── */

const problems = [
  {
    title: "Onboarding blocks the pipeline",
    body: "New customers wait weeks to go live. Signed deals stall before they deliver value, and the backlog grows with every deal you close.",
  },
  {
    title: "Relationships slip to support",
    body: "Nobody owns the account, so check-ins turn into tickets. Renewals and expansion get handled reactively, if at all.",
  },
  {
    title: "AI gets bolted on, fast",
    body: "Your team reaches for AI tools to stop the bleeding. Without a working process underneath, they automate the chaos instead of fixing it.",
  },
];

const services = [
  {
    title: "Scaling Customer Onboarding",
    tagline: "Turn signed deals into live customers, fast.",
    body: "We map your implementation journey end to end: the workflows, tools and measures behind it. We find the bottlenecks and process gaps, then pin down the three numbers that matter: throughput, capacity and time to value. So onboarding keeps up with the deals you close.",
    points: [
      "Implementation journey & bottlenecks",
      "Throughput, capacity & time to value",
      "Findings report & implementation blueprint",
    ],
    image: "/cs-onboarding.jpg",
    alt: "Two people shaking hands across a desk",
  },
  {
    title: "Scaling Customer Success Operations",
    tagline: "Run the post-sales engine on purpose.",
    body: "We get under the hood of how you manage customers after the sale: what gets measured and how, how accounts are covered, and how adoption, renewals and expansion actually happen. So you know which accounts are healthy, which are at risk, and where the next dollar of revenue is coming from.",
    points: [
      "Proactive success & account management",
      "Health scoring, renewals & expansion",
      "Adoption, value realization & advocacy",
    ],
    image: "/cs-operations.jpg",
    alt: "An account manager on a video call with a customer",
  },
  {
    title: "AI Enablement for Customer Success",
    tagline: "Adopt AI where it earns its place.",
    body: "We assess your AI readiness: how your team uses AI today, how fluent they are, and how the company's AI goals, governance and training line up. You get an AI fluency program: a blueprint for putting AI to work in customer success, plus the materials to keep adoption growing.",
    points: [
      "AI readiness & team fluency assessment",
      "Goals, governance & training review",
      "AI fluency program & enablement materials",
    ],
    image: "/cs-ai-enablement.jpg",
    alt: "A laptop and phone open to a customer conversation",
  },
];

const stages = [
  {
    title: "Analyze",
    body: "We work alongside your team to understand how the function runs today: the workflows, the tools, the people and the numbers. We find where sales is outpacing success and where the highest-leverage fixes are.",
    deliverable: "Findings report and implementation blueprint",
  },
  {
    title: "Implement",
    body: "We put the blueprint into practice: the processes, playbooks, metrics and systems that let the function keep pace with sales. Built around how your team already works, with your team in the room.",
    deliverable: "The blueprint, implemented and running",
  },
  {
    title: "Enable",
    body: "We make sure it sticks. Your team gets the training, materials and operating rhythm to own what was built, so adoption keeps growing after we step back.",
    deliverable: "Enablement program and materials for your team",
  },
];

/* ─── Testimonial Carousel ─── */

const testimonials = [
  {
    quote:
      "His customer-first approach helped our company accelerate customer adoption of the software. If you are looking for a get-stuff-done leader, Jon would be a huge asset.",
    name: "Janelle",
    title: "Director of Sales",
  },
  {
    quote:
      "Jonathan’s ability to understand your business’s unique challenges is superior to any consultant I’ve worked with. He communicates technical processes as actionable improvements instead of using the buzzwords that run rampant in the industry. I cannot recommend him highly enough.",
    name: "Danny",
    title: "VP of Operations",
  },
  {
    quote:
      "Working with AWC saved us months of research and delivered insights we never would have found on our own. They turned that analysis into real negotiating power with our existing vendor. They exceeded every expectation.",
    name: "Krishna",
    title: "Director of Finance",
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-primary-hover)]/40 mb-6"
      />
      <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${
              i === current && !isTransitioning
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== current}
          >
            <blockquote className="h4 leading-relaxed text-[var(--color-text-dark)] italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="sans font-bold text-base text-[var(--color-text-dark)]">
                {t.name}
              </p>
              <p className="body-2 text-[var(--color-text-muted)]">{t.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                i === current
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-border-strong)] hover:bg-[var(--color-text-muted)]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero (nav sits inside so the gradient runs edge to edge) ── */}
      <section className="relative overflow-hidden min-h-[640px] md:min-h-[900px] flex flex-col bg-[linear-gradient(180deg,var(--color-bg-primary)_0%,var(--color-bg-gradient-end)_100%)] text-[var(--color-text-dark)]">
        <HeroCurves />
        <NavBar />
        <div className="relative flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 pt-28 pb-16 md:pt-40 md:pb-24">
            <div className="max-w-[900px]">
              <h1>Scale customer success to meet your sales growth</h1>
              <p className="body-4 mt-5 leading-[1.55] text-[var(--color-text-light)]">
                Helping B2B companies get customers from
                <br className="hidden md:inline" />{" "}
                <strong className="font-bold text-[var(--color-text-dark)]">sales</strong> to{" "}
                <strong className="font-bold text-[var(--color-text-dark)]">success</strong> to{" "}
                <strong className="font-bold text-[var(--color-text-dark)]">renewal</strong>.
              </p>
              <div className="mt-10 md:mt-12">
                <PrimaryButton large>Let&apos;s Talk</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="problem" className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--color-text-dark)]">
              Sales is ramping. Success is stretched.
            </h2>
            <h5 className="mt-6 text-[var(--color-text-light)] leading-normal">
              When your company hits its growth stage, the first lever you pull is sales. Then sales ramps up, and customer success becomes the bottleneck.
            </h5>
          </div>
          {/* Cards share one row grid (subgrid) so titles, dividers and body copy line up */}
          <div className="mt-12 md:mt-14 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-0 max-w-4xl mx-auto">
            {problems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:grid md:grid-rows-subgrid md:row-span-3 text-center bg-[var(--color-secondary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)]"
              >
                <h4 className="text-[var(--color-text-dark)]">{item.title}</h4>
                <hr className="my-6 border-0 border-t border-[var(--color-primary)] md:self-end" />
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Help ── */}
      <section id="how-we-help" className="bg-[var(--color-bg-primary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[var(--color-text-dark)]">How We Help</h2>
            <h5 className="mt-2 text-[var(--color-text-light)]">
              Three services. Each one built to keep pace with sales.
            </h5>
          </div>
          {/* Columns share one row grid (subgrid): image, title, tagline, body and list line up */}
          <div className="mt-12 md:mt-14 flex flex-col gap-14 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-0 max-w-[1120px] mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col md:grid md:grid-rows-subgrid md:row-span-5"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={840}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-[200px] md:h-[240px] object-cover rounded-2xl border-2 border-[var(--color-border-strong)] shadow-[0_8px_24px_rgba(80,74,73,0.12)]"
                />
                <h3 className="mt-6 md:mt-8 text-[var(--color-text-dark)]">
                  {service.title}
                </h3>
                <p className="serif-1 mt-2 text-[var(--color-text-muted)]">
                  {service.tagline}
                </p>
                <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                  {service.body}
                </p>
                <ul className="mt-5 md:mt-6 md:self-start flex flex-col gap-3 text-[17px] text-[var(--color-text-light)]">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section id="approach" className="bg-[var(--color-bg-default)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-[var(--color-text-dark)]">Our Approach</h2>
              <h5 className="mt-2 text-[var(--color-text-light)]">
                Analyze. Implement. Enable.
              </h5>
              <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                Every service runs through the same three milestones, and each one ends with a deliverable you can use on its own. Start at whichever stage fits where you are, and stop when you have what you need.
              </p>
            </div>

            {/* Cards share one row grid (subgrid): heading, body, divider and deliverable line up */}
            <div className="mt-10 md:mt-14 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-0">
              {stages.map((stage, i) => (
                <div
                  key={stage.title}
                  className="flex flex-col md:grid md:grid-rows-subgrid md:row-span-5 bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="sans flex items-center justify-center w-9 h-9 rounded-md bg-[var(--color-secondary-surface)] font-bold text-base text-[var(--color-text-dark)] shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="text-[var(--color-text-dark)] leading-none">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="mt-4 md:mt-5 text-[var(--color-text-light)] leading-relaxed">
                    {stage.body}
                  </p>
                  <hr className="my-5 md:my-6 border-0 border-t border-[var(--color-primary)] md:self-end" />
                  <h6 className="text-[var(--color-text-muted)]">Deliverable</h6>
                  <p className="mt-1.5 text-[var(--color-text-dark)]">
                    {stage.deliverable}
                  </p>
                </div>
              ))}
            </div>
            <p className="serif-1 mt-6 md:mt-8 text-center text-[var(--color-text-muted)]">
              Every stage is an entry point and an exit point. Take one, or all three.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why AWC / Testimonials ── */}
      <section id="testimonials" className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-[var(--color-text-dark)]">Why AWC</h2>
            <h5 className="mt-2 text-[var(--color-text-light)]">
              700+ implementations. Don&apos;t take our word for it.
            </h5>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact" className="bg-[var(--color-accent-light)] text-[var(--color-text-dark)] py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2>Ready to scale success to meet sales?</h2>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute call. We&apos;ll talk about where sales is outpacing success, what&apos;s realistic to fix first, and whether we&apos;re the right fit. No pitch, no obligation.
          </p>
          <div className="mt-8 md:mt-10">
            <PrimaryButton large tone="hover">
              Book Your Free Call
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border-default)] text-[var(--color-text-light)] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="h4 text-[var(--color-text-dark)]">AWC</span>
            <p className="mt-1 body-2">
              Scale customer success to meet your sales growth.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 body-2">
            {navLinks.slice(0, 3).map((link) => (
              <button
                key={link.id}
                onClick={() => smoothScrollTo(link.id)}
                className="hover:text-[var(--color-text-dark)] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:jonathan@amwarr.com"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="body-2 text-center">
            &copy; {new Date().getFullYear()} AWC. All rights reserved.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
