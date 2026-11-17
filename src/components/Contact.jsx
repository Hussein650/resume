import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, WhatsappIcon } from "./Icons.jsx";
import { useLang } from "@/i18n.jsx";
import { links, ui } from "@/data/content.js";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <Card className="relative overflow-hidden py-0">
        <div aria-hidden="true" className="absolute -end-24 -top-24 size-72 rounded-full bg-primary/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -start-24 size-72 rounded-full bg-nile/15 blur-3xl" />
        <CardContent className="relative p-8 sm:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">{t(ui.contactTitle)}</h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t(ui.contactLead)}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            {links.whatsapp && (
              <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/${links.whatsapp}`} target="_blank" rel="noreferrer">
                  <WhatsappIcon /> {t(ui.chatWhatsapp)}
                </a>
              </Button>
            )}
            {links.email && (
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${links.email}`}><Mail /> {t(ui.emailMe)}</a>
              </Button>
            )}
            {links.github && (
              <Button size="lg" variant="outline" asChild>
                <a href={links.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              </Button>
            )}
          </div>

          <p dir="ltr" className="mt-8 text-sm text-muted-foreground ltr:text-left rtl:text-right">
            {[links.email, links.whatsapp && `+${links.whatsapp}`].filter(Boolean).join("  ·  ")}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
