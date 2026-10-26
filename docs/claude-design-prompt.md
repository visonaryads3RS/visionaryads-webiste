Build a multi-page marketing website for VisionaryAds LLC, a one-person agency that runs Facebook and Instagram ad campaigns for construction, plumbing, and home-improvement businesses nationwide (based in North Carolina). The founder personally worked in all three trades before starting the company.

=== DESIGN DNA ===

Archetype: A fusion of cinematic dimensional depth with organic, vivid, living color. Think of looking into deep, clear ocean water lit from above (the Great Barrier Reef) crossed with the precision-engineered, restrained luxury of a Porsche 911 GT3RS — every element deliberate, nothing decorative for its own sake. This is a BRAND site: distinctive and a little bold, not a generic SaaS template.

Canvas: A deep graphite base, oklch(0.23 0.025 210) — NOT pure black, NOT navy-corporate. It should read like looking into deep water at depth.

Primary brand color (Committed weight, 30-60% of visual weight in key moments — hero, CTAs, section dividers): a vivid reef teal-cyan, oklch(0.68 0.14 200).

Secondary accent (used sparingly, like a single signature color on an otherwise restrained machine): a warm coral, oklch(0.72 0.16 40). Use it for one or two deliberate highlight moments, not everywhere.

Neutrals: tint all grays toward the same blue-teal hue (~210), chroma 0.008-0.015, never pure white or pure black. Light text on the dark canvas should sit around oklch(0.90 0.01 210) for body copy.

Typography: Pair a mechanical, technical, precision-feeling display face (something with the engineered confidence of a dashboard or a racing livery — NOT Inter, Geist, Satoshi, Space Grotesk, or Manrope) with a warmer, humanist body font for actual reading text. The contrast between the two fonts should do real work: sharp and engineered up top, warm and approachable in the body. Use real display-to-body size contrast (3-5x), tabular numerals for any stats, and give headings real weight contrast (900 against 300-400).

Layout: Asymmetric and full-bleed, photo-led. Real before-and-after job photography should be the actual content, shown large, not squeezed into icon cards. Use 70/30 or 80/20 proportions in every section — nothing centered and safe, no three-equal-column feature grids.

Motion: Tight and deliberate, like a suspension settling precisely into place — never bouncy, never elastic. Use ease-out-quart or ease-out-quint easing only. Budget 2-3 signature motion moments across the whole site (not motion on everything). Everything must no-op cleanly under prefers-reduced-motion.

Signature element: A before-and-after image slider/reveal as the centerpiece interactive element on the Home page — this is the actual creative pitch (job transformations) made interactive, not decoration. This is the ONE signature moment; do not also add a scroll-video, 3D configurator, or custom cursor on top of it.

Icons: One icon family only, one weight, uniform throughout. Use a technical/precision-feeling line-icon set (e.g. Tabler Icons) — NOT Lucide, NOT Heroicons, NOT emoji.

Texture: A very subtle grain/noise (2-4%) over the dark canvas, evoking brushed metal or fine material texture. No glassmorphism, no glowing neon blur effects.

Imagery: Real, documentary-style trade photography (construction, plumbing, home-improvement job sites and before/after results), graded cool and high-contrast toward the teal/graphite palette — not warm golden-hour, not stock-photo glossy. No flat-vector illustration (no unDraw/Corporate-Memphis style people).

Logo: No existing brand mark exists. Design a sharp, type-driven wordmark for "VisionaryAds" using the chosen display typeface and the teal/coral/graphite palette — not a complex illustrated icon.

=== DO NOT (hard bans) ===

- No side-stripe accent borders on cards or callouts
- No nested cards (a card inside a card)
- No gradient text (background-clip text effects)
- No purple/indigo/violet anywhere (this palette is teal/coral/graphite only)
- No glassmorphism as a default treatment
- No hero built from "big number + small label + gradient accent"
- No identical icon-heading-text feature cards repeated three times in a row
- No centered single-column hero with a vague headline, subhead, and two buttons
- No Inter, Roboto, Arial, Helvetica, Geist, Satoshi, Space Grotesk, Manrope, or Fraunces
- No pure #000 or #fff anywhere
- No fade-up-on-scroll as the only motion, and no bounce/elastic easing
- No emoji as icons, no Lucide/Heroicons default icon sets
- No stock "diverse team around a laptop" photography, no 3D floating blobs, no unDraw-style flat illustration
- No fake testimonials, fake client logos, or invented statistics
- No loading screen or page-wipe transition (not part of this brief)
- No literal, on-the-nose reef imagery (no coral/fish photos) and no literal car photos — the reef and GT3RS are feelings translated into color, precision, and restraint, not literal subject matter

