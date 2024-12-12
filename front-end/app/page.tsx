import { links } from "@/lib/data";
import Link from "next/link";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <p className={`text-center p-2 border-b`}>Google map experiment</p>
      <div className="w-full h-full flex gap-2">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`${link.path}`}
            className={` ${poppins.className}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
