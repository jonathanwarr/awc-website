"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faGraduationCap,
  faLockOpen,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex flex-col">
      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-stone-200)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]"
          >
            AWC
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-stone-600)]">
            <Link
              href="/#approach"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Our Approach
            </Link>
            <Link
              href="/#services"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-[var(--color-primary)] font-semibold"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              FAQ
            </Link>
          </div>
          <a
            href="https://calendly.com/jonathan-amwarr/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-cyan)] text-white font-semibold px-5 py-2.5 text-sm transition-colors hover:bg-[var(--color-cyan-dark)]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* ── Page Header ── */}
      <section className="bg-[var(--color-primary)] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)] mb-3">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Simple pricing. No surprises.
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every engagement starts with an honest conversation.
          </p>
        </div>
      </section>

      {/* ── Build Engagement ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWrench}
                  className="w-5 h-5 text-[var(--color-cyan)]"
                />
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">
                Building
              </h2>
            </div>
            <p className="text-lg text-[var(--color-stone-600)] leading-relaxed">
              Every build starts with Discovery. We learn how your business
              runs, identify where you are losing time, and scope a solution.
              From there, we quote a flat project fee and provide a clear
              roadmap of what we will build together.
            </p>
            <div className="mt-10 bg-[var(--color-cream)] rounded-2xl p-8 md:p-10 border border-[var(--color-stone-200)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                    Pricing
                  </p>
                  <p className="mt-1 text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                    Flat project fee, quoted after Discovery
                  </p>
                  <p className="mt-2 text-[var(--color-stone-500)]">
                    You know the cost before any work begins.
                  </p>
                </div>
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-cyan)] text-white font-semibold px-6 py-3 text-base transition-colors hover:bg-[var(--color-cyan-dark)] shrink-0"
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
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4 max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faLockOpen}
                className="w-5 h-5 text-[var(--color-cyan)]"
              />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">
              Retainer
            </h2>
          </div>
          <p className="text-lg text-[var(--color-stone-600)] leading-relaxed max-w-4xl mx-auto mb-10">
            Stay supported month to month. We maintain what we built, update it
            as new capabilities come out, and expand it as your needs grow.
          </p>

          {/* ── Billing Toggle ── */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm font-medium ${!isAnnual ? "text-[var(--color-primary)]" : "text-[var(--color-stone-400)]"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 rounded-full transition-colors cursor-pointer"
                style={{
                  backgroundColor: isAnnual
                    ? "var(--color-cyan)"
                    : "var(--color-stone-300)",
                }}
                aria-label="Toggle annual pricing"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform ${isAnnual ? "translate-x-7" : "translate-x-0"}`}
                />
              </button>
              <span
                className={`text-sm font-medium ${isAnnual ? "text-[var(--color-primary)]" : "text-[var(--color-stone-400)]"}`}
              >
                Annual
              </span>
            </div>
            <div className="flex justify-center mt-4 mb-10">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-opacity ${isAnnual ? "opacity-100 text-[var(--color-gold)] bg-[var(--color-gold)]/10" : "opacity-0"}`}
              >
                Save 20%
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <div className="flex flex-col bg-white rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                Tier 1
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                  {isAnnual ? "$144" : "$180"}
                </span>
                <span className="text-[var(--color-stone-500)]">/month</span>
              </div>
              <p
                className={`mt-1 text-sm font-medium ${isAnnual ? "text-[var(--color-gold)]" : "invisible"}`}
              >
                Save $432/year
              </p>
              <p className="mt-4 text-[var(--color-stone-600)]">
                1 hour per month
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Ongoing system maintenance
                </li>
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Monthly check-in
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-stone-200)] h-[68px] flex items-center">
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-cyan)] font-semibold hover:text-[var(--color-cyan-dark)] transition-colors"
                >
                  Get started
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="relative flex flex-col bg-white rounded-2xl p-8 border-2 border-[var(--color-gold)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-gold)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                Tier 2
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                  {isAnnual ? "$288" : "$360"}
                </span>
                <span className="text-[var(--color-stone-500)]">/month</span>
              </div>
              <p
                className={`mt-1 text-sm font-medium ${isAnnual ? "text-[var(--color-gold)]" : "invisible"}`}
              >
                Save $864/year
              </p>
              <p className="mt-4 text-[var(--color-stone-600)]">
                2 hours per month
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Everything in Tier 1
                </li>
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Unused hours roll over one month
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-stone-200)] h-[68px] flex items-center">
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-cyan)] text-white font-semibold px-6 py-3 text-base transition-colors hover:bg-[var(--color-cyan-dark)]"
                >
                  Get started
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="flex flex-col bg-white rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                Tier 3
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                  {isAnnual ? "$600" : "$750"}
                </span>
                <span className="text-[var(--color-stone-500)]">/month</span>
              </div>
              <p
                className={`mt-1 text-sm font-medium ${isAnnual ? "text-[var(--color-gold)]" : "invisible"}`}
              >
                Save $1,800/year
              </p>
              <p className="mt-4 text-[var(--color-stone-600)]">
                5 hours per month
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Everything in Tier 2
                </li>
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Priority booking
                </li>
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Monthly personalized Claude update summary
                </li>
                <li className="flex items-start gap-2 text-[var(--color-stone-600)]">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 text-[var(--color-cyan)] mt-1 shrink-0"
                  />
                  Free 30-min monthly exploration session
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-stone-200)] h-[68px] flex items-center">
                <a
                  href="https://calendly.com/jonathan-amwarr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-cyan)] font-semibold hover:text-[var(--color-cyan-dark)] transition-colors"
                >
                  Get started
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Rollover & billing note */}
          <div className="mt-30 max-w-3xl mx-auto bg-white rounded-xl p-6 border border-[var(--color-stone-200)]">
            <p className="text-sm text-[var(--color-stone-600)] leading-relaxed">
              <span className="font-semibold text-[var(--color-primary)]">
                Hour rollover policy:
              </span>{" "}
              Tier 2 and Tier 3 clients can roll unused hours into the
              following month. Rolled hours expire at the end of that month if
              not used. Current month hours are always consumed first.
            </p>
            <p className="mt-3 text-sm text-[var(--color-stone-500)]">
              {isAnnual
                ? "Annual commitments are billed upfront."
                : "Switch to annual billing to save 20%."}{" "}
              All prices in CAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Coaching ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="w-5 h-5 text-[var(--color-cyan)]"
                />
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">
                Coaching
              </h2>
            </div>
            <p className="text-lg text-[var(--color-stone-600)] leading-relaxed mb-10">
              Hands-on training for you or your team. One-on-one or small
              groups. Tailored to your business and your level of experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Hourly */}
              <div className="flex flex-col bg-[var(--color-cream)] rounded-2xl pt-10 px-10 pb-14 border border-[var(--color-stone-200)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                  Hourly
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                    $200
                  </span>
                  <span className="text-[var(--color-stone-500)]">/hour</span>
                </div>
                <p className="mt-1 text-sm invisible">
                  Placeholder
                </p>
                <p className="mt-6 text-[var(--color-stone-600)] leading-relaxed">
                  A single focused session. Great for tackling a specific
                  workflow or getting quick answers.
                </p>
              </div>

              {/* Half-Day */}
              <div className="relative flex flex-col bg-[var(--color-cream)] rounded-2xl pt-10 px-10 pb-14 border-2 border-[var(--color-gold)]">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-gold)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                  Half-Day
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                    $720
                  </span>
                  <span className="text-[var(--color-stone-500)]">/4 hours</span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-gold)] font-medium">
                  Save $80 vs. hourly
                </p>
                <p className="mt-6 text-[var(--color-stone-600)] leading-relaxed">
                  Enough time to audit a workflow, recommend tools, and start
                  building together.
                </p>
              </div>

              {/* Full-Day */}
              <div className="flex flex-col bg-[var(--color-cream)] rounded-2xl pt-10 px-10 pb-14 border border-[var(--color-stone-200)]">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)]">
                  Full-Day
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]">
                    $1,280
                  </span>
                  <span className="text-[var(--color-stone-500)]">/8 hours</span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-gold)] font-medium">
                  Save $320 vs. hourly
                </p>
                <p className="mt-6 text-[var(--color-stone-600)] leading-relaxed">
                  A full deep-dive. Ideal for teams who want to cover multiple
                  workflows in a single day.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-[var(--color-stone-500)]">
              All formats available for 1-on-1 and small groups. Packages of
              sessions can be quoted on request. All prices in CAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--color-primary)] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not sure which option fits?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation. We&apos;ll figure out what makes sense
            for your business together. No pressure.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/jonathan-amwarr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-cyan)] text-white font-semibold px-8 py-4 text-lg transition-colors hover:bg-[var(--color-cyan-dark)]"
            >
              Book Your Free Consultation
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[var(--color-primary)] border-t border-white/10 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
              AWC
            </span>
            <p className="mt-1 text-sm">Solutions that work.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/#services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <a
              href="mailto:jonathan@amwarr.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AWC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
