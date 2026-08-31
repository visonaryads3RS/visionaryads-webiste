# Real photos — where they go

Every placeholder box on the site is a live `<image-slot>` element with an `id`.
Drop a real photo in here, then set that same id's `src` in the matching HTML file
(or add a real `<img>` inside the tag) and the placeholder disappears automatically.

| id | Page | What it needs | Style note |
|---|---|---|---|
| `home-hero` | index.html | A wide job-site shot, you or a crew at work | Cool-graded, documentary — not posed/stock |
| `home-before` | index.html | Before half of the before/after slider | Unfinished/rough job |
| `home-after` | index.html | After half of the before/after slider | Finished result, same job as `home-before` if possible |
| `about-portrait` | about.html | A photo of you, ideally on a job site | This is the trust shot — real, not a studio headshot |
| `services-shoot` | services.html | Another finished-job shot, different from the Home ones | Keep the same cool-graded treatment for consistency |

**To swap one in**, find the matching tag (e.g. in index.html):
```html
<image-slot id="home-hero" placeholder="job-site photo — documentary, cool-graded"></image-slot>
```
and either add a `src`:
```html
<image-slot id="home-hero" src="assets/images/home-hero.jpg" alt="..."></image-slot>
```
or drop a real `<img>` inside it — either way works, the placeholder styling only shows
when there's no image present.

Keep files reasonably sized (compress before adding — see SOP Phase 7) and use `.webp`
where you can for faster load.
