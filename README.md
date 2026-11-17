# Portfolio

Vite + React + Tailwind CSS v4 + مكوّنات shadcn/ui + Lucide icons. عربي / English مع دعم RTL.

## التشغيل
```bash
npm install
npm run dev
```

## التعديل
كل شيء في ملف واحد: `src/data/content.js`
- غيّر الاسم والبريد ورابط GitHub ورقم واتساب (بالصيغة الدولية مثل `249912345678`).
- المشاريع الحالية **أمثلة** (تظهر بوسم "مثال")؛ استبدلها بمشاريعك ثم احذف `sample: true`.
- لإظهار زر السيرة الذاتية: ضع الملف في `public/cv.pdf` واكتب `cv: "cv.pdf"`.

## النشر على GitHub Pages
1. ارفع المشروع إلى مستودع على GitHub (فرع `main`).
2. من Settings ← Pages ← Source اختر **GitHub Actions**.
3. كل `git push` ينشر الموقع تلقائياً.

## shadcn/ui
المكوّنات في `src/components/ui` (Button, Badge, Card, Separator, Sheet) والمشروع يحوي `components.json`، فيمكنك إضافة غيرها بـ:
```bash
npx shadcn@latest add dialog tabs
```
الألوان تُعدَّل من متغيرات `:root` و`.dark` في `src/index.css`.
