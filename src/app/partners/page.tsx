import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Programs Herizon Society",
  description:
    "Herizon Society partners with mentors, coaches, speakers, and leaders who are committed to expanding what's possible for girls ages 12–18.",
};

const partnerTypes = [
  {
    icon: "🧘",
    type: "Mindset & Life Coaches",
    desc: "Certified coaches who guide girls through emotional intelligence, identity work, and the personal growth frameworks that actually stick.",
  },
  {
    icon: "🩺",
    type: "Therapists & Mental Health Professionals",
    desc: "Licensed professionals who contribute sessions, resources, and support for navigating anxiety, self-esteem, and peer dynamics.",
  },
  {
    icon: "🎤",
    type: "Speakers & Mentors",
    desc: "Women leaders who share their real stories of resilience, reinvention, and impact with girls who need to hear that it’s possible.",
  },
  {
    icon: "🏢",
    type: "Business & Career Leaders",
    desc: "Entrepreneurs, executives, and professionals who give girls a real look at what’s possible and how to get there.",
  },
  {
    icon: "🥋",
    type: "Wellness & Mental Health Professionals",
    desc: "Licensed therapists and wellness practitioners who contribute resources and sessions on mental health, resilience, and self-care for teen girls.",
  },
  {
    icon: "🏢",
    type: "Community Organizations",
    desc: "Schools, non-profits, and youth organizations that share our mission and help us reach the girls who need this community most.",
  },
];

const currentPartner = {
  name: "Inspired Soul Sessions",
  tagline: "Soulful Alignment & Transformation",
  bio: "Our partner is a Soulful Alignment & Transformation Coach, Integrative Therapist, Intuitive Mentor, Author, and Speaker. With decades of exploring energetic principles, spiritual growth, and counselling, she brings a passion for awakening the latent potential within each girl to truly become the fullest expression of herself stretching beyond limitations and opening hearts and minds to something greater.",
  expertise: [
    "Letting go of old paradigms",
    "Healing, forgiving, and growing",
    "CBT-based compassionate inquiry",
    "Conscious, purpose-driven living",
  ],
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FAF8F5] py-32 text-center relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Ecosystem
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-[#1A1A1A] leading-tight mb-6">
            Partner <span className="text-[#FF7477]">Programs</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            Herizon Society is stronger because of the remarkable women and
            organizations who believe in expanding what’s possible for girls ages 12–18.
          </p>
        </div>
      </section>

      {/* Current Featured Partner */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-3">
              Featured Partner
            </p>
            <h2 className="font-serif text-4xl font-black text-white">
              {currentPartner.name}
            </h2>
            <p className="text-[#9B9B9B] mt-2">{currentPartner.tagline}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-14 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#9B9B9B] leading-relaxed mb-6">{currentPartner.bio}</p>
              <Link
                href="/events"
                className="inline-flex bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
              >
                See Upcoming Events
              </Link>
            </div>
            <div>
              <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-5">
                Areas of Expertise
              </p>
              <ul className="space-y-4">
                {currentPartner.expertise.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <span className="text-[#FF7477] mt-0.5">✦</span>
                    <span className="text-[#9B9B9B] text-sm leading-relaxed">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types We Work With */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Who We Partner With
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A]">
              Expertise That Elevates Our Girls
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((p) => (
              <div key={p.type} className="bg-[#FAF8F5] rounded-2xl p-8 card-hover border border-[#E8E6E2]">
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">{p.type}</h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="bg-[#FF7477] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white mb-6">
            Want to Partner With Herizon?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            If you&rsquo;re a mentor, coach, speaker, business leader, or
            organization aligned with our mission of building confident young
            leaders we&rsquo;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-white text-[#FF7477] font-bold px-10 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
