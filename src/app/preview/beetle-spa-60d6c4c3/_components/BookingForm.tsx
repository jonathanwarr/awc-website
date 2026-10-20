"use client";

/* Mockup only: the form renders but never submits. */
export function BookingForm({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}
