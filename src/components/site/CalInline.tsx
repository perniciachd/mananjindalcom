"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { site } from "@/lib/site";

type Props = {
  /** Cal.com event slug, e.g. "discovery" or "training". Defaults to discovery. */
  event?: string;
  /** Override namespace (defaults to event slug). Use distinct namespaces if multiple embeds on one page. */
  namespace?: string;
  /** Pixel height of the embed. */
  height?: number;
  className?: string;
};

export function CalInline({
  event = site.cal.discovery,
  namespace,
  height = 720,
  className,
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
    <div
      className={className}
      style={{ width: "100%", height, overflow: "hidden" }}
    >
      <Cal
        namespace={ns}
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "auto" }}
      />
    </div>
  );
}
