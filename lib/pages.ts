interface Page {
  name: string;
  href?: string;
  description?: string;
  children?: Page[];
}

export const pages: Page[] = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    children: [
      {
        name: "DEUTSCH",
        href: "/deutsch",
        description: "Biographie, Repertoire, Presse",
      },
      {
        name: "ENGLISH",
        href: "/english",
        description: "Biography, Repertoire, Press",
      },
    ],
  },
  {
    name: "CALENDAR",
    href: "/calendar",
  },
  {
    name: "PERFORMANCES",
    href: "/performances",
  },
  {
    name: "GALLERY",
    children: [
      {
        name: "ON STAGE",
        href: "/onstage",
      },
      {
        name: "PORTRAIT",
        href: "/portrait",
      },
    ],
  },
  {
    name: "REPERTOIRE",
    children: [
      { name: "CONCERT", href: "/concert" },
      {
        name: "OPERA",
        href: "/opera",
      },
      {
        name: "LIED",
        href: "/lied",
      },
    ],
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];
