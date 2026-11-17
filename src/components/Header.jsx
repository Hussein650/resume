import { useState } from "react";
import { Languages, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./ThemeToggle.jsx";
import { useLang } from "@/i18n.jsx";
import { profile, ui } from "@/data/content.js";

const ids = ["about", "skills", "projects", "contact"];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const initials = (t(profile.name) || "A").split(" ")[0];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="font-display text-lg font-bold" aria-label={t(profile.name)}>
          <span className="text-gold">&lt;</span>{initials}<span className="text-gold">/&gt;</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {ids.map((id) => (
            <Button key={id} variant="ghost" asChild className="text-muted-foreground">
              <a href={`#${id}`}>{t(ui.nav[id])}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
            <Languages /> {t(ui.switchTo)}
          </Button>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t(ui.menu)}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={lang === "ar" ? "left" : "right"}>
              <SheetHeader>
                <SheetTitle className="font-display text-xl">{t(profile.name)}</SheetTitle>
                <SheetDescription>{t(profile.role)}</SheetDescription>
              </SheetHeader>
              <Separator />
              <nav className="flex flex-col gap-1 p-4">
                {ids.map((id) => (
                  <SheetClose asChild key={id}>
                    <Button variant="ghost" asChild className="h-12 justify-start text-base">
                      <a href={`#${id}`}>{t(ui.nav[id])}</a>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
