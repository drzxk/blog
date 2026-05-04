import type { APIRoute } from "astro";

const robotsTxt = `
# BEGIN Cloudflare Managed content
User-agent: *
Disallow: /_astro/
Allow: /

Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}

Content-Signal: search=yes,ai-train=no
# END Cloudflare Managed content

# Internet Archive / archiving
User-agent: ia_archiver
Disallow: /

User-agent: archive.org_bot
Disallow: /

# Archiving / preservation
User-agent: heritrix
Disallow: /

User-agent: archivebot
Disallow: /

User-agent: wayback
Disallow: /

# Common Crawl
User-agent: CCBot
Disallow: /

# AI crawlers
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
