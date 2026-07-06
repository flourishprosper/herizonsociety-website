import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Herizon Society",
  description:
    "See the energy, confidence, and community at Herizon Society events. Photos from our events and experiences.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Gallery
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            See the{" "}
            <span className="text-[#FF7477]">Magic</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Photos and moments from Herizon events: the connections made, the
            confidence built, and the horizons expanded.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-[#FAF8F5] py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-16">
            <span className="text-6xl block mb-6">📸</span>
            <h2 className="font-serif text-3xl font-black text-[#1A1A1A] mb-4">
              Photos Coming Soon
            </h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8">
              We&rsquo;re building something beautiful here. In the meantime,
              follow us on Instagram for event photos and behind-the-scenes
              moments from the Herizon community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/herizonsociety"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
              >
                Follow on Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#E8E6E2] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:border-[#1A1A1A] transition-colors"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
