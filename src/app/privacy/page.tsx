import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Review the Herizon Society privacy policy for information about how we handle contact submissions, community inquiries, and website usage data.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          createWebPageSchema({
            title: `${pageTitle} | Herizon Society`,
            description: pageDescription,
            path: "/privacy",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />
      <section className="bg-[#FAF8F5] py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center">
            <p className="text-[#FF7477] text-xs font-semibold uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-black text-[#1A1A1A] mb-6">
              Privacy Policy
            </h1>
            <p className="text-[#9B9B9B] text-lg leading-relaxed">
              Herizon Society respects your privacy and only collects the information
              needed to respond to inquiries, manage applications, and improve the website experience.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-8 sm:p-10 space-y-6 text-[#4A4A4A] leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">Information We Collect</h2>
              <p>
                We may collect contact details, inquiry details, application information,
                and limited technical analytics needed to understand website performance.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">How We Use Information</h2>
              <p>
                Information is used to respond to questions, coordinate events, review
                applications, communicate with families and partners, and improve the quality
                of the Herizon website and community experience.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">Contact</h2>
              <p>
                Questions about this policy can be sent to hello@herizonsociety.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
