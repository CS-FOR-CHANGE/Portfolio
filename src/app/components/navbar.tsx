import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="sticky top-0 text-white bg-triton  flex items-center px-10 py-5 shadow-lg z-10">
            <Image
                src={"/icon-dark-1.png"}
                width={75}
                height={75}
                alt="Triton Logo"
            />
            <div className="flex text-md font-semibold ml-auto gap-5 justify-between">
                <NavLink name="Home" href="/" />
                <NavLink name="Tools" href="/" />
                <NavLink name="Events" href="/" />
                <NavLink name="Contact" href="/" />
            </div>
        </nav>
    );
}

const NavLink = ({ name, href }: NavLinkProps) => (
    <Link id={href} href={href} className="text-gray-300 hover:text-white">
        {name}
    </Link>
);

interface NavLinkProps {
    name: string;
    href: string;
}
