import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center font-medium text-gray-400 font-sans",
        isActive && "text-gray-50"
      )}
    >
      <span className="text-blue-700">#</span>
      {label}
    </Link>
  );
};
