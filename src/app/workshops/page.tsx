import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workshops — HERizon Society",
  description:
    "Monthly HERizon Confidence Club workshops for girls ages 8–13. Combining self-defence, mindset training, and self-care in a supportive community.",
};

const sessions = [
  {
    theme: "Self-Defence & Spa Day",
    tag: "Current Month",
    tagColor: "bg-[#F7836D] text-white",
    desc:
      "Girls start with an age-appropriate self-defence training session — learning skills to feel stronger and safer. After training, they wind down with a relaxing spa experience including nail stickers, face masks, and mindfulness tools to manage stress and anxiety.",
    takeaways: [
      "Practical self-defence moves",
      "Situational awareness skills",
      "Breathing & mindfulness techniques",
      "Self-care isn't selfish — it's essential",
    ],
  },
  {
    theme: "I Am Powerful — Mindset Workshop",
    tag: "Coming Next",
    tagColor: "bg-[#1A1A1A] text-white",
    desc:
      "A deep dive into the power of I Am statements, gratitude journaling, and identifying the negative thoughts that hold girls back. Includes the famous board-breaking exercise.",
    takeaways: [
      "I Am statements practice",
      "Gratitude journal setup",
      "Recognizing negative self-talk",
      "Board-breaking confidence ritual",
    ],
  },
  {
    theme: "Move & Groove — Fitness & Body Image",
    tag: "Upcoming",
    tagColor: "bg-[#F0EFEC] text-[#2D2D2D]",
    desc:
      "An upbeat session exploring the joy of movement, healthy relationships with food, and body positivity. We make fitness fun and show girls their bodies are capable of incredible things.",
    takeaways: [
      "Body positivity conversation",
      "Fun fitness circuit",
      "Finding movement you love",
      "Food as fuel, not fear",
    ],
  },
];

const benefits = [
  { icon: "💪", title: "Physical Strength", desc: "Real skills that make girls feel capable and safe." },
  { icon: "🧠", title: "Mental Resilience", desc: "Tools to manage anxiety, self-doubt, and peer pressure." },
  { icon: "👭", title: "Lifelong Friendships", desc: "A community of girls who lift each other up." },
  { icon: "✨", title: "Unshakeable Self-Belief", desc: "The kind of confidence that follows them everywhere." },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7836D] py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)", backgroundSize: "30px 30px" }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            Monthly Programs
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            HERizon Confidence Club
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            A monthly workshop where girls ages 8–13 grow in confidence, make
            lasting friendships, and learn practical skills — in the most
            supportive space they&rsquo;ll ever step into.
          </p>
        </div>
      </section>

      {/* About the Club */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              What Is the Confidence Club?
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              Where Girls Become Their Best Selves
            </h2>
            <div className="space-y-4 text-[#2D2D2D] leading-relaxed">
              <p>
                Give your daughter a space where she can grow in confidence,
                make new friends, and learn valuable life skills. Our Confidence
                Club is designed especially for girls ages 8–13 to build
                community, develop self-belief, and learn practical self-defence
                in a supportive and empowering environment.
              </p>
              <p>
                Each month brings a new theme — from self-defence and spa days
                to mindset workshops and fitness challenges. Every session is
                thoughtfully crafted to build on the last, giving girls a
                toolkit for life.
              </p>
              <p className="font-medium text-[#1A1A1A]">
                Our goal: show girls that taking care of themselves matters —
                because self-care isn&rsquo;t selfish, it&rsquo;s essential.
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
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Workshop Sessions
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              Each Month, a New Adventure
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
                  <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-3">
                    Girls Will Learn
                  </p>
                  <ul className="space-y-2">
                    {session.takeaways.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                        <span className="text-[#F7836D] mt-0.5">✦</span>
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
          <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
            Reserve Your Spot
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Ready to Join the Club?
          </h2>
          <p className="text-[#9B9B9B] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Spots fill fast. Register your daughter for the next HERizon
            Confidence Club session today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F7836D] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#E5614A] transition-colors"
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
