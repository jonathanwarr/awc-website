"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faCheck,
  faGraduationCap,
  faLockOpen,
  faWrench,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-[var(--color-bg-primary)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4 gap-3">
          <Link
            href="/"
            className="h4 text-[var(--color-text-dark)]"
          >
            AWC
          </Link>
          <div className="hidden md:flex items-center gap-8 body-2 text-[var(--color-text-light)]">
            <Link
              href="/#how-we-help"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Approach
            </Link>
            <Link
              href="/#why-us"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Team
            </Link>
            <Link
              href="/#services"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--color-text-dark)] font-bold"
            >
              Pricing
            </Link>
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
            <Link
              href="/#how-we-help"
              onClick={() => setMobileOpen(false)}
              className="block body-1 text-[var(--color-text-light)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              Approach
            </Link>
            <Link
              href="/#why-us"
              onClick={() => setMobileOpen(false)}
              className="block body-1 text-[var(--color-text-light)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              Team
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileOpen(false)}
              className="block body-1 text-[var(--color-text-light)] hover:text-[var(--color-text-dark)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="block body-1 text-[var(--color-text-dark)] font-bold"
            >
              Pricing
            </Link>
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

      {/* ── Page Header ── */}
      <section className="bg-[var(--color-bg-primary)] text-[var(--color-text-dark)] py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="h6 inline-block text-[var(--color-primary)] mb-3">
            Pricing
          </span>
          <h1 className="leading-tight">
            Simple Pricing
          </h1>
        </div>
      </section>

      {/* ── Build Engagement ── */}
      <section className="bg-[var(--color-bg-default)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <FontAwesomeIcon
                  icon={faWrench}
                  className="w-5 h-5 text-[var(--color-primary)]"
                />
              </div>
              <h2 className="text-[var(--color-text-dark)]">
                Building
              </h2>
            </div>
            <p className="text-base md:text-lg text-[var(--color-text-light)] leading-relaxed">
              Every build starts with Discovery. We learn how your business
              runs, identify where you are losing time, and scope a solution.
              From there, we quote a flat project fee and provide a clear
              roadmap of what we will build together.
            </p>
            <div className="mt-8 md:mt-10 bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 md:p-10 border border-[var(--color-border-default)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="h6 text-[var(--color-primary)]">
                    Pricing
                  </p>
                  <p className="h4 mt-1 text-[var(--color-text-dark)]">
                    Flat project fee, quoted after Discovery
                  </p>
                  <p className="mt-2 text-[var(--color-text-muted)]">
                    You know the cost before any work begins.
                  </p>
                </div>
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] text-white px-6 py-3 transition-colors hover:bg-[var(--color-primary-hover)] shrink-0 whitespace-nowrap"
                >
                  Book Discovery Call
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Retainer Tiers ── */}
      <section className="bg-[var(--color-bg-default)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-4 mb-4 max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
              <FontAwesomeIcon
                icon={faLockOpen}
                className="w-5 h-5 text-[var(--color-primary)]"
              />
            </div>
            <h2 className="text-[var(--color-text-dark)]">
              Retainer
            </h2>
          </div>
          <p className="text-base md:text-lg text-[var(--color-text-light)] leading-relaxed max-w-4xl mx-auto mb-10">
            Stay supported month to month. We maintain what we built, update it
            as new capabilities come out, and expand it as your needs grow.
          </p>

          {/* ── Billing Toggle ── */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <span
                className={`body-2 ${!isAnnual ? "text-[var(--color-text-dark)] font-bold" : "text-[var(--color-text-muted)]"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 rounded-full transition-colors cursor-pointer"
                style={{
                  backgroundColor: isAnnual
                    ? "var(--color-primary)"
                    : "var(--color-border-strong)",
                }}
                aria-label="Toggle annual pricing"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform ${isAnnual ? "translate-x-7" : "translate-x-0"}`}
                />
              </button>
              <span
                className={`body-2 ${isAnnual ? "text-[var(--color-text-dark)] font-bold" : "text-[var(--color-text-muted)]"}`}
              >
                Annual
              </span>
            </div>
            <div className="flex justify-center mt-4 mb-10">
              <span
                className={`body-3 font-bold px-2.5 py-1 rounded-full transition-opacity ${isAnnual ? "opacity-100 text-[var(--color-primary-hover)] bg-[var(--color-primary-hover)]/10" : "opacity-0"}`}
              >
                Save 20%
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="flex flex-col bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)]">
              <p className="h6 text-[var(--color-primary)]">
                Tier 1
              </p>
              <div className="mt-4">
                <span className="h3 text-[var(--color-text-dark)]">
                  {isAnnual ? "$144" : "$180"}
                </span>
                <span className="text-[var(--color-text-muted)]">/month</span>
              </div>
              <p
                className={`mt-1 body-2 ${isAnnual ? "text-[var(--color-primary-hover)]" : "invisible"}`}
              >
                Save $432/year
              </p>
              <p className="mt-4 text-[var(--color-text-light)]">
                1 hour per month
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Ongoing system maintenance
                </li>
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Monthly check-in
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-border-default)] h-[68px] flex items-center">
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-2 inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                >
                  Get started
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="relative flex flex-col bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 border-2 border-[var(--color-primary-hover)]">
              <span className="h6 absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary-hover)] text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
              <p className="h6 text-[var(--color-primary)]">
                Tier 2
              </p>
              <div className="mt-4">
                <span className="h3 text-[var(--color-text-dark)]">
                  {isAnnual ? "$288" : "$360"}
                </span>
                <span className="text-[var(--color-text-muted)]">/month</span>
              </div>
              <p
                className={`mt-1 body-2 ${isAnnual ? "text-[var(--color-primary-hover)]" : "invisible"}`}
              >
                Save $864/year
              </p>
              <p className="mt-4 text-[var(--color-text-light)]">
                2 hours per month
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Everything in Tier 1
                </li>
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Unused hours roll over one month
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-border-default)] h-[68px] flex items-center">
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-2 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] text-white px-6 py-3 transition-colors hover:bg-[var(--color-primary-hover)]"
                >
                  Get started
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col bg-[var(--color-primary-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border-default)]">
              <p className="h6 text-[var(--color-primary)]">
                Tier 3
              </p>
              <div className="mt-4">
                <span className="h3 text-[var(--color-text-dark)]">
                  {isAnnual ? "$600" : "$750"}
                </span>
                <span className="text-[var(--color-text-muted)]">/month</span>
              </div>
              <p
                className={`mt-1 body-2 ${isAnnual ? "text-[var(--color-primary-hover)]" : "invisible"}`}
              >
                Save $1,800/year
              </p>
              <p className="mt-4 text-[var(--color-text-light)]">
                5 hours per month
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Everything in Tier 2
                </li>
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Priority booking
                </li>
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Monthly personalized Claude update summary
                </li>
                <li className="flex items-start gap-2 text-[var(--color-text-light)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0"
                  />
                  Free 30-min monthly exploration session
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-border-default)] h-[68px] flex items-center">
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-2 inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                >
                  Get started
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Rollover & billing note */}
          <div className="mt-16 md:mt-30 max-w-3xl mx-auto bg-[var(--color-primary-surface)] rounded-xl p-6 border border-[var(--color-border-default)]">
            <p className="body-2 text-[var(--color-text-light)] leading-relaxed">
              <span className="font-bold text-[var(--color-text-dark)]">
                Hour rollover policy:
              </span>{" "}
              Tier 2 and Tier 3 clients can roll unused hours into the
              following month. Rolled hours expire at the end of that month if
              not used. Current month hours are always consumed first.
            </p>
            <p className="mt-3 body-2 text-[var(--color-text-muted)]">
              {isAnnual
                ? "Annual commitments are billed upfront."
                : "Switch to annual billing to save 20%."}{" "}
              All prices in CAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Coaching ── */}
      <section className="bg-[var(--color-bg-default)] py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="w-5 h-5 text-[var(--color-primary)]"
                />
              </div>
              <h2 className="text-[var(--color-text-dark)]">
                Coaching
              </h2>
            </div>
            <p className="text-base md:text-lg text-[var(--color-text-light)] leading-relaxed mb-10">
              Hands-on training for you or your team. One-on-one or small
              groups. Tailored to your business and your level of experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Hourly */}
              <div className="flex flex-col bg-[var(--color-primary-surface)] rounded-2xl pt-8 px-6 pb-10 sm:pt-10 sm:px-10 sm:pb-14 border border-[var(--color-border-default)]">
                <p className="h6 text-[var(--color-primary)]">
                  Hourly
                </p>
                <div className="mt-4">
                  <span className="h3 text-[var(--color-text-dark)]">
                    $200
                  </span>
                  <span className="text-[var(--color-text-muted)]">/hour</span>
                </div>
                <p className="mt-1 body-2 invisible">
                  Placeholder
                </p>
                <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                  A single focused session. Great for tackling a specific
                  workflow or getting quick answers.
                </p>
              </div>

              {/* Half-Day */}
              <div className="relative flex flex-col bg-[var(--color-primary-surface)] rounded-2xl pt-8 px-6 pb-10 sm:pt-10 sm:px-10 sm:pb-14 border-2 border-[var(--color-primary-hover)]">
                <span className="h6 absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary-hover)] text-white px-3 py-1 rounded-full">
                  Most Popular
                </span>
                <p className="h6 text-[var(--color-primary)]">
                  Half-Day
                </p>
                <div className="mt-4">
                  <span className="h3 text-[var(--color-text-dark)]">
                    $720
                  </span>
                  <span className="text-[var(--color-text-muted)]">/4 hours</span>
                </div>
                <p className="mt-1 body-2 text-[var(--color-primary-hover)] font-bold">
                  Save $80 vs. hourly
                </p>
                <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                  Enough time to audit a workflow, recommend tools, and start
                  building together.
                </p>
              </div>

              {/* Full-Day */}
              <div className="flex flex-col bg-[var(--color-primary-surface)] rounded-2xl pt-8 px-6 pb-10 sm:pt-10 sm:px-10 sm:pb-14 border border-[var(--color-border-default)]">
                <p className="h6 text-[var(--color-primary)]">
                  Full-Day
                </p>
                <div className="mt-4">
                  <span className="h3 text-[var(--color-text-dark)]">
                    $1,280
                  </span>
                  <span className="text-[var(--color-text-muted)]">/8 hours</span>
                </div>
                <p className="mt-1 body-2 text-[var(--color-primary-hover)] font-bold">
                  Save $320 vs. hourly
                </p>
                <p className="mt-6 text-[var(--color-text-light)] leading-relaxed">
                  A full deep-dive. Ideal for teams who want to cover multiple
                  workflows in a single day.
                </p>
              </div>
            </div>

            <p className="mt-6 body-2 text-[var(--color-text-muted)]">
              All formats available for 1-on-1 and small groups. Packages of
              sessions can be quoted on request. All prices in CAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--color-accent-light)] text-[var(--color-text-dark)] py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2>
            Not sure which option fits?
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            Book a free consultation. We&apos;ll figure out what makes sense
            for your business together. No pressure.
          </p>
          <div className="mt-8 md:mt-10">
            <a
              href="https://calendly.com/jonathan-amwarr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-1 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] text-white px-6 py-3 sm:px-8 sm:py-4 transition-colors hover:bg-[var(--color-primary-hover)]"
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
            <Link
              href="/#how-we-help"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Approach
            </Link>
            <Link
              href="/#why-us"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Team
            </Link>
            <Link
              href="/#services"
              className="hover:text-[var(--color-text-dark)] transition-colors"
            >
              Services
            </Link>
            <Link href="/pricing" className="hover:text-[var(--color-text-dark)] transition-colors">
              Pricing
            </Link>
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
    </div>
  );
}
