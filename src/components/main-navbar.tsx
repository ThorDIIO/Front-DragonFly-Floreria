import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Logo from '../../public/LOGO-LETRA.png';

export default function NavbarCustom({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: 'Home', href: '/' },
    { label: 'Productos', href: '/catalogo' },
    { label: 'Cuidados', href: '/cuidado-planta' },
    { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  ];

  return (
    <>
      <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
        </NavbarContent>

        <NavbarBrand className="max-sm:hidden">
          <Image alt="Logo" src={Logo} className="rounded-full w-8 h-8" />
        </NavbarBrand>
        <NavbarContent justify="center" className="max-sm:hidden">
          {items.map((item, index) => (
            <NavbarItem key={`${item}-${index}`} isActive={path === item.href}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/auth/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="/auth/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {items.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} isActive={path === item.href}>
              <Link className="w-full" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className='pt-10'>{children}</div>
    </>
  );
}
