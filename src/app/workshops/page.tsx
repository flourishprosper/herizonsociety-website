import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops Herizon Society",
  description:
    "Monthly Herizon workshops for girls ages 12–18. Confidence, leadership, mentorship, and real-world experiences in a supportive community setting.",
};

const sessions = [
  {
    theme: "Own Your Voice Public Speaking & Presence",
    tag: "Current Month",
    tagColor: "bg-[#FF7477] text-white",
    desc:
      "One of the most powerful things a young woman can do is speak clearly, confidently, and without apology. This workshop gives girls a safe space to find their voice, practice speaking under pressure, and walk away owning their presence in any room.",
    takeaways: [
      "Structuring a clear, confident message",
      "Body language & stage presence",
      "Handling nerves & self-doubt in the moment",
      "Exercises for girls to practice at home",
    ],
  },
  {
    theme: "Confidence from the Inside Out",
    tag: "Coming Next",
    tagColor: "bg-[#1A1A1A] text-white",
    desc:
      "A deep dive into the mindset work that creates lasting confidence. Girls explore their self-talk, identify limiting beliefs, and build a personal toolkit for showing up as their most powerful self even on the hard days.",
    takeaways: [
      "I Am statements practice",
      "Identifying & reframing limiting beliefs",
      "Building a daily confidence practice",
      "The courage to be seen & take up space",
    ],
  },
  {
    theme: "Mentorship Circle Real Talk with Real Leaders",
    tag: "Upcoming",
    tagColor: "bg-[#F0EFEC] text-[#2D2D2D]",
    desc:
      "An intimate small-group format where girls sit with accomplished women mentors for honest, unfiltered conversation about career, confidence, failure, and what they wish someone had told them at 16.",
    takeaways: [
      "How to ask for mentorship",
      "Building meaningful professional relationships",
      "Navigating failure & rejection with resilience",
      "The questions worth asking a mentor",
    ],
  },
];

const benefits = [
  { icon: "🎤", title: "Voice & Presence", desc: "Tools that help girls speak up and take up the space they deserve." },
  { icon: "🧠", title: "Mindset Mastery", desc: "Practical tools to manage self-doubt, anxiety, and limiting beliefs." },
  { icon: "👩‍🏫", title: "Real Mentors", desc: "Access to women leaders who have walked the path ahead." },
  { icon: "👭", title: "Peer Community", desc: "A circle of girls who challenge and lift each other up." },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FF7477] py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            Monthly Programs
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Herizon Workshops
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Monthly workshops for girls ages 12–18 where real experiences,
            honest mentorship, and a powerful community meet. Every session is
            designed to build something that lasts.
          </p>
        </div>
      </section>

      {/* About the Workshops */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              What Are the Workshops?
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              Where Girls Become Their Best Selves
            </h2>
            <div className="space-y-4 text-[#2D2D2D] leading-relaxed">
              <p>
                Each Herizon Workshop brings together a small group of girls
                ages 12–18 for a focused, intentional experience. These
                aren&rsquo;t lectures they&rsquo;re hands-on, honest, and
                built around what girls in this age group actually need.
              </p>
              <p>
                Every month brings a new theme, a new mentor or speaker, and a
                new set of tools girls can take home. Over time, the cumulative
                effect is profound: a girl who knows who she is, what she
                stands for, and how to lead.
              </p>
              <p className="font-medium text-[#1A1A1A]">
                Because confidence isn&rsquo;t built in a day it&rsquo;s
                built in the work you do every month.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-[#E8E6E2] p-6 card-hover">
                <span className="text-3xl block mb-3">{b.icon}</span>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">{b.title}</h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Themes */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Workshop Sessions
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              Each Month, Something New
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session) => (
              <div key={session.theme} className="bg-[#FAF8F5] rounded-3xl overflow-hidden card-hover">
                <div className="p-8 border-b border-[#E8E6E2]">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${session.tagColor} inline-block mb-4`}>
                    {session.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] leading-snug">
                    {session.theme}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-[#2D2D2D] text-sm leading-relaxed mb-6">{session.desc}</p>
                  <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-3">
                    Girls Walk Away With
                  </p>
                  <ul className="space-y-2">
                    {session.takeaways.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                        <span className="text-[#FF7477] mt-0.5">✦</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Reserve Your Spot
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-[#9B9B9B] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Spots are limited by design so each girl gets the attention and
            experience she deserves. Register for the next Herizon Workshop today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF7477] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Register Now
            </Link>
            <Link
              href="/events"
              className="border border-white/30 text-white font-semibold px-10 py-4 rounded-full hover:border-white/60 transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
