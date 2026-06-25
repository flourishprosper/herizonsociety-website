import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Conferences | Herizon Society",
  description:
    "Find an upcoming Herizon Society event near you. Conferences and experiences for girls ages 12–18 across Southern California.",
};

const upcomingEvents = [
  {
    id: "la-fall-2026",
    city: "Los Angeles",
    state: "CA",
    date: "Fall 2026",
    fullDate: "Date TBA",
    venue: "Venue to be announced",
    description:
      "Our flagship LA event: a full day of keynote speakers, mentorship, leadership workshops, and community for girls ages 12–18.",
    status: "coming-soon",
  },
  {
    id: "sd-winter-2026",
    city: "San Diego",
    state: "CA",
    date: "Winter 2026",
    fullDate: "Date TBA",
    venue: "Venue to be announced",
    description:
      "Bringing the Herizon community to San Diego with mentors, speakers, and real experiences designed for teen girls.",
    status: "coming-soon",
  },
  {
    id: "oc-spring-2027",
    city: "Orange County",
    state: "CA",
    date: "Spring 2027",
    fullDate: "Date TBA",
    venue: "Venue to be announced",
    description:
      "The OC conference brings together girls 12–18 ready to step into their confidence, find their mentors, and lead with heart.",
    status: "coming-soon",
  },
];

const whatToExpect = [
  {
    icon: "🧠",
    title: "Mindset Workshops",
    desc: "Interactive sessions on self-belief, gratitude, busting through insecurities, and I Am statements.",
  },
  {
    icon: "🥋",
    title: "Self-Defence Training",
    desc: "Hands-on leadership workshops where girls practice public speaking, goal-setting, and real decision-making.",
  },
  {
    icon: "💪",
    title: "Leadership in Action",
    desc: "Real-world challenges and experiences that stretch girls beyond their comfort zones.",
  },
  {
    icon: "🔥",
    title: "Breakthrough Experience",
    desc: "A signature Herizon moment designed to shatter the limiting beliefs holding every girl back.",
  },
  {
    icon: "🎤",
    title: "Keynote Speakers",
    desc: "Inspiring women leaders share their stories of confidence, resilience, and impact.",
  },
  {
    icon: "👯",
    title: "Community & Connection",
    desc: "Girls connect with peers who uplift them and build friendships that last beyond the event.",
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
            Upcoming Events
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Find an Event <span className="text-[#FF7477]">Near You</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            One day. Life-changing confidence. Our Confidence Conferences for
            girls ages 12–18 are coming to cities across Southern California.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              2026–2027 Season
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              Upcoming Conferences
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border border-[#E8E6E2] overflow-hidden card-hover"
              >
                <div className="bg-[#FF7477] px-8 py-6">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                    {event.date}
                  </p>
                  <h3 className="font-serif text-3xl font-black text-white">
                    {event.city}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{event.state}</p>
                </div>
                <div className="p-8">
                  <p className="text-[#9B9B9B] text-sm mb-2">{event.fullDate}</p>
                  <p className="text-[#9B9B9B] text-sm mb-4">{event.venue}</p>
                  <p className="text-[#2D2D2D] text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <span className="inline-block bg-[#F0EFEC] text-[#9B9B9B] text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                    Coming Soon
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#9B9B9B] text-sm mt-10">
            Dates and venues will be announced soon.{" "}
            <Link href="/contact" className="text-[#FF7477] hover:underline">
              Contact us
            </Link>{" "}
            to be notified first.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              What Happens at a Herizon Conference
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              A Full Day That Changes Everything
            </h2>
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
