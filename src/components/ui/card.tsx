import type * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-base flex flex-col shadow-shadow border-2 gap-6 py-6 border-border bg-background text-foreground font-base",
        className,
      )}
      {...props}
    />
  );
}

function HeaderCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-base flex flex-col shadow-shadow border-2 gap-6 py-6 border-border bg-main text-foreground font-base",
        className,
      )}
      {...props}
    />
  );
}

export { Card, HeaderCard };
