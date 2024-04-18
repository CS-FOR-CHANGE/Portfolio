"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [applyScrolledStyle, setScrollStyle] = useState(false);

    function updateNavStyle() {
        setScrollStyle(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", updateNavStyle);
        return () => window.addEventListener("scroll", updateNavStyle);
    }, []);

    return (
        <nav
            className={`fixed w-full text-white flex items-center px-10 py-5 z-10 
            ${applyScrolledStyle ? "bg-triton" : "bg-transparent"}`}
        >
            <Image
                src={"/favicon.png"}
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
                ].map(([name, href]) => {
                    return (
                        <NavLink
                            key={name}
                            href={href}
                            name={name}
                            currentPath={pathname}
                            scrolled={applyScrolledStyle}
                        />
                    );
                })}
            </div>
        </nav>
    );
}

function NavLink({ name, href, currentPath, scrolled }: NavLinkProps) {
    const activeStyle = currentPath === href ? "text-white" : "text-gray-400";
    const hoverStyle = `${
        scrolled ? "hover:bg-[#013f58]" : "hover:bg-slate-600"
    }`;
    return (
        <Link
            href={href}
            className={`${activeStyle} ${hoverStyle} rounded-xl px-3 py-2`}
        >
            {name}
        </Link>
    );
}

interface NavLinkProps {
    name: string;
    href: string;
    currentPath: string;
    scrolled: boolean;
    children?: React.ReactNode;
}
