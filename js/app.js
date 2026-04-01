/* APP.JS — Odisha Bikes
   Single JS file for all pages. Each section checks for its
   own elements before running, so it is safe to include everywhere.
*/

/* ── BIKES DATA
   Detail page reads this using the ?id= query param.
   e.g. detail-page.html?id=ktm-duke-390
*/
var BIKES = [
  {
    id: 'ktm-duke-390',
    brand: 'KTM',
    fullName: 'KTM DUKE 390',
    badge: 'Naked Sport',
    price: '₹ 3,10,520',
    rating: '4.8/5',
    specs: { engine: '373.2 cc', mileage: '28 kmpl', power: '43.5 PS', weight: '171 kg', fuelType: 'Petrol' },
    description1: 'The KTM 390 DUKE is a pure example of what draws so many to the thrill of street motorcycling. This Corner Rocket maximizes enjoyment and user value, taking the honors wherever nimble handling counts.',
    description2: 'Light as a feather, powerful and packed with state-of-the-art technology, it guarantees a thrilling ride, whether you\'re fighting your way through the urban jungle or carving your name into a forest of bends.',
    offer: 'First 2 Services Free & 5-Year Extended Warranty',
    ctaDesc: 'Visit our premium experience center in Bhubaneswar to take the Duke 390 for a spin and witness the mechanical precision firsthand.',
    features: [
      { title: 'Ride-by-Wire Technology', desc: 'Smooth throttle response and precise power delivery in all conditions.' },
      { title: 'Supermoto ABS Mode',      desc: 'Allows for aggressive riding by deactivating ABS on the rear wheel.' },
      { title: 'LED Headlight Setup',     desc: 'A distinct vertical LED assembly providing exceptional night-time visibility.' },
      { title: 'Slipper Clutch',          desc: 'Prevents rear-wheel locking during aggressive downshifting.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuBduzSxKReEh3m6uO04vcJaKPtuQQYf4vx7Pqpdfwb6TDj68SVv3TiyuKJKOD02HmMiSZTPbr2woHS5qYfEyvFmfPiuOUFHNdzCtvqgvF9nrDGVJLAaKPfsqr1ga0BAbstWIvNzEtpotUq_zmYXjRX8c0uOCYdAmM4xLaFPVLmjjAYUuohpzpBxhkj3JnTKE7vWlPTyZ-X5sAbvzEIbz5PFaXqOGq9eRX9uJqxSHqIThTR-eHVAK9zjmi09GqSh_Bpne6u2ECrdUqU',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQgwhW5R6T-X6ZKKOlYVOzVjGOsUantE30AEG06HgAWyqGaS42gwVefgyS2wuOMkfF9z6WJxdOIvpR8a6_g6nzKnaGE6lqR6J8j_88Wne6CUqRRATkyMoER9NvUc9MgYUgd5ZOwWLjXyue2rXv1qWQH7mXemBQoMgSPQQN31O8GLHbG3XXQ1T15RTh895PakkAzrqyfRj7QLH1oYgcxoTfsdpUWvkk1vAvo9lkGGKpCmjjqflTU9pkybXq4NgVNVPB83FKWimVdm4',
    galleryLabel1: 'WP APEX Suspension',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEUo-FitnT5O8JLWlSK0bcva4MXYZoIb1pgSoYt1WPDL2XuMOkFgEhVGsNViNMPUtRwUfDor8sY95GzD6NKmXW-IXdcSmek2CjSMfRPaVmJdEvrgTz8eUmJppe2LeYnSWlCs94PIShB823_g2IwEgJfdSGuPwEkr_UgRzUAktO-LM-qHoHpWqm7ClWYa6-ZGHF_h7HpzmanCrwrlKTeJtjuMQYbaqgM4acd8-4OBzJZQHjAcuXbS5RPooAEM4PSkS6uYZ4OAJEcM',
    galleryLabel2: '5" TFT Display'
  },
  {
    id: 'royal-enfield-classic-350',
    brand: 'Royal Enfield',
    fullName: 'ROYAL ENFIELD CLASSIC 350',
    badge: 'Heritage Cruiser',
    price: '₹ 1,90,000',
    rating: '4.6/5',
    specs: { engine: '349 cc', mileage: '35 kmpl', power: '20.2 PS', weight: '195 kg', fuelType: 'Petrol' },
    description1: 'The Royal Enfield Classic 350 is a timeless masterpiece that blends retro styling with modern reliability. It embodies the soul of motorcycling — unhurried, purposeful, and deeply satisfying.',
    description2: 'With its thumping single-cylinder engine and classic round headlamp, the Classic 350 is as much a lifestyle statement as it is a motorcycle. Perfect for highway cruising and weekend rides.',
    offer: 'Free First Service & 2-Year Standard Warranty',
    ctaDesc: 'Experience the legendary thump of the Classic 350 at our Bhubaneswar showroom. Book your test ride today.',
    features: [
      { title: 'J-Series Engine',        desc: 'All-new 349cc single-cylinder engine delivering smooth power with reduced vibration.' },
      { title: 'Tripper Navigation',     desc: 'Turn-by-turn navigation powered by Google Maps, available on select variants.' },
      { title: 'Dual-Channel ABS',       desc: 'Enhanced braking safety with anti-lock braking on both wheels.' },
      { title: 'Classic Round Headlamp', desc: 'Iconic chrome round headlamp with LED DRL for modern night-time visibility.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuC29lWhMcyTw_JSvoPmguqKk9wCK4_qMIBboFdirT6iCZQBVtSiHPgui8nRlOwG3sDCxo3BF1nwNWN4OBFeEfvaPMh5RM89eYPjyG_LNddA6kbjUkZOkuLYBsVYfsLDsjWsbjIOyFKg18XxZ9FnEZqGYFNwRjeSCE97yMQFW74HHsRz1sF8hYWTmhw_O98BTvmKVTuul-7RLRfkCIAhXDAhr3aPsW9-71yFAvyqLuv9c60kq0FYuFlCOfNzlsx_jvmc_-IIidRhupw',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDojnvcoMPztkG2MReFzI_KBH1XprAgyUG77KtKabd673JZcoH247ITqioipyX-QuTOWAF7CkVaFd3NulChpl3gbH8rrRAtxbU4SfbRYsDRsVULT2zSimDGX-iaska5KpwveLPUMaoqFLUl6b3uQOiCkCawpHDyG0ZWshem6XLDlqmELDLdlif2Dtyqbga5Bun0Jz2fwmsGWypxifVgP1PO1oKgaa6cbgr5vbHW76Rh3nb43t5fUNAGRIbgadQzzix-ocpVGz4i5K8',
    galleryLabel1: 'Classic Chrome Finish',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWgZDdvOGwbwto5m3nKWmz9KaJLCZ6xPt9edYXaC3-WgBifHwwkpxPVsAle5yvduCJJ5rhPL30W28eJEKfyNyclRDeIakyOg32qs5hjdXNMy3WPU03l7huvnB-_6WiL8DfKBEU9KPyEMIpfyGRwUBWIvccqt9Oy6LEBd-k1U-KEpvhrok-JDY5CQLOldk-Wv6ml4P_vVk_97-cs9SqVwSav697Dz88cJwBpzVi_v7QDses116UMpb-ft-d3DXOo3_j2PWK8cb5VMs',
    galleryLabel2: 'Tripper Navigation Pod'
  },
  {
    id: 'bajaj-chetak-ev',
    brand: 'Bajaj',
    fullName: 'BAJAJ CHETAK EV',
    badge: 'Electric Scooter',
    price: '₹ 1,40,000',
    rating: '4.4/5',
    specs: { engine: 'Electric', mileage: '95 km range', power: '4.08 kW', weight: '118 kg', fuelType: 'Electric' },
    description1: 'The Bajaj Chetak EV revives an iconic name for the electric age. Sleek, silent, and sustainable — it offers the perfect blend of retro design and modern technology for Odisha\'s urban commuter.',
    description2: 'With its IP67-rated water-resistant body, regenerative braking, and connected features via the Chetak app, this isn\'t just a scooter — it\'s a statement about the future of mobility.',
    offer: 'Free Home Charging Setup & 3-Year Battery Warranty',
    ctaDesc: 'Go zero-emission in style. Visit our EV experience centre in Bhubaneswar and take a silent ride on the Chetak EV.',
    features: [
      { title: 'IP67 Water Resistance',   desc: 'Fully sealed against dust and water jets — perfect for Indian monsoons.' },
      { title: 'Regenerative Braking',    desc: 'Recovers energy while slowing down to extend the battery range.' },
      { title: 'Connected Chetak App',    desc: 'Track ride stats, battery health, and trip history from your smartphone.' },
      { title: 'Eco & Sport Modes',       desc: 'Switch between efficiency and performance with a single button press.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuA8lBu5BEcA9SVea4U-8UlJq4ZxRhpZA3JU22v0S4KITe_ErdJ4lmyDcj2_uzQM1ypxjRJLNKFui8A4AhpTYcGens-VrCqjn5Xw55SISewii2jurwyjaIOy050q8PICbqY3e93oVyT8VtLaH_pidBUgfz16cj61lsMtyYVhKf-elDYa-8t8RvXy15vnT9NWliwplaDftHwIWqcNPnRMWsfaQtvDWCfo-zLKCjz33JDWRyL-79acRiXhObkebhrQ7vsIJbPytqeyb8k',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLTN4Eu4ilCTTS1t0d9WlzhyXPNQwNt9ZFXwVrTtNzwpdqXKQK4KfZ4KFPcckVaulfnayyuOoRq_k2gq5N6hWd0L_uw1B752lNdhwD8hml4NrLaB5P0pT_UDhGCAm10J9HYJce5IPgs9AXMC9kZ3-YS_pkedZGP-bvsENJlt2P8PgUlbYKaBR1RWK5S2oAUOrDgt4cKibg0cNHWFmrL24ptpcUd-AY-x9dhU3fLMecPMm0xlz__Wc3JkwngDzE58jRtr2fC4ibG6Y',
    galleryLabel1: 'Sleek Electric Design',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN45shJlA-N4IGoHkKhTsbbSHJHAw9ykVn8ijanGVUAQRi9gPxoUaPvbXTcHMyaueia-H7gNbGQMDITRh1F-yoooyr_I_IIaDWEO5Cqveg_YOys-AhFojIRGHQrSWVZi_1iD_6wmgfrjykMTuVdIpVlqYVxHv1Q43h2WC7nbbM3sj6nv_cgVnCpEX31SmPUGWX92B5_Z40oNRVLsIa1GN1zHL92RZbSQgqmY1-bm-ESTn3gpyRfy3qCAzMq3xkJWbtI5DPQ6qqW50',
    galleryLabel2: 'Digital Instrument Cluster'
  },
  {
    id: 'hero-xpulse-200',
    brand: 'Hero',
    fullName: 'HERO XPULSE 200',
    badge: 'Adventure Tourer',
    price: '₹ 1,50,000',
    rating: '4.5/5',
    specs: { engine: '199.6 cc', mileage: '40 kmpl', power: '18.4 PS', weight: '157 kg', fuelType: 'Petrol' },
    description1: 'The Hero XPulse 200 is built for explorers who refuse to stay on the beaten path. Whether it\'s rain-soaked dirt tracks or rocky mountain trails, this adventure tourer handles it with confidence.',
    description2: 'Featuring long-travel suspension, a high-ground-clearance frame, and a dedicated off-road ride mode, the XPulse 200 is the gateway to real Odisha adventure — from the Koraput hills to the Chilika shores.',
    offer: 'Free Mud Guard Accessory Kit & 2-Year Warranty',
    ctaDesc: 'Ready to go off the road? Test ride the Hero XPulse 200 at our Bhubaneswar adventure centre.',
    features: [
      { title: 'Long-Travel Suspension',       desc: '190mm front and 170mm rear travel for absorbing rough off-road terrain.' },
      { title: 'Bluetooth Connectivity',       desc: 'Paired with the Hero app for navigation prompts and ride stats.' },
      { title: 'FI Engine with Off-Road Mode', desc: 'Fuel-injected engine with a dedicated off-road map for better torque delivery.' },
      { title: 'Rally-Inspired Design',        desc: 'Upswept exhaust, knuckle guards, and off-road tyres as standard.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuC9LwAD6UnhEt7nGt7wQlPMLeZCjFdBTxN4lhPS0KDosPX6bL9HXNAepdY3TF-MXBd3aT_JejY-IeEbVyHqac0txj5yEasT-7ae9RMPjosDzxluBQlL4FSt0pra3OhAlCCBYar2BxA7pvk4o-2lig9Cbyb9-yx09uZq9W6ZXiSVDrI8gL3g3PHT5AFsenikIERRegdHw_KePAsMlCnGC54dP7R5olszvVp93HoHxmqE26nfaAD6sqAu-ySeKGtln-k_3Q6AdaM4lxE',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl9JsZUD729nzyWVh9mHIIItH1SImSx_ia957SvZKlGacHTB9sLRHOwRxCsKqJucaVUqefzd7-h3_ZjeYTL2rgC3Q9RaJrRmKgnxFoUeKAuHk3tHe15gRsD35aAMWEJPAwDhTRjyvBgTMBQBb_mUiDyOUN5u01VyCmaP7U1Yce4U8OFIonWuax0MbO5El39G0kJHVJYIBHnw10nwVaZ0W5EPRGUw3t5SB4hi7x7P2bf97G5c_2gHv-IXvpp_t73u5_PrdMfuZrqIg',
    galleryLabel1: 'Long-Travel Front Fork',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDojnvcoMPztkG2MReFzI_KBH1XprAgyUG77KtKabd673JZcoH247ITqioipyX-QuTOWAF7CkVaFd3NulChpl3gbH8rrRAtxbU4SfbRYsDRsVULT2zSimDGX-iaska5KpwveLPUMaoqFLUl6b3uQOiCkCawpHDyG0ZWshem6XLDlqmELDLdlif2Dtyqbga5Bun0Jz2fwmsGWypxifVgP1PO1oKgaa6cbgr5vbHW76Rh3nb43t5fUNAGRIbgadQzzix-ocpVGz4i5K8',
    galleryLabel2: 'Rally Instrument Console'
  },
  {
    id: 'bajaj-pulsar-rs200',
    brand: 'Bajaj',
    fullName: 'BAJAJ PULSAR RS200',
    badge: 'Sports Fairing',
    price: '₹ 1,72,000',
    rating: '4.5/5',
    specs: { engine: '199.5 cc', mileage: '35 kmpl', power: '24.5 PS', weight: '166 kg', fuelType: 'Petrol' },
    description1: 'The Bajaj Pulsar RS200 is the fastest production Pulsar ever made. With its full aerodynamic fairing and liquid-cooled engine, it brings sports bike aggression at an accessible price.',
    description2: 'Packed with features like ABS, fuel injection, and a perimeter frame, the RS200 offers a track-inspired riding experience on Odisha\'s highways without breaking the bank.',
    offer: 'Extended Service Plan & Free Crash Guard Fitment',
    ctaDesc: 'Feel the race fairing and liquid-cooled power of the RS200 at our Bhubaneswar dealership. Test rides available daily.',
    features: [
      { title: 'Triple Spark Technology', desc: 'Three spark plugs per cylinder for efficient combustion and more power.' },
      { title: 'Liquid-Cooled Engine',    desc: 'Keeps engine temperature optimal even during extended high-speed runs.' },
      { title: 'Perimeter Frame',         desc: 'Lightweight yet rigid frame for sharper handling and cornering precision.' },
      { title: 'Full LED Lighting',       desc: 'LED headlamp, DRL and tail lamp for visibility and modern styling.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuC29lWhMcyTw_JSvoPmguqKk9wCK4_qMIBboFdirT6iCZQBVtSiHPgui8nRlOwG3sDCxo3BF1nwNWN4OBFeEfvaPMh5RM89eYPjyG_LNddA6kbjUkZOkuLYBsVYfsLDsjWsbjIOyFKg18XxZ9FnEZqGYFNwRjeSCE97yMQFW74HHsRz1sF8hYWTmhw_O98BTvmKVTuul-7RLRfkCIAhXDAhr3aPsW9-71yFAvyqLuv9c60kq0FYuFlCOfNzlsx_jvmc_-IIidRhupw',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl9JsZUD729nzyWVh9mHIIItH1SImSx_ia957SvZKlGacHTB9sLRHOwRxCsKqJucaVUqefzd7-h3_ZjeYTL2rgC3Q9RaJrRmKgnxFoUeKAuHk3tHe15gRsD35aAMWEJPAwDhTRjyvBgTMBQBb_mUiDyOUN5u01VyCmaP7U1Yce4U8OFIonWuax0MbO5El39G0kJHVJYIBHnw10nwVaZ0W5EPRGUw3t5SB4hi7x7P2bf97G5c_2gHv-IXvpp_t73u5_PrdMfuZrqIg',
    galleryLabel1: 'Aerodynamic Full Fairing',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEUo-FitnT5O8JLWlSK0bcva4MXYZoIb1pgSoYt1WPDL2XuMOkFgEhVGsNViNMPUtRwUfDor8sY95GzD6NKmXW-IXdcSmek2CjSMfRPaVmJdEvrgTz8eUmJppe2LeYnSWlCs94PIShB823_g2IwEgJfdSGuPwEkr_UgRzUAktO-LM-qHoHpWqm7ClWYa6-ZGHF_h7HpzmanCrwrlKTeJtjuMQYbaqgM4acd8-4OBzJZQHjAcuXbS5RPooAEM4PSkS6uYZ4OAJEcM',
    galleryLabel2: 'Digital TFT Instrument'
  },
  {
    id: 'royal-enfield-bullet-350',
    brand: 'Royal Enfield',
    fullName: 'ROYAL ENFIELD BULLET 350',
    badge: 'Classic Legend',
    price: '₹ 1,95,000',
    rating: '4.7/5',
    specs: { engine: '346 cc', mileage: '38 kmpl', power: '20.4 PS', weight: '191 kg', fuelType: 'Petrol' },
    description1: 'The Royal Enfield Bullet 350 — a motorcycle that has ridden through decades of Indian history. Updated with modern engineering while keeping its legendary thumper soul intact.',
    description2: 'With improved NVH levels, better ergonomics, and a new-generation J-platform engine, the Bullet 350 offers the most refined riding experience in its 70-year history.',
    offer: 'Free First Service & Royal Riding Gear Discount',
    ctaDesc: 'Hear the iconic Bullet thump at our showroom. Visit Bhubaneswar to schedule your test ride.',
    features: [
      { title: 'J-Platform Engine',   desc: 'New-generation 346cc unit with smoother power delivery and lower vibration.' },
      { title: 'Classic Silhouette',  desc: 'Timeless Bullet design with modern build quality and fit & finish.' },
      { title: 'Dual-Channel ABS',    desc: 'Safer stops in wet and dry conditions with automatic switch-off for off-road.' },
      { title: 'USB Charging Port',   desc: 'Keep your devices powered during long highway journeys.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuDWgZDdvOGwbwto5m3nKWmz9KaJLCZ6xPt9edYXaC3-WgBifHwwkpxPVsAle5yvduCJJ5rhPL30W28eJEKfyNyclRDeIakyOg32qs5hjdXNMy3WPU03l7huvnB-_6WiL8DfKBEU9KPyEMIpfyGRwUBWIvccqt9Oy6LEBd-k1U-KEpvhrok-JDY5CQLOldk-Wv6ml4P_vVk_97-cs9SqVwSav697Dz88cJwBpzVi_v7QDses116UMpb-ft-d3DXOo3_j2PWK8cb5VMs',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDojnvcoMPztkG2MReFzI_KBH1XprAgyUG77KtKabd673JZcoH247ITqioipyX-QuTOWAF7CkVaFd3NulChpl3gbH8rrRAtxbU4SfbRYsDRsVULT2zSimDGX-iaska5KpwveLPUMaoqFLUl6b3uQOiCkCawpHDyG0ZWshem6XLDlqmELDLdlif2Dtyqbga5Bun0Jz2fwmsGWypxifVgP1PO1oKgaa6cbgr5vbHW76Rh3nb43t5fUNAGRIbgadQzzix-ocpVGz4i5K8',
    galleryLabel1: 'Classic Chrome Tank',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl9JsZUD729nzyWVh9mHIIItH1SImSx_ia957SvZKlGacHTB9sLRHOwRxCsKqJucaVUqefzd7-h3_ZjeYTL2rgC3Q9RaJrRmKgnxFoUeKAuHk3tHe15gRsD35aAMWEJPAwDhTRjyvBgTMBQBb_mUiDyOUN5u01VyCmaP7U1Yce4U8OFIonWuax0MbO5El39G0kJHVJYIBHnw10nwVaZ0W5EPRGUw3t5SB4hi7x7P2bf97G5c_2gHv-IXvpp_t73u5_PrdMfuZrqIg',
    galleryLabel2: 'Iconic Bullet Silhouette'
  },
  {
    id: 'yamaha-r15-v4',
    brand: 'Yamaha',
    fullName: 'YAMAHA R15 V4',
    badge: 'Race Replica',
    price: '₹ 1,85,000',
    rating: '4.7/5',
    specs: { engine: '155 cc', mileage: '45 kmpl', power: '18.4 PS', weight: '141 kg', fuelType: 'Petrol' },
    description1: 'The Yamaha R15 V4 carries the MotoGP R-DNA straight from the racing paddock to the street. With its VVA technology, traction control, and fully faired body, it rides like a race bike.',
    description2: 'The slimmest R15 ever — QuickShifter, dual-channel ABS, and a Bluetooth-connected LCD instrument — the R15 V4 is a technological marvel in the 150cc segment.',
    offer: 'Yamaha Extended Warranty & Free 1st Year Insurance',
    ctaDesc: 'Book a test ride on the Yamaha R15 V4 and feel the MotoGP-inspired handling at our Bhubaneswar dealership.',
    features: [
      { title: 'Variable Valve Actuation', desc: 'VVA technology optimises engine performance at both low and high RPM.' },
      { title: 'Traction Control System',  desc: 'Reduces wheel slip on slippery surfaces for improved safety.' },
      { title: 'QuickShifter',             desc: 'Clutchless upshifting for a seamless racing experience on the road.' },
      { title: 'Bluetooth Connectivity',   desc: 'Pairs with the myYamaha app for ride data, calls, and music control.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuDECIWcjXbv27etFkvxM4MXu3rvC7ObqEZ35McX08am-UjOmkXa6gzTz00vJxVk3EOf2dlywQ_h8z7URLRHec0oxtqM3nTeRQKGOcQ-D39ClEyI7PoOO0u-wiWt51mjmy-mOa8S093BuMH9upj2axwfw1nV8BMQ1FVobnHk31fXfhK8TA4_IK-o9fJ_Sv7cdaTfOjf4Go34IkGsccjfixHloLVJ7kLs0WoWH6qvqfVCe66YUmksMd0DcI3WJCy5goakbf_oc7KSji4',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl9JsZUD729nzyWVh9mHIIItH1SImSx_ia957SvZKlGacHTB9sLRHOwRxCsKqJucaVUqefzd7-h3_ZjeYTL2rgC3Q9RaJrRmKgnxFoUeKAuHk3tHe15gRsD35aAMWEJPAwDhTRjyvBgTMBQBb_mUiDyOUN5u01VyCmaP7U1Yce4U8OFIonWuax0MbO5El39G0kJHVJYIBHnw10nwVaZ0W5EPRGUw3t5SB4hi7x7P2bf97G5c_2gHv-IXvpp_t73u5_PrdMfuZrqIg',
    galleryLabel1: 'Race Fairing & Aerodynamics',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEUo-FitnT5O8JLWlSK0bcva4MXYZoIb1pgSoYt1WPDL2XuMOkFgEhVGsNViNMPUtRwUfDor8sY95GzD6NKmXW-IXdcSmek2CjSMfRPaVmJdEvrgTz8eUmJppe2LeYnSWlCs94PIShB823_g2IwEgJfdSGuPwEkr_UgRzUAktO-LM-qHoHpWqm7ClWYa6-ZGHF_h7HpzmanCrwrlKTeJtjuMQYbaqgM4acd8-4OBzJZQHjAcuXbS5RPooAEM4PSkS6uYZ4OAJEcM',
    galleryLabel2: 'LCD Instrument Console'
  },
  {
    id: 'honda-cb300r',
    brand: 'Honda',
    fullName: 'HONDA CB300R',
    badge: 'Neo Sports Cafe',
    price: '₹ 2,95,000',
    rating: '4.6/5',
    specs: { engine: '293 cc', mileage: '38 kmpl', power: '31.4 PS', weight: '143 kg', fuelType: 'Petrol' },
    description1: 'The Honda CB300R is the minimalist\'s sports bike — designed on the Neo Sports Café philosophy where every component serves a purpose. No excess, pure intent.',
    description2: 'Weighing just 143 kg with 31 PS on tap, the CB300R delivers an exhilarating power-to-weight ratio. Its round LED headlamp and compact silhouette make it one of the best-looking bikes on the road.',
    offer: 'Honda Extended Warranty & Complimentary 1st Service',
    ctaDesc: 'Experience minimalist motorcycle perfection. Book your CB300R test ride at our Bhubaneswar Honda Bigwing dealership.',
    features: [
      { title: 'Unicam Engine Technology', desc: 'Honda\'s proven design for high performance in a compact single-cylinder package.' },
      { title: 'Assist & Slipper Clutch',  desc: 'Lighter clutch pull and prevention of rear-wheel hop during downshifting.' },
      { title: 'USD Front Forks',          desc: 'Upside-down forks for superior rigidity and front-end feel.' },
      { title: 'Round LED Headlamp',       desc: 'Neo Sports Café-inspired circular LED for character and excellent illumination.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuB6AtiI5x85F8LUgaPleuQJ8avqRksljvL77zaQtbPaOjqPC4fzIdq8jhGKo0P_8WTqs2Dw584cnSOP67a4BWEkMq9ni2_Vr6mZYPkch0pv1Wcw0iXkI1DopilELIt9of2-15RtVWWoF_xh4PYHEfk3bWwMYsBEMTWHG64z1fiZGDDQHaEhVbTnDVkOLI5mg8VrKjKgTb4DhtYE7UWR2dC6ycptBUiSdTGi4F39bh4oIwJ1c1Rud-ScAZrjhcGd1ekUL4U1E_dqBN0',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQgwhW5R6T-X6ZKKOlYVOzVjGOsUantE30AEG06HgAWyqGaS42gwVefgyS2wuOMkfF9z6WJxdOIvpR8a6_g6nzKnaGE6lqR6J8j_88Wne6CUqRRATkyMoER9NvUc9MgYUgd5ZOwWLjXyue2rXv1qWQH7mXemBQoMgSPQQN31O8GLHbG3XXQ1T15RTh895PakkAzrqyfRj7QLH1oYgcxoTfsdpUWvkk1vAvo9lkGGKpCmjjqflTU9pkybXq4NgVNVPB83FKWimVdm4',
    galleryLabel1: 'USD Front Fork Detail',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEUo-FitnT5O8JLWlSK0bcva4MXYZoIb1pgSoYt1WPDL2XuMOkFgEhVGsNViNMPUtRwUfDor8sY95GzD6NKmXW-IXdcSmek2CjSMfRPaVmJdEvrgTz8eUmJppe2LeYnSWlCs94PIShB823_g2IwEgJfdSGuPwEkr_UgRzUAktO-LM-qHoHpWqm7ClWYa6-ZGHF_h7HpzmanCrwrlKTeJtjuMQYbaqgM4acd8-4OBzJZQHjAcuXbS5RPooAEM4PSkS6uYZ4OAJEcM',
    galleryLabel2: 'Round LED Headlamp'
  },
  {
    id: 'tvs-apache-rr310',
    brand: 'TVS',
    fullName: 'TVS APACHE RR 310',
    badge: 'Track Bred',
    price: '₹ 2,75,000',
    rating: '4.6/5',
    specs: { engine: '312.2 cc', mileage: '40 kmpl', power: '34 PS', weight: '174 kg', fuelType: 'Petrol' },
    description1: 'The TVS Apache RR 310 is an Indian motorcycle with a German heart — designed in partnership with BMW Motorrad. It brings genuine race-track DNA to Odisha\'s tarmac.',
    description2: 'With a reverse-inclined engine, 5 riding modes, cornering ABS, and fully adjustable suspension, the RR 310 competes head-to-head with European rivals at a fraction of the price.',
    offer: 'Track Day Experience & Free First Year Comprehensive Insurance',
    ctaDesc: 'Push the limits on the RR 310. Book a track experience or test ride at our Bhubaneswar TVS dealership.',
    features: [
      { title: '5 Riding Modes',          desc: 'Urban, Rain, Sport, Track and Custom modes adapt the bike to every situation.' },
      { title: 'Cornering ABS',           desc: 'Maintains braking safety even mid-corner on challenging road surfaces.' },
      { title: 'Reverse-Inclined Engine', desc: 'Lowers the centre of gravity for sharper handling and better weight balance.' },
      { title: 'SmartXonnect Bluetooth',  desc: 'Turn-by-turn navigation, call & music control via the instrument cluster.' }
    ],
    heroImage:     'https://lh3.googleusercontent.com/aida-public/AB6AXuC9LwAD6UnhEt7nGt7wQlPMLeZCjFdBTxN4lhPS0KDosPX6bL9HXNAepdY3TF-MXBd3aT_JejY-IeEbVyHqac0txj5yEasT-7ae9RMPjosDzxluBQlL4FSt0pra3OhAlCCBYar2BxA7pvk4o-2lig9Cbyb9-yx09uZq9W6ZXiSVDrI8gL3g3PHT5AFsenikIERRegdHw_KePAsMlCnGC54dP7R5olszvVp93HoHxmqE26nfaAD6sqAu-ySeKGtln-k_3Q6AdaM4lxE',
    galleryImage1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQgwhW5R6T-X6ZKKOlYVOzVjGOsUantE30AEG06HgAWyqGaS42gwVefgyS2wuOMkfF9z6WJxdOIvpR8a6_g6nzKnaGE6lqR6J8j_88Wne6CUqRRATkyMoER9NvUc9MgYUgd5ZOwWLjXyue2rXv1qWQH7mXemBQoMgSPQQN31O8GLHbG3XXQ1T15RTh895PakkAzrqyfRj7QLH1oYgcxoTfsdpUWvkk1vAvo9lkGGKpCmjjqflTU9pkybXq4NgVNVPB83FKWimVdm4',
    galleryLabel1: 'Adjustable Suspension Setup',
    galleryImage2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEUo-FitnT5O8JLWlSK0bcva4MXYZoIb1pgSoYt1WPDL2XuMOkFgEhVGsNViNMPUtRwUfDor8sY95GzD6NKmXW-IXdcSmek2CjSMfRPaVmJdEvrgTz8eUmJppe2LeYnSWlCs94PIShB823_g2IwEgJfdSGuPwEkr_UgRzUAktO-LM-qHoHpWqm7ClWYa6-ZGHF_h7HpzmanCrwrlKTeJtjuMQYbaqgM4acd8-4OBzJZQHjAcuXbS5RPooAEM4PSkS6uYZ4OAJEcM',
    galleryLabel2: 'SmartXonnect Dashboard'
  }
];

/* =============================================================
   HELPER — find a bike by its id
   ============================================================= */
function getBikeById(id) {
  for (var i = 0; i < BIKES.length; i++) {
    if (BIKES[i].id === id) return BIKES[i];
  }
  return null;
}

/* ── Navigate to detail page */
function goToDetail(bikeId) {
  window.location.href = 'detail-page.html?id=' + bikeId;
}

/* SHARED COMPONENTS — one navbar + one footer for all main pages.
   Each main page has <div id="main-nav"> and <div id="main-footer">
   placeholders. This function fills them. Login/signup pages are skipped. */
function renderComponents() {
  var navEl    = document.getElementById('main-nav');
  var footerEl = document.getElementById('main-footer');
  if (!navEl && !footerEl) return;

  var page = window.location.pathname;
  var onExplore = page.includes('listing') || page.includes('detail-page');
  var exploreClass = onExplore
    ? 'text-red-500 border-b-2 border-red-600 pb-1 font-medium transition-all'
    : 'text-zinc-400 hover:text-zinc-100 transition-colors';

  if (navEl) {
    navEl.innerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div class="flex items-center justify-between px-8 py-4 max-w-screen-2xl mx-auto font-['Space_Grotesk'] tracking-tight">
            <a href="index.html" class="text-2xl font-bold tracking-tighter text-zinc-100 uppercase hover:text-secondary transition-colors">Odisha Bikes</a>
            <div class="hidden md:flex items-center gap-10">
                <a class="${exploreClass}" href="listing.html">Explore Bikes</a>
                <a class="text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Compare</a>
            </div>
            <div class="flex items-center gap-6">
                <div class="relative hidden lg:block">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">search</span>
                    <input class="bg-zinc-800/50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-red-600 w-64 transition-all" placeholder="Search bikes..." type="text" />
                </div>
                <div id="nav-auth" class="flex items-center gap-3">
                    <button id="nav-login-btn" onclick="window.location.href='login.html'" class="bg-secondary-container text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-all active:scale-95">Login</button>
                    <div id="nav-profile" class="hidden items-center gap-3 relative">
                        <div id="nav-avatar" class="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center cursor-pointer select-none text-white font-bold text-sm uppercase" onclick="document.getElementById('nav-dropdown').classList.toggle('hidden')">?</div>
                        <span id="nav-username" class="text-zinc-200 text-sm font-semibold hidden lg:block"></span>
                        <div id="nav-dropdown" class="hidden absolute right-0 top-12 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl py-2 w-44 z-50">
                            <div id="nav-dropdown-name" class="px-4 py-2 text-xs text-zinc-400 border-b border-zinc-700 mb-1"></div>
                            <button onclick="firebaseLogout()" class="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-800 transition-colors flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm">logout</span> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>`;
  }

  if (footerEl) {
    footerEl.innerHTML = `
    <footer class="bg-zinc-950 w-full py-16 px-8 border-t border-zinc-800/30">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div>
                    <h4 class="text-lg font-black text-zinc-100 uppercase tracking-tighter mb-6">Odisha Bikes</h4>
                    <p class="text-zinc-500 text-sm leading-relaxed">Redefining the bike discovery journey across Odisha. Engineering precision, editorial discovery.</p>
                </div>
                <div>
                    <h5 class="font-['Manrope'] text-xs uppercase tracking-widest text-secondary font-bold mb-6">Explore</h5>
                    <ul class="flex flex-col gap-4 text-xs font-['Manrope'] tracking-widest uppercase">
                        <li><a class="text-zinc-500 hover:text-red-500 transition-colors" href="listing.html">Popular Bikes</a></li>
                        <li><a class="text-zinc-500 hover:text-red-500 transition-colors" href="listing.html">Electric Hub</a></li>
                        <li><a class="text-zinc-500 hover:text-red-500 transition-colors" href="#">Comparison Tool</a></li>
                        <li><a class="text-zinc-500 hover:text-red-500 transition-colors" href="#">Dealer Locator</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-['Manrope'] text-xs uppercase tracking-widest text-secondary font-bold mb-6">Newsletter</h5>
                    <div class="flex bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                        <input class="bg-transparent border-none text-xs px-4 w-full focus:ring-0" placeholder="Your email" type="email" />
                        <button class="bg-zinc-800 px-4 py-2 border-l border-zinc-700">
                            <span class="material-symbols-outlined text-sm text-zinc-100">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900/50 gap-6">
                <p class="font-['Manrope'] text-xs uppercase tracking-widest text-zinc-500">© 2026 Odisha Bikes. Kinetic Precision.</p>
                <div class="flex gap-8">
                    <span class="material-symbols-outlined text-zinc-500 hover:text-zinc-100 cursor-pointer text-lg">public</span>
                    <span class="material-symbols-outlined text-zinc-500 hover:text-zinc-100 cursor-pointer text-lg">mail</span>
                    <span class="material-symbols-outlined text-zinc-500 hover:text-zinc-100 cursor-pointer text-lg">share</span>
                </div>
            </div>
        </div>
    </footer>`;
  }
}

document.addEventListener('DOMContentLoaded', function () {

  renderComponents();

  /* DETAIL PAGE — populate from BIKES array using ?id= param */
  var detailName = document.getElementById('detail-name');
  if (detailName) {
    var params = new URLSearchParams(window.location.search);
    var bikeId = params.get('id') || 'ktm-duke-390';
    var bike   = getBikeById(bikeId);

    if (bike) {
      document.title = bike.fullName + ' - Odisha Bikes';

      var heroImg = document.getElementById('detail-hero-img');
      if (heroImg) heroImg.src = bike.heroImage;

      var badge = document.getElementById('detail-badge');
      if (badge) badge.textContent = bike.badge;

      var rating = document.getElementById('detail-rating');
      if (rating) rating.textContent = '(' + bike.rating + ')';

      detailName.textContent = bike.fullName;

      var priceEl = document.getElementById('detail-price');
      if (priceEl) priceEl.textContent = bike.price;

      var specEngine  = document.getElementById('spec-engine');
      var specMileage = document.getElementById('spec-mileage');
      var specPower   = document.getElementById('spec-power');
      var specWeight  = document.getElementById('spec-weight');
      var specFuel    = document.getElementById('spec-fuel');
      if (specEngine)  specEngine.textContent  = bike.specs.engine;
      if (specMileage) specMileage.textContent = bike.specs.mileage;
      if (specPower)   specPower.textContent   = bike.specs.power;
      if (specWeight)  specWeight.textContent  = bike.specs.weight;
      if (specFuel)    specFuel.textContent    = bike.specs.fuelType;

      var desc1 = document.getElementById('detail-desc1');
      var desc2 = document.getElementById('detail-desc2');
      if (desc1) desc1.textContent = bike.description1;
      if (desc2) desc2.textContent = bike.description2;

      var gImg1   = document.getElementById('detail-gallery-img1');
      var gLabel1 = document.getElementById('detail-gallery-label1');
      var gImg2   = document.getElementById('detail-gallery-img2');
      var gLabel2 = document.getElementById('detail-gallery-label2');
      if (gImg1)   gImg1.src              = bike.galleryImage1;
      if (gLabel1) gLabel1.textContent    = bike.galleryLabel1;
      if (gImg2)   gImg2.src              = bike.galleryImage2;
      if (gLabel2) gLabel2.textContent    = bike.galleryLabel2;

      var featuresList = document.getElementById('detail-features');
      if (featuresList && bike.features) {
        featuresList.innerHTML = '';
        bike.features.forEach(function (f) {
          featuresList.innerHTML +=
            '<li class="flex items-start gap-4">' +
              '<span class="material-symbols-outlined text-secondary mt-1">check_circle</span>' +
              '<div>' +
                '<p class="font-bold text-on-surface">' + f.title + '</p>' +
                '<p class="text-sm text-on-surface-variant">' + f.desc + '</p>' +
              '</div>' +
            '</li>';
        });
      }

      var offerEl = document.getElementById('detail-offer');
      if (offerEl) offerEl.textContent = bike.offer;

      var ctaDescEl = document.getElementById('detail-cta-desc');
      if (ctaDescEl) ctaDescEl.textContent = bike.ctaDesc;
    }

    /* Action buttons on detail page */
    var buttons = document.querySelectorAll('main button');
    buttons.forEach(function (btn) {
      var text = btn.textContent.trim();
      if (text === 'Book Now') {
        btn.addEventListener('click', function () {
          alert('Booking request submitted!\nOur team will contact you within 24 hours to confirm your booking.');
        });
      }
      if (text === 'Contact Dealer') {
        btn.addEventListener('click', function () {
          alert('Connecting you with the nearest Odisha Bikes dealer...\nDealer: Bhubaneswar Premium Centre\nPhone: +91 98765 43210');
        });
      }
      if (text.includes('Compare')) {
        btn.addEventListener('click', function () {
          alert('Compare feature coming soon! Add this bike to your comparison list.');
        });
      }
      if (text.includes('Schedule Test Ride') || text.includes('Test Ride')) {
        btn.addEventListener('click', function () {
          alert('Test ride scheduled!\nWe will send a confirmation to your registered email shortly.');
        });
      }
    });
  }

  /* HOME PAGE — Trending Picks Slider + Hero Search */
  var track = document.getElementById('trending-track');
  if (track) {
    var outer        = document.getElementById('trending-outer');
    var prevBtn      = document.getElementById('trending-prev');
    var nextBtn      = document.getElementById('trending-next');
    var currentIndex = 0;
    var GAP = 32;

    function getVisibleCount() {
      if (window.innerWidth >= 1025) return 3;
      if (window.innerWidth >= 641)  return 2;
      return 1;
    }

    function setCardWidths() {
      var visible   = getVisibleCount();
      var outerW    = outer ? outer.offsetWidth : 0;
      if (outerW <= 0) return;
      var totalGaps = (visible - 1) * GAP;
      var cardW     = Math.floor((outerW - totalGaps) / visible);
      outer.style.setProperty('--card-w', cardW + 'px');
    }

    function getStepWidth() {
      var card = track.querySelector('.bike-card');
      if (!card) return 0;
      return card.offsetWidth + GAP;
    }

    function getMaxIndex() {
      var cards = track.querySelectorAll('.bike-card');
      return Math.max(0, cards.length - getVisibleCount());
    }

    function goToIndex(index) {
      currentIndex = Math.max(0, Math.min(index, getMaxIndex()));
      track.style.transform = 'translateX(-' + (currentIndex * getStepWidth()) + 'px)';
    }

    requestAnimationFrame(function () {
      setCardWidths();
      goToIndex(0);
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToIndex(currentIndex < getMaxIndex() ? currentIndex + 1 : 0);
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToIndex(currentIndex > 0 ? currentIndex - 1 : getMaxIndex());
      });
    }

    window.addEventListener('resize', function () {
      setCardWidths();
      goToIndex(0);
    });

    /* "View Details" buttons inside trending slider */
    track.querySelectorAll('.view-details-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var bikeId = btn.getAttribute('data-bike-id') || 'ktm-duke-390';
        goToDetail(bikeId);
      });
    });

    /* Hero search button */
    var heroSearchBtn = document.querySelector('header .flex button');
    if (heroSearchBtn) {
      heroSearchBtn.addEventListener('click', function () {
        var searchInput = document.querySelector('header input[type="text"]');
        var query = searchInput ? searchInput.value.trim() : '';
        window.location.href = query
          ? 'listing.html?search=' + encodeURIComponent(query)
          : 'listing.html';
      });
    }
  }

  /* LISTING PAGE — View Details + Filters */
  var listingArticles = document.querySelectorAll('article');
  if (listingArticles.length > 0) {
    listingArticles.forEach(function (article) {
      var btn = article.querySelector('button');
      if (btn) {
        btn.addEventListener('click', function () {
          var bikeId = btn.getAttribute('data-bike-id') || 'ktm-duke-390';
          goToDetail(bikeId);
        });
      }
    });

    /* Brand filter pills */
    var brandBtns = document.querySelectorAll('aside .flex-wrap button');
    brandBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        brandBtns.forEach(function (b) {
          b.classList.remove('bg-orange-500/10', 'text-orange-400', 'border-orange-500/20');
          b.classList.add('bg-surface-container-highest', 'text-zinc-400');
        });
        btn.classList.remove('bg-surface-container-highest', 'text-zinc-400');
        btn.classList.add('bg-orange-500/10', 'text-orange-400', 'border-orange-500/20');
      });
    });

    /* Apply Filters button */
    var applyBtn = document.querySelector('aside > button');
    if (applyBtn) {
      applyBtn.addEventListener('click', function () {
        var activeBrand = document.querySelector('aside .flex-wrap .bg-orange-500\\/10');
        var brandName   = activeBrand ? activeBrand.textContent.trim() : 'All Brands';
        alert('Filters applied! Showing results for: ' + brandName);
      });
    }

    /* Mileage checkboxes */
    document.querySelectorAll('aside .grid label').forEach(function (label) {
      label.addEventListener('click', function () {
        var box = label.querySelector('div');
        if (box) {
          var isActive = box.classList.contains('border-red-500');
          box.classList.toggle('border-red-500', !isActive);
          box.classList.toggle('bg-red-600',     !isActive);
          box.classList.toggle('border-zinc-700', isActive);
        }
      });
    });

    /* Fuel type toggle buttons */
    var fuelBtns = document.querySelectorAll('aside .flex > .flex-1');
    fuelBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        fuelBtns.forEach(function (b) {
          b.classList.remove('bg-red-600/20', 'text-red-400', 'border-red-600/40');
          b.classList.add('bg-surface-container-highest', 'text-zinc-300');
        });
        btn.classList.remove('bg-surface-container-highest', 'text-zinc-300');
        btn.classList.add('bg-red-600/20', 'text-red-400', 'border-red-600/40');
      });
    });
  }

  /* LOGIN & SIGNUP handled by js/firebase.js */

  /* NEWSLETTER — footer, all pages */
  document.querySelectorAll('footer input[type="email"]').forEach(function (input) {
    var btn = input.nextElementSibling || input.parentElement.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var email = input.value.trim();
      if (!email) { alert('Please enter your email address.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert('Please enter a valid email address.'); return; }
      alert('Thank you for subscribing! You\'ll hear from us soon.');
      input.value = '';
    });
  });

});
