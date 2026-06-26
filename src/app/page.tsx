import Link from "next/link";

const brandPillars = [
  {
    number: "01",
    title: "Confidence",
    description: "Helping girls believe in themselves deeply and unapologetically.",
  },
  {
    number: "02",
    title: "Leadership",
    description: "Developing the voice, vision, and courage to lead with intention.",
  },
  {
    number: "03",
    title: "Connection",
    description: "Building relationships with mentors and peers that last beyond the event.",
  },
  {
    number: "04",
    title: "Opportunity",
    description: "Opening doors to careers, businesses, and experiences girls never imagined.",
  },
  {
    number: "05",
    title: "Community",
    description: "Creating a lifelong sisterhood rooted in shared values and mutual support.",
  },
];

const stats = [
  { value: "One Mission", label: "Helping Girls Discover What’s Possible" },
  { value: "5 Pillars", label: "Confidence • Leadership • Connection • Opportunity • Community" },
  { value: "Girls We Empower", label: "Ages 12–18" },
  { value: "San Gabriel Valley", label: "Launching Our First Chapter" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#1A1A1A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#FF7477] opacity-10 blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#FF7477] opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-6 border border-[#FF7477]/40 px-3 py-1 rounded-full">
              For Girls Ages 12–18
            </span>
            <h1 className="font-serif font-black leading-tight mb-8">
              <span className="block text-6xl sm:text-7xl lg:text-8xl tracking-tight">
                <span className="text-[#FF7477]">HER</span>
                <span className="text-white">IZON</span>
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
                Expanding Horizons.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-[#FF7477]">
                Building Confidence.
              </span>
            </h1>
            <p className="text-[#9B9B9B] text-lg leading-relaxed max-w-md mb-10">
              At Herizon, we believe confidence changes everything. Our mission
              is to help girls discover their strengths, believe in themselves,
              and realize what they&rsquo;re capable of. Through mentorship,
              entrepreneurship, education, leadership, and real-world
              experiences, we help girls build confidence, develop meaningful
              connections, and create a future full of possibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors text-center"
              >
                Join Now
              </Link>
              <Link
                href="/events"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white/60 transition-colors text-center"
              >
                Find an Event
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="font-serif text-5xl font-black text-[#FF7477] mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-[#9B9B9B] uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ───────────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-6">
            Our Mission
          </p>
          <div className="max-w-2xl mx-auto space-y-5 text-lg text-[#9B9B9B] leading-relaxed">
            <p className="font-black text-[#1A1A1A] text-xl sm:text-2xl">
              Herizon exists to help girls discover what&rsquo;s possible.
            </p>
            <p>
              Through mentorship, leadership, entrepreneurship, community
              experiences, and real-world exposure, we inspire girls to build
              confidence, develop life skills, and pursue opportunities they may
              never have imagined.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BRAND PILLARS ────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Brand Pillars
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight">
              Everything We Do Ties Back to These
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {brandPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="bg-[#1A1A1A] p-8 flex flex-col gap-4 hover:bg-[#2D2D2D] transition-colors"
              >
                <span className="font-serif text-5xl font-black text-white/10 leading-none">
                  {pillar.number}
                </span>
                <h3 className={`font-serif text-2xl font-black leading-tight ${
                  i === 0 ? "text-[#FF7477]" : "text-white"
                }`}>
                  {pillar.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#FF7477]" />
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS STRIP ───────────────────────── */}
      <section className="bg-[#FF7477] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
                Mark Your Calendar
              </p>
              <h2 className="font-serif text-4xl font-black text-white leading-tight">
                Upcoming Herizon Events
              </h2>
            </div>
            <Link
              href="/events"
              className="shrink-0 bg-white text-[#FF7477] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
            >
              View All Events
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { city: "Glendora", date: "September 19, 2026", venue: "TBA" },
              { city: "Pasadena", date: "Winter 2026", venue: "TBA" },
              { city: "San Dimas", date: "Spring 2027", venue: "TBA" },
            ].map((event) => (
              <div
                key={event.city}
                className="bg-white/15 border border-white/20 rounded-2xl p-6 text-white"
              >
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                  {event.date}
                </p>
                <h3 className="font-serif text-2xl font-bold mb-1">
                  {event.city}
                </h3>
                <p className="text-white/70 text-sm">{event.venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MENTORSHIP + EXPERIENCES ────────────────────── */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              More Than an Event
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-snug mb-6">
              Real Experiences.<br />
              Real Mentors.<br />
              Real Change.
            </h2>
            <p className="text-[#9B9B9B] text-lg leading-relaxed mb-6">
              Every Herizon experience is designed to leave girls with something
              meaningful: a new connection, a fresh perspective, greater
              confidence, and the belief that their future is full of
              possibilities. Herizon isn&rsquo;t just an event. It&rsquo;s a
              community where girls are inspired, encouraged, and supported by
              women who&rsquo;ve walked the path before them.
            </p>
            <Link
              href="/mentorship"
              className="inline-flex bg-[#1A1A1A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              Discover Herizon
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "🤝",
                label: "Connect",
                description: "Build meaningful relationships with mentors and other girls.",
              },
              {
                icon: "🌱",
                label: "Grow",
                description: "Develop confidence, leadership, and life skills through real experiences.",
              },
              {
                icon: "💡",
                label: "Explore",
                description: "Discover new opportunities, careers, and possibilities for your future.",
              },
              {
                icon: "⭐",
                label: "Lead",
                description: "Leave every Herizon experience ready to make a difference in your school, community, and beyond.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-left card-hover shadow-sm border border-[#E8E6E2]"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <p className="text-sm font-bold text-[#1A1A1A] mb-2">{item.label}</p>
                <p className="text-xs text-[#9B9B9B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE ───────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            When girls know who they are and what they&rsquo;re capable of,
            <br />
            <span className="text-[#FF7477]">they change everything.</span>
          </blockquote>
          <p className="text-[#9B9B9B] text-sm uppercase tracking-wider">
            Herizon Society
          </p>
        </div>
      </section>

      {/* ─── SPONSOR / JOIN CTA ──────────────────────────── */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
                Join the Movement
              </p>
              <h2 className="font-serif text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
                Invest in the Next Generation
              </h2>
              <p className="text-[#9B9B9B] leading-relaxed mb-8">
                Herizon grows because of people who believe every girl deserves
                the opportunity to discover her potential. Whether you become a
                mentor, volunteer at an event, or sponsor our mission, your
                support helps create life-changing experiences and lasting
                confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/mentorship"
                  className="bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors text-center"
                >
                  🫧 Become a Sponsor
                </Link>
                <Link
                  href="/volunteer"
                  className="border border-[#E8E6E2] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:border-[#1A1A1A] transition-colors text-center"
                >
                  🧡 Volunteer
                </Link>
              </div>
            </div>
            <div className="bg-[#FAF8F5] rounded-3xl p-10 text-center border border-[#E8E6E2]">
              <div className="text-4xl mb-5">🌸</div>
              <p className="text-[#1A1A1A] text-base leading-relaxed font-medium max-w-sm mx-auto">
                Our vision is to build a community where every girl has access
                to mentors, meaningful opportunities, and the{" "}
                <span className="text-[#FF7477] font-semibold">
                  confidence to pursue a future without limits.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
