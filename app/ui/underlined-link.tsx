'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UnderlineLinkProp } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function UnderlineLink(linkProp: UnderlineLinkProp) {
  const pathname = usePathname();

  return (
    <Link
      key={linkProp.name}
      href={linkProp.href}
      className={clsx(
        'group text-sm font-medium uppercase transition-all duration-300 ease-in-out',
        {
          'text-indigo-600': pathname === linkProp.href,
        },
      )}
    >
      <span className="bg-gradient-to-r from-indigo-500 to-indigo-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat py-2 transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]">
        {linkProp.name}
      </span>
    </Link>
  );
}
