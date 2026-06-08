import { createPageMetadata } from "@/lib/page-metadata";

import StudioPage from "./studio-page";

export const metadata = createPageMetadata("Studio");

export default function Page() {
  return <StudioPage />;
}
