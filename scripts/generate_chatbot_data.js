// Node script to generate chatbot datasets (Arabic MSA + Palestinian dialect).
// Run: node scripts/generate_chatbot_data.js
// This will create two files under `public/chatbot/`: `faqs_ar.json` and `interactive_ar.json`

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '..', 'public', 'chatbot');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Number of entries per dataset (default 1000). Can be provided as CLI arg or env var.
const N = Number(process.argv[2]) || Number(process.env.N) || 1000;

// Try to extract product names/prices/descriptions from data/products.ts to create
// product-aware Q&A. This is a simple text-based extraction (no TS compile).
const productsFile = path.join(__dirname, '..', 'data', 'products.ts');
let productList = [];
try {
  const prodText = fs.readFileSync(productsFile, 'utf8');
  const prodRe = /name:\s*\{\s*ar:\s*'([^']+)'[\s\S]*?price:\s*([0-9]+(?:\.[0-9]+)?)[\s\S]*?description:\s*\{[\s\S]*?ar:\s*'([^']+)'/g;
  let m;
  while ((m = prodRe.exec(prodText)) !== null) {
    const nameAr = m[1];
    const price = m[2];
    const desc = m[3];
    productList.push({ nameAr, price, desc });
  }
} catch (e) {
  console.warn('Could not read products file for product-aware QA', e);
}

// Basic templates for FAQs (MSA) and dialectal followups (Palestinian)
const faqTemplates = [
  { q: 'ما هي سياسة الإرجاع في ميلورا؟', a: 'يمكنك إرجاع المنتج خلال 14 يومًا من استلامه شريطة أن يكون بحالته الأصلية.' },
  { q: 'كم تستغرق مدة الشحن؟', a: 'مدة الشحن عادةً بين 3-5 أيام عمل وقد تختلف حسب الوجهة.' },
  { q: 'ما طرق الدفع المتاحة؟', a: 'نقبل الدفع عند الاستلام والدفع الإلكتروني (بطاقات/بوابات الدفع).' },
  { q: 'هل المنتجات أصلية؟', a: 'نعم، نختار منتجات ذات جودة عالية ومن علامات تجارية موثوقة.' },
  { q: 'كيف أتابع طلبي؟', a: 'ستصلك رسالة تحتوي على رقم تتبع عند شحن الطلب، ويمكنك متابعة الطلب عبر صفحة تتبع الطلبات.' },
  { q: 'هل يوجد متجر فعلي؟', a: 'نعم، لدينا مقر قصي ولكننا نخدم العملاء عبر المتجر الإلكتروني أيضاً.' }
];

const dialectTemplates = [
  'مرحبا',
  'كيف حالك؟',
  'شو بتعمل؟',
  'مين صاحب الموقع؟',
  'وين بتوصلوا؟',
  'كيف بقدر أرجع المنتج؟',
  'فيه خصم اليوم؟',
  'يعطيكم العافية'
];

// Generate FAQs by varying templates slightly
const faqs = [];
// We want product-aware QA first (price/desc/specs), then fall back to generic templates.
let idx = 0;
// For each product create several QA variations until we reach N
const qTemplates = [
  { q: 'كم سعر %s؟', a: (p) => `سعر ${p.nameAr} هو ${p.price} ₪.` },
  { q: 'ما مواصفات %s؟', a: (p) => `المواصفات: ${p.desc || 'تفاصيل غير متاحة حالياً.'}` },
  { q: 'هل %s موجود بالمخزون؟', a: (p) => `${p.nameAr} متوفر حالياً. للسؤال عن الكميات الرجاء التواصل معنا.` },
  { q: 'ما وصف %s؟', a: (p) => `${p.desc || 'وصف المنتج غير متوفر حالياً.'}` },
  { q: 'هل %s عليه خصم؟', a: (p) => `قد يكون هناك عرض أو خصم حسب الوقت. سعره الحالي ${p.price} ₪.` }
];

if (productList.length > 0) {
  while (faqs.length < N) {
    for (const p of productList) {
      for (const t of qTemplates) {
        if (faqs.length >= N) break;
        const question = t.q.replace('%s', p.nameAr);
        const answer = typeof t.a === 'function' ? t.a(p) : (t.a.replace('%s', p.nameAr).replace('%s', p.price));
        faqs.push({ question, answer, dialect: 'msa' });
        if (faqs.length >= N) break;
      }
      if (faqs.length >= N) break;
    }
    // If product list small and we still need more, break to use generic templates
    if (productList.length === 0) break;
    idx++;
    if (idx > 50) break; // safety break
  }
}

// If still short, fill with generic template variations
for (let i = faqs.length; i < N; i++) {
  const t = faqTemplates[i % faqTemplates.length];
  const q = `${t.q} (سؤال ${i + 1})`;
  const a = t.a + ` للمزيد راجع صفحتنا أو تواصل معنا. (مرجع ${i + 1})`;
  faqs.push({ question: q, answer: a, dialect: 'msa' });
}

// Generate interactive phrases mixing MSA and Palestinian dialect
const interactive = [];
const interTemplates = [
  'مرحبا', 'أهلين', 'شلونك', 'كيفك اليوم', 'شو بتحبي تسألي عن الموقع', 'شو الأوفر اليوم', 'فيه خصومات؟', 'شو أحسن عطر لديك', 'شو آخر العروض', 'كيف بقدر أرجع منتج', 'خير إن شاء الله', 'صباح الخير', 'مساء الخير', 'شو الحالة اليوم', 'بالنسبة للطقس اليوم', 'كم التاريخ اليوم', 'ممكن تعطيني معلومات عن %s'
];
for (let i = 0; i < N; i++) {
  const base = interTemplates[i % interTemplates.length];
  let phrase = base;
  // Occasionally insert a product name for interactive product questions
  if (phrase.includes('%s') && productList.length > 0) {
    const p = productList[i % productList.length];
    phrase = phrase.replace('%s', p.nameAr);
  }
  // Add small variations and dialect flag
  const dialect = (i % 3 === 0) ? 'pal' : (i % 3 === 1 ? 'msa' : 'pal');
  // Make it feel natural
  const suffix = ` (نموذج ${i + 1})`;
  interactive.push({ phrase: `${phrase}${suffix}`, dialect });
}

fs.writeFileSync(path.join(outDir, 'faqs_ar.json'), JSON.stringify(faqs, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'interactive_ar.json'), JSON.stringify(interactive, null, 2), 'utf8');

console.log('Generated datasets:', N, 'faqs and', N, 'interactive phrases at', outDir);
