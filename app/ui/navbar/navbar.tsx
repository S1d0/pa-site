'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { useState } from 'react';
import { Logo } from './palogo';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

const links = [
  { name: 'realizacje', href: '/projects' },
  { name: 'o nas', href: '/about' },
  { name: 'kontakt', href: '/contact' },
];

export default function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-stone-100 py-2"
    >
      <Link className="hidden sm:flex" href="/">
        <NavbarBrand>
          <div className="hidden size-24 sm:flex">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold uppercase">P&A wykończenia</h1>
        </NavbarBrand>
      </Link>
      <NavbarContent className="hidden sm:flex" justify="end">
        {links.map((link) => (
          <NavbarItem
          key={`navitem_${link.name}`}
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'group text-medium font-bold uppercase transition-all duration-300 ease-in-out',
                {
                  'text-indigo-600': pathname === link.href,
                },
              )}
            >
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat py-2 transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]">
                {link.name}
              </span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarBrand>
          <h1 className="text-xl font-bold uppercase">P&A wykończenia</h1>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarMenu>
        {links.map((link, inddex) => (
          <NavbarMenuItem
          key={`navmenu_${link.name}s`}
          >
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'w-full text-medium font-semibold hover:text-indigo-600',
                {
                  'text-indigo-600': pathname === link.href,
                },
              )}
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
