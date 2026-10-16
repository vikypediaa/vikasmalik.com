# Start the build in Claude Code

**In the Claude desktop app (recommended):**
1. Open the Claude app and click the **Code** tab.
2. Choose **Local**, click **Select folder** and pick `Desktop/Projects/vikasmalik.com`.
3. Set the permission mode to **Manual** or **Plan** for the first step, then paste the prompt below.

**Or in a terminal:** `cd ~/Desktop/Projects/vikasmalik.com`, run `claude`, paste the prompt.

---

Read CLAUDE.md, then the spec it points to, then design/RidgelineA1.dc.html.

Build vikasmalik.com as specified. Work in this order and stop for my review after each step:

1. Write a short implementation plan (files, components, order of work) and wait for my OK.
2. Scaffold Next.js 16 + TypeScript + Tailwind v4 in this folder, set up the colour tokens and the three fonts from spec section 4, and show me it runs locally.
3. Build sections 00 to 03 to match the A1 design, including the TrailDeck shuffle and the Ridgeline SVG. Check it at 375px and 1440px.
4. Build sections 04, 05, the footer and the /privacy page in the same style, using the spec copy.
5. Run the section 7 checks (Lighthouse, contrast, keyboard, links) and list anything still on the section 8 placeholder list.

Do not deploy, create the GitHub repo or touch DNS until I say so.
