import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Be a Sponsor — HERizon Society",
  description:
    "Sponsor a HERizon Society Confidence Conference and help create life-changing experiences for the next generation of confident young women.",
};

const tiers = [
  {
    name: "Ignite",
    price: "$500",
    color: "border-[#E8E6E2]",
    headerBg: "bg-[#FAF8F5]",
    headerText: "text-[#1A1A1A]",
    perks: [
      "Logo in conference program",
      "Social media mention (1 post)",
      "Certificate of sponsorship",
      "Thank you from stage",
    ],
  },
  {
    name: "Blaze",
    price: "$1,500",
    color: "border-[#F7836D]",
    headerBg: "bg-[#F7836D]",
    headerText: "text-white",
    badge: "Most Popular",
    perks: [
      "All Ignite benefits",
      "Logo on event banner",
      "Vendor/display table at event",
      "2 complimentary attendee tickets",
      "Social media mention (3 posts)",
      "Spotlight in email newsletter",
    ],
  },
  {
    name: "Inferno",
    price: "$3,500",
    color: "border-[#1A1A1A]",
    headerBg: "bg-[#1A1A1A]",
    headerText: "text-white",
    perks: [
      "All Blaze benefits",
      "Named session sponsorship",
      "Featured logo on all event materials",
      "5 min speaking opportunity at event",
      "4 complimentary attendee tickets",
      "Co-branded social content",
      "Year-round website logo placement",
    ],
  },
];

const reasons = [
  { icon: "💛", text: "Directly fund life-changing experiences for young girls" },
  { icon: "🌟", text: "Align your brand with empowerment, confidence, and leadership" },
  { icon: "📣", text: "Reach a highly engaged community of parents and families" },
  { icon: "🤝", text: "Show your values through meaningful community investment" },
];

export default function SponsorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F7836D] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
            Make a Difference
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Be a <span className="text-[#F7836D]">Sponsor</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            At HERizon Society, we believe confidence changes everything. When
            girls are surrounded by strong women who encourage and believe in
            them, they begin to believe in themselves too. But we can&rsquo;t
            do it alone.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#F7836D] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl sm:text-4xl font-black text-white leading-snug">
            Our 2026 conferences are designed to ignite courage, leadership,
            resilience, and connection in girls through powerful experiences,
            mentorship, movement, and meaningful conversations.
          </p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Why Partner With Us
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
              Your Investment Changes Lives
            </h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8">
              We are inviting passionate women, leaders, business owners,
              mentors, and community supporters to help us create a
              life-changing experience for the next generation. Sponsoring
              HERizon Society is more than advertising — it&rsquo;s a
              commitment to building a more confident, resilient generation of
              young women.
            </p>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r.text} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{r.icon}</span>
                  <p className="text-[#2D2D2D] leading-relaxed">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-10 text-center">
            <div className="font-serif text-7xl font-black text-[#F0EFEC] mb-2">500+</div>
            <p className="text-[#1A1A1A] font-bold text-xl mb-1">Girls Impacted</p>
            <p className="text-[#9B9B9B] text-sm mb-8">and growing every conference</p>
            <div className="font-serif text-5xl font-black text-[#F0EFEC] mb-2">10+</div>
            <p className="text-[#1A1A1A] font-bold text-xl mb-1">Conferences Hosted</p>
            <p className="text-[#9B9B9B] text-sm">across multiple cities</p>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
              Sponsorship Packages
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              Choose Your Level of Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl border-2 overflow-hidden card-hover relative ${tier.color}`}
              >
                {tier.badge && (
                  <div className="absolute top-4 right-4 bg-white text-[#F7836D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {tier.badge}
                  </div>
                )}
                <div className={`${tier.headerBg} px-8 py-8`}>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${tier.headerText === "text-white" ? "text-white/70" : "text-[#9B9B9B]"}`}>
                    Tier
                  </p>
                  <h3 className={`font-serif text-3xl font-black ${tier.headerText}`}>{tier.name}</h3>
                  <div className={`font-serif text-4xl font-black mt-3 ${tier.headerText}`}>
                    {tier.price}
                    <span className={`text-base font-sans font-medium ml-1 ${tier.headerText === "text-white" ? "text-white/60" : "text-[#9B9B9B]"}`}>
                      / event
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm">
                        <span className="text-[#F7836D] mt-0.5 shrink-0">✦</span>
                        <span className="text-[#2D2D2D]">{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center bg-[#1A1A1A] text-white font-semibold py-3 rounded-full hover:bg-[#2D2D2D] transition-colors text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#9B9B9B] text-sm mt-8">
            Custom packages available.{" "}
            <Link href="/contact" className="text-[#F7836D] hover:underline">
              Contact us
            </Link>{" "}
            to discuss your vision.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#FAF8F5] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-[#1A1A1A] mb-6">
            Ready to Ignite the Next Generation?
          </h2>
          <p className="text-[#9B9B9B] mb-8">
            Reach out and let&rsquo;s talk about how your sponsorship can
            transform the lives of young girls in our community.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#F7836D] text-white font-bold px-10 py-4 rounded-full hover:bg-[#E5614A] transition-colors"
          >
            Become a Sponsor Today
          </Link>
        </div>
      </section>
    </>
  );
}
