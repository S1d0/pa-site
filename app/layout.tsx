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
      <body className={`${inter.className} scroll-smooth antialiased flex flex-col h-screen justify-between`}>
          <MobileNav />
          <div className="mb-auto grow">
              {children}
          </div>
          <Footer />
        </body>
    </html>
  );
}
