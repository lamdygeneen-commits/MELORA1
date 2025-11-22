export function formatPrice(value: number | undefined | null, language: string = 'ar') {
  if (value == null || isNaN(Number(value))) return language === 'ar' ? 'غير محدد' : 'N/A';
  const v = Math.round(Number(value));
  // Arabic: show number then shekel symbol (suffix) as requested: "120 ₪"
  if (language === 'ar') return `${v} ₪`;
  // English view: prefix the shekel symbol
  return `₪${v}`;
}

export default formatPrice;
