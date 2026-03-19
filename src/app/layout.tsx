import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Add 700 for your bold headers
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Epic Games Store Clone',
  description: 'Recreated with Next.js and Zustand',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-[#121212] text-white`}>
        {children}
      </body>
    </html>
  );
}