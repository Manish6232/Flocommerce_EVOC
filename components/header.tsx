"use client";

import { useEffect, useState } from "react";
import { GetStartedButton } from "@/components/lead-form";
import Logo from "@/components/logo";

const links = [
  ["Services", "/#services"],
  ["Marketplaces", "/#marketplaces"],
  ["Why Us", "/#why-us"],
  ["Process", "/#process"],
  ["Stories", "/#stories"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Logo />
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <GetStartedButton className="button button-small header-cta" />
      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <i /><i /><i />
      </button>
    </header>
  );
}
