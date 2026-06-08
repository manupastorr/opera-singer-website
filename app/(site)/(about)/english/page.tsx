import Bio from "@/components/bio";
import { createPageMetadata } from "@/lib/page-metadata";
import { getAbout } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("English");

import { type About } from "@/types";

const About = async () => {
  const { englishBio }: About = await getAbout();

  return <Bio bio={englishBio} />;
};

export default About;
