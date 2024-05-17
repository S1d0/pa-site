import '@/app/ui/global.css';
import MobileNav from '@/app/ui/navbar/navbar';
import { inter } from '@/app/ui/fonts'
import Footer from "@/app/ui/footer/footer";

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
          <Footer />
        </body>
    </html>
  );
}
