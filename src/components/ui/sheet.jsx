import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

function SheetContent({ className, children, side = "right", ...props }) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "fixed inset-y-0 z-50 flex h-full w-3/4 flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm",
          side === "right"
            ? "right-0 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
            : "left-0 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute end-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}
const SheetHeader = ({ className, ...p }) => <div className={cn("flex flex-col gap-1.5 p-4", className)} {...p} />;
const SheetTitle = ({ className, ...p }) => <SheetPrimitive.Title className={cn("font-semibold", className)} {...p} />;
const SheetDescription = ({ className, ...p }) => (
  <SheetPrimitive.Description className={cn("text-sm text-muted-foreground", className)} {...p} />
);

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription };
