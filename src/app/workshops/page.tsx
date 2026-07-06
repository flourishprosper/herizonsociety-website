import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Herizon Society",
  description:
    "Discover how Herizon works. From Signature Experiences and community gatherings to mentorship, leadership development, real-world experiences, and a lifelong network for girls ages 12 to 18.",
};

const tiers = [
  {
    num: "01",
    emoji: "🌸",
    title: "Signature Experiences",
    subtitle: "Large quarterly experiences",
    lines: ["Bloom.", "Find Your Voice.", "Lead Forward."],
    desc: "Our biggest moments together. Full-day experiences designed to inspire, challenge, and bring the whole community into one room.",
    bg: "bg-white",
    accent: "text-[#FF7477]",
  },
  {
    num: "02",
    emoji: "🤝",
    title: "Community Gatherings",
    subtitle: "Monthly or bi-weekly meetups",
    lines: [],
    desc: "Smaller, more personal gatherings where girls connect with peers and mentors, grow together, and build the kind of friendships that actually last.",
    bg: "bg-[#FAF8F5]",
    accent: "text-[#FF7477]",
  },
  {
    num: "03",
    emoji: "👩‍🏫",
    title: "Mentorship",
    subtitle: "Relationships with inspiring women",
    lines: [],
    desc: "Honest conversations with women who have been there. Women who encourage, challenge, and remind every girl that she is more capable than she knows.",
    bg: "bg-white",
    accent: "text-[#FF7477]",
  },
  {
    num: "04",
    emoji: "🎤",
    title: "Leadership Development",
    subtitle: "Skills that last a lifetime",
    lines: ["Public speaking.", "Goal setting.", "Communication.", "Confidence."],
    desc: "Every gathering is a chance to practice the skills that matter most. Showing up, speaking up, setting goals, and believing in yourself enough to follow through.",
    bg: "bg-[#FAF8F5]",
    accent: "text-[#FF7477]",
  },
  {
    num: "05",
    emoji: "🌍",
    title: "Real-World Experiences",
    subtitle: "Beyond the room",
    lines: ["Business visits.", "Volunteer projects.", "Guest speakers.", "Career exploration."],
    desc: "Herizon opens doors. Girls get access to real-world experiences that expand their worldview and help them see what's out there waiting for them.",
    bg: "bg-white",
    accent: "text-[#FF7477]",
  },
  {
    num: "06",
    emoji: "⭐",
    title: "Lifelong Community",
    subtitle: "Once Herizon, always Herizon",
    lines: ["Friendships.", "Support.", "Network."],
    desc: "The friendships and connections girls make at Herizon don't end when the gathering does. They carry them forward, for life."
    bg: "bg-[#FAF8F5]",
    accent: "text-[#FF7477]",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FF7477] py-32 relative overflow-hidden text-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            How Girls Grow
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            How Herizon Works
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Herizon isn&rsquo;t a one-time event. It&rsquo;s a journey built
            on meaningful experiences, consistent community, and real
            relationships that help girls discover who they are and what
            they&rsquo;re capable of.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              The Herizon Journey
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              A Community Built to Last
            </h2>
            <p className="text-[#9B9B9B] text-lg leading-relaxed max-w-2xl mx-auto">
              Every layer of Herizon is designed to help girls grow. In
              confidence. In connection. And in their understanding of what
              they&rsquo;re truly capable of.
            </p>
          </div>

          <div className="space-y-4">
            {tiers.map((tier, i) => (
              <div key={tier.num}>
                <div className="bg-white rounded-3xl border border-[#E8E6E2] p-8 sm:p-10 card-hover">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-14 h-14 bg-[#FF7477]/10 rounded-full flex items-center justify-center text-3xl">
                      {tier.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-1">
                        {tier.num}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] mb-1">
                        {tier.title}
                      </h3>
                      <p className="text-[#9B9B9B] text-sm font-medium mb-4">
                        {tier.subtitle}
                      </p>
                      {tier.lines.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tier.lines.map((line) => (
                            <span
                              key={line}
                              className="bg-[#FF7477]/10 text-[#FF7477] text-sm font-semibold px-4 py-1.5 rounded-full"
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-[#9B9B9B] text-base leading-relaxed">
                        {tier.desc}
                      </p>
                    </div>
                  </div>
                </div>
                {i < tiers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <span className="text-[#FF7477] text-2xl">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Be Part of It
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-[#9B9B9B] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Every girl deserves a place where she feels seen, supported, and
            inspired to grow. That&rsquo;s what Herizon is built for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-[#FF7477] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Join Now
            </Link>
            <Link
              href="/events"
              className="border border-white/30 text-white font-semibold px-10 py-4 rounded-full hover:border-white/60 transition-colors"
            >
              View Signature Experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
