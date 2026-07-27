import Link from "next/link";
import { EnvelopeSimple, LinkedinLogo, X as XLogo } from "@phosphor-icons/react/dist/ssr";
import { pillars } from "@/lib/data";
import { ConvergenceLine } from "@/components/convergence-line";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Venues", href: "/venues" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-text-on-ink-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl text-text-on-ink">Confluence</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              A global MICE gateway connecting meeting planners with destinations, venues,
              and delivery partners built for meetings, incentives, conferences, and
              exhibitions.
            </p>
            <a
              href="mailto:proposals@confluence-mice.example"
              className="mt-6 inline-flex items-center gap-2 text-sm text-brass hover:text-brass-strong transition-colors"
            >
              <EnvelopeSimple size={16} weight="light" />
              proposals@confluence-mice.example
            </a>
          </div>

          <div>
            <p className="label text-text-on-ink-muted">Services</p>
            <ul className="mt-4 space-y-2.5">
              {pillars.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/services/${p.slug}`}
                    className="text-sm hover:text-text-on-ink transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-text-on-ink-muted">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-text-on-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-text-on-ink-muted">Destinations</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/destinations" className="text-sm hover:text-text-on-ink transition-colors">
                  All destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-text-on-ink transition-colors">
                  Request a proposal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex justify-center opacity-70">
          <ConvergenceLine variant="divider" className="h-8 w-56" />
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-6 border-t border-line-on-ink pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-text-on-ink-muted">
            © {new Date().getFullYear()} Confluence MICE Gateway. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Confluence on LinkedIn"
              className="hover:text-text-on-ink transition-colors"
            >
              <LinkedinLogo size={18} weight="light" />
            </a>
            <a
              href="#"
              aria-label="Confluence on X"
              className="hover:text-text-on-ink transition-colors"
            >
              <XLogo size={18} weight="light" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
