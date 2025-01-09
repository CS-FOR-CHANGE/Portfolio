"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    name: string;
    href: string;
    currentPath: string;
    target?: string;
}

function NavLink({ name, href, currentPath, target }: NavLinkProps) {
    const activeStyle = currentPath === href ? "text-white" : "text-gray-400";
    const hoverStyle = "hover:bg-[#013f58] hover:bg-opacity-50 transition-all duration-300";

    return (
        <Link href={href} legacyBehavior>
            <a
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className={`${activeStyle} ${hoverStyle} rounded-xl px-3 py-2`}
            >
                {name}
            </a>
        </Link>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [applyScrolledStyle, setScrollStyle] = useState(false);

    function updateNavStyle() {
        setScrollStyle(window.scrollY > 50);
    }

    useEffect(() => {
        window.addEventListener("scroll", updateNavStyle);
        return () => window.removeEventListener("scroll", updateNavStyle);
    }, []);

    return (
        <nav
            className={`fixed w-full text-white flex items-center px-10 py-5 z-10 transition-all duration-300 ease-in-out ${
                applyScrolledStyle ? "bg-triton bg-opacity-100" : "bg-triton bg-opacity-0"
            }`}
        >
            <Image src="/favicon.png" width={60} height={60} alt="Triton Logo" />

            <div className="flex text-md font-semibold ml-auto gap-2">
                {[
                    ["Home", "/", "_self"],
                    ["Contact", "https://forms.gle/QRNT34DaesvMFJUR9", "_blank"],
                    ["Projects", "/tools", "_self"],
                ].map(([name, href, target]) => (
                    <NavLink
                        key={name}
                        href={href}
                        name={name}
                        currentPath={pathname}
                        target={target}
                    />
                ))}
            </div>
        </nav>
    );
}
