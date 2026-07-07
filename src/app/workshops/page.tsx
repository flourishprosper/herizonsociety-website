import Link from "next/link";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

const pageTitle = "How It Works";
const pageDescription =
  "Discover how Herizon works, from Signature Experiences and community gatherings to mentorship, leadership development, real-world experiences, and a lifelong network for girls ages 12 to 18.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/workshops",
});

const steps = [
  {
    num: "Step One",
    emoji: "🌸",
    title: "Discover",
    lines: ["Attend Bloom.", "Meet girls.", "Meet mentors.", "Find community."],
  },
  {
    num: "Step Two",
    emoji: "🤝",
    title: "Connect",
    lines: ["Attend Community Gatherings.", "Build friendships.", "Meet inspiring women."],
  },
  {
    num: "Step Three",
    emoji: "🌱",
    title: "Grow",
    lines: ["Leadership.", "Entrepreneurship.", "Life skills.", "Career exploration.", "Volunteer projects."],
  },
  {
    num: "Step Four",
    emoji: "⭐",
    title: "Lead",
    lines: ["Become a role model.", "Give back.", "Volunteer.", "Mentor younger girls.", "Lead with confidence."],
  },
];

const pillars = [
  { emoji: "💗", label: "Confidence" },
  { emoji: "🤝", label: "Community" },
  { emoji: "🌎", label: "Opportunity" },
  { emoji: "🎤", label: "Leadership" },
  { emoji: "✨", label: "Creativity" },
  { emoji: "🌸", label: "Mentorship" },
];

export default function WorkshopsPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          createWebPageSchema({
            title: `${pageTitle} | Herizon Society`,
            description: pageDescription,
            path: "/workshops",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "How It Works", path: "/workshops" },
          ]),
        ]}
      />
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
            Herizon is more than a single event. It&rsquo;s a journey of
            confidence, connection, and growth. Through signature experiences,
            ongoing community gatherings, mentorship, and real-world
            opportunities, girls discover who they are, what they&rsquo;re
            capable of, and the confidence to pursue whatever comes next.
          </p>
        </div>
      </section>

      {/* The Journey Intro */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            The Herizon Journey
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-8">
            Every Girl&rsquo;s Journey Looks Different.
          </h2>
          <div className="space-y-3 text-[#9B9B9B] text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            <p>No two girls join Herizon for the same reason.</p>
            <p>Some come looking for confidence.</p>
            <p>Some come looking for friendship.</p>
            <p>Some come looking for direction.</p>
            <p>Some simply need someone who believes in them.</p>
          </div>
          <p className="text-[#1A1A1A] font-semibold text-lg max-w-2xl mx-auto">
            Wherever she begins, Herizon meets her there.
          </p>
        </div>
      </section>

      {/* The 4 Steps */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.num}>
                <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E6E2] p-8 sm:p-10 card-hover">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-14 h-14 bg-[#FF7477]/10 rounded-full flex items-center justify-center text-3xl">
                      {step.emoji}
                    </div>
                    <div>
                      <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-1">
                        {step.num}
                      </p>
                      <h3 className="font-serif text-3xl font-black text-[#1A1A1A] mb-5">
                        {step.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {step.lines.map((line) => (
                          <span
                            key={line}
                            className="bg-white border border-[#E8E6E2] text-[#2D2D2D] text-sm font-medium px-4 py-1.5 rounded-full"
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <span className="text-[#FF7477] text-2xl">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Throughout the Journey */}
      <section className="bg-[#FF7477] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            Throughout the Journey
          </p>
          <h2 className="font-serif text-4xl font-black text-white mb-4">
            Every girl experiences:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="bg-white/15 border border-white/20 rounded-2xl py-8 px-4 text-white text-center"
              >
                <span className="text-4xl block mb-3">{p.emoji}</span>
                <p className="font-serif text-xl font-black">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight mb-8">
            Growth Doesn&rsquo;t Happen Overnight.
          </h2>
          <div className="space-y-4 text-[#9B9B9B] text-lg leading-relaxed mb-10">
            <p>
              Confidence is built one conversation, one experience, one
              friendship, and one opportunity at a time.
            </p>
            <p className="text-white/80">
              That&rsquo;s why Herizon isn&rsquo;t just a place girls visit.
            </p>
            <p className="font-serif text-2xl font-black text-[#FF7477]">
              It&rsquo;s a community they grow with.
            </p>
          </div>
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
