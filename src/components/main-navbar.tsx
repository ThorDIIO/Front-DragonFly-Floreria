import { useAuth } from "@/app/context/auth-context";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiExit } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Logo from "../../public/LOGO-LETRA.png";
import { CgShoppingCart } from "react-icons/cg";
import { DeleteIcon } from "@/utils/icons/DeleteIcon";

export default function NavbarCustom({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout, user } = useAuth();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "/" },
    { label: "Productos", href: "/catalogo" },
    { label: "Cuidados", href: "/cuidado-planta" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
  ];

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarBrand className="max-sm:hidden pb-2">
          <Link href={"/"}>
            <Image
              alt="Logo"
              src={Logo}
              height={130}
              width={130}
              className=""
            />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center" className="max-sm:hidden">
          {items.map((item, index) => (
            <NavbarItem key={`${item}-${index}`} isActive={path === item.href}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        {!user ? (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="warning"
                href="/auth/register"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem>
              <p className="text-sm text-gray-400">{user.fullName}</p>
            </NavbarItem>

            {user.role.some((r: any) => r.authority === "ADMIN") && (
              <NavbarItem>
                <Link href="/dashboard/products">
                  <RxDashboard
                    className="cursor-pointer text-green-500"
                    size={20}
                  />
                </Link>
              </NavbarItem>
            )}
            <NavbarItem>
              <Dropdown className="select-none">
                <DropdownTrigger>
                  <Button variant="flat">
                    <CgShoppingCart size={20} />
                  </Button>
                </DropdownTrigger>

                <DropdownMenu onAction={(key) => console.log(key)}>
                  <DropdownItem key="shopping-cart">
                    <table>
                      <tr className="flex items-center gap-x-4 my-2">
                        <td>
                          <Image
                            src="/orchid.webp"
                            alt="Picture of the author"
                            width={40}
                            height={40}
                          />
                        </td>
                        <td>
                          <p>Producto 2</p>
                          <p>150.00</p>
                        </td>
                      </tr>
                    </table>
                    <hr className="mt-4" />
                  </DropdownItem>
                  <DropdownItem
                    key="delete"
                    color="danger"
                    startContent={<DeleteIcon className="text-xl" />}
                  >
                    Eliminar
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <BiExit
                className="cursor-pointer text-red-500"
                size={20}
                onClick={() => logout()}
              />
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarMenu>
          {items.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={path === item.href}
            >
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="pt-10">{children}</div>
    </>
  );
}
