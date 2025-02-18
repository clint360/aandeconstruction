"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo & About */}
        <div>
          <Image src={logo} alt="Logo" width={100} height={50} />
          <p className="mt-4 text-gray-400">
            Your go-to company for the best building and construction deals accross the country.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#FF9A25]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-[#FF9A25] transition">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-[#FF9A25] transition">Contact</Link></li>
            <li><Link href="/" className="text-gray-400 hover:text-[#FF9A25] transition">FAQ</Link></li>
            <li><Link href="/" className="text-gray-400 hover:text-[#FF9A25] transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#FF9A25]">Contact Us</h3>
          <p className="mt-4 text-gray-400">Bamenda, Mile 2, Nkwen</p>
          <p className="text-gray-400">Email: support@example.com</p>
          <p className="text-gray-400">Phone: +237 6 80 61 23 60</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-[#FF9A25] transition"><FaFacebook size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF9A25] transition"><FaTwitter size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF9A25] transition"><FaInstagram size={20} /></Link>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="text-center mt-8 text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} A and E Construction Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
