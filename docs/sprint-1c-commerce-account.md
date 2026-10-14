# Sprint 1C — Commerce + Search + Account Core

Status: **implemented, pending visual QA and secondary-page normalization**

## Goal

Keep the user inside one consistent KUBOR system after leaving Home / PLP / PDP. Cart, Search and Account now use the same shared shell, footer, type system, colors and interaction layer as the core commerce pages.

## Cart

File: `cart.html`

Implemented:

- shared `core-v4` header / mega / mobile menu / search / cart drawer / footer;
- dark page hero;
- editable cart items using the same `kubor-core-v4-cart` localStorage adapter;
- quantity +/- controls;
- remove item;
- subtotal and estimated total;
- free-shipping progress state;
- coupon UI + demo feedback;
- payment-method presentation;
- secure-checkout / shipping / returns / support trust strip;
- empty cart state;
- cross-sell card;
- responsive two-column → single-column layout.

Shopify mapping:

- UI should map to cart object + cart line item operations;
- checkout CTA hands off to native Shopify Checkout;
- promo-code behavior is visual-only in the HTML mockup and must use Shopify-supported discount behavior later.

## Search

File: `search.html`

Implemented:

- shared shell;
- large dark search hero;
- instant client-side mock filtering;
- popular-search chips;
- Products / Collections / Content tabs;
- product / collection / guide result cards;
- search-result count;
- no-results state with recovery actions;
- support / geometry / dealer content results;
- category sidebar;
- mobile-responsive grid.

Shopify mapping:

- drawer / page contract maps to Shopify Predictive Search API and search results template;
- product / collection / content grouping should remain consistent between predictive and full search.

## Account dashboard

File: `account.html`

Implemented:

- shared global shell + footer;
- account hero;
- sticky horizontally-scrollable account subnav;
- cards for Orders, Tracking, Wishlist, Warranties, Registered Bikes and Addresses;
- recent-order block;
- post-sale bicycle-registration panel;
- support / preferences shortcuts;
- Shopify architecture note inside mockup;
- responsive two-column → single-column behavior.

Shopify mapping:

- Orders and Addresses: Customer Accounts;
- Tracking: fulfillment data / tracking provider integration;
- Wishlist: app or customer-persistence layer;
- Registered bikes / serial numbers: app-backed KUBOR data;
- Warranties / claims: app-backed data + account extension;
- Support: Customer Account extension and/or external helpdesk integration.

## New shared files

- `sprint1c.css`
- `sprint1c.js`

`sprint1c.js` intentionally uses the same cart storage key as `core-v4.js` so cart state persists between Home / PLP / PDP / drawer / Cart page during mock review.

## Still pending

- `orders.html`
- `order-detail.html`
- `tracking.html`
- `addresses.html`
- `wishlist.html`
- `warranties.html`
- `registered-bikes.html`
- `support.html`
- `account-preferences.html`
- login / register / recover

These pages exist, but still need normalization onto the shared visual shell before they can be considered part of the final account experience.

## Next block

1. normalize all customer-account subpages;
2. normalize login/register/recovery;
3. normalize Compare / Wishlist / Help / FAQ / Contact / Dealers;
4. visual QA against approved screenshots;
5. final mobile and accessibility pass;
6. asset strategy and removal of temporary stock photography.
