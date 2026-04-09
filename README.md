# IDS Works - Sistemas Educativos Soberanos

I.D.S Works is an educational technology agency model designed specifically for a solo developer. The goal is to build, sell, and hand off high-performance digital infrastructure to private educational institutions (targeting Interlomas, Bosques, and Santa Fe in Mexico) right before the new school year budgeting season.

## The Business Model: Build, Sell, and Walk Away
Instead of a low-monthly SaaS subscription (OpEx) that requires years of maintenance and support, IDS Works sells premium, custom-built web infrastructure as a high-ticket capital expenditure (CapEx). 

*   **Target:** 10 to 30 private schools.
*   **Payment Structure:** 50% upfront, 50% upon delivery and handoff.
*   **Maintenance:** Zero ongoing maintenance. The code, hosting, and domains are fully transferred to the client ("Soberanía" / Sovereignty).
*   **Purpose:** To finance a master's program and relocation abroad by selling high-value, turn-key solutions.
*   **Exit Strategy:** IDS Works will operate strictly until hitting a revenue cap of **$3,000,000 MXN (pre-tax)**. Once this target is reached, the agency will permanently close, the IONOS domain will be sold or retired, and the founder will transition entirely to their master's program.

## The Technology Stack
*   **Frontend Framework:** React 19 + TypeScript
*   **Build Tool:** Vite 6
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Internationalization:** i18next & react-i18next
*   **Routing:** React Router v7
*   **Content Management (CMS):** Decap CMS (Git-based Headless CMS, zero database required).
*   **Document Generation:** PDFKit (Node.js script for dynamic brochure generation)
*   **Hosting / Deployment:** Vercel or Netlify (for live staging and final delivery).

## The Monolithic Showcase (This Repository)
This specific repository is a **Monolithic Showcase** designed purely for sales pitches. It contains:
1.  **The Marketing Site:** The main landing pages, pricing, and services.
2.  **Interactive Tier Demos:** Live, embedded simulations of the three tiers:
    *   `Lite ($100,000 MXN)`: Security-focused, manual content updates, static generation.
    *   `Standard ($300,000 MXN)`: Bilingual frontend, Decap CMS (Visual Editor), Parent Portal.
    *   `Integrated ($450,000 MXN)`: Premium aesthetic, financial dashboard simulations, MS Graph automation concepts.

*Note: This repository is NOT what gets deployed to clients. For clients, we clone specific "Template" repositories and inject their data.*

## Getting Started (Local Development)

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Generate the Technical PDF Brochure:**
    ```bash
    node generate_pdf.cjs
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## Documentation
See the `/docs` folder for detailed standard operating procedures (SOPs) on how to execute this business model:
*   [Technical Architecture & Handoff Process](docs/ARCHITECTURE.md)
*   [How to Register an .edu.mx Domain (Akky)](docs/EDU_MX_PROCESS.md)
*   [How to Setup Microsoft 365 Education (Free Tier)](docs/MICROSOFT_SETUP.md)
*   [Tax & Invoicing Strategy (Mexico / SAT)](docs/TAX_STRATEGY.md)

---
*Developed by I.D.S Works SYSTEMS DIV.*