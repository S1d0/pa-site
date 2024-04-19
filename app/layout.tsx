import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='flex h-full bg-zinc-50 dark:bg-black'>{children}</body>
    </html>
  );
}
