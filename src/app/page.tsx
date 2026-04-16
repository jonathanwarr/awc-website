"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faBars,

  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faGraduationCap,
  faLockOpen,
  faQuoteLeft,
  faWrench,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

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
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[var(--color-cyan)] text-white flex items-center justify-center shadow-lg transition-all cursor-pointer hover:bg-[var(--color-cyan-dark)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4" />
    </button>
  );
}

/* ─── Navigation ─── */

const navLinks = [
  { label: "Our Approach", id: "approach" },
  { label: "Services", id: "services" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNav(id: string) {
    setMobileOpen(false);
    smoothScrollTo(id);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-stone-200)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-primary)]"
        >
          AWC
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-stone-600)]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => smoothScrollTo(link.id)}
              className="hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/pricing"
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            Pricing
          </Link>
          <button
            onClick={() => smoothScrollTo("faq")}
            className="hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/jonathan-amwarr/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-cyan)] text-white font-semibold px-5 py-2.5 text-sm transition-colors hover:bg-[var(--color-cyan-dark)]"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--color-primary)] cursor-pointer"
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
        <div className="md:hidden border-t border-[var(--color-stone-200)] bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="block w-full text-left text-base font-medium text-[var(--color-stone-600)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[var(--color-stone-600)] hover:text-[var(--color-primary)] transition-colors"
          >
            Pricing
          </Link>
          <button
            onClick={() => handleNav("faq")}
            className="block w-full text-left text-base font-medium text-[var(--color-stone-600)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─── Reusable Components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[var(--color-cyan)] mb-3">
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
      className={`inline-flex items-center gap-2 rounded-lg bg-[var(--color-cyan)] text-white font-semibold transition-colors hover:bg-[var(--color-cyan-dark)] ${large ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"}`}
    >
      {children}
      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
    </a>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-stone-200)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold font-[family-name:var(--font-heading)] text-[var(--color-primary)] hover:text-[var(--color-cyan)] transition-colors cursor-pointer"
      >
        {question}
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="w-4 h-4 ml-4 shrink-0"
        />
      </button>
      {open && (
        <p className="pb-5 text-[var(--color-stone-600)] leading-relaxed">
          {answer}
        </p>
      )}
    </div>
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

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="w-10 h-10 text-[var(--color-gold)]/40 mb-6"
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
            <blockquote className="text-xl md:text-2xl leading-relaxed text-[var(--color-primary)] font-[family-name:var(--font-heading)] italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-[var(--color-primary)]">
                {t.name}
              </p>
              <p className="text-sm text-[var(--color-stone-500)]">{t.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-[var(--color-stone-300)] flex items-center justify-center text-[var(--color-stone-500)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                i === current
                  ? "bg-[var(--color-cyan)]"
                  : "bg-[var(--color-stone-300)] hover:bg-[var(--color-stone-400)]"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-[var(--color-stone-300)] flex items-center justify-center text-[var(--color-stone-500)] hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] transition-colors cursor-pointer"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
        </button>
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
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-52 grid md:grid-cols-[3fr_2fr] gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              You probably didn&apos;t start a business to do admin until
              midnight.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              We build custom AI solutions around how you actually work,
              so the busywork stops following you home.
              <br></br>
              <br></br>
              More time for clients, growth, and life.
            </p>
            <div className="mt-10">
              <PrimaryButton large>Let&apos;s Talk</PrimaryButton>
            </div>
          </div>
          <div className="hidden md:flex items-start justify-center md:-mt-2">
            <Image
              src="/hero-image.svg"
              alt="AWC — AI solutions for your business"
              width={640}
              height={480}
              className="rounded-2xl max-w-[380px] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section id="problem" className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>The Reality</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
              The busywork is winning
            </h2>
            <p className="mt-6 text-lg text-[var(--color-stone-600)] leading-relaxed">
              Somewhere between the last appointment and the end of your day,
              the busywork starts. Follow-ups. Scheduling. Documentation. Inbox.
              Coordination. All of the work that doesn&apos;t require your
              expertise but still manages to require all of your time.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-gold)]">
                67%
              </div>
              <div className="mt-3 text-[var(--color-stone-600)] leading-relaxed">
                The percentage of small business owners who work longer hours
                since starting their business
              </div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-gold)]">
                $90K
              </div>
              <div className="mt-3 text-[var(--color-stone-600)] leading-relaxed">
                The estimated annual revenue lost when 12 hours a week go into
                admin over growth
              </div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-gold)]">
                21hrs
              </div>
              <div className="mt-3 text-[var(--color-stone-600)] leading-relaxed">
                The average amount oftime small business owners spend on admin tasks alone each
                week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section id="approach" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
                We don&apos;t sell you a playbook and leave.
              </h2>
            </div>
            <div className="mt-10 space-y-6 text-[var(--color-stone-600)] leading-relaxed text-lg">
              <p>
                Our approach starts by learning how your business runs.
                We want to understand:
              </p>
              <ul className="space-y-3 pl-1">
                {[
                  "Where does your time go?",
                  "What drains your energy?",
                  "What keeps you at the desk when you should already be home?",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="w-4 h-4 text-[var(--color-cyan)] mt-1.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We map the real problems so we can design real solutions. Not a
                template. Not a one-size-fits-all setup. Something designed for
                the way you already work, so it fits into your day instead of
                adding to it.
              </p>
              <p>
                We build solutions exclusively on Claude by Anthropic, the most
                capable AI for real business work. Our specialization in 
                one platform is by design, it allows us to know exactly what it can do, how to
                push it, and how to make it fit your operation.
              </p>
              <p>
                Both your business and AI change over time. We stick around to keep your
                systems running, evolving, and working as hard as you do.
              </p>
            </div>
            <div className="mt-10 bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <p className="text-lg font-semibold text-[var(--color-primary)] leading-relaxed">
                <span className="text-[var(--color-gold)]">
                  The short version:
                </span>{" "}
                We learn how you work. We build solutions that take work off
                your plate. We keep those solutions sharp over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        className="bg-[var(--color-primary)] text-white py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold">
              Three ways to work with us.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {/* Building */}
            <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--color-cyan)]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/20 flex items-center justify-center mb-5">
                <FontAwesomeIcon
                  icon={faWrench}
                  className="w-5 h-5 text-[var(--color-cyan)]"
                />
              </div>
              <h3 className="text-2xl font-bold">Building</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                This is where it starts for most clients. We sit down with you,
                figure out where you are losing time, and build a custom AI
                system to handle it. You walk away with a working system and the
                confidence to use it.
              </p>
              <p className="mt-auto pt-10 text-sm font-semibold text-[var(--color-teal-light)]">
                Best for: Business owners who need to find ways to get real time
                back.
              </p>
            </div>

            {/* Retainer */}
            <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--color-cyan)]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/20 flex items-center justify-center mb-5">
                <FontAwesomeIcon
                  icon={faLockOpen}
                  className="w-5 h-5 text-[var(--color-cyan)]"
                />
              </div>
              <h3 className="text-2xl font-bold">Retainer</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Your business does not stand still. Neither should your AI
                systems. The retainer keeps us in your corner month to month,
                maintaining what we built, updating it as new capabilities come
                out, and expanding it as your needs grow.
              </p>
              <p className="mt-auto pt-10 text-sm font-semibold text-[var(--color-teal-light)]">
                Best for: Clients who want their systems to keep getting better
                without managing it.
              </p>
            </div>

            {/* Coaching */}
            <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--color-cyan)]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan)]/20 flex items-center justify-center mb-5">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="w-5 h-5 text-[var(--color-cyan)]"
                />
              </div>
              <h3 className="text-2xl font-bold">Coaching</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Practical, hands-on training so you and your team can use
                Claude with confidence every day. One-on-one or small groups.
                Tailored to your business, your workflows, and your level of
                experience. You just need to show up ready to learn.
              </p>
              <p className="mt-auto pt-10 text-sm font-semibold text-[var(--color-teal-light)]">
                Best for: Owners who want to build their own skills, or get
                their small team up to speed.
              </p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-cyan)] text-white font-semibold px-8 py-4 text-base transition-colors hover:bg-[var(--color-cyan-dark)]"
            >
              Pricing Schedule
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
              Don&apos;t take our word for it
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel>Why Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
              700+ implementations. Zero guesswork.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-stone-600)] leading-relaxed">
              With AWC you get two partners who bring very different skill sets
              together under a shared idea: start with process. We work
              exclusively with Claude by Anthropic for it&apos;s ease of use, superior capabilities and focus on professional services. That
              specialization, paired with our focus on your workflow, is the
              difference between something you try and something you use.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <div className="mb-6 w-36 h-36 rounded-2xl overflow-hidden">
                <Image
                  src="/jon-awc.svg"
                  alt="Jonathan Warr — Headshot"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)]">
                Jonathan
              </h3>
              <p className="text-sm text-[var(--color-stone-400)]">Partner, Strategy &amp; Operations</p>
              <p className="mt-3 text-[var(--color-stone-600)] leading-relaxed">
                Brings 12 years in technology as animplementation expert. He has
                spent his career designing and implementing seamless operational solutions for clients. He is the reason
                your solution will be built right, work right, and keep working as you grow.
              </p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-stone-200)]">
              <div className="mb-6 w-36 h-36 rounded-2xl overflow-hidden">
                <Image
                  src="/negar-awc.svg"
                  alt="Negar Amiri — Headshot"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)]">
                Negar
              </h3>
              <p className="text-sm text-[var(--color-stone-400)]">Partner, Product &amp; Technology</p>
              <p className="mt-3 text-[var(--color-stone-600)] leading-relaxed">
                Brings 10 years in technology as a product manager. She has
                spent her career figuring out what customers actually need and
                translating that into solutions that deliver. She is the reason
                your solution will solve the right problem, not just a problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[var(--color-cream)] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
              Questions we hear a lot.
            </h2>
          </div>
          <div className="mt-12">
            <FAQItem
              question="I don't have time to learn a whole new system."
              answer="You do not have to. We design and build the solution, then teach you how to use it. And because it is designed around your existing workflow, the learning curve is softened."
            />
            <FAQItem
              question="I've tried AI tools before and they didn't stick."
              answer="Generic tools are not built for your business. What we build is custom to your workflows, your language, and the way you actually operate. This is the key to adoption and success."
            />
            <FAQItem
              question="Is this safe to use with client information?"
              answer="We take this seriously. We will walk you through exactly how your data is handled and make sure your setup meets the standards your business requires."
            />
            <FAQItem
              question="I'm not technical. Will this work for me?"
              answer="That is literally why we exist. You do not need to be technical. You just need to be willing to show us how your business works. We handle the rest."
            />
            <FAQItem
              question="Why do you only use Claude?"
              answer="Because specialization beats generalization. Claude by Anthropic is the strongest AI for the kind of work our clients need — understanding complex instructions, working with real business context, and handling nuance. By going deep on one platform instead of spreading thin across many, we build better solutions and solve problems faster."
            />
            <FAQItem
              question="What happens if something breaks or I need help?"
              answer="That is what the retainer is for. But even outside of a retainer, we do not build something and disappear. We are a message away."
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section id="contact" className="bg-[var(--color-primary)] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to get your evenings back?
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Book a free consultation. We will talk about where your time is
            going, what is realistic to fix, and whether we are the right fit.
          </p>
          <div className="mt-10">
            <a
              href="https://calendly.com/jonathan-amwarr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] text-white font-semibold px-8 py-4 text-lg transition-colors hover:bg-[var(--color-gold-dark)]"
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
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
              AWC
            </span>
            <p className="mt-1 text-sm">Solutions that work.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => smoothScrollTo("services")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <button
              onClick={() => smoothScrollTo("faq")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
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

      <ScrollToTop />
    </div>
  );
}
