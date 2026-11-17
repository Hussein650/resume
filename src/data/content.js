export const profile = {
  name: { en: "Hussein Sharif", ar: "حسين شريف" },
  role: { en: "Full-stack web developer", ar: "مطوّر ويب متكامل" },
  intro: {
    en: "I build web applications from the interface down to the database. I'm an Information Systems student at Al-Neelain University, learning by shipping real projects.",
    ar: "أبني تطبيقات الويب من الواجهة حتى قاعدة البيانات. طالب نظم معلومات في جامعة النيلين، أتعلّم بتنفيذ مشاريع حقيقية.",
  },
  status: { en: "Open to jops and freelance work", ar: "متاح للتوظيف والعمل الحر" },
  location: { en: "Khartoum, Sudan", ar: "الخرطوم، السودان" },
  cv: "Hussein_Sherif_CV.pdf",
};

export const links = {
  email: "wwwhussein093@gmail.com",
  github: "https://github.com/Hussein650",
  whatsapp: "249112304780",
};

export const about = {
  text: [
    {
      en: "I love writing the lines of code that turn into creativity in the digital world.",
      ar: "أحب كتابة تلك الأسطر التي تتحول إلى إبداع داخل العالم الرقمي.",
    },
    {
      en: "My Information Systems studies shape how I work. I analyse the problem, model the data, and only then write code. C++ and algorithms keep my fundamentals sharp.",
      ar: "دراستي لنظم المعلومات تحدد طريقة عملي: أحلّل المشكلة، ثم أصمّم البيانات، ثم أكتب الكود. وتبقي C++ والخوارزميات أساسياتي قوية.",
    },
  ],
  education: {
    school: { en: "Al-Neelain University", ar: "جامعة النيلين" },
    faculty: { en: "Faculty of Computer Science", ar: "كلية علوم الحاسوب" },
    dept: { en: "Information Systems Department", ar: "قسم نظم المعلومات" },
    status: { en: "Currently studying", ar: "طالب حالياً" },
    // مثال: { en: "Expected 2027", ar: "التخرج المتوقع 2027" }
    expected: null,
  },
};

export const layers = [
  {
    title: { en: "Interface", ar: "الواجهة" },
    note: { en: "What the visitor sees in the browser", ar: "ما يراه الزائر في المتصفح" },
    items: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Bootstrap", "Vite",
      { en: "Responsive design", ar: "تصميم متجاوب" },
    ],
  },
  {
    title: { en: "Server", ar: "الخادم" },
    note: { en: "Where the logic and the API live", ar: "حيث تعيش المنطق والواجهة البرمجية" },
    items: [
      "PHP", "Laravel", { en: "MVC architecture", ar: "معمارية MVC" },
      { en: "RESTful APIs", ar: "RESTful APIs" }, { en: "API integration", ar: "ربط الخدمات (API)" },
      "Composer",
    ],
  },
  {
    title: { en: "Data", ar: "البيانات" },
    note: { en: "How information is stored and related", ar: "كيف تُخزَّن المعلومات وترتبط" },
    items: ["MySQL", "SQL", "Eloquent ORM"],
  },
  {
    title: { en: "Foundations", ar: "الأساسيات" },
    note: { en: "From my studies, behind every project", ar: "من دراستي، وراء كل مشروع" },
    items: [
      "C++", { en: "Object-oriented programming", ar: "البرمجة الكائنية (OOP)" },
      { en: "Data structures", ar: "هياكل البيانات" }, { en: "Algorithms", ar: "الخوارزميات" },
    ],
  },
  {
    title: { en: "Workflow", ar: "طريقة العمل" },
    note: { en: "How code is versioned and shipped", ar: "كيف يُدار الكود ويُنشر" },
    items: ["Git", "GitHub", "npm"],
  },
];

export const projects = [
  {
    title: { en: "Multi tenant clinic management system", ar: "نظام إدارة العيادة متعدد المستأجرين" },
    desc: {
      en: "Clinic management, doctor schedules, and patient appointments (SaaS project).",
      ar: "إدارة العيادات و جداول الأطباء ومواعيد المرضى (saas project).",
    },
    tech: ["Laravel", "MySQL", "React.js", "Tailwind", "Inertia.js"],
    live: "",
    code: "https://github.com/Hussein650/MultiTenantClinicSystem.git",
  },
  {
    title: { en: "Multi tenant clinic management system", ar: "نظام إدارة العيادة متعدد المستأجرين" },
    desc: {
      en: "Clinic management, doctor schedules, and patient appointments (SaaS project).",
      ar: "إدارة العيادات و جداول الأطباء ومواعيد المرضى (saas project).",
    },
    tech: ["Laravel", "MySQL", "React.js", "Tailwind", "Inertia.js"],
    live: "",
    code: "https://github.com/Hussein650/MultiTenantClinicSystem.git",
  },
  {
    title: { en: "Multi tenant clinic management system", ar: "نظام إدارة العيادة متعدد المستأجرين" },
    desc: {
      en: "Clinic management, doctor schedules, and patient appointments (SaaS project).",
      ar: "إدارة العيادات و جداول الأطباء ومواعيد المرضى (saas project).",
    },
    tech: ["Laravel", "MySQL", "React.js", "Tailwind", "Inertia.js"],
    live: "",
    code: "https://github.com/Hussein650/MultiTenantClinicSystem.git",
  },
];

export const ui = {
  nav: {
    about: { en: "About", ar: "نبذة" },
    skills: { en: "Skills", ar: "المهارات" },
    projects: { en: "Projects", ar: "المشاريع" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  switchTo: { en: "العربية", ar: "English" },
  viewProjects: { en: "View projects", ar: "شاهد المشاريع" },
  downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  replay: { en: "Replay request", ar: "أعد الطلب" },
  aboutTitle: { en: "About", ar: "نبذة عني" },
  skillsTitle: { en: "Skills, layer by layer", ar: "مهاراتي، طبقة بعد طبقة" },
  skillsLead: {
    en: "Every web request travels through these layers. Here is what I use at each one.",
    ar: "كل طلب ويب يمرّ بهذه الطبقات. وهذا ما أستخدمه في كل واحدة.",
  },
  projectsTitle: { en: "Projects", ar: "المشاريع" },
  sample: { en: "Sample, replace me", ar: "مثال، استبدلني" },
  live: { en: "Live demo", ar: "المعاينة" },
  code: { en: "Source code", ar: "الكود المصدري" },
  contactTitle: { en: "Let's build something", ar: "لنبنِ شيئاً معاً" },
  contactLead: {
    en: "I'm looking for internships and freelance projects. Write to me.",
    ar: "أبحث عن فرص توظيف ومشاريع حرة. راسلني.",
  },
  chatWhatsapp: { en: "Chat on WhatsApp", ar: "راسلني على واتساب" },
  emailMe: { en: "Email me", ar: "البريد الإلكتروني" },
  menu: { en: "Menu", ar: "القائمة" },
  theme: { en: "Toggle theme", ar: "تبديل المظهر" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  built: { en: "Built with Vite, React and Tailwind CSS", ar: "بُني بـ Vite وReact وTailwind CSS" },
};
