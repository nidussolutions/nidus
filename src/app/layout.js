import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Provider } from '@/components/ui/provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'NIDUS | O Berço da Inovação',
  description: 'O ninho da inovação. Onde tudo começa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ptbr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
