import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentorship | Herizon Society",
  description:
    "Connect with women leaders, entrepreneurs, and business professionals who inspire confidence and expand what's possible for girls ages 12–18.",
};

export default function MentorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Join the Movement
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Together, We&rsquo;re Building the Community{" "}
            <span className="text-[#FF7477]">We Wish We&rsquo;d Had.</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Every girl deserves people who believe in her, encourage her, and
            remind her of what&rsquo;s possible. Whether you become a mentor,
            volunteer, sponsor, or community partner, you have the opportunity
            to help shape the confidence and future of the next generation.
          </p>
        </div>
      </section>

      {/* Join the Movement Cards */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🤝",
                title: "Become a Mentor",
                lines: ["Share your experience.", "Inspire confidence.", "Make a lasting difference."],
                href: "/contact",
                cta: "Become a Mentor",
              },
              {
                icon: "💗",
                title: "Volunteer",
                lines: ["Help create meaningful experiences that girls will remember for years to come."],
                href: "/volunteer",
                cta: "Volunteer With Us",
              },
              {
                icon: "🌎",
                title: "Partner With Herizon",
                lines: ["Businesses.", "Schools.", "Organizations.", "Community leaders."],
                href: "/contact",
                cta: "Explore a Partnership",
              },
              {
                icon: "✨",
                title: "Sponsor a Signature Experience",
                lines: ["Invest in the next generation and help make Herizon accessible to more girls."],
                href: "/sponsor",
                cta: "Become a Sponsor",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[#FAF8F5] border border-[#E8E6E2] rounded-3xl p-10 flex flex-col gap-6 card-hover"
              >
                <span className="text-5xl">{card.icon}</span>
                <div>
                  <h3 className="font-serif text-2xl font-black text-[#1A1A1A] mb-4">{card.title}</h3>
                  <div className="space-y-1">
                    {card.lines.map((line) => (
                      <p key={line} className="text-[#9B9B9B] text-base leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
                <Link
                  href={card.href}
                  className="mt-auto inline-block bg-[#FF7477] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#E85F62] transition-colors self-start"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mentorship Matters */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-8">
            Why Mentorship Matters
          </p>
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-12">
            &ldquo;Every Girl Deserves Someone Who Believes in Her&hellip;
            <br />
            <span className="text-[#FF7477]">&hellip;before she fully believes in herself.&rdquo;</span>
          </blockquote>
          <div className="space-y-3 mb-10">
            <p className="font-serif text-2xl sm:text-3xl font-black text-white leading-snug">
              One encouraging conversation.
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-black text-white leading-snug">
              One trusted mentor.
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-black text-white leading-snug">
              One opportunity.
            </p>
          </div>
          <p className="text-[#FF7477] text-xl font-semibold mb-8">
            Sometimes that&rsquo;s all it takes to change the course of a young person&rsquo;s life.
          </p>
          <p className="text-[#9B9B9B] text-lg leading-relaxed">
            When girls are surrounded by people who believe in them, they begin
            to believe in themselves. That&rsquo;s why every mentor, volunteer,
            sponsor, and community partner plays such an important role in the
            Herizon community.
          </p>
        </div>
      </section>

      {/* Why Mentorship */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Why It Matters
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              Relationships That Last a Lifetime
            </h2>
            <div className="space-y-5 text-[#2D2D2D] leading-relaxed">
              <p>
                A mentor can change everything. Sometimes all it takes is one
                conversation, one encouraging voice, or one person who believes
                in a girl before she fully believes in herself.
              </p>
              <p>
                At Herizon, mentorship isn&rsquo;t just a program. It&rsquo;s
                the foundation of our community. Through signature experiences,
                ongoing gatherings, and meaningful relationships, girls connect
                with women who inspire them, challenge them, and remind them
                that anything is possible.
              </p>
              <p>
                Our hope is that every girl leaves Herizon with more than
                memories. She leaves with trusted mentors, lifelong friendships,
                and a community she can always come back to.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "✨", label: "Women Who\u2019ve Been There" },
              { icon: "💗", label: "Leaders Who Inspire" },
              { icon: "🎓", label: "Mentors Who Encourage" },
              { icon: "🤝", label: "A Community That Cares" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#E8E6E2]"
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

      {/* The Herizon Promise */}
      <section className="bg-[#FF7477] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-8">
            The Herizon Promise
          </p>
          <blockquote className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            Every Girl Deserves Someone<br />
            Who Believes in Her&hellip;
            <br />
            <span className="text-white/60">&hellip;before she fully</span>
            <br />
            <span className="text-white/60">believes in herself.</span>
          </blockquote>
          <p className="font-serif text-2xl sm:text-3xl font-black text-white/90">
            That&rsquo;s the heart of Herizon.
          </p>
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="bg-[#FAF8F5] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-[#1A1A1A] mb-6">
            Are You a{" "}
            <span className="text-[#FF7477]">Woman Who Leads?</span>
          </h2>
          <p className="text-[#9B9B9B] mb-8 leading-relaxed">
            We&rsquo;re always looking for mentors, speakers, and community
            leaders to connect with the girls in our program. If you have a
            story to share, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/volunteer"
              className="border border-[#E8E6E2] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:border-[#1A1A1A] transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
