import { createPageMetadata } from "@/lib/page-metadata";

import ContactForm from "./contact-form";

export const metadata = createPageMetadata("Contact");

export default function ContactPage() {
  return <ContactForm />;
}
