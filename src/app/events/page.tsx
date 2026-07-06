import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Herizon Society",
  description:
    "Find an upcoming Herizon Society experience near you. A youth program for girls ages 12–18 across Southern California.",
};

const upcomingEvents = [
  {
    id: "glendora-sept-2026",
    city: "🌸 Bloom",
    subtitle: "The Inaugural Herizon Experience",
    state: "Glendora, California",
    badge: "✨ Founding Event",
    date: "September 19, 2026",
    fullDate: "",
    venue: "",
    description:
      "Join us for Bloom, Herizon’s very first experience. Designed for girls ages 12–18, this unforgettable day is about more than just an event. It’s about building confidence, creating meaningful connections, and helping girls discover what’s possible.",
    description2:
      "Through inspiring women, creative experiences, and genuine conversations, girls will leave feeling encouraged, connected, and excited about the future ahead of them.",
    status: "coming-soon",
  },
  {
    id: "pasadena-winter-2026",
    city: "🎤 Find Your Voice",
    subtitle: "A Herizon Experience",
    state: "Pasadena, California",
    date: "Winter 2026",
    fullDate: "Date & Location Coming Soon",
    venue: "",
    description:
      "Find Your Voice is a Herizon experience designed to help girls build confidence, express themselves with courage, and discover the strength of their unique voice.",
    description2:
      "Through inspiring women, interactive experiences, and meaningful conversations, girls will leave feeling empowered to speak up, lead with confidence, and embrace who they are.",
    status: "coming-soon",
  },
  {
    id: "san-dimas-spring-2027",
    city: "⭐ Lead Forward",
    subtitle: "A Herizon Experience",
    state: "San Dimas, California",
    date: "Spring 2027",
    fullDate: "Date & Location Coming Soon",
    venue: "",
    description:
      "Leadership isn’t about having all the answers. It’s about having the confidence to take the first step.",
    description2:
      "Lead Forward is a Herizon experience where girls will build leadership skills, connect with inspiring mentors, and discover how their unique strengths can make a meaningful difference in the world around them.",
    status: "coming-soon",
  },
];

const whatToExpect = [
  {
    icon: "🌸",
    title: "Connect",
    desc: "Meet new friends, inspiring women, and mentors who encourage every girl to believe in herself.",
  },
  {
    icon: "💗",
    title: "Build Confidence",
    desc: "Interactive experiences designed to help girls recognize their strengths and step outside their comfort zone.",
  },
  {
    icon: "🎤",
    title: "Hear Inspiring Stories",
    desc: "Learn from women who have overcome challenges, pursued big dreams, and are passionate about giving back.",
  },
  {
    icon: "🌱",
    title: "Discover New Possibilities",
    desc: "Explore careers, leadership opportunities, entrepreneurship, and experiences that expand what’s possible.",
  },
  {
    icon: "🤝",
    title: "Grow Together",
    desc: "Participate in hands-on activities, conversations, and experiences that build lasting confidence and meaningful friendships.",
  },
  {
    icon: "✨",
    title: "Leave Inspired",
    desc: "Every Herizon experience is designed so girls leave feeling more confident, more connected, and excited about what’s ahead.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Events
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            More Than an Event.<br />
            <span className="text-[#FF7477]">It&rsquo;s an Experience.</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Every Herizon event is designed to help girls build confidence,
            discover new possibilities, and create meaningful connections that
            last long after the day is over.
          </p>
          <p className="text-[#9B9B9B] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Through inspiring speakers, hands-on activities, mentorship,
            leadership experiences, and community, every event is an opportunity
            to grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF7477] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
          >
            Register for an Event
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Mark Your Calendar
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              Upcoming Events
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-[#E8E6E2] overflow-hidden card-hover"
              >
                <div className="bg-[#FF7477] px-8 py-6">
                  {event.badge && (
                    <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                      {event.badge}
                    </span>
                  )}
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                    {event.date}
                  </p>
                  <h3 className="font-serif text-3xl font-black text-white">
                    {event.city}
                  </h3>
                  {event.subtitle && (
                    <p className="text-white/80 text-sm font-medium mt-1">{event.subtitle}</p>
                  )}
                  <p className="text-white/80 text-sm mt-1">{event.state}</p>
                </div>
                <div className="p-8">
                  {event.fullDate && <p className="text-[#9B9B9B] text-sm mb-2">{event.fullDate}</p>}
                  {event.venue && <p className="text-[#9B9B9B] text-sm mb-4">{event.venue}</p>}
                  <p className="text-[#2D2D2D] text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  {event.description2 && (
                    <p className="text-[#2D2D2D] text-sm leading-relaxed mb-6">
                      {event.description2}
                    </p>
                  )}

                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <h3 className="font-serif text-2xl font-black text-[#1A1A1A] mb-3">
              Don&rsquo;t Miss the Beginning.
            </h3>
            <p className="text-[#9B9B9B] text-base max-w-lg mx-auto mb-8">
              Join our mailing list to be the first to know when registration
              opens and new experiences are announced.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FF7477] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              The Herizon Experience
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A] mb-6">
              More Than an Event.
              A Community Where Girls Grow.
            </h2>
            <p className="text-[#9B9B9B] text-lg max-w-2xl mx-auto leading-relaxed">
              Every Herizon experience is thoughtfully designed to help girls build confidence, form meaningful friendships, and connect with inspiring mentors. Whether it&rsquo;s your first event or your tenth, you&rsquo;ll become part of a community that encourages growth, leadership, and lifelong connection.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatToExpect.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] rounded-2xl p-8 card-hover"
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

      {/* Sponsor Strip */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-2">
              Help Us Grow
            </p>
            <h2 className="font-serif text-3xl font-black text-white">
              Want to Bring Herizon to Your City?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/sponsor"
              className="bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors text-center"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-white/60 transition-colors text-center"
            >
              Reach Out
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
