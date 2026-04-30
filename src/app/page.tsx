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
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  { label: "How We Help", id: "how-we-help" },
  { label: "Our Approach", id: "approach" },
  { label: "Our Team", id: "why-us" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNav(id: string) {
    setMobileOpen(false);
    smoothScrollTo(id);
  }

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4 gap-3">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="h4 text-[var(--color-text-dark)]"
        >
          AWC
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 body-2 text-[var(--color-text-light)]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => smoothScrollTo(link.id)}
              className="hover:text-[var(--color-text-dark)] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://calendly.com/jonathan-amwarr/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-2 rounded-lg bg-[var(--color-primary)] text-white px-4 py-2 sm:px-5 sm:py-2.5 transition-colors hover:bg-[var(--color-primary-hover)] whitespace-nowrap"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-dark)] cursor-pointer shrink-0"
          >
            <FontAwesomeIcon
              icon={mobileOpen ? faXmark : faBars}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-6 sm:px-8 py-4 space-y-3">
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
            href="https://calendly.com/jonathan-amwarr/30min"
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="h6 inline-block text-[var(--color-primary)] mb-3">
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  href = "https://calendly.com/jonathan-amwarr/30min",
  large = false,
}: {
  children: React.ReactNode;
  href?: string;
  large?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] text-white shadow-[0_8px_20px_rgba(80,74,73,0.18)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[0_10px_24px_rgba(80,74,73,0.25)] ${large ? "btn-1 px-8 py-4" : "btn-2 px-6 py-3"}`}
    >
      {children}
      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
    </a>
  );
}

/* ─── Testimonial Carousel ─── */

const testimonials = [
  {
    quote:
      "Working with AWC saved us months of research and delivered insights we never would have found on our own. They turned that analysis into real negotiating power with our existing vendor. They exceeded every expectation.",
    name: "Krishna",
    title: "Director of Finance",
  },
  {
    quote:
      "Jonathan\u2019s ability to understand your business\u2019s unique challenges is superior to any consultant I\u2019ve worked with. He communicates technical processes as actionable improvements instead of using the buzzwords that run rampant in the industry. I cannot recommend him highly enough.",
    name: "Danny",
    title: "VP of Operations",
  },
  {
    quote:
      "His customer-first approach helped our company accelerate customer adoption of the software. If you are looking for a get-stuff-done leader, Jon would be a huge asset.",
    name: "Janelle",
    title: "Director of Sales",
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
              <p className="font-bold text-[var(--color-text-dark)]">
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
      {/* ── Navigation ── */}
      <NavBar />

      {/* ── Hero ── */}
      <section className="relative bg-[var(--color-bg-primary)] text-[var(--color-text-dark)] overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-10 sm:px-14 md:px-6 py-16 sm:py-24 md:py-52 grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-start">
          <div>
            <h1 className="leading-tight">
              Your time is too<br className="hidden md:inline" />
              {" "}valuable for work<br className="hidden md:inline" />
              {" "}that doesn&apos;t need it.
            </h1>
            <h5 className="mt-6 text-[var(--color-text-light)] leading-relaxed max-w-xl">
              We design and build solutions to transform your time consuming tasks to automated processes.
            </h5>
            <h4 className="mt-12 md:mt-20 text-[var(--color-text-dark)] leading-relaxed max-w-xl">
              More time for clients, growth &amp; life.
            </h4>
            <div className="mt-8 md:mt-10">
              <PrimaryButton large>Let&apos;s Find Time</PrimaryButton>
            </div>
          </div>
          <div className="hidden md:flex items-start justify-center md:-mt-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-[-20px] translate-y-[20px] rounded-2xl bg-[var(--color-primary-surface)]"
              />
              <Image
                src="/awc-hero-image.svg"
                alt="AWC — AI solutions for your business"
                width={800}
                height={1000}
                className="relative rounded-2xl max-w-[440px] h-auto shadow-[0_8px_24px_rgba(80,74,73,0.12)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="problem" className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>The Reality</SectionLabel>
            <h2 className="text-[var(--color-text-dark)]">
              The Second Shift
            </h2>
            <h5 className="mt-6 text-[var(--color-text-light)] leading-relaxed">
              The work that doesn&apos;t need your expertise, but takes your time.
            </h5>
          </div>
          <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-[var(--color-secondary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)] max-w-[260px] mx-auto md:max-w-none md:mx-0 w-full">
              <div className="h2 text-[var(--color-text-dark)]">
                54hrs
              </div>
              <hr className="my-6 border-0 border-t border-[var(--color-primary)]" />
              <p className="text-[var(--color-text-light)] leading-relaxed md:min-h-[78px]">
                The average number of hours in a work week for business owners-operators
              </p>
              <p className="mt-6 md:mt-10 body-3 text-center text-[var(--color-primary-hover)]">
                CFIB, 2026
              </p>
            </div>
            <div className="text-center bg-[var(--color-secondary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)] max-w-[260px] mx-auto md:max-w-none md:mx-0 w-full">
              <div className="h2 text-[var(--color-text-dark)]">
                72%
              </div>
              <hr className="my-6 border-0 border-t border-[var(--color-primary)]" />
              <p className="text-[var(--color-text-light)] leading-relaxed md:min-h-[78px]">
                The percentage of owners that said they would focus on growth if they had time back
              </p>
              <p className="mt-6 md:mt-10 body-3 text-center text-[var(--color-primary-hover)]">
                CFIB, 2026
              </p>
            </div>
            <div className="text-center bg-[var(--color-secondary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)] max-w-[260px] mx-auto md:max-w-none md:mx-0 w-full">
              <div className="h2 text-[var(--color-text-dark)]">
                6x
              </div>
              <hr className="my-6 border-0 border-t border-[var(--color-primary)]" />
              <p className="text-[var(--color-text-light)] leading-relaxed md:min-h-[78px]">
                The increase in revenue generated by process and technology investment
              </p>
              <p className="mt-6 md:mt-10 body-3 text-center text-[var(--color-primary-hover)]">
                BDC, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Help ── */}
      <section id="how-we-help" className="bg-[var(--color-bg-primary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start max-w-5xl mx-auto">
            <div className="flex justify-center md:justify-start md:mt-12">
              <Image
                src="/task-time.svg"
                alt="The usual suspects — tasks that take your time"
                width={800}
                height={800}
                className="w-[260px] h-[325px] sm:w-[320px] sm:h-[400px] rounded-[60px] sm:rounded-[80px] border-2 border-[var(--color-border-strong)] shadow-[0_8px_24px_rgba(80,74,73,0.12)]"
              />
            </div>
            <div>
              <div className="text-center md:text-left">
                <SectionLabel>How We Help</SectionLabel>
                <h2 className="text-[var(--color-text-dark)]">
                  The Usual Suspects
                </h2>
                <p className="body-4 mt-4 text-[var(--color-text-light)]">
                  Common tasks that manage to affect everyone&apos;s clock
                </p>
              </div>
              <ul className="mt-8 md:mt-10 grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-3 text-[var(--color-text-light)] justify-center md:justify-start w-fit mx-auto md:mx-0 text-left">
                {[
                  "Scheduling",
                  "Data Entry",
                  "Documentation",
                  "Charting",
                  "Email Inbox",
                  "Organizing & Filing",
                  "Record Keeping",
                  "Reporting",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 md:mt-10 text-[var(--color-text-light)] leading-relaxed">
                These are a few examples of areas we look to explore first. We&apos;ll show you how to effectively manage these tasks using AI, so that you can have time back for what matters most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section id="approach" className="bg-[var(--color-bg-default)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-[var(--color-text-dark)]">
                Our Approach is Simple
              </h2>
              <h5 className="mt-2 text-[var(--color-text-light)]">
                Listen. Learn. Plan. Build.
              </h5>
            </div>

            <div className="mt-10 md:mt-12 space-y-10 md:space-y-12">
              {[
                {
                  title: "Listen",
                  body:
                    "It starts with asking and listening. Where does your time go? What drains your energy? What keeps you at the desk when you should be home?",
                },
                {
                  title: "Learn",
                  body:
                    "Once we understand your pain points, we dive into the details. We learn your processes, your tools, and how you use them. We look for the bottlenecks, the inefficiencies, and the opportunities for AI to step in and take over.",
                },
                {
                  title: "Plan",
                  body:
                    "We turn what we learn into a clear picture of where your time is lost and where the highest-value changes are. You see and approvethe plan before we implement anything.",
                },
                {
                  title: "Build",
                  body:
                    "We'll build systems around your existing workflow and show you how to easily manage them with Claude AI. You'll adopt these systems with confidence and get time back fast.",
                },
              ].map((step, i) => (
                <div
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-x-4"
                >
                  <div className="row-span-2 flex items-center justify-center w-9 h-9 rounded-md bg-[var(--color-secondary-surface)] font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-dark)]">
                    {i + 1}
                  </div>
                  <h3 className="text-[var(--color-text-dark)] leading-none self-center">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="why-us" className="bg-[var(--color-bg-primary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Why Us</SectionLabel>
            <h2 className="text-[var(--color-text-dark)]">
              Experience Matters
            </h2>
            <h5 className="mt-2 text-[var(--color-text-light)]">
              700+ Implementations. Zero Guesswork.
            </h5>
          </div>
          <div className="mt-12 md:mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)]">
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <div className="shrink-0 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[var(--color-accent-light)]">
                  <Image
                    src="/negar-awc.svg"
                    alt="Negar Amiri — Headshot"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-[var(--color-text-dark)]">
                      Negar Amiri
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/negaramiri/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Negar's LinkedIn"
                      className="shrink-0 text-[28px] leading-none text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                  <p className="body-2 text-[var(--color-text-muted)]">Partner, Product &amp; Technology</p>
                  <p className="serif-1 mt-3 text-[var(--color-text-light)]">
                    12 years in technology across marketing and product management
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                Negar has spent her career mapping how people actually work, then shaping the solution around them. She is the reason your solution will solve the right problem, not just a problem.
              </p>
            </div>
            <div className="bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)]">
              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                <div className="shrink-0 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[var(--color-accent-light)]">
                  <Image
                    src="/jon-awc.svg"
                    alt="Jonathan Warr — Headshot"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-[var(--color-text-dark)]">
                      Jonathan Warr
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/jonathan-warr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Jonathan's LinkedIn"
                      className="shrink-0 text-[28px] leading-none text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                  <p className="body-2 text-[var(--color-text-muted)]">Partner, Strategy &amp; Operations</p>
                  <p className="serif-1 mt-3 text-[var(--color-text-light)]">
                    12 years in technology across client services and operations management
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-light)] leading-relaxed">
              Jonathan has spent his career translating client needs into technical plans, then making sure those plans actually land in the day-to-day. He is the reason your solution will get you time back, not just promise it.
              </p>
            </div>
          </div>
          <p className="mt-12 md:mt-14 max-w-3xl mx-auto text-center text-base md:text-lg text-[var(--color-text-light)] leading-relaxed">
Most small business AI projects fail one of two ways. They build the wrong thing, or they build the right thing that nobody uses. Negar handles the first half. Jon handles the second. Between them, that is over two decades of figuring out what people actually need and making sure they get it.          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[var(--color-bg-secondary)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 md:mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-[var(--color-text-dark)]">
              Don&apos;t take our word for it
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact" className="bg-[var(--color-accent-light)] text-[var(--color-text-dark)] py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2>
            Ready to get your evenings back?
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            Book a free consultation. We will talk about where your time is
            going, what is realistic to fix, and whether we are the right fit.
          </p>
          <div className="mt-8 md:mt-10">
            <a
              href="https://calendly.com/jonathan-amwarr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-1 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary-hover)] text-white px-6 py-3 sm:px-8 sm:py-4 shadow-[0_8px_20px_rgba(80,74,73,0.18)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[0_10px_24px_rgba(80,74,73,0.25)]"
            >
              Book Your Free Consultation
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border-default)] text-[var(--color-text-light)] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="h4 text-[var(--color-text-dark)]">
              AWC
            </span>
            <p className="mt-1 body-2">Solutions that work.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 body-2">
            <button
              onClick={() => smoothScrollTo("how-we-help")}
              className="hover:text-[var(--color-text-dark)] transition-colors cursor-pointer"
            >
              How We Help
            </button>
            <button
              onClick={() => smoothScrollTo("approach")}
              className="hover:text-[var(--color-text-dark)] transition-colors cursor-pointer"
            >
              Our Approach
            </button>
            <button
              onClick={() => smoothScrollTo("why-us")}
              className="hover:text-[var(--color-text-dark)] transition-colors cursor-pointer"
            >
              Our Team
            </button>
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
