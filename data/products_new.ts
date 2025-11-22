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
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-S5SXfc3sv2Zj6x8xozd93t&ts=489808&p=fs&cid=1&sig=8594898408832448a573533aa3cc825b69dc922d33c549809b0ae166b0076ae6&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر الورد الفاخر الملكي برائحة الورود الطبيعية مع لمسة خفيفة من التوابل.',
      en: 'A luxurious royal rose perfume with the natural scent of roses with a hint of spices.',
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
    name: { ar: 'عطر المسك الأبيض الفاخر', en: 'White Musk Luxury Perfume' },
    category: 'perfumes',
    price: 120,
    rating: 4.9,
    reviewCount: 170,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-L6jiXFBdwcdGUBocRoThKB&ts=489808&p=fs&cid=1&sig=8594898408832448a573533aa3cc825b69dc922d33c549809b0ae166b0076ae6&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر مسك أبيض أنيق وفاخر بتركيبة تدوم طويلاً. مثالي للمناسبات الرسمية.',
      en: 'An elegant and luxurious white musk perfume with a long-lasting formula. Perfect for formal occasions.',
    },
    details: {
      ar: 'مكونات العطر: مسك أبيض، زهر البرتقال، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: White Musk, Orange Blossom, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p8',
    name: { ar: 'عطر الياسمين الحريري', en: 'Jasmine Elixir Perfume' },
    category: 'perfumes',
    price: 105,
    rating: 4.7,
    reviewCount: 140,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-7AE4xpj8xsEWwPmQM19rJy&ts=489808&p=fs&cid=1&sig=612a5c32f5ca53c8210419456a07b9c58c4af26361abe2d67a27e223b56e425e&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر ياسمين حريري فاخر يجمع بين رائحة الياسمين العطرية والزهور الربيعية.',
      en: 'A luxurious jasmine elixir perfume that combines the scent of jasmine flowers with spring notes.',
    },
    details: {
      ar: 'مكونات العطر: ياسمين، زهور الربيع، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Jasmine, Spring Flowers, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'p9',
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
    id: 'p10',
    name: { ar: 'عطر نسيم البحر', en: 'Ocean Breeze Perfume' },
    category: 'perfumes',
    price: 90,
    rating: 4.6,
    reviewCount: 110,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-StPLz2XYzGtwgDBFpuj2jo&ts=489808&p=fs&cid=1&sig=bfd48375d17953d18c4ced2ff4aad5bc997d886ebe90965802f6afd685c03188&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر منعش بنسيم البحر المالح مع لمسة من الملح. مثالي للأيام الحارة.',
      en: 'A refreshing ocean breeze perfume with a hint of salt. Perfect for hot days.',
    },
    details: {
      ar: 'مكونات العطر: ملح البحر، زهور بيضاء، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Sea Salt, White Flowers, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p11',
    name: { ar: 'عطر زهرة البرتقال', en: 'Orange Blossom Perfume' },
    category: 'perfumes',
    price: 75,
    rating: 4.5,
    reviewCount: 95,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-7oTLgAYidnprohimvmBMbM&ts=489808&p=fs&cid=1&sig=46638ddf37726465aaaa6b1a6138d8115e48964eb5304524855dc1b1e1c43398&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر زهور البرتقال المنعش والمشرق. مثالي للاستخدام اليومي.',
      en: 'A refreshing orange blossom perfume that is both uplifting and energizing. Perfect for daily use.',
    },
    details: {
      ar: 'مكونات العطر: زهور البرتقال، برتقال، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Orange Blossom, Orange, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p12',
    name: { ar: 'عطر توت الغابة', en: 'Forest Dew Perfume' },
    category: 'perfumes',
    price: 80,
    rating: 4.7,
    reviewCount: 100,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-EStcBNtYaQWbgwVqb3in9Q&ts=489808&p=fs&cid=1&sig=3a096db8a691488c230d52755cdc655fc20d324fc1adec480eeaf4ccff2ff2ee&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر منعش برائحة الغابات والندى الصباحي. مثالي للاستخدام الصباحي.',
      en: 'A refreshing forest dew perfume with the scent of forests and morning dew. Perfect for morning use.',
    },
    details: {
      ar: 'مكونات العطر: خشب الصندل، أوراق الشجر، ندى الصباحي. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Sandalwood, Tree Leaves, Morning Dew. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p13',
    name: { ar: 'عطر بساتين التين', en: 'Bergamot Essence Perfume' },
    category: 'perfumes',
    price: 95,
    rating: 4.8,
    reviewCount: 120,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-N3afRsyjuQPVXF4SemR6dH&ts=489808&p=fs&cid=1&sig=47d88655435398d3108ff1b1b2679f7101dbacdce4ecded67ec454daff7eb726&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر بساتين التين المنعش والمهدئ. مثالي للاسترخاء.',
      en: 'A refreshing and calming bergamot essence perfume. Perfect for relaxation.',
    },
    details: {
      ar: 'مكونات العطر: بساتين التين، خشب الصندل، زهور بيضاء. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Bergamot, Sandalwood, White Flowers. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p14',
    name: { ar: 'عطر رحيق الزهور', en: 'Flower Garden Perfume' },
    category: 'perfumes',
    price: 85,
    rating: 4.9,
    reviewCount: 130,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-NJiy929am8vwx4ApUysJGY&ts=489808&p=fs&cid=1&sig=c6a76096aec45f688b71f40d13683900c6af76de2a102beecea6827d93640e63&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر من رحيق زهور الحديقة المختلفة. مثالي لفصل الربيع.',
      en: 'A perfume from a bouquet of different garden flowers. Perfect for the spring season.',
    },
    details: {
      ar: 'مكونات العطر: زهور الحديقة، روز، ياسمين. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Garden Flowers, Rose, Jasmine. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p15',
    name: { ar: 'عطر غروب مراكش', en: 'Sunset Mirage Perfume' },
    category: 'perfumes',
    price: 90,
    rating: 4.7,
    reviewCount: 115,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-YFu2HFhr5DR5LeFjtyGtxu&ts=489808&p=fs&cid=1&sig=f21cbf75ad12506d445df677e34ec11e973b1bd2b8fbf7f0d2551d5d0fad976b&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر دافئ برائحة غروب الشمس مع لمسة خفيفة من التوابل الشرقية.',
      en: 'A warm perfume with sunset scent and a hint of oriental spices.',
    },
    details: {
      ar: 'مكونات العطر: توابل شرقية، خشب الصندل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Oriental Spices, Sandalwood, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p16',
    name: { ar: 'عطر سكر الفانيلا', en: 'Sugar Vanilla Perfume' },
    category: 'perfumes',
    price: 85,
    rating: 4.8,
    reviewCount: 125,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-N8kbd5jpcY3b8k1bKGkv7U&ts=489808&p=fs&cid=1&sig=437cbcc9d1996af91489105ab7f543c35b463b0e8fdc967ede0d394222db3ee7&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر فانيلا سكري حلو ودافئ. مثالي لفصل الشتاء.',
      en: 'A sweet and warm sugar vanilla perfume. Perfect for the winter season.',
    },
    details: {
      ar: 'مكونات العطر: فانيلا، سكر، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Vanilla, Sugar, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p17',
    name: { ar: 'عطر سمراء الليل', en: 'Midnight Rose Perfume' },
    category: 'perfumes',
    price: 100,
    rating: 4.9,
    reviewCount: 140,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-Sww1N5F1E7Ys8zWFb9pJrF&ts=489808&p=fs&cid=1&sig=9232baacfa05a04f6fca2a6b0e95d8310a2bc0a7e3e09c8f59c925acff93b503&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر ورد ليلي غامق ورومانسي. مثالي للمساء.',
      en: 'A mysterious and romantic midnight rose perfume. Perfect for evening wear.',
    },
    details: {
      ar: 'مكونات العطر: ورد ليلي، مسك، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Midnight Rose, Musk, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p18',
    name: { ar: 'عطر لمسة إسطنبول', en: 'Essence of Elegance Perfume' },
    category: 'perfumes',
    price: 110,
    rating: 4.8,
    reviewCount: 150,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-Ezg8HvAGs1nt5Pk67v7zFu&ts=489808&p=fs&cid=1&sig=93e868b12d0261639794b0536dfbc420e620bf3633446a9052875f3a668d0964&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر أنيق وفاخر بلمسة إسطنبولية كلاسيكية. مثالي للمناسبات الخاصة.',
      en: 'An elegant and luxurious perfume with a classic essence of elegance. Perfect for special occasions.',
    },
    details: {
      ar: 'مكونات العطر: زهور بيضاء، خشب الصندل، مسك. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: White Flowers, Sandalwood, Musk. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p19',
    name: { ar: 'عطر ربيع ميلورا', en: 'Spring Melody Perfume' },
    category: 'perfumes',
    price: 95,
    rating: 4.7,
    reviewCount: 110,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-V4UpFKg5HJGokTVw2c3oDT&ts=489808&p=fs&cid=1&sig=a19339f4a653deddd4210703b61d7e56b92d6bf3a229bbba015439600dbb7619&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر منعش برائحة زهور الربيع وألوانها المشرقة. مثالي لفصل الربيع.',
      en: 'A refreshing perfume with the scent of spring flowers and their bright colors. Perfect for the spring season.',
    },
    details: {
      ar: 'مكونات العطر: زهور الربيع، برتقال، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Spring Flowers, Orange, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p20',
    name: { ar: 'عطر قصور الأندلس', en: 'Secret Garden Perfume' },
    category: 'perfumes',
    price: 100,
    rating: 4.8,
    reviewCount: 125,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-2zQxeMLwqoQGzt575s8hAv&ts=489808&p=fs&cid=1&sig=cc7577017a0fd9529995e524fb9617a5c29c2bf1f4df6003c2d2659b6ab61a3d&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر سري برائحة زهور الحديقة السرية. مثالي للمناسبات الرومانسية.',
      en: 'A mysterious perfume with the scent of secret garden flowers. Perfect for romantic occasions.',
    },
    details: {
      ar: 'مكونات العطر: زهور الحديقة، مسك، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Secret Garden Flowers, Musk, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'p21',
    name: { ar: 'عطر همسات الورد', en: 'Rose Whispers Perfume' },
    category: 'perfumes',
    price: 90,
    rating: 4.6,
    reviewCount: 100,
    images: ['https://chatgpt.com/backend-api/estuary/content?id=file-42rn88XiMmfzqPhiwViNPK&ts=489808&p=fs&cid=1&sig=28719b0bdb20341f302e3e6fa745541039a343f0cd56aef2d6b23c4a8412b343&v=0', 'https://picsum.photos/id/116/800/1000', 'https://picsum.photos/id/126/800/1000'],
    description: {
      ar: 'عطر ورد ناعم وهادئ. مثالي للاستخدام اليومي.',
      en: 'A soft and gentle rose perfume. Perfect for daily wear.',
    },
    details: {
      ar: 'مكونات العطر: ورد، مسك، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Rose, Musk, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
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
    const product: Product = {
      id,
      name: {
        ar: `${category === 'perfumes' ? 'عطر' : category === 'makeup' ? 'منتج مكياج' : 'منتج ملابس'} ${index}`,
        en: `${category === 'perfumes' ? 'Perfume' : category === 'makeup' ? 'Makeup Product' : 'Clothing Item'} ${index}`,
      },
      category,
      price: basePrice + (Math.floor(Math.random() * 50) + 10),
      rating: 4 + Math.random(),
      reviewCount: Math.floor(Math.random() * 100) + 20,
      images: [
        `https://picsum.photos/id/${800 + index}/800/1000`,
        `https://picsum.photos/id/${900 + index}/800/1000`,
        `https://picsum.photos/id/${1000 + index}/800/1000`,
      ],
      description: {
        ar: `${category === 'perfumes' ? 'عطر عطري ومميز' : category === 'makeup' ? 'منتج مكياج عالي الجودة' : 'منتج ملابس أنيق ومريح'} ${index}.`,
        en: `${category === 'perfumes' ? 'A luxurious and unique perfume' : category === 'makeup' ? 'High-quality makeup product' : 'Elegant and comfortable clothing item'} ${index}.`,
      },
      details: {
        ar: `${category === 'perfumes' ? 'الحجم: 100 مل. تركيز: أو دو برفوم.' : category === 'makeup' ? 'خالي من المواد الضارة. مناسب لجميع أنواع البشرة.' : 'خامة عالية الجودة. مثالي للاستخدام اليومي.'}`,
        en: `${category === 'perfumes' ? 'Size: 100ml. Concentration: Eau de Parfum.' : category === 'makeup' ? 'Safe for all skin types.' : 'Comfortable and stylish.'}`,
      },
      tags: index % 3 === 0 ? ['new-arrival'] : index % 5 === 0 ? ['best-seller'] : [],
    };

    products.push(product);
  }

  return products;
}

// Generate additional products for each category to reach the target count
const perfumes = generateProducts('perfumes', 4, 30, 'p');
const makeup = generateProducts('makeup', 9, 30, 'm');
const clothing = generateProducts('clothing', 3, 40, 'c');

// Combine base products with generated ones
export const products: Product[] = [
  ...baseProducts,
  ...perfumes,
  ...makeup,
  ...clothing,
];
