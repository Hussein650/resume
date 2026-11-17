import { GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLang } from "@/i18n.jsx";
import { about, profile, ui } from "@/data/content.js";

export default function About() {
  const { t } = useLang();
  const e = about.education;
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{t(ui.aboutTitle)}</h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-xl space-y-5 text-lg leading-loose text-muted-foreground">
          {about.text.map((p, i) => <p key={i}>{t(p)}</p>)}
        </div>
        <Card className="self-start">
          <CardHeader>
            <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-primary/15 text-gold">
              <GraduationCap className="size-6" />
            </div>
            <CardTitle className="font-display text-xl">{t(e.school)}</CardTitle>
            <CardDescription className="text-base">{t(e.faculty)}<br />{t(e.dept)}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Badge variant="secondary" className="text-nile">{e.expected ? t(e.expected) : t(e.status)}</Badge>
            <Separator />
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" /> {t(profile.location)}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
