import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-indigo-800 shadow mt-12 sm:px-8">
            <div className="w-full p-4 md:py-8 text-white/80">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/"
                       className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap">P&A Wykończenia</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">O nas</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">Polityka prywatności</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:underline me-4 md:me-6">Realizacje</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Kontakt</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <span className="block text-sm sm:text-center">© 2023 <Link
                    href="/" className="hover:underline">P&A™</Link>. Wszelkie prawa zastrzeżone.</span>
            </div>
        </footer>
    )
}