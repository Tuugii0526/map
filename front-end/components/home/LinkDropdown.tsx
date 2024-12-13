import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TChild, TLink } from "@/lib/types";
import Link from "next/link";
export const LinkDropdown = ({ link }: { link: TLink }) => {
  return (
    <div>
      {link.hasChildren ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="border border-1 border-white  hover:border-green-400 p-2 rounded-md">
            {link.title}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sub topics</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Menus links={link.children} parentPath={link.path} />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export const Menus = ({
  links,
  parentPath,
}: {
  links: TChild[];
  parentPath: string;
}) => {
  return links.map((link) => {
    return (
      <Link href={`/${parentPath}/${link.path}`}>
        <DropdownMenuItem className="p-2">{link.title}</DropdownMenuItem>
      </Link>
    );
  });
};
