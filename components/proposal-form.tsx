"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { tracks } from "@/lib/data";

type Errors = Partial<Record<"name" | "email" | "company" | "eventType" | "brief", string>>;

export function ProposalForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const eventType = String(form.get("eventType") || "");
    const brief = String(form.get("brief") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!email) nextErrors.email = "Enter a work email.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "That email address doesn't look complete.";
    if (!company) nextErrors.company = "Enter your company name.";
    if (!eventType) nextErrors.eventType = "Choose the track closest to your brief.";
    if (!brief) nextErrors.brief = "Add a line or two about the event.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 900);
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8">
        <CheckCircle size={32} weight="light" className="text-terracotta-strong" />
        <h2 className="font-display mt-4 text-2xl text-text-on-paper">
          Brief received.
        </h2>
        <p className="pretty mt-3 max-w-sm leading-relaxed text-text-muted">
          A delivery lead will reply within 48 hours with a structural blueprint
          matched to what you sent, not a generic brochure.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>
        <Field label="Work email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Company" name="company" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            className={inputClass(Boolean(errors.company))}
          />
        </Field>
        <Field label="Approximate headcount" name="delegates" helper="Optional, a range is fine.">
          <input id="delegates" name="delegates" type="text" placeholder="for example, 200 to 350" className={inputClass(false)} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Which track fits" name="eventType" error={errors.eventType}>
          <select
            id="eventType"
            name="eventType"
            defaultValue=""
            aria-invalid={Boolean(errors.eventType)}
            className={inputClass(Boolean(errors.eventType))}
          >
            <option value="" disabled>
              Choose one
            </option>
            {tracks.map((t) => (
              <option key={t.slug} value={t.region}>
                {t.region}, {t.program}
              </option>
            ))}
          </select>
        </Field>
        <Field label="City preference" name="destination" helper="Optional, leave blank for our recommendation.">
          <select id="destination" name="destination" defaultValue="" className={inputClass(false)}>
            <option value="">No preference yet</option>
            {tracks.map((t) => (
              <optgroup key={t.slug} label={t.region}>
                {t.cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about the event" name="brief" error={errors.brief} helper="Dates, budget band, and the primary objective.">
        <textarea
          id="brief"
          name="brief"
          rows={5}
          aria-invalid={Boolean(errors.brief)}
          className={inputClass(Boolean(errors.brief))}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-terracotta-strong active:scale-[0.97] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send brief"}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-paper px-4 py-3 text-base text-text-on-paper transition-colors duration-150",
    "placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-2 focus:ring-offset-paper",
    hasError ? "border-red-600" : "border-line",
  ].join(" ");
}

function Field({
  label,
  name,
  error,
  helper,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-text-on-paper">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="flex items-center gap-1.5 text-sm text-red-700">
          <WarningCircle size={14} weight="bold" />
          {error}
        </p>
      ) : helper ? (
        <p className="text-sm text-text-muted">{helper}</p>
      ) : null}
    </div>
  );
}
