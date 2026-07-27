import Link from "next/link";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
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
            <p className="font-display text-3xl tracking-tight text-text-on-ink">Confluence</p>
            <p className="on-ink-copy mt-4 max-w-sm">
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

        <div className="mt-10 border-t border-line-on-ink pt-8 text-center md:text-left">
          <p className="text-xs text-text-on-ink-muted">
            © {new Date().getFullYear()} Confluence MICE Gateway. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
