import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Mindset, Mental Health & Self Love",
    description:
      "The inside work. We help girls rewire how they think about themselves — busting through insecurities, practicing gratitude, and building unshakeable self-belief.",
    bullets: [
      "I Am statements & positive affirmations",
      "Recognizing & reframing negative thoughts",
      "Gratitude & emotional intelligence",
      "Board-breaking confidence exercise",
    ],
    color: "bg-[#F7836D]",
  },
  {
    number: "02",
    title: "Health & Fitness",
    description:
      "A clear mind starts with a healthy body. We make movement joyful and teach girls that taking care of themselves physically is a superpower, not a chore.",
    bullets: [
      "Positive relationships with food & body",
      "Body image conversations",
      "Finding activities you actually love",
      "Movement as medicine",
    ],
    color: "bg-[#1A1A1A]",
  },
  {
    number: "03",
    title: "Self Defence",
    description:
      "There is real confidence in knowing you can protect yourself. Our martial-arts-rooted curriculum gives girls practical skills and the awareness to stay safe.",
    bullets: [
      "Situational awareness",
      "Physical self-defence fundamentals",
      "Being prepared & staying calm",
      "Building courage through action",
    ],
    color: "bg-[#2D2D2D]",
  },
];

const stats = [
  { value: "500+", label: "Girls Empowered" },
  { value: "10+", label: "Conferences Hosted" },
  { value: "3", label: "Core Pillars" },
  { value: "8–13", label: "Ages Served" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#1A1A1A]">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Coral blob */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#F7836D] opacity-10 blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#F7836D] opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-6 border border-[#F7836D]/40 px-3 py-1 rounded-full">
              Igniting Confidence in Girls
            </span>
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-8">
              YOUR
              <br />
              <span className="text-[#F7836D]">HER</span>IZON
              <br />
              IS NOW.
            </h1>
            <p className="text-[#9B9B9B] text-lg leading-relaxed max-w-md mb-10">
              HERizon Society empowers young girls ages 8–13 through mindset
              training, fitness, and self-defence — building the confident
              leaders of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/events"
                className="bg-[#F7836D] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E5614A] transition-colors text-center"
              >
                Find an Event Near You
              </Link>
              <Link
                href="/about"
                className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white/60 transition-colors text-center"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="font-serif text-5xl font-black text-[#F7836D] mb-2">
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

      {/* ─── WHY HERIZON ───────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
            Why We Stand Out
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] mb-6 max-w-3xl mx-auto leading-tight">
            We Are the <span className="text-[#F7836D]">Change</span>
          </h2>
          <p className="text-[#9B9B9B] text-lg max-w-2xl mx-auto leading-relaxed">
            Making a change starts at home. To build a future alive with girl
            power, we need to inspire our young girls with the fiercest belief
            in themselves — today. Our programs weave together time-tested
            confidence strategies from martial arts with mindset training to
            create a formula for success in every area of life.
          </p>
        </div>
      </section>

      {/* ─── THE THREE PILLARS ────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Foundation
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              The Three Pillars of HERizon
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-3xl overflow-hidden card-hover"
              >
                <div className={`${pillar.color} p-8`}>
                  <span className="font-serif text-white/30 text-6xl font-black leading-none">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-4 leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <div className="bg-[#F0EFEC] p-8">
                  <p className="text-[#2D2D2D] text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                        <span className="mt-1 shrink-0 text-[#F7836D]">✦</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPCOMING EVENTS STRIP ───────────────────────── */}
      <section className="bg-[#F7836D] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2">
                Mark Your Calendar
              </p>
              <h2 className="font-serif text-4xl font-black text-white leading-tight">
                Upcoming Confidence Conferences
              </h2>
            </div>
            <Link
              href="/events"
              className="shrink-0 bg-white text-[#F7836D] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
            >
              View All Events
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { city: "Los Angeles", date: "Fall 2026", venue: "TBA" },
              { city: "San Diego", date: "Winter 2026", venue: "TBA" },
              { city: "Orange County", date: "Spring 2027", venue: "TBA" },
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

      {/* ─── WORKSHOPS ────────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Monthly Programs
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              HERizon Confidence Club
            </h2>
            <p className="text-[#9B9B9B] text-lg leading-relaxed mb-6">
              Give your daughter a space where she can grow in confidence, make
              new friends, and learn valuable life skills. Designed especially
              for girls ages 8–13, each monthly session combines practical
              self-defence, mindset tools, and a whole lot of fun.
            </p>
            <p className="text-[#2D2D2D] font-medium mb-8">
              This month&#39;s theme:{" "}
              <span className="text-[#F7836D]">Self-Defence &amp; Spa Day</span>
            </p>
            <Link
              href="/workshops"
              className="inline-flex bg-[#1A1A1A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2D2D2D] transition-colors"
            >
              Explore Workshops
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🥋", label: "Self-Defence Training" },
              { icon: "🧠", label: "Mindset Tools" },
              { icon: "💪", label: "Fitness & Movement" },
              { icon: "💅", label: "Self-Care & Spa" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center card-hover shadow-sm border border-[#E8E6E2]"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE / MISSION ─────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            &ldquo;Confidence changes everything. When girls believe in
            themselves, they{" "}
            <span className="text-[#F7836D]">change the world.</span>&rdquo;
          </blockquote>
          <p className="text-[#9B9B9B] text-sm uppercase tracking-widest">
            — HERizon Society
          </p>
        </div>
      </section>

      {/* ─── SPONSOR CTA ─────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
                Join the Movement
              </p>
              <h2 className="font-serif text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
                We Can&rsquo;t Do It Without You
              </h2>
              <p className="text-[#9B9B9B] leading-relaxed mb-8">
                We invite passionate women, leaders, business owners, mentors,
                and community supporters to help us create life-changing
                experiences for the next generation. Sponsor a conference.
                Partner with us. Be part of something bigger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sponsor"
                  className="bg-[#F7836D] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E5614A] transition-colors text-center"
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/referral"
                  className="border border-[#E8E6E2] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:border-[#1A1A1A] transition-colors text-center"
                >
                  Join the LeadHER Squad
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="font-serif text-8xl font-black text-[#F0EFEC] leading-none mb-4">
                💅
              </div>
              <p className="text-[#9B9B9B] text-lg font-medium">
                Bring 3 friends — earn exclusive{" "}
                <span className="text-[#F7836D]">LeadHER merch</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
