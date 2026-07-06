import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply | Herizon Society",
  description:
    "Apply to attend a Herizon Society event. For girls ages 12–18 ready to expand their horizons, build confidence, and discover what's possible.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Apply
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Your Future{" "}
            <span className="text-[#FF7477]">Starts Here</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to expand your horizons? Apply to attend an upcoming Herizon
            event and take the first step toward building the confidence,
            connections, and opportunities that will shape your future.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              What You&rsquo;ll Get
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              Every Event Delivers
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              This is more than an event. Every Herizon experience is
              designed around four outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤝",
                title: "A New Connection",
                desc: "Meet mentors and peers who inspire and challenge you.",
              },
              {
                icon: "💡",
                title: "A New Perspective",
                desc: "See your future with fresh eyes and new possibilities.",
              },
              {
                icon: "🚪",
                title: "A New Opportunity",
                desc: "Discover paths you never imagined for yourself.",
              },
              {
                icon: "✨",
                title: "Greater Confidence",
                desc: "Leave believing your future is bigger than you thought.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center border border-[#E8E6E2]"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Who It&rsquo;s For
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
              Girls Ages 12–18 Who Are Ready
            </h2>
            <div className="space-y-4 text-[#2D2D2D] leading-relaxed">
              <p>
                Herizon is for girls who feel like there&rsquo;s more out
                there for them, even if they&rsquo;re not sure what it looks
                like yet.
              </p>
              <p>
                You don&rsquo;t need to have it all figured out. You just need
                to show up open, curious, and ready to grow.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Girls ages 12–18",
                "Parents, guardians, and educators are welcome to attend",
                "No experience or background required, just a willingness to grow",
                "All backgrounds, all goals, all dreams welcome",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#2D2D2D]">
                  <span className="text-[#FF7477] mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#FAF8F5] rounded-3xl border border-[#E8E6E2] p-10 text-center">
            <span className="text-6xl block mb-6">📋</span>
            <h3 className="font-serif text-3xl font-black text-[#1A1A1A] mb-4">
              Applications Opening Soon
            </h3>
            <p className="text-[#9B9B9B] leading-relaxed mb-8">
              We&rsquo;re preparing for our upcoming events. Drop your info and
              we&rsquo;ll notify you the moment applications open.
            </p>
            <a
              href="mailto:hello@herizonsociety.com"
              className="inline-block bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Get Notified
            </a>
            <p className="text-[#9B9B9B] text-sm mt-4">
              or email{" "}
              <a
                href="mailto:hello@herizonsociety.com"
                className="text-[#FF7477] hover:underline"
              >
                hello@herizonsociety.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Events CTA */}
      <section className="bg-[#FF7477] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-black text-white mb-4">
            See Upcoming Events
          </h2>
          <p className="text-white/80 mb-8">
            Find an event near you and mark your calendar.
          </p>
          <Link
            href="/events"
            className="inline-block bg-white text-[#FF7477] font-semibold px-8 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
          >
            View All Events
          </Link>
        </div>
      </section>
    </>
  );
}
