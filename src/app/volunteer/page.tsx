import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer | Herizon Society",
  description:
    "Give your time and talents to help girls ages 12–18 discover what's possible. Volunteer with Herizon Society.",
};

const roles = [
  {
    icon: "🎤",
    title: "Event Volunteer",
    description:
      "Help coordinate, set up, and run Herizon events in your area. Be the energy that makes each experience unforgettable.",
  },
  {
    icon: "👩‍🏫",
    title: "Session Facilitator",
    description:
      "Lead a session on a topic you know well: entrepreneurship, career paths, personal development, or your area of expertise.",
  },
  {
    icon: "🤝",
    title: "Mentor",
    description:
      "Commit to mentoring a girl or group of girls over time. Share your story, answer questions, and open doors.",
  },
  {
    icon: "📸",
    title: "Content & Creative",
    description:
      "Help us capture and share the Herizon story through photography, video, social media, or content creation.",
  },
  {
    icon: "📋",
    title: "Operations & Logistics",
    description:
      "Behind every great event is a great team. Help with logistics, coordination, and making sure everything runs smoothly.",
  },
  {
    icon: "💼",
    title: "Corporate & Community",
    description:
      "Connect Herizon with local businesses, community organizations, and sponsors who share our mission.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Volunteer
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Show Up for{" "}
            <span className="text-[#FF7477]">the Next Generation</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Volunteering with Herizon is one of the most direct ways to invest
            in a girl&rsquo;s future. Your time, skills, and presence make a
            lasting impact.
          </p>
        </div>
      </section>

      {/* Ways to Volunteer */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Get Involved
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              Ways to Volunteer
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              No matter your skills or schedule, there&rsquo;s a place for you
              in the Herizon community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8E6E2]"
              >
                <span className="text-4xl block mb-4">{role.icon}</span>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">
                  {role.title}
                </h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Sponsors
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-4">
            Proudly Supported By
          </h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-16">
            We&rsquo;re grateful for the businesses and organizations who believe in the next generation of girls.
          </p>
          {/* Logo grid — logos coming soon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-40 h-20 bg-white border-2 border-dashed border-[#E8E6E2] rounded-2xl flex items-center justify-center text-[#C8C6C2] text-sm"
              >
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF7477] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Every action sends a message to a girl:{" "}
            <strong className="text-white">you are worth investing in.</strong>{" "}
            Reach out and we&rsquo;ll connect you with volunteer opportunities
            near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#FF7477] font-semibold px-8 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
            >
              Connect With Us
            </Link>
            <Link
              href="/mentorship"
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white transition-colors"
            >
              Learn About Mentorship
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
