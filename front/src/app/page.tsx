import Image from "next/image";
import {logo} from "../assets"
import Link from "next/link";

export default function Home() {
  return (
  <main className="sm:p-8 px-4 py-8 w-full bg-[f9fafe] min-h-[calc(100vh-73px)]">
   <Link href={"/home"}>Home</Link>
  </main>
  );
}
