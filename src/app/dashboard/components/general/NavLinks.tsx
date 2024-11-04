"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrUserWorker } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { RxActivityLog, RxDashboard, RxPerson } from "react-icons/rx";

const links = [
  { name: "Home", href: "/", icon: IoHomeOutline, bg: "bg-purple-500" },
  { name: "Products", href: "/dashboard/products", icon: RxDashboard },
  { name: "Categories", href: "/dashboard/categories", icon: RxActivityLog },
  { name: "Users", href: "/dashboard/users", icon: RxPerson },
  { name: "Workers", href: "/dashboard/workers", icon: GrUserWorker },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link: any) => {
        const LinkIcon = link.icon;
        const isHome = link.name === "Home";
        const isSelected = pathname === link.href;
        return (
          <Link key={link.name} href={link.href} passHref>
            <div
              className={clsx(
                "flex h-[48px] items-center justify-center gap-2 rounded-lg bg-gray-100 cursor-pointer my-4 p-3 md:flex-none md:justify-start md:p-2 md:px-3 transition-colors duration-500",
                {
                  [link.bg]: isHome,
                  "text-white": isHome,
                  "bg-gray-300": isSelected && !isHome,
                  "hover:bg-gray-400": !isSelected,
                  "hover:bg-purple-700": isHome && !isSelected,
                }
              )}
            >
              <LinkIcon size={20} />
            </div>
          </Link>
        );
      })}
    </>
  );
}
