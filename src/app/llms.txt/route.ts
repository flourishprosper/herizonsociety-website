import { siteConfig, absoluteUrl } from "@/lib/seo";

export function GET() {
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Primary pages
- Home: ${absoluteUrl("/")}
- About: ${absoluteUrl("/about")}
- Events: ${absoluteUrl("/events")}
- How It Works: ${absoluteUrl("/workshops")}
- Mentorship: ${absoluteUrl("/mentorship")}
- Conversations: ${absoluteUrl("/conversations")}
- Volunteer: ${absoluteUrl("/volunteer")}
- Sponsor: ${absoluteUrl("/sponsor")}
- Partner Programs: ${absoluteUrl("/partners")}
- Referral Program: ${absoluteUrl("/referral")}
- Gallery: ${absoluteUrl("/gallery")}
- Blog: ${absoluteUrl("/blog")}
- Apply: ${absoluteUrl("/apply")}
- Contact: ${absoluteUrl("/contact")}

## Audience
- Girls ages 12 to 18
- Parents and families
- Mentors and volunteers
- Sponsors and community partners

## Topics
- Confidence building
- Leadership development
- Mentorship
- Community gatherings
- Signature experiences
- Real-world opportunities for girls

## Contact
- Email: ${siteConfig.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
