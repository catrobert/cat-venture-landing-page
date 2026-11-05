// ─────────────────────────────────────────────────────────────
//  Cat Robert – site settings. Edit these, nothing else needed.
// ─────────────────────────────────────────────────────────────
window.SITE = {
  name: 'Cat Robert',
  title: 'Mortgage Specialist',
  team: 'Venture Mortgages',
  brokerage: 'BRX Mortgage',          // BCFSA: brokerage name must appear
  licence: '· BCFSA Licence #MB602440',
  phone: '(778) 946-6690',
  email: 'cat@venturemortgages.com',
  booking: 'https://calendly.com/cat-venturemortgages/30min',

  // Meta pixel – one pixel for the whole site
  pixelId: '',                        // e.g. '123456789012345'

  // Links page – paste each URL; any left blank is hidden on the page
  instagram: 'https://www.instagram.com/mortgageswithcat/',
  facebook: 'https://www.facebook.com/cat.robert.391/',
  // group: 'buy' = "thinking about buying", 'own' = "already own a home", 'both' = shows in both
  links: [
    { group: 'own',  label: 'Grade My Mortgage',      note: 'Free check: how does your rate stack up?', url: '' },
    { group: 'buy',  label: 'How Much Can I Afford?', note: 'Your max purchase price',       url: '' },
    { group: 'buy',  label: 'Rent vs Buy',            note: 'Compare over time',             url: '' },
    { group: 'both', label: 'Fixed vs Variable',      note: 'Rate type scenarios',           url: '' },
    { group: 'own',  label: 'Penalty Calculator',     note: 'Cost to break your mortgage',   url: '' },
    { group: 'own',  label: 'Payment Reset',          note: 'What happens at renewal',       url: '' },
    { group: 'own',  label: 'Prepayment Planner',     note: 'Lump sums & payment increases', url: '' },
    { group: 'own',  label: 'Track My Mortgage',      note: 'Rate & renewal alerts',         url: '' },
    { group: 'both', label: 'All Calculators',        note: 'Every tool in one place',       url: '' }
  ]
};
