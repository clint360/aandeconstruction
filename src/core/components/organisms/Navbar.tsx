"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "./../../assets/logo.png"
import logoi from "./../../assets/logoi.png"
import { FaEnvelope } from "react-icons/fa";
import Button from "../atoms/Button";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);

    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300 navbar "
        >
            <div className="max-w-[1240px] m-auto flex justify-between items-center text-white pt-2 sm:p-4">
                <Link href="/">
                    <Image src={color === "transparent" ? logo : logoi}
                        alt="A&E Logo"
                        className="w-24"
                        priority />
                </Link>
                <ul style={{ color: `${textColor}` }} className="hidden sm:flex items-center">
                    <li className="p-4 hover:text-[#FF9A25]">
                        <Link href="/" >Home</Link>
                    </li>
                    <li className="p-4 hover:text-[#FF9A25]">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="p-4 hover:text-[#FF9A25]">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="p-4 hover:text-[#FF9A25]">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/contact-us">
                            <Button
                                text="Contact Us"
                                bgColor="bg-[#FF9A25]"
                                textColor="text-white"
                                icon={<FaEnvelope />}
                                onClick={() => console.log("Contact us clicked!")}
                            />

                        </Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                    }
                >
                    <ul>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/about">About</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/services">Services</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
