import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confidence Conversations — HERizon Society",
  description:
    "Watch and explore HERizon Society's Confidence Conversations — real talks on self-defence, body image, mental health, community leadership, and daily confidence practices.",
};

const topics = [
  {
    title: "Self-Defence: Escaping the Rear Choke",
    category: "Self Defence",
    emoji: "🥋",
    desc: "A practical, age-appropriate walkthrough of one of the most important self-defence moves a girl can learn — with tips on awareness, prevention, and action.",
  },
  {
    title: "Community Leadership",
    category: "Leadership",
    emoji: "🏆",
    desc: "What does it look like when young women lead in their communities? We talk about service, voice, and the power of showing up for others.",
  },
  {
    title: "Body Image: Loving the Skin You're In",
    category: "Mental Health",
    emoji: "💛",
    desc: "An honest conversation about body image, media pressure, and how to develop a healthy, loving relationship with your own body.",
  },
  {
    title: "Daily Practice for Epic Confidence",
    category: "Mindset",
    emoji: "⭐",
    desc: "The small daily habits that add up to unshakeable self-belief — from morning affirmations to evening reflections and everything in between.",
  },
  {
    title: "Busting Through Your Insecurities",
    category: "Mindset",
    emoji: "🔥",
    desc: "Our famous board-breaking exercise, deconstructed. How to identify your biggest insecurity, write it down, and literally break through it.",
  },
  {
    title: "Finding Support When You're Struggling",
    category: "Mental Health",
    emoji: "🤝",
    desc: "Real talk about how to ask for help, who to turn to, and why reaching out is one of the bravest things you can do.",
  },
];

const categories = ["All", "Self Defence", "Mindset", "Mental Health", "Leadership"];

export default function ConversationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#F7836D] opacity-10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
            The Conversations That Matter
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Confidence <span className="text-[#F7836D]">Conversations</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Real talks for real girls. Explore our library of conversations on
            self-defence, mental health, body image, leadership, and the daily
            practice of being your most confident self.
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
                  ? "bg-[#F7836D] text-white"
                  : "bg-white border border-[#E8E6E2] text-[#2D2D2D] hover:border-[#F7836D] hover:text-[#F7836D]"
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
                    <div className="w-16 h-16 rounded-full bg-[#F7836D] flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
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
      <section className="bg-[#F7836D] py-20 text-center">
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
            className="inline-flex bg-white text-[#F7836D] font-bold px-10 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </>
  );
}
