import { useEffect, useState } from "react";
import { RotateCw } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/i18n.jsx";
import { profile, ui } from "@/data/content.js";

// The hero's one animated moment: a request travelling through my stack.
export default function Trace() {
  const { t } = useLang();
  const [shown, setShown] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(4);
      return;
    }
    setShown(0);
    const ids = [1, 2, 3, 4].map((i) => setTimeout(() => setShown(i), 400 + i * 800));
    return () => ids.forEach(clearTimeout);
  }, [run]);

  const rows = [
    { who: "Browser", tag: "React · Tailwind", code: "GET /api/developer" },
    { who: "Laravel", tag: "MVC · REST API", code: "DeveloperController@show" },
    { who: "MySQL", tag: "Database", code: "SELECT * FROM developers LIMIT 1" },
    {
      who: "Response",
      tag: "200 OK",
      code: `{ "name": "${profile.name.en}", "studying": "Information Systems", "open_to": ["internships", "freelance"] }`,
      done: true,
    },
  ];

  return (
    <div dir="ltr" className="relative">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-transparent to-nile/25 blur-3xl" />
      <Card className="gap-5">
        <CardHeader className="flex-row items-center justify-between">
          <div className="flex gap-1.5 mb-4" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
            <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <Badge variant="outline" className="font-mono text-[11px]">GET /portfolio</Badge>
        </CardHeader>
        <CardContent>
          <ol className="relative space-y-5 border-s ps-6">
            {rows.map((r, i) => (
              <li key={r.who} className={`relative transition-all duration-500 ${i < shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                <span className={`absolute -start-[31px] top-1.5 size-3 rounded-full border-2 border-card ${r.done ? "bg-nile" : "bg-primary"}`} />
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-base font-semibold">{r.who}</span>
                  <span className={`text-xs ${r.done ? "text-nile" : "text-muted-foreground"}`}>{r.tag}</span>
                </div>
                <p className="mt-1 break-words font-mono text-[13px] leading-relaxed text-muted-foreground">{r.code}</p>
              </li>
            ))}
          </ol>
          <Button variant="ghost" size="sm" className="mt-5 -ms-3 text-muted-foreground" onClick={() => setRun((n) => n + 1)}>
            <RotateCw /> {t(ui.replay)}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
