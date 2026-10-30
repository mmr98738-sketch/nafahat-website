# نفحات — Nafahat Website

موقع رسمي لمشروع «نفحات» — ثيم سلة لمتاجر العطور.

## نظرة عامة

هذا الموقع يُعرّف بثيم نفحات، يشرح مميزاته، ويعرض دليل استخدام للتجار على منصة سلة.

## النشر عبر GitHub Pages

### الخطوات:

1. أنشئ مستودعًا جديدًا باسم `nafahat-website` على GitHub
2. ارفع ملفات المشروع:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nafahat website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/nafahat-website.git
   git push -u origin main
   ```

3. فعّل GitHub Pages:
   - اذهب إلى Settings → Pages
   - اختر المصدر: GitHub Actions
   - أو استخدم فرع `gh-pages`

4. لبناء الموقع محليًا:
   ```bash
   npm install
   npm run build
   ```

5. الملفات الناتجة ستكون في مجلد `dist/`

### تعديل رابط النشر:

بعد تحديد النطاق النهائي، عدّل ملف `src/config.ts`:
```typescript
siteUrl: "https://USERNAME.github.io/nafahat-website"
```

## تعديل المحتوى

### ملف الإعدادات المركزي

جميع الروابط والبيانات الأساسية في ملف `src/config.ts`:

- `previewUrl` — رابط معاينة الثيم التجريبي (اتركه فارغًا حتى يُضاف رابط صالح)
- `supportEmail` — بريد الدعم
- `whatsapp` — رقم واتساب الدعم
- `twitter` — رابط حساب تويتر
- `github` — رابط مستودع GitHub
- `siteUrl` — رابط الموقع النهائي

### تعديل المميزات

المميزات معرّفة في مصفوفة `features` في `src/config.ts`. يمكن إضافة أو تعديل أو حذف أي ميزة.

### تعديل دليل التاجر

الأقسام معرّفة في مصفوفة `guideSections` في `src/config.ts`.

### الصور

الصور حاليًا توضيحية (placeholders). عند توفر صور الثيم الفعلية:
1. ضع الصور في مجلد `public/images/`
2. عدّل مكون `src/pages/Home.tsx` لاستبدال العناصر التوضيحية بعناصر `<img>`

## البنية

```
├── index.html          # الصفحة الرئيسية مع SEO
├── src/
│   ├── config.ts       # ملف الإعدادات المركزي
│   ├── App.tsx         # المكون الرئيسي مع التوجيه
│   ├── main.tsx        # نقطة الدخول
│   ├── index.css       # الأنماط الأساسية
│   ├── ThemeContext.tsx # سياق الوضع الفاتح/الداكن
│   ├── components/
│   │   ├── Header.tsx  # شريط التنقل
│   │   └── Footer.tsx  # التذييل
│   └── pages/
│       ├── Home.tsx    # الصفحة الرئيسية
│       ├── Guide.tsx   # دليل التاجر
│       └── Support.tsx # صفحة الدعم
└── public/
    └── images/         # مجلد الصور (أضف الصور هنا)
```

## التقنيات

- React 18
- Vite
- Tailwind CSS 4
- React Router (HashRouter للتوافق مع GitHub Pages)
- Lucide React (أيقونات)
- TypeScript

## ما يحتاج استكمال

- [ ] إضافة رابط متجر سلة التجريبي في `config.ts` → `previewUrl`
- [ ] إضافة صور الثيم الفعلية في `public/images/`
- [ ] تحديد رابط النشر النهائي وتحديث `siteUrl`
- [ ] إضافة بريد الدعم الفعلي ورقم الواتساب
- [ ] ربط نموذج التواصل بخدمة إرسال فعلية (Formspree, EmailJS, أو API)
- [ ] إضافة رابط حساب تويتر

## الترخيص

جميع الحقوق محفوظة © نفحات
