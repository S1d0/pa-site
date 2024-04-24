'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleMobileNav = () => {
    setNav(!nav);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-10 sm:z-10">
      <nav className="justify-betwen flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1 m-auto items-center">
          <Link href="#" className="">
            <span className="sr-only">Your Company</span>
            <Image
              src="/logo1.png"
              width={100}
              height={100}
              alt="CosTam"
              className="hidden rounded-lg opacity-50 sm:visible sm:block"
            />
            <h1 className="text-lg font-bold text-stone-200 sm:invisible">
              P & A wykończenia
            </h1>
          </Link>
          <h1 className='hidden sm:flex text-stone-200 font-bold text-5xl tracking-widest'>P&A realizacje wykończeń</h1>
        </div>
        {/* Desktop menu */}
        <div className="flex gap-2 items-center">
          <div
            className={clsx(
              nav
                ? 'hidden'
                : 'relative hidden rounded-lg border-b-stone-200 px-12 py-2 lg:flex lg:gap-x-8',
            )}
          >
            <Link
              href="#"
              className="font-semibold leading-6 text-stone-800 hover:text-white"
            >
              Realizacje
            </Link>
            <div className="text-stone-800">|</div>
            <Link
              href="#"
              className="font-semibold leading-6 text-stone-800 hover:text-white"
            >
              Projekty
            </Link>
            <div className="text-stone-800">|</div>
            <Link
              href="#"
              className="font-semibold leading-6 text-stone-800  hover:text-white"
            >
              Kontakt
            </Link>
          </div>
          <HiMenuAlt1
              className={clsx(nav ? 'hidden' : 'cursor-pointer text-white hover:text-stone-800')}
              onClick={handleMobileNav}
              size={25}
            />
        
        </div>

        {/* Mobile menu */}
        <div
          className={clsx(nav ? 'cursor-pointer' : 'hidden')}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="-m-1.5 p-1.5"></div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleMobileNav}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-800 hover:text-stone-50"
                  >
                    Realizacje
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-800 hover:text-stone-50"
                  >
                    Projekty
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-800 hover:text-white"
                  >
                    Kontakt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
