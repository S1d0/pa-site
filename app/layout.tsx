import '@/app/ui/global.css';
import MobileNav from '@/app/ui/navbar/navbar';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth antialiased`}>
      <MobileNav />

        {children}
        </body>
    </html>
  );
}
