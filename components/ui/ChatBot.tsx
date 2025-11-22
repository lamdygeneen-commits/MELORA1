import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { MessageCircle, Send, X } from 'lucide-react';
import { products as productsData } from '../../data/products';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

/**
 * متطور الشات بوت لموقع ميلورا - يعمل باللهجة الفلسطينية والعربية الفصحى
 * يرد على أسئلة الموقع والمنتجات والأسعار وأسئلة تفاعلية متنوعة
 * ذكي وسريع مثل ChatGPT - بدون API خارجي - يعمل محلياً بالكامل
 */
const ChatBot: React.FC = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const [loadedQa, setLoadedQa] = useState<any[] | null>(null);
  const [interactivePhrases, setInteractivePhrases] = useState<any[] | null>(null);
  const [storedQa, setStoredQa] = useState<any[] | null>(null);

  // Read DeepSeek/OpenRouter key and settings from env (Vite)
  const DEEPSEEK_KEY = (import.meta as any).env?.VITE_DEEPSEEK_KEY || '';
  const DEEPSEEK_ENDPOINT = (import.meta as any).env?.VITE_DEEPSEEK_ENDPOINT || 'https://api.openrouter.ai/v1/chat/completions';
  const DAILY_LIMIT = Number((import.meta as any).env?.VITE_DEEPSEEK_DAILY_LIMIT) || 3;

  // رسالة الترحيب الترحيبية عند فتح الشات بوت
  useEffect(() => {
    if (open && messages.length === 0) {
      const welcomeMessage = language === 'ar' 
        ? `🌟 أهلاً وسهلاً بك في ميلورا!\n\nأنا مساعدك الذكي، جاهز أساعدك في أي سؤال أو استفسار! 😊\n\n💬 أستطيع مساعدتك في:\n• معلومات المنتجات والأسعار 🛍️\n• تفاصيل الشحن والدفع 🚚\n• خدمة العملاء والدعم 💁‍♀️\n\n✨ اسألني أي شي وبنجاوبك مباشرة!\n\n🌸 ميلورا - أناقة الجمال العربي 🌸`
        : `🌟 Hello and welcome to Melora!\n\nI'm your smart assistant, ready to help you with any question or inquiry! 😊\n\n💬 I can help you with:\n• Product & price information 🛍️\n• Shipping & payment details 🚚\n• Customer service & support 💁‍♀️\n• Prayer times 🕌\n• Weather conditions 🌤️\n• Time & date 📅\n\n✨ Ask me anything and I'll answer directly!\n\n🌸 Melora - Arab Beauty Elegance 🌸`;
      
      setTimeout(() => {
        setMessages([{ from: 'bot', text: welcomeMessage }]);
      }, 500);
    }
  }, [open, language]);

  // Start background load of large chatbot datasets (generated files in public/chatbot)
  useEffect(() => {
    let mounted = true;
    const loadDatasets = async () => {
      try {
        const [faqsResp, intrResp] = await Promise.all([
          fetch('/chatbot/faqs_ar.json').then(r => r.ok ? r.json() : fetch('/chatbot/faqs_ar.sample.json').then(rr => rr.json())),
          fetch('/chatbot/interactive_ar.json').then(r => r.ok ? r.json() : fetch('/chatbot/interactive_ar.sample.json').then(rr => rr.json())),
        ]);
        // load stored QA from localStorage (answers learned from external API or previously saved)
        const storedRaw = localStorage.getItem('melora_stored_qa');
        const stored = storedRaw ? JSON.parse(storedRaw) : [];
        if (!mounted) return;
        // Normalize any literal 'شيكل' in loaded answers to the shekel symbol and ensure spacing
        const normalizeShekel = (s: string) => {
          if (!s || typeof s !== 'string') return s;
          // Replace any occurrence of the word شيكل with the symbol ₪
          let out = s.replace(/شيكل/g, '₪');
          // Ensure there's a space between the number and the symbol (e.g., '145₪' -> '145 ₪')
          out = out.replace(/(\d)₪/g, '$1 ₪');
          return out;
        };

        const normalizedFaqs = (faqsResp || []).map((it: any) => ({
          ...it,
          answer: typeof it.answer === 'string' ? normalizeShekel(it.answer) : it.answer,
          question: typeof it.question === 'string' ? normalizeShekel(it.question) : it.question,
        }));

        const normalizedStored = (stored || []).map((it: any) => ({
          ...it,
          answer: typeof it.answer === 'string' ? normalizeShekel(it.answer) : it.answer,
          question: typeof it.question === 'string' ? normalizeShekel(it.question) : it.question,
        }));

        setLoadedQa(normalizedFaqs);
        setInteractivePhrases(intrResp);
        setStoredQa(normalizedStored);
        console.log(`✅ تم تحميل بيانات الشات بوت: ${faqsResp?.length || 0} سؤال موقع، ${intrResp?.length || 0} سؤال تفاعلي، ${stored.length || 0} أسئلة مخزنة محلياً`);
      } catch (e) {
        console.warn('ChatBot: failed to load big datasets', e);
      }
    };
    loadDatasets();
    return () => { mounted = false; };
  }, []);

  // Utility: check and increment daily usage for DeepSeek (stored in localStorage)
  const isDeepSeekAllowed = (): boolean => {
    if (!DEEPSEEK_KEY) return false;
    try {
      const today = new Date().toISOString().slice(0,10);
      const storedDate = localStorage.getItem('deepseek_usage_date');
      let count = Number(localStorage.getItem('deepseek_usage_count') || '0');
      if (storedDate !== today) {
        // reset
        localStorage.setItem('deepseek_usage_date', today);
        localStorage.setItem('deepseek_usage_count', '0');
        count = 0;
      }
      return count < DAILY_LIMIT;
    } catch (e) {
      return false;
    }
  };

  const incrementDeepSeekUsage = () => {
    try {
      const today = new Date().toISOString().slice(0,10);
      const storedDate = localStorage.getItem('deepseek_usage_date');
      let count = Number(localStorage.getItem('deepseek_usage_count') || '0');
      if (storedDate !== today) {
        localStorage.setItem('deepseek_usage_date', today);
        count = 0;
      }
      count = count + 1;
      localStorage.setItem('deepseek_usage_count', String(count));
    } catch (e) {
      // ignore
    }
  };

  // Call external DeepSeek/OpenRouter-like API. This is best-effort and will fallback on errors.
  const callDeepSeek = async (prompt: string): Promise<string | null> => {
    if (!DEEPSEEK_KEY) return null;
    try {
      const payload = {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'أجب باختصار وباللغة العربية (الفصحى واللهجة الفلسطينية) على أسئلة الموقع فقط. لا تبدع محتوى خارجي.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 400,
        temperature: 0.2
      };

      const resp = await fetch(DEEPSEEK_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_KEY}`
        },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        // If rate-limited or forbidden, mark exhausted and fallback
        console.warn('DeepSeek API returned non-ok', resp.status);
        return null;
      }

      const data = await resp.json();
      // Try to extract text from common response shapes
      let text = null as string | null;
      if (data.choices && data.choices[0] && data.choices[0].message) {
        text = data.choices[0].message.content;
      } else if (data.output && data.output[0] && data.output[0].content && data.output[0].content[0]) {
        text = data.output[0].content[0].text || data.output[0].content[0].text;
      } else if (typeof data === 'string') {
        text = data;
      }

      if (text) {
        incrementDeepSeekUsage();
        try {
          // persist pair to local stored QA for future offline fallback
          const existingRaw = localStorage.getItem('melora_stored_qa');
          const existing = existingRaw ? JSON.parse(existingRaw) : [];
          existing.unshift({ question: prompt, answer: text });
          // limit stored size to avoid infinite growth (keep last 5000)
          const limited = existing.slice(0, 5000);
          localStorage.setItem('melora_stored_qa', JSON.stringify(limited));
          setStoredQa(limited);
        } catch (e) {
          // ignore storage errors
        }
        return text;
      }
      return null;
    } catch (err) {
      console.warn('callDeepSeek error', err);
      return null;
    }
  };

  const defaultAnswers = {
    ar: 'عذراً، لا أمتلك إجابة لهذا السؤال حاليًا. يمكنك التواصل معنا مباشرة لمزيد من المساعدة.',
    en: 'Sorry, I don’t have an answer for that question right now. You can contact us directly for further assistance.',
  };

  // Robust product lookup: scoring + fuzzy matching
  const findProductByQuery = (text: string) => {
    if (!text) return null;

    const arabicStopwords = new Set([
      'العطر', 'عطر', 'منتج', 'منتجات', 'سعر', 'كم', 'من', 'على', 'في', 'هل', 'ما', 'اي', 'اريد', 'اعطني', 'اعطيني', 'عندي', 'اذا', 'لو', 'شو', 'ماهي', 'ماهو', 'هل', 'اين'
    ]);

    const normalize = (s: string) => {
      if (!s) return '';
      // remove tashkeel, punctuation, diacritics, multiple spaces
      let out = s.toLowerCase();
      // remove common punctuation
      out = out.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]"]+/g, ' ');
      // Arabic diacritics
      out = out.replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED]/g, '');
      out = out.replace(/\s+/g, ' ').trim();
      return out;
    };

    const lev = (a: string, b: string) => {
      const la = a.length; const lb = b.length;
      if (la === 0) return lb;
      if (lb === 0) return la;
      const dp: number[] = Array(lb + 1).fill(0).map((_, i) => i);
      for (let i = 1; i <= la; i++) {
        let prev = dp[0];
        dp[0] = i;
        for (let j = 1; j <= lb; j++) {
          const temp = dp[j];
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
          prev = temp;
        }
      }
      return dp[lb];
    };

    const q = normalize(text);
    const qTokens = q.split(' ').filter(t => t && t.length > 1 && !arabicStopwords.has(t));

    let best: any = null;
    let bestScore = 0;

    for (const p of productsData) {
      const nameAr = normalize(p.name?.ar || '');
      const nameEn = normalize(p.name?.en || '');
      const descAr = normalize(p.description?.ar || '');
      const descEn = normalize(p.description?.en || '');
      const cat = normalize(p.category || '');
      const tags = (p.tags || []).map((t: string) => normalize(t)).join(' ');

      let score = 0;

      // exact full-name match (highest priority)
      if (nameAr && (nameAr === q || nameAr === qTokens.join(' '))) score += 120;
      if (nameEn && (nameEn === q || nameEn === qTokens.join(' '))) score += 110;

      // phrase contains the query
      if (nameAr && nameAr.includes(q) && q.length > 3) score += 80;
      if (nameEn && nameEn.includes(q) && q.length > 3) score += 70;

      // token overlap scoring (longer tokens weigh more)
      for (const t of qTokens) {
        if (!t) continue;
        const weight = Math.min(20, t.length * 4);
        if (nameAr.includes(t) || descAr.includes(t) || tags.includes(t) || cat.includes(t)) score += weight;
        if (nameEn.includes(t) || descEn.includes(t) || tags.includes(t) || cat.includes(t)) score += Math.floor(weight * 0.8);
      }

      // if query contains the product id directly
      if (p.id && q.includes(p.id.toLowerCase())) score += 60;

      // fuzzy name similarity fallback
      const maxName = Math.max(nameAr.length, q.length, nameEn.length);
      if (nameAr && q) {
        const d = lev(nameAr, q);
        const sim = 1 - (d / Math.max(1, Math.max(nameAr.length, q.length)));
        if (sim > 0.6) score += Math.floor(sim * 50);
      }
      if (nameEn && q) {
        const d2 = lev(nameEn, q);
        const sim2 = 1 - (d2 / Math.max(1, Math.max(nameEn.length, q.length)));
        if (sim2 > 0.6) score += Math.floor(sim2 * 40);
      }

      // small boost for tags/category exact inclusion
      if (tags && qTokens.some((t: string) => tags.includes(t))) score += 8;
      if (cat && qTokens.some((t: string) => cat.includes(t))) score += 10;

      // deprioritize matches that only match generic words like 'عطر' or 'ميكب'
      const genericWords = ['عطر', 'ميكب', 'مكياج', 'ملابس', 'بخور', 'عطور'];
      const onlyGeneric = qTokens.every(t => genericWords.includes(t));
      if (onlyGeneric) score = 0;

      // keep best
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    }

    // require a sensible threshold to avoid false positives
    if (bestScore >= 25) return best;
    return null;
  };

  const formatProductReply = (p: any) => {
    const lang = language === 'ar' ? 'ar' : 'en';
    const name = p.name?.[lang] || p.name?.ar || p.name?.en || 'Product';
    const desc = p.description?.[lang] || p.description?.ar || p.description?.en || '';
    const details = p.details?.[lang] || p.details?.ar || p.details?.en || '';
    const price = p.price != null ? `${p.price} شيكل` : (p.price === 0 ? '0' : 'غير متوفر');
    const oldPrice = p.oldPrice ? `${p.oldPrice} شيكل` : null;
    const category = p.category || '';
    const tags = (p.tags || []).join(', ');
    const rating = p.rating ? `${p.rating} (${p.reviewCount || 0} تقييم)` : '';

    // Note: Images intentionally omitted per latest request — do not include image URLs.
    if (language === 'ar') {
      return `🛍️ ${name}\n\n🔖 الفئة: ${category}\n💰 السعر: ${price}${oldPrice ? ` (القديم: ${oldPrice})` : ''}\n${rating ? `⭐ التقييم: ${rating}\n` : ''}${tags ? `🏷️ تصنيفات: ${tags}\n` : ''}\n📄 الوصف: ${desc}\n\n🔍 التفاصيل: ${details}`;
    }

    // English fallback (no images)
    return `🛍️ ${name}\n\nCategory: ${category}\nPrice: ${p.price != null ? p.price + ' ₪' : 'N/A'}${oldPrice ? ` (old: ${oldPrice})` : ''}\n${rating ? `⭐ Rating: ${p.rating} (${p.reviewCount || 0} reviews)\n` : ''}${tags ? `🏷️ Tags: ${tags}\n` : ''}\nDescription: ${desc}\n\nDetails: ${details}`;
  };

  // دالة ذكية للبحث في البيانات المحملة
  const searchInDataset = (text: string, dataset: any[]) => {
    if (!dataset || dataset.length === 0) return null;
    
    const lowerText = text.toLowerCase();
    
    // البحث بالكلمات المفتاحية (الكلمات الأولى من السؤال/العبارة)
    for (const item of dataset) {
      const questionText = (item.question || item.phrase || '').toLowerCase();
      const words = questionText.split(' ').filter(w => w.length > 2);
      
      for (const word of words) {
        if (lowerText.includes(word)) {
          return item.answer || item.response;
        }
      }
    }
    
    // البحث النصي الكامل
    for (const item of dataset) {
      const fullText = (item.question || item.phrase || '').toLowerCase();
      if (lowerText.includes(fullText) || fullText.includes(lowerText)) {
        return item.answer || item.response;
      }
    }
    
    // البحث بالكلمات المشابهة (تقريب إملائي)
    const words = lowerText.split(' ').filter(w => w.length > 3);
    for (const word of words) {
      for (const item of dataset) {
        const questionText = (item.question || item.phrase || '').toLowerCase();
        if (questionText.includes(word)) {
          return item.answer || item.response;
        }
      }
    }
    
    return null;
  };

  // دالة للتعرف على نوع السؤال
  const categorizeQuestion = (text: string): string => {
    const lower = text.toLowerCase();
    
    if (/\b(مرحبا|اهلا|هلا|شلونك|كيف حالك|تحية)\b/.test(lower)) return 'greeting';
    if (/\b(زمن|وقت|ساعة|تاريخ|يوم)\b/.test(lower)) return 'time';
    if (/\b(صلاة|مواقيت|فجر|ظهر|عصر|مغرب|عشاء)\b/.test(lower)) return 'prayer';
    if (/\b(طقس|جو|مطر|شمس|حر|برد)\b/.test(lower)) return 'weather';
    if (/\b(منتج|سعر|شراء|دفع|شحن)\b/.test(lower)) return 'shopping';
    if (/\b(خدمة|عملاء|تواصل|اتصال|شكاوى)\b/.test(lower)) return 'service';
    if (/\b(مالك|صاحب|مؤسس|جينين)\b/.test(lower)) return 'owner';
    
    return 'general';
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    // Add user's message
    const userMsg: Message = { from: 'user', text: trimmed };

    // Product-aware short-circuit: if message mentions a product, reply with full product details
    try {
      const matched = findProductByQuery(trimmed);
      if (matched) {
        const productReply = formatProductReply(matched);
        setMessages(prev => [...prev, userMsg, { from: 'bot', text: productReply }]);
        setInput('');
        return;
      }
    } catch (err) {
      console.warn('Product lookup failed', err);
    }

    // Determine bot reply
    let reply: string | null = null;
    const lower = trimmed.toLowerCase();

    // تحديد نوع السؤال
    const category = categorizeQuestion(trimmed);

    // 1) Date/time requests - محسن
    if (/\b(الوقت|الساعة|كم الساعة|كم الوقت|الوقت الآن|التاريخ|اليوم|شلون الوقت|شو الوقت)\b/.test(lower)) {
      try {
        const now = new Date();
        const locale = language === 'ar' ? 'ar' : 'en-US';
        // Use Palestine timezone
        const timeStr = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Gaza' });
        const dateStr = now.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Gaza' });
        const dayName = now.toLocaleDateString(locale, { weekday: 'long', timeZone: 'Asia/Gaza' });
        
        if (language === 'ar') {
          reply = `🕒 الوقت الآن: ${timeStr}\n📅 التاريخ: ${dayName}، ${dateStr}\n🌍 المنطقة الزمنية: فلسطين`;
        } else {
          reply = `🕒 Current time: ${timeStr}\n📅 Date: ${dayName}, ${dateStr}\n🌍 Timezone: Palestine`;
        }
      } catch (e) {
        reply = language === 'ar' ? `الوقت الآن: ${new Date().toLocaleString('ar-SA')}` : `Time: ${new Date().toLocaleString('en-US')}`;
      }
    }

    // 2) Prayer times (use Aladhan API with client coordinates)
    if (!reply && /\b(مواقيت|مواعيد الصلاة|متى صلاة|صلاة)\b/.test(lower)) {
      reply = language === 'ar' ? 'أحصل على مواقيت الصلاة الآن... الرجاء السماح بالوصول للموقع.' : 'Fetching prayer times...';
      // add interim messages
      setMessages(prev => [...prev, userMsg, { from: 'bot', text: reply }]);
      // try to get geolocation and query Aladhan
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          try {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`; // method=2 is Islamic Society of North America
            const r = await fetch(url);
            const data = await r.json();
            if (data && data.data && data.data.timings) {
              const t = data.data.timings;
              const formatted = language === 'ar'
                ? `مواقيت الصلاة اليوم:\nالفجر: ${t.Fajr}\nالظهر: ${t.Dhuhr}\nالعصر: ${t.Asr}\nالمغرب: ${t.Maghrib}\nالعشاء: ${t.Isha}`
                : `Prayer times today:\nFajr: ${t.Fajr}\nDhuhr: ${t.Dhuhr}\nAsr: ${t.Asr}\nMaghrib: ${t.Maghrib}\nIsha: ${t.Isha}`;
              setMessages(prev => [...prev, { from: 'bot', text: formatted }]);
            } else {
              setMessages(prev => [...prev, { from: 'bot', text: language === 'ar' ? 'عذراً، لم أتمكن من الحصول على مواقيت الصلاة.' : 'Sorry, could not fetch prayer times.' }]);
            }
          } catch (err) {
            setMessages(prev => [...prev, { from: 'bot', text: language === 'ar' ? 'خطأ أثناء جلب مواقيت الصلاة.' : 'Error fetching prayer times.' }]);
          }
        }, (err) => {
          setMessages(prev => [...prev, { from: 'bot', text: language === 'ar' ? 'تعذر الحصول على الموقع. الرجاء تمكين خدمات الموقع.' : 'Unable to get location. Please enable location services.' }]);
        });
      } else {
        setMessages(prev => [...prev, { from: 'bot', text: language === 'ar' ? 'المتصفح لا يدعم الوصول للموقع.' : 'Geolocation not supported by browser.' }]);
      }
      setInput('');
      return;
    }

    // 3) Weather - محسن مع إجابات ذكية
    if (!reply && /\b(طقس|حالة الطقس|الطقس| الجو|جو اليوم)\b/.test(lower)) {
      if (navigator && navigator.geolocation) {
        reply = language === 'ar' ? '🌤️ أتحقق من حالة الطقس... الرجاء السماح بالوصول للموقع.' : '🌤️ Checking weather...';
        setMessages(prev => [...prev, userMsg, { from: 'bot', text: reply }]);
        
        navigator.geolocation.getCurrentPosition(async (pos) => {
          try {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto&lang=ar`;
            const r = await fetch(url);
            const data = await r.json();
            
            if (data && data.current_weather) {
              const cw = data.current_weather;
              
              // تحويل رمز الطقس إلى وصف
              const weatherDescriptions: {[key: number]: string} = {
                0: 'صافي ☀️',
                1: 'غائم جزئياً ⛅',
                2: 'غائم ☁️',
                3: 'ملبدة ☁️',
                45: 'ضباب 🌫️',
                48: 'ضباب مع صقيع 🌫️',
                51: 'رذاذ خفيف 🌦️',
                53: 'رذاذ ☔',
                55: 'رذاذ غزير 🌧️',
                56: 'مطر متجمد 🌧️',
                57: 'مطر متجمد غزير ❄️',
                61: 'مطر خفيف 🌦️',
                63: 'مطر ☔',
                65: 'مطر غزير 🌧️',
                66: 'مطر متجمد 🌧️',
                67: 'مطر متجمد غزير ❄️',
                71: 'ثلج خفيف ❄️',
                73: 'ثلج ❄️',
                75: 'ثلج غزير 🌨️',
                77: 'حبيبات ثلج 🌨️',
                80: 'زخات مطر 🌦️',
                81: 'زخات مطر غزيرة 🌧️',
                82: 'زخات مطر شديدة 🌧️',
                85: 'زخات ثلج 🌨️',
                86: 'زخات ثلج شديدة 🌨️',
                95: 'عاصفة ⚡',
                96: 'عاصفة مع مطر 🌩️',
                99: 'عاصفة شديدة مع ثلج 🌩️'
              };
              
              const weatherDesc = weatherDescriptions[cw.weathercode] || 'غير محدد';
              
              const resp = language === 'ar'
                ? `🌤️ حالة الطقس اليوم:\n🌡️ درجة الحرارة: ${cw.temperature}°C\n💨 سرعة الرياح: ${cw.windspeed} كم/س\n☁️ الحالة: ${weatherDesc}\n📍 موقعك: ${lat.toFixed(2)}, ${lon.toFixed(2)}`
                : `🌤️ Today's Weather:\n🌡️ Temperature: ${cw.temperature}°C\n💨 Wind Speed: ${cw.windspeed} km/h\n☁️ Condition: ${weatherDesc}\n📍 Location: ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
              
              setMessages(prev => [...prev, { from: 'bot', text: resp }]);
            } else {
              const fallbackResp = language === 'ar' 
                ? 'عذراً، لم أتمكن من الحصول على بيانات الطقس الحالية. يمكنك التحقق من الطقس عبر التطبيقات المختصة ☀️'
                : 'Sorry, could not fetch current weather data. You can check weather via dedicated apps ☀️';
              setMessages(prev => [...prev, { from: 'bot', text: fallbackResp }]);
            }
          } catch (err) {
            const errorResp = language === 'ar' 
              ? '❌ حدث خطأ أثناء جلب بيانات الطقس. الرجاء المحاولة مرة أخرى.'
              : '❌ Error fetching weather data. Please try again.';
            setMessages(prev => [...prev, { from: 'bot', text: errorResp }]);
          }
        }, (err) => {
          const locationError = language === 'ar' 
            ? '📍 تعذر الحصول على موقعك. الرجاء تمكين خدمات الموقع أو التحقق من الطقس عبر التطبيقات.'
            : '📍 Unable to get your location. Please enable location services or check weather via apps.';
          setMessages(prev => [...prev, { from: 'bot', text: locationError }]);
        });
      } else {
        const noGeoResp = language === 'ar' 
          ? '📱 متصفحك لا يدعم خدمة تحديد الموقع. يمكنك التحقق من الطقس عبر تطبيقات الطقس المحلية.'
          : '📱 Your browser doesn\'t support location services. Check weather via local weather apps.';
        setMessages(prev => [...prev, { from: 'bot', text: noGeoResp }]);
      }
      setInput('');
      return;
    }

    // 4) البحث الذكي في قواعد البيانات المحملة
    if (!reply) {
      // البحث في أسئلة الموقع
      if (loadedQa && loadedQa.length > 0) {
        reply = searchInDataset(trimmed, loadedQa);
      }
      
      // البحث في العبارات التفاعلية
      if (!reply && interactivePhrases && interactivePhrases.length > 0) {
        const interactiveReply = searchInDataset(trimmed, interactivePhrases);
        if (interactiveReply) {
          reply = language === 'ar' 
            ? `😊 أهلاً وسهلاً! ${interactiveReply}`
            : `😊 Hello! ${interactiveReply}`;
        }
      }
    }

    // 5) قاعدة البيانات المدمجة - محسنة ومتنوعة (اللهجة الفلسطينية + الفصحى)
    if (!reply) {
      const advancedBuiltIn = [
        // أسئلة الشحن والتوصيل
        { 
          kws: ['شحن', 'توصيل', 'وصل', 'شحنه'], 
          ans: language === 'ar' 
            ? '📦 تفاصيل الشحن في ميلورا:\n• داخل فلسطين: 1-2 يوم عمل\n• الشحن الدولي: 3-7 أيام\n• مجاني للطلبات فوق 50 شيكل\n• تكلفة الشحن العادي: 10 شيكل\n📍 نخدم جميع محافظات فلسطين'
            : '📦 Melora Shipping Details:\n• Inside Palestine: 1-2 business days\n• International: 3-7 days\n• Free shipping over 50 shekels\n• Regular shipping: 10 shekels\n📍 We serve all Palestine governorates'
        },
        
        // أسئلة الدفع
        { 
          kws: ['دفع', 'فلوس', 'فلوسه', 'مبلغ'], 
          ans: language === 'ar' 
            ? '💳 طرق الدفع المتوفرة:\n• الدفع عند الاستلام 🚚\n• بطاقات الائتمان 💳\n• البوابات الإلكترونية الآمنة 🔒\n• الدفع نقداً أو إلكترونياً\n💰 جميع المعاملات آمنة ومحمية'
            : '💳 Available Payment Methods:\n• Cash on delivery 🚚\n• Credit cards 💳\n• Secure electronic gateways 🔒\n• Cash or electronic payment\n💰 All transactions are secure'
        },
        
        // أسئلة الإرجاع
        { 
          kws: ['ارجاع', 'استبدال', 'ردي', 'رديت'], 
          ans: language === 'ar' 
            ? '🔄 سياسة الإرجاع والاستبدال:\n• 14 يوماً من تاريخ التسليم\n• المنتج في حالته الأصلية\n• مع جميع الملحقات والعبوة\n• استرداد خلال 3-5 أيام\n💝 خدمة ما بعد البيع مضمونة'
            : '🔄 Return and Exchange Policy:\n• 14 days from delivery date\n• Original condition required\n• All accessories and packaging\n• Refund within 3-5 days\n💝 After-sales service guaranteed'
        },
        
        // أسئلة المنتجات
        { 
          kws: ['منتج', 'عطر', 'ميكب', 'ملابس', 'منتجات'], 
          ans: language === 'ar' 
            ? '✨ منتجات ميلورا:\n• عطور نسائية ورجالية 🧴\n• مستحضرات المكياج 💄\n• أزياء عصرية للنساء 👗\n• منتجات عناية بالجمال 💅\n• جميع المنتجات أصلية 100%'
            : '✨ Melora Products:\n• Women & men perfumes 🧴\n• Makeup products 💄\n• Modern women fashion 👗\n• Beauty care products 💅\n• All products 100% authentic'
        },
        
        // أسئلة المالك
        { 
          kws: ['مالك', 'صاحب', 'جينين', 'جنين'], 
          ans: language === 'ar' 
            ? '👩‍💼 عن جنين مجدي أبو لمضي:\n• مؤسسة ومالكة علامة ميلورا\n• رائدة أعمال فلسطينية 🌟\n• متخصصة في التجارة الإلكترونية\n• خبرة في المنتجات النسائية\n• شغوفة بتقديم أجود المنتجات'
            : '👩‍💼 About Janine Abu Al-Madhi:\n• Founder & owner of Melora brand\n• Palestinian entrepreneur 🌟\n• E-commerce specialist\n• Expert in women products\n• Passionate about quality products'
        },
        
        // أسئلة الأسعار
        { 
          kws: ['سعر', 'فلوس', 'كم', 'كلفة', 'مبلغ'], 
          ans: language === 'ar' 
            ? '💰 عن الأسعار:\n• أسعارنا تنافسية جداً 💪\n• نقدم أفضل قيمة مقابل السعر\n• عروض وخصومات منتظمة 🎯\n• الدفع المريح والآمن\n• جودة عالية بأسعار معقولة'
            : '💰 About Prices:\n• Very competitive prices 💪\n• Best value for money\n• Regular offers & discounts 🎯\n• Safe & comfortable payment\n• High quality at reasonable prices'
        },
        
        // أسئلة التفاعل الترحيبية
        { 
          kws: ['مرحبا', 'أهلًا', 'هلا', 'شلونك', 'كيفك', 'تحية'], 
          ans: language === 'ar' 
            ? '😊 أهلاً وسهلاً بك في ميلورا!\n أنا مساعدك الذكي، كيف يمكنني مساعدتك؟\n\n💡 يمكنني مساعدتك في:\n• الاستفسار عن المنتجات\n• معلومات الشحن والدفع\n• خدمة العملاء\n• وأي استفسار آخر'
            : '😊 Hello and welcome to Melora!\nI\'m your smart assistant, how can I help you?\n\n💡 I can help you with:\n• Product inquiries\n• Shipping & payment info\n• Customer service\n• Any other questions'
        },
        
        // أسئلة الطقس
        { 
          kws: ['جو', 'طقس', 'حار', 'برد', 'مطر'], 
          ans: language === 'ar' 
            ? '🌤️ أتمنى أن يكون الجو جميل اليوم!\n إذا كنت تريد معرفة الطقس الحالي، اسألني عن "حالة الطقس" وسأخبرك بالتفصيل 📍'
            : '🌤️ Hope the weather is beautiful today!\nIf you want to know the current weather, ask me about "weather" and I\'ll give you the details 📍'
        },
        
        // أسئلة مواقيت الصلاة
        { 
          kws: ['صلاة', 'فجر', 'ظهر', 'عصر', 'مغرب', 'عشاء'], 
          ans: language === 'ar' 
            ? '🕌 للاستفسار عن مواقيت الصلاة، اسألني عن "مواقيت الصلاة" وسأعطيك التوقيتات الصحيحة لموقعك 📍'
            : '🕌 For prayer times, ask me about "prayer times" and I\'ll give you the correct times for your location 📍'
        },
        
        // أسئلة التواصل
        { 
          kws: ['تواصل', 'اتصال', 'هاتف', 'واتساب', 'رقم'], 
          ans: language === 'ar' 
            ? '📞 للتواصل معنا:\n• الواتساب: 0593297404\n• البريد الإلكتروني متوفر\n• نعمل الأحد-الخميس 9ص-6م\n• الرد السريع مضمون ⚡'
            : '📞 Contact us:\n• WhatsApp: 0593297404\n• Email available\n• Sun-Thu 9AM-6PM\n• Quick response guaranteed ⚡'
        }
      ];
      
      for (const s of advancedBuiltIn) {
        if (s.kws.some(k => lower.includes(k))) { 
          reply = s.ans; 
          break; 
        }
      }
    }

    // If still no reply, try external DeepSeek (if configured and allowed), otherwise try stored local QA
    if (!reply) {
      // 1) Try external AI if key exists and limit allows
      if (DEEPSEEK_KEY && isDeepSeekAllowed()) {
        const thinking = language === 'ar' ? '⏳ أجيبك الآن...' : '⏳ Thinking...';
        setMessages(prev => [...prev, userMsg, { from: 'bot', text: thinking }]);
        const ds = await callDeepSeek(trimmed);
        if (ds) {
          setMessages(prev => [...prev, { from: 'bot', text: ds }]);
          setInput('');
          return;
        }
        // if external call failed, continue to try stored QA below
      }

      // 2) Try stored local QA (learned from previous external calls or bulk imports)
      if ((!reply) && storedQa && storedQa.length > 0) {
        const storedReply = searchInDataset(trimmed, storedQa);
        if (storedReply) {
          reply = storedReply;
        }
      }
    }

    if (!reply) reply = language === 'ar' ? defaultAnswers.ar : defaultAnswers.en;
    const botMsg: Message = { from: 'bot', text: reply };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button to open chat */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-[#d1a38a] hover:bg-[#c19277] text-white p-3 rounded-full shadow-lg focus:outline-none"
        aria-label={language === 'ar' ? 'فتح المحادثة' : 'Open chat'}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 w-72 max-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg z-40 flex flex-col">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {language === 'ar' ? 'المساعد' : 'Assistant'}
            </span>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label={language === 'ar' ? 'إغلاق' : 'Close'}>
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ maxHeight: '250px' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-xs text-sm px-3 py-2 rounded-lg ${msg.from === 'user' ? 'bg-[#f5c6d6] text-gray-800 self-end' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-lg py-1 px-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none"
              placeholder={language === 'ar' ? 'اكتب سؤالك...' : 'Type your question...'}
            />
            <button
              onClick={handleSend}
              className="bg-[#d1a38a] hover:bg-[#c19277] text-white px-3 py-1 rounded-r-lg"
              aria-label={language === 'ar' ? 'إرسال' : 'Send'}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;