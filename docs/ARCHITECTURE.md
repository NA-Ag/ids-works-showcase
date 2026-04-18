# IDS Works: Software Architecture & Distribution

This document outlines the technical strategy for building, distributing, and selling "Offline-First" educational software modules with perpetual licensing.

## 1. The Core Philosophy: "Pay Once, Own Forever"
We are moving away from the traditional SaaS (Software as a Service) model. Educational institutions are experiencing subscription fatigue and increasing concerns over cloud data privacy. 

Our value proposition is:
- **Zero Cloud:** Data never leaves the school's local area network (LAN).
- **Zero Monthly Fees:** The software is purchased once and owned perpetually.
- **Zero Ongoing Costs for Us:** We do not pay for cloud servers, database hosting, or third-party APIs.

## 2. Technical Stack

### The Software: Electron.js + Local Node.js
*   **Framework:** All applications will be built using Electron.js, allowing us to use web technologies (HTML, CSS, JavaScript/TypeScript) to create native desktop executables for Windows, macOS, and Linux.
*   **Database:** SQLite will be used for all local data storage. It is lightweight, serverless, and stores the entire database as a single file on the host machine.
*   **Local Networking:** For multi-user environments (e.g., the library or admin office), one computer will act as the "Host" running an internal Node.js/Express server. Other computers on the same network (LAN) will connect to it. A built-in "Connection Wizard" will guide users to enter the Host's IPv4 address.

### The Storefront & Distribution: GitHub ecosystem
*   **Sales Site:** This `ids-works-showcase` repository acts as the storefront. It is statically hosted for free on GitHub Pages at `idsworks.com.mx`.
*   **Software Distribution:** Compiled binaries (e.g., `.exe`, `.dmg`) will be hosted on GitHub Releases. When a user buys a module, they will be given a direct download link to the GitHub Release asset, ensuring we pay $0 for bandwidth.

## 3. The Sales & Fulfillment Funnel

To ensure the business operates as a passive income stream, the purchase and fulfillment process is 100% automated using Serverless Webhooks.

1.  **Purchase:** A school visits `idsworks.com.mx`, selects a module (e.g., "Core School Admin Suite"), and clicks "Comprar Módulo".
2.  **Payment Gateway:** They are redirected to a secure checkout hosted by **Mercado Pago**.
3.  **Webhook Trigger:** Upon successful payment, Mercado Pago sends an HTTP POST request (webhook) to a free Cloudflare Worker.
4.  **License Generation:** The Cloudflare Worker script receives the webhook, verifies the payment, and generates a unique cryptographic license key based on the purchased tier (e.g., valid for 20 local PCs).
5.  **Delivery:** The Cloudflare Worker uses a free email API (like Resend) to instantly email the school director their License Key, the GitHub download link, and the installation instructions.

## 4. Premium Web Services
As a secondary income stream, we continue to offer high-ticket Jamstack websites (Tier Lite and Tier Estándar). 
*   These are strictly source-code deliveries.
*   We build the site, transfer the GitHub repository to the client, and they handle their own domain and hosting setups. 
*   We no longer offer complex "Integrated" Microsoft Azure/Entra ID setups.