import Bio from "@/components/bio";
import { createPageMetadata } from "@/lib/page-metadata";
import { getAbout } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Deutsch");

import { type About } from "@/types";

const About = async () => {
  const { germanBio }: About = await getAbout();

  return <Bio bio={germanBio} />;
};

export default About;
