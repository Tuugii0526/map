import { links } from "@/lib/data";
import { LinkDropdown } from "@/components/home/LinkDropdown";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex ">
        {links.map((link) => (
          <LinkDropdown key={link.id} link={link} />
        ))}
      </div>
    </>
  );
}
