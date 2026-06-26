import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Herizon Society",
  description:
    "Learn who we are, why we started Herizon, and the mission and values that guide everything we do.",
};

const coreValues = [
  {
    number: "01",
    title: "Confidence",
    icon: "💡",
    description:
      "Real confidence isn't handed to you. It's built through the right experiences, the right language, and the right community.",
  },
  {
    number: "02",
    title: "Courage",
    icon: "🦁",
    description:
      "Growth lives just beyond the edge of comfortable. We help girls step outside their comfort zones and discover what they're truly capable of.",
  },
  {
    number: "03",
    title: "Community",
    icon: "🤝",
    description:
      "The people around you shape what you believe is possible. We create lifelong friendships and meaningful connections that go beyond every event.",
  },
  {
    number: "04",
    title: "Leadership",
    icon: "🏆",
    description:
      "Leadership isn't a title. It's a way of showing up. We help girls find their voice and step into any room ready to lead.",
  },
  {
    number: "05",
    title: "Opportunity",
    icon: "🌟",
    description:
      "We open doors girls didn't even know existed, from careers and entrepreneurship to experiences that expand their vision of what's possible.",
  },
  {
    number: "06",
    title: "Kindness",
    icon: "💛",
    description:
      "We build a community where every girl feels celebrated, seen, and safe. Lifting each other up is how we all rise together.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FF7477] opacity-5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-6">
            About Herizon
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
            Helping Girls Discover<br />
            <span className="text-[#FF7477]">What&rsquo;s Possible</span>
          </h1>
          <p className="text-[#FF7477]/80 text-sm font-semibold uppercase tracking-widest mb-8">
            Expanding Horizons. Building Confidence.
          </p>
          <div className="space-y-4 text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            <p>
              Growing up doesn&rsquo;t come with a roadmap, and no girl should
              have to figure it all out alone.
            </p>
            <p>
              Herizon is a community where girls ages 12&ndash;18 build
              confidence, discover their strengths, connect with inspiring
              mentors, and gain meaningful experiences that help them see
              what&rsquo;s possible for their future.
            </p>
            <p className="text-white font-medium">
              We&rsquo;re here to help every girl believe in herself, find her
              voice, and step boldly into whatever comes next.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT / STORY ────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              About Herizon
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-4">
              Helping Girls Discover What&rsquo;s Possible
            </h2>
            <p className="text-[#FF7477] text-sm font-semibold uppercase tracking-widest">
              Expanding Horizons. Building Confidence.
            </p>
          </div>
          <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-lg">
            <p>
              Growing up doesn&rsquo;t come with a roadmap, and no girl should
              have to figure it all out alone.
            </p>
            <p>
              Herizon was created to help girls discover their strengths, build
              confidence, and realize there&rsquo;s no limit to what they&rsquo;re
              capable of. Through mentorship, leadership, real-world experiences,
              and a supportive community, we give girls the encouragement and
              opportunities to dream bigger, believe in themselves, and step
              confidently into their future.
            </p>
            <p className="font-semibold text-[#1A1A1A] text-xl text-center pt-4">
              For girls ages 12&ndash;18.
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ─────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-8">
              Expanding Horizons.<br />Building Confidence.
            </h2>
            <div className="space-y-5 text-[#4A4A4A] leading-relaxed text-lg">
              <p>
                Herizon empowers girls ages 12&ndash;18 to discover their
                strengths, build confidence, and pursue a future without limits.
              </p>
              <p>
                Through mentorship, leadership, entrepreneurship, education, and
                meaningful community experiences, we help girls develop the
                skills, relationships, and self-belief they need to navigate
                life with confidence and purpose.
              </p>
              <p>
                We believe confidence isn&rsquo;t something girls are born with.
                It&rsquo;s something they build through encouragement,
                opportunity, and experience. Our mission is to make sure every
                girl who joins Herizon leaves{" "}
                <strong className="text-[#1A1A1A]">
                  believing in herself a little more than she did before.
                </strong>
              </p>
            </div>
          </div>

          {/* Quote Card */}
          <div className="bg-[#1A1A1A] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#FF7477] opacity-10 blur-2xl" />
            <div className="font-serif text-8xl font-black text-[#FF7477] opacity-30 leading-none mb-4">
              &ldquo;
            </div>
            <blockquote className="font-serif text-2xl font-bold text-white leading-snug mb-8">
              When girls know who they are and what they&rsquo;re capable of,
              they change everything.
            </blockquote>
            <p className="text-[#9B9B9B] text-xs font-semibold uppercase tracking-widest">
              Herizon Society
            </p>
          </div>
        </div>
      </section>

      {/* ── OUR VISION ──────────────────────────────────── */}
      <section className="bg-[#FF7477] py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
              Our Vision
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight">
              A Future Where Every Girl<br />Knows What&rsquo;s Possible.
            </h2>
          </div>
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              We envision a future where every girl has access to inspiring
              mentors, meaningful opportunities, and a community that believes
              in her potential.
            </p>
            <p>
              Herizon begins in the San Gabriel Valley, but our vision reaches
              far beyond one city. We hope to build a movement that connects
              girls with women who encourage, guide, and inspire them to dream
              bigger, lead with confidence, and create lives filled with purpose.
            </p>
            <p>
              Because when one girl discovers her potential, the impact reaches
              far beyond her. It strengthens families, communities, and
              future generations.
            </p>
          </div>
          <div className="mt-12 pt-10 border-t border-white/20 text-center">
            <p className="font-serif text-2xl font-bold text-white leading-relaxed">
              We&rsquo;re not just creating events.<br />
              We&rsquo;re building a community.<br />
              We&rsquo;re opening doors.<br />
              <span className="text-white/80">
                And helping the next generation grow into confident leaders who
                know they belong wherever their dreams take them.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── SIX CORE VALUES ─────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              Six Core Values. One Mission.
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              Everything we do flows from these values. They&rsquo;re
              the foundation of every experience, every connection, and every
              girl we serve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.number}
                className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8E6E2] hover:border-[#FF7477]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{value.icon}</span>
                  <span className="font-serif text-4xl font-black text-[#F0EFEC]">
                    {value.number}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">
                  {value.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#FF7477] mb-4" />
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Be Part of<br />
            <span className="text-[#FF7477]">Something Bigger?</span>
          </h2>
          <p className="text-[#9B9B9B] text-lg mb-10 leading-relaxed">
            Join us at an upcoming event and give the girl in your life access
            to the community, mentorship, and experiences that will shape who
            she becomes.
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
              Find an Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
