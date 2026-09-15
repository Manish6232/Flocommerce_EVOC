"use client";

import { useEffect, useRef } from "react";

export default function SiteMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const scene = node.querySelector<HTMLElement>(".commerce-scene");
    let frame = 0;
    let pointerFrame = 0;
    const updateScroll = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      node.style.setProperty("--page-progress", String(distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0));
      node.style.setProperty("--hero-shift", reducedMotion.matches ? "0px" : `${Math.min(window.scrollY, 800) * -0.035}px`);
    };
    const scheduleScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateScroll);
    };
    const resetPointer = () => {
      cancelAnimationFrame(pointerFrame);
      if (!scene) return;
      scene.style.setProperty("--tilt-x", "0deg");
      scene.style.setProperty("--tilt-y", "0deg");
    };
    const movePointer = (event: PointerEvent) => {
      if (!scene || reducedMotion.matches || !finePointer.matches) return;
      const rect = scene.getBoundingClientRect();
      const x = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
      const y = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        scene.style.setProperty("--tilt-x", `${-y * 7}deg`);
        scene.style.setProperty("--tilt-y", `${x * 7}deg`);
      });
    };
    const preferenceChanged = () => { resetPointer(); scheduleScroll(); };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.classList.toggle("motion-in-view", entry.isIntersecting);
    });
    node.querySelectorAll(".commerce-scene, .operations-panel").forEach((element) => observer.observe(element));
    const resizeObserver = new ResizeObserver(scheduleScroll);
    resizeObserver.observe(document.body);
    scene?.addEventListener("pointermove", movePointer);
    scene?.addEventListener("pointerleave", resetPointer);
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    window.addEventListener("resize", scheduleScroll);
    reducedMotion.addEventListener("change", preferenceChanged);
    finePointer.addEventListener("change", preferenceChanged);
    updateScroll();
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      observer.disconnect();
      resizeObserver.disconnect();
      scene?.removeEventListener("pointermove", movePointer);
      scene?.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", scheduleScroll);
      window.removeEventListener("resize", scheduleScroll);
      reducedMotion.removeEventListener("change", preferenceChanged);
      finePointer.removeEventListener("change", preferenceChanged);
    };
  }, []);

  return <div ref={ref} className="site-motion"><div className="reading-progress" aria-hidden="true" />{children}</div>;
}
