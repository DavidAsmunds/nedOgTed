"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function Navbar(){

    //changing the color of alink depending on if it is the current site or not
    const pathname = usePathname();
    const linkClasses = (path) => pathname === path ? "nav-link nav-active" : "nav-link";

    return(
        <div className="navBar">
            <div className = "navImage">
                <Link href="/">
                    <Image
                        src="/nedogtedLogo.png"
                        alt="Ned & Ted Logo"
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
            <nav className="navMenu">
                <div className="navLinks">
                    <Link href="/" className={linkClasses("/")}> Heimasíða </Link>
                </div>

                <div className="navLinks">
                    <Link href="/about" className={linkClasses("/about")}> Um okkur</Link>
                </div>

                <div className="navLinks">
                    <Link href="/signup" className={linkClasses("/signup")}> Félagsskráning </Link>
                </div>
                
            </nav>
        </div>
    );
}