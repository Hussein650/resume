import { ArrowUpRight, Binary, FolderGit2, LayoutDashboard } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./Icons.jsx";
import { useLang } from "@/i18n.jsx";
import { projects, ui } from "@/data/content.js";

const covers = [FolderGit2, LayoutDashboard, Binary];

export default function Projects() {
  const { t } = useLang();
  if (!projects.length) return null;
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{t(ui.projectsTitle)}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Cover = covers[i % covers.length];
          return (
            <Card key={i} className="group gap-5 overflow-hidden pt-0 transition-colors hover:border-primary">
              <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-nile/20">
                <Cover className="size-10 text-gold transition-transform group-hover:scale-110" strokeWidth={1.5} />
                {p.sample && (
                  <Badge variant="secondary" className="absolute end-3 top-3 text-gold">{t(ui.sample)}</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="font-display text-xl">{t(p.title)}</CardTitle>
                <CardDescription className="leading-relaxed">{t(p.desc)}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-wrap content-start gap-2">
                {p.tech.map((x) => <Badge key={x} variant="secondary" className="text-nile">{x}</Badge>)}
              </CardContent>
              {(p.live || p.code) && (
                <CardFooter className="gap-2">
                  {p.live && (
                    <Button size="sm" asChild>
                      <a href={p.live} target="_blank" rel="noreferrer">{t(ui.live)} <ArrowUpRight className="rtl:-scale-x-100" /></a>
                    </Button>
                  )}
                  {p.code && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={p.code} target="_blank" rel="noreferrer"><GithubIcon /> {t(ui.code)}</a>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
