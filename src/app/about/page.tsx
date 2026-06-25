import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — HERizon Society",
  description:
    "Learn about HERizon Society's mission, our founder's story, and the three pillars that guide every program we run.",
};

const pillars = [
  {
    number: "01",
    title: "Mindset, Mental Health & Self Love",
    icon: "🧠",
    description:
      "This pillar is all about the inside work. We believe that changing how girls think is the key factor in their confidence.",
    concepts: [
      "I Am statements & affirmations",
      "Noticing & reframing negative thoughts",
      "Gratitude & empathy practices",
      "Finding support systems",
      "Board-breaking confidence exercise",
    ],
  },
  {
    number: "02",
    title: "Health & Fitness",
    icon: "💪",
    description:
      "Health and fitness are crucial to having a clear mind. Being active is a core part of high confidence — it's hard to feel good if you don't physically feel good.",
    concepts: [
      "Positive relationships with food",
      "Body image conversations",
      "Finding activities you love",
      "Movement as confidence fuel",
    ],
  },
  {
    number: "03",
    title: "Self Defence",
    icon: "🥋",
    description:
      "Self defence is one of the major ways we stand apart. As a martial-arts-based program, we believe every girl deserves training that teaches her strength and awareness.",
    concepts: [
      "Situational awareness",
      "Being prepared",
      "Physical defence fundamentals",
      "Courage through action",
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
            We Are the <span className="text-[#F7836D]">Change</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            We believe that making a change starts at home. To build a future
            alive with girl power, we need to inspire our young girls with the
            fiercest belief in themselves — today.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              It All Started from the Heart
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              From the Mat to a Movement
            </h2>
            <div className="space-y-5 text-[#2D2D2D] leading-relaxed">
              <p>
                Our founder has been teaching martial arts for almost two
                decades. Having struggled with low self-esteem and body image
                issues as a teen herself, martial arts became her source of
                strength. Becoming an instructor meant taking on the
                responsibility of mentoring and building confidence in students
                — especially young girls.
              </p>
              <p>
                The spark that became HERizon Society was ignited by the story
                of a fellow mom struggling to help her young daughter with her
                self-esteem. Her 8-year-old daughter was so low that she
                &ldquo;didn&rsquo;t want to live anymore.&rdquo; That moment
                demanded action — something bigger than the walls of a studio.
              </p>
              <p>
                Since then, HERizon Society has grown to host multiple
                conferences, workshops, mentorship programs, and community
                events — with a digital platform coming in 2026.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-10">
            <div className="font-serif text-7xl font-black text-[#F0EFEC] mb-4">
              &ldquo;
            </div>
            <blockquote className="font-serif text-2xl font-bold text-[#1A1A1A] leading-snug mb-6">
              A burning flame ignited in my heart. I knew I had to get bigger
              than the walls of the studio.
            </blockquote>
            <p className="text-[#9B9B9B] text-sm uppercase tracking-wider">
              — HERizon Society Founder
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-[#F7836D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: "500+", label: "Girls Empowered" },
              { val: "10+", label: "Conferences Hosted" },
              { val: "3+", label: "Cities Reached" },
              { val: "2026", label: "Digital App Launch" },
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
              The Three Pillars of HERizon
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              Every program we run is built on three foundational pillars — the
              formula that creates truly confident, resilient young women.
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
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                      i % 2 === 0 ? "text-[#F7836D]" : "text-[#F7836D]"
                    }`}
                  >
                    Key Concepts Taught
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
            Ready to Ignite Your <span className="text-[#F7836D]">HERizon</span>?
          </h2>
          <p className="text-[#9B9B9B] mb-8 leading-relaxed">
            Join us at an upcoming conference or workshop and give your daughter
            the tools to believe in herself — fiercely.
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
