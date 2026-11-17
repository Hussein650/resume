import { createContext, useContext, useEffect, useState } from "react";

const Ctx = createContext(null);
export const useLang = () => useContext(Ctx);

const initial = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
  } catch {}
  return navigator.language?.startsWith("ar") ? "ar" : "en";
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  // t() picks the right language from {en, ar}; plain strings pass through.
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) && "en" in v ? v[lang] : v);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}
