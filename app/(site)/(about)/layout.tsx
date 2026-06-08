import AboutImage from "@/components/about-image";
import Critics from "@/components/critics";
import { getAbout, getCritics } from "@/sanity/sanity.query";

const AboutLayout = async ({ children }: { children: React.ReactNode }) => {
  const [critics, about] = await Promise.all([getCritics(), getAbout()]);

  return (
    <main className="container flex flex-1 flex-col gap-3 sm:px-16 md:gap-8">
      <AboutImage about={about} />
      <section className="flex flex-col gap-8 pb-4 md:grid md:grid-cols-critics">
        <div className="flex flex-col gap-8">{children}</div>
        <Critics critics={critics} />
      </section>
    </main>
  );
};

export default AboutLayout;
