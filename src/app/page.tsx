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
  { label: "How we help", id: "how-we-help" },
  { label: "How it works", id: "how-it-works" },
  { label: "About", id: "testimonials" },
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

/* ─── Hero backdrop: curves ─── */

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
    title: "You're not sure where it fits",
    body: "Everyone says AI will change everything, but nobody shows you what that looks like for your business and your day-to-day work.",
  },
  {
    title: "The busywork keeps piling up",
    body: "Emails, scheduling, quotes, paperwork. It all has to get done, and it's eating the hours you'd rather spend with customers, or at home.",
  },
  {
    title: "You don't want to get it wrong",
    body: "Is your customer info safe? Is it worth the cost? Will your team use it? You deserve straight answers before spending a dollar.",
  },
];

const services = [
  {
    title: "Get comfortable with AI",
    tagline: "Learn what it can do for you, in plain English.",
    body: "We look at how your days usually go and show you where AI could help. No jargon, no nonsense. You'll leave knowing what's worth trying and what isn't.",
    example:
      "A dental office learns to draft appointment reminders and answer common patient questions in minutes, instead of an hour at the end of the day.",
    image: "/cs-onboarding.jpg",
    alt: "Two people shaking hands across a desk",
  },
  {
    title: "Take work off your plate",
    tagline: "Hand off the tasks that eat up your week.",
    body: "We find the one or two jobs that take the most time and build something simple to handle them. Your team stays in charge. The tool just does the legwork.",
    example:
      "A customer describes their car trouble online. A simple assistant writes it up with a rough quote, and the shop reviews it and books them in.",
    image: "/cs-operations.jpg",
    alt: "A person on a video call at a wooden desk",
  },
  {
    title: "Simplify routine tasks",
    tagline: "Make the everyday stuff easier.",
    body: "Sometimes the answer isn't a new tool. We look at a process from start to finish, find where it gets stuck, and make it simple. We'll share where AI helps, and also where it doesn't.",
    example:
      "A landscaping company goes from quotes scattered across texts, emails and notebooks to one simple system where nothing slips through the cracks.",
    image: "/cs-ai-enablement.jpg",
    alt: "A person using a laptop and phone at a table",
  },
];

const stages = [
  {
    title: "Listen",
    body: "We learn how things run today: what you use, what slows you down, and what you wish was easier. Then we show you the biggest time savers.",
    deliverable: "A simple plan, in plain language, of what to fix first.",
  },
  {
    title: "Build",
    body: "We put the plan into action, built around how your team already works. You'll see it come together and have a say every step of the way.",
    deliverable: "A working solution your team is using.",
  },
  {
    title: "Teach",
    body: "We make sure your team is comfortable with what we built and can keep it going, then show you how to spot the next thing worth trying.",
    deliverable: "Training, easy how-to guides, and the confidence to keep going.",
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
              <h1>Let&apos;s figure out what AI can do for you.</h1>
              <p className="body-4 mt-5 leading-[1.55] text-[var(--color-text-light)]">
                We&apos;ll start with one small thing that costs you time and money every week and make it easier. Then we&apos;ll show you how to spot other ways it can help your business.
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
              AI is everywhere. Now what?
            </h2>
            <h5 className="mt-6 text-[var(--color-text-light)] leading-normal">
              You&apos;ve heard it can save you time and money, but you don&apos;t want to waste either finding out.
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
            <h2 className="text-[var(--color-text-dark)]">How we help</h2>
            <h5 className="mt-2 text-[var(--color-text-light)]">
              We&apos;re here to make sure you don&apos;t waste either.
            </h5>
          </div>
          {/* Columns share one row grid (subgrid): image, title, tagline, body and example line up */}
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
                <p className="mt-5 md:mt-6 md:self-start border-l-2 border-[var(--color-primary)] pl-4 text-[17px] text-[var(--color-text-light)] leading-relaxed">
                  <strong className="font-bold text-[var(--color-text-dark)]">For example:</strong>{" "}
                  {service.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-[var(--color-bg-default)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-[var(--color-text-dark)]">How it works</h2>
              <h5 className="mt-2 text-[var(--color-text-light)]">
                Listen. Build. Teach.
              </h5>
              <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                Every project follows the same three steps, and each one gives you something useful on its own. Start wherever makes sense for you, and stop when you have what you need.
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
                  <h6 className="text-[var(--color-text-muted)]">What you get</h6>
                  <p className="mt-1.5 text-[var(--color-text-dark)]">
                    {stage.deliverable}
                  </p>
                </div>
              ))}
            </div>
            <p className="serif-1 mt-6 md:mt-8 text-center text-[var(--color-text-muted)]">
              Every step is a place to start or a place to stop. Take one, or all three.
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
              We&apos;ve helped 700+ teams get set up on new software. Don&apos;t just take our word for it.
            </h5>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact" className="bg-[var(--color-accent-light)] text-[var(--color-text-dark)] py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2>Not sure where to start? Let&apos;s chat.</h2>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute chat. Tell us how your week usually goes, and we&apos;ll share a few ways AI could make it easier. No pitch, no pressure, and no tech knowledge needed.
          </p>
          <div className="mt-8 md:mt-10">
            <PrimaryButton large tone="hover">
              Book a free chat
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
              Let&apos;s figure out what AI can do for you.
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
