import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Programs — HERizon Society",
  description:
    "HERizon Society partners with wellness coaches, therapists, mentors, and community leaders to bring the best expertise to our girls.",
};

const partnerTypes = [
  {
    icon: "🧘",
    type: "Wellness & Mindset Coaches",
    desc: "Certified coaches who guide girls through emotional intelligence, gratitude practices, and personal growth frameworks.",
  },
  {
    icon: "🩺",
    type: "Therapists & Mental Health Professionals",
    desc: "Licensed professionals who contribute workshops, resources, and support for navigating anxiety, self-esteem, and peer dynamics.",
  },
  {
    icon: "🎤",
    type: "Speakers & Mentors",
    desc: "Inspiring women leaders who share their stories of resilience, confidence, and impact on conference stages and online.",
  },
  {
    icon: "🏃",
    type: "Fitness & Movement Experts",
    desc: "Personal trainers, yoga instructors, and wellness leaders who bring joyful, body-positive movement to our programs.",
  },
  {
    icon: "🥋",
    type: "Martial Arts Instructors",
    desc: "Certified martial arts practitioners who lead our self-defence curriculum and demonstrate strength through discipline.",
  },
  {
    icon: "🏢",
    type: "Community Organizations",
    desc: "Non-profits, schools, and youth organizations that share our mission and help us reach more girls across Southern California.",
  },
];

const currentPartner = {
  name: "Inspired Soul Sessions",
  tagline: "Soulful Alignment & Transformation",
  bio: "Our partner is a Soulful Alignment & Transformation Coach, Integrative Therapist, Intuitive Mentor, Author, and Speaker. With decades of exploring energetic principles, spiritual growth, and counselling, she brings a passion for awakening the latent potential within each girl to truly become the fullest expression of herself — stretching beyond limitations and opening hearts and minds to something greater.",
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
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F7836D] opacity-5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
            Our Ecosystem
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-[#1A1A1A] leading-tight mb-6">
            Partner <span className="text-[#F7836D]">Programs</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            HERizon Society is stronger because of the remarkable women and
            organizations who partner with us to make our programs world-class.
          </p>
        </div>
      </section>

      {/* Current Featured Partner */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-3">
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
                className="inline-flex bg-[#F7836D] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E5614A] transition-colors"
              >
                See Upcoming Events
              </Link>
            </div>
            <div>
              <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-5">
                Areas of Expertise
              </p>
              <ul className="space-y-4">
                {currentPartner.expertise.map((e) => (
                  <li key={e} className="flex items-start gap-3">
                    <span className="text-[#F7836D] mt-0.5">✦</span>
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
            <p className="text-[#F7836D] text-xs font-semibold uppercase tracking-widest mb-4">
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
      <section className="bg-[#F7836D] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white mb-6">
            Want to Partner With HERizon?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            If you&rsquo;re a coach, therapist, speaker, instructor, or
            organization aligned with our mission of empowering young girls —
            we&rsquo;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex bg-white text-[#F7836D] font-bold px-10 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
