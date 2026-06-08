import { getProfile } from "@/sanity/sanity.query";

import Hero from "@/components/hero";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata("Home");

async function Home() {
  const profile = await getProfile();

  return <Hero profile={profile} />;
}

export default Home;
