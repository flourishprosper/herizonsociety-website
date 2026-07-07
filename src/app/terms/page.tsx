import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createWebPageSchema,
} from "@/lib/seo";

const pageTitle = "Terms of Use";
const pageDescription =
  "Read the Herizon Society terms of use covering website access, content usage, and participation expectations.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <SeoJsonLd
        data={[
          createWebPageSchema({
            title: `${pageTitle} | Herizon Society`,
            description: pageDescription,
            path: "/terms",
          }),
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" },
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
              Terms of Use
            </h1>
            <p className="text-[#9B9B9B] text-lg leading-relaxed">
              These terms outline how visitors may use the Herizon Society website and related materials.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-[#E8E6E2] p-8 sm:p-10 space-y-6 text-[#4A4A4A] leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">Website Use</h2>
              <p>
                Website content is provided for informational purposes and may be updated
                as programs, events, and offerings evolve.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">Intellectual Property</h2>
              <p>
                Unless otherwise noted, site copy, branding, and creative materials belong
                to Herizon Society and may not be reproduced without permission.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-3">Contact</h2>
              <p>
                Questions about these terms can be directed to hello@herizonsociety.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
