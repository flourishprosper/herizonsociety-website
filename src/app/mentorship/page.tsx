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
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-6">
            Why Mentorship Matters
          </p>
          <div className="space-y-4 mb-10">
            <p className="font-serif text-3xl sm:text-4xl font-black text-white leading-snug">
              One encouraging conversation.
            </p>
            <p className="font-serif text-3xl sm:text-4xl font-black text-white leading-snug">
              One positive role model.
            </p>
            <p className="font-serif text-3xl sm:text-4xl font-black text-white leading-snug">
              One person who believes in you.
            </p>
          </div>
          <p className="text-[#FF7477] text-xl font-semibold mb-8">
            Sometimes that&rsquo;s all it takes to change a girl&rsquo;s life.
          </p>
          <p className="text-[#9B9B9B] text-lg leading-relaxed">
            Herizon connects girls with women who lead by example, encourage
            with compassion, and remind every girl that she&rsquo;s capable of
            incredible things.
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
                A mentor can change everything. One conversation with a woman
                who has navigated the real world, built a business, led a
                team, and overcome setbacks, can reshape what a girl believes is
                possible for herself.
              </p>
              <p>
                At Herizon, mentorship isn&rsquo;t a checkbox. It&rsquo;s a
                core part of who we are. As girls move through quarterly
                experiences, monthly meetups, and regular community gatherings,
                they build genuine, lasting relationships with mentors and peers
                who will walk with them for life.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "👩‍💼", label: "Women Entrepreneurs" },
              { icon: "🎯", label: "Business Leaders" },
              { icon: "🎓", label: "Educators & Coaches" },
              { icon: "🌍", label: "Community Leaders" },
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

      {/* The Herizon Brand Promise */}
      <section className="bg-[#FF7477] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
              The Herizon Promise
            </p>
            <h2 className="font-serif text-4xl font-black leading-tight">
              Every Signature Experience Leaves Girls With…
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤝",
                title: "A New Connection",
                desc: "A mentor, a peer, or a role model who changes their perspective.",
              },
              {
                icon: "💡",
                title: "A New Perspective",
                desc: "A fresh way of seeing their own potential and the world around them.",
              },
              {
                icon: "🚪",
                title: "A New Opportunity",
                desc: "A door opened to careers, businesses, or experiences they hadn't considered.",
              },
              {
                icon: "✨",
                title: "Greater Confidence",
                desc: "A deeper belief in themselves and their ability to create their future.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/15 border border-white/20 rounded-2xl p-6 text-white"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-serif text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
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
