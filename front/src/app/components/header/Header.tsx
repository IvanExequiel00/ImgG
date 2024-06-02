import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";

const Header = () =>{
    return(
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link href={"/"}>
        <Image  width={100} height={100} src={logo} alt="logo"></Image>
        </Link>
        <Link href={"/create-post"} className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          create
          </Link>
      </header>
    )
}
export default Header