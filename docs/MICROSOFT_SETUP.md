# Microsoft 365 Education (A1 Free Tier) Setup Guide

This document outlines the process of securing and verifying the **Office 365 A1 (Free)** tier for educational institutions in Mexico. This is a massive selling point for the IDS Works packages, as it provides the school with enterprise-grade email (Exchange Online), Microsoft Teams for virtual classrooms, and 1TB of OneDrive storage per user at no monthly cost.

## 1. Eligibility Requirements
To qualify as a "Qualified Academic Institution" in Mexico:
*   The school must be recognized by the **Secretaría de Educación Pública (SEP)**.
*   Having a verified `.edu.mx` domain significantly speeds up the automatic verification process.
*   A dedicated school email address is required to start the trial.

## 2. The Verification Process

### Phase 1: Start the Free Trial
1.  Navigate to the [Microsoft Education Products Page](https://www.microsoft.com/education/products/office).
2.  Enter the school's email address and click **Get Started**.
3.  This creates a "Trial" tenant (Office 365 A1 Trial for Faculty/Students).
4.  You will set up an initial admin account (e.g., `admin@colegioids.onmicrosoft.com`).

### Phase 2: Add and Verify the School's Domain
1.  Log into the [Microsoft 365 Admin Center](https://admin.microsoft.com).
2.  Navigate to **Settings > Domains** and click **Add domain**.
3.  Enter the school's newly acquired domain (e.g., `colegioids.edu.mx`).
4.  Microsoft will ask you to verify ownership. They will provide a **TXT record** (e.g., `MS=ms12345678`).
5.  Go to the domain registrar (Akky or IONOS) and add this TXT record to the DNS settings.
6.  Return to Microsoft 365 and click **Verify**. (This may take up to 15 minutes to propagate).

### Phase 3: Academic Eligibility Verification
Once the `.edu.mx` domain is added, Microsoft's **Academic Verification Wizard** usually triggers automatically.
*   Check the **Billing** section on the Admin Center home page. It will show an eligibility status (e.g., "Pending").
*   **Automatic Verification:** If the `.edu.mx` domain is recognized in their database, verification can happen within hours.
*   **Manual Review:** If it triggers a manual review, Microsoft will email the admin asking for proof.

#### Required Documents for Manual Review
If Microsoft requests documentation, provide:
1.  A copy of the school's **RVOE** (Reconocimiento de Validez Oficial de Estudios) or SEP registration.
2.  An official letter on school letterhead stating the institution's name, address, and accreditation status.
3.  The link to the school's new official website (which IDS Works will have built).

*Manual review typically takes 3 to 10 business days.*

### Phase 4: Finalization & Licensing
1.  Once approved, the trial will automatically convert to the permanent, free **Office 365 A1** plan.
2.  You will now see two unlimited license blocks in the Billing section:
    *   *Office 365 A1 for Students*
    *   *Office 365 A1 for Faculty*
3.  You can now begin creating user accounts (or setting up Entra ID / Graph API provisioning for the higher IDS Works tiers) and assigning these free licenses.