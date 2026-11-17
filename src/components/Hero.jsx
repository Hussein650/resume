import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsappIcon } from "./Icons.jsx";
import Trace from "./Trace.jsx";
import { useLang } from "@/i18n.jsx";
import { profile, links, ui } from "@/data/content.js";

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-24">
        <div>
          <Badge variant="outline" className="gap-2 rounded-full bg-card/60 px-3 py-1.5 text-sm font-normal text-muted-foreground backdrop-blur">
            <span className="size-2 rounded-full bg-nile" /> {t(profile.status)}
          </Badge>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[1.05] ltr:tracking-tight">
            {t(profile.name)}
          </h1>
          <p className="mt-4 font-display text-xl font-medium text-gold sm:text-2xl">{t(profile.role)}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{t(profile.intro)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="#projects">{t(ui.viewProjects)} <ArrowDown /></a>
            </Button>
            {links.whatsapp && (
              <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/${links.whatsapp}`} target="_blank" rel="noreferrer">
                  <WhatsappIcon className="text-[#25D366]" /> WhatsApp
                </a>
              </Button>
            )}
            {profile.cv && (
              <Button size="lg" className="bg-white/10" variant="ghost" asChild>
                <a href={profile.cv} download><Download /> {t(ui.downloadCv)}</a>
              </Button>
            )}
          </div>
        </div>
        <Trace />
      </div>
    </section>
  );
}
