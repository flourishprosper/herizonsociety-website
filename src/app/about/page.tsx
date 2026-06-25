import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — HERizon Society",
  description:
    "HERizon Society is a community for girls ages 12–18 built on confidence, leadership, and connection. Learn about our mission and the pillars that guide everything we do.",
};

const pillars = [
  {
    number: "01",
    title: "Confidence",
    icon: "🧠",
    description:
      "Real confidence isn't handed to you — it's built through the right experiences, the right language, and the right community around you. We give girls the tools to believe in themselves deeply and unapologetically.",
    concepts: [
      "I Am statements & personal affirmations",
      "Recognizing & reframing self-doubt",
      "Emotional intelligence & self-awareness",
      "Breaking through limiting beliefs",
      "The courage to be seen",
    ],
  },
  {
    number: "02",
    title: "Leadership",
    icon: "🏆",
    description:
      "Leadership isn't a title you're given — it's a way of showing up. We help girls ages 12–18 find their voice, own their impact, and step into any room ready to lead with clarity and intention.",
    concepts: [
      "Public speaking & using your voice",
      "Goal-setting & personal accountability",
      "Real-world project experience",
      "Decision-making under pressure",
      "Leading with integrity",
    ],
  },
  {
    number: "03",
    title: "Connection",
    icon: "🤝",
    description:
      "The people around you shape what you believe is possible. HERizon surrounds girls with mentors who've walked ahead of them and peers who lift them higher — relationships that last long after the event ends.",
    concepts: [
      "Mentorship from women leaders",
      "Peer community & sisterhood",
      "Meaningful real-world networking",
      "Vulnerability and trust",
      "Relationships built on shared values",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F7836D] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            We Expand What&rsquo;s{" "}
            <span className="text-[#F7836D]">Possible</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            HERizon Society is a community for girls ages 12–18 designed to
            build confidence, inspire leadership, and expand what&rsquo;s
            possible through mentorship, real-world experiences, and meaningful
            connections.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Why We Exist
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              The Years That Shape Everything
            </h2>
            <div className="space-y-5 text-[#2D2D2D] leading-relaxed">
              <p>
                The beliefs a girl forms between 12 and 18 — about herself, her
                potential, and what she deserves — follow her for the rest of
                her life. HERizon Society was built to make sure those beliefs
                are strong, expansive, and rooted in truth.
              </p>
              <p>
                We created a space where teenage girls aren&rsquo;t just
                talked <em>at</em> — they&rsquo;re mentored, challenged,
                celebrated, and connected to women who have already walked the
                path ahead of them.
              </p>
              <p>
                Through conferences, workshops, and a living community,
                HERizon gives girls the experiences they need to step into their
                own leadership — at 14, at 18, and at every age after.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-10">
            <div className="font-serif text-7xl font-black text-[#F0EFEC] mb-4">
              &ldquo;
            </div>
            <blockquote className="font-serif text-2xl font-bold text-[#1A1A1A] leading-snug mb-6">
              When girls know who they are and what they&rsquo;re capable of,
              they change everything.
            </blockquote>
            <p className="text-[#9B9B9B] text-sm uppercase tracking-wider">
              — HERizon Society
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-[#F7836D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "500+", label: "Girls in Community" },
              { val: "10+", label: "Events Hosted" },
              { val: "12–18", label: "Ages We Serve" },
              { val: "2026", label: "Digital Platform Launch" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-5xl font-black mb-2">{s.val}</div>
                <div className="text-white/70 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Foundation
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              Three Pillars. One Community.
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              Every experience at HERizon is built on three pillars — the
              formula that creates truly confident, connected young leaders.
            </p>
          </div>
          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className={`rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-[#1A1A1A] text-white"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{pillar.icon}</span>
                    <span
                      className={`font-serif text-5xl font-black ${
                        i % 2 === 0 ? "text-[#F0EFEC]" : "text-white/20"
                      }`}
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <h3
                    className={`font-serif text-3xl font-bold mb-4 ${
                      i % 2 === 0 ? "text-[#1A1A1A]" : "text-white"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      i % 2 === 0 ? "text-[#2D2D2D]" : "text-[#9B9B9B]"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
                <div>
                  <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
                    What Girls Experience
                  </p>
                  <ul className="space-y-3">
                    {pillar.concepts.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="text-[#F7836D] mt-0.5">✦</span>
                        <span
                          className={`text-sm ${
                            i % 2 === 0 ? "text-[#2D2D2D]" : "text-[#9B9B9B]"
                          }`}
                        >
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF8F5] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-[#1A1A1A] mb-6">
            Ready to Expand Her{" "}
            <span className="text-[#F7836D]">HERizon</span>?
          </h2>
          <p className="text-[#9B9B9B] mb-8 leading-relaxed">
            Join us at an upcoming event and give the girl in your life access
            to the community, mentorship, and experiences that will shape who
            she becomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-[#F7836D] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E5614A] transition-colors"
            >
              Find an Event
            </Link>
            <Link
              href="/contact"
              className="border border-[#E8E6E2] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:border-[#1A1A1A] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
