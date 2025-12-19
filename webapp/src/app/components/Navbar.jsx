"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function Navbar(){

    //changing the color of alink depending on if it is the current site or not
    const pathname = usePathname();
    const linkClasses = (path) => pathname === path ? "nav-link nav-active" : "nav-link";

    return(
        <nav className="nav-bar">
            <div className="nav-inner">
                <div className = "nav-image">
                    <Link href="/">
                        <Image
                            src="/nedogtedLogo.png"
                            alt="Ned & Ted Logo"
                            width={75}
                            height={75}
                        />
                    </Link>
                </div>
                <div className="nav-menu">
                    <div className="nav-links">
                        <Link href="/" className={linkClasses("/")}> Heimasíða </Link>
                    </div>

                    <div className="nav-links">
                        <Link href="/about" className={linkClasses("/about")}> Um okkur</Link>
                    </div>

                    <div className="nav-links">
                        <Link href="/meetings" className={linkClasses("/meetings")}> Fundir </Link>
                    </div>

                    <div className="nav-links">
                        <Link href="/signup" className={linkClasses("/signup")}> Félagsskráning </Link>
                    </div>
                    
                </div>
                
            </div>
        </nav>
    );
}