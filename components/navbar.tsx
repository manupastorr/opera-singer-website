"use client";

import { m } from "framer-motion";

import { useTheme } from "next-themes";
import { MenuBar } from "./menubar";
import { ModeToggle } from "./mode-toggle";
import Pages from "./pages";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <header className="z-30 bg-background py-6">
      <m.nav
        initial={{
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="container flex items-center justify-between px-6 sm:px-16"
      >
        {/* Mobile Menu */}
        <div className="md:hidden">
          <MenuBar />
        </div>

        {/* Logo */}
        <div></div>

        {/* Desktop Menu */}
        <m.nav className="hidden md:inline-flex">
          <Pages />
        </m.nav>

        {/* Mode Toggle */}
        <ModeToggle />
      </m.nav>
    </header>
  );
};

export default Navbar;
