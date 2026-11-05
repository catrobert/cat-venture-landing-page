// ─────────────────────────────────────────────────────────────
//  Cat Robert – site settings. Edit these, nothing else needed.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: 'Cat Robert',
  title: 'Mortgage Specialist',
  team: 'Venture Mortgages',
  brokerage: 'BRX Mortgage',          // BCFSA: brokerage name must appear
  licence: '',                        // e.g. 'BCFSA Licence #X000000' – fill in before launch
  phone: '(778) 946-6690',
  email: 'cat@venturemortgages.com',
  booking: 'https://calendly.com/cat-venturemortgages/30min',

  // Lead delivery (Google Sheet via Apps Script web app)
  leadUrl: '',                        // paste the Apps Script /exec URL here
  leadToken: 'change-me-to-a-random-word', // must match SECRET in LeadIntake.gs

  // Meta pixel – one pixel for the whole site
  pixelId: '',                        // e.g. '123456789012345'

  // Affordability assumptions – update when rates move
  contractRate: 4.09,                 // best insured 5-yr fixed you can offer today (%)
  stressFloor: 5.25,                  // minimum qualifying rate (%)
  propertyTaxRate: 0.45,              // % of price per year (Kelowna-area estimate)
  heatMonthly: 100                    // lender standard heating allowance ($/mo)
};
