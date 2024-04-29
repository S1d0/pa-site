import '@/app/ui/global.css';
import MobileNav from '@/app/ui/navbar/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='scroll-smooth'>
      <MobileNav />

        {children}
        </body>
    </html>
  );
}
