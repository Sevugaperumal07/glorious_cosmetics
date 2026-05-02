import { Product } from './types';

export const products: Product[] = [
  {
    id: 'lavender-soap',
    name: 'Lavender Soap',
    price: 18.00,
    category: 'Herbal Soap',
    description: 'Cold-pressed with organic lavender essential oil and French clay. This artisan bar provides a creamy, skin-loving lather.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRAFCiruNUZvAie3J-mVVC_u_einXVgi57yXFBakhjlthm-08ek2HBHomHHd2JFOpKek-ZMHtUlZefNjSXZioV9xtM65cRd8WM1DmrYa0GMHbqVanJ4Y3zy0Xa4Xvyj-fI_TqsR0WDkb-zDO_7Pd50uiwU_V7w05mkcV-_Etfkv1EsD4cihCodTH2omR4TYHjkiIcC7-zZBgr_2DTwORW1rCNXaMsT-oNaQ6QmYLE4PBRGmuOxyTlokMSFFBEHi9Iox2zTSjO5tZo',
    tags: ['Cold-Pressed', 'Organic', 'Handcrafted'],
    ingredients: 'Saponified Oils of Olive, Coconut, and Shea Butter. French Lavender Essential Oil, French Green Clay, Dried Lavender Buds.',
    benefits: ['Deeply detoxifies pores', 'Promotes relaxation', 'Moisturizing formula'],
    usage: 'Lather with water and apply to wet skin. Rinse thoroughly.'
  },
  {
    id: 'serenity-oil',
    name: 'Serenity Oil',
    price: 42.00,
    category: 'Botanical Oil',
    description: 'A calming infusion of sandalwood and bergamot designed to ground your evening ritual.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5pA_mFyGqbcTs_oCYcn86KyBidc1SffYvrmZZaZH0jq0lVK3JvYT25vEgljVRKVNtIKrOajSuDpxcSa64VLSgVPrroD6OzDJ7F_h5ulUINQt3OUS6pSrDUd2Llvw9v6Nkgb1eNn8G-OCKSGIAbkXTft3X9DHshMkGyqLOJlCAe4FOXp7AW0frLJfhyycyazjB5_RYncW9EzcnABoMuGgEIGXSruPEMjDuSqIQRA048xzteeL-eITWfAP73AYQVYhFegesCLDjRl8',
    tags: ['Sandalwood', 'Bergamot', 'Calming'],
    ingredients: 'Simmondsia Chinensis (Jojoba) Oil, Santalum Album (Sandalwood) Oil, Citrus Bergamia (Bergamot) Oil.',
    benefits: ['Grounds the senses', 'Hydrates deeply', 'Non-greasy finish'],
    usage: 'Apply 3-5 drops to clean skin and massage gently.'
  },
  {
    id: 'lavender-earth-soap',
    name: 'Lavender & Earth Soap',
    price: 24.00,
    category: 'Artisan Soap',
    description: 'A grounding blend of French lavender and mineral-rich Moroccan lava clay.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBimC9mIvl7tF4UM_EF4Yz6LpnAuJVCd3yd-CK9-QmJxkfZkyB909UWrdQ3sEZtf7gwrL_UMqu-y8zRvfVky2wI0dni0n6A61qQMvJsIToXDKWBrANqNpzmQCLYIT3VecLxL_P26li8WoQQ93N20XJ-ILF-2cEULEav9NsCOSRe3O8VFkdLI4mMcT5MIH7jZnOd9bM9gVdy51LsZZ25qH5t0G_MS8o5qcLezWLbyI_yqTQGTPd02I_3_PseDWLZ41VbW-5Nr6Ji8KM',
    tags: ['Cold-Pressed', 'Vegan', 'Handcrafted'],
    ingredients: 'Saponified Oils of Olive, Coconut, and Shea Butter. French Lavender Essential Oil, Moroccan Lava Clay (Rhassoul), Dried Lavender Buds.',
    benefits: ['Detoxifies skin', 'Relaxes mind', 'Rich in minerals'],
    usage: 'Use daily for hands or body.'
  },
  {
    id: 'midnight-bloom-elixir',
    name: 'Midnight Bloom Elixir',
    price: 48.00,
    category: 'Botanical Oil',
    description: 'Infused with nocturnal blooms for deep overnight skin repair.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd3b39on4du0FX3pK5ib8wggtOth6t74hZWjerguHt0k2vpwzR-zHFfE-W37QNw9sLnFBXNjv4K_2fbmqNDLCIKKu5KgBO94_OxI065GsrzYYThz2OCw65A8YxpsTcgZSu5-jSV_etRiSncq5_3alOpMbEEY0EFQlBYHfqj8hkUDVYV-wVL6nuyWfm5i3BqlWUo-czZAs2QJYm76sW-rnzceleYlR_WzeKEEBw283g2w3Mn-R-6nf2dhfkNVQNOTP2qT-zBX0lOa0',
    tags: ['Nightly', 'Overnight', 'Intense'],
    benefits: ['Repairing', 'Soothing', 'Radiance-boosting']
  },
  {
    id: 'botanist-ritual-kit',
    name: "Botanist's Ritual Kit",
    price: 112.00,
    category: 'The Ritual Set',
    description: 'A comprehensive collection of our finest botanical essentials.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ClMebiP645T1_OBL_NKxmb7TZ4lKT-el1mVdY_UFimsoydS4O0cRdcjuW6UEt2LMYc5LUi100PH_jDjkOHiiSTc4aJLNh54bdXCdHoZF0xpDGXh1HT9UQoU4PFV44a-JnX38Om4qvpAe4BY8rCCqPbYt1HuAizmzhywYI1CHhkGFeXcHFZ6vp2w_yXp7vzsJgkAAuXtu96n4BB8khJb38-AUMDmwS2BTy3WJVx2sZRzyLDMe_4O46o6IRmC5vHvUxJUFrANBX1k',
    tags: ['Limited Edition', 'Set', 'Luxury'],
    benefits: ['Complete routine', 'Perfect gift', 'Artisanal value']
  },
  {
    id: 'sage-clay-balm',
    name: 'Sage & Clay Balm',
    price: 36.00,
    category: 'Purifying Balm',
    description: 'A thick, creamy treatment to draw out impurities and soothe inflammation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_EX2XBMBPGB1do_eActXOGaNaCeHaLiITEUboQTXa9X2b3cO6ilpwFa3-D2O1mWHhobB-rm7iDCKHhp0t84PlS5liSo0YQUsBwYup5-1HWFjgz0njRqBmbxd8TNk14j1DFgUEMGBUDTRnlgMsIl2Tz4sJ--L0DvbbbFmRZHZM6rcgcSD6zb9QohZFL7LQFL5c9lU3uqOb9Qmhg75bW3lok4CwWIwirQws_xDNQpoKrjDYQqj2p0Jl3SzP4NQF96MMA1TOCHCXWtg',
    tags: ['Purifying', 'Sage', 'Clay'],
    benefits: ['Anti-inflammatory', 'Clearing', 'Softening']
  }
];

export const getProducts = () => Promise.resolve(products);
export const getProductById = (id: string) => Promise.resolve(products.find(p => p.id === id));
