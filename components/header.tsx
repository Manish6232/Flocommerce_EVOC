"use client";

import { useEffect, useState } from "react";
import { GetStartedButton } from "@/components/lead-form";
import Logo from "@/components/logo";

const links = [
  ["Services", "/#services"],
  ["Marketplaces", "/#marketplaces"],
  ["Process", "/#process"],
  ["Seller Reviews", "/#stories"],
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

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Logo />
      <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <GetStartedButton className="button button-small header-cta">Talk to our team</GetStartedButton>
      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        <i /><i /><i />
      </button>
    </header>
  );
}
