import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

const pageTitle = "Contact Us";
const pageDescription =
  "Get in touch with Herizon Society for event inquiries, mentorship, sponsorships, or partnerships for girls ages 12 to 18.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/contact",
});

const contactOptions = [
  {
    icon: "📅",
    title: "Attend an Experience",
    desc: "Have questions about an upcoming Herizon experience? We&rsquo;d love to help you find the right event and answer any questions before you join us.",
  },
  {
    icon: "🤝",
    title: "Become a Mentor or Volunteer",
    desc: "Interested in mentoring girls or volunteering at a Herizon experience? We&rsquo;d love to learn more about you.",
  },
  {
    icon: "💗",
    title: "Partner With Herizon",
    desc: "Schools, nonprofits, businesses, and community organizations are invited to collaborate with us to expand opportunities for girls.",
  },
  {
    icon: "⭐",
    title: "Sponsorship Opportunities",
    desc: "Help make Herizon experiences accessible to more girls while investing in the next generation of confident leaders.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          createWebPageSchema({
            title: `${pageTitle} | Herizon Society`,
            description: pageDescription,
            path: "/contact",
            type: "ContactPage",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[#FF7477] opacity-10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
            We&rsquo;d Love to Hear From You
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl font-black text-white leading-tight mb-6">
            Get In <span className="text-[#FF7477]">Touch</span>
          </h1>
          <p className="text-[#9B9B9B] text-xl max-w-xl mx-auto leading-relaxed">
            Whether you&rsquo;re a parent, mentor, volunteer, sponsor, school,
            or community partner, we&rsquo;d love to hear from you. Whether you
            have a question or want to get involved, we&rsquo;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-[#FAF8F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((opt) => (
              <div key={opt.title} className="bg-white rounded-2xl border border-[#E8E6E2] p-6 text-center card-hover">
                <span className="text-4xl block mb-3">{opt.icon}</span>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">{opt.title}</h3>
                <p
                  className="text-[#9B9B9B] text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: opt.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Send a Message
            </p>
            <h2 className="font-serif text-4xl font-black text-[#1A1A1A] mb-8 leading-tight">
              How Can We Help?
            </h2>
            <form className="space-y-5" action="#" method="post">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    First Name <span className="text-[#FF7477]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7477] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                    Last Name <span className="text-[#FF7477]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7477] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Email Address <span className="text-[#FF7477]">*</span>
                </label>
                <input
                  type="email"
                  required
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
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  How Can We Help You?
                </label>
                <select className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm text-[#2D2D2D] focus:outline-none focus:border-[#FF7477] transition-colors bg-white">
                  <option value="">Select a topic</option>
                  <option value="attend">Attend an Experience</option>
                  <option value="mentor">Become a Mentor</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="school">Bring Herizon to My School or Community</option>
                  <option value="general">General Question</option>
                  <option value="contact">Contact Info</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                  Message <span className="text-[#FF7477]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF7477] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF7477] text-white font-bold py-4 rounded-full hover:bg-[#E85F62] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-10">
            <div>
              <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
                Contact Info
              </p>
              <h2 className="font-serif text-3xl font-black text-[#1A1A1A] mb-6">
                Reach Out Directly
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">📧</span>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Email</p>
                    <a href="mailto:hello@herizonsociety.com" className="text-[#FF7477] hover:underline text-sm">
                      hello@herizonsociety.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">📸</span>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Instagram</p>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FF7477] hover:underline text-sm">
                      @herizonsociety
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">📍</span>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">Serving</p>
                    <p className="text-[#9B9B9B] text-sm">San Gabriel Valley</p>
                    <p className="text-[#9B9B9B] text-sm">Expanding throughout Southern California</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-[#FAF8F5] rounded-2xl border border-[#E8E6E2] p-8">
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">
                When Will We Reply?
              </h3>
              <p className="text-[#9B9B9B] text-sm leading-relaxed">
                We typically respond within 1 business day. For urgent
                matters, like an event coming up soon, reach out on Instagram
                for a faster response.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-5">
                Explore
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Upcoming Experiences", href: "/events" },
                  { label: "How Herizon Works", href: "/workshops" },
                  { label: "Become a Mentor", href: "/mentorship" },
                  { label: "Volunteer", href: "/volunteer" },
                  { label: "Partner With Us", href: "/sponsor" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between text-sm text-[#9B9B9B] hover:text-white transition-colors group py-1"
                  >
                    {link.label}
                    <span className="text-[#FF7477] group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional CTA */}
      <section className="bg-[#FF7477] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Ready to Start the Conversation?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            Every meaningful journey begins with a simple hello.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Whether you&rsquo;re looking to register your daughter, become a
            mentor, volunteer your time, or partner with Herizon, we&rsquo;d
            love to connect and learn how we can build something meaningful
            together.
          </p>
          <a
            href="mailto:hello@herizonsociety.com"
            className="inline-block bg-white text-[#FF7477] font-bold px-10 py-4 rounded-full hover:bg-[#FAF8F5] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
