
import { Product } from '../types';

// Base products defined explicitly.  These serve as examples and template items for
// additional items generated below.  Don't remove or reorder these unless you
// update the generation logic accordingly.
const baseProducts: Product[] = [
  // Perfumes
  {
    id: 'p1',
    name: { ar: 'عطر المارشميلو الفاخر', en: 'Luxurious Marshmallow Perfume' },
    category: 'perfumes',
    price: 145,
    oldPrice: 180,
    rating: 4.9,
    reviewCount: 342,
    images: ['https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=1000&fit=crop'],
    description: {
      ar: 'عطر حلو ودافئ مستوحى من المارشميلو الكريمي مع لمسات من الفانيليا والكراميل. عطر جذاب يترك أثراً لا يُنسى طوال اليوم.',
      en: 'A sweet and warm fragrance inspired by creamy marshmallow with hints of vanilla and caramel. An alluring scent that leaves an unforgettable trail all day long.',
    },
    details: {
      ar: 'مكونات العطر: مارشميلو، فانيليا، كراميل، مسك أبيض. الحجم: 90 مل. تركيز: أو دو برفوم.',
      en: 'Notes: Marshmallow, Vanilla, Caramel, White Musk. Size: 90ml. Concentration: Eau de Parfum.',
    },
    tags: ['best-seller', 'on-sale'],
  },
  {
    id: 'p2',
    name: { ar: 'عطر روما الملكي', en: 'Royal Roma Perfume' },
    category: 'perfumes',
    price: 165,
    rating: 4.8,
    reviewCount: 287,
    images: ['https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1595425970518-04fecd2d6c2d?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=1000&fit=crop'],
    description: {
      ar: 'عطر أنثوي راقي يجمع بين الفانيليا الكريمية والياسمين الأبيض. رائحة ساحرة تعكس الأنوثة والجاذبية الآسرة.',
      en: 'An elegant feminine fragrance that blends creamy vanilla with white jasmine. A captivating scent that reflects femininity and irresistible charm.',
    },
    details: {
      ar: 'مكونات العطر: ياسمين أبيض، فانيليا، أزهار البرتقال، خشب الصندل. الحجم: 100 مل. تركيز: أو دو برفوم.',
      en: 'Notes: White Jasmine, Vanilla, Orange Blossom, Sandalwood. Size: 100ml. Concentration: Eau de Parfum.',
    },
    tags: ['new-arrival', 'best-seller'],
  },
  {
    id: 'p3',
    name: { ar: 'عطر الفانيليا الإلهية', en: 'Divine Vanilla Perfume' },
    category: 'perfumes',
    price: 155,
    rating: 4.9,
    reviewCount: 315,
    images: ['https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=1000&fit=crop', 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&h=1000&fit=crop'],
    description: {
      ar: 'عطر فانيليا غني ودافئ مع لمسات من اللافندر والمسك. عطر فاخر يمزج بين الحلاوة والقوة في تركيبة متوازنة مثالية.',
      en: 'A rich and warm vanilla fragrance with touches of lavender and musk. A luxurious scent that blends sweetness and strength in a perfectly balanced composition.',
    },
    details: {
      ar: 'مكونات العطر: فانيليا مدغشقر، لافندر، عنبر، مسك. الحجم: 100 مل. تركيز: أو دو برفوم إنتنس.',
      en: 'Notes: Madagascar Vanilla, Lavender, Amber, Musk. Size: 100ml. Concentration: Eau de Parfum Intense.',
    },
    tags: ['new-arrival'],
  },
  // Makeup
  {
    id: 'm1',
    name: { ar: 'كريم أساس ايربرش المخملي', en: 'Airbrush Flawless Foundation' },
    category: 'makeup',
    price: 68,
    rating: 4.9,
    reviewCount: 456,
    images: ['https://cdn.salla.sa/jZYvEd/040bcad4-d119-48c3-93bb-3db1737e3c5b-652x1000-Xf0WorFcLFKVZhXfSAkdf2d3hUNrocqmpooyOHsK.jpg', 'https://cdn.salla.sa/jZYvEd/040bcad4-d119-48c3-93bb-3db1737e3c5b-652x1000-Xf0WorFcLFKVZhXfSAkdf2d3hUNrocqmpooyOHsK.jpg', 'https://cdn.salla.sa/jZYvEd/040bcad4-d119-48c3-93bb-3db1737e3c5b-652x1000-Xf0WorFcLFKVZhXfSAkdf2d3hUNrocqmpooyOHsK.jpg'],
    description: {
      ar: 'كريم أساس سائل بتغطية كاملة وملمس مخملي خفيف. يمنح بشرتك مظهراً خالياً من العيوب طوال اليوم مع إطلالة طبيعية ومثالية.',
      en: 'A full-coverage liquid foundation with a lightweight velvety texture. Gives your skin a flawless finish all day with a natural and perfect look.',
    },
    details: {
      ar: 'اللون: 40 درجة متاحة. الحجم: 30 مل. اللمسة النهائية: مات طبيعي. مناسب لجميع أنواع البشرة.',
      en: 'Color: 40 shades available. Size: 30ml. Finish: Natural Matte. Suitable for all skin types.',
    },
    tags: ['best-seller', 'new-arrival'],
  },
  {
    id: 'm2',
    name: { ar: 'كونسيلر كريمي مشع', en: 'Radiant Creamy Concealer' },
    category: 'makeup',
    price: 42,
    oldPrice: 55,
    rating: 4.8,
    reviewCount: 523,
    images: ['https://cdn.salla.sa/QnvrA/OmlQS6x0Z5PGbkAueD5hqbS0TYoa7ob8SliENtAR.png', 'https://cdn.salla.sa/QnvrA/OmlQS6x0Z5PGbkAueD5hqbS0TYoa7ob8SliENtAR.png', 'https://cdn.salla.sa/QnvrA/OmlQS6x0Z5PGbkAueD5hqbS0TYoa7ob8SliENtAR.png'],
    description: {
      ar: 'كونسيلر كريمي فائق التغطية يخفي الهالات السوداء والعيوب بشكل مثالي. تركيبة مرطبة تدوم طويلاً دون تجعد أو تكتل.',
      en: 'A super-coverage creamy concealer that perfectly hides dark circles and imperfections. A moisturizing formula that lasts long without creasing or caking.',
    },
    details: {
      ar: 'اللون: 30 درجة متاحة. الحجم: 6 مل. غني بالفيتامينات المغذية للبشرة.',
      en: 'Color: 30 shades available. Size: 6ml. Enriched with nourishing vitamins for the skin.',
    },
    tags: ['on-sale', 'best-seller'],
  },
  {
    id: 'm3',
    name: { ar: 'بلاش سائل وردي ناعم', en: 'Soft Pinch Liquid Blush' },
    category: 'makeup',
    price: 35,
    rating: 4.9,
    reviewCount: 612,
    images: ['https://img.kwcdn.com/product/fancy/272de197-bc83-4f55-aac7-37cb6b82ef4b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp', 'https://img.kwcdn.com/product/fancy/272de197-bc83-4f55-aac7-37cb6b82ef4b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp', 'https://img.kwcdn.com/product/fancy/272de197-bc83-4f55-aac7-37cb6b82ef4b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp'],
    description: {
      ar: 'بلاش سائل خفيف الوزن بتركيبة قابلة للدمج بسهولة. يمنح خديك إطلالة وردية طبيعية ومشرقة تدوم طوال اليوم.',
      en: 'A lightweight liquid blush with an easy-to-blend formula. Gives your cheeks a natural and radiant rosy look that lasts all day.',
    },
    details: {
      ar: 'اللون: وردي، خوخي، توتي. الحجم: 15 مل. نباتي وخالي من القسوة.',
      en: 'Color: Pink, Peach, Berry. Size: 15ml. Vegan and cruelty-free.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm4',
    name: { ar: 'برونزر مات طبيعي', en: 'Hoola Matte Bronzer' },
    category: 'makeup',
    price: 48,
    rating: 4.8,
    reviewCount: 389,
    images: ['https://darbeauty.com/cdn/shop/products/LollisMatteBronzer-2.jpg?v=1659854969&width=1080', 'https://darbeauty.com/cdn/shop/products/LollisMatteBronzer-2.jpg?v=1659854969&width=1080', 'https://darbeauty.com/cdn/shop/products/LollisMatteBronzer-2.jpg?v=1659854969&width=1080'],
    description: {
      ar: 'برونزر بتركيبة مات طبيعية خالية من اللمعان. يمنح بشرتك توهجاً دافئاً وصحياً يبدو كأنك عدت لتوك من عطلة مشمسة.',
      en: 'A matte bronzer with a natural shimmer-free formula. Gives your skin a warm and healthy glow as if you just returned from a sunny vacation.',
    },
    details: {
      ar: 'اللون: بني طبيعي. الوزن: 8 جم. خالي من البارابين والتلك.',
      en: 'Color: Natural Brown. Weight: 8g. Paraben-free and talc-free.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'm5',
    name: { ar: 'باليت ظلال عيون نيكد روز', en: 'Naked Rose Eyeshadow Palette' },
    category: 'makeup',
    price: 72,
    rating: 4.9,
    reviewCount: 734,
    images: ['https://m.media-amazon.com/images/I/71yhtW8+DRL._SL1000_.jpg', 'https://m.media-amazon.com/images/I/71yhtW8+DRL._SL1000_.jpg', 'https://m.media-amazon.com/images/I/71yhtW8+DRL._SL1000_.jpg'],
    description: {
      ar: 'باليت فاخرة تحتوي على 12 لون وردي ونود مع لمسات ذهبية. ألوان غنية وسهلة الدمج لإطلالات عيون متنوعة من النهار للمساء.',
      en: 'A luxurious palette with 12 pink and nude shades with golden touches. Rich and easy-to-blend colors for versatile eye looks from day to night.',
    },
    details: {
      ar: 'الألوان: 12 لون (مات، لامع، ميتاليك). الوزن: 15.6 جم. تركيبة مصطبغة عالية.',
      en: 'Shades: 12 colors (matte, shimmer, metallic). Weight: 15.6g. Highly pigmented formula.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm6',
    name: { ar: 'ماسكارا سكاي هاي المكثفة', en: 'Sky High Volumizing Mascara' },
    category: 'makeup',
    price: 28,
    rating: 4.9,
    reviewCount: 891,
    images: ['https://www.maybelline-me.com/-/media/project/loreal/brand-sites/mny/apac/mena/products/eye-makeup/mascara/lash-sensational-sky-high-washable-mascara-makeup/maybelline-lash-sensational-sky-high-wsh-801-very-black-041554590500-o.jpg?rev=85538821121a40a19f0e42ba950200b6&cx=0&cy=0&cw=760&ch=1130&hash=8516F6ABDF4BFD14CD0F53FE1C4FDBED', 'https://www.maybelline-me.com/-/media/project/loreal/brand-sites/mny/apac/mena/products/eye-makeup/mascara/lash-sensational-sky-high-washable-mascara-makeup/maybelline-lash-sensational-sky-high-wsh-801-very-black-041554590500-o.jpg?rev=85538821121a40a19f0e42ba950200b6&cx=0&cy=0&cw=760&ch=1130&hash=8516F6ABDF4BFD14CD0F53FE1C4FDBED', 'https://www.maybelline-me.com/-/media/project/loreal/brand-sites/mny/apac/mena/products/eye-makeup/mascara/lash-sensational-sky-high-washable-mascara-makeup/maybelline-lash-sensational-sky-high-wsh-801-very-black-041554590500-o.jpg?rev=85538821121a40a19f0e42ba950200b6&cx=0&cy=0&cw=760&ch=1130&hash=8516F6ABDF4BFD14CD0F53FE1C4FDBED'],
    description: {
      ar: 'ماسكارا تمنح رموشك طولاً وكثافة مذهلين. فرشاة مرنة تصل لأصغر رمش مع تركيبة خفيفة لا تتكتل أو تتلطخ.',
      en: 'A mascara that gives your lashes incredible length and volume. A flexible brush reaches the tiniest lash with a lightweight formula that doesn\'t clump or smudge.',
    },
    details: {
      ar: 'اللون: أسود، بني. الحجم: 7.2 مل. مقاوم للماء. غني بخلاصة الخيزران وألياف الإطالة.',
      en: 'Color: Black, Brown. Size: 7.2ml. Water-resistant. Enriched with bamboo extract and lengthening fibers.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm7',
    name: { ar: 'أحمر شفاه مات ثوري', en: 'Matte Revolution Lipstick' },
    category: 'makeup',
    price: 52,
    rating: 4.8,
    reviewCount: 445,
    images: ['https://m.media-amazon.com/images/I/61MD9-dJFDL._AC_UF1000,1000_QL80_.jpg', 'https://m.media-amazon.com/images/I/61MD9-dJFDL._AC_UF1000,1000_QL80_.jpg', 'https://m.media-amazon.com/images/I/61MD9-dJFDL._AC_UF1000,1000_QL80_.jpg'],
    description: {
      ar: 'أحمر شفاه مخملي بلمسة نهائية مات مريحة. تركيبة كريمية غنية تدوم طويلاً وترطب الشفاه دون جفاف.',
      en: 'A velvety lipstick with a comfortable matte finish. A rich creamy formula that lasts long and moisturizes lips without drying.',
    },
    details: {
      ar: 'اللون: بيلو توك، روزبيري، نود. الحجم: 3.5 جم. مع فيتامين E وزيت الليبستيك تري.',
      en: 'Color: Pillow Talk, Rosebery, Nude. Size: 3.5g. With Vitamin E and Lipstick Tree oil.',
    },
    tags: ['new-arrival'],
  },
  {
    id: 'm8',
    name: { ar: 'زيت جلوس شفاه ديور', en: 'Dior Lip Glow Oil' },
    category: 'makeup',
    price: 58,
    rating: 4.9,
    reviewCount: 367,
    images: ['https://static.sweetcare.pt/img/prd/488/v-638273620582489270/dior-013075di_03.webp', 'https://static.sweetcare.pt/img/prd/488/v-638273620582489270/dior-013075di_03.webp', 'https://static.sweetcare.pt/img/prd/488/v-638273620582489270/dior-013075di_03.webp'],
    description: {
      ar: 'زيت شفاه فاخر يمنح لمعة طبيعية مع ترطيب عميق. يحمي ويغذي الشفاه مع لمسة لون خفيفة تتكيف مع لون شفتيك الطبيعي.',
      en: 'A luxurious lip oil that gives a natural shine with deep hydration. Protects and nourishes lips with a light color touch that adapts to your natural lip color.',
    },
    details: {
      ar: 'اللون: وردي، كورال، توتي. الحجم: 6 مل. غني بزيت الكرز والشيري وفيتامين E.',
      en: 'Color: Pink, Coral, Berry. Size: 6ml. Enriched with cherry oil and Vitamin E.',
    },
    tags: ['best-seller', 'new-arrival'],
  },
  {
    id: 'm9',
    name: { ar: 'آيلاينر إيبيك إنك السائل', en: 'Epic Ink Liquid Eyeliner' },
    category: 'makeup',
    price: 18,
    rating: 4.8,
    reviewCount: 678,
    images: ['https://cdn.shopify.com/s/files/1/0533/3401/6154/files/800897085605.webp?v=1743668046', 'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/800897085605.webp?v=1743668046', 'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/800897085605.webp?v=1743668046'],
    description: {
      ar: 'آيلاينر سائل بقلم رفيع دقيق يرسم خطوطاً حادة ومثالية. تركيبة مقاومة للماء والدموع تدوم حتى 24 ساعة دون تلطخ.',
      en: 'A liquid eyeliner with a fine precision tip that draws sharp and perfect lines. A waterproof and tear-resistant formula that lasts up to 24 hours without smudging.',
    },
    details: {
      ar: 'اللون: أسود غامق. الحجم: 1 مل. مقاوم للماء والعرق. نباتي وخالي من القسوة.',
      en: 'Color: Deep Black. Size: 1ml. Water and sweat resistant. Vegan and cruelty-free.',
    },
    tags: ['best-seller'],
  },
  
  // Clothing
  {
    id: 'c1',
    name: { ar: 'فستان سهرة حريري طويل', en: 'Silk Maxi Evening Dress' },
    category: 'clothing',
    price: 150,
    rating: 4.9,
    reviewCount: 75,
    images: ['https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/UtCKuDTJGqENDAOv.jpg', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/UtCKuDTJGqENDAOv.jpg', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/UtCKuDTJGqENDAOv.jpg'],
    description: {
      ar: 'فستان سهرة حريري أنيق طويل بقصة انسيابية فاخرة. مثالي للمناسبات الخاصة والحفلات الراقية مع تصميم يبرز الأنوثة.',
      en: 'An elegant long silk evening dress with a luxurious flowing silhouette. Perfect for special occasions and upscale parties with a design that highlights femininity.',
    },
    details: {
      ar: 'الخامة: 100% حرير طبيعي. تعليمات العناية: تنظيف جاف فقط. متوفر بمقاسات: S, M, L, XL.',
      en: 'Material: 100% Natural Silk. Care instructions: Dry clean only. Available sizes: S, M, L, XL.',
    },
    tags: ['new-arrival', 'best-seller'],
  },
  {
    id: 'c2',
    name: { ar: 'فستان يومي كتان مريح', en: 'Comfortable Linen Daily Dress' },
    category: 'clothing',
    price: 80,
    oldPrice: 100,
    rating: 4.8,
    reviewCount: 112,
    images: ['https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/WSTexeOdcbnUiEMV.jpg', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/WSTexeOdcbnUiEMV.jpg', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/WSTexeOdcbnUiEMV.jpg'],
    description: {
      ar: 'فستان يومي كتان مريح بتصميم عملي وأنيق. مثالي للاستخدام اليومي والخرجات البسيطة مع راحة استثنائية طوال اليوم.',
      en: 'A comfortable linen daily dress with a practical and elegant design. Perfect for everyday use and casual outings with exceptional all-day comfort.',
    },
    details: {
      ar: 'الخامة: 100% كتان طبيعي. تعليمات العناية: غسيل آلي بماء بارد. متوفر بألوان متعددة.',
      en: 'Material: 100% Natural Linen. Care instructions: Machine wash cold. Available in multiple colors.',
    },
    tags: ['on-sale'],
  },
  {
    id: 'c3',
    name: { ar: 'جاكيت بليزر قصير أنيق', en: 'Chic Short Blazer Jacket' },
    category: 'clothing',
    price: 120,
    rating: 4.9,
    reviewCount: 95,
    images: ['https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/GBtJOzlLDbETAAeo.jpg', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/GBtJOzlLDbETAAeo.jpg', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/GBtJOzlLDbETAAeo.jpg'],
    description: {
      ar: 'جاكيت بليزر قصير أنيق بقصة عصرية يضيف لمسة احترافية لأي إطلالة. يمكن تنسيقه مع بنطال أو فستان أو جينز.',
      en: 'A chic short blazer jacket with a modern cut that adds a professional touch to any outfit. Can be styled with pants, dress, or jeans.',
    },
    details: {
      ar: 'الخامة: مزيج من البوليستر والفسكوز. اللون: أسود، بيج، كحلي. تعليمات العناية: تنظيف جاف.',
      en: 'Material: Polyester & Viscose Blend. Color: Black, Beige, Navy. Care instructions: Dry clean.',
    },
    tags: ['best-seller'],
  },
  {
    id: 'm10',
    name: { ar: 'ماسكارا مقاومة للماء', en: 'Waterproof Mascara' },
    category: 'makeup',
    price: 32,
    rating: 4.8,
    reviewCount: 567,
    images: ['https://emirateswoman.com/ar/wp-content/uploads/2018/08/Diorshow-Waterproof-Mascara-%D9%85%D9%86-Dior.png', 'https://emirateswoman.com/ar/wp-content/uploads/2018/08/Diorshow-Waterproof-Mascara-%D9%85%D9%86-Dior.png', 'https://emirateswoman.com/ar/wp-content/uploads/2018/08/Diorshow-Waterproof-Mascara-%D9%85%D9%86-Dior.png'],
    description: {
      ar: 'ماسكارا مقاومة للماء تمنح رموشك طول وكثافة مذهلين. تركيبة متطورة تمنحك نظرة عميقة وجذابة طوال اليوم دون التأثر بالماء أو العرق.',
      en: 'Waterproof mascara that gives your lashes incredible length and volume. An advanced formula gives you a deep and captivating look all day without being affected by water or sweat.',
    },
    details: {
      ar: 'اللون: أسود مطلق. الحجم: 9 مل. مقاوم للماء والدموع. يحتوي على فيتامين B5 لترطيب الرموش.',
      en: 'Color: Pure Black. Size: 9ml. Water and tear resistant. Contains Vitamin B5 to moisturize lashes.',
    },
    tags: ['best-seller'],
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
        basePrice = 15;
        break;
      case 'clothing':
        basePrice = 40;
        break;
    }
    // Price increases slightly with the index to create variation
    const price = basePrice + (index % 10) * 5;
    // Occasionally provide an oldPrice to indicate a discount
    const hasDiscount = index % 4 === 0;
    const oldPrice = hasDiscount ? price + 20 : undefined;
    // Generate a rating between 4.0 and 5.0
    const rating = 4 + ((index % 10) / 10);
    // Review count varies modestly
    const reviewCount = 50 + (index * 7) % 200;
    // Construct generic names in both languages
    // Determine descriptive names.  We cycle through a list of names for each
    // category so that items are labelled nicely rather than with simple
    // numeric identifiers.  If the number of items exceeds the name list,
    // names will repeat.
    const perfumeNamesAr = [
      'عطر الفانيليا الدافئة',
      'عطر الورد الدمشقي',
      'عطر الصندل الملكي',
      'عطر الياسمين الليلي',
      'عطر العود الماسي',
      'عطر الكراميل المخملي',
      'عطر اللافندر الفرنسي',
      'عطر المسك الأبيض',
      'عطر العنبر الشرقي',
      'عطر زهرة اللوتس',
      'عطر الباتشولي الغامض',
      'عطر الفريزيا المنعشة',
      'عطر البرغموت الإيطالي',
      'عطر التوت البري الحلو',
      'عطر الزعفران الذهبي',
      'عطر خشب الأرز الفاخر',
      'عطر الجاردينيا الناعمة',
      'عطر الكشمير الدافئ',
      'عطر زهر البرتقال',
      'عطر الإيلنغ الاستوائي',
      'عطر الهيل العربي',
      'عطر التونكا الكريمية',
      'عطر الماغنوليا الأنيقة',
      'عطر الفيتيفر الأخضر',
      'عطر البخور الملكي',
      'عطر النيرولي المضيء',
      'عطر الأوسمانثوس النادر'
    ];
    const perfumeNamesEn = [
      'Warm Vanilla Perfume',
      'Damascene Rose Perfume',
      'Royal Sandalwood Perfume',
      'Night Jasmine Perfume',
      'Diamond Oud Perfume',
      'Velvet Caramel Perfume',
      'French Lavender Perfume',
      'White Musk Perfume',
      'Oriental Amber Perfume',
      'Lotus Blossom Perfume',
      'Mysterious Patchouli Perfume',
      'Fresh Freesia Perfume',
      'Italian Bergamot Perfume',
      'Sweet Raspberry Perfume',
      'Golden Saffron Perfume',
      'Luxurious Cedarwood Perfume',
      'Soft Gardenia Perfume',
      'Warm Cashmere Perfume',
      'Orange Blossom Perfume',
      'Tropical Ylang Ylang Perfume',
      'Arabian Cardamom Perfume',
      'Creamy Tonka Perfume',
      'Elegant Magnolia Perfume',
      'Green Vetiver Perfume',
      'Royal Incense Perfume',
      'Radiant Neroli Perfume',
      'Rare Osmanthus Perfume'
    ];
    const makeupNamesAr = [
      'كريم أساس مخملي طبيعي',
      'كونسيلر مشع مخفي',
      'بلاش سائل وردي',
      'برونزر صيفي دافئ',
      'باليت ظلال عيون نود',
      'ماسكارا مطولة ومكثفة',
      'أحمر شفاه مات فاخر',
      'جلوس شفاه مرطب لامع',
      'آيلاينر سائل دقيق',
      'بودرة تثبيت ناعمة',
      'برايمر مضيء للوجه',
      'قلم حواجب دقيق',
      'هايلايتر لؤلؤي',
      'باليت كونتور احترافية',
      'أحمر شفاه سائل مات',
      'ماسكارا مقاومة للماء',
      'قلم شفاه محدد',
      'سبراي تثبيت المكياج',
      'باليت ظلال عيون لامعة',
      'كريم BB متعدد الفوائد',
      'بودرة مضغوطة شفافة'
    ];
    const makeupNamesEn = [
      'Velvety Natural Foundation',
      'Radiant Concealer',
      'Liquid Pink Blush',
      'Warm Summer Bronzer',
      'Nude Eyeshadow Palette',
      'Lengthening Volumizing Mascara',
      'Luxurious Matte Lipstick',
      'Moisturizing Glossy Lip Gloss',
      'Precision Liquid Eyeliner',
      'Smooth Setting Powder',
      'Illuminating Face Primer',
      'Precision Brow Pencil',
      'Pearl Highlighter',
      'Professional Contour Palette',
      'Liquid Matte Lipstick',
      'Waterproof Mascara',
      'Lip Liner Pencil',
      'Makeup Setting Spray',
      'Shimmery Eyeshadow Palette',
      'Multi-Benefit BB Cream',
      'Translucent Pressed Powder'
    ];
    const clothingNamesAr = [
      'فستان شيفون مزهر ناعم',
      'فستان أسود كلاسيكي قصير',
      'فستان سادة بأكمام منفوشة',
      'فستان قميصي بأزرار أمامية',
      'فستان ساتان بكتف واحد',
      'فستان بليسيه بألوان باستيل',
      'تنورة بليسيه ميدي',
      'تنورة جينز عالية الخصر',
      'تنورة قلم مستقيمة رسمية',
      'تنورة كلوش بنقشة ورود',
      'بنطال قماش واسع الأرجل',
      'بنطال جينز سكيني كلاسيكي',
      'بنطال كارغو بجيوب جانبية',
      'بنطال قماش رسمي بقصّة مستقيمة',
      'طقم بدلة نسائية (جاكيت + بنطال)',
      'جاكيت طويل بقصّة مستقيمة',
      'معطف صوفي شتوي فاخر',
      'معطف ترنش كلاسيكي بحزام',
      'كارديغان تريكو ناعم',
      'سويتر أوفر سايز محبوك',
      'بلوزة ساتان بياقة V',
      'بلوزة بأكمام منفوخة ودانتيل',
      'قميص قطني مخطط',
      'قميص أبيض كلاسيكي بأزرار',
      'تيشيرت قطن بطبعة بسيطة',
      'تيشيرت أسود سادة أساسي',
      'طقم رياضي (هودي + بنطال)',
      'طقم منزلي قطني مريح',
      'بيجاما حريرية بطبعة زهور',
      'عباية مفتوحة بشيفون ناعم',
      'عباية سادة بقصة مستقيمة',
      'كيمونو خفيف للبحر',
      'فستان صيفي بدون أكمام',
      'فستان قميصي جينز',
      'تنورة طويلة مطبوعة بزهور',
      'بنطال جينز واسع (Boyfriend)',
      'طقم تنورة وبليزر بنفس اللون'
    ];
    const clothingNamesEn = [
      'Soft Floral Chiffon Dress',
      'Classic Black Short Dress',
      'Plain Dress with Puff Sleeves',
      'Button-Front Shirt Dress',
      'One-Shoulder Satin Dress',
      'Pastel Pleated Dress',
      'Midi Pleated Skirt',
      'High-Waist Denim Skirt',
      'Formal Straight Pencil Skirt',
      'Floral Print A-Line Skirt',
      'Wide-Leg Fabric Pants',
      'Classic Skinny Jeans',
      'Cargo Pants with Side Pockets',
      'Straight-Cut Formal Pants',
      'Women\'s Suit Set (Jacket + Pants)',
      'Long Straight-Cut Jacket',
      'Luxurious Wool Winter Coat',
      'Classic Belted Trench Coat',
      'Soft Knit Cardigan',
      'Oversized Chunky Sweater',
      'V-Neck Satin Blouse',
      'Lace Puff Sleeve Blouse',
      'Striped Cotton Shirt',
      'Classic White Button Shirt',
      'Simple Print Cotton T-Shirt',
      'Basic Black Plain T-Shirt',
      'Sports Set (Hoodie + Pants)',
      'Comfortable Cotton Home Set',
      'Floral Print Silk Pajamas',
      'Soft Chiffon Open Abaya',
      'Plain Straight-Cut Abaya',
      'Light Beach Kimono',
      'Sleeveless Summer Dress',
      'Denim Shirt Dress',
      'Long Floral Print Skirt',
      'Wide Boyfriend Jeans',
      'Matching Skirt and Blazer Set'
    ];
    let nameAr: string;
    let nameEn: string;
    const offset = index - existingCount - 1; // 0-based index for selection
    if (category === 'perfumes') {
      nameAr = perfumeNamesAr[offset % perfumeNamesAr.length];
      nameEn = perfumeNamesEn[offset % perfumeNamesEn.length];
    } else if (category === 'makeup') {
      nameAr = makeupNamesAr[offset % makeupNamesAr.length];
      nameEn = makeupNamesEn[offset % makeupNamesEn.length];
    } else {
      nameAr = clothingNamesAr[offset % clothingNamesAr.length];
      nameEn = clothingNamesEn[offset % clothingNamesEn.length];
    }
    const name = { ar: nameAr, en: nameEn };
    // Placeholder descriptions and details
    const description = {
      ar: `وصف موجز للمنتج رقم ${index} في قسم ${category}. مصنوع بإتقان ليمنحك تجربة فاخرة.`,
      en: `A short description for item number ${index} in the ${category} section. Crafted to give you a luxurious experience.`,
    };
    const details = {
      ar: `تفاصيل إضافية للمنتج رقم ${index}.`,
      en: `Additional details for item number ${index}.`,
    };
    // Generate a set of image URLs.  Using sequential IDs from Picsum provides
    // variety while keeping the aspect ratio consistent (800x1000 = 4:5).
    // For clothing, use direct links from the provided file.
    let images: string[];
    if (category === 'clothing') {
      // Clothing image URLs from the provided file
      // name->image mapping for clothing to match user-provided images
      const clothingImageMap: Record<string, string> = {
        'طقم منزلي قطني مريح': 'https://cdn.salla.sa/dNYrd/005cbbe2-3788-4aa4-ba9a-92f58e503716-706.875x1000-5INRIlTuHSfUT4yobtVzHPI7FRbmCLoyqGyC7iFE.jpg',
        'طقم رياضي (هودي + بنطال)': 'https://cdn.salla.sa/DGbnad/Ue2E4LIJ96Z3AEmLH1ybDE9jNhcyFSXh7qado9xV.jpg',
        'عباية مفتوحة بشيفون ناعم': 'https://mariam-col.com/cdn/shop/files/plain-3-layered-chiffon-open-abaya-3-piece-set-moa007-511772.jpg?v=1737058286',
        'تيشيرت قطن بطبعة بسيطة': 'https://image.made-in-china.com/202f0j00EVBqkZjzYToa/Fashion-Summer-Round-Neck-Graphic-Streetwear-Oversized-Cotton-Letter-Print-T-Shirt-for-Women.webp',
        'قميص قطني مخطط': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-N-zBLuxwx_k5QKtpcK3oysc4c0fvzlfBg&s',
        'بلوزة ساتان بياقة V': 'https://media.maxfashion.com/i/max/C25WCTFSWT165QRBROWNDARK-C25WCTFSWT165QR-MXWIN25300825_01-2100.jpg?$prodimg-d-prt-pdp$&$quality-standard$&fmt=auto&sm=c',
        'سويتر أوفر سايز محبوك': 'https://assets.kenzz.com/products/425915/004_18187-01.jpeg',
        'كارديغان تريكو ناعم': 'https://static.e-stradivarius.net/assets/public/1c3d/aa84/2a1c46f49b70/70bba519e38b/05034465530-a15/05034465530-a15.jpg?ts=1757411312774&w=1082&f=auto',
        'معطف صوفي شتوي فاخر': 'https://ae-pic-a1.aliexpress-media.com/kf/S7caa6e5828cf4cbfb97821dfb83cb0297.jpg',
        'جاكيت طويل بقصّة مستقيمة': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u38M6wa0plXdx6hh-4mEXKe9UVYN7CUv7g&s',
        'بنطال قماش رسمي بقصّة مستقيمة': 'https://cdn.salla.sa/jZdqK/f4c927aa-3da4-45e5-9796-4c2a9123adf6-666.66666666667x1000-tZgc91OwrXUqYrdXUepows3B7I0eLdakiTtJ4eUb.png',
        'بنطال كارغو بجيوب جانبية': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcRBlxAHmtzAGb7XoJBU56AU68kl921fEAQ&s'
      };

      const clothingImageUrls = [
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/XGcwAwvbSiRraAZu.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/dGizCmyqHzduUfFd.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/UcAJmNegRVQYQjTi.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/wuOPvFduiZwaMsgk.webp',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/iesYsxgScZbSROhS.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/yCqGBTDbJtSSKYlk.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/MwRjTpkiBBKRRGod.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/szIpbDosaNppBmNN.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/JsCjqedpYBFPymLh.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/DHBXItSwPqseiOzc.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/EslYNkCcfDSNATWu.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/pswwXBNAGjAXzWvW.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/iIPFmjZAhYxvOvyd.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/MiwuDFlUbzPpZIic.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/tRlGFxyulZUMUaDq.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/DHivYRZwQxGlSREt.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/MqWbHNCZAWlzhKKH.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/PoUQKKsKlqdGZLJl.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/BlJiGpNvUwecVMCu.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/VBFDbfGSjoJXZuvT.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/rArxpyVmMXtwbNaT.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/slCMTnsErtSFOIvp.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/fMeynNKuGzcqZcWH.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/aHktLmKuRAwwOgFf.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/EoQdBpHigQfpFwNe.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/ioewWJJMhLaeEDPI.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/DLfVvWPNSMKpStaH.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/VVmydcViCIbpLUqH.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/yoXLxoKRYkubaKLy.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/PJMfqbcsQDwXYWWh.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/IDOcHSykwXRhYJjU.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/PEgzgaHPtzUFGtKH.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/QwUWhCIgggmlezQQ.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/bYZVqYIvvIWZkxXk.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/SiHeVUoaxQEarIcU.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/JwDYABMplkkpKcLB.jpg',
        'https://files.manuscdn.com/user_upload_by_module/session_file/310519663079351340/BuwOglGAlxvEUPOB.jpg'
      ];
      // pick mapped image if available
      let imgUrl = clothingImageUrls[offset % clothingImageUrls.length];
      if (clothingImageMap[nameAr]) imgUrl = clothingImageMap[nameAr];
      images = [imgUrl, imgUrl, imgUrl];
    } else if (category === 'perfumes') {
      // Use Unsplash/Pexels images for perfumes
      const perfumeImageUrls = [
        'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=1000&fit=crop',
        'https://cdn.salla.sa/lWygQ/92c57a93-742d-4670-b6ec-cf0530411924-1000x1000-TiUVybcCdm6i8irgSHfjaALCv5qyeVx1yPuCSCCe.jpg',
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&h=1000&fit=crop',
        'https://bazzarry-s3-bucket-prod.s3.me-south-1.amazonaws.com/media/mf_webp/png/media/catalog/product/1/0/10000057411.webp',
        'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=1000&fit=crop',
        'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?w=800&h=1000&fit=crop',
        'https://cdn.salla.sa/YgEeo/Ug5JNOt8yPlfLCpQSldKxQqt8msWF15dxe0qy0ju.jpg',
        'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&h=1000&fit=crop',
        'https://f.nooncdn.com/p/pzsku/ZCD0E9F374E2CD9338D13Z/45/_/1737912349/4c1be0f6-191f-48db-bd72-912ae76b0a4c.jpg?width=480',
        'https://cdn.salla.sa/RarZy/XLtPDpKcQTEfjKIerALv3L4em9kpf696K0Ulgr2E.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgx9M60UR-tGrCM4hNtNS5uBMc47ifYaSHIQ&s',
        'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?w=800&h=1000&fit=crop',
        'https://fimgs.net/mdimg/perfume-thumbs/375x500.8313.jpg',
        'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&h=1000&fit=crop',
        'https://ma7aal.net/wp-content/uploads/2025/10/Ma7aal-Giorgio-Armani-My-Way-Ylang-Eau-de-Parfum-1.webp',
        'https://oudamoudi.net/sites/default/files/users/2/IMG-20220102-WA0036.jpg',
        'https://fimgs.net/mdimg/perfume-thumbs/375x500.8705.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubpwhVPthHdCYE_07W8mjgGNJvUg55Hpoog&s',
        'https://cdn.salla.sa/WzYKg/e8wwfAoi6SjMrXah6QWtBgzAs1vkdPF0iZ5I21Z5.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXD7WOHpIbsa-3CC-vSIZdEvSVON3Q9MgdA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hTn5Cl5yCi1J9R_X82BWmKQKLLQBDWmPXQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_8TYVcC0iQmE3ehH8RtcsCUSc_HE_qbUsw&s'
      ];
      const imgIndex = offset % perfumeImageUrls.length;
      const imgUrl = perfumeImageUrls[imgIndex];
      images = [imgUrl, imgUrl, imgUrl];
    } else {
      // Use Manuscdn signed images for makeup (replaced Unsplash/Pexels entries)
      // Primary mapping for makeup names -> images (user provided explicit mappings)
      const makeupImageMap: Record<string, string> = {
        // User-provided explicit mappings (more specific keys first where helpful)
        'زيت جلوس شفاه ديور': 'https://static.sweetcare.pt/img/prd/488/v-638273620582489270/dior-013075di_03.webp',
        'أحمر شفاه مات ثوري': 'https://m.media-amazon.com/images/I/61MD9-dJFDL._AC_UF1000,1000_QL80_.jpg',
        'ماسكارا سكاي هاي المكثفة': 'https://www.maybelline-me.com/-/media/project/loreal/brand-sites/mny/apac/mena/products/eye-makeup/mascara/lash-sensational-sky-high-washable-mascara-makeup/maybelline-lash-sensational-sky-high-wsh-801-very-black-041554590500-o.jpg?rev=85538821121a40a19f0e42ba950200b6&cx=0&cy=0&cw=760&ch=1130&hash=8516F6ABDF4BFD14CD0F53FE1C4FDBED',
        'باليت ظلال عيون نيكد روز': 'https://m.media-amazon.com/images/I/71yhtW8+DRL._SL1000_.jpg',
        'برونزر مات طبيعي': 'https://darbeauty.com/cdn/shop/products/LollisMatteBronzer-2.jpg?v=1659854969&width=1080',
        'بلاش سائل وردي ناعم': 'https://img.kwcdn.com/product/fancy/272de197-bc83-4f55-aac7-37cb6b82ef4b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
        'هايلايتر لؤلؤي': 'https://img.joomcdn.net/01116f1b95309679959bf2740461787691d42158_original.jpeg',
        'كونسيلر كريمي مشع': 'https://cdn.salla.sa/QnvrA/OmlQS6x0Z5PGbkAueD5hqbS0TYoa7ob8SliENtAR.png',
        'باليت ظلال عيون نود': 'https://cdn.salla.sa/KgKND/ea11fcc9-860a-47cc-8703-4391c21ee897-1000x1000-3BHtdaSdShV8WtvOcm5u0fCnl7wfDmWsVOieGE8E.jpg',
        'بلاش سائل وردي': 'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/IMG-5431.jpg?v=1739352448',
        'كريم أساس مخملي طبيعي': 'https://mazenonline.com/cdn/shop/files/seventeen-foundation-natural-velvet-lasting-no-80-30ml.webp?v=1703240837',
        'كريم أساس ايربرش المخملي': 'https://cdn.salla.sa/jZYvEd/040bcad4-d119-48c3-93bb-3db1737e3c5b-652x1000-Xf0WorFcLFKVZhXfSAkdf2d3hUNrocqmpooyOHsK.jpg',

        // Existing / more generic fallbacks (kept after specific user mappings)
        'آيلاينر': 'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/800897085605.webp?v=1743668046',
        'ماسكارا سكاي': 'https://babamisr.com/public/uploads/all/v645mYwwIyqNpvJozrNSFC9Z91Gz5z8XisYNBbWO.webp',
        'برونزر': 'https://shipshopp.com/cdn/shop/files/R03952853_M.jpg?v=1684666677',
        'باليت ظلال': 'https://images-na.ssl-images-amazon.com/images/I/61a8-prnvbL._SL500_._AC_SL500_.jpg',
        'بلاش سائل': 'https://img.kwcdn.com/product/fancy/dffa6dae-8f18-4d09-aae6-a956731ba20f.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
        'كريم BB': 'https://arveastore.com/wp-content/uploads/2024/01/%D9%83%D8%B1%D9%8A%D9%85-BB-690x730.webp',
        'سبراي تثبيت': 'https://alsaherapharmacy.com/wp-content/uploads/2024/11/img_0065.jpeg',
        'قلم شفاه محدد': 'https://cdn.salla.sa/Araap/a859c178-fdc7-4de9-aa3c-1f225cfa247b-1000x1000-aYjRPJBnTBLnIg0exb5JfnFtiE1sZxm4WSt1AKqs.png',
        'ماسكارا مقاومة': 'https://emirateswoman.com/ar/wp-content/uploads/2018/08/Diorshow-Waterproof-Mascara-%D9%85%D9%86-Dior.png',
        'أحمر شفاه سائل مات': 'https://cdn.salla.sa/NZNAK/b3f10074-7579-4a19-8b24-1753c61f4603-1000x1000-QkFDkWo5LIovCq7i017h0DyFPxL8vqHx1WvvBeKc.jpg',
        'كونتور': 'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/11_App_Images_40_f13f6a70-38f8-4db5-bab6-32064d40b526.png?v=1757498958',
        'قلم حواجب': 'https://cdn.salla.sa/VNvmm/9eb8cf9a-f261-4d68-a5bb-f84969f55e1d-1000x1000-zl6PjvYECBQCOHuEMUcs3w0SGJ1f7f7TwHd2oBs7.jpg',
        'برايمر': 'https://wonderbeauties.love/cdn/shop/files/8690131782726.webp?v=1729497173',
        'بودرة تثبيت': 'https://cdn.salla.sa/VqZReZ/456f5b35-2996-49f0-99f4-09a039818cf4-1000x1000-RPZcPbVJh4PJzoZQ35R7lUHqRZCm4xIoEN4suxs3.png',
        'كونسيلر': 'https://cdn.salla.sa/QnvrA/mDESqJjiBu7bTDkTydNRkpJWurEVkZsrYAa0nWvX.png',
        'آيلاينر سائل دقيق': 'https://i0.wp.com/beautycloudshop.com/wp-content/uploads/2022/06/Untitled-design-2022-06-08T183805.378.png?fit=800%2C800&ssl=1',
        'جلوس شفاه': 'https://images-na.ssl-images-amazon.com/images/I/513ijICym1L._SL500_._AC_SL500_.jpg',
        'أحمر شفاه مات فاخر': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYP4XVOIkrK9f1ETnu3zPEYvb2dQv6eArNBg&s',
        'ماسكارا مطولة': 'https://cdn.miswag.me/images/images/9ce9dbf0-e78d-46b9-a6af-6529b2ca81a5.gif',
        'نود': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkrVAMon80loK2AlOIRtPfcWpGGa5NFp1ug&s',
        'برونزر صيفي': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sayidaty.net%2F%25D8%25AC%25D9%2585%25D8%25A7%25D9%2584%2F%25D9%2585%25D9%2583%25D9%258A%25D8%25A7%25D8%25AC-%25D9%2588%25D8%25B9%25D8%25B7%25D9%2588%25D8%25B1%2F1820350-%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584-%25D8%25A8%25D8%25B1%25D9%2588%25D9%2586%25D8%25B2%25D8%25B1-%25D9%2584%25D8%25AE%25D8%25B1%25D9%258A%25D9%2581-2025&psig=AOvVaw0G0sm0m5g137u9oVNDTfvX&ust=1763494318488000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDrsrX2-ZADFQAAAAAdAAAAABAE'
      };

      // fallback sequential list is preserved for backward compatibility
      const makeupImageUrls = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5CjETGUB_7kKRAjvgOURUU3xJtEd_bBxaQ&s',
        'https://babamisr.com/public/uploads/all/v645mYwwIyqNpvJozrNSFC9Z91Gz5z8XisYNBbWO.webp',
        'https://shipshopp.com/cdn/shop/files/R03952853_M.jpg?v=1684666677',
        'https://images-na.ssl-images-amazon.com/images/I/61a8-prnvbL._SL500_._AC_SL500_.jpg',
        'https://img.kwcdn.com/product/fancy/dffa6dae-8f18-4d09-aae6-a956731ba20f.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
        'https://arveastore.com/wp-content/uploads/2024/01/%D9%83%D8%B1%D9%8A%D9%85-BB-690x730.webp',
        'https://alsaherapharmacy.com/wp-content/uploads/2024/11/img_0065.jpeg',
        'https://cdn.salla.sa/Araap/a859c178-fdc7-4de9-aa3c-1f225cfa247b-1000x1000-aYjRPJBnTBLnIg0exb5JfnFtiE1sZxm4WSt1AKqs.png',
        'https://emirateswoman.com/ar/wp-content/uploads/2018/08/Diorshow-Waterproof-Mascara-%D9%85%D9%86-Dior.png',
        'https://cdn.salla.sa/NZNAK/b3f10074-7579-4a19-8b24-1753c61f4603-1000x1000-QkFDkWo5LIovCq7i017h0DyFPxL8vqHx1WvvBeKc.jpg',
        'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/11_App_Images_40_f13f6a70-38f8-4db5-bab6-32064d40b526.png?v=1757498958',
        'https://cdn.salla.sa/VNvmm/9eb8cf9a-f261-4d68-a5bb-f84969f55e1d-1000x1000-zl6PjvYECBQCOHuEMUcs3w0SGJ1f7f7TwHd2oBs7.jpg',
        'https://wonderbeauties.love/cdn/shop/files/8690131782726.webp?v=1729497173',
        'https://cdn.salla.sa/VqZReZ/456f5b35-2996-49f0-99f4-09a039818cf4-1000x1000-RPZcPbVJh4PJzoZQ35R7lUHqRZCm4xIoEN4suxs3.png',
        'https://cdn.salla.sa/QnvrA/mDESqJjiBu7bTDkTydNRkpJWurEVkZsrYAa0nWvX.png',
        'https://i0.wp.com/beautycloudshop.com/wp-content/uploads/2022/06/Untitled-design-2022-06-08T183805.378.png?fit=800%2C800&ssl=1',
        'https://images-na.ssl-images-amazon.com/images/I/513ijICym1L._SL500_._AC_SL500_.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYP4XVOIkrK9f1ETnu3zPEYvb2dQv6eArNBg&s',
        'https://cdn.miswag.me/images/images/9ce9dbf0-e78d-46b9-a6af-6529b2ca81a5.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkrVAMon80loK2AlOIRtPfcWpGGa5NFp1ug&s',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sayidaty.net%2F%25D8%25AC%25D9%2585%25D8%25A7%25D9%2584%2F%25D9%2583%25D9%258A%25D8%25A7%25D8%25AD-%25D9%2588%25D8%25B9%25D8%25B7%25D9%2588%25D8%25B1%2F1820350-%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584-%25D8%25A8%25D8%25B1%25D9%2588%25D9%2586%25D8%25B2%25D8%25B1-%25D9%2584%25D8%25AE%25D8%25B1%25D9%258A%25D9%2581-2025&psig=AOvVaw0G0sm0m5g137u9oVNDTfvX&ust=1763494318488000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDrsrX2-ZADFQAAAAAdAAAAABAE',
        'https://cdn.shopify.com/s/files/1/0533/3401/6154/files/IMG-5431.jpg?v=1739352448',
        'https://media.zid.store/thumbs/563c0dcb-4ad5-446e-8cad-fc5f6e670eeb/665cb1f8-7b49-4777-b7e3-4b1778284e3c-thumbnail-770x770.png',
        'https://mazenonline.com/cdn/shop/files/seventeen-foundation-natural-velvet-lasting-no-80-30ml.webp?v=1703240837',
        'https://cdn.salla.sa/bGbrj/AtaudR3FeU3ouBLIPFt4g0NnreaD5FxlvFNKG67I.png'
      ];
      // If a specific image is provided for this makeup name use it
      let imgUrl = makeupImageUrls[offset % makeupImageUrls.length];
      for (const k in makeupImageMap) {
        if (nameAr.includes(k)) { imgUrl = makeupImageMap[k]; break; }
      }
      images = [imgUrl, imgUrl, imgUrl];
    }
    // Tags: mark some items as new arrivals or best sellers
    const tags: ('new-arrival' | 'best-seller' | 'on-sale')[] = [];
    if (index % 5 === 1) tags.push('new-arrival');
    if (index % 5 === 2) tags.push('best-seller');
    if (hasDiscount) tags.push('on-sale');
    products.push({ id, name, category, price, oldPrice, rating, reviewCount, images, description, details, tags });
  }
  return products;
}

// Count existing items per category in the base array
const existingCounts: Record<'perfumes' | 'makeup' | 'clothing', number> = { perfumes: 0, makeup: 0, clothing: 0 };
for (const item of baseProducts) {
  existingCounts[item.category] += 1;
}

// Generate additional items to meet the target counts (30 for perfumes/makeup, 40 for clothing)
const generatedPerfumes = generateProducts('perfumes', existingCounts['perfumes'], 30, 'p');
const generatedMakeup   = generateProducts('makeup',   existingCounts['makeup'],   30, 'm');
const generatedClothing = generateProducts('clothing', existingCounts['clothing'], 40, 'c');

// Combine base products with generated products
export const products: Product[] = [
  ...baseProducts,
  ...generatedPerfumes,
  ...generatedMakeup,
  ...generatedClothing,
];
