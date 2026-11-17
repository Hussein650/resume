import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import { Separator } from "@/components/ui/separator";
import { useLang } from "@/i18n.jsx";
import { profile, ui } from "@/data/content.js";

export default function App() {
  const { t } = useLang();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Separator />
      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {t(profile.name)}. {t(ui.rights)}</p>
        <p>{t(ui.built)}</p>
      </footer>
    </>
  );
}
