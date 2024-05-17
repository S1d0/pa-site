'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import {ReactNode} from "react";


interface Props {
    children: ReactNode;
    href: string
}
export default function UnderlineLink({children, href}: Props) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={clsx(
                'group transition-all duration-300 ease-in-out',
                {
                    'text-indigo-600': pathname === href,
                },
            )}
        >
            <div className="flex">
      <div
          className="self-start bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat py-2 transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]">
        {children}
      </div>
            </div>
        </Link>
    );
}
