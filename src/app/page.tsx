import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/core/components/organisms/Navbar";
import Hero from "@/core/components/organisms/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
