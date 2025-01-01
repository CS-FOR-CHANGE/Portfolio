"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    name: string;
    href: string;
    currentPath: string;
    scrolled: boolean;
    children?: React.ReactNode;
}

function NavLink({ name, href, currentPath, scrolled }: NavLinkProps) {
    const activeStyle = currentPath === href ? "text-white" : "text-gray-400";
    const hoverStyle = "hover:bg-[#013f58] hover:bg-opacity-50 transition-all duration-300";
    return (
        <Link
            href={href}
            className={`${activeStyle} ${hoverStyle} rounded-xl px-3 py-2`}
        >
            {name}
        </Link>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [applyScrolledStyle, setScrollStyle] = useState<boolean>(false);

    function updateNavStyle() {
        setScrollStyle(window.scrollY > 50);  // Start transition after 50px of scroll
    }

    useEffect(() => {
        window.addEventListener("scroll", updateNavStyle);
        return () => window.removeEventListener("scroll", updateNavStyle);
    }, []);

    return (
        <nav
            className={`fixed w-full text-white flex items-center px-10 py-5 z-10 transition-all duration-300 ease-in-out
            ${applyScrolledStyle ? "bg-triton bg-opacity-100" : "bg-triton bg-opacity-0"}`}
        >
            <Image
                src="/favicon.png"
                width={60}
                height={60}
                alt="Triton Logo"
            />

            <div className="flex text-md font-semibold ml-auto gap-2">
                {[
                    ["Home", "/"],
                    ["About", "/about"],
                    ["Events", "/events"],
                    ["Contact", "/contact"],
                    ["Projects", "/tools"]
                ].map(([name, href]) => (
                    <NavLink
                        key={name}
                        href={href}
                        name={name}
                        currentPath={pathname}
                        scrolled={applyScrolledStyle}
                    />
                ))}
            </div>
        </nav>
    );
}