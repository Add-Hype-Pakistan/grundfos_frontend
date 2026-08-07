"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why SCALA2", href: "/scala2" },
  { label: "Customer Support", href: "/customer-support" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav
      className="absolute top-0 left-0 w-full z-50"
      style={{ background: "#000000F2" }}
    >
      {/* Top bar: Logo + Talk to an Expert / Find a Dealer */}
      <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8 lg:px-16 lg:pt-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Grundfos"
            width={200}
            height={27}
            className="w-32 md:w-40 lg:w-50"
            priority
          />
        </Link>

        {/* Right side links - desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link
            href="/customer-support#installation-support"
            className="no-underline text-white text-sm lg:text-[17px] font-normal"
          >
            Talk to an Expert
          </Link>
          {/* <Link
            href="tel:+97148815166"
            className="no-underline text-white text-sm lg:text-[17px] font-normal"
          >
            Find a Dealer
          </Link> */}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuOutlined style={{ fontSize: 24 }} />
        </button>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-10 lg:mx-16 mt-5 border-b border-white/20" />

      {/* Navigation links - desktop */}
      <div className="hidden md:flex items-center px-10 lg:px-16 py-5 gap-8 lg:gap-20 overflow-x-auto">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="no-underline hover:opacity-80 transition-opacity text-white text-sm lg:text-[17px] font-normal whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 pb-4 border-b border-gray-200">
            <Link
              href="tel:+97148815166"
              className="text-base text-gray-800 no-underline"
              onClick={() => setDrawerOpen(false)}
            >
              Talk to an Expert
            </Link>
            <Link
              href="/find-a-dealer"
              className="text-base text-gray-800 no-underline"
              onClick={() => setDrawerOpen(false)}
            >
              Find a Dealer
            </Link>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-gray-800 no-underline"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </nav>
  );
}
