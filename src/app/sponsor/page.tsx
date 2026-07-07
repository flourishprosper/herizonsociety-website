import Link from "next/link";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

const pageTitle = "Be a Sponsor";
const pageDescription =
  "Sponsor a Herizon Signature Experience and help create the mentorship, leadership, and community that girls ages 12 to 18 deserve.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/sponsor",
});

const tiers = [
  {
    name: "Ignite",
    price: "$500",
    color: "border-[#E8E6E2]",
    headerBg: "bg-[#FAF8F5]",
    headerText: "text-[#1A1A1A]",
    perks: [
      "Logo in Signature Experience program",
      "Social media mention (1 post)",
      "Certificate of sponsorship",
      "Thank you from stage",
    ],
  },
  {
    name: "Blaze",
    price: "$1,500",
    color: "border-[#FF7477]",
    headerBg: "bg-[#FF7477]",
    headerText: "text-white",
    badge: "Most Popular",
    perks: [
      "All Ignite benefits",
      "Logo on Signature Experience banner",
      "Vendor/display table at Signature Experience",
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
      "Featured logo on all Signature Experience materials",
      "5 min speaking opportunity at Signature Experience",
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
      <SeoJsonLd
        data={[
          createWebPageSchema({
            title: `${pageTitle} | Herizon Society`,
            description: pageDescription,
            path: "/sponsor",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Sponsor", path: "/sponsor" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Make a Difference
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Be a <span className="text-[#FF7477]">Sponsor</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            At Herizon Society, we believe what surrounds a girl shapes who
            she becomes. When girls have access to mentors, real experiences,
            and a community that sees their potential, they begin to see it
            themselves. But we can&rsquo;t build this alone.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#FF7477] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl sm:text-4xl font-black text-white leading-snug">
            Our 2026 events are designed to build confidence, inspire
            leadership, and expand what's possible through mentorship,
            real-world experiences, and the connections that change everything.
          </p>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Why Partner With Us
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
              Your Investment Changes Lives
            </h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8">
              We are inviting passionate women, leaders, business owners,
              mentors, and community supporters to help us build the
              experiences girls ages 12-18 deserve. Sponsoring Herizon Society
              is more than brand visibility. It&rsquo;s a direct investment
              in the next generation of confident, connected leaders.
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
            <p className="text-[#9B9B9B] text-sm mb-8">and growing every experience</p>
            <div className="font-serif text-5xl font-black text-[#F0EFEC] mb-2">10+</div>
            <p className="text-[#1A1A1A] font-bold text-xl mb-1">Experiences Hosted</p>
            <p className="text-[#9B9B9B] text-sm">across multiple cities</p>
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
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
                  <div className="absolute top-4 right-4 bg-white text-[#FF7477] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
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
                        <span className="text-[#FF7477] mt-0.5 shrink-0">✦</span>
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
            <Link href="/contact" className="text-[#FF7477] hover:underline">
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
            expand what's possible for the girls in our community.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-[#FF7477] text-white font-bold px-10 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
          >
            Become a Sponsor Today
          </Link>
        </div>
      </section>
    </>
  );
}
