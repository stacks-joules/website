# Editing site copy

No CMS, no markdown content collection — all page copy lives in `src/` as
`.astro` and `.tsx` files. Edit those files directly.

## Where the copy lives

### One file per page — `src/pages/`

Copy sits **inline** in two places inside each `.astro` file: the `---`
frontmatter block at the top (text stored in JS arrays/objects like
`pathwayCards`, `content: "..."`) and the HTML template below it. Change the
strings in either spot.

| Page (live URL)         | File                                                          |
| ----------------------- | ------------------------------------------------------------- |
| Home                    | `src/pages/index.astro`                                       |
| About                   | `src/pages/about.astro`                                       |
| Curriculum              | `src/pages/curriculum.astro`                                  |
| Team                    | `src/pages/team.astro`                                        |
| Become a Student        | `src/pages/become-a-student.astro`                            |
| Employment Partnerships | `src/pages/employment-partnerships.astro`                     |
| Donate                  | `src/pages/donate.astro`                                      |
| Support / Mentors       | `src/pages/support-mentors.astro`                             |
| FAQ                     | `src/pages/frequently-asked-questions-stacksjoules.astro`     |
| 404                     | `src/pages/404.astro`                                         |

SEO / GEO landing pages (same pattern):

- `src/pages/nyc-building-automation-training.astro`
- `src/pages/charlotte-building-automation-training.astro`
- `src/pages/how-to-get-into-building-automation-nyc.astro`
- `src/pages/can-you-get-a-bas-job-with-no-experience.astro`
- `src/pages/controls-technician-salary-training-path.astro`
- `src/pages/what-is-building-automation-how-to-learn-it.astro`

### Shared copy that appears on multiple pages — `src/components/sections/`

Edit the `.tsx` (the matching `.module.css` is styling only, not copy):

- `ContactSection.tsx` — contact / CTA block
- `Infographic.tsx` — impact-stat numbers and labels
- `EmployerGrid.tsx` — employer logos section
- `NewsletterSignup.tsx`
- `TransparencyBadges.tsx`

### Site-wide values — `src/data/site.ts`

Things that repeat across pages (e.g. `donationLink`). Check here before
editing the same value on multiple pages.

## Opening files in BBEdit

Install the CLI once: in BBEdit, **BBEdit menu -> Install Command Line
Tools...**, then authenticate. After that:

```
bbedit ~/website
bbedit ~/website/src/pages/index.astro
bbedit ~/website/src/pages/index.astro ~/website/src/pages/about.astro
```

`bbedit ~/website` opens the repo as a project window with the file sidebar.

Without installing the CLI, use Finder's `open`:

```
open -a BBEdit ~/website
open -a BBEdit ~/website/src/pages/index.astro
```

**Find a phrase across the whole site:** Multi-File Search (Cmd-Shift-F), set
the search folder to `~/website/src`. Best way to locate copy when you don't
know which page it's on.

`.astro` files open as HTML/text. For syntax coloring, set the language to
HTML in the status bar at the bottom of the window.

## Preview and deploy

```
cd ~/website
npm run dev
```

Open the local URL it prints. The dev server hot-reloads as BBEdit saves, so
keep BBEdit and the browser side by side. When the copy looks right:

```
git add -A
git commit -m "your message"
git push origin main
```

Netlify deploys from `main`.

## Source-of-truth reminder

Copy here is the **propagation target**. The canonical docs in the Copy
Wrangler workspace are the source of truth — edit those first, then propagate
here. Every impact number must match `impact-stats.md`; never reintroduce the
retired figures (98%, $28, 76%, 500+).