=== TECHNICAL REQUIREMENTS (non-negotiable) ===

- Multi-page architecture (a separate HTML file per page, not single-page hash routing)
- Content visible in the HTML before JavaScript runs (not just a bare <div id="root">)
- Mobile-first responsive
- Each page gets its own <title>, meta description, canonical URL, and OpenGraph tags
- Compile JSX to JS at build time; no in-browser Babel (<script type="text/babel">)
- All animation no-ops under prefers-reduced-motion

=== PAGES AND REAL COPY (use this content exactly, do not invent placeholder copy) ===

--- HOME ---
Headline: Built By Someone Who's Done The Work
Sub-headline: I run Facebook and Instagram ads for construction, plumbing, and home-improvement businesses. Your vision for your business is what I build the whole strategy around, not a template I run for every client.

Section — Why VisionaryAds:
I started in construction. Somewhere along the way I built real respect for everyone doing this kind of work — plumbers, contractors, remodelers, the people who actually show up and get it done. What I loved most was watching someone's face when their vision finally became real: a finished room, a fixed problem, a job done right. That's why I started this company. Your vision for your business is the priority here, not a marketing template.

Section — Ads That Know Your Trade:
I build ads around the before and after: what the job looked like, and what it became once you were done. When people see real work finished right, they start picturing what they could build next. That's what turns a scroll into a lead.
[This section should host the before-and-after slider signature element.]

Section — Who I Work With:
I work with construction, plumbing, and home-improvement businesses of any size. If you've already got a few jobs behind you, or you're just starting out with real ad budget set aside, we're a fit.

Section — Get Started:
Every partnership is priced around your business, a flat retainer or a percentage of ad spend. I'll walk through what makes sense once I understand where you're at. Fill out the form below and I'll follow up personally.
[CTA button to the Contact/Apply page or an embedded form]

--- ABOUT ---
I started in construction. Over the years I worked across construction, plumbing, and home improvement, and I built real respect for the people doing this work — the plumbers, the contractors, the remodelers, the ones who actually show up and get it done right.

What stuck with me most was the moment right after a job wrapped: seeing someone's face when their vision finally became real. A finished room. A problem solved. A house that finally worked the way it was supposed to.

I started VisionaryAds so that feeling could reach more people. Not by running a marketing template that treats every trade the same, but by building ads around the real work getting done, so more people see their own vision and get excited to build it.

Today it's just me running this company. That means every account gets my direct attention, not a handoff to a junior after the sales call.

--- SERVICES ---
Heading: Ad Management — How It Works
1. Fill out the form below. I'll email you back to set up an actual call — not a generic sales pitch, a real conversation.
2. On that call, I want to hear where your business is actually struggling. Mostly I'm listening.
3. Once I know your business, I'll put together a rough draft and walk you through it on a video call, so you see exactly what I'm planning before anything goes live.
4. From there, we run it. Some contractors sign on for a set number of months. Others start with a trial period, still a retainer, no contract, and we check back in after a few months to see if it's still the right fit.

Photos and video: Send me what you've got from finished jobs, or if I have the time, I'll come shoot it myself.

Heading: Website Builds
A website build is a flat $1,000, built page by page around your business, not a template. Turnaround is usually 3 to 5 business days. If you want it kept up over time, ongoing maintenance is $250 a month, optional, never required.

Once your site is live and actually working for you, that's usually when it makes sense to talk about ad management, so the people who land on it are people who were looking for you in the first place.

--- CONTACT / APPLY ---
A form with these fields: Name, Business name, Trade (construction / plumbing / home improvement), City/State, "A few completed jobs, or starting fresh with real ad budget set aside?", Rough monthly ad budget, Email, Best way to reach you.
Public contact email displayed: visionaryads@yahoo.com
No phone number listed.

--- PRIVACY and TERMS ---
Standard boilerplate legal pages for a lead-generation site that only collects contact-form information. Keep them simple and readable, not dense legalese.
