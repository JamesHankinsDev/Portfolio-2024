'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import ContactMe from './ContactMe';
import { usePathname } from 'next/navigation';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<string | null>(null);
  const pathname = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      className="bg-secondary text-primary w-screen border-b-2 border-tirtiary"
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-tirtiary',
        ],
      }}
    >
      <NavbarBrand>
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            onClick={() => setActiveTab('Landing')}
          >
            <strong>James Hankins</strong>
          </Link>
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={`${pathname}` === '/AboutMe'}>
          <Link color="foreground" href="/AboutMe">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive={`${pathname}` === '/WorkHistory'}>
          <Link color="foreground" href="/WorkHistory">
            Resume
          </Link>
        </NavbarItem>
        <NavbarItem isActive={`${pathname}` === '/ProjectWork'}>
          <Link color="foreground" href="/ProjectWork">
            Project Work
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ContactMe />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
