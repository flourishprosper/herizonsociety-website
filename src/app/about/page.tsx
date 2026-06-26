import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Herizon Society",
  description:
    "Learn who we are, why we started Herizon, and the mission and values that guide everything we do.",
};

const coreValues = [
  {
    number: "01",
    title: "Confidence",
    icon: "💡",
    description:
      "Helping girls believe in themselves. Real confidence isn't handed to you. It's built through the right experiences, the right language, and the right community.",
    concepts: [
      "I Am statements & personal affirmations",
      "Recognizing & reframing self-doubt",
      "Emotional intelligence & self-awareness",
      "Breaking through limiting beliefs",
      "The courage to be seen",
    ],
  },
  {
    number: "02",
    title: "Courage",
    icon: "🦁",
    description:
      "Encouraging girls to step outside their comfort zones. Growth lives just beyond the edge of comfortable. We help girls get there.",
    concepts: [
      "Stepping into uncomfortable growth",
      "Trying new things fearlessly",
      "Speaking up and standing out",
      "Resilience through challenges",
      "Owning your story",
    ],
  },
  {
    number: "03",
    title: "Community",
    icon: "🤝",
    description:
      "Creating lifelong friendships and meaningful connections. The people around you shape what you believe is possible.",
    concepts: [
      "Mentorship from women leaders",
      "Peer community & sisterhood",
      "Meaningful real-world networking",
      "Relationships built on shared values",
      "A space where you truly belong",
    ],
  },
  {
    number: "04",
    title: "Leadership",
    icon: "🏆",
    description:
      "Developing tomorrow's leaders. Leadership isn't a title. It's a way of showing up. We help girls find their voice and step into any room ready to lead.",
    concepts: [
      "Public speaking & using your voice",
      "Goal-setting & personal accountability",
      "Real-world project experience",
      "Decision-making under pressure",
      "Leading with integrity",
    ],
  },
  {
    number: "05",
    title: "Opportunity",
    icon: "🌟",
    description:
      "Introducing girls to careers, businesses, and experiences that expand their horizons. We open doors girls didn't even know existed.",
    concepts: [
      "Career exploration & industry exposure",
      "Entrepreneurship & business basics",
      "Networking with professionals",
      "Access to scholarships & programs",
      "Expanding what seems possible",
    ],
  },
  {
    number: "06",
    title: "Kindness",
    icon: "💛",
    description:
      "Supporting one another through encouragement and respect. We build a community where every girl feels celebrated and safe.",
    concepts: [
      "Uplifting every voice in the room",
      "Practicing empathy & compassion",
      "Creating safe, judgment-free spaces",
      "Celebrating each other's wins",
      "Building each other up",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            About Herizon
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Helping Girls See What&rsquo;s{" "}
            <span className="text-[#FF7477]">Possible</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-2xl mx-auto leading-relaxed">
            We&rsquo;re building the community we wish we&rsquo;d had — a place
            where girls ages 12&ndash;18 can build confidence, find their voice,
            and discover what&rsquo;s possible for their future.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            Our Story
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-10 text-center">
            We&rsquo;re Building the Community We Wish We&rsquo;d Had.
          </h2>
          <div className="space-y-6 text-[#2D2D2D] leading-relaxed text-lg">
            <p>
              Herizon began with a simple conversation between two women who asked the same question:
            </p>
            <p className="font-serif text-2xl font-bold text-[#1A1A1A] text-center py-4">
              &ldquo;What if we&rsquo;d had this growing up?&rdquo;
            </p>
            <p>
              Like so many girls, we spent our teenage years figuring life out as we went. We learned through trial and error, searched for role models, and discovered confidence one challenge at a time. Looking back, we often wonder how different those years might have been if we&rsquo;d had mentors, a supportive community, and opportunities to explore who we could become.
            </p>
            <p>
              We know what it&rsquo;s like to question yourself, wonder if you&rsquo;re on the right path, and wish someone had been there to encourage you, open a door, or simply remind you that you&rsquo;re capable of more than you realize.
            </p>
            <p className="font-semibold text-[#1A1A1A]">
              That&rsquo;s why we created Herizon.
            </p>
            <p>
              We&rsquo;re building the community we wish we&rsquo;d had — a place where girls ages 12&ndash;18 can build confidence, connect with inspiring women, develop leadership skills, explore new opportunities, and discover what&rsquo;s possible for their future.
            </p>
            <p className="font-semibold text-[#1A1A1A]">
              Because growing up shouldn&rsquo;t mean figuring everything out alone.
            </p>
            <div className="border-l-4 border-[#FF7477] pl-6 space-y-2 my-8">
              <p>Every girl deserves guidance.</p>
              <p>Every girl deserves encouragement.</p>
              <p>Every girl deserves someone who believes in her before she fully believes in herself.</p>
            </div>
            <p className="font-semibold text-[#1A1A1A] text-center text-xl">
              At Herizon, we&rsquo;re creating that community, one girl at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight mb-6">
              Expanding Horizons. Building Confidence.
            </h2>
            <div className="space-y-5 text-[#2D2D2D] leading-relaxed">
              <p>
                Herizon empowers girls ages 12&ndash;18 to discover their strengths,
                build confidence, and pursue a future without limits.
              </p>
              <p>
                Through mentorship, leadership, entrepreneurship, education, and
                meaningful community experiences, we help girls develop the
                skills, relationships, and self-belief they need to navigate
                life with confidence and purpose.
              </p>
              <p>
                We believe confidence isn&rsquo;t something girls are born with.
                It&rsquo;s something they build through encouragement,
                opportunity, and experience. Our mission is to make sure every
                girl who joins Herizon leaves{" "}
                <strong>
                  believing in herself a little more than she did before.
                </strong>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-10">
            <div className="font-serif text-7xl font-black text-[#F0EFEC] mb-4">
              &ldquo;
            </div>
            <blockquote className="font-serif text-2xl font-bold text-[#1A1A1A] leading-snug mb-6">
              When girls know who they are and what they&rsquo;re capable of,
              they change everything.
            </blockquote>
            <p className="text-[#9B9B9B] text-sm uppercase tracking-wider">
              Herizon Society
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-[#FF7477] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
            Our Vision
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-black leading-tight mb-10">
            A Future Where Every Girl Knows What&rsquo;s Possible.
          </h2>
          <div className="space-y-5 text-white/90 text-lg leading-relaxed text-left">
            <p>
              We envision a future where every girl has access to inspiring
              mentors, meaningful opportunities, and a community that believes
              in her potential.
            </p>
            <p>
              Herizon begins in the San Gabriel Valley, but our vision reaches
              far beyond one city. We hope to build a movement that connects
              girls with women who encourage, guide, and inspire them to dream
              bigger, lead with confidence, and create lives filled with purpose.
            </p>
            <p>
              Because when one girl discovers her potential, the impact reaches
              far beyond her. It strengthens families, communities, and future
              generations.
            </p>
            <p className="font-semibold text-white text-center text-xl pt-4">
              We&rsquo;re not just creating events. We&rsquo;re building a
              community. We&rsquo;re opening doors. We&rsquo;re expanding
              horizons — and helping the next generation grow into confident
              leaders who know they belong wherever their dreams take them.
            </p>
          </div>
        </div>
      </section>

      {/* Six Core Values */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] leading-tight">
              Six Core Values. One Mission.
            </h2>
            <p className="text-[#9B9B9B] mt-4 max-w-xl mx-auto">
              Every experience at Herizon is built on these six values — the
              foundation that creates truly confident, connected young leaders.
            </p>
          </div>
          <div className="space-y-8">
            {coreValues.map((value, i) => (
              <div
                key={value.number}
                className={`rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-[#1A1A1A] text-white"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{value.icon}</span>
                    <span
                      className={`font-serif text-5xl font-black ${
                        i % 2 === 0 ? "text-[#F0EFEC]" : "text-white/20"
                      }`}
                    >
                      {value.number}
                    </span>
                  </div>
                  <h3
                    className={`font-serif text-3xl font-bold mb-4 ${
                      i % 2 === 0 ? "text-[#1A1A1A]" : "text-white"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      i % 2 === 0 ? "text-[#2D2D2D]" : "text-[#9B9B9B]"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
                <div>
                  <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
                    What Girls Experience
                  </p>
                  <ul className="space-y-3">
                    {value.concepts.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <span className="text-[#FF7477] mt-0.5">✦</span>
                        <span
                          className={`text-sm ${
                            i % 2 === 0 ? "text-[#2D2D2D]" : "text-[#9B9B9B]"
                          }`}
                        >
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF8F5] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-black text-[#1A1A1A] mb-6">
            Ready to Be Part of Something{" "}
            <span className="text-[#FF7477]">Bigger</span>?
          </h2>
          <p className="text-[#9B9B9B] mb-8 leading-relaxed">
            Join us at an upcoming event and give the girl in your life access
            to the community, mentorship, and experiences that will shape who
            she becomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-[#FF7477] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#E85F62] transition-colors"
            >
              Join Now
            </Link>
            <Link
              href="/events"
              className="border border-[#E8E6E2] text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:border-[#1A1A1A] transition-colors"
            >
              Find an Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
