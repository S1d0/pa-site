
  // Map of links to display in the side navigation.

import Link from "next/link";

  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projekty', href: '/dashboard/invoices'},
    { name: 'Realizacje', href: '/dashboard/invoices', },
    { name: 'Kontakt', href: '/dashboard/customers' },
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className=""
            >
              <p className="px-8 py-4 transition text-white hover:text-bla dark:hover:text-teal-400">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  