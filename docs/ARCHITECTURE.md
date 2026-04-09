# IDS Works: Technical Architecture & The "Assembly Line"

This document outlines the technical strategy for rapidly building and handing over 10 to 30 high-ticket school websites as a solo developer with zero ongoing maintenance.

## 1. The Separation of Concerns: Showcase vs. Templates

Currently, `ids-works` is a monolithic repository. This is perfect for sales (you can show a client the pricing page and immediately drop them into a demo without a loading screen). However, **this repo is not what the client receives.**

To scale the agency model, the actual deliverables will be separate, clean repositories:
*   `ids-template-lite`
*   `ids-template-standard`
*   `ids-template-integrated`

## 2. Configuration-Driven Development
To avoid manually editing Tailwind classes across 50 components for every new client, the templates will rely on a single source of truth for customization.

Every template will have a `src/config/schoolConfig.ts` file:
```typescript
export const schoolConfig = {
  name: "Colegio IDS Bosques",
  domain: "idsbosques.edu.mx",
  tier: "standard",
  colors: {
    primary: "#005C97",
    secondary: "#FFD700",
  },
  integrations: {
    microsoftEntraTenantId: "YOUR_TENANT_ID"
  }
}
```
*   **The Goal:** Selling a "Lite" tier should only take 15 minutes of developer time. You clone the template, update this config file, swap out the images in `public/assets/`, and push to GitHub.

## 3. The CMS: Decap CMS (Formerly Netlify CMS)
You are selling a "Visual CMS" to schools without wanting to manage a database. The solution is **Decap CMS**.

*   **How it works:** It is a Git-based, headless CMS. It runs as a React app at `/admin` on the school's site.
*   **The Magic:** When a school administrator logs in via Microsoft Entra ID and changes the "Hero Image" or adds a news article, Decap CMS literally makes a `git commit` directly to the GitHub repository, saving the content as Markdown files.
*   **The Build:** That commit automatically triggers Vercel/Netlify to rebuild the site.
*   **Why it's perfect:** Zero database costs. Zero server maintenance. If the school breaks it, the history is in Git.

## 4. The Deployment & "Handoff" Flow

Since you are not providing a `.zip` file, but a living, breathing application, here is the exact standard operating procedure (SOP) when a client signs a contract:

### Phase 1: Staging (The First 50% Payment)
1.  **Clone Template:** Clone the required tier template to a private repo on *your* GitHub account (e.g., `github.com/YourOrg/Colegio-X-Staging`).
2.  **Customize:** Update `schoolConfig.ts` and initial assets.
3.  **Deploy to Vercel/Netlify:** Connect the repo to your own Vercel/Netlify account.
4.  **Present:** Show the client the live staging link (e.g., `colegio-x-staging.vercel.app`).

### Phase 2: Production Setup (Domain & Microsoft)
1.  **Domain:** Secure their `.edu.mx` domain via IONOS/Akky (See `EDU_MX_PROCESS.md`).
2.  **DNS:** Point the IONOS DNS (A Record and CNAME) to the Vercel/Netlify project.
3.  **Microsoft 365:** Setup their Entra ID / Office 365 free tier (See `MICROSOFT_SETUP.md`) and inject the production Tenant IDs into the Vercel/Netlify environment variables.

### Phase 3: The "Flip" (The Final 50% Payment & Handoff)
1.  **Payment:** Collect the final payment.
2.  **Transfer Repo:** Transfer ownership of the GitHub repository to the school's official GitHub account.
3.  **Transfer Hosting:** Transfer ownership of the Vercel/Netlify project to their account.
4.  **Deliver Manual:** Hand over the dynamically generated PDF Technical Manual containing all their keys, logins, and instructions.
5.  **Walk Away:** You are now completely hands-off. The infrastructure is sovereign to the school.