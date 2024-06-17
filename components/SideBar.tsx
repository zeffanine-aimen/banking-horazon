"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../constants";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <div>
        <div className="flex ml-4 py-6">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="ml-2 sidebar-logo">Horizon</h1>
        </div>
        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <nav className="mt-6">
          {sidebarLinks.map((link) => {
            const isActive =
              pathname === link.route || pathname?.startsWith(`${link.route}/`);

            return (
              <Link
                key={link.route}
                href={link.route}
                className={cn("sidebar-link mb-2", { "bg-bank-gradient": isActive })}
              >
                <Image
                  width={24}
                  height={24}
                  src={link.imgURL}
                  alt={link.label}
                  
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
                <span
                  className={cn("sidebar-label", { "!text-white": isActive })}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center px-4 py-4">
        <Image
          src="/icons/jsm.svg"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">Adrian Hajdin</p>
          <p className="text-sm text-gray-500">adrian@jsmastery.pro</p>
        </div>
        <Image
          src="/icons/logout.svg"
          alt="logout icon"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
};

export default Sidebar;
