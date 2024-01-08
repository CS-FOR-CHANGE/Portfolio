"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 text-white bg-triton  flex items-center px-10 py-5 shadow-lg z-10">
            <Image
                src={"/icon-dark-1.png"}
                width={75}
                height={75}
                alt="Triton Logo"
            />

            <div className="flex text-md font-semibold ml-auto gap-5 justify-between">
                {[
                    ["Home", "/"],
                    ["Tools", "/tools"],
                    ["Events", "/events"],
                    ["Contact", "/contact"],
                ].map(([name, href]) => {
                    return (
                        <NavLink href={href} name={name} current={pathname} />
                    );
                })}
            </div>
        </nav>
    );
}

function NavLink({ name, href, current }: NavLinkProps) {
    const styles = current === href ? "text-white" : "text-gray-300";
    return (
        <Link href={href} className={styles}>
            {name}
        </Link>
    );
}

interface NavLinkProps {
    name: string;
    href: string;
    current: string;
}
