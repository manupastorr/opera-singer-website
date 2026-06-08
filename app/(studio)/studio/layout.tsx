import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("Studio");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
