import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Herizon Society",
  description:
    "Get in touch with Herizon Society for event inquiries, workshop registrations, mentorship, sponsorships, or partnerships for girls ages 12–18.",
};

const contactOptions = [
  {
    icon: "📅",
    title: "Events & Conferences",
    desc: "Ask about upcoming conference dates, ticket availability, or bringing Herizon to your city.",
  },
  {
    icon: "🏫",
    title: "Workshop Bookings",
    desc: "Book a Herizon Workshop for your school, youth organization, or community group.",
  },
  {
    icon: "🤝",
    title: "Sponsorships",
    desc: "Interested in sponsoring a conference? Let&rsquo;s talk about what&rsquo;s right for your business.",
  },
  {
    icon: "🌟",
    title: "Partnerships",
    desc: "Coaches, therapists, and speakers are welcome to reach out and explore a partnership with Herizon Society.",
  },
];

export default function ContactPage() {
  return (
    <>
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
            Whether you want to register a girl for an event, explore mentorship,
            ask about sponsorship, or just say hi. We're here.
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
                  I&rsquo;m Reaching Out About
                </label>
                <select className="w-full border border-[#E8E6E2] rounded-xl px-4 py-3 text-sm text-[#2D2D2D] focus:outline-none focus:border-[#FF7477] transition-colors bg-white">
                  <option value="">Select a topic</option>
                  <option value="event">Event / Conference</option>
                  <option value="workshop">Workshop Booking</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="referral">LeadHER Referral Squad</option>
                  <option value="other">Other</option>
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
                    <p className="font-semibold text-[#1A1A1A] text-sm">Based In</p>
                    <p className="text-[#9B9B9B] text-sm">Southern California, USA</p>
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
                We typically respond within 1-2 business days. For urgent
                matters, like an event coming up soon, reach out on Instagram
                for a faster response.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-5">
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Upcoming Events", href: "/events" },
                  { label: "Workshop Schedule", href: "/workshops" },
                  { label: "Sponsorship Packages", href: "/sponsor" },
                  { label: "LeadHER Referral Squad", href: "/referral" },
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
    </>
  );
}
