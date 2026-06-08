import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description = "Opera Singer",
): Metadata {
  return {
    title: `${title} | Taryn Knerr`,
    description,
  };
}
