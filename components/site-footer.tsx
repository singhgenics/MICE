import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";
import { tracks, contact } from "@/lib/data";
import { TrailLine } from "@/components/trail-line";
import { basePath } from "@/lib/base-path";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-text-on-ink-muted">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src={`${basePath}/brand/logo-white.png`}
              alt="Frontier Tourism"
              width={359}
              height={234}
              className="h-12 w-auto"
            />
            <p className="on-ink-copy mt-4 max-w-sm">
              The dedicated MICE division of The Traveller Co., run separately from
              leisure travel. Two retreat programs, Northeast India and Southeast
              Asia, built for corporate offsites and incentive trips.
            </p>
            <a
              href={`mailto:${contact.emailPrimary}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-terracotta hover:text-terracotta-strong transition-colors"
            >
              <EnvelopeSimple size={16} weight="light" />
              {contact.emailPrimary}
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              className="mt-2 flex items-center gap-2 text-sm text-terracotta hover:text-terracotta-strong transition-colors"
            >
              <Phone size={16} weight="light" />
              {contact.phone}
            </a>
          </div>

          <div>
            <p className="label text-text-on-ink-muted">Programs</p>
            <ul className="mt-4 space-y-2.5">
              {tracks.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/programs/${t.slug}`}
                    className="text-sm hover:text-text-on-ink transition-colors"
                  >
                    {t.region}
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
                  Both tracks
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
          <TrailLine variant="divider" className="h-8 w-56" />
        </div>

        <div className="mt-10 border-t border-line-on-ink pt-8 text-center md:text-left">
          <p className="text-xs text-text-on-ink-muted">
            © {new Date().getFullYear()} Frontier Tourism, a division of The Traveller Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
