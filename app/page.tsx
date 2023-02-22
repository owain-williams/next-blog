import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-green-500">
      <h1 className="text-2xl underline">Hello World!</h1>
    </main>
  );
}
