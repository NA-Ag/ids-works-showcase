# Immediate Plan & Action Items

This document outlines the step-by-step strategy for launching IDS Works and executing the sales outreach to private schools in the Interlomas, Bosques, and Santa Fe areas.

## Phase 1: Launch Preparation (Next 48 Hours)

*   [ ] **Deploy the Showcase:** Push this monolithic repository to a private GitHub repository. Connect it to Vercel/Netlify for a live, blazing-fast staging environment.
*   [ ] **Acquire the Domain:** Purchase a professional agency domain via IONOS (e.g., `idsworks.mx` or `ids-sistemas.com`). Point the DNS to the Vercel/Netlify deployment.
*   [ ] **Set up Professional Email:** Create an email address linked to the domain (e.g., `contacto@idsworks.mx`) via IONOS or Microsoft 365. Do not use personal Gmail accounts for outreach.
*   [ ] **Generate Sales Assets:** Run `node generate_pdf.cjs` to generate the high-quality technical brochures. Print physical copies on premium paper for in-person drops.

## Phase 2: The Outreach Strategy (Post-Semana Santa)

*   [ ] **Target Identification:** Build a list of private schools in the target areas, specifically identifying the Director General or Head of Admissions.
*   [ ] **The "Audit" Email:** Draft cold emails offering a free infrastructure audit, highlighting the slow load times and vulnerabilities of their current (likely WordPress) setups.
*   [ ] **The "Demo Link" Approach:** Include direct links to the interactive demos in the outreach:
    *   *High-end Kindergarten:* `idsworks.mx/demos/lite?view=kinder`
    *   *Large K-12:* `idsworks.mx/demos/integrated`
*   [ ] **In-Person Drops:** Deliver the physical printed brochures directly to the reception of the target schools, addressed to the Director General.

## Phase 3: The Sales Pitch (The "Walk Away" Model)

*   [ ] **The Problem:** Emphasize the issues with current agency models: high monthly retainers (OpEx), slow response times, and lack of data sovereignty.
*   [ ] **The Solution:** Pitch IDS Works as a one-time CapEx investment. We build elite, secure (Jamstack) infrastructure integrated with Microsoft 365, and then **hand over the keys**. No monthly fees. Total ownership.
*   [ ] **The Urgency:** Highlight that due to the custom nature of the builds, IDS Works only accepts a limited number of schools per cycle (e.g., booking now for the August 2026 school year).

## Phase 4: Invoicing & Operations (Upon Agreement)

Once a school agrees to a tier (e.g., Standard at $300,000 MXN), the payment structure is 50% upfront, 50% upon delivery. Because the total project scope and price are known from the beginning, the most efficient way to invoice in Mexico (SAT CFDI 4.0) is via **Pago en Parcialidades o Diferido (PPD)**.

### Step-by-Step SAT Invoicing (PPD Method)

*   [ ] **1. Emitir la Factura Global (Por el 100% del proyecto):**
    *   **Método de Pago:** `PPD` (Pago en parcialidades o diferido).
    *   **Forma de Pago:** `99` (Por definir).
    *   **Monto:** El total del proyecto (ej. $300,000 MXN + IVA).
    *   *Nota:* Esta factura ampara el total del contrato pero aún no genera el pago de impuestos, ya que el dinero no ha ingresado.
*   [ ] **2. Recibir el Anticipo (50%):**
    *   Al recibir el primer depósito (ej. $150,000 MXN + IVA).
*   [ ] **3. Emitir el Primer Complemento de Pago (REP):**
    *   Emitir un Recibo Electrónico de Pago ligado a la Factura Global (PPD) inicial.
    *   Declarar el monto recibido. Aquí es donde se causa el IVA y el ISR correspondientes a esa fracción.
    *   *Atención RESICO:* Si eres Persona Física en el Régimen Simplificado de Confianza (RESICO) y facturas a una escuela (Persona Moral), asegúrate de que el comprobante refleje la retención del **1.25% de ISR**.
*   [ ] **4. Ejecutar el Proyecto (Development & Handoff):**
    *   Clone the required template, configure `schoolConfig.ts`, set up the `.edu.mx` domain, and configure Microsoft 365 (See `/docs/ARCHITECTURE.md`).
*   [ ] **5. Recibir el Pago Final (50%):**
    *   Al entregar el proyecto y transferir las cuentas (The "Flip").
*   [ ] **6. Emitir el Segundo Complemento de Pago (REP):**
    *   Emitir el segundo y último Recibo Electrónico de Pago ligado a la Factura Global original, saldando la cuenta al 100%.