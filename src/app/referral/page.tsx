import Link from "next/link";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

const pageTitle = "LeadHER Referral Squad";
const pageDescription =
  "Join the Herizon LeadHER Referral Squad. Invite girls ages 12 to 18 to a Herizon Signature Experience and earn exclusive merch for growing the community.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/referral",
});

const tiers = [
  {
    friends: 3,
    reward: "Exclusive LeadHER T-Shirt",
    icon: "👕",
    desc: "Bring 3 girls to a Herizon Signature Experience and earn our exclusive LeadHER tee.",
    color: "bg-[#FAF8F5] border-[#E8E6E2]",
  },
  {
    friends: 5,
    reward: "LeadHER T-Shirt + Swag Bag",
    icon: "🎒",
    desc: "Bring 5 girls and earn the T-Shirt AND a full Herizon Swag Bag packed with exclusive goodies.",
    color: "bg-[#FF7477]/10 border-[#FF7477]/30",
    featured: true,
  },
  {
    friends: 8,
    reward: "T-Shirt + Swag Bag + Hoodie",
    icon: "🧥",
    desc: "Bring 8 girls the full squad. T-Shirt, Swag Bag, AND an exclusive Herizon Hoodie. You’re officially a LeadHER.",
    color: "bg-[#1A1A1A] border-[#1A1A1A]",
    dark: true,
  },
];

const steps = [
  { step: "01", title: "Fill Out the Form", desc: "Register below and get your unique referral link instantly." },
  { step: "02", title: "Share With Friends", desc: "Send your link to friends, post on social media, or text it to your squad." },
  { step: "03", title: "Girls Register", desc: "When girls register for a Herizon event using your link, they count toward your milestone." },
  { step: "04", title: "Earn Your Rewards", desc: "Hit your milestone and your exclusive merch will be waiting for you at the event." },
];

export default function ReferralPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          createWebPageSchema({
            title: `${pageTitle} | Herizon Society`,
            description: pageDescription,
            path: "/referral",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "LeadHER Referral Squad", path: "/referral" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Bring Your Crew
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Be a <span className="text-[#FF7477]">LeadHER</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            The best communities grow through the people in them. Get your
            referral link, invite girls who need this, and earn exclusive
            rewards for expanding the Herizon circle.
          </p>
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              The Rewards
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              The More You Share, the More You Win
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.friends}
                className={`rounded-3xl border-2 p-8 text-center card-hover ${tier.color}`}
              >
                {tier.featured && (
                  <span className="inline-block bg-[#FF7477] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                    Most Earned
                  </span>
                )}
                <div className="text-6xl mb-4">{tier.icon}</div>
                <div className={`font-serif text-5xl font-black mb-2 ${tier.dark ? "text-[#FF7477]" : "text-[#FF7477]"}`}>
                  {tier.friends}
                </div>
                <p className={`text-sm uppercase tracking-widest mb-4 ${tier.dark ? "text-[#9B9B9B]" : "text-[#9B9B9B]"}`}>
                  Friends
                </p>
                <h3 className={`font-serif text-2xl font-bold mb-4 ${tier.dark ? "text-white" : "text-[#1A1A1A]"}`}>
                  {tier.reward}
                </h3>
                <p className={`text-sm leading-relaxed ${tier.dark ? "text-[#9B9B9B]" : "text-[#9B9B9B]"}`}>
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              It&rsquo;s Easy
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="font-serif text-6xl font-black text-[#F0EFEC] mb-4">{s.step}</div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">{s.title}</h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up CTA */}
      <section className="bg-[#FF7477] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white mb-6">
            Get Your Referral Link
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Fill out the form below and we&rsquo;ll send your unique referral
            link. Start sharing, grow the community, and start earning.
          </p>
          <div className="bg-white rounded-3xl p-10 max-w-xl mx-auto text-left">
            <form className="space-y-5" action="/contact" method="get">
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7477] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7477] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7477] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF7477] text-white font-bold py-4 rounded-full hover:bg-[#E85F62] transition-colors"
              >
                Get My Referral Link
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
