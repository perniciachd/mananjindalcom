"use client";

import { useEffect, type ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type Props = {
  event?: string;
  namespace?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  children: ReactNode;
};

/**
 * Opens a Cal.com booking popup. Use anywhere a CTA shouldn't navigate the user away
 * (e.g. site header, in-line within copy).
 */
export function CalPopupButton({
  event = site.cal.discovery,
  namespace,
  size = "default",
  variant = "default",
  className,
  children,
}: Props) {
  const ns = namespace ?? event;
  const calLink = `${site.cal.username}/${event}`;

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: ns });
      cal("ui", {
        theme: "auto",
        cssVarsPerTheme: {
          light: { "cal-brand": site.cal.brandColor },
          dark: { "cal-brand": site.cal.brandColor },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [ns]);

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      data-cal-namespace={ns}
      data-cal-link={calLink}
      data-cal-config={JSON.stringify({ layout: "month_view", theme: "auto" })}
    >
      {children}
    </Button>
  );
}
