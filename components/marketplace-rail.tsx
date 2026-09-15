"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const marketplaces = [
  { key: "amazon", label: "Amazon", src: "/marketplaces/amazon.png" },
  { key: "flipkart", label: "Flipkart", src: "/marketplaces/flipkart.png" },
  { key: "meesho", label: "Meesho", src: "/marketplaces/meesho.svg" },
  { key: "myntra", label: "Myntra", src: "/marketplaces/myntra.svg" },
  { key: "nykaa", label: "Nykaa", src: "/marketplaces/nykaa.png" },
  { key: "ajio", label: "AJIO", src: "/marketplaces/ajio.svg" },
];

export default function MarketplaceRail() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = ref.current;
    const track = viewport?.querySelector<HTMLElement>(".marketplace-track");
    const sequence = track?.querySelector<HTMLElement>(".marketplace-sequence");
    if (!viewport || !track || !sequence) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let visible = false;
    let distance = 0;
    let width = 0;
    let start = 0;
    let center = 0;
    const logos = Array.from(track.querySelectorAll<HTMLElement>(".marketplace-logo"));
    let positions: number[] = [];
    const render = () => {
      const translation = preference.matches ? 0 : start - distance;
      track.style.transform = `translate3d(${translation}px,0,0)`;
      logos.forEach((logo, index) => {
        const proximity = Math.abs(positions[index] + translation - center);
        // A cosine curve raises and lowers the logo over about half a second.
        const emphasis = !preference.matches && proximity < 20
          ? (1 + Math.cos(Math.PI * proximity / 20)) / 2
          : 0;
        logo.style.setProperty("--center-emphasis", String(emphasis));
      });
    };
    const measure = () => {
      width = sequence.offsetWidth;
      center = viewport.clientWidth / 2;
      positions = logos.map((logo) => logo.offsetLeft + logo.offsetWidth / 2);
      start = center - width - positions[0];
      distance = 0;
      render();
    };
    const tick = (now: number) => {
      const delta = previous ? Math.min(now - previous, 40) : 0;
      previous = now;
      if (!document.hidden && width > 0) {
        distance = (distance + delta * 0.075) % width;
        render();
      }
      frame = requestAnimationFrame(tick);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (visible && !preference.matches) frame = requestAnimationFrame(tick);
    };
    const preferenceChanged = () => { measure(); restart(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
    const resize = new ResizeObserver(measure);
    measure();
    observer.observe(viewport);
    resize.observe(viewport);
    preference.addEventListener("change", preferenceChanged);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      preference.removeEventListener("change", preferenceChanged);
    };
  }, []);

  return <div ref={ref} className="marketplace-marquee"><div className="marketplace-track">{[0, 1, 2].map((copy) => <div className="marketplace-sequence" key={copy} aria-hidden={copy !== 0 ? true : undefined}>{marketplaces.map((marketplace) => <div className={`marketplace-logo ${marketplace.key}`} key={marketplace.key}><Image src={marketplace.src} width={250} height={100} alt={marketplace.label} /></div>)}</div>)}</div></div>;
}
