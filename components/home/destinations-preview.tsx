import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { tracks } from "@/lib/data";
import { TrailLine } from "@/components/trail-line";
import { Reveal } from "@/components/reveal";
import { DragScroll } from "@/components/drag-scroll";
import { basePath } from "@/lib/base-path";

// Real photos exist for five of the fifteen cities; the rest fall back to a
// deterministic placeholder rather than borrowing a photo of a different,
// unrelated place.
const cityPhotos: Record<string, { src: string; alt: string }> = {
  Tawang: {
    src: `${basePath}/photos/tawang-monastery.jpg`,
    alt: "Tawang Monastery at dusk with the Arunachal Pradesh mountains behind it",
  },
  Shillong: {
    src: `${basePath}/photos/meghalaya-root-bridge.jpg`,
    alt: "A living root bridge in the Meghalaya hills near Shillong",
  },
  Bangkok: {
    src: `${basePath}/photos/bangkok-skyline.jpg`,
    alt: "The Bangkok skyline rising above Lumphini Park",
  },
  "Da Nang": {
    src: `${basePath}/photos/hoi-an-night.jpg`,
    alt: "Hoi An's lantern-lit riverfront, a short drive from Da Nang",
  },
  Bali: {
    src: `${basePath}/photos/tanah-lot-bali.jpg`,
    alt: "Tanah Lot sea temple on a rock arch off the coast of Bali",
  },
};

const cityEntries = tracks.flatMap((track) =>
  track.cities.map((city) => ({
    city,
    track: track.slug,
    region: track.region,
    imageSeed: `frontier-city-${city.toLowerCase().replace(/[^a-z]+/g, "-")}`,
    photo: cityPhotos[city],
  })),
);

export function DestinationsPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="font-display balance text-display-l text-text-on-ink">
              Fifteen cities, two tracks, one delivery team.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 text-sm font-medium text-terracotta"
            >
              View both tracks
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <DragScroll className="mt-12 -mx-6 md:-mx-10 pb-4">
          <div className="flex snap-x snap-mandatory gap-5 px-6 md:px-10">
            {cityEntries.map((entry, i) => (
              <Reveal key={entry.city} delay={i * 30} className="snap-start shrink-0">
                <Link
                  href={`/destinations#${entry.track}`}
                  draggable={false}
                  className="group block w-[220px] rounded-2xl border border-line-on-ink overflow-hidden bg-ink-2"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={entry.photo?.src ?? `https://picsum.photos/seed/${entry.imageSeed}/500/440`}
                      alt={entry.photo?.alt ?? ""}
                      fill
                      draggable={false}
                      sizes="220px"
                      className="group-hover-zoom object-cover transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-5">
                    <p className="label text-text-on-ink-muted">{entry.region}</p>
                    <h3 className="font-display mt-1 text-lg text-text-on-ink">
                      {entry.city}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={cityEntries.length * 30} className="snap-start shrink-0">
              <Link
                href="/destinations"
                className="group flex h-full w-[220px] flex-col items-start justify-center gap-3 rounded-2xl border border-line-on-ink bg-ink-2 p-5"
              >
                <TrailLine variant="data" className="h-6 w-10" />
                <span className="text-sm font-medium text-text-on-ink">
                  See the full breakdown by track
                </span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="text-terracotta transition-transform duration-150 ease-out group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </DragScroll>
      </div>
    </section>
  );
}
