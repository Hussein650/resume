import { Binary, Database, GitMerge, Monitor, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/i18n.jsx";
import { layers, ui } from "@/data/content.js";

const icons = [Monitor, Server, Database, Binary, GitMerge];

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{t(ui.skillsTitle)}</h2>
      <p className="mt-3 max-w-xl text-lg text-muted-foreground">{t(ui.skillsLead)}</p>

      {/* The line mirrors the request path from the hero. */}
      <ol className="relative ms-4 mt-12 space-y-12 border-s ps-10">
        {layers.map((layer, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={i} className="relative grid gap-4 md:grid-cols-[220px_1fr]">
              <span className="absolute -start-[3.66rem] top-0 flex size-9 items-center justify-center rounded-full border bg-card text-gold shadow-sm">
                <Icon className="size-4" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{t(layer.title)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(layer.note)}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2">
                {layer.items.map((item, j) => (
                  <li key={j}>
                    <Badge variant="outline" className="rounded-lg bg-card px-3.5 py-1.5 text-[15px] font-normal transition-colors hover:border-primary">
                      {t(item)}
                    </Badge>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
