import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REHAND - Klinika Fizjoterapii | Andrzej Krzywonos Rybnik',
  description: 'REHAND to prywatna klinika rehabilitacyjna prowadzona przez doświadczonego fizjoterapeutę i osteopatę Andrzeja Krzywonosa w Rybniku. 29 lat doświadczenia, ocena 4.5/5 na ZnanyLekarz.',
  keywords: 'fizjoterapia Rybnik, osteopatia, rehabilitacja, Andrzej Krzywonos, terapia manualna, REHAND',
  authors: [{ name: 'Andrzej Krzywonos' }],
  openGraph: {
    title: 'REHAND - Klinika Fizjoterapii Rybnik',
    description: '29 lat doświadczenia w fizjoterapii i rehabilitacji. Andrzej Krzywonos - fizjoterapeuta i osteopata.',
    url: 'https://rehand-rybnik.pl',
    siteName: 'REHAND Klinika Fizjoterapii',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}