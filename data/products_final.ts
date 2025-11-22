import { Product } from '../types';

// Base products defined explicitly. These serve as examples and template items for
// additional items generated below. Don't remove or reorder these unless you
// update the generation logic accordingly.
const baseProducts: Product[] = [
  // Perfumes
  {
    id: 'p1',
    name: { ar: 'عطر ليالي الشرق', en: 'Arabian Nights Perfume' },
    category: 'perfumes',
    price: 85,
    oldPrice: 110,
    rating: 4.8,
    reviewCount: 125,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-L6jiXFBdwcdGUBocRoThKB&ts=489808&p=fs&cid=1&sig=8594898408832448a573533aa3cc825b69dc922d33c549809b0ae166b0076ae6&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر فاخر يجمع بين دفء العود و حلاوة الفانيليا، مصمم ليأخذك في رحلة إلى عالم ألف ليلة وليلة.',
      en: 'A luxurious fragrance that combines the warmth of oud with the sweetness of vanilla, designed to take you on a journey to the world of Arabian Nights.',
    },
    details: {
      ar: 'مكونات العطر: عود، فانيليا، عنبر، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Oud, Vanilla, Amber, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['best-seller', 'on-sale'],
  },
  {
    id: 'p4',
    name: { ar: 'عطر الصندل الشرقي', en: 'Eastern Sandalwood Perfume' },
    category: 'perfumes',
    price: 90,
    rating: 4.7,
    reviewCount: 102,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-ThQGnmv7BLLLRnsq9gutz6&ts=489808&p=fs&cid=1&sig=b53cc5933c27c2c1ffd203192a1fc8c36b12343628264114c5ac83f7a4570f94&v=0', 'https://picsum.photos/id/156/800/1000', 'https://picsum.photos/id/166/800/1000'],
    description: {
      ar: 'عتر شرقي فاخر برائحة الصندل العطرة مع لمسة من التوابل العطرية. مثالي للمناسبات الخاصة.',
      en: 'A luxurious oriental fragrance with scent of aromatic sandalwood with a touch of spicy notes. Perfect for special occasions.',
    },
    details: {
      ar: 'مكونات العطر: صندل، توابل، خشب الأرز. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Sandalwood, Spices, Cedarwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p2',
    name: { ar: 'عطر زهرة الكرز', en: 'Cherry Blossom Perfume' },
    category: 'perfumes',
    price: 70,
    rating: 4.6,
    reviewCount: 98,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-MFK9grxZfHPXVo6B5NZADn&ts=489808&p=fs&cid=1&sig=fb5c7789eddec852ed6caf8021367ef14dfc99cdff0e8de0292b643fe4de982e&v=0', 'https://picsum.photos/id/1081/800/1000', 'https://picsum.photos/id/1082/800/1000'],
    description: {
      ar: 'عطر ربيعي منعش يجسد جمال أزهار الكرز المتفتحة. مثالي للاستخدام اليومي.',
      en: 'A fresh, spring fragrance that captures the beauty of blooming cherry blossoms. Perfect for daily wear.',
    },
    details: {
      ar: 'مكونات العطر: زهر الكرز، ياسمين، خشب الصندل. الحجم: 75 مل. تركيز: أو دو تواليت.',
      en: 'Notes: Cherry Blossom, Jasmine, Sandalwood. Size: 75ml. Concentration: Eau de Toilette.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p5',
    name: { ar: 'عطر الورد الملكي', en: 'Royal Rose Perfume' },
    category: 'perfumes',
    price: 110,
    rating: 4.9,
    reviewCount: 150,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-S5SXfc3sv2Zj6x8xozd93t&ts=489808&p=fs&cid=1&sig=8594898408832448a573533aa3cc825b69dc922d33c549809b0ae166b0076&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر الورد الفاخر الملكي برائحة الوردود الطبيعية مع لمسة خفيفة من التوابل.',
      en: 'A luxurious royal rose perfume with natural scent of roses with a hint of spices.',
    },
    details: {
      ar: 'مكونات العطر: ورد، توابل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Rose, Spices, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p6',
    name: { ar: 'عطر فانيلا مخملية', en: 'Vanilla Velvet Perfume' },
    category: 'perfumes',
    price: 95,
    rating: 4.8,
    reviewCount: 130,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-NC76dLyDjdL24r3N1o6u8k&ts=489808&p=fs&cid=1&sig=37bf9fdf62c09dae20f9cec0b45d15ed5dcd7e65b07e8251ab902a9d422494f1&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر فانيلا دافئ ومخملي بلمسة نهائية ناعمة. مثالي لفترات الشتاء.',
      en: 'A warm and creamy vanilla perfume with a soft, velvety finish. Perfect for cold evenings.',
    },
    details: {
      ar: 'مكونات العطر: فانيلا، مسك، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Vanilla, Musk, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'p7',
    name: { ar: 'عطر الياسمين الحريري', en: 'Jasmine Elixir Perfume' },
    category: 'perfumes',
    price: 105,
    rating: 4.7,
    reviewCount: 140,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-7AE4xpj8xsEWwPmQM19rJy&ts=489808&p=fs&cid=1&sig=612a5c32f5ca53c8210419456a07b9c58c4af26361abe2d67a27e223b56e425e&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر ياسمين حريري فاخر يجمع بين رائحة الياسمين العطرية والزهور الربيعية.',
      en: 'A luxurious jasmine elixir perfume that combines scent of jasmine flowers with spring notes.',
    },
    details: {
      ar: 'مكونات العطر: ياسمين، زهور الربيع، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Jasmine, Spring Flowers, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'p8',
    name: { ar: 'عطر اللافندر الهادئ', en: 'Lavender Dream Perfume' },
    category: 'perfumes',
    price: 85,
    rating: 4.8,
    reviewCount: 125,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-XZXD9qUPPYPtgsGpykusSf&ts=489808&p=fs&cid=1&sig=c9af84aff8a92c08401e47a4b9a6138d8115e48964eb5304524855dc1b1e1c43398&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر لافندر هادئ ومريح يمنح شعوراً بالسكينة والاسترخاء. مثالي للاسترخاء.',
      en: 'A soothing and relaxing lavender perfume that brings a sense of calm and relaxation. Perfect for unwinding.',
    },
    details: {
      ar: 'مكونات العطر: لافندر، خشب الصندل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Lavender, Sandalwood, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p9',
    name: { ar: 'عطر نسيم البحر', en: 'Ocean Breeze Perfume' },
    category: 'perfumes',
    price: 90,
    rating: 4.6,
    reviewCount: 110,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-StPLz2XYzGtwgDBFpuj2jo&ts=489808&p=fs&cid=1&sig=bfd48375d17953d18c4ced2ff4aad5bc997d886ebe90965802f6afd685c03188&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر منعش برائحة البحر المالح مع لمسة من الملح. مثالي للأيام الحارة.',
      en: 'A refreshing ocean breeze perfume with a hint of salt. Perfect for hot days.',
    },
    details: {
      ar: 'مكونات العطر: ملح البحر، زهور بيضاء، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Sea Salt, White Flowers, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p10',
    name: { ar: 'عطر زهرة البرتقال', en: 'Orange Blossom Perfume' },
    category: 'perfumes',
    price: 75,
    rating: 4.5,
    reviewCount: 95,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-7oTLgAYidnprohimvmBMbM&ts=489808&p=fs&cid=1&sig=46638ddf37726465aaaa6b1a6138d8115e48964eb5304524855dc1b1e1c43398&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر زهور البرتقال المنعش والمشرق. مثالي للاستخدام اليومي.',
      en: 'A refreshing and uplifting orange blossom perfume that is both refreshing and energizing. Perfect for daily use.',
    },
    details: {
      ar: 'مكونات العطر: زهور البرتقال، برتقال، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Orange Blossom, Orange, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p11',
    name: { ar: 'عطر قصور الأندلس', en: 'Amber Legend Perfume' },
    category: 'perfumes',
    price: 80,
    rating: 4.7,
    reviewCount: 100,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-YRAuWX8WSHyqzbgTVcFbE3&ts=489808&p=fs&cid=1&sig=de0156e73a275050ccabed917684bf72325323fca342fa9241253e1bc81766e4&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر قصور الأندلس الغامق والعميق. مثالي للمناسبات الرسمية.',
      en: 'A mysterious and deep amber legend perfume. Perfect for formal occasions.',
    },
    details: {
      ar: 'مكونات العطر: قصور، توابل، خشب الأرز. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Amber, Spices, Cedarwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p12',
    name: { ar: 'عطر لمسة إسطنبول', en: 'Silk Touch Perfume' },
    category: 'perfumes',
    price: 85,
    rating: 4.6,
    reviewCount: 95,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-A3tqRqzVqRsPeZj9FK3uT6&ts=489808&p=fs&cid=1&sig=2cfd1dd7ce4501f5b06021f61eaf1e288d279a4b8b3110eb31c3f696a9c6892f&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر ناعم وحساس كلمسة الحرير. مثالي للإطلالات الأنيقة.',
      en: 'A soft and sensual perfume with a touch of silk. Perfect for elegant occasions.',
    },
    details: {
      ar: 'مكونات العطر: زهور بيضاء، خشب الصندل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: White Flowers, Sandalwood, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p13',
    name: { ar: 'عطر درب التوابل', en: 'Spice Route Perfume' },
    category: 'perfumes',
    price: 75,
    rating: 4.6,
    reviewCount: 110,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-YRAuWX8WSHyqzbgTVcFbE3&ts=489808&p=fs&cid=1&sig=de0156e73a275050ccabed917684bf72325323fca342fa9241253e1bc81766e4&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر شرقي حار برائحة التوابل العطرية. مثالي للمناسبات الشتوية.',
      en: 'A warm eastern perfume with spicy oriental notes. Perfect for winter evenings.',
    },
    details: {
      ar: 'مكونات العطر: توابل، خشب الأرز. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Spices, Cedarwood, Amber. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p14',
    name: { ar: 'عطر بساتين التين', en: 'Vanilla Sugar Perfume' },
    category: 'perfumes',
    price: 95,
    rating: 4.8,
    reviewCount: 120,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-N3afRsyjuQPVXF4SemR6dH&ts=489808&p=fs&cid=1&sig=47d88655435398d3108ff1b1b2679f7101dbacdce4ecded67ec454daff7eb726&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر بساتين التين الحلو والمنعش. مثالي للاستخدام اليومي.',
      en: 'A sweet vanilla sugar perfume with a warm, inviting scent. Perfect for daily use.',
    },
    details: {
      ar: 'مكونات العطر: بساتين التين، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Vanilla Sugar, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p15',
    name: { ar: 'عطر رحيق الزهور', en: 'Flower Garden Perfume' },
    category: 'perfumes',
    price: 85,
    rating: 4.9,
    reviewCount: 130,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-NJiy929am8vwx4ApUysJGY&ts=489808&p=fs&cid=1&sig=c6a76096aec45f688b71f40d13683900c6af76de2a102beecea6827d93640e63&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر من رحيق زهور الحديقة المختلفة. مثالي لفصل الربيع.',
      en: 'A delightful garden perfume with various flower scents. Perfect for spring.',
    },
    details: {
      ar: 'مكونات العطر: زهور بيضاء، خشب الصندل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: White Flowers, Sandalwood, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p16',
    name: { ar: 'عطر غروب مراكش', en: 'Sunset Mirage Perfume' },
    category: 'perfumes',
    price: 80,
    rating: 4.6,
    reviewCount: 95,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-YFu2HFhr5DR5LeFjtyGtxu&ts=489808&p=fs&cid=1&sig=f21cbf75ad12506d445df677e34ec11e973b1bd2b8fbf7f0d2551d5d0fad976b&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر غروب مراكش في الصحراء. مثالي للأمساء.',
      en: 'A mesmerizing sunset mirage perfume that captures the beauty of desert sunsets. Perfect for evenings.',
    },
    details: {
      ar: 'مكونات العطر: خشب الصندل، مسك، بهارات. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Sandalwood, Musk, Amber. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p17',
    name: { ar: 'عطر سمراء الليل', en: 'Midnight Velvet Perfume' },
    category: 'perfumes',
    price: 90,
    rating: 4.6,
    reviewCount: 100,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-Sww1N5F1E7Ys8zWFb9pJrF&ts=489808&p=fs&cid=1&sig=9232baacfa05a04f6fca2a6b0e95d8310a2bc0a7e3e09c8f59c925acff93b503&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر سمراء ليلي دافئ ومخملي. مثالي للسهرات.',
      en: 'A mysterious and dark midnight velvet perfume. Perfect for nights out.',
    },
    details: {
      ar: 'مكونات العطر: مسك، خشب الصندل، زهور ليلية. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Musk, Sandalwood, Night Flowers. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p18',
    name: { ar: 'عطر أنوثة مطلقة', en: 'Eternal Mystery Perfume' },
    category: 'perfumes',
    price: 95,
    rating: 4.7,
    reviewCount: 110,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-QmqGSWvQ4RhgX2hXSUaC1Z&ts=489808&p=fs&cid=1&sig=bd4ad0f680504a2e29955ec03bb0feedac0fe51b906b14b864c75ad9e2e0e664&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر أنوثة وغامض يجمع بين العود والعود. مثالي للمناسبات الخاصة.',
      en: 'An enigmatic and mysterious perfume that combines oud with amber. Perfect for special occasions.',
    },
    details: {
      ar: 'مكونات العطر: عود، عنبر، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Oud, Amber, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p19',
    name: { ar: 'عطر ربيع ميلورا', en: 'Spring Bloom Perfume' },
    category: 'perfumes',
    price: 80,
    rating: 4.6,
    reviewCount: 95,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-V4UpFKg5HJGokTVw2c3oDT&ts=489808&p=fs&cid=1&sig=a19339f4a653deddd4210703b61d7e56b92d6bf3a229bbba015439600dbb7619&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر ربيعي منعش يجسد جمال زهور الربيع المزهرة. مثالي للاستخدام اليومي.',
      en: 'A fresh spring fragrance that captures the beauty of blooming spring flowers. Perfect for daily use.',
    },
    details: {
      ar: 'مكونات العطر: زهور الربيع، خشب الصندل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Spring Flowers, Sandalwood, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p20',
    name: { ar: 'عطر قصور الأندلس', en: 'Amber Legend Perfume' },
    category: 'perfumes',
    price: 80,
    rating: 4.6,
    reviewCount: 100,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-2zQxeMLwqoQGzt575s8hAv&ts=489808&p=fs&cid=1&sig=cc7577017a0fd9529995e524fb9617a5c29c2bf1f4df6003c2d2659b6ab61a3d&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر قصور الأندلس الغامق والعميق. مثالي للمناسبات الرسمية.',
      en: 'A mysterious and deep amber legend perfume. Perfect for formal occasions.',
    },
    details: {
      ar: 'مكونات العطر: قصور، توابل، خشب الأرز. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Amber, Spices, Cedarwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  // Makeup
  {
    id: 'm1',
    name: { ar: 'أحمر شفاه بيب توك', en: 'Pillow Talk Lipstick' },
    category: 'makeup',
    price: 45,
    rating: 4.7,
    reviewCount: 218,
    images: ['https://cdn.salla.sa/KgKND/ea11fcc9-860a-47cc-8703-4391c21ee897-1000x1000-3BHtdaSdShV8WtvOcm5u0fCnl7wfDmWsVOieGE8E.jpg', 'https://picsum.photos/id/21/800/1000', 'https://picsum.photos/id/22/800/1000'],
    description: {
      ar: 'أحمر شفاه بلون ناعم وتركيبة كريمية. يمنح شفتيك مظهرًا ناعمًا ورطبًا طوال اليوم.',
      en: 'A creamy lipstick with a soft color and cushiony texture. Gives your lips a smooth and moisturized look all day.',
    },
    details: {
      ar: 'اللون: وردي نود. الحجم: 3.5 جم. غني بزيت الجوجوبا وفيتامين هـ.',
      en: 'Color: Nude Pink. Size: 3.5g. Enriched with jojoba oil and vitamin E.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm2',
    name: { ar: 'كونسيلر فيتامين سي', en: 'Vitamin C Concealer' },
    category: 'makeup',
    price: 25,
    oldPrice: 35,
    rating: 4.6,
    reviewCount: 225,
    images: ['https://www.thebodyshop.com.sa/east/pub/media/mageplaza/bannerslider/banner/image/c/t/ct3-desktop-concealer_4.png', 'https://picsum.photos/id/31/800/1000', 'https://picsum.photos/id/32/800/1000'],
    description: {
      ar: 'كونسيلر غني بفيتامين سي يخفي الهالات السوداء والعيوب بشكل فعال. يمنح بشرة مشرقة وموحدة.',
      en: 'Vitamin C enriched concealer that effectively hides dark circles and imperfections. Gives a bright and even complexion.',
    },
    details: {
      ar: 'اللون: متعدد الألوان. الحجم: 5 مل. غني بفيتامين سي وخلاصة النباتات.',
      en: 'Color: Multiple shades. Size: 5ml. Enriched with vitamin C and botanical extracts.',
    },
    tags: ['on-sale'],
  },
  {
    id: 'm3',
    name: { ar: 'كحل كريمي', en: 'Creamy Eyeliner' },
    category: 'makeup',
    price: 20,
    rating: 4.5,
    reviewCount: 120,
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Iz8VVGknu0EadQB6xseujJ36wtEixbYoXQ&s', 'https://picsum.photos/id/23/800/1000', 'https://picsum.photos/id/24/800/1000'],
    description: {
      ar: 'كحل كريمي سائل يمنحك خطاً دقيقاً ومنحنياً مثالياً. يدوم طويلاً ومقاوم للماء.',
      en: 'A creamy liquid eyeliner that gives you a precise and perfect curve. Long-lasting and water-resistant.',
    },
    details: {
      ar: 'اللون: أسود. الحجم: 5 مل. مقاوم للماء.',
      en: 'Color: Black. Size: 5ml. Water-resistant.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'm4',
    name: { ar: 'أحمر خدود خوخي', en: 'Peach Blush' },
    category: 'makeup',
    price: 22,
    rating: 4.6,
    reviewCount: 85,
    images: ['https://cdn.salla.sa/dpega/WC1egTJhvCLORl8hAwWGe6gpGKraS30PtY3BOt8S.jpg', 'https://picsum.photos/id/25/800/1000', 'https://picsum.photos/id/26/800/1000'],
    description: {
      ar: 'أحمر خدود بلون خوخي طبيعي يمنح بشرتك إشراقة صحية. تركيبة ناعمة وسهلة الدمج.',
      en: 'A natural peach-colored blush that gives your skin a healthy glow. Smooth and easy-to-blend formula.',
    },
    details: {
      ar: 'اللون: خوخي. الوزن: 8 جم. خالي من البارابين.',
      en: 'Color: Peach. Weight: 8g. Paraben-free.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm5',
    name: { ar: 'بودرة مضيئة', en: 'Highlighting Powder' },
    category: 'makeup',
    price: 28,
    rating: 4.7,
    reviewCount: 95,
    images: ['https://media.zid.store/60a5b506-102b-4b79-8959-72f82c2cabe0/b3efe4e2-733d-4570-9ae3-0292132de00a.jpg', 'https://picsum.photos/id/27/800/1000', 'https://picsum.photos/id/28/800/1000'],
    description: {
      ar: 'بودرة مضيئة تمنح بشرتك إشراقة طبيعية ولمعانًا خفيفًا. مثالية للمناطق المرتفعة من الوجه.',
      en: 'A highlighting powder that gives your skin a natural glow and subtle shimmer. Perfect for high points of face.',
    },
    details: {
      ar: 'اللون: شمبانزي فاتح. الوزن: 10 جم. خالي من البارابين.',
      en: 'Color: Light Champagne. Weight: 10g. Paraben-free.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'm6',
    name: { ar: 'ماسكارا مكثفة', en: 'Intensive Mascara' },
    category: 'makeup',
    price: 24,
    rating: 4.8,
    reviewCount: 140,
    images: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fmakeup.ae%2Fproduct%2F59905%2F&psig=AOvVaw3hE-dl6bH16w_XVXDB7ao9&ust=1763394464960000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIC5trmC95ADFQAAAAAdAAAAABAE', 'https://picsum.photos/id/29/800/1000', 'https://picsum.photos/id/30/800/1000'],
    description: {
      ar: 'ماسكارا تكثف الرموش وتطيلها بشكل فوري. فرشاة مبتكرة تفصل الرموش وتمنع تكتلها.',
      en: 'A mascara that instantly volumizes and lengthens lashes. Innovative brush separates lashes and prevents clumping.',
    },
    details: {
      ar: 'اللون: أسود. الحجم: 10 مل. مقاوم للماء.',
      en: 'Color: Black. Size: 10ml. Water-resistant.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm7',
    name: { ar: 'هايلايتر لامع', en: 'Shimmering Highlighter' },
    category: 'makeup',
    price: 26,
    rating: 4.8,
    reviewCount: 127,
    images: ['https://m.media-amazon.com/images/I/61fwgST8oUL._AC_UF1000,1000_QL80_.jpg', 'https://picsum.photos/id/33/800/1000', 'https://picsum.photos/id/34/800/1000'],
    description: {
      ar: 'هايلايتر سائل لامع يمنح بشرتك إشراقة ولمعانًا طبيعيًا. سهل الاستخدام والتطبيق.',
      en: 'A liquid shimmering highlighter that gives your skin a glow and natural shimmer. Easy to use and apply.',
    },
    details: {
      ar: 'اللون: شمبانزي. الحجم: 15 مل. خالي من البارابين.',
      en: 'Color: Champagne. Size: 15ml. Paraben-free.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'm8',
    name: { ar: 'باليت الكونتور الاحترافي', en: 'Professional Contour Palette' },
    category: 'makeup',
    price: 32,
    rating: 4.6,
    reviewCount: 141,
    images: ['https://i.makeup.ae/a/ah/ahup0o5uw7l8.jpg', 'https://picsum.photos/id/35/800/1000', 'https://picsum.photos/id/36/800/1000'],
    description: {
      ar: 'باليت احترافي يحتوي على ألوان كونتور وإضاءة مثالية. يمنح وجهك تعريفًا ثلاثي الأبعاد.',
      en: 'A professional palette with contour and highlight shades. Gives your face a three-dimensional definition.',
    },
    details: {
      ar: 'الألوان: 8 ألوان. الوزن: 20 جم. خالي من البارابين.',
      en: 'Shades: 8 shades. Weight: 20g. Paraben-free.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm9',
    name: { ar: 'بودرة تثبيت شفافة', en: 'Translucent Setting Powder' },
    category: 'makeup',
    price: 28,
    rating: 4.5,
    reviewCount: 134,
    images: ['https://cdn.salla.sa/gZYYOj/c6b5d881-26d2-45f9-9a4f-5891569ee85e-1000x1000-TPUXQQkMeoWRVMhu4BwooXEdVLZvtQufEcUXHKYS.jpg', 'https://picsum.photos/id/37/800/1000', 'https://picsum.photos/id/38/800/1000'],
    description: {
      ar: 'بودرة تثبيت خفيفة وشفافة تحافظ على مكياجك طوال اليوم. لا تترك أي أثر أو بقع.',
      en: 'A lightweight and translucent setting powder that keeps your makeup in place all day. Leaves no residue or patches.',
    },
    details: {
      ar: 'اللون: شفاف. الوزن: 10 جم. خالي من البارابين.',
      en: 'Color: Translucent. Weight: 10g. Paraben-free.',
    },
    tags: ['new-arrival'],
  },
  // Clothing
  {
    id: 'c1',
    name: { ar: 'فستان طويل من الحرير', en: 'Silk Maxi Dress' },
    category: 'clothing',
    price: 150,
    rating: 4.9,
    reviewCount: 75,
    images: ['https://img.welovecouture.com/pictures/products/16/10/30708/20-oct-30820.jpg', 'https://picsum.photos/id/402/800/1000', 'https://picsum.photos/id/403/800/1000'],
    description: {
      ar: 'فستان طويل أنيق مصنوع من الحرير الخالص. قصة انسيابية مثالية للمناسبات الخاصة.',
      en: 'An elegant maxi dress made from pure silk. A flowing silhouette perfect for special occasions.',
    },
    details: {
      ar: 'الخامة: 100% حرير. تعليمات العناية: تنظيف جاف فقط. متوفر بمقاسات: S, M, L.',
      en: 'Material: 100% Silk. Care instructions: Dry clean only. Available sizes: S, M, L.',
    },
    tags: ['new-arrival', 'best-seller'],
  },
  {
    id: 'c2',
    name: { ar: 'طقم بيجاما من القطن الناعم', en: 'Soft Cotton Pajama Set' },
    category: 'clothing',
    price: 60,
    oldPrice: 80,
    rating: 4.8,
    reviewCount: 112,
    images: ['https://picsum.photos/id/501/800/1000', 'https://picsum.photos/id/502/800/1000', 'https://picsum.photos/id/503/800/1000'],
    description: {
      ar: 'طقم بيجاما مريح وأنيق مصنوع من أجود أنواع القطن. مثالي لنوم هانئ وليالي مريحة.',
      en: 'A comfortable and stylish pajama set made from the finest cotton. Perfect for a good night's sleep and cozy nights.',
    },
    details: {
      ar: 'الخامة: 100% قطن. تعليمات العناية: غسيل آلي بماء بارد. اللون: وردي باهت.',
      en: 'Material: 100% Cotton. Care instructions: Machine wash cold. Color: Pale Pink.',
    },
    tags: ['on-sale'],
  },
  {
    id: 'c3',
    name: { ar: 'عطر العنبر الملكي', en: 'Royal Amber Perfume' },
    category: 'perfumes',
    price: 95,
    rating: 4.7,
    reviewCount: 88,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-L6jiXFBdwcdGUBocRoThKB&ts=489808&p=fs&cid=1&sig=8594898408832448a573533aa3cc825b69dc922d33c549809b0ae166b0076ae6&v=0', 'https://picsum.photos/id/146/800/1000'],
    description: {
      ar: 'مزيج غني من العنبر والباتشولي مع لمسة من التوابل الشرقية. عطر جريء يدوم طويلاً.',
      en: 'A rich blend of amber and patchouli with a touch of oriental spices. A bold and long-lasting scent.',
    },
    details: {
      ar: 'مكونات العطر: عنبر، باتشولي، قرفة. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Amber, Patchouli, Cinnamon. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm3',
    name: { ar: 'كريم أساس بتغطية كاملة', en: 'Full Coverage Foundation' },
    category: 'makeup',
    price: 50,
    rating: 4.7,
    reviewCount: 232,
    images: ['https://m.media-amazon.com/images/I/61yJHisupNL._UF1000,1000_QL80_.jpg', 'https://picsum.photos/id/43/800/1000'],
    description: {
      ar: 'كريم أساس سائل يوفر تغطية كاملة ومظهراً طبيعياً. يخفي العيوب ويوحد لون البشرة.',
      en: 'A liquid foundation that provides full coverage and a natural look. Hides imperfections and evens out skin tone.',
    },
    details: {
      ar: 'اللمسة النهائية: مات طبيعي. الحجم: 30 مل. مناسب لجميع أنواع البشرة.',
      en: 'Finish: Natural Matte. Size: 30ml. Suitable for all skin types.',
    },
    tags: ['new-arrival', 'best-seller'],
  },
  {
    id: 'c3',
    name: { ar: 'جاكيت بليزر أنيق', en: 'Chic Blazer Jacket' },
    category: 'clothing',
    price: 120,
    rating: 4.9,
    reviewCount: 95,
    images: ['https://picsum.photos/id/601/800/1000', 'https://picsum.photos/id/602/800/1000'],
    description: {
      ar: 'جاكيت بليزر بقصة عصرية يضيف لمسة من الأناقة لأي إطلالة. يمكن تنسيقه مع بنطال أو فستان.',
      en: 'A modern-cut blazer that adds a touch of elegance to any outfit. Can be styled with pants or a dress.',
    },
    details: {
      ar: 'الخامة: مزيج من الكتان والفسكوز. اللون: بيج. تعليمات العناية: تنظيف جاف.',
      en: 'Material: Linen & Viscose Blend. Color: Beige. Care instructions: Dry clean.',
    },
    tags: [],
  },
];

/**
 * Generate a batch of products for a given category.
 *
 * To satisfy the user's request for at least 30 products per category (and 40 for
 * clothing), we dynamically create additional items beyond the few base
 * examples above.  Each generated product uses predictable IDs, generic names,
 * and placeholder images from Picsum to ensure all images conform to the
 * recommended 4:5 aspect ratio.  Ratings, prices, and old prices are varied
 * in a simple pattern for realism.
 *
 * @param category The category of products to generate ('perfumes', 'makeup', 'clothing').
 * @param existingCount Number of products already defined in baseProducts for this category.
 * @param targetCount Desired total count for this category (e.g. 30 for perfumes & makeup, 40 for clothing).
 * @param idPrefix Prefix to use when constructing product IDs (e.g. 'p', 'm', 'c').
 * @returns An array of newly generated Product objects.
 */
function generateProducts(category: 'perfumes' | 'makeup' | 'clothing', existingCount: number, targetCount: number, idPrefix: string): Product[] {
  const products: Product[] = [];
  const itemsToGenerate = targetCount - existingCount;
  for (let i = 1; i <= itemsToGenerate; i++) {
    const index = existingCount + i; // overall index for the category
    const id = `${idPrefix}${index}`;
    // Determine a base price range per category
    let basePrice = 0;
    switch (category) {
      case 'perfumes':
        basePrice = 50;
        break;
      case 'makeup':
        basePrice = 20;
        break;
      case 'clothing':
        basePrice = 60;
        break;
    }
    // Create a new product with generated details
    const price = basePrice + (Math.floor(Math.random() * 50) + 10);
    const oldPrice = price > 30 ? price + Math.floor(Math.random() * 20) + 10 : undefined;
    const rating = 4 + Math.random() * 0.9; // Random rating between 4.0 and 4.9
    const reviewCount = 50 + Math.floor(Math.random() * 150);

    // Create a generic name based on category
    let name;
    if (category === 'perfumes') {
      const perfumeTypes = [
        { ar: 'عطر زهري', en: 'Jasmine Perfume' },
        { ar: 'عطر وودي', en: 'Sandalwood Perfume' },
        { ar: 'عطر مائي', en: 'Ocean Breeze Perfume' },
        { ar: 'عطر فاكهي', en: 'Fresh Air Perfume' },
        { ar: 'عطر مسك', en: 'Musk Essence Perfume' },
        { ar: 'عطر وردي', en: 'Rose Garden Perfume' },
        { ar: 'عطر برتقالي', en: 'Sunset Glow Perfume' },
      ];
      name = perfumeTypes[Math.floor(Math.random() * perfumeTypes.length)];
    } else if (category === 'makeup') {
      const makeupTypes = [
        { ar: 'كريم أساس', en: 'Foundation Cream' },
        { ar: 'أحمر شفاه', en: 'Lipstick' },
        { ar: 'ماسكارا', en: 'Mascara' },
        { ar: 'كحل عين', en: 'Eyeliner' },
        { ar: 'ظلال عيون', en: 'Eyeshadow Palette' },
        { ar: 'أحمر خدود', en: 'Blush' },
        { ar: 'بودرة تثبيت', en: 'Setting Powder' },
      ];
      name = makeupTypes[Math.floor(Math.random() * makeupTypes.length)];
    } else {
      const clothingTypes = [
        { ar: 'فساتين', en: 'Evening Dress' },
        { ar: 'قميص', en: 'Casual Shirt' },
        { ar: 'تنورة', en: 'Trousers' },
        { ar: 'جاكيت', en: 'Blazer' },
        { ar: 'فستان', en: 'Dress' },
        { ar: 'طقم بيجاما', en: 'Pajama Set' },
      ];
      name = clothingTypes[Math.floor(Math.random() * clothingTypes.length)];
    }

    // Create description based on category
    let description;
    if (category === 'perfumes') {
      description = {
        ar: 'عطر فاخر برائحة منعشة تدوم طويلاً. مثالي للاستخدام اليومي.',
        en: 'A luxurious fragrance with a fresh scent that lasts all day. Perfect for daily use.',
      };
    } else if (category === 'makeup') {
      description = {
        ar: 'منتج مكياب عالي الجودة يمنح مظهرًا مثالياً.',
        en: 'A high-quality makeup product that gives you a perfect look.',
      };
    } else {
      description = {
        ar: 'قطعة ملابس أنيقة ومريحة.',
        en: 'An elegant and comfortable piece of clothing.',
      };
    }

    // Create details based on category
    let details;
    if (category === 'perfumes') {
      details = {
        ar: 'الحجم: 100 مل. تركيز: أو دو برفوم.',
        en: 'Size: 100ml. Concentration: Eau de Parfum.',
      };
    } else if (category === 'makeup') {
      details = {
        ar: 'خالي من البارابين.',
        en: 'Paraben-free.',
      };
    } else {
      details = {
        ar: 'خامة: قطن. تعليمات العناية: غسيل آلي.',
        en: 'Material: Cotton. Care: Machine wash.',
      };
    }

    // Generate placeholder images
    const images = [
      `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/800/1000`,
      `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/800/1000`,
      `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/800/1000`
    ];

    // Determine tags based on rating
    const tags = rating >= 4.7 ? ['best-seller'] : rating >= 4.5 ? ['new-arrival'] : [];

    // Create the product object
    products.push({
      id,
      name,
      category,
      price,
      oldPrice,
      rating,
      reviewCount,
      images,
      description,
      details,
      tags
    });
  }

  return products;
}

// Generate additional products for each category
const perfumes = generateProducts('perfumes', 4, 30, 'p');
const makeup = generateProducts('makeup', 9, 30, 'm');
const clothing = generateProducts('clothing', 3, 40, 'c');

// Export the complete product list
export const products = [...baseProducts, ...perfumes, ...makeup, ...clothing];
