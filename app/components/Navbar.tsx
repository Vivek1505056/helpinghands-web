"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DonationModal from "./DonationModal";

const links = [
  { href: "/about",    label: "About",    cta: false },
  { href: "/get-help", label: "Get Help", cta: false },
  { href: "/#contact", label: "Volunteer", cta: false },
  { href: "/donate",   label: "Donate",   cta: true  },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [donateOpen,  setDonateOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when resizing back to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Helping Hands logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span
            className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
              solid ? "text-black" : "text-white"
            }`}
          >
            Helping{" "}
            <span
              className={`transition-colors duration-300 ${
                solid ? "text-royalBlue-500" : "text-white"
              }`}
            >
              Hands
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-base font-semibold">
          {links.map(({ href, label, cta }) =>
            cta ? (
              <button
                key={label}
                onClick={() => setDonateOpen(true)}
                className="bg-royalBlue-500 hover:bg-royalBlue-600 text-white px-5 py-2 rounded transition-colors"
              >
                {label}
              </button>
            ) : (
              <a
                key={label}
                href={href}
                className={`transition-colors duration-300 ${
                  solid ? "text-gray-700 hover:text-royalBlue-500" : "text-white hover:text-gray-300"
                }`}
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            solid ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6"  x2="6"  y2="18" />
              <line x1="6"  y1="6"  x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown ── smooth slide via max-height */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col border-t border-gray-100 px-8 py-2">
          {links.map(({ href, label, cta }) =>
            cta ? (
              <button
                key={label}
                onClick={() => { setMenuOpen(false); setDonateOpen(true); }}
                className="py-3 text-base font-semibold border-b border-gray-100 last:border-0 text-left text-royalBlue-500"
              >
                {label}
              </button>
            ) : (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-semibold border-b border-gray-100 last:border-0 text-gray-700 hover:text-royalBlue-500 transition-colors"
              >
                {label}
              </a>
            )
          )}
        </div>
      </div>

      {donateOpen && <DonationModal onClose={() => setDonateOpen(false)} />}
    </nav>
  );
}
