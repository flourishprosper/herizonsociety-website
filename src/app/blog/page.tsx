import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — HERizon Society",
  description:
    "Read the HERizon Society blog for insights on confidence, leadership, mentorship, and empowering the girls ages 12–18 in your life.",
};

const posts = [
  {
    slug: "top-confidence-building-activities",
    title: "Top 10 Confidence-Building Activities for Young Girls",
    category: "Mindset",
    excerpt:
      "From journaling to mentor conversations, here are the activities that consistently help girls ages 12–18 build lasting, unshakeable self-belief.",
    readTime: "5 min read",
    date: "November 2024",
  },
  {
    slug: "how-self-defense-boosts-confidence",
    title: "How Self-Defence Training Boosts Confidence in Young Girls",
    category: "Leadership",
    excerpt:
      "There’s something that shifts in a girl when she does something that scared her. Explore the connection between real-world experiences and lasting self-belief.",
    readTime: "4 min read",
    date: "November 2024",
  },
  {
    slug: "growth-mindset-for-tweens",
    title: "Why Growth Mindset Is Essential for Tweens: A Guide for Parents",
    category: "Mental Health",
    excerpt:
      "The teen years are pivotal. Here’s why growth mindset work during ages 12–18 can shape a girl’s entire relationship with challenge, failure, and her own identity.",
    readTime: "6 min read",
    date: "August 2024",
  },
  {
    slug: "body-positivity-strong-confident-girls",
    title: "Body Positivity & Self-Esteem: Building Strong, Confident Girls",
    category: "Health & Fitness",
    excerpt:
      "How do we help girls love their bodies in a world that constantly tells them not to? Real strategies that go beyond pep talks.",
    readTime: "5 min read",
    date: "August 2024",
  },
  {
    slug: "mindfulness-for-girls",
    title: "Mindfulness Techniques Every Girl Should Learn for Better Mental Health",
    category: "Mental Health",
    excerpt:
      "Simple, effective mindfulness tools adapted for teen girls ages 12–18 — including breathing exercises, boundary-setting practices, and gratitude rituals.",
    readTime: "4 min read",
    date: "November 2024",
  },
  {
    slug: "navigating-adolescence",
    title: "Navigating Adolescence: Challenges for Girls and How HERizon Can Help",
    category: "Leadership",
    excerpt:
      "Adolescence throws a lot at young girls. Here's how structured empowerment programs provide the anchors they need to stay steady.",
    readTime: "7 min read",
    date: "August 2024",
  },
  {
    slug: "overcome-bullying-self-esteem",
    title: "5 Ways to Help Your Daughter Overcome Bullying and Build Self-Esteem",
    category: "Mindset",
    excerpt:
      "Practical, proven strategies for parents and mentors to help girls rise above bullying with their confidence intact.",
    readTime: "5 min read",
    date: "August 2024",
  },
  {
    slug: "role-of-mentorship-in-confidence",
    title: "The Role of Fitness in Building Confidence in Young Girls",
    category: "Health & Fitness",
    excerpt:
      "The body-mind connection is real. Discover how regular movement dramatically impacts how young girls feel about themselves.",
    readTime: "4 min read",
    date: "November 2024",
  },
  {
    slug: "cyber-safety-girls",
    title: "Cyber Safety Tips for Girls: Navigating the Digital World Securely",
    category: "Leadership",
    excerpt:
      "In a world where online presence starts young, here are the cyber safety fundamentals every girl (and parent) needs to know.",
    readTime: "6 min read",
    date: "November 2024",
  },
];

const categoryColors: Record<string, string> = {
  Mindset: "bg-[#FF7477]/10 text-[#FF7477]",
  Leadership: "bg-[#1A1A1A]/10 text-[#1A1A1A]",
  "Mental Health": "bg-purple-100 text-purple-700",
  "Health & Fitness": "bg-green-100 text-green-700",
  Mentorship: "bg-blue-100 text-blue-700",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAF8F5] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Resources & Insights
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-[#1A1A1A] leading-tight mb-6">
            The HERizon <span className="text-[#FF7477]">Blog</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl leading-relaxed">
            Real insights on confidence, leadership, mentorship, and raising
            the next generation of unstoppable young women ages 12–18.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-6">
            Featured Post
          </p>
          <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden grid lg:grid-cols-2">
            <div className="bg-[#2D2D2D] aspect-video lg:aspect-auto flex items-center justify-center">
              <span className="text-8xl">💪</span>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4 ${categoryColors[featured.category]}`}>
                {featured.category}
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-4 leading-snug">
                {featured.title}
              </h2>
              <p className="text-[#9B9B9B] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-[#9B9B9B] text-sm mb-8">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex bg-[#FF7477] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#E85F62] transition-colors w-fit"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-[#FAF8F5] py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8E6E2] card-hover"
              >
                <div className="bg-[#F0EFEC] aspect-video flex items-center justify-center">
                  <span className="text-5xl">
                    {post.category === "Mindset" ? "🧠"
                      : post.category === "Leadership" ? "🏆"
                      : post.category === "Mental Health" ? "💛"
                      : post.category === "Health & Fitness" ? "🏃"
                      : "🌟"}
                  </span>
                </div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#9B9B9B] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#9B9B9B]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#FF7477] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-white mb-4">
            Get Articles Delivered to You
          </h2>
          <p className="text-white/80 mb-8">
            Join our newsletter for weekly insights on confidence, parenting
            empowered girls, and upcoming HERizon events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full px-6 py-4 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-[#1A1A1A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2D2D2D] transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
