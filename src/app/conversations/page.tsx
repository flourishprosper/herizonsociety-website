import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confidence Conversations Herizon Society",
  description:
    "Watch and explore Herizon Society's Confidence Conversations real talks on leadership, mentorship, confidence, mental health, and expanding what's possible for girls ages 12–18.",
};

const topics = [
  {
    title: "Finding Your Voice: How to Speak Up When It Matters",
    category: "Leadership",
    emoji: "🎤",
    desc: "A real conversation about the moments that require courage to speak up in a classroom, a boardroom, or just in a group of friends. Practical tools every girl needs.",
  },
  {
    title: "What No One Tells You About Being a Teenage Girl",
    category: "Mentorship",
    emoji: "💬",
    desc: "A mentor-led honest conversation about the things women wish someone had told them at 15 the real stuff about confidence, comparison, and becoming yourself.",
  },
  {
    title: "Body Image in the Age of Social Media",
    category: "Mental Health",
    emoji: "💛",
    desc: "An honest conversation about body image, comparison culture, and how girls ages 12–18 can build a healthy relationship with themselves in a world designed to make them feel not enough.",
  },
  {
    title: "The Daily Practice of Confidence",
    category: "Mindset",
    emoji: "⭐",
    desc: "The small, consistent habits that compound into unshakeable self-belief tools specifically built for teenage girls navigating school, social life, and becoming themselves.",
  },
  {
    title: "How to Actually Set (and Hit) Big Goals",
    category: "Leadership",
    emoji: "🔥",
    desc: "Goal-setting without the fluff. A practical guide for teen girls on how to set goals that matter, build accountability systems, and push through when it gets hard.",
  },
  {
    title: "How to Find a Mentor (and Be One)",
    category: "Mentorship",
    emoji: "🤝",
    desc: "The art of building relationships with people who are ahead of you and how even a 16-year-old can be a mentor to someone who needs her.",
  },
];

const categories = ["All", "Leadership", "Mindset", "Mental Health", "Mentorship"];

export default function ConversationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            The Conversations That Matter
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Confidence <span className="text-[#FF7477]">Conversations</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Real talks for real girls. Explore our library of conversations on
            leadership, mentorship, mental health, and what it takes to become
            the most confident, expansive version of yourself.
          </p>
        </div>
      </section>

      {/* Filter tags (static display) */}
      <section className="bg-[#FAF8F5] py-8 border-b border-[#E8E6E2]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-colors ${
                i === 0
                  ? "bg-[#FF7477] text-white"
                  : "bg-white border border-[#E8E6E2] text-[#2D2D2D] hover:border-[#FF7477] hover:text-[#FF7477]"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Topic Cards */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8E6E2] card-hover"
              >
                <div className="bg-[#1A1A1A] p-8 aspect-video flex items-center justify-center relative">
                  <span className="text-7xl">{topic.emoji}</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FF7477] flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#F0EFEC] text-[#9B9B9B] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                    {topic.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-[#9B9B9B] text-sm leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#FF7477] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-white mb-4">
            Never Miss a Conversation
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            New conversations drop regularly. Join our community to get notified
            when we publish fresh content on confidence, self-defence, and
            everything in between.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-white text-[#FF7477] font-bold px-10 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </>
  );
}
