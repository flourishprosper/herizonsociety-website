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
      "Helping girls believe in themselves deeply and unapologetically. Real confidence isn't handed to you. It's built through encouragement, experience, and community.",
  },
  {
    number: "02",
    title: "Leadership",
    icon: "🏆",
    description:
      "Developing the voice, vision, and courage to lead with intention. We help girls find their voice and step into any room ready to lead.",
  },
  {
    number: "03",
    title: "Connection",
    icon: "🤝",
    description:
      "Building relationships with mentors and peers that last beyond the experience. The people around you shape what you believe is possible.",
  },
  {
    number: "04",
    title: "Opportunity",
    icon: "🌟",
    description:
      "Opening doors to careers, businesses, and experiences girls never imagined. We help girls discover possibilities they didn't know existed.",
  },
  {
    number: "05",
    title: "Community",
    icon: "💜",
    description:
      "Creating a lifelong sisterhood rooted in shared values and mutual support. A place where every girl belongs and every voice matters.",
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
              Herizon is a community where girls ages 12 to 18 build
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

      {/* ── OUR STORY ───────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              We&rsquo;re Building the Community We Wish We&rsquo;d Had.
            </h2>
          </div>

          <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-lg">
            <p>
              Herizon began with a simple conversation between two women who asked the same question:
            </p>
          </div>

          <div className="my-10 text-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              &ldquo;What if we&rsquo;d had this growing up?&rdquo;
            </span>
          </div>

          <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-lg">
            <p>
              Like so many girls, we spent our teenage years figuring life out
              as we went. We learned through trial and error, searched for role
              models, and slowly built confidence one challenge at a time.
              Looking back, we often wonder how different those years might have
              been if we&rsquo;d had mentors, a supportive community, and
              opportunities to explore who we could become.
            </p>
            <p>
              Every girl experiences moments of self-doubt. Moments when she
              wonders if she&rsquo;s good enough, capable enough, or brave
              enough to chase what&rsquo;s next. We know that feeling because
              we&rsquo;ve lived it too.
            </p>
            <p className="font-semibold text-[#1A1A1A] text-xl">
              That&rsquo;s why we created Herizon.
            </p>
            <p>
              Not because we have all the answers, but because we remember what
              it felt like to grow up without them.
            </p>
            <p>
              We&rsquo;re building the community we wish we&rsquo;d had. A
              place where girls are encouraged to ask questions, try new things,
              discover their strengths, and build the confidence to become
              whoever they want to be. A place where inspiring women become
              mentors, friendships become lifelong support systems, and every
              girl is reminded that she belongs, her voice matters, and her
              future is full of possibilities.
            </p>
            <p className="font-semibold text-[#1A1A1A]">
              Because growing up shouldn&rsquo;t mean figuring everything out alone.
            </p>
          </div>

          <div className="my-10 border-l-4 border-[#FF7477] pl-8 space-y-4">
            <p className="text-[#1A1A1A] font-medium text-lg">Every girl deserves guidance.</p>
            <p className="text-[#1A1A1A] font-medium text-lg">Every girl deserves encouragement.</p>
            <p className="text-[#1A1A1A] font-medium text-lg">Every girl deserves someone who believes in her before she fully believes in herself.</p>
          </div>

          <p className="text-center font-serif text-2xl font-bold text-[#FF7477]">
            That&rsquo;s the community we&rsquo;re building at Herizon, one girl at a time.
          </p>
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
              Every Girl Deserves to Believe in Herself.
            </h2>
            <div className="space-y-5 text-[#4A4A4A] leading-relaxed text-lg">
              <p>
                Herizon exists to help girls build the confidence to pursue
                their dreams, discover their potential, and create a future
                without limits.
              </p>
              <p>
                We believe confidence is built through encouragement, meaningful
                experiences, positive role models, and a community that reminds
                every girl she belongs, her voice matters, and she&rsquo;s
                capable of incredible things.
              </p>
              <p className="font-semibold text-[#1A1A1A]">
                That&rsquo;s the mission behind everything we do.
              </p>
            </div>
          </div>

          {/* Quote Card */}
          <div className="bg-[#1A1A1A] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#FF7477] opacity-10 blur-2xl" />
            <div className="font-serif text-8xl font-black text-[#FF7477] opacity-30 leading-none mb-4">
              &ldquo;
            </div>
            <blockquote className="font-serif text-2xl font-bold text-white leading-snug mb-6">
              Confidence changes everything.
            </blockquote>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Every decision we make, every program we create, and every
              experience we offer is designed to help girls believe in
              themselves and discover what&rsquo;s possible.
            </p>
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
              Five Pillars. One Mission.
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

      {/* ── MEET THE FOUNDERS ──────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              The Women Behind Herizon
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              Meet the Founders
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              Herizon was born from lived experience and a shared belief that
              every girl deserves a community that believes in her.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white rounded-3xl border border-[#E8E6E2] overflow-hidden">
              <div className="bg-[#1A1A1A] h-64 flex items-center justify-center">
                <span className="text-7xl">👩🏽</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-black text-[#1A1A1A] mb-1">
                  Rene Babich
                </h3>
                <p className="text-[#FF7477] text-sm font-semibold uppercase tracking-widest mb-4">
                  Co-Founder
                </p>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  Bio coming soon.
                </p>
              </div>
            </div>
            {/* Founder 2 */}
            <div className="bg-white rounded-3xl border border-[#E8E6E2] overflow-hidden">
              <div className="bg-[#1A1A1A] h-64 flex items-center justify-center">
                <span className="text-7xl">👩🏼</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-black text-[#1A1A1A] mb-1">
                  Ryan Guerra
                </h3>
                <p className="text-[#FF7477] text-sm font-semibold uppercase tracking-widest mb-4">
                  Co-Founder
                </p>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  Bio coming soon.
                </p>
              </div>
            </div>
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
            Whether you&rsquo;re a parent, mentor, volunteer, or community
            partner, there&rsquo;s a place for you at Herizon. Join us at an
            upcoming Signature Experience and help create a future where every girl has the
            confidence to discover what&rsquo;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-[#FF7477] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Explore Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
