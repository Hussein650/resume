import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n.jsx";
import { ui } from "@/data/content.js";

export default function ThemeToggle() {
  const { t } = useLang();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={t(ui.theme)}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
