import { cn } from "@/lib/utils";

const Card = ({ className, ...p }) => (
  <div data-slot="card" className={cn("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", className)} {...p} />
);
const CardHeader = ({ className, ...p }) => (
  <div data-slot="card-header" className={cn("grid gap-1.5 px-6", className)} {...p} />
);
const CardTitle = ({ className, ...p }) => (
  <div data-slot="card-title" className={cn("font-semibold leading-none", className)} {...p} />
);
const CardDescription = ({ className, ...p }) => (
  <div data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...p} />
);
const CardContent = ({ className, ...p }) => (
  <div data-slot="card-content" className={cn("px-6", className)} {...p} />
);
const CardFooter = ({ className, ...p }) => (
  <div data-slot="card-footer" className={cn("flex items-center px-6", className)} {...p} />
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
