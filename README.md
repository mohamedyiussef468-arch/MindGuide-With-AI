# يومياتي AI (Yawmiyati AI) 🌿✨

منصة ذكية متكاملة لإدارة الحياة، تدوين اليوميات، المساعد الصوتي، والتفويض النصي المدعومة بالذكاء الاصطناعي (Gemini 2.5 Flash).

---

## 🌟 مميزات التطبيق

1. **تدوين اليوميات والخواطر الذكية:**
   - كتابة خواطر مع خيارات تنسيق كاملة، خطوط متنوعة، وألوان.
   - كاتب الملاحظات بالذكاء الاصطناعي (AI Note Writer) لتوليد أفكار ونصوص ملهمة بنقرة زر.

2. **التفريغ النصي التلقائي للتسجيلات الصوتية:**
   - دعم رفع الملفات الصوتية بجميع الصيغ (`.mp3`, `.m4a`, `.wav`, `.aac`, `.ogg`, إلخ) من مدير الملفات في الهاتف أو الحاسوب.
   - تحويل المقاطع الصوتية والملاحظات المرفقة تلقائياً إلى نص عربي دقيق باستخدام نموذج Gemini 2.5 Flash.
   - إمكانية نسخ النص أو إدراجه مباشرة داخل الخاطرة أو اليومية.

3. **المستشار والمساعد النفسي الذكي:**
   - دردشة تفاعلية ومستشار نفسي يعطي نصائح مخصصة، تحليل للحالة المزاجية، وتمارين تنفس واسترخاء.

4. **تتبع الصحة والعادات:**
   - تسجيل ساعات النوم، النشاط الرياضي، الأدوية، وحالة الطقس والمزاج اليومي.

5. **الأمان والخصوصية:**
   - قفل اليوميات برقم سري (PIN) أو كلمة مرور.
   - حفظ بيانات اليوميات محلياً وفي خادم العميل بأمان كامل.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

- **Frontend:** React 18+, TypeScript, Tailwind CSS, Lucide Icons, Framer Motion.
- **Backend:** Node.js, Express.js (Full-stack architecture).
- **AI Integration:** Google GenAI SDK (`@google/genai`) مع نموذج `gemini-2.5-flash`.
- **Bundler & Build Tool:** Vite + esbuild.

---

## 🚀 طريقة التشغيل المحلية (Local Setup)

### 1. الاستคลون والتثبيت
```bash
git clone https://github.com/username/yawmiyati-ai.git
cd yawmiyati-ai
npm install
```

### 2. إعداد متغّيرات البيئة (Environment Variables)
قم بإنشاء ملف `.env` في المجلد الرئيسي وأضف مفتاح Gemini API الخاص بك:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. تشغيل خادم التطوير (Development Mode)
```bash
npm run dev
```
سيعمل التطبيق على الرابط: `http://localhost:3000`

### 4. بناء وتشغيل الإنتاج (Production Build & Start)
```bash
npm run build
npm run start
```

---

## 📂 هيكلة المشروع (Project Structure)

```
.
├── src/                  # المكونات والواجهات الرئيسية (React + TypeScript)
│   ├── App.tsx           # المكون الرئيسي لتطبيق يومياتي
│   ├── main.tsx          # مدخل Vite
│   └── index.css         # أنماط Tailwind CSS
├── server.ts             # خادم Express والربط مع نموذج Gemini 2.5 Flash
├── package.json          # الحزم والاعتمادات
├── vite.config.ts        # إعدادات Vite
├── .env.example          # نموذج متغيرات البيئة
└── README.md             # دليل استخدام المشروع
```

---

## 📄 الترخيص (License)
هذا المشروع مرخص بموجب رخصة MIT.


## بناء تطبيق Android (APK) عبر Capacitor

المشروع يحتوي الآن على غلاف Android باستخدام Capacitor. للتجربة محليًا:

```bash
npm install
npm run cap:sync
cd android
./gradlew assembleDebug
```

سيظهر الملف في `android/app/build/outputs/apk/debug/app-debug.apk`.

يستخدم تطبيق Android المتغير `VITE_API_BASE_URL` لإرسال طلبات `/api/*` إلى الخادم المنشور. يمكن ضبطه في بيئة البناء، مع إبقاء مفاتيح Gemini السرية على الخادم وعدم وضعها داخل APK.

يوجد Workflow باسم **Build Android APK** في `.github/workflows/android-apk.yml`. يتم تشغيله تلقائيًا عند الدفع إلى فرع `main` أو يدويًا من تبويب **Actions**، ثم يرفع ملف `app-debug.apk` كـArtifact. يمكن إضافة Secret باسم `VITE_API_BASE_URL` إذا كان Backend منشورًا على عنوان مختلف.
