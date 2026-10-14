# Sprint 1C — Commerce + Search + Account Core

Status: **implemented, pending visual QA and support-page normalization**

## Goal

Keep the user inside one consistent KUBOR system after leaving Home / PLP / PDP. Cart, Search and the complete account core now use the same global shell, footer, typography, color system and interaction layer.

## Cart

File: `cart.html`

Implemented:

- shared `core-v4` shell;
- editable cart items using the same `kubor-core-v4-cart` adapter;
- quantity +/- and remove;
- subtotal / total;
- free-shipping progress;
- coupon demo state;
- payment presentation;
- cross-sell;
- secure-checkout trust row;
- empty-cart state;
- responsive layout.

## Search

File: `search.html`

Implemented:

- shared shell;
- search hero;
- instant mock filtering;
- popular chips;
- Products / Collections / Content tabs;
- product / collection / guide results;
- no-results recovery;
- category sidebar;
- responsive grid.

## Shared Account Shell

New file: `account-shell.js`

This is the mockup equivalent of a reusable include. It owns the account hero and account sub-navigation for:

- Summary
- Orders
- Tracking
- Addresses
- Wishlist
- Warranties
- Registered Bikes
- Support
- Preferences

The current page is automatically highlighted and marked with `aria-current`.

Shared styles: `account-flow.css`.

## Account pages normalized

### Dashboard
- `account.html`

### Orders
- `orders.html`
- `order-detail.html`
- `tracking.html`

### Customer data
- `addresses.html`
- `wishlist.html`
- `account-preferences.html`

### Post-sale ownership
- `registered-bikes.html`
- `warranties.html`
- `support.html`

### Authentication
- `login.html`
- `register.html`
- `recover.html`

## Account UX now represented

- order history;
- order detail;
- fulfillment / tracking timeline;
- addresses;
- wishlist;
- bicycle registration and serial number;
- warranty coverage and claim concept;
- technical-support case form;
- communication preferences;
- account login / register / recovery;
- responsive account navigation.

## Shopify ownership

- Orders / Addresses / authentication: Shopify Customer Accounts.
- Tracking: fulfillment data plus carrier/tracking integration.
- Wishlist: app/customer persistence.
- Registered Bikes / serial ownership: KUBOR app-backed data.
- Warranties / claims: KUBOR app-backed data + account extension.
- Support cases: Customer Account extension and/or helpdesk integration.

## Shared files introduced in Sprint 1C

- `sprint1c.css`
- `sprint1c.js`
- `account-shell.js`
- `account-flow.css`

## Still pending before account approval

- final visual QA at all target widths;
- form success/error/disabled states across every account form;
- actual auth flow behavior is intentionally not implemented in HTML;
- actual upload/claim/support persistence is app-backed future work;
- invoice/receipt download is still conceptual;
- accessibility focus-order pass;
- final account empty states for every subsection;
- confirm which Customer Account UI can be native vs extension-based during Liquid/app migration.

## Next block

1. normalize Compare / Help Center / FAQ / Contact / Dealers / Gift Card / All Collections;
2. normalize remaining discipline and brand landings;
3. visual QA against approved screenshots;
4. responsive/accessibility pass;
5. asset strategy and final product imagery;
6. performance/dependency cleanup.
