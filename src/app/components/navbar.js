import Link from "next/link";
import Image from "next/image";

function NavItem({ link, href }) {
    return (
        <Link
            href={href}
            className="underline-offset-[10px] hover:underline decoration-triton"
        >
            {link}
        </Link>
    );
}

function Navbar() {
    return (
        <nav className="absolute w-full text-white flex items-center px-10 py-5 z-10">
            <Image
                src={`/icon-dark-1.png`}
                width={60}
                height={60}
                alt="Triton Logo"
                className="rounded-full"
            />
            <div className="flex font-semibold text-xl ml-auto gap-4">
                <NavItem link="Home" href="/" />
                <NavItem link="Join" href="/" />
                <NavItem link="Events" href="/" />
                <NavItem link="Contact" href="/" />
            </div>
        </nav>
    );
}

export default Navbar;
