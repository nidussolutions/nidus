import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Provider } from '@/components/ui/provider';
import Article from '@/components/Article';

export const metadata = {
  title: 'NIDUS | O Berço da Inovação',
  description: 'O ninho da inovação. Onde tudo começa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ptbr" suppressHydrationWarning>
      <body>
        <Provider>
          <Article>{children}</Article>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
